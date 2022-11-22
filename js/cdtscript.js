
  function CountdownTimer(elm,tl,mes){
    this.initialize.apply(this, arguments);
}
  CountdownTimer.prototype={
    initialize:function(elm,tl,mes) {
    this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
},countDown:function(){
    let timer='';
  const today=new Date();
  // const day=Math.floor((this.tl-today)/(24*60*60*1000));
  const hour=Math.floor((this.tl-today)/(60*60*1000));
  const min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  const sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  const milli=Math.floor(((this.tl-today)%(24*60*60*1000))/10)%100;
  const me=this;
  //const btn = document.querySelector('.btn');
  const timetext = document.querySelector('.timetext');
if( ( this.tl - today ) > 0 ){
// if (day) timer += '<span class="day">'+day+'日と</span>';
if (hour) timer += '<span class="hour">'+hour+':</span>';
  timer += '<span class="min">'+this.addZero(min)+':</span><span class="sec">'+this.addZero(sec)+':</span><span class="milli">'+this.addZero(milli)+'</span>';
  this.elem.innerHTML = timer;
  tid = setTimeout( function(){me.countDown();},10 );
}else{
    this.elem.innerHTML = this.mes;
  timetext.style.display = 'none';
  return;
}
},addZero:function(num){ return ('0'+num).slice(-2); }
}
  function CDT(){
const text = '無料説明会の募集終了まで<br>';
    const tl = new Date('2022/11/24 23:59:00');
    const timer = new CountdownTimer('CDT',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
    timer.countDown();
    target = document.getElementById("text");
    target.innerHTML = text;
}

    function CDT2(){
const text = '無料説明会の募集終了まで<br>';
      const tl = new Date('2022/11/24 23:59:00');
      const timer = new CountdownTimer('CDT2',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
      timer.countDown();
      target = document.getElementById("text2");
      target.innerHTML = text;
}

      function CDT3(){
const text = '無料説明会の募集終了まで<br>';
        const tl = new Date('2022/11/24 23:59:00');
        const timer = new CountdownTimer('CDT3',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
        timer.countDown();
        target = document.getElementById("text3");
        target.innerHTML = text;
}

        function CDT4(){
const text = '無料説明会の募集終了まで<br>';
          const tl = new Date('2022/11/24 23:59:00');
          const timer = new CountdownTimer('CDT4',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
          timer.countDown();
          target = document.getElementById("text4");
          target.innerHTML = text;
}

          function CDT5(){
const text = '無料説明会の募集終了まで<br>';
            const tl = new Date('2022/11/24 23:59:00');
            const timer = new CountdownTimer('CDT5',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
            timer.countDown();
            target = document.getElementById("text5");
            target.innerHTML = text;
}

            function CDT6(){
const text = '無料説明会の募集終了まで<br>';
              const tl = new Date('2022/11/24 23:59:00');
              const timer = new CountdownTimer('CDT6',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
              timer.countDown();
              target = document.getElementById("text6");
              target.innerHTML = text;
}

              function CDT7(){
const text = '無料説明会の募集終了まで<br>';
                const tl = new Date('2022/11/24 23:59:00');
                const timer = new CountdownTimer('CDT7',tl,'<span class="text-sp">無料説明会の募集は終了しました</span>');
                timer.countDown();
                target = document.getElementById("text7");
                target.innerHTML = text;
}

                window.onload=function(){
                  CDT();
                CDT2();
                CDT3();
                CDT4();
                CDT5();
                CDT6();
                CDT7();
}