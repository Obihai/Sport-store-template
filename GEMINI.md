# Project Overview

This is a simple e-commerce store built with a Django backend and a React frontend.

**Backend:**
*   **Framework:** Django
*   **API:** Django REST Framework
*   **Database:** SQLite (for development)
*   **Features:**
    *   Product management API with CRUD operations.
    *   Image uploads for products.

**Frontend:**
*   **Framework:** React (using Create React App)
*   **HTTP Client:** Axios
*   **Routing:** React Router
*   **Styling:** Bootstrap
*   **Features:**
    *   Product listing and detail pages.
    *   Shopping cart and checkout (placeholders).

# Building and Running

## Backend (Django)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Activate the virtual environment:**
    ```bash
    source venv/bin/activate
    ```

3.  **Run the development server:**
    ```bash
    python manage.py runserver
    ```
    The backend will be available at `http://127.0.0.1:8000`.

## Frontend (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```
    The frontend will be available at `http://localhost:3000`.

# Development Conventions

*   The backend and frontend are in separate directories (`backend` and `frontend`).
*   The Django backend exposes a REST API at `/api/`.
*   The React frontend uses a proxy to communicate with the backend API to avoid CORS issues in development.
*   React components are located in `frontend/src/components`.
