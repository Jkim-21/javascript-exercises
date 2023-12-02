const findTheOldest = (people) => {
    const oldestSorted = people.sort((person1, person2) => {
        let personAge1 = 0;
        let personAge2 = 0;
        if (!("yearOfDeath" in person1)) {
            personAge1 = new Date().getFullYear() - person1.yearOfBirth;
        }
        else {
            personAge1 = person1.yearOfDeath - person1.yearOfBirth;
        }
        if (!("yearOfDeath" in person2)) {
            personAge2 = new Date().getFullYear() - person2.yearOfBirth;
        }
        else {
            personAge2 = person2.yearOfDeath - person2.yearOfBirth;
        }

        if (personAge1 > personAge2) {
            return -1;
        }
        return 1;
    });
    return oldestSorted[0];
};

const findTheOldest2 = (people) => {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentAge > oldestAge ? currentPerson : oldest;
    })
}

const getAge = (birthYear, deathYear) => {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
