findMatching = (namesArray, name) => {
    const newArray = []
    namesArray.filter( nameElement => {
        nameElement.toLowerCase() === name.toLowerCase() ? 
        newArray.push(nameElement) : "meh."})
    return newArray
}

// TA-FUCKIN-DA I DID IT ALL ON MY OWN
function fuzzyMatch(namesArray, chars) {
    let matchesArray = []
    for (let i = 0; i < namesArray.length; i++) {
        let driverName = namesArray[i]
        for (let j = 0; j < chars.length; j++) {
            if (chars[j]===driverName[j] && j === chars.length-1) {
                console.log(chars, driverName, "match!")
                matchesArray.push(driverName)
            }
        }
    }
    return matchesArray
}


// [ { name: 'Bobby', hometown: 'Pittsburgh' },
//   { name: 'Sammy', hometown: 'New York' },
//   { name: 'Sally', hometown: 'Cleveland' },
//   { name: 'Annette', hometown: 'Los Angeles' },
//   { name: 'Bobby', hometown: 'Tampa Bay' } ] 'Bobby'
function matchName(namesArray, string) {
    let matchesArray = []
    for (let i = 0; i < namesArray.length; i++) {
        let objElement = namesArray[i]

        for (const key in objElement) {
            if (key==='name' && objElement[key]===string){
                matchesArray.push(objElement)
            }
        }
    }
    return matchesArray
}


























// 1) returns a driver if beginning provided letters match
// [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ] 'Sa'

// 2) does not return drivers if only middle or ending letters match
// [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ] 'y'

// 3) does not return drivers if only middle or ending letters match
// [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ] 'mm'

// returns ALL drivers whose names begin with the provided letters.

// we want a nested for/while loop
// the first loop just takes us through the array
// the second loop is where the real work happens
// as long as [i] of chars === [i] of name, we continue
// if matches continue until chars ends, then we push to matchesArray
// if a mismatch occurs, we use the return keyword to break out of the inner loop
// function fuzzyMatch(namesArray, chars) {
//     let matchesArray = []
//     for (let i = 0; i < namesArray.length; i++) {
//         let driverName = namesArray[i]

//         for (let j = 0; j < chars.length; j++) {
//             // console.log(driverName[j], chars[j])
//             // if (chars[j]===driverName[j]) {
//             //     console.log(chars[j], driverName[j], "match!")
//             //     continue
//             // }
//             if (chars[j]===driverName[j] && j === chars.length-1) {
//                 console.log(chars, driverName, "match!")
//                 matchesArray.push(driverName)
//             }
//             // else {console.log(chars[j], driverName[j])}
//             // console.log(matchesArray)
//         }
//         // console.log(matchesArray)
//     }
//     return matchesArray
// }


































// fuzzyMatch = (namesArray, chars) => {
//     console.log(namesArray, chars) 
//     namesArray.filter( name => {
    
//         name.includes(chars)        
//         // if (letters match beginning of name)
//         // newArray.push(name)
//         // return newArray
//     })
// }



















// function findMatching(namesArray, name) {
//     const newArray = []
//     namesArray.filter(function (nameElement) {
//         if (nameElement.toLowerCase() === name.toLowerCase() ){ 
//             newArray.push(nameElement)
//         }
//     })
//     return newArray
// }

















//  ------------------------------------------
// TRY 1
// function findMatching(namesArray, name) {
//     console.log(namesArray, name)

//     for (const element of namesArray) {
//         const returnedArray = []
//         if ( element === name ) {
//             returnedArray.push(element)
             
//         }
//         console.log(returnedArray)
//         return returnedArray
//     }
// }

// TRY 2
// function findMatching(namesArray, name) {
//     namesArray.filter(function (name) {
//         for (const person of namesArray) {
//             person === name 
//         }
//     })
//     console.log (namesArray, name)
// }




// ---------------------------------------------
// function findMatching(namesArray, name) {
//     console.log(namesArray, name)
//     const returnedArray = []

//     for (const element of namesArray) {
//         if ( element === name ) {
//             returnedArray.push(element)
             
//         }
//         console.log(returnedArray)
//         return returnedArray
//     }
// }