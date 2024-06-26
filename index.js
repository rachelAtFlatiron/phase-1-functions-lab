// Code your solution in this file!
const distanceFromHqInBlocks = (pickupLocation) => {
    //return distance from pickupLocation and 42nd st
    // if(pickupLocation > 42){
    //     return pickupLocation - 42
    // } else {
    //     return 42 - pickupLocation
    // }

    return Math.abs(pickupLocation - 42)
}

const distanceFromHqInFeet = (pickupLocation) => {
    let inBlocks = distanceFromHqInBlocks(pickupLocation)
    return inBlocks * 264
}

//PEMDAS
//parenthesis
//exponents
//multiplication
//division
//addition
//subtraction
const distanceTravelledInFeet = (start, destination) => Math.abs(start-destination) * 264


//when totalFeet > 2500, we return 25
const calculatesFarePrice = (start, destination) => {
    let totalFeet = distanceTravelledInFeet(start, destination)
    // < 400, free
    if(totalFeet <= 400){
        return 0
    //400 - 2000, .02 per foot 
    } else if (totalFeet > 400 && totalFeet < 2000){
        return (totalFeet - 400) * .02
    } else if (totalFeet >= 2000 && totalFeet <= 2500) {
        return 25 
    } else if (totalFeet >= 2500){
        return 'cannot travel that far'
    }
}