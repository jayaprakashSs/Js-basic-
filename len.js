//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write(text.length,"<br>")
//slice
let txt = "Apple, Banana, Kiwi";
document.write(txt.slice(7, 13),"<br>");
//substring
let str = "Apple, Banana, Kiwi";
document.write(str.substring(15, 19),"<br>");
//substr
let tr = "Apple, Banana, Kiwi";
document.write(tr.substr(7, 1),"<br>");
//replace
let ext = "Please visit Microsoft!";
document.write(ext.replace("Microsoft", "W3Schools"),"<br>");
//toUpperCase
let text1 = "Hello World!";
document.write(text1.toUpperCase(),"<br>");
//toLowerCas
let text2 = "Hello World!";       
document.write(text1.toLowerCase(),"<br>");
//concatc
let text3 = "Hello";
let text4 = "World!";
let text5 = text3.concat(" ",text4);
//trim
let text7 = "      Hello World!      ";
let text6 = text7.trim();