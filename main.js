//random number generator function

function randomPinGenerator() {
    const pinGeneratorField = document.getElementById("showingPinGenerator");
    const randomNumber = Math.floor(Math.random() * 9000 + 1000);
    pinGeneratorField.value = randomNumber;
    return pinGeneratorField;
}

// pin Number typing Function

function pinTypingNumber(typeNumber) {
    let inputNumber = document.getElementById('showingTypingNumber');
    inputNumber.value = inputNumber.value + typeNumber;
    return inputNumber.value;
}

//   Input number backspace or remove function

function backspaceTypingNumber() {
    let backspaceNumber = document.getElementById('showingTypingNumber');
    let backSpaceValue = backspaceNumber.value;
    if (backSpaceValue.length > 0) {
        backSpaceValue = backSpaceValue.substring(0, backSpaceValue.length - 1);
        backspaceNumber.value = backSpaceValue;
    }
    return backspaceNumber.value;
}

//Clean Input number  function

function cleanTypingNumber() {
    document.getElementById("showingTypingNumber").value = "";
}

// Message hidden section

document.getElementById("notifyNotMatch").style.display = "none";
document.getElementById("notifyMatch").style.display = "none";

// validation pin generator function

document.getElementById("resultSubmit").addEventListener("click", function () {

    const inputTypingNumber = document.getElementById('showingTypingNumber').value;
    const randomNumberGeneratorField = document.getElementById("showingPinGenerator").value;

    if (inputTypingNumber == randomNumberGeneratorField && randomNumberGeneratorField !== "" && inputTypingNumber !== "") {
        document.getElementById("notifyMatch").style.display = "block";
        document.getElementById("notifyNotMatch").style.display = "none";
    }
    else {
        document.getElementById("notifyNotMatch").style.display = "block";
        document.getElementById("notifyMatch").style.display = "none";
        attemptLeft.innerText -= 1;
        if (attemptLeft.innerText == '0') {
            resultSubmit.disabled = true;
            showingTypingNumber.disabled = true;
            showingPinGenerator.disabled = true;
            resultSubmit.innerText = "Your Attempt Time Expired";
            resultSubmit.style.backgroundColor = "red";
        }
    }
})