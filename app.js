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

let spans = Array.from(document.getElementsByClassName("weight"));

spans.forEach((span, index) => {
    span.addEventListener(
        "mouseover",
        () => {
            spans[index - 1].className = spans[index - 1].className + " left-1";
            spans[index - 2].className = spans[index - 2].className + " left-2";

            spans[index + 1].className = spans[index - 1].className + " right-1";
            spans[index + 2].className = spans[index - 2].className + " right-2";
         
        }
    );

    span.addEventListener(
        "mouseleave",
        () => {
            spans[index - 1].className = "weight";
            spans[index + 1].className = "weight";
            spans[index - 2].className = "weight";
            spans[index + 2].className = "weight";
        }
    )
});

console.log(spans[54].className);