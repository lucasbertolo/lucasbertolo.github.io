/* eslint-disable no-plusplus */
import React from 'react';
import cloud from '../../../assets/files/cloud.png';
import ground from '../../../assets/files/ground.png';
import dinosaur from '../../../assets/files/dinosaur.png';
import dinosaurLeft from '../../../assets/files/dinosaur_left.png';
import dinosaurRight from '../../../assets/files/dinosaur_right.png';
import dinosaurDie from '../../../assets/files/dinosaur_die.png';
import obstacle from '../../../assets/files/obstacle.png';

const STATUS = {
  STOP: 'STOP',
  START: 'START',
  PAUSE: 'PAUSE',
  OVER: 'OVER',
};

const JUMP_DELTA = 5;
const JUMP_MAX_HEIGHT = 55;

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    let imageLoadCount = 0;
    const onImageLoaded = () => {
      ++imageLoadCount;
      if (imageLoadCount === 3) {
        this.draw();
      }
    };

    const skyImage = new Image();
    const groundImage = new Image();
    const playerImage = new Image();
    const playerLeftImage = new Image();
    const playerRightImage = new Image();
    const playerDieImage = new Image();
    const obstacleImage = new Image();

    skyImage.onload = onImageLoaded;
    groundImage.onload = onImageLoaded;
    playerImage.onload = onImageLoaded;

    skyImage.src = cloud;
    groundImage.src = ground;
    playerImage.src = dinosaur;
    playerLeftImage.src = dinosaurLeft;
    playerRightImage.src = dinosaurRight;
    playerDieImage.src = dinosaurDie;
    obstacleImage.src = obstacle;

    const { options } = this.props;
    this.options = {
      fps: 80,
      skySpeed: 80,
      groundSpeed: 120,
      skyImage,
      groundImage,
      playerImage: [
        playerImage,
        playerLeftImage,
        playerRightImage,
        playerDieImage,
      ],
      obstacleImage,
      skyOffset: 0,
      groundOffset: 0,
      ...options,
    };

    this.status = STATUS.STOP;
    this.timer = null;
    this.score = 0;
    this.highScore = window.localStorage
      ? window.localStorage.highScore || 0
      : 0;
    this.jumpHeight = 0;
    this.jumpDelta = 0;
    this.obstaclesBase = 1;
    this.obstacles = this.obstaclesGenerate();
    this.currentDistance = 0;
    this.playerStatus = 0;
  }

  componentDidMount() {
    if (window.innerWidth >= 680) {
      this.canvas.width = 680;
    }

    const onSpacePress = () => {
      switch (this.status) {
        case STATUS.STOP:
          this.start();
          break;
        case STATUS.START:
          this.jump();
          break;
        case STATUS.OVER:
          this.restart();
          break;
        default:
          this.restart();
      }
    };

    window.onkeypress = e => {
      if (e.key === ' ') {
        onSpacePress();
      }
    };
    this.canvas.parentNode.onclick = onSpacePress;

    window.onblur = this.pause;
    window.onfocus = this.goOn;
  }

  setTimer() {
    this.timer = setInterval(() => this.draw(), 1000 / this.options.fps);
  }

  pause = () => {
    if (this.status === STATUS.START) {
      this.status = STATUS.PAUSE;
      this.clearTimer();
    }
  };

  goOn = () => {
    if (this.status === STATUS.PAUSE) {
      this.status = STATUS.START;
      this.setTimer();
    }
  };

  stop = () => {
    if (this.status === STATUS.OVER) {
      return;
    }
    this.status = STATUS.OVER;
    this.playerStatus = 3;
    this.clearTimer();
    this.draw();
    this.clear();
  };

  restart = () => {
    this.obstacles = this.obstaclesGenerate();
    this.start();
  };

  jump = () => {
    if (this.jumpHeight > 2) {
      return;
    }
    this.jumpDelta = JUMP_DELTA;
    this.jumpHeight = JUMP_DELTA;
  };

  start = () => {
    if (this.status === STATUS.START) {
      return;
    }

    this.status = STATUS.START;
    this.setTimer();
    this.jump();
  };

  clear() {
    this.score = 0;
    this.jumpHeight = 0;
    this.currentDistance = 0;
    this.obstacles = [];
    this.obstaclesBase = 1;
    this.playerStatus = 0;
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  obstaclesGenerate() {
    const res = [];
    for (let i = 0; i < 10; ++i) {
      let random = Math.floor(Math.random() * 100) % 60;
      // eslint-disable-next-line operator-assignment
      random = ((Math.random() * 10) % 2 === 0 ? 1 : -1) * random;
      res.push({
        distance: random + this.obstaclesBase * 200,
      });
      ++this.obstaclesBase;
    }
    return res;
  }

  rewardsGenerate() {
    // TODO - create logic for history
    const res = [];
    for (let i = 0; i < 10; ++i) {
      let random = Math.floor(Math.random() * 100) % 60;
      // eslint-disable-next-line operator-assignment
      random = ((Math.random() * 10) % 2 === 0 ? 1 : -1) * random;
      res.push({
        distance: random + this.obstaclesBase * 200,
      });
      ++this.obstaclesBase;
    }
    return res;
  }

  draw() {
    if (!this.canvas) {
      return;
    }

    const { options } = this;

    const level = Math.min(200, Math.floor(this.score / 100));
    const groundSpeed = (options.groundSpeed + level) / options.fps;
    const skySpeed = options.skySpeed / options.fps;
    const obstacleWidth = options.obstacleImage.width;
    const playerWidth = options.playerImage[0].width;
    const playerHeight = options.playerImage[0].height;

    const ctx = this.canvas.getContext('2d');
    const { width, height } = this.canvas;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    this.options.skyOffset =
      this.options.skyOffset < width
        ? this.options.skyOffset + skySpeed
        : this.options.skyOffset - width;
    ctx.translate(-this.options.skyOffset, 0);
    ctx.drawImage(this.options.skyImage, 0, 0);
    ctx.drawImage(this.options.skyImage, this.options.skyImage.width, 0);

    this.options.groundOffset =
      this.options.groundOffset < width
        ? this.options.groundOffset + groundSpeed
        : this.options.groundOffset - width;
    ctx.translate(this.options.skyOffset - this.options.groundOffset, 0);
    ctx.drawImage(this.options.groundImage, 0, 76);
    ctx.drawImage(this.options.groundImage, this.options.groundImage.width, 76);

    ctx.translate(this.options.groundOffset, 0);
    ctx.drawImage(
      this.options.playerImage[this.playerStatus],
      80,
      64 - this.jumpHeight,
    );

    this.jumpHeight += this.jumpDelta;
    if (this.jumpHeight <= 1) {
      this.jumpHeight = 0;
      this.jumpDelta = 0;
    } else if (this.jumpHeight < JUMP_MAX_HEIGHT && this.jumpDelta > 0) {
      this.jumpDelta =
        this.jumpHeight * this.jumpHeight * 0.001033 -
        this.jumpHeight * 0.137 +
        5;
    } else if (this.jumpHeight < JUMP_MAX_HEIGHT && this.jumpDelta < 0) {
      // jumpDelta = (jumpHeight * jumpHeight) * 0.00023 - jumpHeight * 0.03 - 4;
    } else if (this.jumpHeight >= JUMP_MAX_HEIGHT) {
      this.jumpDelta = -JUMP_DELTA / 2.7;
    }

    // const scoreText =
    //   (this.status === STATUS.OVER ? 'GAME OVER  ' : '') +
    //   Math.floor(this.score);
    ctx.font = 'Bold 18px Arial';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#595959';
    // ctx.fillText(scoreText, width - 30, 23);
    if (this.status === STATUS.START) {
      this.score += 0.5;
      if (this.score > this.highScore) {
        this.highScore = this.score;
        window.localStorage.highScore = this.score;
      }
      this.currentDistance += groundSpeed;
      if (this.score % 4 === 0) {
        this.playerStatus = (this.playerStatus + 1) % 3;
      }
    }
    if (this.highScore) {
      ctx.textAlign = 'left';
      ctx.fillText(`HIGH  ${Math.floor(this.highScore)}`, 30, 23);
    }

    let pop = 0;
    for (let i = 0; i < this.obstacles.length; ++i) {
      if (this.currentDistance >= this.obstacles[i].distance) {
        const offset =
          width -
          (this.currentDistance - this.obstacles[i].distance + groundSpeed);
        if (offset > 0) {
          ctx.drawImage(options.obstacleImage, offset, 84);
        } else {
          ++pop;
        }
      } else {
        break;
      }
    }
    for (let i = 0; i < pop; ++i) {
      this.obstacles.shift();
    }
    if (this.obstacles.length < 5) {
      this.obstacles = this.obstacles.concat(this.obstaclesGenerate());
    }

    const firstOffset =
      width - (this.currentDistance - this.obstacles[0].distance + groundSpeed);
    if (
      90 - obstacleWidth < firstOffset &&
      firstOffset < 60 + playerWidth &&
      64 - this.jumpHeight + playerHeight > 84
    ) {
      this.stop();
    }

    ctx.restore();
  }

  render() {
    return (
      <canvas
        style={{ width: '100%', padding: '0' }}
        id="canvas"
        ref={ref => {
          this.canvas = ref;
        }}
        height={350}
        width={500}
      />
    );
  }
}
