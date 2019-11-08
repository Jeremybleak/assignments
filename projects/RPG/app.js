const readline = require("readline-sync")

let isAlive = true
let hasWon = false

function Class(title, hp, weapon, attack){
    this.title = title;
    this.hp = hp;
    this.weapon = weapon;
    this.attack = attack;
}

let barbarian = new Class("Barbarian", 100, "Sword", 40)
let warlock = new Class ("Warlock", 90,"Magic Staff", 45)
let tank = new Class("Tank", 70,"Spiked Club", 70 )
const players = ["Barbarian", "Warlock", "Tank"]
let player = []

function Enemies(name, hp, attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

let assassin = new Enemies('Assassin', 40, 35)
let skeleton = new Enemies('Skeleton', 50, 40) 
let orc = new Enemies('Orc', 60, 40)
let bat = new Enemies('Bat', 20, 32)
let ghoul = new Enemies('Ghoul', 35, 35)
let evan = new Enemies ('Boss Evan', 40, 40)
let minotaur = new Enemies ('Minotaur', 70, 45)
let slime = new Enemies('Slime', 10, 32)

const enemie = [assassin, skeleton, orc, bat, ghoul, evan, minotaur, slime];
const actions = ['Attack', 'Heal', 'Run']
console.log('Hello warrior and welcome to the Maze of Glory ive heard a lot about you!')
const name = readline.question("But, Uhh, im bad at names, what was your name again? ")
console.log(`Oh thats right, welcome ${name}`)
const hero = readline.keyInSelect(players, `And, ${name}, you are a... what are you again?`)
    if(hero === 0){
    player.push(barbarian) 
    console.log(`Ahh yes, if you didnt dress so weird I would know that you, ${name}, are in fact a brave Barbarian!`)
    console.log(player)
    }else if(hero === 1){
    player.push(warlock)
    console.log(`Ahh yes, I should've known by your staff and cloak that you, ${name}, are in fact a wise Warlock!`)
    console.log(player)
    }else if(hero ===2){
    player.push(tank)
    console.log(`Of course, Your lack of shirt and big spiked club shows that you, ${name}, are in fact a hard hitting Tank`)
   console.log(player)
}
    console.log(`What lies ahead is the maze of glory! You, ${name} the fearless ${player[0].title} will traverse the maze in search of the glorious treasure that lies deep in the maze. But be careful! This maze is swarming with Enemies in search of the same glory! Good luck ${name}!`)
 while(isAlive && !hasWon){
     let question = readline.keyIn("Will you traverse deeper in the maze? [w]- to traverse [n]- to chicken out", {limit: 'wn'})
       if(question=== 'w'){
        traverse()
        stumble()
       }else{
        console.log(`How dare you call yourself a warrior, ${name} is a chicken!~`)
        isAlive=false
       }
     }
function traverse(){
    let random= Math.floor(Math.random()*4)
    if(random > 0){
        console.log("You traverse deeper!")
    }else{
        battle()
    }
}
function stumble(){
    let random = Math.floor(Math.random()*400)
    if(random > 0){
    isAlive = true
    } else {
    console.log(`You stumbled across the Treasure room! The Maze Of Glory now belongs to ${name}! You won!~`)
    hasWon = true
    }
}
function battle(){
    let enemy = enemie[Math.floor(Math.random()*enemie.length)]
    console.log(`You stumbled upon a(n) ${enemy.name} that has ${enemy.hp}hp`)
    fight(enemy)
}
function fight(enemy){
    let run = false
    while(player[0].hp > 0 && enemy.hp > 0 && !run){
        let choice = readline.keyInSelect(actions, 'What action would you like to take? ')
       if(choice === 0){ 
        let enemyAttack = generateAttac(enemy)
        let wariorAttack = generateAttack(player)
        enemy.hp -= wariorAttack;
        console.log(`You attacked the ${enemy.name} with your ${player[0].weapon}, for ${wariorAttack}hp the ${enemy.name} now has ${enemy.hp}hp`);
        player[0].hp -= enemyAttack;
        console.log(`The ${enemy.name} Attacked you for ${enemyAttack}hp, your hp is ${player[0].hp}`);
    }else if(choice === 1){
        heal(player,enemy)
    } else if(choice === 2){
        run1(run)
    }}
    if (player[0].hp <= 0){
        isAlive=false
        hasWon=true;
        console.log(`The Enemies danced on your corpse as your body became just another pile of bones. You're the sorriest excuse for a ${player[0].title} that ive ever seen. YOU DIED!`)
    }else if(enemy.hp <=0){
        console.log(`You killed all the ${enemy.name}s in the maze`)
        enemie.splice(enemie.indexOf(enemy), 1)
        let random = Math.floor(Math.random()* 10 + 10)
        player[0].hp += random;
        console.log(`You gained ${random}hp for your solid victory, your hp is = ${player[0].hp}`)
        if(enemie.length === 0){
            console.log(`There didn't seem to be anymore enemies left as you made your way through the maze, and eventually to the Treaure Room! ${name} will forever live with the riches of royalty! YOU WON!`)
            hasWon = true
        }
    }
    function heal(player, enemy){
        let random = Math.floor(Math.random()* 15 + 10);
        player[0].hp += random;
        console.log(`You healed and got ${random}hp, your hp is now ${player[0].hp}`)
        let enemyAttack = generateAttac(enemy)
        player[0].hp -= enemyAttack;
        console.log(`The ${enemy.name} Attacked you for ${enemyAttack}hp, your hp is ${player[0].hp}`);
    }
    function run1(){
        let limit = Math.floor(Math.random()*3);
           if(limit <= 0){
               console.log(`You ran away, your hp is ${player[0].hp}`)
               run = true
           }else{
                console.log("You couldn't get away!")
                random = Math.floor(Math.random()*15)
                player[0].hp -= random;
                console.log(`The ${enemy.name} Attacked you for ${this.random}hp, your hp is ${player[0].hp}`);

           }
       }
       function generateAttac(){
           return Math.floor(Math.random()* enemy.attack)
       }
}
function generateAttack (){
    return Math.floor(Math.random() * player[0].attack)
}