# Project Setup Instructions

##### 1. slider-theme-yellow Clone the Repository: First, clone the Git repository to your local machine

##### 2. Install Dependencies: Navigate to the project directory and install the necessary dependencies using npm:

- Navigate to the server directory:

```bash
cd server
```

- Start the JSON server

```bash
json-server --watch db.json
```

##### 3. Login Instructions:

- Log in using your email and password. Note: A signup function has not been implemented yet.

- Once logged in, the home page will contain various sections you can navigate by clicking.

## Key Features and Implementation:

### 1. Authentication Flow:

- `Objective`: Implemented using Redux Toolkit and `json-server`.

### 2. Form with Custom Validation Rules:

- `Objective`: Validation for email and password is located in `utils/helper.js` under the `validateForm` function.

### 3. Infinite Scrolling:

- `Objective`: Implemented on the homepage.
- You can find the relevant code under the components folder (e.g., `components/specific/InfiniteScroll`).

### 4. API Data Caching:

- `Objective`: Cached data functionality is available under the "Cached Data" section in the header.
- The caching function is implemented using Local Storage, located in `utils/cache.js`.
- The app ensures that subsequent requests for the same data use cached data to reduce API calls. A refresh button allows users to clear the cache and fetch fresh data.

### 5. Responsive Layout with CSS Grid/Flexbox:

- `Objective`: The layout is built using CSS Grid and Flexbox. You can find the relevant implementation in the `layout/AppLayout` folder.

### 6. Multi-Step Form:

- Objective: Available by clicking the "Multi-Step Form" in the header section.

- The code can be found in the `pages/MultiForm` folder. This component allows users to complete forms in multiple steps.

### 7. Custom Hooks:

- `Objective`: Custom `hooks` are located in the hooks folder. Though caching for the hook hasn’t been implemented yet, the base functionality is in place.

### 8.Component Library Integration:
- `Objective`: The Material-UI (MUI) component library has been integrated throughout the application to streamline UI development and ensure consistency.
