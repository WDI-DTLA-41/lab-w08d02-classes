const express = require('express');
const router = express.Router();
const Kitten = require('../models/kitten');

router.get('/', (req, res, next) => {
  Kitten.find({})
    .then( kittens => res.json(kittens) )
    .catch(next);
});

router.post('/', (req, res, next) => {
  const kitten = req.body.kitten;
  Kitten.create(kitten)
    .then( (result) => res.json(result) )
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const kitten = req.body.kitten;
  console.log(kitten)
  Kitten.update({_id: id}, kitten)
    .then( result => res.json(result) )
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Kitten.findByIdAndRemove(id)
    .then( result => res.json(result) )
    .catch(next);
});

module.exports = router;
