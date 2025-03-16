
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const generateButton = document.getElementById("btn")
const comboOne = document.getElementById("password1")
const comboTwo = document.getElementById("password2")


let passwordLength = 15

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword(){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}






generateButton.addEventListener("click", function() {

        comboOne.value = generateRandomPassword()
        comboTwo.value = generateRandomPassword()


    })

    comboOne.addEventListener("click",function(){
        copyToClipBoard(comboOne)
    })

    comboTwo.addEventListener("click", function(){
        copyToClipBoard(comboTwo)
    })

    function copyToClipBoard(inputfield){
        inputfield.select()
        document.execCommand("copy")

        window.getSelection().removeAllRanges()

        inputfield.style.color = "#ECFDF5"

        setTimeout(function(){
            inputfield.style.color = "#55F991"
        },3000)
    }



/*

function generatePasswords(){
    let passwordOne =""
    let passwordTwo = ""

    for(let i=0; i<15; i++){
        passwordOne += characters[i]

    }

    
} */

