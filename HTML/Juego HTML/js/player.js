class Player {
	constructor()
	{
		this.player
		this.boby 
		this.legs
		this.positionX = 5
		this.positionY = 105
		this.orientation = 'right'
		this.arm = 2
		this.lives = 3
		this.grenades = 10
	}
	draw()
	{
		var player1 = document.createElement("div")
		player1.style.height = "78px"
		player1.style.width = "70px"
		//player1.style.background = "red"
		player1.style.position = "absolute"
		player1.style.top = "105px"
	    player1.style.transformOrigin = "22px"

		this.player = player1

		var body = document.createElement("div")
		body.style.height = "70px"
		body.style.width = "70px"
		body.style.backgroundImage = 'url("img/players/Marco1.png")'
		body.style.position = "absolute"
		body.style.backgroundPosition = "0px 35px"

		this.body = body

		var legs = document.createElement("div")
		legs.style.height = "31px"
		legs.style.width = "70px"
		legs.style.top = "47px"			
		legs.style.backgroundImage = 'url("img/players/Marco1.png")'
		legs.style.position = "absolute"
		legs.style.backgroundPosition = "0px -35px"
		
		this.legs = legs

		player1.appendChild(this.legs)
		player1.appendChild(this.body)

		return player1
	}
	//---------------------------body-------------------------------------
	bodyMain(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "0px 35px"
			this.body.style.animation = "body-main 0.6s steps(4)  infinite"			
		} else {
			this.body.style.backgroundPosition = "-350px 35px"
			this.body.style.animation = "body-main2 0.6s steps(4)  infinite"
		}
	}

	bodyWatchUpAll(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "0px -490px"
			this.body.style.animation = "body-watchUpAll 0.6s steps(4)  infinite"
		} else {
			this.body.style.backgroundPosition = "0px -1470px"
			this.body.style.animation = "body-watchUpAll2 1.3s steps(7)  infinite"			
		}
	}

	bodyJump(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "-0px -140px"
			this.body.style.animation = "body-jump 0.6s steps(6)"
		} else {
			this.body.style.backgroundPosition = "0px -1400px"
			this.body.style.animation = "body-jump2 0.6s steps(6)"
		}
	}
	bodyJumpForward(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "-0px -840px"
			this.body.style.animation = "body-jumpForward 0.5s steps(6)"
		} else {
			this.body.style.backgroundPosition = "-495px -1400px"
			this.body.style.animation = "body-jumpForward2 0.5s steps(6)"		
		}
	}
	bodyShooting(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "-0px -350px"
			this.body.style.animation = "body-Shooting 0.4s steps(10) infinite"
		} else {
			this.body.style.backgroundPosition = "-0px -1540px"
			this.body.style.animation = "body-Shooting2 0.4s steps(4) infinite"
		}
	}
	bodyShootingUp(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "-0px -560px"
			this.body.style.animation = "body-ShootingUp 0.4s steps(10) infinite"
		} else {
			this.body.style.backgroundPosition = "-350px -1543px"
			this.body.style.animation = "body-ShootingUp2 0.6s steps(4) infinite"
		}
	}
	bodyShootingDown(){
		this.body.style.backgroundPosition = "-0px -630px"
		this.body.style.animation = "body-ShootingDown 0.4s steps(7) infinite"
	}
	bodyStab(){
		this.body.style.backgroundPosition = "-0px -700px"
		this.body.style.animation = "body-knife 0.8s steps(12) infinite"
	}
	bodyBounceHandGrenades(){
		if(this.arm == 1){
			this.body.style.backgroundPosition = "-0px -770px"
			this.body.style.animation = "body-boom 0.6s steps(5) infinite"
		} else {
			this.body.style.backgroundPosition = "-0px -1750px"
			this.body.style.animation = "body-boom2 0.6s steps(6) infinite"
		}
	}

	//--------------------------legs--------------------------
	legsStopped(){
		this.legs.style.backgroundPosition = "0px -35px"
		this.legs.style.animation = "stopped 0.5s steps(5)"
	}
	legsRunnig(){
		this.legs.style.backgroundPosition = "0px -105px"
		this.legs.style.animation = "run 0.7s steps(12) infinite" 
	}
	legsJump(){
		this.legs.style.backgroundPosition = "-0px -210px"
		this.legs.style.animation = "legs-jump 0.7s steps(8)"
	}
	legsJumpForward(){
		this.legs.style.backgroundPosition = "-0px -315px"
		this.legs.style.animation = "legs-jumpForward 0.5s steps(6)"
	}
	//------------------Crouching Actions---------------------------
	crouching(){
		this.body.style.display = "none"
		this.legs.style.display = "none"
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -917px"
		this.player.style.animation = "bend 0.6s steps(8) "
		//this.player.style.backgroundPosition = "-490px -917px"
	}
	walkCrouchedRight(){
		this.player.style.transform = "scaleX(1)"		
		this.body.style.display = "none"
		this.legs.style.display = "none"
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -1010px"
		this.player.style.animation = "bend-forward 0.8s steps(11) infinite"	
	}
	walkCrouchedLeft(){
		this.player.style.transform = "scaleX(-1)"
		this.body.style.display = "none"
		this.legs.style.display = "none"	
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -1010px"
		this.player.style.animation = "bend-forward 0.8s steps(11) infinite"
	}
	stabCrouched(){
		console.log("acuchillar agachado")
		this.body.style.display = "none"
		this.legs.style.display = "none"
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -1106px"
		this.player.style.animation = "bend-knife 0.8s steps(12) infinite"
	}
	shootingCrouched()
	{
		console.log("acuchillar disparar agachado")
		this.body.style.display = "none"
		this.legs.style.display = "none"
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -1202px"
		this.player.style.animation = "bend-shooting 0.5s steps(11) infinite"

	}
	BounceHandGrenadesCrouched(){
		console.log("acuchillar arrojar granada agachado")
		this.body.style.display = "none"
		this.legs.style.display = "none"
		this.player.style.backgroundImage = 'url("img/players/Marco1.png")'
		this.player.style.backgroundPosition = "0px -1300px"
		this.player.style.animation = "bend-granads 0.5s steps(5) infinite"
		
	}
