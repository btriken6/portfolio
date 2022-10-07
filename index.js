window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

// Get the modal
var modal = document.getElementById("myModal");
for(let photo=1;photo<=4;photo++){
  var photosl="myImg"+"0"+photo;
  var img = document.getElementById(photosl);
  console.log(img);
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// var img = document.getElementById("myImg01");
// var img = document.getElementById("myImg02");
// var img = document.getElementById("myImg03");
// var img = document.getElementById("myImg04");

var modalImg = document.getElementById("img01");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

//carousel 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
    slides[slideIndex-1].style.display = "block";  
}

//position indicator
const sections=document.querySelectorAll('section');
const navitem=document.querySelectorAll('nav #navbar #navbar-right a');
window.addEventListener('scroll',()=>{
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;
    
    if(pageYOffset>=((sectionTop-300)-sectionHeight/3)){
      current=section.getAttribute('id');
      console.log(pageYOffset);
  console.log(sectionTop);
    }
  })
  console.log(current);
  
  navitem.forEach(a=>{
    a.classList.remove('active');
    if(a.classList.contains(current)){
      a.classList.add('active');
    }
  })
})
//opaicity
