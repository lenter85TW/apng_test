
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

        const canvasDiv = document.getElementsByClassName('canvasDiv');
        const canvas = document.createElement('canvas');
        canvas.width = this.props.size;
        canvas.height = this.props.size;
        canvasDiv.appendChild(canvas);

        apng.getPlayer(canvas.getContext('2d')).then(p => {
            player = p;
            player.playbackRate = playbackRate;
            player.play();
        });
    });
}

oReq.open("GET", 'http://desktop.twinny.io/images/emoji/moi_daily_p/moi_daily_p_001.png');
oReq.responseType = "arraybuffer";
oReq.send();