/////////////////////////////Composite actions////////////////////////////////////////////////////////

	runRight(){
		this.player.style.transform = "scaleX(1)"
		this.body.style.top = "-4px"
		this.legsRunnig()
	}
	runRightShooting(){
		this.runRight()
		this.shooting()
	}
	runLeft(){
		this.player.style.transform = "scaleX(-1)"
		this.body.style.top = "-4px"
		this.legsRunnig()
	}
	runLeftShooting(){
		this.runLeft()
		this.shooting()
	}
	stopped(){
		this.player.style.animation = ""
		this.body.style.display = "block"
		this.legs.style.display = "block"	
		this.player.style.backgroundImage = 'none'
		this.body.style.top = "0px"
		this.bodyMain()
		this.legsStopped()	
	}
	jump(){
		this.player.style.animation = "jump-player 0.6s"
		this.body.style.top = "-4px"
		this.bodyJump()
		this.legsJump()
	}
	jumpForward(){
		this.player.style.animation = "jump-player 0.6s"
		this.body.style.top = "-3px"
		this.bodyJumpForward()
		this.legsJumpForward()	
	}
	watchUp(){
		this.bodyWatchUpAll()
	}
	shooting(){
			this.bodyShooting()
	}

	shootingUp(){
		this.bodyShootingUp()
		
	}


	/*	
	shootingDown(){
		switch(this.arm)
		{
			case 1:
				this.body.style.top = "22px"
				this.bodyShootingDown()
				this.legs.style.backgroundPosition = "-0px -210px"
				this.legs.style.animation = "legs-jump 0.3s steps(8) infinite"	
			break
		}
	}
	shootingKnife(){
		switch(this.arm)
		{
			case 1:
				this.bodyKnife()
			break
		}
	}

	boom(){
		this.bodyBoom()
	}
	*/

}

