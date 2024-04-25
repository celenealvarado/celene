function ropa(){
    var camisas=prompt("cuantas camisas quieres:")
    var pantalones=prompt("cuantos pantalones quieres:")
    var tenis=prompt("cuantos tenis quieres:")
    var cami;
    var pan;
    var teni;
    var tot;

    cami=camisas*500;
    pan=pantalones*300;
    teni=tenis*1000;
    
    tot=cami+pan+teni;
    alert("Su total sera: "+ tot)
}