# Storybook
# Frontend Assessment – React Components

This project is part of the Frontend Assessment for the internship position. It includes two reusable React components – **InputField** and **DataTable** – built using **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.

---

## 📂 Folder Structure

frontend-assessment/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── InputField/
│ │ └── DataTable/
│ ├── index.css
│ ├── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md




---

## 🚀 Technologies Used

- **React** – For building UI components
- **TypeScript** – For type safety
- **Tailwind CSS** – For styling
- **Storybook** – For documenting and testing components
- **Jest / React Testing Library** – (Optional) for unit testing

---

## 📥 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/masterroy0007/frontend-assessment.git
   cd frontend-assessment
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Run Storybook to see component previews:

bash
Copy code
npm run storybook
📖 Components Overview
✅ InputField
A flexible and reusable input component that supports:

Variants: filled, outlined, ghost

Sizes: small, medium, large

States: disabled, invalid, loading

Props: label, placeholder, helper text, error message

Accessibility and theming support

✅ DataTable
A dynamic table component that includes:

Displaying tabular data

Sorting columns

Selecting rows (single or multiple)

Loading state and empty state handling

Generic type support with proper typing

🌐 Storybook Preview
You can view the interactive component previews here:

https://68c15ae911ed2dc4c21a6bcd-wxhgfgxtzn.chromatic.com/?path=/docs/configure-your-project--docs

🛠 Approach
Used functional components with TypeScript for better scalability

Styled using Tailwind CSS to ensure consistency and responsiveness

Documented each component in Storybook for easy review and testing

Ensured clean and maintainable code by following best practices

Added basic accessibility using ARIA labels and proper semantics

📌 Notes
The project strictly avoids using AI-based builders or pre-built component libraries.

Focus has been on writing clean, reusable, and scalable code with proper types.

All configurations, scripts, and instructions are included in this repository.

