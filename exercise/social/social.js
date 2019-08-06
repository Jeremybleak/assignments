const person = {
    firstName: "Jeremy",
    lastName: "Bleak",
    age: 20,
    sex: "male",
    friends: [
        {
            firstName: "Ariana",
            lastName: "Farias",
            age: 20,
            sex: "female",
        },
        {
            firstName: "Sam",
            lastName: "Oblad",
            age: 20,
            sex: "male",
        },
        {
            firstName: "Damon",
            lastName: "Warnock",
            age: 21,
            sex: "male",
        },
        {
            firstName: "Logan",
            lastName: "Williams",
            age: 26,
            sex: "male",
        }
    ],
    hobbies: ["eating", "sleeping", "programming"],
    occupation: [
        {
            jobName: "Groviv",
            jobTitle: "Production Assistant",
            yearsWorked: 1,
        },
        {
            jobName: "Iceberg",
            jobTitle: "Manager",
            yearsWorked: 1,
        },
        {
            jobName: "Maverik",
            jobTitle: "Adventure Guide",
            yearsWorked: 3,
        },
    ],
    intro: function(){
        console.log(`Hi my name is ${this.firstName} ${this.lastName} I am ${this.age} years old and ${this.friends[0].firstName} ${this.friends[0].lastName} is my Girlfriend.`)
    }
}
person.intro()