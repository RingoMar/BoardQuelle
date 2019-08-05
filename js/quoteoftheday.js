function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$(document).ready(function () {
    var q = getCookie("qofday");
    if (q != "") {
        $("#qofday").text(q);
        console.log(q)
    } else {
        $.get("https://gist.githubusercontent.com/RingoMar/fb0b7587b76792b4072232cff1482231/raw/e914c21f8068bed9b0f7d94e46b57311850df3ea/gistfile1.txt", function (data) {
            var lines = data.split("\n");
            var qd = Math.floor(Math.random() * lines.length);
            var f1 = lines[qd]
            var d = new Date();
            d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "qofday" + "=" + f1.slice(0, -2) + ";" + expires + ";path=/";
            $("#qofday").text(f1.slice(0, -2));
        });
    }
});