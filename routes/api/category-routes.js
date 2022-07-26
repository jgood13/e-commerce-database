const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No Data Found!" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const findCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!findCategory) {
      res.status(404).json({ message: "No Data Found!" });
    }
    res.status(200).json(findCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } finally {
    console.log("done");
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!updateCat) {
      res.status(404).json({ message: "Cant find category ID" });
    }
    res.status(200).json(req.body.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    let deleteCat = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deleteCat) {
      res.status(404).json({ message: "Cant find id" });
    }
    res.status(200).json(`Category deleted at ID:${req.params.id}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
