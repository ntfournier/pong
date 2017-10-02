var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

var STAGE = {
    WIDTH: 256,
    HEIGHT: 256
};

var stage = new Container();
var renderer = autoDetectRenderer(STAGE.WIDTH, STAGE.HEIGHT);

document.body.appendChild(renderer.view);

loader
    .add('images/brickWall.png')
    .load(setup);

function setup() {
    var sprite = new Sprite(
        resources['images/brickWall.png'].texture
    );
    stage.addChild(sprite);
    renderer.render(stage);
}