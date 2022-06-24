






let refundable = document.querySelector(".refundable")
let non_refundable = document.querySelector(".non-refundable")
let business = document.querySelector(".business")
let total = document.querySelector("#total")

function check_type(isIncrease) {
    let type;
    if (refundable.checked) {
        type = refundable;
        if (isIncrease == true) {
            let text = parseInt(total.innerText);
            total.innerText = text + 50;
        } else if (isIncrease == false && parseInt(total.innerText) > 0) {
            let text = parseInt(total.innerText);
            total.innerText = text - 50;

        }
    } else if (non_refundable.checked) {
        type = non_refundable;
        if (isIncrease == true) {
            let text = parseInt(total.innerText);
            total.innerText = text + 70;
        } else if (isIncrease == false && parseInt(total.innerText) > 0) {
            let text = parseInt(total.innerText);
            total.innerText = text - 70;

        }
    } else if (business.checked) {
        type = business;
        if (isIncrease == true) {
            let text = parseInt(total.innerText);
            total.innerText = text + 80;
        } else if (isIncrease == false && parseInt(total.innerText) > 0) {
            let text = parseInt(total.innerText);
            total.innerText = text - 80
        }
    }

}

let add = document.querySelector(".add")
let remove = document.querySelector(".remove")
add.addEventListener("click", function () {
    check_type(true)
})
remove.addEventListener("click", function () {
    check_type(false)
})

function sendMail(value) {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + encodeURIComponent("This is my subject") +
        "&body=" + encodeURIComponent(value);

    window.location.href = link;
}

// contact section maintain 
let main = document.querySelector(".main")
let hero = document.querySelector("#hero")
let contact = document.querySelector("#contact")
contact.addEventListener("click", function () {
    main.textContent = ''
    main.style.background = "pink"
    main.style.height = "100vh"
    hero.innerHTML = '';
    main.innerHTML = `
  <div class="container">
        <div class=" w-50 mx-auto py-5  form">
            <input  type="text" class="form-control mt-4" id="name" placeholder="Your name">

            <input  type="email" class="form-control mt-4" id="email" placeholder="name@example.com">

            <div class="mb-3">
            <textarea class="form-control mt-5" id="comment" rows="3" placeholder = "Your Commnet"></textarea>
            </div>

            <button id="data-btn" class="btn fw-bold food-btn rounded-0"> Send Data</button>
        </div>
</div>
    
    `

    let form = document.querySelector(".form")
    form.style.height = "400px"
    form.style.margin = "auto"
    form.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn")) {
            let nameInput = document.querySelector("#name")
            let emailInput = document.querySelector("#email")
            let comment = document.querySelector("#comment")
            let value = nameInput.value + " " + emailInput.value + " " + comment;
            sendMail(value)

            nameInput.value = ""
            emailInput.value = ""
            comment.value = ""
        }
    })

})


const submitBtn = document.querySelector(".submit-btn")
const person = document.getElementById('person')



// localStorage item 
const getItem = ()=>{
    const info = localStorage.getItem("info");
    let infoObj;
    if(info){
        infoObj = JSON.parse(info)
    }else{
        infoObj = {};
    }
    return infoObj;
}

const setitem = ()=>{
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;
let personInfo = {
    name,pass,email,
}
let psersonStringified = JSON.stringify(personInfo)
const currentInfo = getItem()
currentInfo[psersonStringified] = 1;
localStorage.setItem('info', JSON.stringify(currentInfo))
 document.querySelector('.signUpModal-body').innerText = 'Welcome to SharryMovie'
 submitBtn.disabled = "true"
 setName(name)
}

const setName = (name)=>{
    const takenVlaue = getItem()
    const keys = Object.keys(takenVlaue)
keys.forEach(key=> {
    const personName =  JSON.parse(key).name;
person.innerText = personName;
person.style.textTransform = "capitalize"
})
}
setName()
// handle sign up button 

submitBtn.addEventListener("click",setitem)

