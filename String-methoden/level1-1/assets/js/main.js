// Level1-1
console.log("%c === Level_1-1 ===", "background: red; color: yellow");
let firstName= "Sepideh", lastName= "Ghanbary", fullName= `${firstName} ${lastName}`;
console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// Level1-2
console.log("%c === Level_1-2 ===", "background: red; color: yellow");
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
let posH= txt.indexOf("h") , posErth= txt.indexOf("Earth") , posMoon= txt.indexOf("Moon");
console.log(`Position of h is ${posH}  and Position of Erth is ${posErth} and Position of Moon is ${posMoon} `);


// Level1-3
console.log("%c === Level_1-3 ===", "background: red; color: yellow");
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
let pos1= txt2.search(";") , posGreen= txt2.search("green") , posBlue= txt2.search("blue");
console.log(`Position of ; is ${pos1}  and Position of green is ${posGreen} and Position of blue is ${posBlue} `);


// Level1-4
console.log("%c === Level_1-4 ===", "background: red; color: yellow");
const A = 'Susi is going to codingschool';
let varA= A.slice(0,4);
let varB= A.slice(4,7);
let varC= A.slice(5,17) + A.slice(23,A.length);
let varD= A.slice(23,A.length);
document.write(varA+ "<br>");
document.write(varB+ "<br>");
document.write(varC+ "<br>");
document.write(varD+ "<br>");
document.write(`${varA} ${varB} ${varD}` +"<br><br>") ;


// Level1-7
console.log("%c === Level_1-7 ===", "background: red; color: yellow");
document.write("=== Level_1-7 ==="+ "<br><br>") ;
let text = "Sam is good at codingschool";
let textNew= text.replace("coding", "");
console.log(textNew);
document.write(textNew.replace("good" , "bad") + "<br>");
document.write(textNew.replace("Sam" , "Susi") + "<br>");
document.write(textNew.replace("school" , "Tenis") + "<br><br><br>");

// Level1-8
console.log("%c === Level_1-8 ===", "background: red; color: yellow");
document.write("=== Level_1-8 ==="+ "<br><br>") ;
const text8 = "Sam is going to codingschool";
let text8New= (text8.replace("coding" , "")).toUpperCase();
let word1= text8New.slice(0,3);
let word2= text8New.slice(4,6);
let word3= text8New.slice(7,12);
let word4= text8New.slice(13,15);
let word5= text8New.slice(16,22);
document.write(`${word1} ${word2.toLowerCase()} ${word3.toLowerCase()} ${word4.toLowerCase()} ${word5}` + "<br>");
document.write(`${word1.toLowerCase()} ${word2} ${word3} ${word4} ${word5.toLowerCase()}` + "<br>");
document.write(`${word1} ${word2} ${word3} ${word4} ${word5}` + "<br><br><br>");


// Level1-9
console.log("%c === Level_1-9 ===", "background: red; color: yellow");
document.write("=== Level_1-9 ==="+ "<br><br>") ;

let text9_1 = "Sam is going to codingschool",  text9_2 = "Susi" ,  text9_3 = " and ";
text9_1=text9_1.replace("coding" , "")
document.write(text9_1.concat(text9_3 + " to the movie theater")+ "<br>");
document.write((text9_1.slice(0,15)).concat(" the movie theater") + "<br>");
document.write(`${text9_2} ${text9_3} ${text9_1.replace("is","are")}`+ "<br>");
let x= `${text9_2} ${text9_3} ${text9_1.replace("is going to school"," are going to gym and to the movie theater")}`;
document.write(x + "<br>");
let name1= x.slice(0,4);
let y= x.slice(19 , x.length);
document.write(name1 + " is" + y + "<br><br><br>");


// Level2-3
console.log("%c === Level_2-3 ===", "background: red; color: yellow");

function searchTxt(){
    const inputText= (document.querySelector("#search-input").value).toLowerCase();
    const longText= document.querySelector(".longText");
    

    longText.innerHTML = longText.innerHTML.replace(/<span class="highlight">(.+?)<\/span>/gi, '$1');

    longText.innerHTML= longText.innerHTML.replace(new RegExp(inputText, "gi"), "<span class=highlight>"+ inputText+ "</span>");
   

}
