// JSXTransformer.js, react-dom.min.js and react.min.js are scriprs used for .jsx and react lib.
var Hangmanizr = React.createClass({
	getInitialState: function () {
		return {
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@", "-"],
			words: '',
			randomWord: '',
			letters: [],
			clickedLetters: [],
			matchedLetters: [],
			lives: 6,
			initialLives: 6,
			clickedButton: null,
			gameStarted: false,
			nextWord: false,
			chosenLevel: 'medium',
			score: 0,
			gameOver: false
		}
	},
	animalsGame: function (e) {
		var animals = [
			"ocean",
			"beach",
			"wave",
			"tide",
			"seashell",
			"coral",
			"fish",
			"dolphin",
			"whale",
			"shark",
			"seagull",
			"seaweed",
			"surf",
			"sail",
			"anchor",
			"lighthouse",
			"marina",
			"coast",
			"seascape",
			"seaside",
			"island",
			"seafarer",
			"buoy",
			"crab",
			"seal",
			"saltwater",
			"treasure",
			"shipwreck",
			"seahorse",
			"seasickness",
			"benthos",
			"nautical",
			"cephalopod",
			"brackish",
			"plankton",
			"narwhal",
			"trench",
			"pelagic",
			"bioluminescence",
			"hydrothermal",
			"atoll"
		];

		this.setState({
			words: animals,
			letters: [],
			clickedLetters: [],
			matchedLetters: [],
			lives: this.state.initialLives,
			clickedButton: e.target.value,
			gameStarted: true,
			score: 0
		})

		setTimeout(function () {
			this.getRandom();
		}.bind(this), 100);

	},

	cssPropertiesGame: function (e) {
		var cssProperties = ["youknowwhat","iloveyousomuch","heybaby"];

		this.setState({
			words: cssProperties,
			letters: [],
			clickedLetters: [],
			matchedLetters: [],
			lives: this.state.initialLives,
			clickedButton: e.target.value,
			gameStarted: true,
			score: 0
		})

		setTimeout(function () {
			this.getRandom();
		}.bind(this), 100);

	},
	htmlElementsGame: function (e) {
		var htmlElements = ["mostbeautifulprofessor","in","ntu","sealover","mylover"];

		this.setState({
			words: htmlElements,
			letters: [],
			clickedLetters: [],
			matchedLetters: [],
			lives: this.state.initialLives,
			clickedButton: e.target.value,
			gameStarted: true,
			score: 0
		})

		setTimeout(function () {
			this.getRandom();
		}.bind(this), 100);

	},
	phrasalVerbsGame: function (e) {
		var phrasalVerbs = [
			"abundant",
			"accurate",
			"advantage",
			"analyze",
			"appropriate",
			"argue",
			"assumption",
			"benefit",
			"challenge",
			"comprehensive",
			"conclude",
			"contribution",
			"criticize",
			"decide",
			"definition",
			"demonstrate",
			"depend",
			"describe",
			"determine",
			"effect",
			"evidence",
			"examine",
			"explain",
			"factor",
			"focus",
			"hypothesis",
			"impact",
			"interpret",
			"observe",
			"oppose"
		];

		this.setState({
			words: phrasalVerbs,
			letters: [],
			clickedLetters: [],
			matchedLetters: [],
			lives: this.state.initialLives,
			clickedButton: e.target.value,
			gameStarted: true,
			score: 0
		})

		setTimeout(function () {
			this.getRandom();
		}.bind(this), 100);
	},
	getRandom: function () {

		var randomNum = Math.floor((Math.random() * this.state.words.length))
		var random = this.state.words[randomNum];

		this.state.words.splice(randomNum, 1);

		this.setState({
			randomWord: random,
		});

		{/* click start and trigger splitLetters() */ }
		setTimeout(function () {
			this.splitLetters();
		}.bind(this), 100);
		{/* click start and trigger splitLetters() */ }

	},

	splitLetters: function () {

		var s = this.state.randomWord.toUpperCase();
		for (var i = 0; i < s.length; i++) {
			this.state.letters.push(s.charAt(i));
		}
		this.setState({
			letters: this.state.letters
		});
	},

	checkLetter: function (e) {
		var val = e.currentTarget.textContent;

		this.state.clickedLetters.push(val);

		this.setState({
			clickedLetters: this.state.clickedLetters,
			lives: this.state.lives - 1
		});

		var _this = this;
		this.state.letters.forEach(function (letter) {
			if (letter === val) {
				_this.state.matchedLetters.push(letter)
				_this.setState({
					matchedLetters: _this.state.matchedLetters,
					lives: _this.state.lives
				});

				if (_this.state.lives < 1) {
					if (_this.state.letters.length !== _this.state.matchedLetters.length) {
						this.setState({
							nextWord: false
						});
					}
				}

			}
		});

		if (this.state.lives < 1) { // if lives...

			this.setState({
				nextWord: true,
				lives: ''
			});

			setTimeout(function () {

				this.state.matchedLetters.splice(0, this.state.matchedLetters.length);
				this.state.matchedLetters.splice.apply(this.state.matchedLetters, [0, this.state.letters.length].concat(this.state.letters))

				this.setState({
					matchedLetters: this.state.matchedLetters
				});

				{/* second setTimeout */ }
				setTimeout(function () {

					this.setState({
						clickedLetters: [],
						matchedLetters: [],
						lives: this.state.initialLives,
						nextWord: false
					});

					this.state.letters.splice(0, this.state.letters.length);

					{/* get new random word */ }
					var randomNum = Math.floor((Math.random() * this.state.words.length))
					var random = this.state.words[randomNum];

					this.state.words.splice(randomNum, 1);

					this.setState({
						randomWord: random,
					});
					{/* get new random word*/ }

					{/* push new random word's letters to letters array */ }
					var s = random.toUpperCase();
					for (var i = 0; i < s.length; i++) {
						this.state.letters.splice()
						this.state.letters.push(s.charAt(i));
					}
					this.setState({
						letters: this.state.letters
					});
					{/* push new random word's letters to letters array */ }

				}.bind(this), 2000);
				{/* second setTimeout */ }

			}.bind(this), 750);

			{/* check game setTimeout */ }
			setTimeout(function () {

				{/* check if game is over */ }
				if (this.state.words.length === 0) {
					//alert("Game is over! ");

					this.setState({
						gameOver: true
					})

					//this.setState(this.getInitialState());

				}
				{/* check if game is over*/ }

			}.bind(this), 2500);
			{/* check game setTimeout */ }

		}// if lives...

		{/* if the word is found, continue the game */ }
		if (this.state.letters.length == this.state.matchedLetters.length) {
			//alert("You found the word!");
			this.setState({
				nextWord: true,
				lives: ''
			});
			setTimeout(function () {

				this.setState({
					clickedLetters: [],
					lives: this.state.initialLives,
					nextWord: false,
					score: this.state.score + 1
				});

				{/* check if game is over */ }
				if (this.state.words.length === 0) {
					this.setState({
						gameOver: true
					})

					//this.setState(this.getInitialState());
				}
				{/* check if game is over*/ }

				{/* reset lives and clear the matchedLetters array */ }
				this.setState({
					matchedLetters: [],
					lives: this.state.initialLives
				});
				{/* reset lives and clear the matchedLetters array */ }

				this.state.letters.splice(0, this.state.letters.length);

				{/* get new random word */ }
				var randomNum = Math.floor((Math.random() * this.state.words.length))
				var random = this.state.words[randomNum];

				this.state.words.splice(randomNum, 1);

				this.setState({
					randomWord: random,
				});
				{/* get new random word */ }

				{/* push the new random words letters to letters array */ }
				var s = random.toUpperCase();
				for (var i = 0; i < s.length; i++) {
					this.state.letters.splice()
					this.state.letters.push(s.charAt(i));
				}
				this.setState({
					letters: this.state.letters
				});
				{/* push the new random words letters to letters array */ }

			}.bind(this), 2000);

		} {/* if the word is found, continue the game */ }

	},
	easyLevel: function (e) {
		this.setState({
			initialLives: 10,
			chosenLevel: e.target.value
		})
	},
	mediumLevel: function (e) {
		this.setState({
			initialLives: 6,
			chosenLevel: e.target.value
		})
	},
	hardLevel: function (e) {
		this.setState({
			initialLives: 2,
			chosenLevel: e.target.value
		})
	},
	closeModal: function () {
		this.setState(this.getInitialState());
	},

	render: function () {
		return (
			<div className={this.state.gameOver ? "container gameOver" : "container "}>

				<header>
					<p className="title">HANGMAN-with-Hsuan</p>
					<p className="description">Quick Hangman Game</p>
				</header>

				<section>

		
					<div className="twitter-github-buttons-wrapper">
						<a href="https://github.com/ChiaLingWeng/hangman/fork" className="github-button" target="_blank" rel="external"> <img src="./img/github.svg" alt="Github" /> Fork</a>

						<a className="twitter-share-button"
							href="https://github.com/ChiaLingWeng/hangman/issues" target="_blank" rel="external"><img src="./img/github.svg" alt="Twitter" />  Feedback</a>
					</div>


					<div className="start-playing-text-wrapper">

						<p><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
		c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
		s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
		c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
		S11.657,15.576,11.304,15.576z"></path></svg> Choose your level and start playing by clicking the topics below. <svg className="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
		c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
		H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
		S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"></path></svg></p>

						<p><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
		c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
		s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
		c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
		S11.657,15.576,11.304,15.576z"></path></svg> You have {this.state.initialLives} lives. <svg className="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
		c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
		H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
		S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"></path></svg></p>
						<p><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path></svg> Have fun! <svg className="svg-icon" viewBox="0 0 20 20">
								<path fill="none" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path></svg></p>

						<p>
							<div className={this.state.gameStarted ? "game-levels-wrapper pointer-events-none" : "game-levels-wrapper pointer-events-auto"}>

								<button onClick={this.easyLevel} clasName="easy-mode" value="easy" disabled={this.state.chosenLevel === "easy"}>
									<svg onClick={this.easyLevel} className="svg-icon" viewBox="0 0 20 20">
										<path fill="none" d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"></path></svg> Easy</button>

								<button onClick={this.mediumLevel} clasName="medium-mode" value="medium" disabled={this.state.chosenLevel === "medium"}>
									<svg onClick={this.mediumLevel} className="svg-icon" viewBox="0 0 20 20">
										<path fill="none" d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"></path></svg> Medium</button>

								<button onClick={this.hardLevel} clasName="hard-mode" value="hard" disabled={this.state.chosenLevel === "hard"}>
									<svg onClick={this.hardLevel} className="svg-icon" viewBox="0 0 20 20">
										<path fill="none" d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"></path></svg> Hard</button>

							</div>
						</p>

					</div>

					<div className="start-game-buttons-wrapper">
						<button data-tooltip="👀" className="topic" onClick={this.animalsGame} value="animals" disabled={this.state.clickedButton === "animals"}><svg viewBox="0 0 400 400" className="topicsSvg animalsSvg">
							<path d="M54.1283 283.001C52.8319 269.74 61.6674 256.236 66.8345 244.212C101.013 164.722 175.226 108.737 272.532 113.255C369.839 117.773 347.821 179.071 332.874 185.404C316.115 192.505 311.264 167.423 297.932 172.739C288.462 176.515 297.063 191.448 275.696 194.111C267.743 195.105 262.071 180.79 253.46 179.071C246.965 177.779 243.466 190.944 235.196 190.944C228.342 190.944 226.77 180.144 220.104 177.491C214.951 175.433 210.584 191.737 202.636 193.323C192.462 195.348 185.132 161.883 163.038 191.242" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M248.772 191.721C201.419 236.2 219.137 281.053 309.587 287.981" /></svg> Long Time No Sea</button>
		

						<button data-tooltip="520 words" className="topic" onClick={this.cssPropertiesGame} value="css" disabled={this.state.clickedButton === "css"}><svg viewBox="0 0 47.0699 47.0699" className="topicsSvg cssSvg">
							{/* "M426.981,0H43.701C34.52,0,27.632,7.769,28.442,16.949L63.45,409.254c0.811,9.173,8.745,18.774,17.644,21.253
		l138.006,38.335c8.887,2.463,23.413,2.479,32.313,0.032l138.177-38.281c8.901-2.472,16.835-11.986,17.645-21.175l35.023-392.469
		C443.068,7.769,436.209,0,426.981,0z M360.51,141.611c-0.006,0.06-0.053,0.107-0.112,0.117c-0.06,0.01-0.118-0.021-0.144-0.077
		L252.13,185.96c-1.54,0.631-2.418,2.264-2.098,3.897c0.322,1.633,1.754,2.811,3.419,2.811h84.103c4.474,0,8.736,1.9,11.728,5.227
		c2.991,3.327,4.429,7.768,3.954,12.216l-13.141,123.273c-0.645,6.048-4.709,11.186-10.447,13.205l-89.269,31.41
		c-3.362,1.184-7.027,1.193-10.397,0.025l-88.852-30.778c-5.773-2-9.871-7.153-10.52-13.228l-5.957-55.828
		c-0.313-2.931,0.634-5.857,2.604-8.048c1.971-2.192,4.779-3.444,7.727-3.444h24.725c5.313,0,9.769,4.007,10.331,9.289l3.655,34.316
		l61.521,21.385l61.803-21.58l7.559-71.17H129.835c-5.297,0-9.746-3.985-10.327-9.25l-3.327-30.164
		c-0.508-4.601,2.088-8.982,6.366-10.745l111.837-46.109c1.269-0.523,1.99-1.868,1.724-3.214c-0.267-1.345-1.446-2.314-2.817-2.314
		H115.542c-3.545,0-6.518-2.677-6.888-6.201l-3.406-32.421c-0.205-1.951,0.428-3.898,1.741-5.357
		c1.313-1.458,3.184-2.291,5.146-2.291h246.379c1.973,0,3.852,0.842,5.166,2.313c1.314,1.472,1.938,3.434,1.715,5.394L360.51,141.611z"
		svg viewBox="0 0 456.804 456.804"
		"0 0 45.973 45.973"*/}
							<path d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774 c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815 C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607 c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205 C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501 C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763 c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733 s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128 c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735 c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77 c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85 C30.906,27.334,27.355,30.85,22.976,30.85z"/></svg> Chia Ling</button>
						<button data-tooltip="923 words" className="topic" onClick={this.htmlElementsGame} value="html" disabled={this.state.clickedButton === "html"}><svg viewBox="0 0 209.582 209.582" className="topicsSvg htmlSvg">
							{/* "M27.405,0l36.542,410.56l163.882,46.244l165.022-46.244L429.398,0H27.405z M350.025,133.904h-192.43l4.283,51.676h183.866
		l-14.273,155.315l-102.499,28.26v0.287h-1.143l-103.356-28.547l-6.28-79.367h49.965l3.711,39.971l55.959,15.126l56.245-15.126
		l6.283-65.097H115.625l-13.418-152.46h252.392L350.025,133.904z"
		svg viewBox="0 0 456.804 456.804"*/}
							<path d="M166.287,87.275c-1.624-3.508-5.784-5.035-9.293-3.411c-3.508,1.624-5.036,5.785-3.411,9.293
		c9.772,21.107,7.471,47.505-6.004,68.89c-4.032,6.399-8.83,12.058-14.247,16.888c4-10.715,6.113-22.136,6.113-33.727
		c0-25.616-10.164-50.019-28.109-68.036c11.128-7.574,18.452-20.34,18.452-34.786V7c0-2.114-0.955-4.114-2.599-5.443
		c-1.643-1.329-3.798-1.845-5.866-1.402L87.736,7.342L54.148,0.155c-2.064-0.442-4.223,0.073-5.866,1.402
		C46.638,2.887,45.683,4.887,45.683,7v35.386c0,14.446,7.324,27.212,18.452,34.786c-17.945,18.017-28.109,42.42-28.109,68.036
		c0,22.598,7.979,44.569,22.466,61.869c1.33,1.588,3.295,2.505,5.367,2.505h47.752c2.071,0,4.037-0.917,5.367-2.505
		c0.721-0.861,1.413-1.741,2.101-2.624c16.469-7.115,30.395-19.152,40.344-34.941C175.402,144.154,178.032,112.643,166.287,87.275zM59.683,15.657l26.588,5.688c0.965,0.206,1.964,0.206,2.929,0l26.588-5.688v26.729c0,15.468-12.584,28.052-28.052,28.052
		S59.683,57.854,59.683,42.386V15.657zM50.026,145.208c0-23.729,10.206-46.241,28.023-61.908c3.112,0.737,6.352,1.139,9.686,1.139c3.334,0,6.574-0.402,9.686-1.139c17.817,15.668,28.023,38.179,28.023,61.908c0,18.241-6.081,36.003-17.184,50.374H94.736v-38.24c0-3.866-3.134-7-7-7s-7,3.134-7,7v38.24H67.21C56.107,181.211,50.026,163.449,50.026,145.208z" />
							<path d="M86.444,58.217c0.713,0.713,1.869,0.713,2.583,0l5.421-5.421c1.15-1.15,0.336-3.117-1.291-3.117H82.314
		c-1.627,0-2.442,1.967-1.291,3.117L86.444,58.217z" /></svg> Yu Hsuan</button>
		

						<button data-tooltip="Fighting !" className="topic" onClick={this.phrasalVerbsGame} value="phrasalVerbs" disabled={this.state.clickedButton === "phrasalVerbs"}><svg className="svg-icon phrasalVerbsSvg" viewBox="0 0 20 20">
							<path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path></svg> TOEFL</button>

					</div>

					<div className="letters-wrapper"> {/* letters-wrapper */}
						<ul className="letters">
							{this.state.letters.map(function (item) {
								return (
									//<li className={ this.state.matchedLetters.indexOf(item) !==-1 ? "foundedLetter":"letter"}>{item}</li>
									<li className={this.state.matchedLetters.includes(item) ? "foundedLetter" : "letter"}>{item}</li>
								)
							}, this)
							}
						</ul>
					</div> {/* letters-wrapper */}

					<div className="for-loader">
						<div className={this.state.nextWord ? "disable" : "enable"}>
							<div className={this.state.gameStarted ? "pointer-events-auto" : "pointer-events-none"}>
								<div className="alphabet-wrapper">{/* alphabet-wrapper */}
									<ul className="alphabet">
										{this.state.alphabet.map(function (item) {
											return (
												<li className={this.state.clickedLetters.includes(item) ? "clickedLetter" : "alphabetLetters"} onClick={this.checkLetter.bind(this)}>{item}</li>
											)
										}, this)
										}
									</ul>
								</div> {/* alphabet-wrapper */}
							</div>
						</div>
						<img className={this.state.nextWord ? "show-svg-loader" : "hide-svg-loader"} src="./img/puff.svg" />
					</div>

					<div className={this.state.gameStarted ? "lives-words-left-wrapper" : "lives-words-left-wrapper displayNone"}> {/* lives-words-left-wrapper */}
						<p className="lives"><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
						</svg> Your lives: {this.state.lives}</p>

						<p className="words-left"><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.015,11.009l5.063,1.191c0.288,0.068,0.579-0.088,0.682-0.364c0.35-0.931,0.528-1.909,0.528-2.91c0-4.559-3.71-8.269-8.27-8.269c-4.559,0-8.269,3.71-8.269,8.269c0,4.56,3.71,8.27,8.269,8.27c0.891,0,1.768-0.144,2.605-0.426c0.279-0.094,0.445-0.38,0.389-0.668L11.015,11.009z M9.018,16.024c-3.914,0-7.097-3.185-7.097-7.099s3.184-7.097,7.097-7.097s7.098,3.184,7.098,7.097c0,0.686-0.097,1.36-0.291,2.012l-5.427-1.276c-0.192-0.046-0.397,0.01-0.54,0.147c-0.144,0.138-0.207,0.339-0.169,0.534l1.07,5.461C10.193,15.951,9.61,16.024,9.018,16.024z"></path>
							<path fill="none" d="M19.183,13.897c-0.08-0.149-0.22-0.256-0.384-0.295l-5.945-1.398c-0.191-0.046-0.397,0.01-0.54,0.147c-0.143,0.138-0.207,0.34-0.168,0.534l1.171,5.985c0.032,0.165,0.135,0.309,0.281,0.394c0.089,0.052,0.191,0.079,0.293,0.079c0.064,0,0.127-0.01,0.188-0.031c0.154-0.052,3.75-1.311,5.134-4.931C19.272,14.223,19.261,14.046,19.183,13.897z M14.325,17.928l-0.857-4.377l4.375,1.029C16.896,16.443,15.229,17.48,14.325,17.928z"></path>
						</svg> Words left: {this.state.words.length}</p>

						<p className="score"><svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
						</svg> Score: {this.state.score}</p>

					</div> {/* lives-words-left-wrapper */}

				</section>

				<div className={this.state.gameOver ? "modal" : "modal modalHide"}>
					<p className="close-modal" onClick={this.closeModal}>X</p>
					<section>
						<h3><svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
							<path fill="none" d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"></path>
						</svg> GAME OVER! <svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
								<path fill="none" d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"></path>
							</svg></h3>
						<p><svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
							<path fill="none" d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
S4.143,6.98,3.674,6.98z"></path>
						</svg> Your score is {this.state.score}. <svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
								<path fill="none" d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
S4.143,6.98,3.674,6.98z"></path>
							</svg></p>
					</section>
				</div>

				<footer>
					<p className="copyright">© <a href="https://github.com/ChiaLingWeng" target="_blank" rel="external">Chia Ling Weng</a></p>
					<p className="built-with">Built with <span className="heart">❤</span> <img className="react-logo" src={'./img/reactjs-logo.svg'} alt="React.js Logo" title="React.js" /></p>
				</footer>

			</div>
		);
	}
});

ReactDOM.render(
	<Hangmanizr />,
	document.getElementById("app")
);
