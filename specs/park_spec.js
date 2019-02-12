const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;

    beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
		dino2 = new Dinosaur('velociraptor', 'omnivore', 20);
		dino3 = new Dinosaur('triceratops', 'herbivore', 40);
    park = new Park('Jurassic', 20, [dino1, dino2])
  })

  it('should have a name', function () {
  const actual = park.name;
  assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs_collection;
    assert.deepStrictEqual(actual, [dino1, dino2])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino3)
    const actual = park.dinosaurs_collection;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dino1)
    const actual = park.dinosaurs_collection;
    assert.deepStrictEqual(actual, [dino2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
     const actual = park.mostVisitors()
     assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findSpecies('t-rex');
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeDinosBySpecies('t-rex');
    const actual = park.findSpecies('t-rex').length
    assert.strictEqual(actual, 0)
  });

  it('should calculate the total number of visitors per day', function () {
    const actual = park.totalguestsAttractedPerDay();
    assert.strictEqual(actual, 70);
  });

  it('should calculate the total number of visitors per year', function () {
    const actual = park.totalguestsAttractedPerYear();
    assert.strictEqual(actual, 25550);
  });

  it('should calculate the total revenue from ticket sales for one year', function () {
    const actual = park.tickectSalesPerYear();
    assert.strictEqual(actual, 511000)
  });

});
