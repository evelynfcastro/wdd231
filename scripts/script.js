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
        link:"https://byui.instructure.com/courses/239474",
        credits: 2,
        completed: true,
        button: "buttonOpencse110"
        },
    {
        name:"WDD130",
        group:" wdd",
        link:"https://byui.instructure.com/courses/264658",
        credits: 2,
        completed: true,
         button: "buttonOpenwd130"
    },

    {
        name:"CSE111",
        group: "cse",
        link:"https://byui.instructure.com/courses/263580",
        credits: 2,
        completed: true,
        button: "buttonOpencse111"
    },

    {
        name:"CSE210",
        group:"cse",
        link:"https://byui.instructure.com/courses/279992",
        credits: 2,
        completed: true,
         button: "buttonOpencse210"
    },

    {
        name: "WDD131",
        group:"wdd",
        link:"https://byui.instructure.com/courses/299928",
        credits: 2,
        completed: true,
        button: "buttonOpenwdd131"
    },
    {
        name:"WDD231",
        group:"wdd",
        link:"https://byui.instructure.com/courses/310076",
        credits: 2,
        completed: false,
        button: "buttonOpenwdd231"
    }
]

function CardCourse(filteredCourse){
    document.querySelector(".options").innerHTML="";
    for(const item of filteredCourse){
  
      let courseName = item.name;
      let courseGroup= item.group;
      let courseLink=item.link;
      let courseComplet= item.completed
      let courseButton = item.button
      
      document.querySelector(".options").innerHTML += 
      `<button id="${courseButton}" class="courseInf">
      <h4 class=${courseComplet}> ${courseName}</h4> 
      </button>`;
  
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

    const courseDetailis = document.querySelector("#courseDetailis"); 
    const closeButton = document.querySelector("#close-button");
    const diologText= document.querySelector(".info")
    const openButton1 = document.querySelector("#buttonOpencse110");
    const openButton2= document.querySelector("#buttonOpenwd130");
    const openButton3= document.querySelector("#buttonOpencse111");
    const openButton4= document.querySelector("#buttonOpencse210");
    const openButton5= document.querySelector("#buttonOpenwdd131");
    const openButton6= document.querySelector("#buttonOpenwdd231");
    openButton1.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>CSE110</p>
        <h2>  Intro to Programming CSE110 </h2> 
        <p> This course will introduce students to programming. It will introduce the building 
        blocks of programming languages (variables, decisions, calculations,  loops, array, and input/output) and use them to solve problems.</p>
        `
    })

    openButton2.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>WDD130</p>
        <h2>  Web Fundamentals </h2> 
        <p>This course introduces students to the World Wide Web and to careers in web site 
        design and development. The course is hands on with students actually participating in simple web designs and programming. </p>
        `
    })

    openButton3.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>CSE 111</p>
        <h2> Programming with Functions </h2> 
        <p>CSE 111 students become more organized, efficient, and powerful 
        computer programmers by learning to research and call functions written by others; to write, call ,
         debug, and test their own functions; and to handle errors within functions</p>
        `
    })
    openButton4.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>CSE 210</p>
        <h2>Programming with Classes</h2> 
        <p>This course will introduce the notion of classes and objects. It will present encapsulation
         at a conceptual level. It will also work with inheritance and polymorphism.</p>
        `
    })

    openButton5.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>WDD 131</p>
        <h2>Dynamic Web Fundamentals</h2> 
        <p>This course builds on prior experience in Web Fundamentals and programming. 
        Students will learn to create dynamic websites that use JavaScript to respond to
         events, update content, and create responsive user experiences.</p>
        `
    })

    openButton6.addEventListener("click", () =>{
        courseDetailis.showModal();
        diologText.innerHTML= 
        ` <p>WDD 231</p>
        <h2>Web Frontend Development I</h2> 
        <p>This course builds on prior experience with Dynamic Web Fundamentals and programming. 
        Students will focus on user experience, accessibility, 
        compliance, performance optimization, and basic API usage.</p>
        `
    })
    closeButton.addEventListener("click", () => {
        courseDetailis.close();
    })


