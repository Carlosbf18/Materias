class Bullet{
	constructor(type, origenX, origenY ){
		this.bullet
		this.id
		this.type = type
		this.positionX = origenX 
		this.positionY = origenY
		this.damages = 0
		this.orientation
		this.destroy = false
	}

	create(orientation, balletID){
		this.id = balletID
		var  bullet = document.createElement('div')
		bullet.setAttribute('id',balletID)
		bullet.style.height = '5px'
		bullet.style.width = '5px'
		bullet.style.background = 'yellow'
		bullet.style.position = 'absolute'
		
		this.damages = 1
		this.orientation = orientation

		if (this.orientation == "right") {
			bullet.style.top = this.positionY + 'px'
			this.positionX += 51
			bullet.style.left = this.positionX + 'px'
			bullet.style.animation = 'bullet-fire-right 9s forwards linear'

		}
		if (this.orientation == "left") {
			bullet.style.top = this.positionY + 'px'
			this.positionX -= 17
			bullet.style.left = this.positionX + 'px'
			bullet.style.animation = 'bullet-fire-left 9s forwards linear'
		}

		this.bullet = bullet
		
		game.esenario.appendChild(this.bullet)
		
	
	}
	delete(){
		
		game.esenario.removeChild(this.bullet)
	}

	getPositionX(){
		return this.bullet.offsetLeft
	}
}