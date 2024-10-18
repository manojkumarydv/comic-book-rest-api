// Custom error class extending the default Error class
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Middleware function to handle errors
const errorHandler = (err, req, res, next) => {
    // Set default status code and message
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Server Error';

    // Log error details to console (useful for debugging)
    console.error(err);

    // Send the error response
    res.status(statusCode).json({
        success: false,
        error: message
    });
};

export { errorHandler, ErrorResponse };
