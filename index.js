// Code your solution in this file!

//distanceFromHqInBlocks
//50 => 8

//variable to represent hq location
//perfect just in case we want to change hq location later on
const homeStreet = 42

//does get hoisted
// function distanceFromHqInBlocks(){

// }


//does not get hoisted
//takes in location for a passenger: this will be our parameter
const distanceFromHqInBlocks = (passengerLocation) => {
    //returns the number of blocks from Scuber headquarters on 42nd 
    return Math.abs(passengerLocation - homeStreet)
}



const distanceFromHqInFeet = (passengerLocation) => {
    //get the number blocks
    let distanceInBlocks = distanceFromHqInBlocks(passengerLocation)
    //convert blocks to feet
    let distanceInFeet = distanceInBlocks * 264
    return distanceInFeet
    //return distanceFromHqInBlocks(passengerLocation) * 264
} 

//takes in start block and destination block
const distanceTravelledInFeet = (startBlock, endBlock) => {
    //get number of blocks
    let blocks = Math.abs(startBlock - endBlock)
    //get the number of feet
    let blocksInFeet = blocks * 264 
    return blocksInFeet
}

//feet travelled 528
const calculatesFarePrice = (start, destination) => {
    //get distance in feet 
    let distance = distanceTravelledInFeet(start, destination)
    //first 400 feet are free
    if(distance < 400) {
        return 0

    //distance is 400 and 2000, .02 per foot 
    //example of writing 2 cases with the && 
    } else if(distance >= 400 && 2000 >= distance) {
        //# of feet * .02
        return (distance - 400) * .02

    //2000 - 2500 feet is flat fare of $25
    //example of knowing previous cases will escape the if/else if met
    } else if(distance < 2500){
        return 25

    //over 2500 feet is a no
    } else {
        return 'cannot travel that far'
    }
}


