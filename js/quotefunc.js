$( document ).ready(function() {
    $.get("https://gist.githubusercontent.com/RingoMar/fb0b7587b76792b4072232cff1482231/raw/e914c21f8068bed9b0f7d94e46b57311850df3ea/gistfile1.txt", function (data) {
        var lines = data.split("\n");
        
        // //Random item number
        var q1 = Math.floor(Math.random() * lines.length);
        var q2 = Math.floor(Math.random() * lines.length);
        var q3 = Math.floor(Math.random() * lines.length);
        
        // add the quote to divs
        var f1 = lines[q1]
        var f2 = lines[q2]
        var f3 = lines[q3]

        $("#qt1").text(f1.slice(0, -2));
        $("#qt2").text(f2.slice(0, -2));
        $("#qt3").text(f3.slice(0, -2));
    });
});