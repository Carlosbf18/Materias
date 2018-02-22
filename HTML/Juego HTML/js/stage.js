class Stage{
	constructor(){
		this.camera 
		this.template1
		this.template2
		this.template1X = 0
		this.template2X = 0
		this.player
	}
	
	draw(stage, player){
		this.player = player
		var camara = document.createElement("div")
		camara.setAttribute("id","camera")
		camara.style.height = "220px"
		camara.style.width = "500px"
		camara.style.background = "white"
		camara.style.position = "relative"
		camara.style.aling = "center"
		document.body.appendChild(camara)

		var template1 = document.createElement("div");
		template1.style.height = "220px"
		template1.style.width = "500px"
		template1.style.position = "absolute"
		template1.style.aling = "center"
	    template1.style.backgroundImage = 'url("img/stages/MetalSlug4-Mission1.png")'

		var template2 = document.createElement("div");
		template2.style.height = "220px"
		template2.style.width = "500px"
		template2.style.position = "absolute"
		template2.style.aling = "center"
	    template2.style.backgroundImage = 'url("img/stages/stage1-Loop.png")'

	    this.template1 = template1
	    this.template2 = template2

	    camara.appendChild(this.template1)
		camara.appendChild(this.template2)

		this.camera = camara

		return this.camera
	}
	moveStage(vel){

		if (this.player.positionX > 230 && this.player.orientation === "right" ) {
			if ( this.template1X > -2550) {
				this.template1X -= vel
				this.template1.style.backgroundPosition = this.template1X+"px 0px"
			} else {
				console.log(this.template1X)
				if (this.template1X > -2551 ) {  // 3089 fin del esenario1 
					//trancicion a la segunda parte del mapa
					console.log("pasar de esenario")
					this.template1.style.backgroundPosition = "-3090px 0px"
					this.template1X = -3090				
				}
				else{
					if (this.template1X > -4600) {
					console.log("etapa2")
					this.template1X -= vel
					this.template1.style.backgroundPosition = this.template1X+"px 0px"
					} else {
						if (this.template2X > -2045) {
							console.log("Template2")
							this.template1X -= vel
							this.template1.style.backgroundPosition = this.template1X+"px 0px"
					
							console.log(this.template2X)

							this.template2X -= vel
							this.template2.style.backgroundPosition = this.template2X+"px 0px"	
						} else {
							console.log("llegar al final")
							this.template2.style.backgroundPosition = "0px 0px"
							this.template1.style.backgroundPosition = "-5105px 0px"
						}		
					}
				}
			}

		} else {

			if (this.player.orientation === "right"){
				this.player.positionX += vel
				this.player.player.style.left = this.player.positionX +"px"
			} 
			if (this.player.positionX > 5 && this.player.orientation === "left"){
				this.player.positionX -= vel
				this.player.player.style.left = this.player.positionX +"px"
			}
		}
	}
}