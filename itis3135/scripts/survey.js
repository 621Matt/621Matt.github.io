const result = document.getElementById("result");
const form = document.getElementById("intro-form");
const submit = document.getElementById("submit");
const moreCourses = document.getElementById("moreCourses");
const pageBox = document.getElementById("pageBox");

// Resets values in form / make it reload page
function resetForm() {
    location.reload();
}

// Adds new course text boxes along with delete button
function addClass() {
    const inputDiv = document.createElement("div");

    inputDiv.innerHTML = `
    <input type="text" class="course" value="BIOL 1110 / 1110L" />
    <input type="text" class="courseName" value="Principles of Biology I">
    <textarea class="courseReason">I decided to take this course because I was interested in the topic and needed the science credit for my general education requirements</textarea>    
    <button type="button" onclick="removeCourse(this)">Remove</button><br/>`;
    moreCourses.appendChild(inputDiv);
}

// Delete button
function removeCourse(button) {
    button.parentElement.remove();
}

// Displays the courses a user is enrolled in
function displayCourses() {
    const courseElements = document.querySelectorAll(".course");
    const courseNameElements = document.querySelectorAll(".courseName");
    const courseReasonElements = document.querySelectorAll(".courseReason");
    let coursesHTML = "<ul>";

    //If user does not enter any courses it will display brief message
    if (!moreCourses.hasChildNodes()) {
        coursesHTML += `<li>No Courses Taken</li></ul>`;
        return coursesHTML;
    } else {
        for (let i = 0; i < courseElements.length; i++) {
            const course = courseElements[i].value;
            const courseName = courseNameElements[i].value;
            const courseReason = courseReasonElements[i].value;

            coursesHTML += `<li><strong>${course} - ${courseName}:</strong> ${courseReason}</li>`;
        }
        coursesHTML += "</ul>";
        return coursesHTML;
    }
}

// Gets form data and displays it
function displayForm() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let mascot = document.getElementById("mascot").value;
    let image = URL.createObjectURL(
        document.getElementById("imageUpload").files[0]
    );
    let imgCaption = document.getElementById("img-caption").value;
    let personalBackground = document.getElementById("background").value;
    let professionalBackground = document.getElementById("pro-background").value;
    let academicBackground = document.getElementById("acad-background").value;
    let webBackground = document.getElementById("web-background").value;
    let platform = document.getElementById("platform").value;
    let funnyThing = document.getElementById("funny").value;
    let more = document.getElementById("more").value;

    result.innerHTML += `
      <h2>${firstName} ${lastName}'s Introduction Page | ${mascot}<h2>
      <figure>
          <img class="images" src="${image}" alt="${imgCaption}">
          <figcaption>${imgCaption}</figcaption>
      </figure>
      <div class="introduction">
          <ul>
              <li><strong>Personal Background:</strong> ${personalBackground}</li>
              <li><strong>Professional Background:</strong> ${professionalBackground}</li>
              <li><strong>Web Development Background:</strong> ${academicBackground}</li>
              <li><strong>Academic Background:</strong> ${webBackground}</li>
              <li><strong>Primary Computer Platform:</strong> ${platform}</li>
              <li><strong>Courses I’m Taking, and Why:</strong></li> ${displayCourses()}
              <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${funnyThing}</li>
              <li><strong>Anything else?</strong> ${more}</li>
          <ul>
      </div>
      <button onclick="resetForm()">Reset</button>`;

    pageBox.style.display = "none";
}

// Submits form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayForm();
});
