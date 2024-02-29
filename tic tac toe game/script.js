let button = document.querySelectorAll(".box");
let resetbtn = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let winnermsg = document.getElementById("winner");
let btn1 = document.getElementById("btn1");
let turn0 = true;
let winpattarns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
button.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })

})
const disbtn = () => {
    for (let box of button) {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    winnermsg.innerText = `Congratulation winner.......${winner}`;
    winnermsg.classList.remove("hide");
    disablebox();
    winner.innerText = "";

}
const enablebox = () => {
    for (let box of button) {
        box.disabled = false;
        winnermsg.classList.add("hide");
        box.innerText = "";

    }

    const disablebox = () => {
        for (let box of button) {
            box.disabled = true;
        }
    }
}

const resetGame = () => {
    turn0 = true;
    enablebox();
    box.innerText = "";
}
let checkwinner = () => {
    for (let patern of winpattarns) {
        let val1 = button[patern[0]].innerText;
        let val2 = button[patern[1]].innerText;
        let val3 = button[patern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showwinner(val1);
            }
        }
    }
}
btn2.addEventListener("click", resetGame);
btn1.addEventListener("click", resetGame);