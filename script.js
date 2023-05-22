// var typed=new Typed(".change-text",{
//     strings:["FrontEnd Devoloper","Backend Devoloper","Fullstack Devoloper"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// })
// // to active a nav-link on scroll to a specific section
// let sections=document.querySelectorAll('section')
// let navlinks=document.querySelectorAll("header nav a")
// window.onscroll=()=>{
//     sections.forEach(section=>{
//         let top=window.scrollY;
//         let offset=section.offsetTop - 150;
//         let height=section.offsetHeight;
//         let id=sec.getAttribute('id')

//         if(top >= offset && top < offset + height){
//             navlinks.forEach(links=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href *='+id+']').classList.add('active');
//             });
//         }
//     });
// };

// //for sticky navbar
// let header=document.querySelector('header')
// header.classList.toggle('sticky',window.scrollY > 100)

// //for hamburger menu
// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle('active');
// };
// // to close hamburger menu after selecting a tab..
// menuIcon.classList.remove("bx-x");
// navbar.classList.remove('active');
