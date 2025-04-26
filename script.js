let divs = document.querySelectorAll(".box");


for (div of divs) {
    console.log(div.innerText)
}

divs[0].innerText = "new unique value 1"
divs[1].innerText = "new unique value 2"
divs[2].innerText = "new unique value 3"

