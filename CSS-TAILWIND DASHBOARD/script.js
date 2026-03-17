function filterProjects(type){

const projects = document.querySelectorAll(".project-card");

projects.forEach(project => {

if(type === "all"){
project.style.display = "block";
}
else if(project.classList.contains(type)){
project.style.display = "block";
}
else{
project.style.display = "none";
}

});

}