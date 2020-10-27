const returnFirstTwoDrivers = drivers => {return [drivers[0], drivers[1]]};

const returnLastTwoDrivers = drivers => {return [drivers[drivers.length - 2], drivers[drivers.length - 1]]};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return (fare) => {
       return n * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selector) {
    return selector(drivers)
}
    