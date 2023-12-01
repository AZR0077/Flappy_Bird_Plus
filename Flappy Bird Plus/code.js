var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4651f21a-d7e7-4eca-a616-30e4b21e0ad3","09a7bfb2-a001-4c3c-b379-3555b2b607c4","ad82fb77-fcb5-4756-9868-fff58ebba9cb","51358960-e984-45ca-9f0c-58d037467466","c7c56a71-6cf9-4b54-ae3f-079af008e3b0","22d06185-d97a-4cc2-873b-3a6227868e68","61c5171a-994a-4b59-9c28-68348f775453","aab4b441-196d-4421-b33f-f0adc601ff6c","3a8c0060-92ef-4512-a4ea-96c6fe50bb5c","509cc3b1-956b-4723-b845-bb359fe62988","451eb9f5-22c8-4438-9cf0-18d7bc24a11e","9d83b217-4fbd-4e53-b760-3c606ea1014b","f79b35b8-3e74-4a97-b00d-1131a436aa36","88b9d8e3-ef72-4e2f-bfb5-90eb12a5cc8c","bee6bc40-8cdb-40f9-b45b-c5dc98bdb88b","3c3f4ec3-a0ed-4cc4-a0fa-cf3c820d418e","512b9a22-2847-40b6-ab02-5e4fc754dde1","6a8482a9-f6c3-4f28-849e-2ff116e99e3e","973cff6d-68da-454b-b2c1-a0dd127704e6","90418c18-eed2-46e4-93f9-876d5d1d502e","2f96cc85-add9-4928-a475-3764f181d5b5","fb7a1f5c-1c4d-4820-b4c1-52b047fd906f","6e0f63dd-9ae3-46c0-b47c-064b044073c5","1bfaea8b-41de-4748-951b-4001c01a1194","e744546a-d906-4e04-97d3-b9c7c9a5b8bb","5f0ac0e9-114f-41aa-a252-23e03a3e3534","e0a15c77-0b7e-42ea-8d71-c37d6d2c69e8","d42245fa-1286-49c7-b3b9-00e7e55754f9","16d6b9d2-4b4d-41e2-8e4c-2a5acac08837","9e430d36-9a1f-40f5-bf60-37e431559059","389e9c68-28af-46f1-8256-c0174d772dd5","67cf874d-0178-4ac9-89f3-a180d1dd671f","87631a30-3486-439c-b90c-55dd6aa5b1cc","51711fef-a399-4fd3-a73e-d6d0c7fa6f79"],"propsByKey":{"4651f21a-d7e7-4eca-a616-30e4b21e0ad3":{"name":"Flappy bird background.png_1","sourceUrl":null,"frameSize":{"x":1263,"y":773},"frameCount":1,"looping":true,"frameDelay":12,"version":"GRbl89dgbP7TteUfQRUnIqrjXmeKhovD","loadedFromSource":true,"saved":true,"sourceSize":{"x":1263,"y":773},"rootRelativePath":"assets/4651f21a-d7e7-4eca-a616-30e4b21e0ad3.png"},"09a7bfb2-a001-4c3c-b379-3555b2b607c4":{"name":"flappy bird.PNG_1","sourceUrl":null,"frameSize":{"x":100,"y":73},"frameCount":3,"looping":true,"frameDelay":5,"version":"GUWakCQ4LliSgrtPR.ZTYjwpqgN8D0F9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":219},"rootRelativePath":"assets/09a7bfb2-a001-4c3c-b379-3555b2b607c4.png"},"ad82fb77-fcb5-4756-9868-fff58ebba9cb":{"name":"flappy bird 1 lose.PNG_1","sourceUrl":null,"frameSize":{"x":100,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"C1d0as_ZpU_bCic6llUfQxpJBLt8lbCd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":73},"rootRelativePath":"assets/ad82fb77-fcb5-4756-9868-fff58ebba9cb.png"},"51358960-e984-45ca-9f0c-58d037467466":{"name":"game over.PNG_1","sourceUrl":null,"frameSize":{"x":282,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"N9bYoTfsH1UpkVp8ovDQC.6YroPVSSlx","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":57},"rootRelativePath":"assets/51358960-e984-45ca-9f0c-58d037467466.png"},"c7c56a71-6cf9-4b54-ae3f-079af008e3b0":{"name":"pipe down.PNG_1","sourceUrl":null,"frameSize":{"x":85,"y":411},"frameCount":1,"looping":true,"frameDelay":12,"version":"NHmPACQbipnVL9fFeEnMSa1jzgcUfCKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":85,"y":411},"rootRelativePath":"assets/c7c56a71-6cf9-4b54-ae3f-079af008e3b0.png"},"22d06185-d97a-4cc2-873b-3a6227868e68":{"name":"pipe up.PNG_1","sourceUrl":null,"frameSize":{"x":86,"y":371},"frameCount":1,"looping":true,"frameDelay":12,"version":"5HMAgKWuBkPyOdDvCwm7Bv5f8uGhlYBc","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":371},"rootRelativePath":"assets/22d06185-d97a-4cc2-873b-3a6227868e68.png"},"61c5171a-994a-4b59-9c28-68348f775453":{"name":"0.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"9o.dqCX8JSjSgNUWFkrY3UmyLsX1E1eL","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/61c5171a-994a-4b59-9c28-68348f775453.png"},"aab4b441-196d-4421-b33f-f0adc601ff6c":{"name":"1.PNG","sourceUrl":null,"frameSize":{"x":15,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"xwYGXzU5lLvP4o..PaCZ6jyEO13RHKfV","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":30},"rootRelativePath":"assets/aab4b441-196d-4421-b33f-f0adc601ff6c.png"},"3a8c0060-92ef-4512-a4ea-96c6fe50bb5c":{"name":"2.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"brrcvOd6KlzHsg9w3xcRyvlAUhVZdxMx","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/3a8c0060-92ef-4512-a4ea-96c6fe50bb5c.png"},"509cc3b1-956b-4723-b845-bb359fe62988":{"name":"3.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"D6iMCwKjJW_gnzIa.FYlJXb9e34uTGJA","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/509cc3b1-956b-4723-b845-bb359fe62988.png"},"451eb9f5-22c8-4438-9cf0-18d7bc24a11e":{"name":"4.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"GLOZUiTYG6eJcKsVFcM5uI1IQeb7R9Kv","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/451eb9f5-22c8-4438-9cf0-18d7bc24a11e.png"},"9d83b217-4fbd-4e53-b760-3c606ea1014b":{"name":"5.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"IMxsFymQKkpn.yoRRhLZWOeFiRUlq8rB","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/9d83b217-4fbd-4e53-b760-3c606ea1014b.png"},"f79b35b8-3e74-4a97-b00d-1131a436aa36":{"name":"6.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"df3nvRtIrQbheuwmSPIHpjATYDtqSIAb","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/f79b35b8-3e74-4a97-b00d-1131a436aa36.png"},"88b9d8e3-ef72-4e2f-bfb5-90eb12a5cc8c":{"name":"7.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"VWvnHW_PmatAuqnoD0RuPNoWfawjAvF9","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/88b9d8e3-ef72-4e2f-bfb5-90eb12a5cc8c.png"},"bee6bc40-8cdb-40f9-b45b-c5dc98bdb88b":{"name":"8.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"qCBeU43wELCq2aN2LPAOdx236.0Er315","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/bee6bc40-8cdb-40f9-b45b-c5dc98bdb88b.png"},"3c3f4ec3-a0ed-4cc4-a0fa-cf3c820d418e":{"name":"9.PNG","sourceUrl":null,"frameSize":{"x":21,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"8AQSAiLENOmvrSZaFgFKZOI8hA68dtcI","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/3c3f4ec3-a0ed-4cc4-a0fa-cf3c820d418e.png"},"512b9a22-2847-40b6-ab02-5e4fc754dde1":{"name":"score backdrop.PNG_1","sourceUrl":null,"frameSize":{"x":339,"y":172},"frameCount":1,"looping":true,"frameDelay":12,"version":"8GvVzvgMHJT1jV5OTKf99Enazg17M.i4","loadedFromSource":true,"saved":true,"sourceSize":{"x":339,"y":172},"rootRelativePath":"assets/512b9a22-2847-40b6-ab02-5e4fc754dde1.png"},"6a8482a9-f6c3-4f28-849e-2ff116e99e3e":{"name":"bronze.PNG_1","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"h7WXpk56NO0vop8KTc3QD7PQhbFbymYf","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/6a8482a9-f6c3-4f28-849e-2ff116e99e3e.png"},"973cff6d-68da-454b-b2c1-a0dd127704e6":{"name":"silver.PNG_1","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"xp4oVrtIsESLgAiCfiAJIKF_GhaYrbgC","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/973cff6d-68da-454b-b2c1-a0dd127704e6.png"},"90418c18-eed2-46e4-93f9-876d5d1d502e":{"name":"gold.PNG_1","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"wvxPEKHGjsoUiZPB8CdkF6Z3ru5DQZuN","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/90418c18-eed2-46e4-93f9-876d5d1d502e.png"},"2f96cc85-add9-4928-a475-3764f181d5b5":{"name":"ground.PNG_1","sourceUrl":null,"frameSize":{"x":461,"y":162},"frameCount":1,"looping":true,"frameDelay":12,"version":"02Kz62EcFjw0FkkXFkBVmLn45osXaG1m","loadedFromSource":true,"saved":true,"sourceSize":{"x":461,"y":162},"rootRelativePath":"assets/2f96cc85-add9-4928-a475-3764f181d5b5.png"},"fb7a1f5c-1c4d-4820-b4c1-52b047fd906f":{"name":"start.png","sourceUrl":null,"frameSize":{"x":100,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ennufulmf7aZZisl0UODaGGyKzhb_Mgm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":35},"rootRelativePath":"assets/fb7a1f5c-1c4d-4820-b4c1-52b047fd906f.png"},"6e0f63dd-9ae3-46c0-b47c-064b044073c5":{"name":"Get Ready.png","sourceUrl":null,"frameSize":{"x":282,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"D6BF2gYk1fsh0SC7.kC4VIFdn0aCmrAa","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":71},"rootRelativePath":"assets/6e0f63dd-9ae3-46c0-b47c-064b044073c5.png"},"1bfaea8b-41de-4748-951b-4001c01a1194":{"name":"Tap.png","sourceUrl":null,"frameSize":{"x":100,"y":126},"frameCount":1,"looping":true,"frameDelay":12,"version":"_W5.5FbS63k4LSFSDjOGBRMNqBjDVnzn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":126},"rootRelativePath":"assets/1bfaea8b-41de-4748-951b-4001c01a1194.png"},"e744546a-d906-4e04-97d3-b9c7c9a5b8bb":{"name":"Title2.png","sourceUrl":null,"frameSize":{"x":282,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"kA._OE4QuXqSa2gwI.3IAj.sU4Y6Gq5R","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":65},"rootRelativePath":"assets/e744546a-d906-4e04-97d3-b9c7c9a5b8bb.png"},"5f0ac0e9-114f-41aa-a252-23e03a3e3534":{"name":"Title.png","sourceUrl":null,"frameSize":{"x":282,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zk5Ewi6rcM_nV8Nmw9NA3QnEkDGkuZNg","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":88},"rootRelativePath":"assets/5f0ac0e9-114f-41aa-a252-23e03a3e3534.png"},"e0a15c77-0b7e-42ea-8d71-c37d6d2c69e8":{"name":"Background2.png","sourceUrl":null,"frameSize":{"x":999,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pc4JuVFRStu5BtN5XMVA2Tgpe5Yh_AVH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":999,"y":500},"rootRelativePath":"assets/e0a15c77-0b7e-42ea-8d71-c37d6d2c69e8.png"},"d42245fa-1286-49c7-b3b9-00e7e55754f9":{"name":"platinum.PNG_1","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"VBOWTwkLyj8fzpJ_VMYLbY2Luy_9PSBa","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/d42245fa-1286-49c7-b3b9-00e7e55754f9.png"},"16d6b9d2-4b4d-41e2-8e4c-2a5acac08837":{"name":"p1Shoot.png","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"FQDHyFs8ew2AtUXXNE5_xUCZh7M.yXMS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/16d6b9d2-4b4d-41e2-8e4c-2a5acac08837.png"},"9e430d36-9a1f-40f5-bf60-37e431559059":{"name":"p2.png","sourceUrl":null,"frameSize":{"x":36,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"1NVZ32PDIbJCYaX3B_UKLgHUjgJIth8J","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":44},"rootRelativePath":"assets/9e430d36-9a1f-40f5-bf60-37e431559059.png"},"389e9c68-28af-46f1-8256-c0174d772dd5":{"name":"p3green.png","sourceUrl":null,"frameSize":{"x":108,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"c7D7KYH9wChdESH9jHScGqE6mKT0jhoZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":106},"rootRelativePath":"assets/389e9c68-28af-46f1-8256-c0174d772dd5.png"},"67cf874d-0178-4ac9-89f3-a180d1dd671f":{"name":"p3orange.png","sourceUrl":null,"frameSize":{"x":108,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"NdY7_trTXGeCriDfdekjEqkAggApIynm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":106},"rootRelativePath":"assets/67cf874d-0178-4ac9-89f3-a180d1dd671f.png"},"87631a30-3486-439c-b90c-55dd6aa5b1cc":{"name":"p3red.png","sourceUrl":null,"frameSize":{"x":108,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"9RsMidqKRozwu7Qidkktqhv_Sd4WIpHv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":106},"rootRelativePath":"assets/87631a30-3486-439c-b90c-55dd6aa5b1cc.png"},"51711fef-a399-4fd3-a73e-d6d0c7fa6f79":{"name":"p3start.png","sourceUrl":null,"frameSize":{"x":108,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"65ry_LK3jS6Jkr9edpGO8SR56EilFgHe","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":106},"rootRelativePath":"assets/51711fef-a399-4fd3-a73e-d6d0c7fa6f79.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Background
var bkg = createSprite(200, 200);
bkg.setAnimation("Flappy bird background.png_1");
bkg.scale = 0.75;

// Back Pipes
var upPipe1 = createSprite(400, 200);
upPipe1.setAnimation("pipe down.PNG_1");
upPipe1.setCollider("rectangle", 0, 0, 80, 400);

var downPipe1 = createSprite(upPipe1.x, 200);
downPipe1.setAnimation("pipe up.PNG_1");
downPipe1.setCollider("rectangle", 0, 0, 80, 375);

// Front Pipes
var upPipe2 = createSprite(200, 200);
upPipe2.setAnimation("pipe down.PNG_1");
upPipe2.x = 650;
upPipe2.setCollider("rectangle", 0, 0, 80, 400);

var downPipe2 = createSprite(200, 200);
downPipe2.setAnimation("pipe up.PNG_1");
downPipe2.x = upPipe2.x;
downPipe2.setCollider("rectangle", 0, 0, 80, 375);

// Power Ups
var pFire = createSprite(200, -200);
pFire.setAnimation("p1Shoot.png");
pFire.scale = 1.5;

var pFireShoot = createSprite(200, -200);
pFireShoot.setAnimation("p1Shoot.png");

var pShrink = createSprite(200, -200);
pShrink.setAnimation("p2.png");
pShrink.scale = 0.8;

var pShield = createSprite(200, -200);
pShield.setAnimation("p3start.png");
pShield.scale = 0.45;

var pShieldUse = createSprite(200, -200);
pShieldUse.setAnimation("p3green.png");
pShieldUse.scale = 0;

// Player
var flappyBird = createSprite(100, 200);
flappyBird.setAnimation("flappy bird.PNG_1");
flappyBird.setCollider("circle",0,0,30);
flappyBird.scale = 0.5;

// Ground
var ground = createSprite(200, 455);
ground.setAnimation("ground.PNG_1");
ground.scale = 1.25;
ground.velocityX = -3;

// Score
var tensPlace = createSprite(177, 50);
tensPlace.setAnimation("0.PNG");
tensPlace.visible = false;

var onesPlace = createSprite(200, 50);
onesPlace.setAnimation("0.PNG");
onesPlace.visible = false;

// Start Screen Sprites
var title = createSprite(200, 115);
title.setAnimation("Title.png");

var startButton = createSprite(200, 290);
startButton.setAnimation("start.png");

var getReady = createSprite(200, -200);
getReady.setAnimation("Get Ready.png");

var tap = createSprite(220, 600);
tap.setAnimation("Tap.png");

// Game Over Sprites
var gameOver = createSprite(200, -400);
gameOver.setAnimation("game over.PNG_1");

var medalScreen = createSprite(200, 800);
medalScreen.setAnimation("score backdrop.PNG_1");

var bronzeMedal = createSprite(202, 1000);
bronzeMedal.setAnimation("bronze.PNG_1");

var silverMedal = createSprite(202, 1000);
silverMedal.setAnimation("silver.PNG_1");

var goldMedal = createSprite(202, 1000);
goldMedal.setAnimation("gold.PNG_1");

var platinumMedal = createSprite(202, 1000);
platinumMedal.setAnimation("platinum.PNG_1");

// Frame Rate
World.frameRate = 60;

// Check Game Over
var lost = false;

// Check Start
var start = true;

// Check Movement
var isPressed = false;

// Movement Ratios
var jumpRatio = -8;
var fallRatio = 0.45;

// Create Random Pipe Distance
var newRandom1 = 0;
var newRandom2 = randomNumber(-80, 90);

// Create Random Pipe Side
var randomSide1 = 3;
var randomSide2 = randomNumber(0, 4);

// Check Score
var score = 0;

// Check Power Up Duration
var powerUpTime = 0;

// Create Random Power Up Y Coordinate
var powerY = randomNumber(50, 250);

// Create Random Power Up Selection
var whichPU = randomNumber(0, 2);

// Check if Power Up Active
var checkFire = false;
var checkShrink = false;
var checkShield = false;

// Shield Power Up Variables
var shieldDur = -1;
var currCol = false;

// Draw Function
function draw() {
  // Start Menu
  if (start) {
    startGame();
  }
  
  if (tap.y > 700) {
    tap.velocityY = 0;
    getReady.velocityY = 0;
  }
  
  // Background Movement Reset
  if (bkg.x < 0) {
    bkg.x = 310;
  }
  
  if (ground.x < 120) {
    ground.x = 250;
  }
  
  // Pipe Movement
  if (!lost && !start) {
    bkg.velocityX = -1;
    
    upPipe1.x -= 3;
    downPipe1.x -= 3;
  
    upPipe2.x -= 3;
    downPipe2.x -= 3;
  }
  
  // Pipe Randomizer
  if (upPipe1.x < -40) {
    newRandom1 = randomNumber(-80, 90);
    randomSide1 = randomNumber(0, 5);
    upPipe1.velocityY = 0;
    downPipe1.velocityY = 0;
  }
  else if (upPipe2.x < -40) {
    newRandom2 = randomNumber(-80, 90);
    randomSide2 = randomNumber(0 ,5);
    upPipe2.velocityY = 0;
    downPipe2.velocityY = 0;
  }
  
  // Create Pipes
  setPipes(upPipe1, downPipe1, newRandom1, randomSide1);
  setPipes(upPipe2, downPipe2, newRandom2, randomSide2);
  
  // Score System
  if (((flappyBird.x > upPipe1.x - 2 && flappyBird.x < upPipe1.x + 2) || (flappyBird.x > upPipe2.x - 2 && flappyBird.x < upPipe2.x + 2)) && !lost) {
    score++;  
  }
  displayScore(score);
  
  // Game Over System
  if(lost) {
    lose();
  }
  checkLose();
  
  // Movement
  if (!start) {
   flappyBirdMovement(flappyBird); 
  }
  
  // PowerUp Spawn
  if (whichPU == 0) {
    if (((score + 5) % 10 == 0 && score > 4) && powerUpTime == 0 && !lost) {
      spawnPower(pFire);
    }
  }
  else if (whichPU == 1) {
    if (((score + 5) % 10 == 0 && score > 4) && powerUpTime == 0 && !lost) {
      spawnPower(pShrink);
    }
  }
  else if (whichPU == 2) {
    if (((score + 5) % 10 == 0 && score > 4) && powerUpTime == 0 && !lost) {
      spawnPower(pShield);
    }
  }
  
  // Check if Off Map
  offMap(pFire);
  offMap(pShrink);
  offMap(pShield);
  
  // Power Up Reset
  resetP();
  
  // Power Up Utilization
  if (flappyBird.isTouching(pFire) || (checkFire && !checkShrink && !checkShield) && !lost) {
    useFire();
  }
  else if (flappyBird.isTouching(pShrink) || (!checkFire && checkShrink && !checkShield) && !lost) {
    useShrink();
  }
  else if (flappyBird.isTouching(pShield) || (!checkFire && !checkShrink && checkShield) && !lost) {
    useShield();
  }
  
  // Draw Command
  drawSprites();
}

// Spawn Power Up
function spawnPower(sprite) {
  sprite.x = upPipe2.x - 110;
  if (sprite.y < 50 + powerY) {
    sprite.y += 30;
  }
}

// Use Shield
function useShield() {
  // Initial State
  if (powerUpTime == 0) {
    pShield.y = -200;
    pShieldUse.setAnimation("p3green.png");
    shieldDur = 3;
    
    checkShield = true;
    powerUpTime = 500;
    whichPU = randomNumber(0, 2);
  }
  
  // Continuous State
  else if (powerUpTime > 1) {
    powerUpTime--;
    
    pShieldUse.y = flappyBird.y;
    pShieldUse.x = flappyBird.x;
    
    if (pShieldUse.scale <= 1) {
      pShieldUse.scale += 0.1;
    }
    
    // Check Collision
    if (flappyBird.isTouching(upPipe1) || flappyBird.isTouching(upPipe2) || flappyBird.isTouching(downPipe1) || flappyBird.isTouching(downPipe2)) {
      if (!currCol) {
        currCol = true;
        shieldDur--;
      }
    }
    else {
      currCol = false;
    }
    
    // Decrease Durability
    if (shieldDur == 2 && !currCol) {
      pShieldUse.setAnimation("p3orange.png");
    }
    else if (shieldDur == 1 && !currCol) {
      pShieldUse.setAnimation("p3red.png");
    }
    else if (shieldDur == 0 && !currCol) {
      shieldDur--;
    }
    
    // End State
    if (shieldDur == -1) {
      powerUpTime = 1;
    }
  }
}

// Use Shrink
function useShrink() {
  // Initial State
  if (powerUpTime == 0) {
    pShrink.y = -200;
    jumpRatio = -6;
    fallRatio = 0.35;
    
    checkShrink = true;
    powerUpTime = 500;
    whichPU = randomNumber(0, 2);
  }
  
  // Continuous State
  else if (powerUpTime > 1) {
    powerUpTime--;
    
    if (flappyBird.scale > 0.2) {
      flappyBird.scale -= 0.01;
    }
  }
}

// Use Fire
function useFire() {
  // Initial State
  if (powerUpTime == 0) {
    pFire.y = -200;
    pFireShoot.scale = 0.2;
    pFireShoot.x = flappyBird.x;
    pFireShoot.y = flappyBird.y;
    pFireShoot.velocityX = 10;
    
    checkFire = true;
    powerUpTime = 500;
    whichPU = randomNumber(0, 2);
  }
  
  // Continuous State
  else if (powerUpTime > 1) {
    powerUpTime--;
    
    if (pFireShoot.scale < 1.5 && pFireShoot.x < 300) {
      pFireShoot.scale += 0.1;
    }
    else if (pFireShoot.scale > 0.2 && pFireShoot.x > 370 && pFireShoot.x < 390) {
      pFireShoot.scale -= 0.3;
    }
    else if (pFireShoot.x > 390){
      pFireShoot.scale = 0.2;
      pFireShoot.x = flappyBird.x;
      pFireShoot.y = flappyBird.y;
    }
    
    // Check Pipe Collision
    if (pFireShoot.isTouching(upPipe1)) {
      upPipe1.velocityY = -3;
    }
    if (pFireShoot.isTouching(upPipe2)) {
      upPipe2.velocityY = -3;
    }
    if (pFireShoot.isTouching(downPipe1)) {
      downPipe1.velocityY = 3;
    }
    if (pFireShoot.isTouching(downPipe2)) {
      downPipe2.velocityY = 3;
    }
  }
}

// Reset Power Ups
function resetP() {
  if (powerUpTime <= 1) {
    powerUpTime = 0;
    
    checkFire = false;
    checkShrink = false;
    checkShield = false;
    
    // Reset Shield
    shieldDur = -1;
    if (pShieldUse.scale > 0) {
      pShieldUse.y = flappyBird.y;
      pShieldUse.scale -= 0.1;
    }
    else {
      pShieldUse.y = -200;
    }
    
    // Reset Shrink
    if (flappyBird.scale < 0.5) {
      flappyBird.scale += 0.01;
      jumpRatio = -8;
      fallRatio = 0.45;
    }
    
    // Reset Fire
    if (pFireShoot.scale > 0.2){
      pFireShoot.scale -= 0.1;
    }
    else {
      pFireShoot.velocityX = 0;
      pFireShoot.x = 200;
      pFireShoot.y = -200;
    }
  }
}

// Off Map Function
function offMap(sprite) {
  if (sprite.y > -200 && sprite.x < 1) {
    if (sprite.x < -40) {
      sprite.y = -200;
      whichPU = randomNumber(0, 2);
    }
    else {
      sprite.x -= 3;
    }
  }
}

// Start Menu Function
function startGame() {
  // Start Sprite Movements
  if (mousePressedOver(startButton) || keyDown("space")) {
    startButton.velocityY = 20;
    title.velocityY = -20;
    
    getReady.velocityY = 27;
    tap.velocityY = -34;
  }
  
  // Stop Sprite Movements
  if (startButton.y > 500) {
    startButton.velocityY = 0;
    title.velocityY = 0;
    
    getReady.velocityY = 0;
    tap.velocityY = 0;
  }
  
  // Start Game
  if (tap.y == 226 && ((keyDown("space")) || mouseDown("leftButton"))) {
    start = false;
    getReady.velocityY = -27;
    tap.velocityY = 34;
    onesPlace.visible = true;
  } 
}

// Check If Game Over
function checkLose() {
  if ((flappyBird.isTouching(upPipe1) || flappyBird.isTouching(downPipe1)) && shieldDur == -1) {
    lost = true;
  }
  else if ((flappyBird.isTouching(upPipe2) || flappyBird.isTouching(downPipe2)) && shieldDur == -1) {
    lost = true;
  }
  
  if (flappyBird.y > 335 || flappyBird.y < 10) {
    lost = true;
  }
}

// Game Over State
function lose() {
  // Stop Movement
  bkg.velocityX = 0;
  ground.velocityX = 0;
  flappyBird.setAnimation("flappy bird 1 lose.PNG_1");
  powerUpTime = 0;
  
  // Game Over Screen
  if (gameOver.y < 100) {
    gameOver.y += 15;
  }
  if (medalScreen.y > 245) {
    medalScreen.y -= 15;
  }
  
  // Medals
  if (score >= 40) {
    if (platinumMedal.y > 270) {
      platinumMedal.y -= 10;
    }
  }
  else if (score >= 30) {
    if (goldMedal.y > 270) {
      goldMedal.y -= 10;
    }
  }
  else if (score >= 20) {
    if (silverMedal.y > 270) {
      silverMedal.y -= 10;
    }
  }
  else if (score >= 10) {
    if (bronzeMedal.y > 270) {
      bronzeMedal.y -= 10;
    }
  }
}

// Create Pipes
function setPipes(pipeTop, pipeBottom, newRandomNumber, side) {
  if (side == 0 && pipeTop.x >= 400) {
    pipeTop.y = -200;
    pipeBottom.y = pipeTop.y + 530;
  }
  else if (side == 1 && pipeTop.x >= 400) {
    pipeTop.y = 10;
    pipeBottom.y = pipeTop.y + 530;
  }
  else if (pipeTop.x >= 400) {
    pipeTop.y = -100 + newRandomNumber;
    pipeBottom.y = pipeTop.y + 530;
  }
  
  if (pipeTop.x < -40) {
    pipeTop.x = 440;
    pipeBottom.x = 440;
  }
}

// Movement System
function flappyBirdMovement(sprite) {
  // Vertical Movement
  if ((keyDown("space") || mouseDown("leftButton"))&& !isPressed && !lost) {
    sprite.velocityY = jumpRatio;
    sprite.rotation = -23;
    isPressed = true;
  }
  
  if (!keyDown("space") && !mouseDown("leftButton")) {
    isPressed = false;
  }
  
  if (sprite.y >= 335) {
    sprite.velocityY = 0;
  }
  else {
    sprite.velocityY += fallRatio;
  }
  
  // Rotation
  if (sprite.rotation > -90 && sprite.rotation < 90 && sprite.y < 335 && sprite.velocityY > 3) {
    if (!lost) {
      sprite.rotation += 6.5;
    }
    else {
      sprite.rotation += 6.5;
    }
  }
  
  if (sprite.x > 500) {
    sprite.destroy();
  }
}

// Score System
function displayScore(score) {
  var ones = score % 10;
  var tens = Math.floor(score/10);
  onesPlace.setAnimation(ones+".PNG");
  if (tens > 0) {
    tensPlace.visible = true;
    tensPlace.setAnimation(tens+".PNG");
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
