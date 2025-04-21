<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# JsHelpers - React Application

This is a React application built with Vite. When generating code for this project:

## Code Style Guide
- Use functional components with hooks instead of class components
- Prefer destructured props in component parameters
- Use ES6+ features (arrow functions, template literals, etc.)
- Use meaningful variable and function names
- Use JSX syntax for UI components

## State Management
- Use React hooks (useState, useEffect, useMemo, useCallback) appropriately
- For complex state, consider using useReducer or a dedicated state management library

## File Structure
- Component files should be named with PascalCase
- Place related components in the same directory
- Group helper functions and utilities in dedicated files/directories

## Best Practices
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Ensure proper error handling
- Follow accessibility best practices
- Implement proper prop validation