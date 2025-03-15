# HRnet React Application

HRnet is an employee management application built with **React**, **Redux**, and **Material-UI**. This application allows you to create, view, and manage employee information.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/piirk/hrnet-react.git
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
├── src
│   ├── app
│   ├── assets
│   ├── components
│   ├── constants
│   ├── features
│   ├── models
│   ├── redux
│   ├── routes
│   ├── types
│   └── main.tsx
```

## Dependencies

```json
{
  "dependencies": {
    "react": ">=17.0.0",
    "redux-toolkit": ">=1.5.0",
    "react-router-dom": ">=5.2.0",
    "material-ui": ">=4.11.0",
    "dayjs": ">=1.10.0",
    "react-hook-form": ">=6.0.0",
    "json-server": ">=0.16.0"
  }
}
```

## ESLint and Prettier Configuration

The project uses **ESLint** and **Prettier** to maintain clean and consistent code. The configurations can be found in the `.eslintrc.js` and `.prettierrc` files.
