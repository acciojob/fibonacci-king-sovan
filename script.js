function fibonacci(num) {
// your code here
	if (num <= 0) {
		throw new ERROR("Input must be a postive integer")
	}

	if (num == 1) {
		return 0;
	}

	if (num == 2) {
		return 1;
	}

	let a = 0;
	let b = 1;

	for (let i = 3; i <= num i++) {
		let temp = a + b;
		a = b;
		b = temp;
	}

	return b;
}

module.exports = fibonacci(5);
