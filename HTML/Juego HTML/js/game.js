//document.write('<script src="js/player.js"></script>')

class Game {
	constructor() {
		this.camera
		this.esenario
		this.player 	
		this.stage = 1
		this.bullets = []
		this.coins = []
		this.prisoners = []
		this.enemys = []
		this.numBallet = 0
	}
	preLoad() {
		console.log("cargando.....")

	}
	selectPlayer() {

		console.log("selecionar player.....")

		this.player	= new Player()

	}
	start(){
		
		this.camera = new Stage()

		this.esenario = this.camera.draw(this.stage , this.player)

		this.esenario.appendChild(this.player.draw())
		
		this.generateEnemys()

		/////////// Manejo de eventos de teclado ///////////////
		
		var keyboard = {}

		window.onload=function(){
			document.onkeydown = keyDown	
    		document.onkeyup = keyUp			    		
	    }

	    function keyDown(e){
	    	keyboard[e.keyCode] = true
	    	game.mover(keyboard)
	    }

        function keyUp(e){
			keyboard[e.keyCode] = false
	    	game.stopped()
	    	game.mover(keyboard)
	    }
	}

	mover(keyboard) {
		const left = 37             // Arrow <-
		const up = 38 				// Arrow up
		const right = 39			// Arrow ->
		const down = 40				// Arrow down
		const shooting = 97      	// PadNum 1
		const jump = 98 			// PadNum 2
		const grenades = 99			// PadNum 3

		const velosityNormal = 2.5
		const velocitycrouching = 1.5
		const positionBullet = 51
		const positionBulletRuning = 47
		const positionBulletCrouching = 60
		const VelocidaddesplasamientoEsenario = 3
	/*
	if(keyboard[left] && keyboard[up] && keyboard[shooting]){
		//fecha izquierda , flecha arruba disparo
		console.log('correr mirando arriba y disparando')
	    return
	}
	*/
	///----------dos teclas ------------------
		if(keyboard[left] && keyboard[shooting]){
			this.player.runLeftShooting()
			this.player.orientation = "left"
			this.disparar(positionBulletRuning)
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[left] && keyboard[jump]){
			this.player.jumpForward()
			this.player.orientation = "left"
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[left] && keyboard[grenades]){
			this.player.bodyBounceHandGrenades()
			this.player.runLeft()
			this.player.orientation = "left"
			this.camera.moveStage(velosityNormal)
			return
		}
		if(keyboard[right] && keyboard[shooting]){
		    this.player.runRightShooting()
		    this.player.orientation = "right"
		    this.disparar(positionBulletRuning)
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[right] && keyboard[jump]){
			this.camera.moveStage(velosityNormal)
		    this.player.jumpForward()
		    return
		}
		if(keyboard[right] && keyboard[grenades]){
			this.player.bodyBounceHandGrenades()
			this.player.runRight()
			this.player.orientation = "right"
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[up] && keyboard[shooting]){
			this.player.shootingUp()
		    return
		}
		if(keyboard[up] && keyboard[jump]){
			this.player.jump()
		    return
		}
		if(keyboard[up] && keyboard[left]){
			this.player.watchUp()
			this.player.runLeft()
			this.player.orientation = "left"
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[up] && keyboard[right]){
			this.player.watchUp()
			this.player.runRight()
			this.player.orientation = "right"
			this.camera.moveStage(velosityNormal)
		    return
		}
		if(keyboard[down] && keyboard[left]){
			this.player.walkCrouchedLeft()
			this.player.orientation = "left"
			this.camera.moveStage(velocitycrouching)
		    return
		}
		if(keyboard[down] && keyboard[right]){
			this.player.walkCrouchedRight()
			this.player.orientation = "right"
			this.camera.moveStage(velocitycrouching)
		    return
		}
		if(keyboard[down] && keyboard[shooting]){
			//this.player.stabCrouched()
			this.disparar(positionBulletCrouching)
			this.player.shootingCrouched()
		    return
		}
		if(keyboard[down] && keyboard[jump]){
			this.player.jump()
		    return
		}
		if(keyboard[down] && keyboard[grenades]){
			this.player.BounceHandGrenadesCrouched()
		    return
		}
		/*----------basic actions-----------*/
		if(keyboard[left]){
		    this.player.runLeft()
			this.player.orientation = "left"
		    this.camera.moveStage(3)
		    return
		}
		if(keyboard[up]){
			this.player.watchUp()
			return
		}
		if(keyboard[right]){
		    this.player.runRight()
		    this.player.orientation = "right"
			this.camera.moveStage(3)
		    return
		}
		if(keyboard[down]){
		    this.player.crouching()
		    return
		}
		if(keyboard[shooting]){
			this.disparar(positionBullet)
		    this.player.shooting()
		    return
		}
		if(keyboard[jump]){
		    this.player.jump()
		    return
		}
		if(keyboard[grenades]){
		    this.player.bodyBounceHandGrenades()
		    return
		}
		if(keyboard[100]){
			console.log('cambiar arma')
		    if (this.player.arm == 1){
		    	this.player.arm = 2

		    } else {
		    	this.player.arm = 1
		    }
		    return
		}
	}
	disparar(alturaBala) {
		var bullet = new Bullet(this.player.arm , this.player.positionX , this.player.positionY + alturaBala)
		var balletID = "bullet-" + (++this.numBallet)
		bullet.create(this.player.orientation, balletID)

		this.bullets.push(bullet)
	}
	stopped() {
		this.player.stopped()
	}
	collitions(){
		return new Promise((resolve) => {
			var myVar = setInterval(() => { 
				for(var i = 0 ; i < this.bullets.length ; i++) {
					if(this.bullets[i].getPositionX() > 490 || this.bullets[i].getPositionX()  < 0 ){
						this.bullets[i].delete()
						this.bullets.splice(i, 1);
						continue 
					} else {
						for(var j = 0 ; j < this.enemys.length ; j++){
							if(this.enemys[j].status == 'alive'){
								if(this.bullets[i].orientation == 'right'){
									if(this.bullets[i].getPositionX() > this.enemys[j].positionX ) {
										this.bullets[i].delete()
										this.enemys[j].lives -= this.bullets[i].damages
										this.bullets.splice(i, 1);
										break

									} else {
										break
									}

								} else {

									if(this.bullets[i].getPositionX() < this.enemys[j].positionX) {
										this.bullets[i].delete()
										this.enemys[j].lives -= this.bullets[i].damages
										this.bullets.splice(i, 1);
										break

									} else {
										break
									}

								}
							} else {
								this.enemys.splice(j, 1);
							}
						}
					}
				}
			}, 200);			
		})
	}

	generateEnemys(){
		return new Promise((resolve) => {
			var myVar = setInterval(() =>{
				var soldado = new Soldier(450)
			    soldado.draw()
			    this.enemys.push(soldado)
						
			}, 4000);			
		})
	}
}

