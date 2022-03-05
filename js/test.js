// 语音
let myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = true;


// 蛇
let snakeBody = new Array();
// 蛇位置记录
let posRecorder = new Array();

// 目标
let target;


let x, y;

let offsetX, offsetY;
let moveSpeed;

let currentDir;

// 方向枚举
const Direction = {
    STOP: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
}


function setup() {
    createCanvas(400, 400);

    // 设置游戏帧率  语音控制最好设置为 3以下
    // frameRate(5);
    frameRate(prompt('请输入游戏难度(1-10)'));

    x = width / 2;
    y = height / 2;

    offsetX = 0;
    offsetY = 0;

    moveSpeed = snakeBodyScale;

    currentDir = Direction.RIGHT;

    target = new Target(1);

    // 初始化蛇 参数：蛇长
    initSnake(2);
    showScore();
    target.updatePos();

    recordPosition();

    myRec.start();
}

function draw() {

    // 蛇占满屏幕了则赢 会有人这么无聊?
    if (snakeBody.length >= (width / snakeBodyScale - 1) * (height / snakeBodyScale - 1)) {
        alert(`YOU WIN !!! \nSCORE: ${GameManager.score} \n Why are you so bored ???`);
        setOffset(0, 0);
        return;
    }

    // 死亡判定
    if (GameManager.isDie()) {
        alert(`YOU DIE ! \nSCORE: ${GameManager.score}`);
        setOffset(0, 0);
        return;
    }

    // 更新位置数据
    if (offsetX != 0 || offsetY != 0) {
        snakeBody[0].x += offsetX;
        snakeBody[0].y += offsetY;

        for (let i = 1; i < snakeBody.length; i++) {
            snakeBody[i].x = posRecorder[i - 1].x;
            snakeBody[i].y = posRecorder[i - 1].y;
        }

        // 重新记录位置
        recordPosition();
    }

    // 判断是否吃到鼠鼠
    if (GameManager.getTarget(snakeBody[0], target)) {
        target.updatePos();
        growSnake();
        GameManager.updateScore();
        console.log(GameManager.score);
    }


    background(255);
    strokeWeight(1);
    stroke(0);

    fill(255, 255);


    for (item of snakeBody) {
        item.show();
    }

    target.show();

    showScore();

    noFill();
    strokeWeight(2);
    stroke(0, 100);
    rect(1, 1, width - 2, height - 2);
}

// 位移
const setOffset = (x, y) => {
    offsetX = x;
    offsetY = y;
}

// 记录每个身体块上一次的位置
const recordPosition = () => {
    posRecorder = new Array(snakeBody.length);
    for (let i = 0; i < snakeBody.length; i++) {
        posRecorder[i] = {
            x: snakeBody[i].x,
            y: snakeBody[i].y
        }
    }
}

// 初始化蛇
const initSnake = snakeLength => {
    for (let i = 0; i < snakeLength; i++) {
        snakeBody.push(new Snake(x - i * snakeBodyScale, y, 1));
    }
}

// 蛇边长
const growSnake = () => {
    snakeBody.push(new Snake(posRecorder[posRecorder.length - 1].x, posRecorder[posRecorder.length - 1].y, 1));
}

// 打印分数
const showScore = () => {
    textSize(20);
    textStyle(NORMAL);
    textAlign(CENTER);
    text(`SCORE: ${GameManager.score}`, width / 6, height / 12);
}

// 鼠标交互
let press1stTime;
let press2ndTime;
let pressCount = 0;
const interval = 150;  // 摁键间隙需要大于这个值(单位: 毫秒)
function keyPressed() {
    pressCount++;

    if (pressCount % 2 != 0) {
        press1stTime = Date.now();
    } else {
        press2ndTime = Date.now();
    }

    try {
        if (Math.abs(press1stTime - press2ndTime) <= interval) return;
    } catch (error) { }


    // if (Math.abs(press1stTime - press2ndTime))

    switch (keyCode) {
        case UP_ARROW:
            // 上
            changeDir(Direction.UP);
            break;
        case DOWN_ARROW:
            // 下
            changeDir(Direction.DOWN);
            break;
        case LEFT_ARROW:
            // 左
            changeDir(Direction.LEFT);
            break;
        case RIGHT_ARROW:
            // 右
            changeDir(Direction.RIGHT);
            break;
        case ENTER:
            changeDir(Direction.STOP);
            break;
    }
}

// 语音回调
function parseResult() {
    var mostrecentword = myRec.resultString.split(' ').pop();
    if (mostrecentword.indexOf("u") != -1 || mostrecentword.indexOf("p") != -1) {
        changeDir(Direction.UP);
    }
    if (mostrecentword.indexOf("d") != -1) {
        changeDir(Direction.DOWN)
    }
    if (mostrecentword.indexOf("l") != -1) {
        changeDir(Direction.LEFT);
    }
    if (mostrecentword.indexOf("r") != -1) {
        changeDir(Direction.RIGHT);
    }
    if (mostrecentword.indexOf("s") != -1) {
        changeDir(Direction.STOP);
    }
    console.log(mostrecentword);
}

// 方向控制
const changeDir = direction => {
    switch (direction) {
        case Direction.UP:
            if (currentDir != Direction.DOWN) {
                currentDir = Direction.UP;
                setOffset(0, -moveSpeed);
            }
            break;
        case Direction.DOWN:
            if (currentDir != Direction.UP) {
                currentDir = Direction.DOWN;
                setOffset(0, moveSpeed);
            }
            break;
        case Direction.LEFT:
            if (currentDir != Direction.RIGHT) {
                currentDir = Direction.LEFT;
                setOffset(-moveSpeed, 0);
            }
            break;
        case Direction.RIGHT:
            if (currentDir != Direction.LEFT) {
                currentDir = Direction.RIGHT;
                setOffset(moveSpeed, 0);
            }
            break;
        case Direction.STOP:
            setOffset(0, 0);
            break;
    }
}