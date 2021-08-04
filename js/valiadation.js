"use strict"

document.getElementById('send').addEventListener('click',validar,false)

const validEmail = (email)=>{
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(email.value)
    if (isValid == false) {
        alert('Invalid Email')
    }
}

const validName = (nombre)=>{
    let expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    if(!nombre.value && !expRegNombre.exec(nombre.value)){
        alert('Invalid Name')
    }
}

function validar(){
    const name = document.getElementById('nombre')
    const email = document.getElementById('email')

    validEmail(email)
    validName(name)
}