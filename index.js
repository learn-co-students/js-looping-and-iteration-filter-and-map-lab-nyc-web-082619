function driversWithRevenueOver(drivers, revenue){
    return drivers.filter((drivers) => (drivers.revenue > revenue))
}

function  driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map((driver) => (driver.name))
}

function exactMatch(drivers, match){
    return drivers.filter(driver => {
        let something = false
        for (const key in match) {
        something = driver[key] === match[key]; 
        }
        return something 
    });
}

function exactMatchToList(drivers, match){
    return exactMatch(drivers, match).map(driver => driver.name)
}