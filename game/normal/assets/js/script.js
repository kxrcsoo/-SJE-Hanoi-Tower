/* CLASS */
class Disk {
    constructor(id, x1, y1, x2, y2, pole, polePosition) {
        this.id = id;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.pole = pole;
        this.polePosition = polePosition;
    }

    getID() {
        return this.id;
    }
    getX1() {
        return this.x1;
    }
    getY1() {
        return this.y1;
    }
    getX2() {
        return this.x2;
    }
    getY2() {
        return this.y2;
    }
    getPole() {
        return this.pole;
    }
    getPolePosition() {
        return this.polePosition;
    }
    getDiskSize() {
        return Math.abs(this.x1 - this.x2);
    }
}

/* END OF CLASS */

/* VARIABLES && CONSTANTS */

const colors1 = [
    "#FF69B4",
    "#34C759",
    "#FFD700",
    "#6495ED",
    "#DC143C",
    "#7FFD00",
    "#8B0A1A",
    "#45B3FA",
  ];
  
const colors2 = [
    "#00FF7F",
    "#C71585",
    "#FFC0CB",
    "#FFA07A",
    "#2E8B57",
    "#D2691E",
    "#FF4500",
    "#800080",
  ];
  
const colors3 = [
    "#0000FF",
    "#00FFFF",
    "#00FF00",
    "#FFFF00",
    "#FF00FF",
    "#FF0000",
    "#C0C0C0",
    "#808080",
  ];

let selected = null;
let gamewon = 0;

const diskPositionY = [615, 585, 555, 525, 495, 465];
const diskPositionX = [250, 625, 1000];

/* END OF VARIABLES && CONSTANTS */

function setDiskColor() {
    colorrand = Math.floor(Math.random() * 3) + 1;
    for (i=1;i<=8;i++) {
        if (colorrand == 1) {
            $("#disk-" + i).css("stroke", colors1[i-1]);
        }
        if (colorrand == 2) {
            $("#disk-" + i).css("stroke", colors2[i-1]);
        }
        if (colorrand == 3) {
            $("#disk-" + i).css("stroke", colors3[i-1]);
        }
    }
}

/* REGISTER GAME */

function showHelp() {
    window.location.href = "rules.html";
}

function restartTheGame() {
    window.location.href = "index.html";
}

function mainMenu() {
    window.location.href = "../../index.html";
}

function registerGame() {
    setDiskColor();
    x1 = $("#disk-1").attr("x1");
    x2 = $("#disk-1").attr("x2");
    y1 = $("#disk-1").attr("y1");
    y2 = $("#disk-1").attr("y2");
    pole = 1;
    polePosition = 1;
    disk1 = new Disk(1,x1,y1,x2,y2,pole,polePosition)

    x1 = $("#disk-2").attr("x1");
    x2 = $("#disk-2").attr("x2");
    y1 = $("#disk-2").attr("y1");
    y2 = $("#disk-2").attr("y2");
    pole = 1;
    polePosition = 2;
    disk2 = new Disk(2,x1,y1,x2,y2,pole,polePosition)

    x1 = $("#disk-3").attr("x1");
    x2 = $("#disk-3").attr("x2");
    y1 = $("#disk-3").attr("y1");
    y2 = $("#disk-3").attr("y2");
    pole = 1;
    polePosition = 3;
    disk3 = new Disk(3,x1,y1,x2,y2,pole,polePosition)

    x1 = $("#disk-4").attr("x1");
    x2 = $("#disk-4").attr("x2");
    y1 = $("#disk-4").attr("y1");
    y2 = $("#disk-4").attr("y2");
    pole = 1;
    polePosition = 4;
    disk4 = new Disk(4,x1,y1,x2,y2,pole,polePosition)
    
    x1 = $("#disk-5").attr("x1");
    x2 = $("#disk-5").attr("x2");
    y1 = $("#disk-5").attr("y1");
    y2 = $("#disk-5").attr("y2");
    pole = 1;
    polePosition = 5;
    disk5 = new Disk(5,x1,y1,x2,y2,pole,polePosition)
    
    x1 = $("#disk-6").attr("x1");
    x2 = $("#disk-6").attr("x2");
    y1 = $("#disk-6").attr("y1");
    y2 = $("#disk-6").attr("y2");
    pole = 1;
    polePosition = 6;
    disk6 = new Disk(6,x1,y1,x2,y2,pole,polePosition)


}

