import Comic from '../models/comicModel.js';
import { ErrorResponse } from '../utils/errorHandler.js';

// Create a new comic
export const createComic = async (req, res, next) => {
    try {
        const comic = new Comic(req.body);
        const savedComic = await comic.save();
        res.status(201).json(savedComic);
    } catch (error) {
        next(new ErrorResponse(error.message, 400)); // Pass error to the error handler
    }
};

// Fetch all comics with pagination, filtering, and sorting
export const getComics = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'asc', ...filters } = req.query;
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            sort: { [sortBy]: order === 'asc' ? 1 : -1 },
        };
        const comics = await Comic.paginate(filters, options);
        res.status(200).json(comics);
    } catch (error) {
        next(new ErrorResponse(error.message, 500)); // Pass error to the error handler
    }
};

// Get comic by ID
export const getComicById = async (req, res, next) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) {
            return next(new ErrorResponse('Comic not found', 404));
        }
        res.status(200).json(comic);
    } catch (error) {
        next(new ErrorResponse(error.message, 500)); // Pass error to the error handler
    }
};

// Update comic
export const updateComic = async (req, res, next) => {
    try {
        const updatedComic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedComic) {
            return next(new ErrorResponse('Comic not found', 404));
        }
        res.status(200).json(updatedComic);
    } catch (error) {
        next(new ErrorResponse(error.message, 400)); // Pass error to the error handler
    }
};

// Delete comic
export const deleteComic = async (req, res, next) => {
    try {
        const deletedComic = await Comic.findByIdAndDelete(req.params.id);
        if (!deletedComic) {
            return next(new ErrorResponse('Comic not found', 404));
        }
        res.status(200).json({ message: 'Comic deleted successfully' });
    } catch (error) {
        next(new ErrorResponse(error.message, 500)); // Pass error to the error handler
    }
};
