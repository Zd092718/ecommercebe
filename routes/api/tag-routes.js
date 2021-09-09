const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Get route for tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(200).json(err)
  }
});

// get tag by id
router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }]
      });
      res.status(200).json(tagData)
    } catch (err) {
      res.status(200).json(err)
    }
  });

// post new tag
router.post('/', async (req, res) => {
  try {
    await Tag.create(req.body)
    console.log(req.body)
    res.status(200).json(`${req.body.tag_name} product tag created!`)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update tag by id
router.put('/:id', async (req, res) => {
  try {
    await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(` Product tag ${req.params.id} updated!`)
  } catch (err) {
    res.status(500).json(err)
  }
});

//delete tag by id
router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(`Product tag ${req.params.id} has been deleted.`)
    } catch (err) {
  
    }
});

module.exports = router;
