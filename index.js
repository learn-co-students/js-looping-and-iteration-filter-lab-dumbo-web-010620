// Code your solution in this file
function findMatching(drivers, name){
    return drivers.filter(function (driverName){ // similar to ruby's "drivers.each do |driver|"
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driverName){
        return driverName.charAt(0) === name.charAt(0);
    });
}

function matchName(drivers, name){
    return drivers.filter(function(driverName){
        return driverName.name === name;
    });

}