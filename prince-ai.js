/* ============================================================
   PRINCE AI
   UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
   VERSION 200
   ============================================================ */

"use strict";

console.log("=================================");
console.log("PRINCE AI VERSION 200 LOADING");
console.log("=================================");


/* ============================================================
   START WHEN PAGE IS READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", function(){

    console.log("Prince AI DOM READY");

    initializePrinceAI();

});


/* ============================================================
   ELEMENTS
   ============================================================ */

let chatBox;
let input;
let sendBtn;
let voiceBtn;
let clearBtn;
let backBtn;
let statusBox;


/* ============================================================
   UNIVERSITY KNOWLEDGE
   ============================================================ */

const knowledge = {

    viceChancellor:
        "The Vice Chancellor of the University of Kabianga is Prof. Erick Koech, Ph.D., MBS.",

    dvc:
        "The Deputy Vice Chancellor, Academic and Student Affairs, is Prof. Dr. Fredrick Nyongesa Kassilly.",

    planning:
        "Planning, Research and Development is under Prof. Maurice Owino Oduor.",

    registrarAcademic:
        "The Registrar, Academic Affairs, is Dr. Cecilia Sang.",

    registrarAdministration:
        "The Registrar, Administration, is Mr. Peter K. Kimalel.",

    deanStudents:
        "The Dean of Students is Dr. Peter Ngugi.",

    directorICT:
        "The Director of ICT is Mr. Geoffrey Sowek.",

    finance:
        "The Finance Officer is CPA Willy Koech.",

    ltb1:
