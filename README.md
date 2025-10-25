# Dynamic Smart Form 🧠

## Description
This project was developed as part of a **training program at Dev Wave**.  
It is a **dynamic React form** built with **Vite** and **Material UI**, including **20 input fields** with **dynamic validation** handled with minimal code.  
The form automatically **resets** after successful submission.

---

## Features
- Dynamic generation of all form fields from a single **configuration array** (`formFields.js`).
- Single **generic validation function** for all fields (`validateField`).
- Input types include: text, email, number, password, date, tel, url, etc.
- **Material UI** components for professional design and responsive layout.
- Form clears automatically after submission.
- Easy to **add, remove, or modify fields** without touching validation logic.
- Modular structure for **maintainable and reusable code**.

---

## Project Structure
smart-form/
├── index.html
├── package.json
├── vite.config.js
├── src/
│ ├── main.jsx # React entry point
│ ├── App.jsx # Main app component
│ ├── components/
│ │ └── FormField.jsx # Reusable input component
│ ├── data/
│ │ └── formFields.js # Fields configuration array
│ ├── pages/
│ │ └── DynamicForm.jsx # Form page with logic
│ └── utils/
│ └── validation.js # Generic validation function

---

## How to Run
1. Clone the repository:
```bash
git clone https://github.com/Mariam-Huussein/Smart-Form.git
cd smart-form
Install dependencies:

npm install


Run the development server:

npm run dev


Open the URL shown in the terminal (usually http://localhost:5173/).

How It Works

Form Fields: All fields are defined in formFields.js as an array of objects with properties like name, type, label, required, minLength, pattern, etc.

Dynamic Rendering: DynamicForm.jsx maps over this array to render all fields using the reusable FormField component.

Validation: validateField checks each field according to its configuration. Errors are displayed below each input using MUI’s helperText.

Submission: On submit, the form validates all inputs, logs the data to the console if valid, and then resets the form for new input.

Tech Stack

React 18

Vite (fast development bundler)

Material UI (MUI) for UI components

JavaScript ES6+

CSS (optional for custom styling)

Advantages

Minimal repetitive code.

Highly maintainable and scalable.

Professional UI using Material UI.

Easy to extend: add/remove fields just by updating formFields.js.

Developed as part of a Dev Wave training program. ✅
