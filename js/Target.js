class Target {
    constructor(sc) {
        this.x = 0;
        this.y = 0;
        this.sc = sc;
    }

    show = () => {
        push();
        translate(this.x, this.y);
        scale(this.sc, this.sc);
        stroke(color(255, 0, 0));
        strokeWeight(1);

        drawShu();

        pop();
    }

    updatePos = () => {
        let targetX, targetY;
        while (true) {
            targetX = parseInt(Math.random() * (width / snakeBodyScale)) * snakeBodyScale;
            targetY = parseInt(Math.random() * (height / snakeBodyScale)) * snakeBodyScale;

            if (targetX == 0) targetX += snakeBodyScale;
            else if (targetX == width) targetX -= snakeBodyScale;
            if (targetY == 0) targetY += snakeBodyScale;
            else if (targetY == width) targetY -= snakeBodyScale;

            // 确保目标不会刷新在蛇身体部位
            let i;
            for (i = 0; i < snakeBody.length; i++) {
                if (targetX == snakeBody[i].x && targetY == snakeBody[i].y) {
                    break;
                }
            }
            if (i == snakeBody.length) break;
        }
        this.x = targetX;
        this.y = targetY;
    }
}

const drawShu = () => {
    // 1
    line(-1 / 20 * snakeBodyScale, -8 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale);
    // 2
    line(-5 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale);
    // 3
    line(-5 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale);
    // 4
    line(0 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale);
    line(4 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale);
    // 5
    line(0 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale);
    // 6
    line(-5 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale);
    // 7
    line(-5 / 20 * snakeBodyScale, 0 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale);
    line(-5 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale);
    // 8
    line(-4 / 20 * snakeBodyScale, 0 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale);
    // 9
    line(-4 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 5 / 20 * snakeBodyScale);
    // 10
    line(-1 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, 7 / 20 * snakeBodyScale);
    line(-1 / 20 * snakeBodyScale, 7 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale);
    // 11
    line(0 / 20 * snakeBodyScale, 0 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale);
    // 12
    line(0 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale, 5 / 20 * snakeBodyScale);
    // 13
    line(3 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale);
    line(4 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale, 5 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale);
    line(5 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale);
    line(6 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, 7 / 20 * snakeBodyScale, 7 / 20 * snakeBodyScale);
}