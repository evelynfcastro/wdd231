const currenlyUrl = window.location.href;
  console.log(currenlyUrl);

  const everything = currenlyUrl.split('?');
  let formData = everything[1].split('&');

console.log(formData)


function displayForm(cup){
  formData.forEach((element)=>{
    if (element.startsWith(cup)){
      result= element.split("=")[1];
      result=result.replace("%40", "@");
    }
  })
  return(result);
}

const showInfo = document.querySelector("#results");
const submitForm = document.querySelector(".submitForm");
 // Prevent default action of the button

      //document.querySelector("#timestamp").value = new Date().getTime();

      // Update results
  showInfo.innerHTML = 
          `<h2>Thank you for your messege ${displayForm("firstName")}  ${displayForm("lastName")}</h2>
          <p>Your email: ${displayForm("email")}<br>
             Your phone number: ${displayForm("phoneNum")}<br>
          </p>
          <h4> Our team will read and respond you soon! </h4>`;
