function driversWithRevenueOver(drivers,revenue) {
 return drivers.filter((driver) => (driver.revenue > revenue))
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers,revenue).map((driver) => (driver.name))
}

exactMatch = (drivers,obj) => {
 return drivers.filter( (driver) => ( driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]))
}

function exactMatchToList(drivers,obj) {
  return exactMatch(drivers,obj).map((driver) => (driver.name))
}