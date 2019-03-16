function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(drivers, function (d) {
    Object.assign({}, firstName: drivers[0], lastName: drivers[1]);
  })
}
