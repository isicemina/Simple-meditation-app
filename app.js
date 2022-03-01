const circleProgress = document.querySelector('.circle-progress');
const numberofbreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');

let breathsLeft=3;

//The breaths user've had choose
numberofbreaths.addEventListener('change', ()=> {
    breathsLeft=numberofbreaths.value;
    breathsText.innerText = breathsLeft;
});

//Grow circle

const growCircle = () =>{
      circleProgress.classList.add("circle-grow");
      setTimeout(()=>{
        circleProgress.classList.remove("circle-grow");

      }, 8000);
};



//Start
start.addEventListener('click',()=>{
    start.classList.add("button/inactive");
    instructions.innerText="Get relaxed and ready to begin breathing";
    setTimeout(()=>{
        instructions.innerText="Breathing is about to begin...";
           
        setTimeout(()=>{
            breathingApp();
            growCircle();
            breathTextUpdate();
        },2000);
    
    
    },2000);
  
});

//Breathing instruciton text 
 const breathTextUpdate = () => {
     breathsLeft--;
     breathsText.innerText = breathsLeft;
     instructions.innerText= "Breath in";

        setTimeout(() =>{
        instructions.innerText="Hold Breath";
               setTimeout(() => {
                   instructions.innerText="Exhale Breath Slowy";
               },4000);

        },4000);
 };


 //Breathing app function
 const breathingApp = ()=>{
    const breathingAnimation = setInterval(()=>{
       if(breathsLeft === 0) {
           clearInterval(breathingAnimation);
           
           instructions.innerText="Breathing session completed. Click `Begin` to start another session";
           start.classList.remove("button-inactive");
           breathsLeft= numberofbreaths.value;
           breathsText.innerText=breathsLeft;
           
           return;
       }
       growCircle();
       breathTextUpdate();
    }, 12000);
 };