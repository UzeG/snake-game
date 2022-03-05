const snakeBodyScale = 20;

class Snake {
    constructor(x, y, sc) {
        this.x = x;
        this.y = y
        this.sc = sc;
    }

    show = () => {
        push();
        translate(this.x, this.y);
        scale(this.sc, this.sc);
        stroke(color(0, 0, 0));
        strokeWeight(1);

        drawShe();

        pop();
    }
}

const drawShe = () => {
    // “田”字
    // line(-snakeBodyScale/2, -snakeBodyScale/2, -snakeBodyScale/2, snakeBodyScale/2);
    // line(-snakeBodyScale/2, -snakeBodyScale/2, snakeBodyScale/2, -snakeBodyScale/2);
    // line(snakeBodyScale/2, -snakeBodyScale/2, snakeBodyScale/2, snakeBodyScale/2);
    // line(-snakeBodyScale/2, 0, snakeBodyScale/2, 0);
    // line(0, -snakeBodyScale/2, 0, snakeBodyScale/2);
    // line(-snakeBodyScale/2, snakeBodyScale/2, snakeBodyScale/2, snakeBodyScale/2);

    /**
     * "蛇"
     */
    // "虫"
    line(-8 / 20 * snakeBodyScale, -4 / 20 * snakeBodyScale, -8 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale);
    line(-8 / 20 * snakeBodyScale, -4 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, -4 / 20 * snakeBodyScale);
    line(-2 / 20 * snakeBodyScale, -4 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale);
    line(-8 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale);
    line(-5 / 20 * snakeBodyScale, -7 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, 7 / 20 * snakeBodyScale);
    line(-9 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale, 6 / 20 * snakeBodyScale);
    line(-3 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, 8 / 20 * snakeBodyScale);
    // "它"
    line(3 / 20 * snakeBodyScale, -9 / 20 * snakeBodyScale, 5 / 20 * snakeBodyScale, -6 / 20 * snakeBodyScale);
    line(-1 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale);
    line(-1 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale);
    line(9 / 20 * snakeBodyScale, -5 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, -2 / 20 * snakeBodyScale);
    line(8 / 20 * snakeBodyScale, -1 / 20 * snakeBodyScale, 3 / 20 * snakeBodyScale, 2 / 20 * snakeBodyScale);
    line(0 / 20 * snakeBodyScale, -3 / 20 * snakeBodyScale, 0 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale);
    line(0 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale);
    line(9 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, 9 / 20 * snakeBodyScale, 4 / 20 * snakeBodyScale);
}