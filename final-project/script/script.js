const humButton = document.querySelector("#myButtom");
const menuLink = document.querySelector(".menuLinks");
const header= document.querySelector("header");

humButton.addEventListener("click", ()=>{
    menuLink.classList.toggle("open");
    humButton.classList.toggle("open");
    header.classList.toggle("open");
})

const cookieInfor = document.querySelector(".cookies");
const url = ("data/products.json");

async function getProductsInfo() {
    const response = await fetch(url);
    const productData = await response.json();
    displayProducts(productData.products);

    
}

getProductsInfo();
const displayProducts = (productInformation) =>{
    productInformation.forEach((cookie)=>{
        var card = document.createElement("div");
        var image = document.createElement("img");
        var name= document.createElement("h3");
        var info = document.createElement("p");
        name.textContent=`${cookie.name}`;
        info.textContent= `${cookie.description}`
        image.setAttribute("src", cookie.image);
        image.setAttribute("loading","lazy") ;
        image.setAttribute("alt", `${cookie.name}`);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(info);
        cookieInfor.appendChild(card);

    })
}

const messsegeClient = document.querySelector(".client-messege");

function checkLastVisit() {
  const lastVisit = localStorage.getItem('lastVisit');

  // If there's a last visit date, display a message
  if (lastVisit) {
      const message = `Welcome back! Your last visit was on ${new Date(lastVisit).toLocaleString()}.`;
      messsegeClient.innerHTML=message
  } else {
    messsegeClient.innerHTML= "Welcome to Mr Cookies page!";
  }

  // Update the last visit date to the current date
  localStorage.setItem('lastVisit', new Date().toISOString());
}

// Call the function on page load
checkLastVisit();
  

