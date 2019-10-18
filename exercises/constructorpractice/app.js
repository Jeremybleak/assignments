function Hero(name, hp, sidekick) {
    this.name = name,
    this.hp = hp,
    this.sidekick = sidekick
}

let jeremy = new Hero('Jeremy', 50, 'Ethan')
let poop = new Hero('Poop', 1, 'Fly')
let ethan = new Hero('Ethan', 300, 'Nobody')
const players = ['Jeremy', 'Poop', 'Ethan']
let player = []