# React TypeScript Todo Application

## Template Features
- Configured tailwind & postcss
- The @alias directory system configured for the src folder
- Structured folder organization
- React Router included in project build
- i18n connected and configured

## Project Structure
```
public/
src/
    lib/         # Libraries and utilities
    pages/       # Application pages
    router/      # Router configuration
    types/       # TypeScript declarations
    templates/   # Reusable components
    utils/       # Utility functions
    locale/      # i18n configuration
    components/  # React components
```

---
Created by Zemtsow Nikolay

<!-- Project Review -->

## Project Requirements

### Core Features

#### 1. Task Management
- Add, edit, delete, and mark tasks as complete (DONE)
- Tasks include title and description (DONE)

#### 2. Categories and Filters
- Categorize tasks (Work, Personal, etc.) (DONE)
- Filter tasks by category or status (DONE)

#### 3. Priority System
- Priority levels (High, Medium, Low) (DONE)
- Sort tasks by priority (NOTE: Sorting works as filtering. Filters could affect items count while sorting should not)

#### 4. Search and Pagination
- Search tasks by keyword (DONE) (NOTE: Search + Filters/Sorting should work should be not conflicting. Here search is take over filters. Anyway it is not highlighted in requirements)
- Pagination or infinite scrolling (DONE)

#### 5. Responsive Design
- Desktop and mobile compatibility (DONE)

#### 6. Local Storage
- Data persistence between sessions (DONE)

### Technical Requirements
1. **React and TypeScript**
   - Strong type safety (DONE)
   - Defined types/interfaces for components, props, and state (DONE)

2. **State Management**
   - React Context or Redux (DONE)

### Optional Features
- [ ] Drag-and-Drop task reordering
- [ ] Dark/Light mode toggle
- [ ] Task reminder notifications
- [ ] API Integration with JSONPlaceholder

## Getting Started
[Add instructions for local setup] (NOTE: It is absent but setup is common for all vite/react based SPA apps)

## Evaluation Criteria
1. **Functionality**: All features working as expected (DONE) (NOTE: Non trivial cases works incorrect)
2. **Code Quality**: Clean, modular, well-documented code 
3. **TypeScript**: Proper use of types, interfaces, and generics (DONE) (NOTE: In general it is satisfied. See Issues section)
4. **UI/UX**: Intuitive and visually appealing interface (DONE)
5. **Bonus**: Implementation of optional features 

# Notes
Codebase bound notes and advices can be found as `NOTE:` comments or as `NOTE.md` files in the codebase

# Issues
- Add 11 tasks. Move second page delete last element page is remain the same, so user don't see remained 10 tasks.
- Sorting works as filtering. Filters could affect items count while sorting should not.