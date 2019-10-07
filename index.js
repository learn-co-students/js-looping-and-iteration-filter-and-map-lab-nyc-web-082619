// Code your solution here:
function driversWithRevenueOver(drivers, limit) {
  return drivers.filter(driver => driver.revenue > limit);
}
function driverNamesWithRevenueOver(drivers, limit) {
  return driversWithRevenueOver(drivers, limit).map(driver => driver.name);
}
function exactMatch(drivers, match) {
  return drivers.filter(driver => {
    let flag;
    for (let key in match) {
      flag = driver[key] === match[key];
      if (!flag) break;
    }
    return flag;
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => driver.name);
}
