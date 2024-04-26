import express from "express";
import {
    getBooks,
    getBookById,
    getBookByAuthor,
    getBookByYear,
    addBook,
    updateBook,
    deleteBook,
} from "../controllers/book.js";

const router= express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.get("/:author", getBookByAuthor);

router.get("/:Year", getBookByYear);

router.post("/", addBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;