registerGame();

let firstpole = [disk1, disk2, disk3, disk4, disk5, disk6];
let secondpole = [];
let thirdpole = [];

/* END OF REGISTER GAME */

/* GAME FUNCTIONS */

function invalidMove(){
    alert("Érvénytelen lépés");
}

function renderDisks() {
    for (i=0;i<firstpole.length;i++) {
        x1 = diskPositionX[0]-(firstpole[i].getDiskSize()/2);
        x2 = diskPositionX[0]+(firstpole[i].getDiskSize()/2);
        if (firstpole[i].polePosition == 1) {
            y1 = diskPositionY[0];
            y2 = diskPositionY[0];
        }
        if (firstpole[i].polePosition == 2) {
            y1 = diskPositionY[1];
            y2 = diskPositionY[1];
        }
        if (firstpole[i].polePosition == 3) {
            y1 = diskPositionY[2];
            y2 = diskPositionY[2];
        }
        if (firstpole[i].polePosition == 4) {
            y1 = diskPositionY[3];
            y2 = diskPositionY[3];
        }
        if (firstpole[i].polePosition == 5) {
            y1 = diskPositionY[4];
            y2 = diskPositionY[4];
        }
        if (firstpole[i].polePosition == 6) {
            y1 = diskPositionY[5];
            y2 = diskPositionY[5];
        }
        if (firstpole[i].polePosition == 7) {
            y1 = diskPositionY[6];
            y2 = diskPositionY[6];
        }
        if (firstpole[i].polePosition == 8) {
            y1 = diskPositionY[7];
            y2 = diskPositionY[7];
        }
        firstpole[i].x1 = x1;
        firstpole[i].x2 = x2;
        firstpole[i].y1 = y1;
        firstpole[i].y2 = y2;
        $("#disk-" + firstpole[i].id).attr("x1",x1.toString());
        $("#disk-" + firstpole[i].id).attr("x2",x2.toString());
        $("#disk-" + firstpole[i].id).attr("y1",y1.toString());
        $("#disk-" + firstpole[i].id).attr("y2",y2.toString());
    }

    for (i=0;i<secondpole.length;i++) {
        x1 = diskPositionX[1]-(secondpole[i].getDiskSize()/2);
        x2 = diskPositionX[1]+(secondpole[i].getDiskSize()/2);
        if (secondpole[i].polePosition == 1) {
            y1 = diskPositionY[0];
            y2 = diskPositionY[0];
        }
        if (secondpole[i].polePosition == 2) {
            y1 = diskPositionY[1];
            y2 = diskPositionY[1];
        }
        if (secondpole[i].polePosition == 3) {
            y1 = diskPositionY[2];
            y2 = diskPositionY[2];
        }
        if (secondpole[i].polePosition == 4) {
            y1 = diskPositionY[3];
            y2 = diskPositionY[3];
        }
        if (secondpole[i].polePosition == 5) {
            y1 = diskPositionY[4];
            y2 = diskPositionY[4];
        }
        if (secondpole[i].polePosition == 6) {
            y1 = diskPositionY[5];
            y2 = diskPositionY[5];
        }
        if (secondpole[i].polePosition == 7) {
            y1 = diskPositionY[6];
            y2 = diskPositionY[6];
        }
        if (secondpole[i].polePosition == 8) {
            y1 = diskPositionY[7];
            y2 = diskPositionY[7];
        }
        secondpole[i].x1 = x1;
        secondpole[i].x2 = x2;
        secondpole[i].y1 = y1;
        secondpole[i].y2 = y2;
        $("#disk-" + secondpole[i].id).attr("x1",x1.toString());
        $("#disk-" + secondpole[i].id).attr("x2",x2.toString());
        $("#disk-" + secondpole[i].id).attr("y1",y1.toString());
        $("#disk-" + secondpole[i].id).attr("y2",y2.toString());
    }

    for (i=0;i<thirdpole.length;i++) {
        x1 = diskPositionX[2]-(thirdpole[i].getDiskSize()/2);
        x2 = diskPositionX[2]+(thirdpole[i].getDiskSize()/2);
        if (thirdpole[i].polePosition == 1) {
            y1 = diskPositionY[0];
            y2 = diskPositionY[0];
        }
        if (thirdpole[i].polePosition == 2) {
            y1 = diskPositionY[1];
            y2 = diskPositionY[1];
        }
        if (thirdpole[i].polePosition == 3) {
            y1 = diskPositionY[2];
            y2 = diskPositionY[2];
        }
        if (thirdpole[i].polePosition == 4) {
            y1 = diskPositionY[3];
            y2 = diskPositionY[3];
        }
        if (thirdpole[i].polePosition == 5) {
            y1 = diskPositionY[4];
            y2 = diskPositionY[4];
        }
        if (thirdpole[i].polePosition == 6) {
            y1 = diskPositionY[5];
            y2 = diskPositionY[5];
        }
        if (thirdpole[i].polePosition == 7) {
            y1 = diskPositionY[6];
            y2 = diskPositionY[6];
        }
        if (thirdpole[i].polePosition == 8) {
            y1 = diskPositionY[7];
            y2 = diskPositionY[7];
        }
        thirdpole[i].x1 = x1;
        thirdpole[i].x2 = x2;
        thirdpole[i].y1 = y1;
        thirdpole[i].y2 = y2;
        $("#disk-" + thirdpole[i].id).attr("x1",x1.toString());
        $("#disk-" + thirdpole[i].id).attr("x2",x2.toString());
        $("#disk-" + thirdpole[i].id).attr("y1",y1.toString());
        $("#disk-" + thirdpole[i].id).attr("y2",y2.toString());
    }

}

