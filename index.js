function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  names = drivers.map(function (person) {
    first = person.split(" ")[0];
    last = person.split(" ")[1];
    return {firstName: first, lastName: last};
  }
  return names
}
