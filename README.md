# HRnet React Application

HRnet is an employee management application built with **React**, **Redux**, and **Material-UI**. This application allows you to create, view, and manage employee information.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/hrnet-react.git
cd hrnet-react
```

2. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Getting Started

1. Start the JSON server for the database:

```bash
npm run start:db
```

or

```bash
yarn start:db
```

2. Start the application in development mode:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and go to `http://localhost:3000`.

## Scripts

- `npm run dev`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the built application.
- `npm run lint`: Lints the source code.
- `npm run start:db`: Starts the JSON server for the database.

## Project Structure

```text
├── public
│   └── index.html
├── src
│   ├── app
│   │   └── App.tsx
│   ├── assets
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── constants
│   │   └── states.ts
│   ├── features
│   │   ├── employeeCreation
│   │   │   └── EmployeeCreationPage.tsx
│   │   └── employeeList
│   │       └── EmployeeListPage.tsx
│   ├── models
│   │   └── Employee.ts
│   ├── redux
│   │   ├── actions
│   │   │   └── employeeActions.ts
│   │   ├── slices
│   │   │   └── employeeSlice.ts
│   │   └── store.ts
│   ├── routes
│   │   ├── index.tsx
│   │   └── PageNotFound.tsx
│   ├── types
│   │   └── declarations.d.ts
│   └── main.tsx
├── .gitignore
├── .prettierrc
├── db.json
├── eslint.config.js
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

## Dependencies

- React
- Redux Toolkit
- React Router DOM
- Material-UI
- Day.js
- React Hook Form
- JSON Server

## ESLint and Prettier Configuration

The project uses **ESLint** and **Prettier** to maintain clean and consistent code. The configurations can be found in the `.eslintrc.js` and `.prettierrc` files.
