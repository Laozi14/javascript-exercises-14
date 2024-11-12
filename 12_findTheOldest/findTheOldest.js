const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Calculate the age at death or, if still alive, the age up to the current year
        const currentYear = new Date().getFullYear();
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        
        // Update the oldest person if the current person's age is greater
        return personAge > oldestAge ? person : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
