const express = require('express');
const sql = require('../services/connect');

const router = express.Router();

router.get('/cars' , (req, res) => {
  sql.query('SELECT * FROM cars', (e, result) => {
    if (e) {
      res.json(e);
    }
    
    res.status(200).json(result);
  });
});

router.get('/cars/:carID' , (req, res) => {
  const { carID } = req.params;

  sql.query(`SELECT * FROM cars WHERE id=${carID}`, (e, result) => {
    if (e) {
      res.json(e);
    }
    
    res.status(200).json(result);
  });
});

router.post('/cars' , (req, res) => {
  const { car: { automobile, mark, model } } = req.body;
  
  sql.query(`INSERT INTO cars (automobile, mark, model) VALUES ('${automobile}', '${mark}', '${model}')`, (e) => {
    if (e) {
      res.json(e);
    }
    
    res.status(200).json({ changed: true });
  });
});

router.put('/cars/:carID' , (req, res) => {
  const { car: { automobile, mark, model } } = req.body;
  const { carID } = req.params;

  sql.query(`UPDATE cars SET automobile='${automobile}', mark='${mark}', model='${model}' WHERE id=${carID}`, (e) => {
    if (e) {
      res.json(e);
    }
    
    res.status(200).json({ changed: true });
  });
});

router.delete('/cars/:carID' , (req, res) => {
  const { carID } = req.params;

  sql.query(`
    DELETE FROM cars WHERE id=${carID}
  `, (e) => {
    if (e) {
      res.json(e);
    }
    
    res.status(200).json({ changed: true });
  });
});

module.exports = router;