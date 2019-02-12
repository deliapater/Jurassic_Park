const Park = function (name, ticket_price, dinosaurs_collection) {
  this.name = name
  this.ticket_price = ticket_price
  this.dinosaurs_collection =  dinosaurs_collection
};

module.exports = Park;


Park.prototype.addDino = function (dino) {
  this.dinosaurs_collection.push(dino);
};

Park.prototype.removeDino = function (dino) {
  let position = this.dinosaurs_collection.indexOf(dino);
    if(position != -1) {
  this.dinosaurs_collection.splice(position, 1);
 }
};

Park.prototype.mostVisitors = function () {
  let orderedDinos = this.dinosaurs_collection.sort(function(dino1, dino2){
    return dino1.guestsAttractedPerDay - dino2.guestsAttractedPerDay
  });

  return orderedDinos[orderedDinos.length -1];
}

Park.prototype.findSpecies = function (dinoSpecies) {
  return this.dinosaurs_collection.filter(dino => dino.species === dinoSpecies)
}

Park.prototype.removeDinosBySpecies = function (dinoSpecies) {
  let filteredDinos = this.dinosaurs_collection.filter(dino => dino.species !== dinoSpecies);
  this.dinosaurs_collection = filteredDinos;
}

Park.prototype.totalguestsAttractedPerDay = function () {
  let total = 0;
  for(dino of this.dinosaurs_collection) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.totalguestsAttractedPerYear = function () {
  return this.totalguestsAttractedPerDay() * 365;

};

Park.prototype.tickectSalesPerYear = function () {
  return this.totalguestsAttractedPerYear() * this.ticket_price;
}
