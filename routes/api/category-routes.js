const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get route for categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  };
});

//Get category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    if(!categoryData){
      res.status(404).json({ message: 'No category found by that id'})
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

//post new category
router.post('/', async (req, res) => {
  try {
    await Category.create(req.body)
    console.log(req.body)
    res.status(200).json(`${req.body.category_name} category created!`)
  } catch (err) {
    res.status(500).json(err)
  }
});

//update category by id
router.put('/:id', async (req, res) => {
  try {
    await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(` Category ${req.params.id} updated!`)
  } catch (err) {
    res.status(500).json(err)
  }
});

//delete category by id
router.delete('/:id', async (req, res) => {
  try {
  await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(`Category ${req.params.id} has been deleted.`)
  } catch (err) {

  }
});

module.exports = router;
