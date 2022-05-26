function Calcular() {
    var vr1 = document.getElementById('t1');
    var vr2 = document.getElementById('t2');
    var vr3 = document.getElementById('t3');
    let vr1Value = vr1.value;
    let vr2Value = vr2.value;
    let vr3Value = vr3.value;
    if(vr1Value == "" || vr2Value == "" || vr3Value == ""){
        alert("Ingrese todos los campos");
        return;
    }
    let vr1Invalido = esNumeroInvalido(vr1);
    let vr2Invalido = esNumeroInvalido(vr2);
    let vr3Invalido = esNumeroInvalido(vr3);
    if(vr1Invalido || vr2Invalido || vr3Invalido){
        return;
    }
    var p = (parseInt(vr1Value) + parseInt(vr2Value) + parseInt(vr3Value)) / 3;
    const pPromedio = document.getElementById('promedio');
    pPromedio.innerHTML = p;
    ValidarNota(p, pPromedio);
    console.log(p);

}

function esNumeroInvalido(elemento){
	let val = elemento.value;
	if(val<0 || val>10)
	{
        alert("Ingrese un número entre 1 y 10. De lo contrario, el número ingresado no será válido.");
		elemento.style.background = "#ED2C2C";
        elemento.style.color = "white";
        return true;
	}
	else
	{
		elemento.style.background = "#65F456";
        elemento.style.color = "white";
        return false;
	}
}

function ValidarNota(promedio, pPromedio) {
    let imagen = document.getElementById("img");
    if(promedio<6){
        pPromedio.style.color = "red";
        imagen.innerHTML = '<img src="https://c.tenor.com/nSDeRB_kF4wAAAAC/fade-sad-emoji.gif">';
    }
    else{
        pPromedio.style.color = "green";
        imagen.innerHTML = '<img src="https://c.tenor.com/yIWM3TO6ScEAAAAd/meme-approved-knuckles.gif">';
    }
}

function NotaMax() {
    var vr1 = document.getElementById('t1').value; 
    var vr2 = document.getElementById('t2').value; 
    var vr3 = document.getElementById('t3').value;
    let max = Math.max(vr1, vr2, vr3);
    let imagen = document.getElementById("img");
    let maxNota = document.getElementById('notamax');
    maxNota.innerHTML = "";
    
    if(max == vr1) {
        maxNota.innerHTML = "Matemática";
        imagen.innerHTML = '<img src="https://i.pinimg.com/originals/2f/fd/a7/2ffda78f05177b8090e1739a1fe7e289.gif">';
    }
    if(max == vr2) {
        if(maxNota.innerHTML!=="") maxNota.innerHTML += ", "
        maxNota.innerHTML += "Lengua";
        imagen.innerHTML = '<img src="https://i.pinimg.com/originals/2f/fd/a7/2ffda78f05177b8090e1739a1fe7e289.gif">';
    }
    if(max == vr3) {
        if(maxNota.innerHTML!=="") maxNota.innerHTML += ", "
        maxNota.innerHTML += "EFSI";
        imagen.innerHTML = '<img src="https://i.pinimg.com/originals/2f/fd/a7/2ffda78f05177b8090e1739a1fe7e289.gif">';

    }
    maxNota.style.color = "#1A4EC4";
    console.log(max);
}