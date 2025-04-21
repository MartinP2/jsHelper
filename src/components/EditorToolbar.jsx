import { useCallback } from 'react';
import PropTypes from 'prop-types';
import './EditorToolbar.css';

const EditorToolbar = ({ onFormat }) => {
  const formatButtons = [
    { id: 'bold', label: 'Bold', icon: 'B', format: 'strong', tooltip: 'Bold (Ctrl+B)' },
    { id: 'italic', label: 'Italic', icon: 'I', format: 'em', tooltip: 'Italic (Ctrl+I)' },
    { id: 'underline', label: 'Underline', icon: 'U', format: 'u', tooltip: 'Underline (Ctrl+U)' },
    { id: 'separator1', type: 'separator' },
    { id: 'h1', label: 'H1', icon: 'H1', format: 'h1', tooltip: 'Heading 1' },
    { id: 'h2', label: 'H2', icon: 'H2', format: 'h2', tooltip: 'Heading 2' },
    { id: 'h3', label: 'H3', icon: 'H3', format: 'h3', tooltip: 'Heading 3' },
    { id: 'separator2', type: 'separator' },
    { id: 'ul', label: 'Bullet List', icon: '•', format: 'ul', tooltip: 'Bullet List' },
    { id: 'ol', label: 'Numbered List', icon: '1.', format: 'ol', tooltip: 'Numbered List' },
    { id: 'separator3', type: 'separator' },
    { id: 'link', label: 'Link', icon: '🔗', format: 'a', tooltip: 'Insert Link' },
    { id: 'blockquote', label: 'Quote', icon: '"', format: 'blockquote', tooltip: 'Blockquote' },
    { id: 'separator4', type: 'separator' },
    { id: 'br', label: 'Line Break', icon: '↵', format: 'br', tooltip: 'Insert Line Break' },
  ];

  const handleFormatClick = useCallback((format) => {
    onFormat(format);
  }, [onFormat]);

  return (
    <div className="editor-toolbar" role="toolbar" aria-label="Text formatting options">
      {formatButtons.map((button) => (
        button.type === 'separator' ? (
          <span key={button.id} className="toolbar-separator" />
        ) : (
          <button
            key={button.id}
            className="toolbar-button"
            onClick={() => handleFormatClick(button.format)}
            aria-label={button.label}
            title={button.tooltip}
          >
            <span className="toolbar-icon">{button.icon}</span>
          </button>
        )
      ))}
    </div>
  );
};

EditorToolbar.propTypes = {
  onFormat: PropTypes.func.isRequired
};

export default EditorToolbar;