const toggleBtn = document.getElementById('mode');
function toggle(){
    if (toggleBtn.checked === true) {
        $("body").removeClass("light")
        $(".card").removeClass("lightCard")
        $("body").addClass("dark")
        $(".card").addClass("darkCard")
    } else {
        $("body").addClass("light")
        $(".card").addClass("lightCard")
        $("body").removeClass("dark")
        $(".card").removeClass("darkCard")
    }
}

