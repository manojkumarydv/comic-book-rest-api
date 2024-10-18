# Comic Book Store Backend

This project provides the backend for a React-based e-commerce store, allowing the management and display of comic books as inventory items. The backend includes REST API functionality for creating, reading, updating, and deleting comic book records.

## Features

- **Comic Book Management API**: Create, update, and delete comic book records.
- **Comic Book List API**: Fetch a list of comic books with pagination, filtering, and sorting.
- **Comic Book Details API**: Retrieve detailed information about a specific comic book.
- **Error Handling**: Centralized error handling for consistent responses.
- **Pagination and Filtering**: Fetch data with options for pagination and filtering based on different attributes.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js to build the REST API.
- **MongoDB**: NoSQL database to store comic book details.
- **Mongoose**: MongoDB object modeling for Node.js.
- **ES6**: Use of modern JavaScript (ECMAScript 6) features.

## Getting Started

### Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (either locally installed or use MongoDB Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/comic-book-store-backend.git
   cd comic-book-store-backend
   
2. **Install dependencies**

   Run the following command to install all the required dependencies:

   ```bash
   npm install

  3. **Set up environment variables**
     ```bash
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     
  5. **Start the application**
     ```bash
     npm run dev
     
  7. **Test the API Endpoints**
     - POST /api/comics - Create a new comic book.
     - GET /api/comics - Retrieve all comics with pagination, filtering, and sorting.
     - GET /api/comics/:id - Fetch a comic book by its ID.
     - PUT /api/comics/:id - Update a comic book by its ID.
     - DELETE /api/comics/:id - Delete a comic book by its ID.


