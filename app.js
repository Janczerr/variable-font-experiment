let logo = document.getElementById("logo");
let logoLength = logo.textContent.length;

let i = 0;

let innerSpans = "";

//Rozdzielanie textu na spany
while (i < logoLength){
    innerSpans = innerSpans + "<span class=weight>" + logo.textContent.charAt(i) + "</span>";
    i++;
}

logo.innerHTML = innerSpans;

let spans = document.getElementsByClassName("weight");

Array.from(spans).forEach(element => {
    console.log(element);
});