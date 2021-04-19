//鸟类
var bird = {
    bird: [imgs.bird0,imgs.bird1],//正常状态，图片
    up_bird: [imgs.up_bird0,imgs.up_bird1],//向上飞状态
    down_bird: [imgs.down_bird0,imgs.down_bird1],//向下掉状态
    posX: 150,//横坐标
    posY: 200,//纵坐标Y
    speed: 0,//速度
    alive: false,//存活状态
    draw:function(image){
        ctx.drawImage(image,this.posX,this.posY);
    },
    //飞行
    fly:function(i){
        this.posY += this.speed;
        this.speed++;

        //触顶反弹
        if(this.posY<=0){
            this.speed = 6;
        }
        //触地死
        if(this.posY >= 425-imgs.down_bird0.height){
            this.alive = false;
        }
        //确保坠落速度不会太快
        if(this.speed > 6){
            this.speed = 6;
        }

        if(this.speed>0){
            this.draw(this.down_bird[i%2]);
        }else if(this.speed<0){
            this.draw(this.up_bird[i%2]);
        }else{
            this.draw(this.bird[i%2]);
        }
    }
}