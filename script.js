// Example of a database with blocked bank accounts

const blockedBankAccounts = [
    "97500105174735761646",
    "74500105173475126198",
    "75500105171827358468",
    "741243438939515813",
    "4850519824981492784396"
];


const img = document.getElementById("uplimg");
const btn = document.getElementById("btn")
const img2 = document.getElementById("uplimg2");
const btn2 = document.getElementById("btn2")
const img3 = document.getElementById("uplimg3");
const btn3 = document.getElementById("btn3")
const img4 = document.getElementById("uplimg4");
const btn4 = document.getElementById("btn4")

const p = document.createElement("P");


btn.addEventListener("click", () => {
    checkImg(img);
})

btn2.addEventListener("click", () => {
    checkImg(img2);
})

btn3.addEventListener("click", () => {
    checkImg(img3);
})

btn4.addEventListener("click", () => {
    checkImg(img4);
})

function checkImg (img) {
    let textFromImg = [];
    Tesseract.recognize(
    img,
    'eng',
    // { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        textFromImg.push(text.replace(/[^0-9]/g, ''));
        textFromImg = textFromImg.toString();
                
        function result () {
            for (element of blockedBankAccounts) {
                if (textFromImg === element) {
                    img.style.border = "4px solid red";
                    img.parentElement.appendChild(p).innerHTML = `Blocked Bank Account: ${textFromImg}`;
                    return;
                }
            }
            img.style.border = "4px solid green";
             img.parentElement.appendChild(p).innerHTML = `Clean Bank Account: ${textFromImg}`;
        } 
        result();
    })
}
