(function() {
    var MAX_CHARS = 8;
    var NOUNS = [
    'FAITH',
    'LOVE',
    'JUDAISM',
    'JUSTICE',
    'TRUTH',
    // 'SELF-DETERMINATION',
    // 'ZACH',
    'SALVATION',
    'FREEDOM',
    'FEMINISM',
    'HOPE',
    'REDEMPTION',
    'NECESSARY',
    'FREEDOM',
    'HOLY',
    'PRIDE',
    'PEACE',
    'RESPECT',
    'EMANCIPATION',
    'DIGNITY',
    'RIGHTEOUS',
    'REGENERATION',
    'RENEWAL',
    'LIBERATION',
    'INCLUSION',
    'CIVIL RIGHTS',
    'EQUALITY',
    'MAGNIFICENT',
    'HUMANITARIAN',
    'NOBLE',
    'PROGRESSIVE',
    'BEAUTIFUL',
    'SELF-HELP',
    ].filter(function(f) { return f.length <= MAX_CHARS; });

    var app = new PIXI.Application(1200, 440, {transparent: true});
    document.body.appendChild(app.view);
    app.view.setAttribute('style', 'width: 100%;');
    var ZIONIST_BLUE = '#bde7fd';

    var zionismStyle = new PIXI.TextStyle({
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: 200,
        fontWeight: 300,
        fill: '#ffffff'
    });

    var zionismText = new PIXI.Text('ZIONISM', zionismStyle);
    zionismText.x = 100;
    zionismText.y = 30;

    app.stage.addChild(zionismText);

    var isStyle = new PIXI.TextStyle({
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: 200,
        fontWeight: 100,
        fill: '#ffffff'
    });

    var isText = new PIXI.Text('IS', isStyle);
    isText.x = zionismText.x + zionismText.width + 5;
    isText.y = zionismText.y + 7;

    app.stage.addChild(isText);

    var nounStyle = new PIXI.TextStyle({
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: 200,
        fontWeight: 300,
        fill: '#ffffff'
    });

    var nounText = new PIXI.Text('FAITH', nounStyle);
    nounText.x = zionismText.x;
    nounText.y = zionismText.y + isText.height;

    app.stage.addChild(nounText);

    var framesElapsed = 0;
    var framesToWait = 1;
    app.ticker.add(function(delta) {
        framesElapsed += delta;
        if (framesElapsed >= framesToWait) {
            nounText.text = NOUNS[Math.floor(Math.random() * NOUNS.length)];
            framesElapsed = 0;
            framesToWait += 1;
        }
    });

}());
