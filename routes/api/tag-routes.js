const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // finds all tags and associated product data
  try {
    const tagData = await Tag.findAll({
      include: { model: Product },
    });
    if (!tagData) {
      res.status(404).json({ message: "No data found!" });
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const findTag = await Tag.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (!findTag) {
      res.status(404).json({ message: "No Data Found!" });
    }
    res.status(200).json(findTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } finally {
    console.log("done");
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    console.log(updateTag);
    if (!updateTag) {
      res.status(404).json({ message: "Can't find tag" });
    }
    res.status(200).json({ message: `Tag updated at ID: ${req.params.id}` });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // deletes on tag by its `id` value
  try {
    let deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!deleteTag) {
      res.status(404).json({ message: "Cant find id" });
    }
    res.status(200).json(`Tag deleted at ID:${req.params.id}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
