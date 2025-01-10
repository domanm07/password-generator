const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specChar = "§+!%/=();_*?@#<>[]";
const passwd = [];

// Generáló gomb működtetése:
document.getElementById("generateBtn").onclick = handleClick;

function handleClick() {
    const values = getInputValue();
    getReadyPasswd(values);
    console.log(values);
}
// Üzenetet küldő eljárás:
function sendMessage(message) {
    alert(message);
}

// Értékek kinyerése. Ha hiányzik érték az inputból, akkor üzenetet küldünk, input-ra helyezzük a fókszt, és null-t adunk vissza.
function getInputValue() {
    const inputElements = document.querySelectorAll("input");
    const values = {};
    if (inputElements.length > 0) {
        for (let index in inputElements) {
            if (inputElements[index].value === "") {
                sendMessage("Minden adat megadása szükséges!");
                inputElements[index].focus();
                return {};
            }
            //values.push(parseInt((input.value)));
            values[inputElements[index].id] = inputElements[index].value;
        }
        return values;
    }
}

function createPasswdPart(count, collection) {
    for (let i = 0; i < count; i++){
        passwd.push(collection[Math.floor(Math.random() * collection.length)]);
    }
    
}

function getReadyPasswd() {
    const donePasswd = [];
    for (let key in values) {
        switch (key) {
            case 
        }
    }
}