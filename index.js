// Code your solution in this file
function findMatching (drivers, name){
  return drivers.filter(function (driverName){
    return driverName.toLowerCase () === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  let lengthOfName = string.length;
  return drivers.filter(function (driverName){
    return driverName.slice(0, lengthOfName) === string;
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}