function check(){
    const nummber = Number(document.querySelector("#num").value);
    const output= document.querySelector("#output");
    output.innerHTML= nummber >=18 ? "Person volljährig" : "Person minderjährig";
}

function checkPass(){
    const pass= document.querySelector("#pass");
    const output= document.querySelector("#outputPass");
    let bool= String(pass.value).length >=8 ? true : false;
    bool ? output.style.color = "green" : output.style.color = "#dc143c";
    output.innerHTML= bool ? "Wilkomen" : "Password ist nicht gültig";

}

function checkBundesland(){
    const bundesland= document.querySelector("#bundeslandInfo").value;
    const ergebnis= document.querySelector("#bundeslandInfoErgebnis");
    let para = document.createElement("p");
    ergebnis.appendChild(para);
    switch (bundesland) {
        case "Baden-Württemberg" :
            para.innerHTML= "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "Bayern" :
            para.innerHTML= "hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "Berlin" : 
            para.innerHTML= "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
            break;
        case "Brandenburg" :
            para.innerHTML= "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstad"
            break;
        default :
        para.innerHTML= "Ein solches Bundesland gibt es in Deutschland nicht."
            break;
    } 
}