let text = document.getElementById("text");

function textToSpans(element, cssClass) {
    let i = 0;
    let innerSpans = "";

    while (i < element.textContent.length){
        innerSpans = innerSpans + '<span class="'+ cssClass + '">' + element.textContent.charAt(i) + "</span>";
        i++;
    }

    element.innerHTML = innerSpans;
}

textToSpans(text, 'weight');

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