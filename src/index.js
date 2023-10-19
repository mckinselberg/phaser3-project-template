import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import zeldaImg from "./assets/zelda.png";
import skyImg from "./assets/sky.png";
import starImg from "./assets/star.png";
// import style from "./css/style.css"

const canvasWidth = 800;
const canvasHeight = 600;


const preload = function preload () {
  this.load.image("logo", logoImg);
  this.load.image("zelda", zeldaImg);
  this.load.image("sky", skyImg);
  this.load.image("star", starImg);
};

const create = function create() {
  const sky = this.add.image(400, 300, 'sky');
  const star = this.add.image(0, 0, 'star');
  const star2 = this.add.image(canvasWidth, 0, 'star');
  // const logo = this.add.image(canvasWidth/2, 150, "logo");
  const zelda = this.add.image(canvasWidth/2, canvasHeight + 300, "zelda");

  // this.tweens.add({
  //   targets: logo,
  //   y: canvasHeight,
  //   duration: 2000,
  //   ease: "Power3",
  //   yoyo: true,
  //   loop: -1,
  // });

  this.tweens.add({
    targets: zelda,
    y: canvasHeight - canvasHeight/5,
    duration: 2000,
    ease: "Power3",
    yoyo: true,
    loop: -1,
  });

  this.tweens.add({
    targets: star,
    x: canvasWidth,
    y: canvasHeight,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1,
  });

  this.tweens.add({
    targets: star2,
    x: 0,
    y: canvasHeight,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1,
  });

};

const update = function update() {};

const config = {
  type: Phaser.AUTO,
  width: canvasWidth,
  height: canvasHeight,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
