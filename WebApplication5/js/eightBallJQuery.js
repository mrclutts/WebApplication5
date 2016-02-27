$(document).ready(function () {
    $("#eightbtn").click(function () {
        $("#eightball").effect("shake", { times: 5 }, 1500);
        $("#eightResult").fadeIn(10000);
    });
    $("#eightClick").click(function () {
        $("#eightball").effect("shake", { times: 5 }, 1500);
        
    });
    
});