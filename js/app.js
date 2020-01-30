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
    //Object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // Insert into shopping cart
    addIntoCart(courseInfo);
}

//This is going to insert specific course into shopping cart
function addIntoCart(course){
    // Add a row in the table
    const row = document.createElement('tr');

    // Build the template
    row.innerHTML = `
    
    `
}
