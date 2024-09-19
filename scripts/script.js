const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

});




const today = new Date();
const yearElement = document.querySelector("#year");

// Update the content of the element
yearElement.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
const lastModified = new Date(document.lastModified);

// Format the last modified date as desired (e.g., using toLocaleDateString)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);

// Update the content of the element with id="lastModified"
document.getElementById('lastmod').textContent = formattedDate;

const certificates =
[
    {
        name:"CSE110",
        group: "cse",
        link:"https://byui.instructure.com/courses/239474"
        },
    {
        name:"WDD130",
        group:" wdd",
        link:"https://byui.instructure.com/courses/264658"
    },

    {
        name:"CSE111",
        group: "cse",
        link:"https://byui.instructure.com/courses/263580"
    },

    {
        name:"CSE210",
        group:"cse",
        link:"https://byui.instructure.com/courses/279992"
    },

    {
        name: "WDD131",
        group:"wdd",
        link:"https://byui.instructure.com/courses/299928"
    },
    {
        name:"WDD231",
        group:"wdd",
        link:"https://byui.instructure.com/courses/310076"
    }
]

function CardCourse(filteredCourse){
    document.querySelector(".options").innerHTML="";
    for(const item of filteredCourse){
  
      let courseName = item.name;
      let courseGroup= item.group;
      let courseLink=item.link;
      
      document.querySelector(".options").innerHTML += 
      `<a class="courseInf" href="${courseLink}">
      <h4> ${courseName}</h4> 
      </a>`;
  
    }}

    function filterCourses(group) {
        let filteredCourses;
        
        if (group === 'all') {
            filteredCourses = certificates;
        } else {
            filteredCourses = certificates.filter(course => course.group.trim().toLowerCase() === group);
        }
        
        CardCourse(filteredCourses);
    }
    
    // Initially show all courses
    filterCourses('all');