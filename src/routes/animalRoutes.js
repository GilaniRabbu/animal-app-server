import express from "express";
import { createAnimal, getAnimals, filterAnimalsByCategory } from "../controllers/animalController.js";

const router = express.Router();

router.post("/", createAnimal); // Create a new animal
router.get("/", getAnimals); // Get all animals
router.get("/category/:categoryId", filterAnimalsByCategory); // Filter animals by category

export default router;
