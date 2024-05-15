/**
 * Még ha működne is
 * azért épp az a neve, ami
 * na nembaj, itt hagyom, hátha tudok belőle lopni valamit, amit még jól jöhet
 */

function showHelp() {
    window.location.href = "rules.html";
}

function restartTheGame() {
    window.location.href = "index.html";
}

/**
 *Disk 1: #FF6961 (Salmon)
Disk 2: #77DD77 (Pastel Green)
Disk 3: #5D6D7E (Slate Gray)
Disk 4: #FDFD96 (Light Yellow)
Disk 5: #AF7AC5 (Lavender)
Disk 6: #82E0AA (Mint Green)
Disk 7: #F5B041 (Tangerine)
Disk 8: #5499C7 (Sky Blue)
Disk 9: #F08080 (Light Coral)
Disk 10: #AED6F1 (Baby Blue)
 */


/* SETUP THE GAME */


class Disk {

    constructor(id, color, size, x1, y1, x2, y2, pole, polePosition) {
        this.ID = parseInt(id);
        this.color = color;
        this.size = size;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.pole = parseInt(pole);
        this.polePosition = parseInt(polePosition);
    }

    getColor() {
        return this.color;
    }

    getSize() {
        return parseInt(this.size);
    }

    getX1() {
        return parseInt(this.x1);
    }

    getX2() {
        return parseInt(this.x2);
    }

    getY1() {
        return parseInt(this.y1);
    }

    getY2() {
        return parseInt(this.y2);
    }

    getPole() {
        return parseInt(this.pole);
    }

    getPolePosition() {
        return parseInt(this.polePosition);
    }

    //** */
}

const colors = [
    "#FF6961",
    "#5D6D7E",
    "#FDFD96",
    "#AF7AC5",
    "#82E0AA",
    "#F5B041",
    "#F08080",
    "#5499C7",
]

/*
<line x1="100" y1="615" x2="400" y2="615" class="disk" id="disk-1"></line>
<line x1="120" y1="585" x2="380" y2="585" class="disk" id="disk-2"></line>
<line x1="140" y1="555" x2="360" y2="555" class="disk" id="disk-3"></line>
<line x1="160" y1="525" x2="340" y2="525" class="disk" id="disk-4"></line>
<line x1="180" y1="495" x2="320" y2="495" class="disk" id="disk-5"></line>
<line x1="200" y1="465" x2="300" y2="465" class="disk" id="disk-6"></line>
<line x1="220" y1="435" x2="280" y2="435" class="disk" id="disk-7"></line>
<line x1="240" y1="405" x2="260" y2="405" class="disk" id="disk-8"></line>
*/
const diskPositionY = [615, 585, 555, 525, 495, 465, 435, 405];
const diskPositionX = [250, 625, 1000];


var x1 = $("#disk-1").attr("x1");
var x2 = $("#disk-1").attr("x2");
var y1 = $("#disk-1").attr("y1");
var y2 = $("#disk-1").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[0];
$("#disk-1").css("stroke", color);

var disk1 = new Disk(1, color, size, x1, y1, x2, y2, 1, 8);
    
var x1 = $("#disk-2").attr("x1");
var x2 = $("#disk-2").attr("x2");
var y1 = $("#disk-2").attr("y1");
var y2 = $("#disk-2").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[1];
$("#disk-2").css("stroke", color);

var disk2 = new Disk(2, color, size, x1, y1, x2, y2, 1, 7);

    
var x1 = $("#disk-3").attr("x1");
var x2 = $("#disk-3").attr("x2");
var y1 = $("#disk-3").attr("y1");
var y2 = $("#disk-3").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[2];
$("#disk-3").css("stroke", color);

var disk3 = new Disk(3, color, size, x1, y1, x2, y2, 1, 6);

    
var x1 = $("#disk-4").attr("x1");
var x2 = $("#disk-4").attr("x2");
var y1 = $("#disk-4").attr("y1");
var y2 = $("#disk-4").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[3];
$("#disk-4").css("stroke", color);

var disk4 = new Disk(4, color, size, x1, y1, x2, y2, 1, 5);
    
var x1 = $("#disk-5").attr("x1");
var x2 = $("#disk-5").attr("x2");
var y1 = $("#disk-5").attr("y1");
var y2 = $("#disk-5").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[4];
$("#disk-5").css("stroke", color);

var disk5 = new Disk(5, color, size, x1, y1, x2, y2, 1, 4);
    
var x1 = $("#disk-6").attr("x1");
var x2 = $("#disk-6").attr("x2");
var y1 = $("#disk-6").attr("y1");
var y2 = $("#disk-6").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[5];
$("#disk-6").css("stroke", color);

var disk6 = new Disk(6, color, size, x1, y1, x2, y2, 1, 3);
    
