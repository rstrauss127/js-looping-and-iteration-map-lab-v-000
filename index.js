function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {

  return drivers.map(function (person) {
    fullname = person.split(" ")
    first = fullname;
    last = person.split(" ")[1];
    return {firstName: first, lastName: last};
  }

}
