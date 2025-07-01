# Portfolio

My personal portfolio built with Next.js and custom CSS styles.

## Features

- Built with [Next.js](https://nextjs.org/)
- Custom CSS modules for styling
- PDF CV generation using [@react-pdf/renderer](https://react-pdf.org/)
- QR code generation for sharing
- TypeScript support
- Linting with ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will:
- Generate the CV JSON and PDF files (with caching)
- Generate a QR code
- Build the Next.js app

## Scripts

### Main Scripts

- **dev** – Start the development server with Turbopack and Node.js inspector enabled
- **build** – Generate CV, QR code, and build the Next.js app
- **start** – Start the production server
- **lint** – Run ESLint

### Custom Scripts (in `src/scripts/`)

#### `generate:cv-json`

```bash
npm run generate:cv-json
```
Runs `src/scripts/generate-cv-json.ts`.  
**Purpose:** Generates a `cv.json` file from your main data source.  
**How it works:**  
- Reads your main data (from `data/data.json`).
- Serializes and saves it as `cv.json` for use in PDF and API endpoints.

#### `generate:cv-pdf`

```bash
npm run generate:cv-pdf
```
Runs `src/scripts/generate-cv-pdf.ts`.  
**Purpose:** Generates a PDF version of your CV using React components and `@react-pdf/renderer`.  
**How it works:**  
- Loads data from `cv.json`.
- Renders the CV as a PDF.
- **Hash mechanism:**  
  - Before generating, it computes a hash of the current CV data.
  - If the hash matches the last generated version, PDF generation is skipped (to save time and resources).
  - If the data has changed, a new PDF is generated and the hash is updated.

#### `generate:cv`

```bash
npm run generate:cv
```
Runs both `generate:cv-json` and `generate:cv-pdf` in sequence.

#### `generate:qr`

```bash
npm run generate:qr
```
Runs `src/scripts/generate-qr-code.ts`.  
**Purpose:** Generates a QR code image for sharing your portfolio or CV.  
**How it works:**  
- Uses the `qrcode` package.
- Encodes a URL (e.g., your portfolio or CV download link) as a QR code image.

## Scripts Folder

All custom scripts are located in [`src/scripts`](src/scripts):

- `generate-cv-json.ts` – Generates a JSON representation of your CV.
- `generate-cv-pdf.ts` – Generates a PDF version of your CV, with hash-based caching.
- `generate-qr-code.ts` – Generates a QR code for sharing.

## License

This project is private and not intended for redistribution.
