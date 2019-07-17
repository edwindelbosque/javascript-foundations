class Person {
	constructor(name) {
		this.name = name;
		this.stoned = false;
	}
	stare() {
		this.stoned = true;
	}
};

module.exports = Person