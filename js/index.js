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
}
});
