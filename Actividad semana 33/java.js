function consola(){
	
	a=producto.value
	b=Number(cantidad.value)
	c=Number(dinero.value)
	x="Papitas"
	y="Chocolatina"
	z="Doritos"
	cantidadp=10
	cantidadc=10
	cantidadd=10

	if(a==x){
		pp=3500

		if(b<=10){
			total=pp*b
			devuelta=c-total
			cantidadp=cantidadp-b
			if(devuelta>=0){
				resultado.innerHTML="Compro "+a+" en cantidad "+b+" y su devuelta es de "+devuelta
			}
			if(devuelta<0){
				resultado.innerHTML="No hay dinero suficiente para realizar la compra"
			}
		}
		if(b>10){
			resultado.innerHTML="La cantidad solicitada no esta disponible"
		} 
	}
	if(a==y){
		pc=2500

		if(b<=10){
			total=pc*b
			devuelta=c-total
			cantidadc=cantidadc-b
			if(devuelta>=0){
				resultado.innerHTML="Compro "+a+" en cantidad "+b+" y su devuelta es de "+devuelta
			}
			if(devuelta<0){
				resultado.innerHTML="No hay dinero suficiente para realizar la compra"
			}
		}
		if(b>10){
			resultado.innerHTML="La cantidad solicitada no esta disponible"
		} 
	}
	if(a==z){
		pd=1500

		if(b<=10){
			total=pd*b
			devuelta=c-total
			cantidadd=cantidadd-b

			if(devuelta>=0){
				resultado.innerHTML="Compro "+a+" en cantidad "+b+" y su devuelta es de "+devuelta
			}
			if(devuelta<0){
				resultado.innerHTML="No hay dinero suficiente para realizar la compra"
			}
		}
		if(b>10){
			resultado.innerHTML="La cantidad solicitada no esta disponible"
		} 
	}
	disponibles.innerHTML="La cantidad de "+x+" son "+cantidadp+", la cantidad de "+y+" son "+cantidadc+
						  " y la cantidad de "+z+" son "+cantidadd
}
