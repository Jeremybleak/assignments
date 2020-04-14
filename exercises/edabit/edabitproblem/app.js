function dividesEvenly(a, b) {
	return a % b === 0
}

function countWords(str) {	
	return str.split(' ').length
}

function Go(num) {
	let arr = []
	for(i = 0; i < num; i ++){
		arr.push('-')
	}
	return arr.join('')
}