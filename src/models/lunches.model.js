const launches = new Map();

const lunch = {
  flightNumber: 100,
  mission: "Explorer",
  rocket: "1ST",
  lunchDate: new Date(),
  destination: "Earth2",
  customers: ["ehsan", "arsalan"],
  upcoming: true,
  success: true,
};

launches.set(lunch.flightNumber, lunch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
