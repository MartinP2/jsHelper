# JsHelpers - React Text-to-HTML Converter

A modern React application built with Vite that provides tools for converting and formatting text to HTML. Easily add HTML markup to your text with a user-friendly interface.

![JsHelpers Screenshot](./public/screenshot.png)

## Features

- **Text-to-HTML Conversion**: Transform plain text into properly formatted HTML
- **Rich Text Formatting**: Add HTML tags like headings, lists, links, and more
- **Live Preview**: See the HTML output rendered in real-time
- **User-Friendly Interface**: Intuitive toolbar for quick formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   https://github.com/MartinP2/jsHelper.git
   cd JsHelpers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Type or paste your text in the input area on the left
2. Use the toolbar buttons to apply HTML formatting to selected text:
   - Headings (H1, H2, H3)
   - Text styles (Bold, Italic, Underline)
   - Lists (Ordered, Unordered)
   - Links
   - Blockquotes
   - Line breaks
3. Click the "Convert" button to generate the HTML
4. View the raw HTML and rendered preview in the output area

## Development

This project uses:
- React 19
- Vite 6
- ESLint 9

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── EditorToolbar/ # Formatting toolbar
│   │   ├── TextConverter/ # Main text conversion component
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
