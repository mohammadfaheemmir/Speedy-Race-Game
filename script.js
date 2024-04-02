var interval = {};
function initMovement(car, speed) 
{
    var carObj = document.getElementById(car);
    var left = 0;
    interval[car] = setInterval(function()
    {
        left += speed/100;
        carObj.style.left = left+"px";
        
        if(left >= 290) //finish
        {
            for(var i in interval) 
            {
                clearInterval(interval[i]);
            }
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
        }
    },10);
}
function start() 
{
    var speed1 = document.getElementById("speed1").value;
    var speed2 = document.getElementById("speed2").value;
    initMovement("car1", speed1);
    initMovement("car2", speed2);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop() 
{
    for(var i in interval) 
    {
        clearInterval(interval[i]);
    }
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}