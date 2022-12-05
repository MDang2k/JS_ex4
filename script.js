// bài 1

const firstNum = document.querySelector("#firstNum"),
    secondNum = document.querySelector("#secondNum"),
    thirdNum = document.querySelector("#thirdNum"),
    btn_ex1 = document.querySelector(".btn_ex1"),
    result_ex1 = document.querySelector(".result_ex1");

btn_ex1.addEventListener("click", () => {

    let num1 = firstNum.value * 1,
        num2 = secondNum.value * 1,
        num3 = thirdNum.value * 1

    if (num1 > num2) {
        let temp = num1
        num1 = num2
        num2 = temp
    }

    if (num2 > num3) {
        let temp = num2
        num2 = num3
        num3 = temp
    }

    if (num1 > num2) {
        let temp = num1
        num1 = num2
        num2 = temp
    }

    result_ex1.innerHTML = `${num1} ${num2} ${num3}`
})

// bài 2

const member = document.querySelector("#member"),
    btn_ex2 = document.querySelector(".btn_ex2"),
    result_ex2 = document.querySelector(".result_ex2");

btn_ex2.addEventListener("click", () => {

    switch (member.value) {
        case "B":
            result_ex2.innerHTML = `Hello Bố`
            break;
        case "M":
            result_ex2.innerHTML = `Hello Mẹ`
            break;
        case "A":
            result_ex2.innerHTML = `Hello Anh Trai`
            break;
        case "E":
            result_ex2.innerHTML = `Hello Em Gái`
            break;
        default:
            result_ex2.innerHTML = "Không biết"
    }
})

// bài 3

const firstNum_ex3 = document.querySelector("#firstNum_ex3"),
    secondNum_ex3 = document.querySelector("#secondNum_ex3"),
    thirdNum_ex3 = document.querySelector("#thirdNum_ex3"),
    btn_ex3 = document.querySelector(".btn_ex3"),
    result_ex3 = document.querySelector(".result_ex3");

btn_ex3.addEventListener("click", () => {

    let odd = 0,
        even = 0;

    firstNum_ex3.value * 1 % 2 == 0 ? even++ : odd++;
    secondNum_ex3.value * 1 % 2 == 0 ? even++ : odd++;
    thirdNum_ex3.value * 1 % 2 == 0 ? even++ : odd++;

    result_ex3.innerHTML = `There are ${even} even numbers and ${odd} odd numbers`
})

// bài 4

const firstEdge = document.querySelector("#firstEdge"),
    secondEdge = document.querySelector("#secondEdge"),
    thirdEdge = document.querySelector("#thirdEdge"),
    btn_ex4 = document.querySelector(".btn_ex4"),
    result_ex4 = document.querySelector(".result_ex4");

btn_ex4.addEventListener("click", () => {

    let edge1 = firstEdge.value * 1,
        edge2 = secondEdge.value * 1,
        edge3 = thirdEdge.value * 1;

    console.log(edge1 ** 2, edge2 ** 2, edge3 ** 2);
    if (edge1 ** 2 > edge2 ** 2 + edge3 ** 2 ||
        edge2 ** 2 > edge1 ** 2 + edge3 ** 2 ||
        edge3 ** 2 > edge2 ** 2 + edge1 ** 2) {
        result_ex4.innerHTML = `This is not a triangle`
    } else if (edge1 == edge2 && edge2 == edge3) {
        result_ex4.innerHTML = `This is an equilateral triangle`
    } else if (edge1 == edge2 || edge2 == edge3 || edge1 == edge3) {
        result_ex4.innerHTML = `This is an isoceles triangle`
    } else if (edge1 ** 2 == edge2 ** 2 + edge3 ** 2 ||
        edge2 ** 2 == edge1 ** 2 + edge3 ** 2 ||
        edge3 ** 2 == edge2 ** 2 + edge1 ** 2) {
        result_ex4.innerHTML = `This is a right triangle`
    } else result_ex4.innerHTML = `This is a normal triangle`
})