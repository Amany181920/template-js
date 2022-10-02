//Start Setting Box//
let setbox=document.querySelector(".setting-box")

let backgroundOption=true;
let backgroundInterval;

let backgroundLocalItem= localStorage.getItem("background-option");
if(backgroundLocalItem !==null){
    if(backgroundLocalItem==='true'){
        backgroundOption=true;
    }else{
    backgroundOption=false;
}
document.querySelectorAll(".random button").forEach(element=>{
    element.classList.remove("active")
});
//if(backgroundLocalItem==='true'){
//    document.querySelector(".random .yes").classList.toggle("active")
//}else{
   // document.querySelector(".random .no").classList.add("active")
//}
//}

let mainColors=localStorage.getItem("color-option");
if (mainColors !== null){
    document.documentElement.style.setProperty('--main-color',mainColors);
    document.querySelectorAll(".color-list li").forEach(element=>{
        element.classList.remove("active");
        if(element.dataset.color===mainColors){
            element.classList.add("active")
        }
    })
}
let icon=document.querySelector(".icon-settings").onclick=function(){
    setbox.classList.toggle("open")
}
//Switch colors//
const colorlist=document.querySelectorAll(".color-list li")
colorlist.forEach(li =>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        }) ;
        e.target.classList.add("active");
        
    })
})
//Switch Random
let button=document.querySelectorAll("button")
console.log (button);
const randomEL=document.querySelectorAll(".random button")
randomEL.forEach(button =>{
    button.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        }) ;
        e.target.classList.add("active");
        if (e.target.dataset.background==="yes") {
            backgroundOption=true;
            randomizeingImgs();
            localStorage.setItem("background-option",true)
        }
        else{
            backgroundOption=false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option",false)

        }
        
    })
})



function randomizeingImgs(){
    if (backgroundOption===true){
        backgroundInterval = setInterval(() => {
            let randomNumber= Math.floor(Math.random() * imsArray.length);
            landingPage.style.backgroundImage ='url("images/' + imsArray[randomNumber]+ '")';  
        }, 1000); }
    }

    randomizeingImgs();

//End Setting Box//


//Start landing Page//
let landingPage =document.querySelector(".landing-page");
let imsArray =["one.jpg", "two.jpg" ,"three.jpg"];
setInterval(() => {
    let randomNumber= Math.floor(Math.random() * imsArray.length);
    landingPage.style.backgroundImage ='url("images/' + imsArray[randomNumber]+ '")';

    
}, 10000);
//End landing Page//

//Start Our Skills//
let ourSkills =document.querySelector(".skills");
let allSkills=document.querySelectorAll(".skill-progress span")
console.log(allSkills);
window.onscroll= function(){
    let skillsOffsetTop=ourSkills.offsetTop;
    let skillsOutHeight =ourSkills.offsetHeight;
    let windowHeight =this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if(windowScrollTop > (skillsOffsetTop + skillsOutHeight - windowHeight)){
        allSkills.forEach(skill =>{
            skill.style.width = skill.dataset.progress
        });
    }
}
}
//Start Our Gallery//
let ourGallery =document.querySelectorAll(".gallery img");
ourGallery.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overLay =document.createElement("div");
        overLay.className='popup-overlay';
        document.body.appendChild(overLay);
        let popupBox= document.createElement("div");
        popupBox.className='popup-box';
        let popupImage =document.createElement("img");
        popupImage.src=img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);

        let closeButton =document.createElement("span");
let text= document.createTextNode("x");
closeButton.appendChild(text);
closeButton.className='close-button';
popupBox.appendChild(closeButton);
    })
})
//document.addEventListener("click", function(e){
   // if (e.target.className =='close-button');
   // e.target.parentNode.remove();
//document.querySelector(".popup-overlay").remove();//
//})//
// End Our Gallery//

//Start Toggle Menu//
let toggleBtn=document.querySelector(".toggle-menu");
let tlinks=document.querySelector(".links");

toggleBtn.onclick =function (e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
}




document.addEventListener("click",(e)=>{
    if(e.target !== toggleBtn && e.target !== tlinks){
        if (tlinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
        }
    }
});

tlinks.onclick =function (e){
    e.stopPropagation();
}

//End Toggle Menu//