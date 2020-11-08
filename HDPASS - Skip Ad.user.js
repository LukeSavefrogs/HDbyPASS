// ==UserScript==
// @name         Streaming - Skip Ads (hdpass.*)
// @namespace    http://tampermonkey.net/
// @downloadURL  https://github.com/LukeSavefrogs/HDbyPASS/raw/main/HDPASS%20-%20Skip%20Ad.user.js
// @version      1.0.0
// @history      1.0.0 - Uploaded on GitHub
// @description  Remove that 15 seconds fake player in some streaming players
// @author       Luke Savefrogs
// @include      /https:\/\/hdpass.\w[a-zA-Z]+\w\/movie/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(confirm("Andare all'inizio del film?")) {
        document.querySelector(".fake-signup-close.open-fake-url").click();

        var fake_player = document.getElementById("fake-player-wrapper");
        if(!!fake_player) {
            window.setTimeout(() => {
                while (fake_player.firstChild) {
                    fake_player.removeChild(fake_player.lastChild);
                }
                fake_player.remove();

                console.log("Rimosso il Fake Player")
            }, 2000);
        }
    }
})();
