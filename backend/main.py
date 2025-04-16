from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import datetime
import openpyxl
from openpyxl import Workbook
import os
from pathlib import Path

app = FastAPI(title="Contact Form API")

# Enable CORS with specific origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the contact form data model
class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Path to the Excel file
excel_file = Path("contact_submissions.xlsx")

# Initialize Excel file if it doesn't exist
if not excel_file.exists():
    wb = Workbook()
    ws = wb.active
    ws.title = "Submissions"
    ws.append(["Name", "Email", "Subject", "Message", "Timestamp"])
    wb.save(excel_file)

@app.get("/")
async def root():
    return {"message": "Contact Form API is running"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/contact")
async def submit_contact_form(form: ContactForm):
    try:
        # Load the workbook
        wb = openpyxl.load_workbook(excel_file)
        ws = wb.active
        
        # Add new submission
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ws.append([
            form.name,
            form.email,
            form.subject,
            form.message,
            timestamp
        ])
        
        # Save the workbook
        wb.save(excel_file)
        
        return {"message": "Contact form submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000) 