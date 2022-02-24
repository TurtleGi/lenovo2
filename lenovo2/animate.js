function animate(obj,target,callback){
    //obj目标对象 target目标位置
    //callback回调函数 定时器结束后再执行的函数
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-obj.offsetLeft)/10;//步长值
        step=step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
obj.style.left=obj.offsetLeft+step+'px';
    },15)
}