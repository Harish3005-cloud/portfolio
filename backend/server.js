const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the Excel file
const excelFilePath = path.join(__dirname, 'contact_submissions.xlsx');

// Function to create or load Excel file
function initializeExcelFile() {
    if (!fs.existsSync(excelFilePath)) {
        // Create a new workbook with headers
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([
            ['Name', 'Email', 'Subject', 'Message', 'Timestamp']
        ]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');
        XLSX.writeFile(workbook, excelFilePath);
    }
}

// Initialize Excel file on server start
initializeExcelFile();

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Load existing workbook
        const workbook = XLSX.readFile(excelFilePath);
        const worksheet = workbook.Sheets['Submissions'];
        
        // Get the last row number
        const lastRow = XLSX.utils.decode_range(worksheet['!ref']).e.r + 1;
        
        // Add new submission
        const newRow = [name, email, subject, message, new Date().toISOString()];
        XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: `A${lastRow + 1}` });
        
        // Update the worksheet reference
        worksheet['!ref'] = XLSX.utils.encode_range({
            s: { r: 0, c: 0 },
            e: { r: lastRow, c: 4 }
        });
        
        // Save the workbook
        XLSX.writeFile(workbook, excelFilePath);
        
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ error: 'Failed to process contact form submission' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 