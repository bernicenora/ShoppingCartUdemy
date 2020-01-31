// Variables
const courses = document.querySelector("#courses-list"),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector("#clear-cart");


// Listeners

loadEventListeners();




// Functions

function loadEventListeners(){
    //When a new course is added
    courses.addEventListener('click',buyCourse);

    //When the remove button i.e X is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    //Clear Cart Btn
    clearCartBtn.addEventListener('click',clearCart);

    //Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
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
    <tr>
        <td>
            <img src="${course.image}" width="100px">
        </td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
        </td>
    </tr>
    `;

    //Add into the the shopping cart
    shoppingCartContent.appendChild(row);

    // Add course into Local Storage
    saveIntoStorage(course);
}

// Add the courses into the Local Storage

function saveIntoStorage(course){
    let courses = getCoursesFromStorage();

    // Add the courses into the array
    courses.push(course);

    // Since local storage onky saves strings, we need to convert array into string
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Get the contents from Storage

function getCoursesFromStorage(){
    let courses;

    // If the key exists in the Local Storage, get the values otherwise create an empty array
    if (localStorage.getItem('courses') === null){
        courses = [];
    }else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}

// Function to get the courses to print on Load
function getFromLocalStorage(){
    let coursesLS  = getCoursesFromStorage();

    //LOOP through the courses and print in the cart
    coursesLS.forEach(function(course){
        // create <tr>
        const row = document.createElement('tr');

        // print the content
        row.innerHTML=`
        <tr>
            <td>
                <img src="${course.image}" width="100px">
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
        `;

        //Add into the the shopping cart
        shoppingCartContent.appendChild(row);

    });

}

//Remove course from the cart

function removeCourse(e){
    e.preventDefault();

    if (e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearCart(){
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}