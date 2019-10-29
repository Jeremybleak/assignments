function sevenBoom(arr) {
	return arr.join('').split('').indexOf('7') > -1 ? 'Boom!' : 'there is no 7 in the array'
}