// Code your solution in this file!
const hq = 42 

function distanceFromHqInBlocks(pickupLocation){
    //return Math.abs(hq - pickupLocation)
    let distance
    //1. if pickupLocation > hq 
    if(pickupLocation > hq){
        distance = pickupLocation - hq
    } else {
        distance = hq - pickupLocation
    }
    return distance
}

function distanceFromHqInFeet(pickupLocation){
    //figure out the number of blocks (use previous function)
    let blocks = distanceFromHqInBlocks(pickupLocation)
    //multiply blocks by feet 
    return blocks * 264
}

function distanceTravelledInFeet(start, destination){
    // let distance
    // if(start > destination){
    //     distance = (start - destination) * 264 
    // } else {
    //     distance = (destination - start) * 264 
    // }
    // return distance 
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination){
    //1. get number of feet to travel
    let feet = distanceTravelledInFeet(start, destination)
    let result
    if(feet < 400){
        result = 0
    //2. calculate price (.02 per foot) from distance between 400 and 2000 
    } else if(feet < 2000){
        result = (feet - 400) * .02
    //3. between 2000 - 2500 return 25 
    } else if (feet < 2500){
        result = 25 
    //4. return 'cannot travel that far'
    } else {
        result = 'cannot travel that far'
    }
    return result
}