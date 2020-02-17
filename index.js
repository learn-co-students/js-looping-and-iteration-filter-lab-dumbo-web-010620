// Code your solution in this file
function findMatching(drivers,name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    }  )
//   let matchedDrivers = [];
//   for (let i = 0; i < drivers.length; i++){
//       if (drivers[i].toLowerCase() === name.toLowerCase()){
//           matchedDrivers.push(drivers[i])
//       }
//     }
//     return matchedDrivers;
}

// function fuzzyMatch(drivers,string){
//     return drivers.filter(function (driverName){
//         if (driverName[0] === string){
//             return dr
//         };
//     })
// }

function fuzzyMatch (drivers, partialName) {
    let lengthOfName = partialName.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }
  

function matchName(drivers,string){
    return drivers.filter(function (driverName){
        return driverName['name'] === string;
    } )
}