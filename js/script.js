let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        licuadora.classList.add("active");
        // console.log("me prendiste"); para probar si funciona.
    }else{
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        // console.log("me apagaste"); para probar si funciona.
    }
}