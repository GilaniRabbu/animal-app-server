import Animal from "../models/animalModel.js";

// Create a new animal
export const createAnimal = async (req, res) => {
  try {
    const { name, category, imageUrl } = req.body;
    const animal = await Animal.create({ name, category, imageUrl });
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all animals
export const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().populate("category", "name");
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Filter animals by category
export const filterAnimalsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const animals = await Animal.find({ category: categoryId }).populate(
      "category",
      "name"
    );
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
