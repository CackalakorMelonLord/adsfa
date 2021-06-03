var canvas = new fabric.Canvas('canvas1');

playerx = 10;

playery = 10;

blockimagewidth = 30;

blockimageheight = 30;

var playerobject = "";

var blockimageobject = "";

function player_update() {
    fabric.Image.fromURL("281-2813402_download-download-png-spider-man-homecoming-headphones-removebg-preview.png", function(Img) {
        playerobject = Img;

        playerobject.scaleToWidth(150);

        playerobject.scaleToHeight(140);

        playerobject.set({
            top:playery,
            left:playerx
        });

        canvas.add(playerobject);
    });
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockimageobject = Img;

        blockimageobject.scaleToWidth(blockimagewidth);

        blockimageobject.scaleToWidth(blockimageheight);

        blockimageobject.set ({
           top:playery,
           left:playerx 
        });

        canvas.add(blockimageobject);
    });
}

window.addEventListener("keydown", keyDown);


function keyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == "80") {
        console.log("Shift and P key were pressed together");

        blockimagewidth = blockimagewidth + 10;
        blockimageheight = blockimageheight + 10;

        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }

    if(e.shiftKey == true && keypressed == "75") {
        console.log("Shift and K key were pressed together");

        blockimagewidth = blockimagewidth - 10;
        blockimageheight = blockimageheight - 10;

        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;
    }

    if(keypressed == "38") {
        up();
        console.log("38, Up");
    }
    if(keypressed == "40") {
        down();
        console.log("40, Down");
    }
    if(keypressed == "37") {
        left();
        console.log("37, Left");
    }
    if(keypressed == "39") {
        right();
        console.log("39, Right");
    }
    if(keypressed == "66") {
        newImage("body.png");
        console.log("B");
    }
    if(keypressed == "72") {
        newImage("head.png");
        console.log("H");
    }
    if(keypressed == "65") {
        newImage("leftarm.png");
        console.log("LeftArm");
    }
    if(keypressed == "76") {
        newImage("rightarm.png");
        console.log("RightArm");
    }
    if(keypressed == "81") {
        newImage("leftleg.png");
        console.log("LeftLeg");
    }
    if(keypressed == "77") {
        newImage("rightleg.png");
        console.log("RightLeg");
    }
}
function up() {
    if(playery >= 0) {
        playery = playery - blockimageheight;
        console.log("Block Image Height = " + blockimageheight);
        console.log("When Up Arrow Key Is Pressed, X = " + playerx + ", And Y = " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function down() {
  if(playery <= 460) {
    playery = playery + blockimageheight;
    console.log("Block Image Height = " + blockimageheight);
    console.log("When Down Arrow Key Is Pressed, X = " + playerx + ", And Y = " + playery);
    canvas.remove(playerobject);
    player_update();
  }
}
function left() {
  if(playerx >= 0) {
      playerx = playerx - blockimagewidth;
      console.log("Block Image Width = " + blockimagewidth);
      console.log("When Left Arrow Key Is Pressed, X = " + playerx + ", And Y = " + playery);
      canvas.remove(playerobject);
      player_update();
  }
}
function right() {
  if(playerx <= 850) {
      playerx = playerx + blockimagewidth;
      console.log("Block Image Width = " + blockimagewidth);
      console.log("When Right Arrow Key Is Pressed, X = " + playerx + ", And Y = " + playery);
      canvas.remove(playerobject);
      player_update();
  }
}
