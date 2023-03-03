const generateBtn = document.querySelector('.btn') // "generate" button
const generatedPassword = document.getElementById('password')

function getPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]"
    let passwordLength = 16;
    let password = ''

    for (let i=0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    generatedPassword.value = password
}

generateBtn.addEventListener('click', getPassword)


// copy to clipboard
const alertBox = document.querySelector('.alertBox')
const copyImg = document.querySelector('.copy')

// function copyPassword(){
//     const copyPassText = document.getElementById('password')
//     copyPassText.select()
//     copyPassText.setSelectionRange(0, 9999)
//     document.execCommand('copy')
//     alertBox.classList.toggle('active')

//     if(alertBox.style.display === 'none'){
//         copyImg.style.top = '90px'
//     }else{copyImg.style.top = '113px'}

// }

function fiveout(){
    alertBox.classList.remove('active')
}


copyImg.addEventListener('click', ()=>{
    const copyPassText = document.getElementById('password')
    copyPassText.select()
    copyPassText.setSelectionRange(0, 9999)
    document.execCommand('copy')
    alertBox.classList.add('active')
    setInterval(fiveout,1500)
})