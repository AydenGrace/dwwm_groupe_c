const Cottage = require("../../models/Cottage/cottage.schema");

const getAll = async (req, res) => {
  const all = await Cottage.find().populate("tags").populate("owner");
  res.json(all);
};

const getAllPreviews = async (req, res) => {
  const all = await Cottage.find(
    {},
    {
      name: 1,
      rating: 1,
      address: 1,
      price_per_night: 1,
      images: 1,
    }
  );
  res.json(all);
};

const getPopularPreviews = async (req, res) => {
  const all = await Cottage.find(
    {},
    ["name", "rating", "address", "price_per_night", "images"],
    {
      skip: 0,
      limit: 5,
      sort: {
        rating: -1,
      },
    }
  );
  res.json(all);
};

const getNewsPreviews = async (req, res) => {
  const all = await Cottage.find(
    {},
    ["name", "rating", "address", "price_per_night", "images"],
    {
      skip: 0,
      limit: 5,
      sort: {
        createdAt: -1,
      },
    }
  );
  res.json(all);
};

const addCottage = async (req, res) => {
  console.log(req.body);
  const {
    _id,
    name,
    address,
    overview,
    description,
    price_per_night,
    vitual_tour_url,
    nb_max_person,
    images,
    tags,
    owner,
  } = req.body;
  try {
    const newCottage = new Cottage({
      name,
      address,
      overview,
      description,
      price_per_night,
      vitual_tour_url,
      nb_max_person,
      images,
      tags,
      owner,
    });
    await newCottage.save();
    res.json(newCottage);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getByName = async (req, res) => {
  const { name } = req.body;
  try {
    const cott = await Cottage.findOne({ name })
      .populate("tags")
      .populate("owner");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { _id } = req.body;
  try {
    const cott = await Cottage.findOne({ _id })
      .populate("tags")
      .populate("owner");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDetailsById = async (req, res) => {
  const { _id } = req.body;
  try {
    const cott = await Cottage.findOne({ _id })
      .populate({ path: "tags", populate: { path: "category" } })
      .populate("owner");
    res.json(cott);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCottage = async (req, res) => {
  console.log(req.body);
  const {
    reference,
    name,
    address,
    overview,
    description,
    price_per_night,
    vitual_tour_url,
    nb_max_person,
    images,
    tags,
  } = req.body;

  try {
    const isExist = await Cottage.findOne({ _id: reference });
    if (!isExist) {
      res.status(500).json({ message: "Cottage not found" });
    }
    const newCottage = await Cottage.findOneAndUpdate(
      { _id: reference },
      {
        name,
        address,
        overview,
        description,
        price_per_night,
        vitual_tour_url,
        nb_max_person,
        images,
        tags,
      }
    );
    res.json(newCottage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCottageByName = async (req, res) => {
  const { name } = req.body;

  try {
    const isExist = await Cottage.findOneAndDelete({ name });
    if (!isExist) {
      res.status(500).json({ message: "Cottage Not Found" });
      return;
    }
    res.json(isExist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCottageById = async (req, res) => {
  const { _id } = req.body;

  try {
    const isExist = await Cottage.findOneAndDelete({ _id });
    if (!isExist) {
      res.status(500).json({ message: "Cottage Not Found" });
      return;
    }
    res.json(isExist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  addCottage,
  getByName,
  getById,
  updateCottage,
  deleteCottageByName,
  deleteCottageById,
  getAllPreviews,
  getPopularPreviews,
  getNewsPreviews,
  getDetailsById,
};
