const navButtons=document.querySelectorAll(".nav-btn");
const screens=document.querySelectorAll(".screen");
const stounes=document.querySelectorAll(".stoun_div");
const textes=["(01) ГОЛУБОЙ КВАРЦ ДЛЯ САМЫХ ЭСТЕТИК","(02) РОЗОВЫЙ МРАМОР ДЛЯ ЛАКШЕРИ ЧИКУЛЬ","(03) БЕТОН ДЛЯ ЛЮБИТЕЛЕЙ СОВКА", "(04) ЗАБЫТЫЙ КАМЕНЬ ДЛЯ НЕПОНЯТЫХ ГЕНИЕВ","(05) СЕРЫЙ ГРАНИТ ДЛЯ КЛАССИКОВ","(06) КОСМИЧЕСКИЙ КРИСТАЛЛ ДЛЯ СОЧНЫХ ЧИКС"];
const flowers=document.querySelectorAll(".flower");
const namesflower=["АНТУРИУМ ","ГВОЗДИКА","ПАУЧЬЯ ЛИЛИЯ","ХРИЗАНТЕМА","АМАРИЛЛИС","АНЕМОНА","ГЛАДИОЛУС","ОРХИДЕЯ"];
const textesflower=["ЭТО ЭКЗОТИЧЕСКИЙ И ЗАПОМИНАЮЩИЙСЯ ЦВЕТОК. НЕОБЫЧНАЯ ФОРМА И ЯРКИЙ ЦВЕТ МОГУТ БЫТЬ СПОСОБОМ ПОЧТИТЬ УНИКАЛЬНОСТЬ И КРАСОТУ ЖИЗНИ УСОПШЕГО","ЕГО ПРОСТОТА И СКРОМНОСТЬ ОТРАЖАЮТ УВАЖЕНИЕ, СКОРБЬ ЗА УТРАТОЙ. РАЗНООБРАЗНЫЕ ОТТЕНКИ ГВОЗДИКИ МОГУТ ВЫРАЖАТЬ ЛЮБОВЬ, ПАМЯТЬ, ПРЕДАННОСТЬ.","ПАУЧЬЯ ЛИЛИЯ АССОЦИИРУЕТСЯ С ТРАУРОМ, УТРАТОЙ, ПЕЧАЛЬЮ, ЧТО ДЕЛАЕТ ЕГО ПОДХОДЯЩИМ ДЛЯ ЦЕРЕМОНИЙ ПРОЩАНИЯ.","ХРИЗАНТЕМА, ОСОБЕННО БЕЛОГО ЦВЕТА, СЧИТАЕТСЯ ТРАДИЦИОННЫМ ЦВЕТКОМ ДЛЯ ПОХОРОН. ЕЕ БЛАГОРОДСТВО, СКРОМНОСТЬ И УВАЖЕНИЕ ОТРАЖАЮТ ГЛУБОКИЕ ЧУВСТВА СКОРБИ И УТРАТЫ.","ЕГО ЯРКИЕ ЦВЕТЫ И ИЗЯЩНЫЕ ФОРМЫ ВЫРАЖАЮТ ПАМЯТЬ, УВАЖЕНИЕ И БЛАГОДАРНОСТЬ К УШЕДШЕМУ.","АНЕМОНА - ЭТО ЦВЕТОК, КОТОРЫЙ ЧАСТО АССОЦИИРУЕТСЯ С ТРАУРОМ И УТРАТОЙ. ЕГО НЕЖНЫЕ ЛЕПЕСТКИ И ПРОСТОТА ФОРМЫ СИМВОЛИЗИРУЮТ ПЕЧАЛЬ И СКОРБЬ.","ГЛАДИОЛУС ЧАСТО ИСПОЛЬЗУЕТСЯ НА ПОХОРОНАХ ИЗ-ЗА СВОЕЙ ЭЛЕГАНТНОСТИ И КРАСОТЫ. ЭТОТ ЦВЕТОК АССОЦИИРУЕТСЯ С УВАЖЕНИЕМ, ЧУВСТВОМ ПАМЯТИ И ГЛУБОКОЙ СКОРБЬЮ.","ОРХИДЕЯ АССОЦИИРУЕТСЯ С ЧИСТОТОЙ И ДУХОВНОСТЬЮ, ЧТО ДЕЛАЕТ ЕЕ ПОДХОДЯЩЕЙ ДЛЯ ПОКЛОНЕНИЯ УСОПШЕМУ."];
const chooseBtn=document.querySelector(".div1_btn");
const modalMonument=document.querySelector(".modalMonument");
const modalFlower=document.querySelector(".flower_modal");
const paper1=document.querySelector(".mainpaper1");
const paper2=document.querySelector(".mainpaper2");
const modalTestament=document.querySelector(".modalTestament");
const willText = document.getElementById('willText');

