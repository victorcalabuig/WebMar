
var pics = ["imgs/MVRio.jpg", "imgs/bufanda.jpg", 
"imgs/pelazo.jpg",
"imgs/belleza.jpg",
"imgs/cuello.jpg", 
"imgs/leyendo.jpg", 
"imgs/paellas.jpg", 
"imgs/guapos.jpg", 
"imgs/bebe.jpg",
"imgs/reme2.jpg",
"imgs/reme.jpg",
"imgs/mar.jpg",
"imgs/malota.jpg",
"imgs/falla.jpg", 
"imgs/tren.jpg", 
"imgs/fotografa.jpg",
"imgs/coche.jpg",
"imgs/modelo.jpg","imgs/lengua.jpg", "imgs/crepes.jpg","imgs/suelo.jpg", 
"imgs/mercadona.jpg","imgs/desayuno.jpg", "imgs/malitos.jpg","imgs/monada.jpg","imgs/piripi2.jpg"
,"imgs/piripi.jpg", "imgs/guapa.jpg", "imgs/puentecine.jpg"];

var btnsig = document.querySelector("#siguiente");
var btnant = document.querySelector("#anterior");

var img = document.querySelector("#us");
var counter = 0;

btnsig.addEventListener("click", function () {
	if(counter === 28){
		counter = -1;
	}
	counter = counter + 1;
	img.src = pics[counter];
	
	
});

btnant.addEventListener("click", function (){
	if(counter === 0){
		counter = 29;
	}
	
	counter = counter - 1;
	img.src = pics[counter];
})





