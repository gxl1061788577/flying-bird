//管道类
class pipe {
    constructor(upPipe,upMod,downPipe,downMod,pipsObj){
        this.upPipe = upPipe;
        this.upMod = upMod;
        this.downPipe = downPipe;
        this.downMod = downMod;
        this.PosX = 400;
        this.pipsObj = pipsObj;
        this.upH = pipsObj?this.getRandomIntInclusive(this.pipsObj.upH,20):this.getRandomIntInclusive(1,20);
        this.downH = this.upH + 30;
        this.over = false;//被越过
    }
    // 管体生成
    createPipe(ctx){
        //将360像素分为60份，一份为6像素
        //预计空道为120像素，占20份,因为图片为60像素，所以相距30份
        ctx.drawImage(this.upPipe,this.PosX,this.upH*6);
        ctx.drawImage(this.downPipe,this.PosX,this.downH*6);
        for(let i=0;i<this.upH*2;i++){
            ctx.drawImage(this.upMod,this.PosX,i*3)
        }
        for(let i=0;i<(61-this.downH)*3;i++){
            ctx.drawImage(this.downMod,this.PosX,(this.downH+10)*6 + i*2);
        }
    }
    //得到随机整数
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
    move(ctx){
        this.PosX -= 3;
        this.createPipe(ctx);
    }
}