let stounIndex=null;
let flowerIndex=null;


// console.log("log",stounIndex);
navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const screenId=button.dataset.screen;
        showScreen(screenId);
    });
});

function showScreen(screenId){
    screens.forEach(screen=>{screen.classList.remove("active")});
    navButtons.forEach(navButton=>{navButton.classList.remove("active")});
    document.getElementById(screenId).classList.add("active");
    document.getElementById(`${screenId}_btn`).classList.add("active");
    if (screenId==="testament"){
        modalTestament.style.display="block";
    }
};

stounes.forEach((stoun,index)=>{
    stoun.addEventListener("click",()=>{
        if (stounIndex){ 
            stounes[stounIndex-1].querySelector(".textstoun").textContent=`(0${stounIndex})`;
           if (stounIndex-1===index){
            stounes[stounIndex-1].querySelector(".textstoun").textContent=`(0${stounIndex})`;
            chooseBtn.style.display="none";
            stounIndex=null;
            return;
        } 
        }
        stounIndex=parseInt(textes[index][1]+textes[index][2]);
        stoun.querySelector(".textstoun").textContent=textes[index];
        chooseBtn.style.display="block";
    });
});

// screens[1].addEventListener("mousedown",(e)=>{
//     if (stounIndex){
//         stounes[stounIndex-1].querySelector(".textstoun").textContent=`(0${stounIndex})`;
//         chooseBtn.style.display="none";
//         stounIndex=null;
//     }
//     if (flowerIndex){
//         flowers[flowerIndex].style.filter="grayscale(100%)";
//         document.querySelector(".flower_modal").style.display="none";
//         flowerIndex=null;
//     }
// });


chooseBtn.addEventListener("click",()=>{
    modalMonument.style.display="block";
});

modalMonument.querySelector(".button").addEventListener("click",()=>{
    modalMonument.style.display="none";
})


flowers.forEach((flower,index)=>{
    flower.dataset.flIndex=index;
    flower.addEventListener("click",()=>{
        if (flowerIndex){
            flowers[flowerIndex].style.filter="grayscale(100%)";
            if (flowerIndex===flower.dataset.flIndex){
                flowers[flowerIndex].style.filter="grayscale(100%)";
                document.querySelector(".flower_modal").style.display="none";
                flowerIndex=null;
                return;
            }
        }
        flowerIndex=flower.dataset.flIndex;
        flower.style.filter="none";
        modalFlower.querySelector(".modal_title").textContent=namesflower[index];
        modalFlower.querySelector(".modal_text").textContent=textesflower[index];
        modalFlower.style.display="block";
        if(index===0 || index===1 || index===4 || index===5){
           modalFlower.style.right="0";
           modalFlower.style.left="auto";
        }
        if(index===2 || index===3 || index===6 || index===7){
            modalFlower.style.right="auto";
            modalFlower.style.left="0";
         }
    });
});

modalTestament.querySelector(".button").addEventListener("click",()=>{
    modalTestament.style.display="none";
    willText.contentEditable = true;
    willText.focus();
})


screens[0].addEventListener("click",()=>{
    paper1.style.left="-300px";
    paper1.style.opacity="0";
    paper2.style.right="-300px";
    paper2.style.opacity="0";
    setTimeout(() => {
        showScreen("monument");
        document.querySelector("header").style.display="block";
    }, 800); //потому что в transition в css 0.8s
});





// document.addEventListener("mousedown",(e)=>{
//     if (stounIndex){
//         stounes[stounIndex-1].querySelector(".textstoun").textContent=`(0${stounIndex})`;
//         document.querySelector(".div1_btn").style.display="none";
//     }
// });