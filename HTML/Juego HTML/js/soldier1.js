class Soldier {
	constructor(X){
		this.soldier
		this.positionX = X
		this.positionY = 105
		this.orientation = 'left'
		this.lives = 1
		this.grenades = 10
		this.status = "alive"
	}
	draw() {
		var soldier1 = document.createElement('div')
		soldier1.style.width = '55px'
		soldier1.style.height = '50px'
		/*soldier1.style.background = 'red'*/
		soldier1.style.position = 'absolute'
		soldier1.style.top = '134px'
		soldier1.style.left = this.positionX +'px'
	    soldier1.style.backgroundImage = 'url("img/players/soldier1.png")'
	    soldier1.style.backgroundPosition = '0px 0px'
		this.soldier = soldier1
		
		game.esenario.appendChild(this.soldier)

		this.move()
		.then (
			
		)

	}

	move(orientation){
		
		return new Promise((resolve) => {
			var myVar = setInterval(() =>{ 
				if (this.lives <= 0) {
					this.delete()
					clearInterval(myVar)
					resolve()
				} else{
					setTimeout(this.soldierCrouched(), 500);
					this.run()
				}
			}, 200);			
		})
	}

	walk(){
		this.soldier.style.transform = 'translate('+ 500 +'px) inherit'
	}

	run() {
		this.soldier.style.backgroundPosition = '0px -50px'
		this.soldier.style.animation = 'runSoldier 1s steps(12) infinite'
	}
	jumpObstacle() {
		this.soldier.style.backgroundPosition = '0px -150px'
		this.soldier.style.animation = 'jumpObstacle 1s steps(8) infinite'
	}
	soldierCrouched() {
		this.soldier.style.backgroundPosition = '0px -200px'
		this.soldier.style.animation = 'soldierCrouched 1s steps(8) 1'
	}
	soldierShooting() {
		this.soldier.style.animation = 'soldierShooting 0.8s steps(10) infinite'
	}
	reloadWeapon() {
		this.soldier.style.animation = 'reloadWeapon 1s steps(10) infinite'
	}

	shootFromCrouching() {
		this.soldier.style.animation = 'shootFromCrouching 1s steps(11) infinite'
	}
	rechargeCrouchingWeapon() {
		this.soldier.style.animation = 'rechargeCrouchingWeapon 1s steps(8) infinite'
	}

	victory(){
		this.soldier.style.animation = 'victory 1s steps(6) infinite'
	}

	delete(){
		
		this.status = "dead"
		game.esenario.removeChild(this.soldier)
	}
}