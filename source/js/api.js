'use strict'
//variables
let coursesContainer = document.getElementById("course-container"); // container where courses div goes
let courseEL = document.getElementById("course"); //a course div
let errorContainer = document.getElementById("error-div");
let addBtn = document.getElementById("addBtn").addEventListener('click', addCourse);;

//form data variables
let nameInput = document.getElementById("name");
let codeInput = document.getElementById("code");
let progressionInput = document.getElementById("progression");
let syllabusInput = document.getElementById("syllabus");

//Event listeners
window.addEventListener('load', getCourses, false);

//functions
//Show courses
function getCourses() {
    coursesContainer.innerHTML = '';
    //show courses with GET
    fetch('http://localhost/moment5/backend/api.php', {
        method: 'GET',
    })
    .then(response => {
        if (response.status === 404) {
            throw response;
        } 
            return response.json();
    })       
    .then(data => { 
        data.forEach(course => {
            coursesContainer.innerHTML +=
            `<div class="show-courses">
                <h2 class="course-name">${course.name}</h2>
                <div class="course-info">
                    <p><b>Kurskod: </b>${course.code}</p>
                    <p><b>Nivå: </b>${course.progression}</p>
                    <a class="read-more" href="${course.syllabus}" target="_blank">Läs kursplanen</a>
                </div>
                <div class="course-edit">
                    <!--<button class="btn" id="${course.id}" onClick="updateCourse(${course.id})" href="">Uppdatera</button>-->
                    <button class="btn" id="${course.id}" onClick="deleteCourse(${course.id})" href="">Radera</button> 
                </div>    
            </div>
            `
        })
    })
    //send message if error
    .catch(err => {
        console.log(err)
        coursesContainer.innerHTML = `<p id="errorMsg">Lägg till kurser för att se några kurser här</p>`;
    })   
}

//add course
function addCourse() {
    //value from form
    let code = codeInput.value;
    let name = nameInput.value;
    let progression = progressionInput.value;
    let syllabus = syllabusInput.value;
    
    //create course with POST
    fetch('http://localhost/moment5/backend/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'code': code, 
            'name': name, 
            'progression': progression, 
            'syllabus': syllabus
        }),
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        //send message if error
        .catch(err => {
            console.log(err)
            errorContainer.innerHTML = `<p id="errorMsg">Kunde inte lägga till kurs</p>`;
        })
}

//delete course
function deleteCourse($id) {
    fetch('http://www.localhost/moment5/backend/api.php?id=' + $id, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: 'DELETE',
    })
    .then(response => response.json())
    .then (data => {
        //get courses again to update
        getCourses()
    })
    .catch((err) => console.log(err));
}