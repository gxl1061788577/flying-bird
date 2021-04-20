//所有引入图片

var imgs = {
    //建立图片对象
    bg: new Image(),
    grass: new Image(),
    title: new Image(),
    bird0: new Image(),
    bird1: new Image(),
    up_bird0: new Image(),
    up_bird1: new Image(),
    down_bird0: new Image(),
    down_bird1: new Image(),
    startBtn: new Image(),
    up_pipe: new Image(),
    up_mod: new Image(),
    down_pipe: new Image(),
    down_mod: new Image(),
    scroe0:new Image(),
    scroe1:new Image(),
    scroe2:new Image(),
    scroe3:new Image(),
    scroe4:new Image(),
    scroe5:new Image(),
    scroe6:new Image(),
    scroe7:new Image(),
    scroe8:new Image(),
    scroe9:new Image(),
    message:new Image(),

    //加载图片
    loadimgs:(fn) => {
        imgs.bg.src = './imgs/bg.jpg';
        imgs.grass.src = './imgs/banner.jpg';
        imgs.title.src = './imgs/head.jpg';
        imgs.bird0.src = './imgs/bird0.png';
        imgs.bird1.src = './imgs/bird1.png';
        imgs.up_bird0.src = './imgs/up_bird0.png';
        imgs.up_bird1.src = './imgs/up_bird1.png';
        imgs.down_bird0.src = './imgs/down_bird0.png';
        imgs.down_bird1.src = './imgs/down_bird1.png';
        imgs.startBtn.src = './imgs/start.jpg';
        imgs.up_pipe.src = './imgs/up_pipe.png';
        imgs.up_mod.src = './imgs/up_mod.png';
        imgs.down_pipe.src = './imgs/down_pipe.png';
        imgs.down_mod.src = './imgs/down_mod.png';
        imgs.scroe0.src = './imgs/0.jpg';
        imgs.scroe1.src = './imgs/1.jpg';
        imgs.scroe2.src = './imgs/2.jpg';
        imgs.scroe3.src = './imgs/3.jpg';
        imgs.scroe4.src = './imgs/4.jpg';
        imgs.scroe5.src = './imgs/5.jpg';
        imgs.scroe6.src = './imgs/6.jpg';
        imgs.scroe7.src = './imgs/7.jpg';
        imgs.scroe8.src = './imgs/8.jpg';
        imgs.scroe9.src = './imgs/9.jpg';
        imgs.message.src = './imgs/message.jpg';

        //添加定时器，判断图片是否加载完成
        var timer = setInterval(() => {
            if (imgs.bg.complete&&imgs.grass.complete
              &&imgs.title.complete&&imgs.startBtn.complete
              &&imgs.bird0.complete&&imgs.bird1.complete
              &&imgs.up_bird0.complete&&imgs.up_bird1.complete
              &&imgs.down_bird0.complete&&imgs.down_bird1.complete
              &&imgs.up_pipe.complete&&imgs.up_mod.complete
              &&imgs.down_mod.complete&&imgs.down_pipe.complete
              &&imgs.scroe0.complete&&imgs.scroe1.complete
              &&imgs.scroe2.complete&&imgs.scroe3.complete
              &&imgs.scroe4.complete&&imgs.scroe5.complete
              &&imgs.scroe6.complete&&imgs.scroe7.complete
              &&imgs.scroe8.complete&&imgs.scroe9.complete
              &&imgs.message.complete) {
              //删除定时器
              clearInterval(timer);
              //图片全部加载完成后，运行此函数
              fn();
            }
        }, 50)
    }
}