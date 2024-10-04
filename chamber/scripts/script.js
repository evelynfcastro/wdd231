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

async function getMembersLevel(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembersRandom(data.membersInformation);
    

}
getMembersLevel();
const displayMembersRandom = (membersInformation) => {
   
    const shuffledMembers = membersInformation.sort(() => 0.5 - Math.random());
    const randomMembers = [];
    
    for (const member of shuffledMembers) {
        const level = member.memberLevel;
    
        if (level >= 2) {
            randomMembers.push(member); 
            //document.querySelector(".compLogo").innerHTML = member.image;
            if (randomMembers.length === 3) {
                break; // Exit the loop if we have 3 members
            }
            else{

            }
        } 
        
       
    }
    
    randomMembers.forEach(member => {
        const card = document.createElement("section");
        const image = document.createElement("img");
        const name = document.createElement("h3");
        const link= document.createElement("a");
        name.innerHTML=member.name;
            image.src = member.image; 
            image.alt = member.name; 
            link.setAttribute("href",member.url)
            link.appendChild(image)
            image.classList.add('randomImg');
            
            card.appendChild(name);
            card.appendChild(link);
            
            document.querySelector(".membersRandom").appendChild(card);})

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton?.addEventListener('click', ()=>{
    display.classList.add("grid");
	display.classList.remove("list");
})

listbutton?.addEventListener("click", () => {
	
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
const firstDay = document.querySelector(".firstDay");
const secondDay = document.querySelector(".secondDay");
const thridDay= document.querySelector(".thridDay");
const myApiKey ="28da3ca09f8cafa4321d1df173d2cbea";
const lat="-30.88835925942744";
const long="-55.52152248306298";

const myUrl =`https://api.openweathermap.org/data/2.5/weather?lat=-30.88835925942744&lon=-55.52152248306298&appid=28da3ca09f8cafa4321d1df173d2cbea&units=imperial`
const secUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myApiKey}`
async function apiFetch(){
    try {
      const response = await fetch(myUrl);
      const inf = await fetch(secUrl);
      if (response.ok & inf.ok) {
        const data = await response.json();
        const forcastInf = await inf.json();
        console.log(data); // testing only
        console.log(forcastInf)
        displayWeather(data,forcastInf);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


  apiFetch();

  function displayWeather(data, foreCast){
townName.innerHTML= data.name;
description.innerHTML=data.weather[0].description;
temperature.innerHTML=`${data.main.temp}&deg;F`
const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
image.setAttribute('SRC', iconSrc);
image.setAttribute('alt', data.weather[0].description )

function DataTranf(dt_txt) {
    const dt = dt_txt; // This line is fine
    const date = dt.split(" ")[0]; // Assign the result to a variable
    return date; 
}




firstDay.innerHTML= `${DataTranf(foreCast.list[3].dt_txt)} ------> ${foreCast.list[3].main.temp}°F`;
secondDay.innerHTML=`${DataTranf(foreCast.list[11].dt_txt)} ------> ${foreCast.list[11].main.temp}°F`
thridDay.innerHTML=`${DataTranf(foreCast.list[22].dt_txt)} ------> ${foreCast.list[22].main.temp}°F`


  }
 