let longid = "";

function testIfWon() {

    longid = "";

    for (i=0;i<thirdpole.length;i++) {
        longid = longid + (thirdpole[i].getID()).toString();
    }
    if (longid == "123456") {
        alert("You won!");
        playAudio("assets/sounds/win.mp3")
        gamewon = 1;
        
    }
}

let moves = 0;

function increaseMoves() {
    moves = moves + 1;
    renderMoves();
}


function renderMoves() {
    $("#moves").html("Lépések száma: " + moves.toString());
}

function moveDisk (from, to) {
    if ( from == 1 ) {
        if (to == 2) {
            firstpole[firstpole.length-1].pole = 2;
            firstpole[firstpole.length-1].polePosition = secondpole.length+1;
            secondpole.push(firstpole[firstpole.length-1]);
            increaseMoves();
        } else if (to == 3) {
            firstpole[firstpole.length-1].pole = 3;
            firstpole[firstpole.length-1].polePosition = thirdpole.length+1;
            thirdpole.push(firstpole[firstpole.length-1]);
            increaseMoves();
        } else {
            return false;
        }
        firstpole.pop();
    }

    if ( from == 2 ) {
        if (to == 1) {
            secondpole[secondpole.length-1].pole = 1;
            secondpole[secondpole.length-1].polePosition = firstpole.length+1;
            firstpole.push(secondpole[secondpole.length-1]);
            increaseMoves();
        } else if (to == 3) {
            secondpole[secondpole.length-1].pole = 3;
            secondpole[secondpole.length-1].polePosition = thirdpole.length+1;
            thirdpole.push(secondpole[secondpole.length-1]);
            increaseMoves();
        } else {
            return false;
        }
        secondpole.pop();
    }

    if ( from == 3 ) {
        if (to == 1) {
            thirdpole[thirdpole.length-1].pole = 1;
            thirdpole[thirdpole.length-1].polePosition = firstpole.length+1;
            firstpole.push(thirdpole[thirdpole.length-1]);
            increaseMoves();
        } else if (to == 2) {
            thirdpole[thirdpole.length-1].pole = 2;
            thirdpole[thirdpole.length-1].polePosition = secondpole.length+1;
            secondpole.push(thirdpole[thirdpole.length-1]);
            increaseMoves();
        } else {
            return false;
        }
        thirdpole.pop();
    }

    renderDisks();

    testIfWon();
}

function clickPole(poleID) {
    if ( gamewon == 0 ) {
        if (selected) {
            moveDisk(selected, poleID);
            selected = null;
            playAudio("assets/sounds/move.mp3");
        } else {
            selected = poleID;
            playAudio("assets/sounds/select.mp3");
        }
    } else {
        //
    }
}

function playAudio(url) {
    new Audio(url).play();
  }

  /*
  * TODO:
  * - add sound files
  * - make them play on click
  * - add win sound
  * - add more colors
  */