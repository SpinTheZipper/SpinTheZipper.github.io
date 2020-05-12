
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

//Text vars
var textList = ["Hang in there!", "Go Dinos!", "You got this!", 
                "Drink Water!", "Do your best", "Have fun!", 
                "Go outside", "Be creative", "Do something you enjoy", 
                "Talk to a friend", "At least we're not MRU", "RIP BSD", 
                "Stay Safe", "Rex says hi"]

//Add spin to the zipper
function addSpin() {
    frameLength -= spinValue;
    if (frameLength < 5)
        frameLength = 5;
    else if (frameLength > 100)
        frameLength = 100;
    doSpin();
}

//Change the text
function changeText()
{
    document.getElementById("goodText").innerHTML = textList[Math.floor(Math.random() * textList.length)];

    //After 3 sec change text
    setTimeout( () => { changeText(); }, 3000);
}

//Change the frame
function doSpin()
{
    if (frameLength < 250)
    {
        document.getElementById("anim").style.backgroundPosition = `-${pos}px 0px`;

        if (pos <= maxPos) 
            pos += width;
        else 
            pos = 256;
    
        frameLength += slowDown;
    
        clearTimeout(spin);
        spin = setTimeout(() => {doSpin();}, frameLength);
    }
    
}

//Start timer till text change
setTimeout( () => { changeText(); }, 3000);