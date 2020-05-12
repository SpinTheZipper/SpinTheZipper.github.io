
//I dont know what I'm doing

//Animation Vars
var width = 128;
var height = 256;
var frameCount = 12;

//Spin Vars
var pos = 256;
var spinValue = 40;
var slowDown = 1;
var frameLength = 99999;
var maxPos = width*frameCount;
var spin;

//Add spin to the zipper
function addSpin() {
    frameLength -= spinValue;
    if (frameLength < 5)
        frameLength = 5;
    else if (frameLength > 100)
        frameLength = 100;
    doSpin();
}

//Change the frame
function doSpin()
{
    document.getElementById("anim").style.backgroundPosition = `-${pos}px 0px`;

    if (pos <= maxPos) 
        pos += width;
    else 
        pos = 256;

    frameLength += slowDown;
    if (frameLength > 300)
        frameLength = 99999;

    clearTimeout(spin);
    spin = setTimeout(() => {doSpin();}, frameLength);
}

//Start a timer for the next spin
spin = setTimeout( () => { doSpin(); }, frameLength);