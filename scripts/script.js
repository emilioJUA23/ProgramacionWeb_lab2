

function changeFont()
{
    if (String(document.getElementById("page-top").style.fontFamily) == "Impact, Charcoal, sans-serif")
    {
        document.getElementById("page-top").style.fontFamily = "Arial,Helvetica,sans-serif";
    }
    else
    {
        document.getElementById("page-top").style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}

function makeBold()
{
    if (String(document.getElementById("page-top").style.fontWeight) == "bold")
    {
        document.getElementById("page-top").style.fontWeight = 'normal';
    }
    else
    {
        document.getElementById("page-top").style.fontWeight = 'bold';
    }
}

function changeBackColor()
{
    if (String(document.body.style.background) == "red none repeat scroll 0% 0%")
    {
        document.body.style.background = "grey";
    }
    else
    {
        document.body.style.background = "red";
    }
}

function changeColor()
{
    if (String(document.body.style.color) == "red")
    {
        document.body.style.color = "black";
    }
    else
    {
        document.body.style.color = "red";
    }
}

function pictureChange()
{
    var scr = String(document.getElementById('big_pic').src);
    if(scr.includes("eldrazi"))
    {
        document.getElementById('big_pic').src="images/red.jpg";
    }
    else
    {
        document.getElementById('big_pic').src="images/eldrazi.png";
    }

}

function getSum(total, num)
{
    return total + num;
}
function calculateManaCurve()
{
  // obtencion de variables
    var blueMana = parseInt(document.querySelector("#bluemana").value);
    var redMana = parseInt(document.querySelector("#redmana").value);
    var greenMana = parseInt(document.querySelector("#greenmana").value);
    var blackMana = parseInt(document.querySelector("#blackmana").value);
    var whiteMana = parseInt(document.querySelector("#whitemana").value);
    var lands = parseInt(document.querySelector("#lands").value);
    var weights = [blueMana,redMana,greenMana,blackMana,whiteMana];
    var sum = weights.reduce(getSum);
    blueMana= (blueMana/sum)*lands;
    redMana = (redMana/sum)*lands;
    blackMana = (blackMana/sum)*lands;
    whiteMana = (whiteMana/sum)*lands;
    greenMana = (greenMana/sum)*lands;
}
