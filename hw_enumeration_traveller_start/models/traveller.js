const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (value) {
  return this.journeys.filter(journey => journey.transport === value);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => total += journey.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const resultArray = [];
  const modeOfEachJourney = this.journeys.map(journey => journey.transport);
  const getUniqueModes = modeOfEachJourney.forEach((mode) => {
    if(!resultArray.includes(mode)){
      resultArray.push(mode);
    };
  });
  return resultArray;
};

module.exports = Traveller;
