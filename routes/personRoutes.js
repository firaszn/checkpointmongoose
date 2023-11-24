const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/createPerson', personController.createPerson);
router.post('/createManyPeople', personController.createManyPeople);
router.get('/findPeopleByName/:name', personController.findPeopleByName);
router.get('/findOnePersonByFood/:food', personController.findOnePersonByFood);


module.exports = router;
