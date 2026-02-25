document.addEventListener("DOMContentLoaded", function() {

const body = document.body;
const footer = document.createElement('footer');
const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');

copyright.innerHTML = `© ${year} Mike Magann.`;

footer.appendChild(copyright);
body.appendChild(footer);

const skills = [
    "Videography",
    "Photography | Digital & Film",
    "Video Editing in Adobe Premiere, iMovie, CapCut, InShot & DaVinci Resolve",
    "Photo Editing in Adobe Lightroom & Photoshop",
    "Graphic Design",
    "Content Creation",
    "Coding (HTML, CSS & JavaScript)",
    "Learning animation in Procreate Dreams",
];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
});

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

const usersName = event.target.elements.usersName.value;
const usersEmail = event.target.elements.usersEmail.value;
const usersMessage = event.target.elements.usersMessage.value;

console.log (usersName, usersEmail, usersMessage);

const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('ul');
messageSection.style.display = "block";

const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

const removeButton = document.createElement('button');
  removeButton.innerText = "remove";
  removeButton.type = "button";

const editButton = document.createElement('button');
  editButton.innerText = "edit";
  editButton.type = "button";
editButton.addEventListener("click", function() {
  const currentMessage = newMessage.querySelector("span").innerText;
  const newText = prompt("Edit your message:", currentMessage);
  
    if (newText !== null) {
        newMessage.querySelector("span").innerText = newText;
    }
});

newMessage.appendChild(editButton);

removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
if (messageList.children.length === 0) {
  messageSection.style.display = "none";
}  
});

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

event.target.reset();
});

fetch('https://api.github.com/users/michaelmagann/repos')
    .then(response => response.json())  
    .then(data => {
        let repositories = data;

        let projectSection = document.querySelector('#Projects');
        let projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li');
            project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
            projectList.appendChild(project);
        }
    console.log(repositories);
})
.catch(error => console.error('Error fetching repositories:', error));
});
