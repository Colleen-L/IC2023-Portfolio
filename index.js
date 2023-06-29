//vars
//nav and social media
let openContactbtn = document.querySelector(".openContactbtn");
let socialMediaIcons = document.querySelector(".socialMediaIcons");
let closeContactbtn = document.querySelector(".closeContactbtn");
//aboutme
let sidebarButton = document.querySelector(".sidebarButton");
let sidebar = document.querySelector(".sidebar");
//contact open
openContactbtn.onclick=function(){
    socialMediaIcons.style.display="block";
    closeContactbtn.style.display="block";
};
closeContactbtn.onclick=function(){
    socialMediaIcons.style.display="none";
    closeContactbtn.style.display="none";
};

sidebarButton.onclick=function(){
    sidebar.classList.toggle("active");
}