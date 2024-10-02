const humButton = document.querySelector('#myButtom');
const navLinks = document.querySelector('.menuLinks');

humButton.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    humButton.classList.toggle('open');
})

const url=("data/members.json");
const cards = document.querySelector('#cards');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.membersInformation);


}

getMembersData()
const displayMembers= (membersInformation)=>{
    membersInformation.forEach((member)=>{
        var card= document.createElement("section");
        var image = document.createElement("img");
        var name= document.createElement("h3");
        var phone = document.createElement("h4");
        var url = document.createElement("a");
        name.textContent = `${member.name}`;
        phone.textContent = member.phoneNumber; // Assuming member has a phone property
        url.textContent = "Website"; // Set link text
        url.setAttribute('href', member.url); // Assuming member has a profileUrl property

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Portrait of ${member.name}`); 
        image.setAttribute('loading', 'lazy');
    
    
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(url)
        cards.appendChild(card);
    
    })

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener('click', ()=>{
    display.classList.add("grid");
	display.classList.remove("list");
})

listbutton.addEventListener("click", () => {
	
	display.classList.add("list");
	display.classList.remove("grid");
});

const today = new Date();
const yearElement = document.querySelector(".year");

// Update the content of the element
yearElement.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
const lastModified = new Date(document.lastModified);

// Format the last modified date as desired (e.g., using toLocaleDateString)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);

// Update the content of the element with id="lastModified"
document.getElementById('lastmod').textContent = formattedDate;

//weather section
const townName= document.querySelector(".city");
const image = document.querySelector("img");
const description = document.querySelector(".description")
const temperature = document.querySelector(".temp");

const myApiKey ="28da3ca09f8cafa4321d1df173d2cbea";
const lat="-30.88835925942744";
const long="-55.52152248306298";

const myUrl =`//api.openweathermap.org/data/2.5/weather?lat=-30.88835925942744&lon=-55.52152248306298&appid=28da3ca09f8cafa4321d1df173d2cbea&units=imperial`

async function apiFetch(){
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayWeather(data){
townName.innerHTML= data.name;

  }
