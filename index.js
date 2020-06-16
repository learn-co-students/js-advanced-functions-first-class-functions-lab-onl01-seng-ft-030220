const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0,2)}
const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (x) => {
    if (x === 2) {
        return fareDoubler
    } else if (x === 3) {
        return fareTripler
    } else if (x === 5) {
        return fareQuintupler
    }
}

const fareDoubler = (x) => {return x*2}
const fareTripler = (x) => {return x*3}
const fareQuintupler = (x) => {return x*5}



function selectDifferentDrivers(arr,func) {
    return func(arr)
}