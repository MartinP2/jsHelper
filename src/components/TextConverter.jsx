import { useState, useCallback, useRef } from 'react';
import EditorToolbar from './EditorToolbar';
import './TextConverter.css';

const TextConverter = () => {
  const [text, setText] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const insertFormatting = useCallback((format) => {
    // Get the textarea element
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Get selection
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    
    let replacement = '';
    let cursorOffset = 0;
    
    // Apply formatting based on tag type
    switch (format) {
      case 'strong':
        replacement = `<strong>${selectedText}</strong>`;
        cursorOffset = 8; // <strong> length
        break;
      case 'em':
        replacement = `<em>${selectedText}</em>`;
        cursorOffset = 4; // <em> length
        break;
      case 'u':
        replacement = `<u>${selectedText}</u>`;
        cursorOffset = 3; // <u> length
        break;
      case 'h1':
        replacement = `<h1>${selectedText}</h1>`;
        cursorOffset = 4; // <h1> length
        break;
      case 'h2':
        replacement = `<h2>${selectedText}</h2>`;
        cursorOffset = 4; // <h2> length
        break;
      case 'h3':
        replacement = `<h3>${selectedText}</h3>`;
        cursorOffset = 4; // <h3> length
        break;
      case 'ul':
        if (selectedText) {
          // Convert each line to a list item
          const items = selectedText.split('\n')
            .map(item => item.trim() ? `  <li>${item}</li>` : '')
            .filter(Boolean)
            .join('\n');
          replacement = `<ul>\n${items}\n</ul>`;
        } else {
          replacement = "<ul>\n  <li></li>\n</ul>";
          cursorOffset = 9; // position after <li>
        }
        break;
      case 'ol':
        if (selectedText) {
          // Convert each line to a list item
          const items = selectedText.split('\n')
            .map(item => item.trim() ? `  <li>${item}</li>` : '')
            .filter(Boolean)
            .join('\n');
          replacement = `<ol>\n${items}\n</ol>`;
        } else {
          replacement = "<ol>\n  <li></li>\n</ol>";
          cursorOffset = 9; // position after <li>
        }
        break;
      case 'a':
        const url = window.prompt('Enter the URL:', 'https://');
        if (url) {
          replacement = `<a href="${url}">${selectedText || url}</a>`;
          cursorOffset = selectedText ? 0 : url.length;
        } else {
          return; // User canceled the prompt
        }
        break;
      case 'blockquote':
        replacement = `<blockquote>${selectedText}</blockquote>`;
        cursorOffset = 12; // <blockquote> length
        break;
      case 'br':
        replacement = '<br>';
        cursorOffset = 4; // <br> length
        break;
      default:
        return;
    }

    // Update text with the new formatted content
    const newText = text.substring(0, start) + replacement + text.substring(end);
    setText(newText);

    // Focus back on textarea and restore selection
    setTimeout(() => {
      textarea.focus();
      // If there was selected text, place cursor after the tag, otherwise inside the tag
      const newPosition = selectedText 
        ? start + replacement.length 
        : start + cursorOffset;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  }, [text]);

  const convertToHtml = useCallback(() => {
    // For this enhanced version, we'll assume text already has HTML markup
    // But we still need to handle line breaks for plain text portions
    let converted = text
      // Only convert standalone line breaks that aren't part of HTML tags
      .replace(/(?<![>])\n(?![<])/g, '<br>');
    
    setHtmlOutput(converted);
  }, [text]);

  return (
    <div className="text-converter">
      <h1 className="converter-header">Convert Text to HTML</h1>
      
      <div className="converter-grid">
        <div className="editor-column">
          <h2>Input Text</h2>
          <EditorToolbar onFormat={insertFormatting} />
          <textarea
            ref={textareaRef}
            className="text-editor"
            value={text}
            onChange={handleTextChange}
            placeholder="Type your text here..."
            aria-label="Text editor input"
          />
        </div>
        
        <div className="button-column">
          <button 
            className="convert-button" 
            onClick={convertToHtml}
            aria-label="Convert text to HTML"
          >
            Convert
          </button>
        </div>
        
        <div className="output-column">
          <h2>HTML Output</h2>
          <div className="html-output">
            <pre>{htmlOutput}</pre>
            <div 
              className="html-preview" 
              dangerouslySetInnerHTML={{ __html: htmlOutput }} 
              aria-live="polite"
              aria-label="HTML output preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextConverter;