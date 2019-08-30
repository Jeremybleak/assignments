// const evan = () => {
//     return 'evan sucks at chess'
// }

// module.exports = evan

// module.exports = () =>{
//     return 'evan is the worst'
// }

function hello () {
       this.saying = 'hello'
       this.world= ()=> 'Hello World'
}

module.exports= new hello