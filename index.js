const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    return [...drivers].splice(0, 2)
}

const returnLastTwoDrivers = () => {
    return [...drivers].splice(2)
}

let selectingDrivers = [];
selectingDrivers.unshift(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers);

const createFareMultiplier = num => {
   return function fareQuintupler(){
    return num*5
   }
}

const fareDoubler = (fare) =>{
    return 
} 

const fareTripler = () =>{
    return function(num){
        return num*3
    }(12)
}

const selectDifferentDrivers = (array, func) => {
   return func(Math.random(array))
}



