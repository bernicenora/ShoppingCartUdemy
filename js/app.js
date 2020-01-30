// Variables
const courses = document.querySelector("#courses-list");


// Listeners

loadEventListeners();




// Functions

function loadEventListeners(){
    courses.addEventListener('click',buyCourse);
}

function buyCourse(e){
    // Use delelegation to find which course is to be added to cart

    e.preventDefault();
    
    if (e.target.classList.contains('add-to-cart')){
        const course = e.target.parentElement.parentElement;

        //Read the values
        getCourseInfo(course);
    }
}

//Reads the HTML Information of the selected Course

function getCourseInfo(course){
    console.log(course);
}