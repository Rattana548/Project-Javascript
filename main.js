window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    let height = document.querySelector("#height").value;

    let weight = document.querySelector("#weight").value;

    let result = document.querySelector("#result");

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 18.5) result.innerHTML = `ผลลัพธ์ : <span>${bmi}</span> `;

    else if (bmi > 18.5 && bmi <= 22.9) result.innerHTML = `ผลลัพธ์ : <span>${bmi}</span>`;

    else if (bmi > 22.9 && bmi <= 24.9) result.innerHTML = `ผลลัพธ์ : <span>${bmi}</span>`;

    else if (bmi > 24.9 && bmi <= 29.9) result.innerHTML = `ผลลัพธ์ : <span>${bmi}</span> `;

    else if (bmi > 29.9) result.innerHTML = `ผลลัพธ์ : <span>${bmi}</span> `;

    else result.innerHTML = `<span> </span>`;

}
