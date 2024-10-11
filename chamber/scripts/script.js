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
 
  // dilog information about membership level

  const openNp = document.querySelector(".np");
  const openSilver = document.querySelector(".silver");
  const openBronze = document.querySelector(".bronze");
  const openGold= document.querySelector(".gold");
  const dilog = document.querySelector(".membershipLevel");
  const closeButton = document.querySelector(".close-button");
  const dilogText = document.querySelector(".membershipLevel div");

  openNp.addEventListener("click", ()=>{
    dilog.showModal();
    dilogText.innerHTML=`<h2>Non Profit Membership Level</h2>
     <p>This membership level is specifically designed for non-profit organizations. 
     Non-profits often operate with limited budgets and focus on community services, social causes, or charitable work.</p>
<p><strong>Benefits:</strong></p>
<p>-Access to resources and support tailored for non-profits.<br>
-Reduced membership fees or special grants to support operations.<br>
-Opportunities to network with other non-profits and collaborate on community initiatives.<br>
-Inclusion in a directory highlighting non-profit contributions to the community.</p>
    `
  })

  openBronze.addEventListener("click", ()=>{
    dilog.showModal();
    dilogText.innerHTML=`
    <h2>Bronze Membership Level</h2>
     <p>The Bronze Membership is an entry-level option for businesses 
    and organizations that are just starting or looking for basic benefits.</p>
<p><strong>Benefits:</strong></p>
<p>
-Access to general resources and newsletters.<br>
-Opportunity to participate in community events at a discounted rate.<br>
-Inclusion in promotional materials that feature local businesses.</p>
    `
  })

  openSilver.addEventListener("click", ()=>{
    dilog.showModal();
    dilogText.innerHTML=`<h2>Silver Membership</h2>
     <p>The Silver Membership offers more extensive benefits compared to the Bronze level, suitable
      for established businesses looking to enhance their visibility and community engagement.</p>
<p><strong>Benefits:</strong></p>
<p>-Enhanced directory listing with a description and logo.
-Priority access to networking events and workshops.<br>
-Regular feature in newsletters and promotional campaigns.<br>
-Access to additional resources, including training and development opportunities.</p>
    `
    
  })

  openGold.addEventListener("click", ()=>{
    dilog.showModal();
    dilogText.innerHTML=`<h2>Gold Membership</h2>
     <p> The Gold Membership is the premium option designed for businesses 
     that want maximum exposure and the highest level of support.</p>
<p><strong>Benefits:</strong></p>
<p>-Top-tier directory listing with prominent placement and extensive details.<br>
-Exclusive networking opportunities with local leaders and influencers.<br>
-Featured articles in newsletters and on the website, showcasing the business.<br>
-Priority invitations to events, workshops, and community initiatives.<br>
-Access to specialized resources, market research, and consulting services.
</p>
    `
  })
 
  closeButton.addEventListener("click", ()=>{
    dilog.close();
  })


  document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`; // YYYY-MM-DD
        timestampInput.value = formattedDate; // Set formatted date
    }
});
  