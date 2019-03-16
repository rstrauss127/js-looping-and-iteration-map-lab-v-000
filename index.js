function lowerCaseDrivers(drivers) {
  const lowercasedrivers = drivers.map(function (driver) {
    return String.assign({}, driver, driver.toLowerCase());
  });
}
