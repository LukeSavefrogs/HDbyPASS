// ==UserScript==
// @name         Streaming - Skip Ads (hdpass.*)
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
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
