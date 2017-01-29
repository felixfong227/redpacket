var redPacket = document.querySelector("#redpacket");

redPacket.addEventListener("click",function () {

    redPacket.classList.add("animation");

    // When the animation is end then remove the animation class

    setTimeout(function () {
        redPacket.classList.remove("animation");
    },1500);

});