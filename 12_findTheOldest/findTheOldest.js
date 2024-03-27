const findTheOldest = function(people) {
    const ages = people.map((person) => {
        let lastYear = 0;
        if("yearOfDeath" in person) lastYear = person.yearOfDeath;
        else lastYear = 2024;

        return lastYear - person.yearOfBirth;
    });

    let oldest = 0;
    let idx = 0;
    for(let i = 0;i < ages.length;i++){
        if(ages[i] > oldest){
            oldest = ages[i];
            idx = i;
        }
    }

    return people[idx];
};

// Do not edit below this line
module.exports = findTheOldest;