var x1 = $("#disk-7").attr("x1");
var x2 = $("#disk-7").attr("x2");
var y1 = $("#disk-7").attr("y1");
var y2 = $("#disk-7").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[6];
$("#disk-7").css("stroke", color);

var disk7 = new Disk(7, color, size, x1, y1, x2, y2, 1, 2);
    
var x1 = $("#disk-8").attr("x1");
var x2 = $("#disk-8").attr("x2");
var y1 = $("#disk-8").attr("y1");
var y2 = $("#disk-8").attr("y2");
var size = Math.abs(x1 - x2);
var color = colors[7];
$("#disk-8").css("stroke", color);

var disk8 = new Disk(8, color, size, x1, y1, x2, y2, 1, 1);

var firstpole = [disk1, disk2, disk3, disk4, disk5, disk6, disk7, disk8];
var secondpole = [];
var thirdpole = [];

let selected = false;

/* BEGIN THE GAME */

function renderDisks() {
    $("#disk-1").attr("x1", disk1.getX1());
    $("#disk-1").attr("x2", disk1.getX2());
    $("#disk-1").attr("y1", disk1.getY1());
    $("#disk-1").attr("y2", disk1.getY2());

    
    $("#disk-2").attr("x1", disk1.getX1());
    $("#disk-2").attr("x2", disk1.getX2());
    $("#disk-2").attr("y1", disk1.getY1());
    $("#disk-2").attr("y2", disk1.getY2());

    
    $("#disk-3").attr("x1", disk1.getX1());
    $("#disk-3").attr("x2", disk1.getX2());
    $("#disk-3").attr("y1", disk1.getY1());
    $("#disk-3").attr("y2", disk1.getY2());

    
    $("#disk-4").attr("x1", disk1.getX1());
    $("#disk-4").attr("x2", disk1.getX2());
    $("#disk-4").attr("y1", disk1.getY1());
    $("#disk-4").attr("y2", disk1.getY2());

    
    $("#disk-5").attr("x1", disk1.getX1());
    $("#disk-5").attr("x2", disk1.getX2());
    $("#disk-5").attr("y1", disk1.getY1());
    $("#disk-5").attr("y2", disk1.getY2());

    
    $("#disk-5").attr("x1", disk1.getX1());
    $("#disk-5").attr("x2", disk1.getX2());
    $("#disk-5").attr("y1", disk1.getY1());
    $("#disk-5").attr("y2", disk1.getY2());

    
    $("#disk-6").attr("x1", disk1.getX1());
    $("#disk-6").attr("x2", disk1.getX2());
    $("#disk-6").attr("y1", disk1.getY1());
    $("#disk-6").attr("y2", disk1.getY2());

    
    $("#disk-7").attr("x1", disk1.getX1());
    $("#disk-7").attr("x2", disk1.getX2());
    $("#disk-7").attr("y1", disk1.getY1());
    $("#disk-7").attr("y2", disk1.getY2());

    
    $("#disk-8").attr("x1", disk1.getX1());
    $("#disk-8").attr("x2", disk1.getX2());
    $("#disk-8").attr("y1", disk1.getY1());
    $("#disk-8").attr("y2", disk1.getY2());

}

