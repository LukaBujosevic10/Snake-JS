'use strict'
$(document).ready(function(){
let matrix = [[-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],       
          [-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],
          [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2]]

console.log("h: "+matrix.length*20);
console.log("w: "+matrix[0].length*20);
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let duzina = 2;
let smer = "r";
let pozicija1001;
let pozEl;
let zivot = true;
let nahr = false;
let dugme = false;
let count = 0;
let pocetni_smerovi = ['r','l','u','d'];
let moguce_brzine = [700,200]; 
let speed = moguce_brzine[0];
context.fillStyle = '#000';
context.fillRect(0, 0, matrix[0].length*20, matrix.length*20);
function provera(x,y){
    if(matrix[y][x] == -2 || matrix[y][x] > 0){
        alert("Game Over")
        zivot = false;
        return false
    }else if(matrix[y][x] == -1){
        nahr = true;
        if(moguce_brzine[0] < 300){
        moguce_brzine[0]-=5;
        }
    }
}
function createApple(){
    let pozicijeNula = nadjiNule();
    let rnd = Math.floor(Math.random() *pozicijeNula.length);
    matrix[pozicijeNula[rnd][1]][pozicijeNula[rnd][0]] = -1;
    
}
function nadjiNule(){
    let niz = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0)
                niz.push([j,i]);
        }
    }
    return niz;
}
function promenaSmera(){
    
    document.addEventListener('keydown', function(e) {
        dugme = true;
        if(e.which == 40 && smer != "u"){
            smer="d";
        }else if(e.which == 39 && smer!="l"){
            smer = "r";
        }else if(e.which == 38 && smer!="d"){
            smer = "u";
        }else if(e.which == 37 && smer!="l"){
            smer = "l";
        }
        if(dugme){
            count++;
        }
    })
    document.addEventListener('keyup', function(e) {
        dugme = false;
        count = 0;
        console.log("up");
    })
    
}
function drawWall(){
    for(let i = 0;i<matrix.length;i++){
        if(i==0 || i==matrix.length-1){
            for(let j = 0;j<matrix[0].length;j++){
                //console.log(i);
                context.fillStyle = '#ff0033';
                context.fillRect(j*20, i*20, 20, 20);
            }
        }else{
            context.fillStyle = '#ff0033';
            context.fillRect(0, i*20, 20, 20);
            context.fillRect((matrix[0].length-1)*20, i*20, 20, 20);
        }
    }
}
function drawThings(){
    context.fillStyle = '#000';
    context.fillRect(20, 20, matrix[0].length*20-40, matrix.length*20-40);
    let pozicija;
    for(let i=1;i<=duzina;i++){
    pozicija =findElement(i);  
    //console.log(i)
    context.fillStyle = 'white';
    context.fillRect(pozicija[0]*20, pozicija[1]*20, 20, 20);
}
    let pozicijaJabuke = findElement(-1);
    context.fillStyle = 'green';
    context.fillRect(pozicijaJabuke[0]*20, pozicijaJabuke[1]*20, 20, 20); 
}
function findElement(i){
    for(let j=0;j<matrix.length;j++){
        if(matrix[j].indexOf(i) != -1){
            return([matrix[j].indexOf(i),j]);
            
        }
    }
}
function moveInMatrix(){
    
    for(let f=1;f<=duzina;f++){
        if(f == 1){
            pozicija1001 = findElement(f);
            let nova = otkriji_smer(smer,pozicija1001);
            let nova_x = nova[0];
            let nova_y = nova[1];
            if(provera(nova_x,nova_y) == false){
                break;
            }
            pozicija1001 = findElement(f);
            matrix[nova_y][nova_x] = 1;
            matrix[pozicija1001[1]][pozicija1001[0]] = 1001;
            
        }else{
            pozicija1001 = findElement(1001);
            pozEl = findElement(f);
            matrix[pozicija1001[1]][pozicija1001[0]] = f;
            matrix[pozEl[1]][pozEl[0]] = 1001;
            
        }
    }
    if(zivot == true){
        if(nahr == false){
            matrix[pozEl[1]][pozEl[0]] = 0;
        }else{
            duzina++;

            matrix[pozEl[1]][pozEl[0]] = duzina;
            nahr = false;
            createApple();
        }
        
        if(count > 5){
            speed = moguce_brzine[1];
            console.log("Ubrzao");
        }else{
            speed = moguce_brzine[0];
        }
        drawThings();
        setTimeout(moveInMatrix, speed);
    }
}
function napravi_snake(){
    let poz_x = Math.floor(Math.random() * (matrix[0].length-7)) + 3;
    let poz_y = Math.floor(Math.random() * (matrix.length-7)) + 3;
    matrix[poz_y][poz_x] = 1;
    let rnd = Math.floor(Math.random() * 4);
    let smer_nove = pocetni_smerovi[rnd];
    pocetni_smerovi.pop(rnd);
    let dvojka = otkriji_smer(smer_nove,[poz_x,poz_y]);
    matrix[dvojka[1]][dvojka[0]] = 2;
    rnd = Math.floor(Math.random() * 3);
    smer = pocetni_smerovi[rnd];
}
function otkriji_smer(smer,pozicija){
    let nova_x,nova_y;
    if(smer == "r"){
        nova_y=pozicija[1];
        nova_x = pozicija[0]+1;
    }    
    else if(smer == "l"){
        nova_y=pozicija[1];
        nova_x = pozicija[0]-1;
    }else if(smer == "d"){
        nova_y=pozicija[1]+1;
        nova_x = pozicija[0];
    }else if(smer == "u"){
        nova_y=pozicija[1]-1;
        nova_x = pozicija[0];
    }
    return[nova_x,nova_y];
}

napravi_snake();
drawWall();
promenaSmera();
createApple();
//interval = setInterval(moveInMatrix,speed);
moveInMatrix()
})