const Person = require('../models/person');

exports.createPerson = function (req, res) {
  const newPerson = new Person({
    name: 'firas zighni',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });

  newPerson.save(function (err, data) {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Record saved successfully', data });
  });
};

exports.createManyPeople = function (req, res) {
  const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Bob', age: 22, favoriteFoods: ['Steak', 'Salad'] },
  ];

  Person.create(arrayOfPeople, function (err, people) {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Records created successfully', people });
  });
};

exports.findPeopleByName = function (req, res) {
  const { name } = req.params;

  Person.find({ name }, function (err, people) {
    if (err) return res.status(500).send(err);
    res.status(200).json(people);
  });
};

exports.findOnePersonByFood = function (req, res) {
  const { food } = req.params;

  Person.findOne({ favoriteFoods: food }, function (err, person) {
    if (err) return res.status(500).send(err);
    res.status(200).json(person);
  });
};

