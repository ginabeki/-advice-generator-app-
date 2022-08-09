const headingEl = document.getElementById("heading");
const textEL = document.getElementById("text");
const buttonEL = document.getElementById("button");


const url = "https://api.adviceslip.com/advice"

buttonEL.addEventListener("click", () => {
    getData();
});

async function getData () {
    const response = await fetch (url);
    const data = await response.json();
    //destructuring
    const{advice, id} = data.slip;

    headingEl.textContent = id;
    textEL.textContent = advice;
};


