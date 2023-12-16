const path = require("path");
const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    let res = habitablePlanet.map((planet) => {
      return planet["kepler_name"];
    });
    console.log(res);
  });

module.exports = {
  planets: isHabitablePlanet,
};