function updateDisks() {

    if (firstpole.length == NaN) {
        firstpolelength = 0;
    } else {
        firstpolelength = firstpole.length;
    }
    if (secondpole.length == NaN) {
        secondpolelength = 0;
    } else {
        secondpolelength = secondpole.length;
    }
    if (thirdpole.length == NaN) {
        thirdpolelength = 0;
    } else {
        thirdpolelength = thirdpole.length;
    }

    for (i=0;i<firstpolelength;i++) {
        disksize = Math.abs(parseInt($("disk-" + firstpole[i].ID).attr("x1")) - parseInt($("disk-" + firstpole[i].ID).attr("x2")));
        disksize = parseInt(disksize);
        firstpole[i].x1=diskPositionX-disksize/2;
        firstpole[i].x2=diskPositionX+disksize/2;
        firstpole[i].polePosition=i+1;
        if (firstpole[i].polePosition == 1) {
            y1,y2 = diskPositionY[0];
        }
        if (firstpole[i].polePosition == 2) {
            y1,y2 = diskPositionY[1];
        }
        if (firstpole[i].polePosition == 3) {
            y1,y2 = diskPositionY[2];
        }
        if (firstpole[i].polePosition == 4) {
            y1,y2 = diskPositionY[3];
        }
        if (firstpole[i].polePosition == 5) {
            y1,y2 = diskPositionY[4];
        }
        if (firstpole[i].polePosition == 6) {
            y1,y2 = diskPositionY[5];
        }
        if (firstpole[i].polePosition == 7) {
            y1,y2 = diskPositionY[6];
        }
        if (firstpole[i].polePosition == 8) {
            y1,y2 = diskPositionY[7];
        }
        firstpole[i].y1 = y1;
        firstpole[i].y2 = y2;
        $("#disk-" + firstpole[i].ID).attr("x1", firstpole[i].x1);
        $("#disk-" + firstpole[i].ID).attr("x2", firstpole[i].x2);
        $("#disk-" + firstpole[i].ID).attr("y1", firstpole[i].y1);
        $("#disk-" + firstpole[i].ID).attr("y2", firstpole[i].y2);
    }

    for (i=0;i<secondpolelength;i++) {
        disksize = Math.abs($("disk-" + secondpole[i].ID).attr("x1")-$("disk-" + secondpole[i].ID).attr("x2"));
        secondpole[i].x1=diskPositionX-disksize/2;
        secondpole[i].x2=diskPositionX+disksize/2;
        secondpole[i].polePosition=i+1;
        if (secondpole[i].polePosition == 1) {
            y1,y2 = diskPositionY[0];
        }
        if (secondpole[i].polePosition == 2) {
            y1,y2 = diskPositionY[1];
        }
        if (secondpole[i].polePosition == 3) {
            y1,y2 = diskPositionY[2];
        }
        if (secondpole[i].polePosition == 4) {
            y1,y2 = diskPositionY[3];
        }
        if (secondpole[i].polePosition == 5) {
            y1,y2 = diskPositionY[4];
        }
        if (secondpole[i].polePosition == 6) {
            y1,y2 = diskPositionY[5];
        }
        if (secondpole[i].polePosition == 7) {
            y1,y2 = diskPositionY[6];
        }
        if (secondpole[i].polePosition == 8) {
            y1,y2 = diskPositionY[7];
        }
        secondpole[i].y1 = y1;
        secondpole[i].y2 = y2;
        $("#disk-" + secondpole[i].ID).attr("x1", secondpole[i].x1);
        $("#disk-" + secondpole[i].ID).attr("x2", secondpole[i].x2);
        $("#disk-" + secondpole[i].ID).attr("y1", secondpole[i].y1);
        $("#disk-" + secondpole[i].ID).attr("y2", secondpole[i].y2);
    }

    for (i=0;i<thirdpolelength;i++) {
        disksize = Math.abs($("disk-" + thirdpole[i].ID).attr("x1")-$("disk-" + thirdpole[i].ID).attr("x2"));
        thirdpole[i].x1=diskPositionX-disksize/2;
        thirdpole[i].x2=diskPositionX+disksize/2;
        thirdpole[i].polePosition=i+1;
        if (thirdpole[i].polePosition == 1) {
            y1,y2 = diskPositionY[0];
        }
        if (thirdpole[i].polePosition == 2) {
            y1,y2 = diskPositionY[1];
        }
        if (thirdpole[i].polePosition == 3) {
            y1,y2 = diskPositionY[2];
        }
        if (thirdpole[i].polePosition == 4) {
            y1,y2 = diskPositionY[3];
        }
        if (thirdpole[i].polePosition == 5) {
            y1,y2 = diskPositionY[4];
        }
        if (thirdpole[i].polePosition == 6) {
            y1,y2 = diskPositionY[5];
        }
        if (thirdpole[i].polePosition == 7) {
            y1,y2 = diskPositionY[6];
        }
        if (thirdpole[i].polePosition == 8) {
            y1,y2 = diskPositionY[7];
        }
        thirdpole[i].y1 = y1;
        thirdpole[i].y2 = y2;
        $("#disk-" + thirdpole[i].ID).attr("x1", thirdpole[i].x1);
        $("#disk-" + thirdpole[i].ID).attr("x2", thirdpole[i].x2);
        $("#disk-" + thirdpole[i].ID).attr("y1", thirdpole[i].y1);
        $("#disk-" + thirdpole[i].ID).attr("y2", thirdpole[i].y2);
    }

    renderDisks();
}

function moveDisk (from, to) {
    if ( from == 1 ) {
        if (to == 2) {
            secondpole.unshift(firstpole[0]);
        } else if (to == 3) {
            thirdpole.unshift(firstpole[0]);
        } else {
            return false;
        }
        firstpole.shift();
    }

    if ( from == 2 ) {
        if (to == 1) {
            firstpole.unshift(secondpole[0]);
        } else if (to == 3) {
            thirdpole.unshift(secondpole[0]);
        } else {
            return false;
        }
        secondpole.shift();
    }

    if ( from == 3 ) {
        if (to == 1) {
            firstpole.unshift(thirdpole[0]);
        } else if (to == 2) {
            secondpole.unshift(thirdpole[0]);
        } else {
            return false;
        }
        thirdpole.shift();
    }

    updateDisks();
}

function clickPole(poleID) {
    if (selected) {
        moveDisk(selected, poleID);
        selected = null;
    } else {
        selected = poleID;
    }
}