// ==UserScript==
// @name         Remove youtube shorts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


//TODO cacher les shorts en tendance et le bouton short

(function() {
    'use strict';

    function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

        let removeShorts = setInterval(function(){
            Array.from(
                document.querySelectorAll('ytd-grid-video-renderer')).forEach(
                element => {
                    try{

                        removeElementsByClass('ytd-rich-grid-slim-media') //Suppresion des suggestions de shorts et de films dans la page d'accueil
                        if (element.querySelector('ytd-thumbnail-overlay-time-status-renderer').getAttribute("overlay-style") == "SHORTS"){
                            element.closest("ytd-grid-video-renderer").remove()
                        }// Suppression des shorts dans les abonnements


                    }
                    catch{null
                         }
                })
        }, 10)

        removeShorts()
})();