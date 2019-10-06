function driversWithRevenueOver(driverObjs, revenueNum) {
    let matching;
    matching = driverObjs.filter(function(driver){
        return driver.revenue > revenueNum
    });
    return matching;
}

function driverNamesWithRevenueOver(driverObjs, revenueNum) {
    let names;
    names = driversWithRevenueOver(driverObjs, revenueNum).map(function(driver){
        return driver.name
    });
    return names;
}

function exactMatch(driverObjs, obj) {
   let matching;
   matching = driverObjs.filter(function(driver){
       return driver[Object.keys(obj)[0]] === Object.values(obj)[0]
   });
   return matching
}

function exactMatchToList(driverObjs, obj) {
    let names;
    names = exactMatch(driverObjs, obj).map(function(driver){
        return driver.name
    });
    return names;
}