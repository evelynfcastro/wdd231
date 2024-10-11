const currenlyUrl = window.location.href;
console.log(currenlyUrl);
const everything= currenlyUrl.split("?")

let formData = everything[1].split("&");
console.log(formData);



function cleanInfo(item){
   
    formData.forEach((element) => {
        if (element.startsWith(item)){
            result = element.split("=")[1];
            
        }
    })
    return (result );
    
}
const showInfo = document.querySelector("#results");
showInfo.innerHTML = ` Thank you ${cleanInfo("first")} ${cleanInfo("last")}, for schedule an appoiment
At ${cleanInfo("fecha")}`;
