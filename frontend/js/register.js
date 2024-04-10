let myForm = document.querySelector(".myform")
let inputField = myForm.getElementsByTagName("input")
let validField = myForm.getElementsByTagName("p")

const backendURL = "https://futurewebapp-api.onrender.com/std"


// Validation Function
function Validation() {
    // Clear all ValidFields
    for (let x = 0; x < validField.length; x++) {
        validField[x].style.display = "none"
    }
    let check = 0
    for (let i = 0; i < inputField.length; i++) {
        if (inputField[i].value == "") {
            validField[i].style.display = "block"
        }
        else {
            check++;
        }
    }
    if (check == inputField.length) {
        return true
    }
    else {
        return false
    }
}

// Register Function
function RegisterFun() {
    let ch = Validation()
    if (ch) {
        const name = document.getElementById("sname")
        const email = document.getElementById("smail")
        const mobile = document.getElementById("sph")
        const city = document.getElementById("scity")

        const data={
            name:name.value,
            email:email.value,
            mobile:mobile.value,
            city:city.value
        }
        fetch(backendURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
        alert("registered successfully. Thank you!")
       name.value=""
       email.value=""
       mobile.value=""
       city.value=""
        
    }
    

}