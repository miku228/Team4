// created by shiki_chu on april 7
function validateform(event){
    event.preventDefault();
    var vaild = true;
    // check for empty input

    if (form.name.value===""){
        document.querySelector('#nameError').textContent="*Required Your Name*";
        valid = false;
        }
    
    // check phone 
    const phoneCheck = document.querySelector('#ContactPhone').value.trim();
    
    // check type of input is number
    if(isNaN(phoneCheck)){
        document.querySelector('#ContactPhoneError').textContent="*Required 10-digit phone number*";
        valid = false;
    }
    // check for empty input
    else if(phoneCheck ===""){
        document.querySelector('#ContactPhoneError').textContent="*Required Contact Numbers*";
        valid = false;
    }
    // check the length of phone number
    else if (phoneCheck.length != 10) {
      document.querySelector('#ContactPhoneError').textContent="*Required 10-digit phone number *";
      valid = false;
    }
};


// // event : 
//   document.form.addEventListener("submit", validateform);
  
// // remove error message
//   document.querySelector('#name').addEventListener("blur", function(){
//       if(this.value !== ""){
//         nameError.textContent = "";
//       }
//   });

//   document.querySelector('#ContactPhone').addEventListener("blur", function(){
//     if(this.value !== ""){
//       ContactPhoneError.textContent = "";
//     }
//   });


document.contactForm.elements[3].addEventListener('click', function() {
 //check each item is filled
  let name = document.contactForm.elements[0].value;
  let mail = document.contactForm.elements[1].value;
  let comment = document.contactForm.elements[2].value;

  if(name == "") {
    console.log("Name is empty!ERROR!!!");
  } else if(mail == "") {
    console.log("Mail is empty!ERROR!!!");
  } else if(comment == "") {
    console.log("Comment is empty!ERROR!!!");
  } else {
    console.log("Contact form is submitted!!!")
  }

  

});