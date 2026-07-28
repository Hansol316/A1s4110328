const musicBtn = document.getElementById("musicBtn");
const bgm = document.getElementById("bgm");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        bgm.play();
        musicBtn.src = "images/stop.png";
        isPlaying = true;

    } else {

        bgm.pause();
        bgm.currentTime = 0;   // 처음부터 다시 재생되게
        musicBtn.src = "images/play.png";
        isPlaying = false;

    }

});


////scene 1/////
const bed = document.getElementById("bed");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let played = false;

bed.addEventListener("click", function(){

    if(played) return;

    played = true;

    bed.src = "images/bed2.png";

    setTimeout(function(){

        bed.src = "images/bed3.png";

    },500);


    setTimeout(function(){

        line1.style.opacity = "1";

    },300);


    setTimeout(function(){

        line2.style.opacity = "1";

    },800);


    setTimeout(function(){

        line3.style.opacity = "1";

    },1300);

});


/////////// Scene 2 ///////////

const flower1 = document.getElementById("flower1");

const flower2 = document.getElementById("flower2");

const flower3 = document.getElementById("flower3");

flower1.addEventListener("mouseenter", function(){

    flower2.style.opacity = "1";

    setTimeout(function(){

        flower3.style.opacity = "1";

    },600);

});

flower1.addEventListener("mouseleave", function(){

    flower2.style.opacity = "0";

    flower3.style.opacity = "0";

});




///////////scene 3 ///////////

const riverHover = document.querySelector(".river-hover");

const word1 = document.querySelector(".word1");
const word2 = document.querySelector(".word2");
const word3 = document.querySelector(".word3");
const word4 = document.querySelector(".word4");
const word5 = document.querySelector(".word5");

let riverShown = false;

riverHover.addEventListener("mouseenter", function(){

    if (riverShown) return;

    riverShown = true;

    word1.style.opacity = "1";

    setTimeout(function(){

        word2.style.opacity = "1";

    },400);

    setTimeout(function(){

        word3.style.opacity = "1";

    },800);

    setTimeout(function(){

        word4.style.opacity = "1";

    },1200);

    setTimeout(function(){

        word5.style.opacity = "1";

    },1600);

});


///////scene4//////////

/////////// Scene 4 ///////////

const map = document.querySelector(".map");

const topText = document.querySelector(".top-text");
const bottomText = document.querySelector(".bottom-text");

let dragging = false;

let startX = 0;

let offsetX = 0;

let textShown = false;



map.addEventListener("mousedown", function(e){

    dragging = true;

    startX = e.clientX;

    map.style.cursor = "grabbing";

    e.preventDefault();

});



document.addEventListener("mousemove", function(e){

    if(!dragging) return;

    offsetX += e.clientX - startX;

    startX = e.clientX;

    if(offsetX > 40){

        offsetX = 40;

    }

    if(offsetX < -40){

        offsetX = -40;

    }

    map.style.transform = `translateX(${offsetX}px)`;

    if(Math.abs(offsetX) >= 25 && !textShown){

        textShown = true;

        topText.style.opacity = "1";

        setTimeout(function(){

            bottomText.style.opacity = "1";

        },600);

    }

});



document.addEventListener("mouseup", function(){

    dragging = false;

    map.style.cursor = "grab";

});


///////scene5
const mirrorFrame = document.getElementById("mirrorFrame");
const mirrorMonster = document.getElementById("mirrorMonster");

const mirrorLine1 = document.getElementById("mirrorLine1");
const mirrorLine2 = document.getElementById("mirrorLine2");
const mirrorLine3 = document.getElementById("mirrorLine3");
const mirrorLine4 = document.getElementById("mirrorLine4");

let mirrorPlayed = false;

