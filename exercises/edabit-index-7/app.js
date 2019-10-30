const sevenBoom = (arr) => arr.join('').split('').indexOf('7') > -1 ? 'Boom!' : 'there is no 7 in the array'

console.log(sevenBoom([234, 134, 1 ]))