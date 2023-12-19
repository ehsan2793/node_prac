const planets = require("../../models/planets.model");

const getAllPlanets = (req, res) => {
  return res.status(200).json(planets.planets);
};

module.exports = {
  getAllPlanets,
};