mirrorFrame.addEventListener("click", function(){

    if(mirrorPlayed) return;

    mirrorPlayed = true;

    // 거울 변경
    mirrorFrame.src = "images/mirror2.png";

    // 괴물 서서히 등장
    mirrorMonster.style.opacity = "1";

    // 글 순서대로 등장
    setTimeout(function(){

        mirrorLine1.style.opacity = "1";

    },800);

    setTimeout(function(){

        mirrorLine2.style.opacity = "1";

    },1400);

    setTimeout(function(){

        mirrorLine3.style.opacity = "1";

    },2000);

    setTimeout(function(){

        mirrorLine4.style.opacity = "1";

    },2600);

});



// ===== Scene 6 =====

const scene6 = document.querySelector("#scene6");
const scene6Content = document.querySelector("#scene6Content");

const observer6 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            scene6Content.classList.add("fly");

            observer6.unobserve(scene6);

        }

    });

}, {
    threshold: 0.3
});

observer6.observe(scene6);


///////////scene7////
const scene7 = document.querySelector("#scene7");
const bubbleBox = document.querySelector("#bubbleBox");

const observer7 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            bubbleBox.classList.add("play");
            observer7.unobserve(scene7);
        }
    });
},{
    threshold:0.5
});

observer7.observe(scene7);


/////////////////scene8
const scene8 = document.querySelector("#scene8");

const paper1 = document.querySelector("#paper1");
const paper2 = document.querySelector("#paper2");
const paper3 = document.querySelector("#paper3");

const line8a = document.querySelector("#line8a");
const line8b = document.querySelector("#line8b");

const box = document.querySelector("#box");

const observer8 = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            // paper1 → paper2
            setTimeout(()=>{
                paper1.classList.add("hide");
                paper2.classList.add("show");
            },800);

            // paper2 → paper3
            setTimeout(()=>{
                paper2.classList.add("hide");
                paper3.classList.add("show");
                line8a.classList.add("show");
            },1600);

            observer8.unobserve(scene8);

        }

    });

},{
    threshold:0.5
});

observer8.observe(scene8);

/* ---------- Drag ---------- */

paper3.draggable = true;

paper3.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("paper","paper3");
});

box.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

box.addEventListener("drop",(e)=>{

    e.preventDefault();

    paper3.style.display="none";

    line8a.style.opacity="0";

    line8b.classList.add("show");

});



////////////////////scene9
const scene9 = document.querySelector("#scene9");
const pencil = document.querySelector("#pencil");

const line91 = document.querySelector("#line9_1");
const line92 = document.querySelector("#line9_2");
const line93 = document.querySelector("#line9_3");

let pencilPlayed = false;

const observer9 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !pencilPlayed) {

            pencilPlayed = true;

            // 첫 줄 시작
            pencil.classList.add("write1");

            setTimeout(() => {
                line91.classList.add("show");
            }, 300);

            // 첫 줄 끝까지 쓰기
            setTimeout(() => {
                pencil.classList.remove("write1");
                pencil.classList.add("write1End");
            }, 1200);

            // 둘째 줄 시작
            setTimeout(() => {
                pencil.classList.remove("write1End");
                pencil.classList.add("write2");
                line92.classList.add("show");
            }, 1700);

            // 둘째 줄 끝까지 쓰기
            setTimeout(() => {
                pencil.classList.remove("write2");
                pencil.classList.add("write2End");
            }, 2900);

            // 셋째 줄 시작
            setTimeout(() => {
                pencil.classList.remove("write2End");
                pencil.classList.add("write3");
                line93.classList.add("show");
            }, 3400);

            // 셋째 줄 끝까지 쓰기
            setTimeout(() => {
                pencil.classList.remove("write3");
                pencil.classList.add("write3End");
            }, 4600);
            
            setTimeout(function(){

    document.getElementById("endingLight").classList.add("show");

},800);
document.body.classList.add("ending");

const landingImage = document.getElementById("landingPage");
landingImage.src = "images/ㄹㄷ.png";
        }

    });

}, { threshold: 0.5 });

observer9.observe(scene9);