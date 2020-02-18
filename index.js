function findMatching (alldrivers, name) {
    return alldrivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
      });
    }
    
    function fuzzyMatch (alldrivers, partialName) {
      let lengthOfName = partialName.length;
      return alldrivers.filter(function (driverName) {
        return driverName.slice(0, lengthOfName) === partialName;
      });
    }
    
    function matchName (alldrivers, name) {
      return alldrivers.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
      });
    }