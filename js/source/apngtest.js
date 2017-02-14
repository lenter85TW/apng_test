/**
 * Created by kimdoeun on 2017. 2. 13..
 */


import parseAPNG from 'apng-js';

var oReq = new XMLHttpRequest();

oReq.onload = function () {
    var arrayBuffer = oReq.response;
    var apng = parseAPNG(arrayBuffer);

    if ( apng instanceof Error )
    {
        console.log('ImageUtil > apng error', apng.message);
        return;
    }
    apng.createImages().then(() => {

        const canvasDiv = document.getElementsByClassName('canvasDiv')[0];
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 500;
        canvasDiv.appendChild(canvas);

        apng.getPlayer(canvas.getContext('2d')).then(p => {
            let player;
            let playbackRate = 1.0;
            console.log("_------",p);
            player = p;
            player.playbackRate = playbackRate;
            player.play();
        });
    });
}


//로컬에서 작업할땐 이렇게 해야 하고
oReq.open("GET", 'http://localhost:63342/APNG_Test/moi_daily_p_001.png');

//나중에 서버에 올릴땐 이렇게 바꿔줘야 한다. 안그러면 access 관련 에러가 난다.
//oReq.open("GET", 'http://desktop.twinny.io/images/emoji/moi_daily_p/moi_daily_p_001.png');
oReq.responseType = "arraybuffer";
oReq.send();