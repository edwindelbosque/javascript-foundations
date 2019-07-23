class Sphinx {
	constructor() {
		this.riddles = [];
		this.heroesEaten = 0
	}

	collectRiddle(riddle) {
		this.riddles.push(riddle);
		if (this.riddles.length > 3)
			this.riddles.shift();
	}

	attemptAnswer(answer) {
		let riddleCount = this.riddles.length
		this.riddles = this.riddles.filter(riddle => riddle.answer !== answer)
		let nowCount = this.riddles.length
		if (!this.riddles.length) {
			return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
		} else if (riddleCount !== nowCount) {
			return "That wasn\'t that hard, I bet you don\'t get the next one"
		} else {
			this.heroesEaten++
		}
	}
}



module.exports = Sphinx;