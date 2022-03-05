const GameManager = {
    score: 0,
    // 判定死亡
    isDie: () => {
        let headX = snakeBody[0].x;
        let headY = snakeBody[0].y;

        // 撞墙
        if (headX <= 0 || headX >= width || headY <= 0 || headY >= height) {
            return true;
        }

        // 撞身体
        for (let i = 1; i < snakeBody.length; i++) {
            if (headX == snakeBody[i].x && headY == snakeBody[i].y) {
                return true;
            }
        }
        return false;
    },
    // 判定碰到目标物 
    getTarget: (snakeHead, target) => {
        if (snakeHead.x == target.x && snakeHead.y == target.y) {
            return true;
        } else {
            return false;
        }
    },
    updateScore: () => {
        GameManager.score += 1;
    }
}