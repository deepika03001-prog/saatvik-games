var $=function(s){return document.querySelector(s)},pick=function(a){return a[Math.random()*a.length|0]};
var FACES=["images/faces/happy.jpg", "images/faces/cool1.jpg", "images/faces/cool2.jpg", "images/faces/cool3.jpg"],
PICS=["images/balloons/balloon-01.jpg", "images/balloons/balloon-02.jpg", "images/balloons/balloon-03.jpg", "images/balloons/balloon-04.jpg", "images/balloons/balloon-05.jpg", "images/balloons/balloon-06.jpg", "images/balloons/balloon-07.jpg", "images/balloons/balloon-08.jpg", "images/balloons/balloon-09.jpg", "images/balloons/balloon-10.jpg", "images/balloons/balloon-11.jpg", "images/balloons/balloon-12.jpg", "images/balloons/balloon-13.jpg", "images/balloons/balloon-14.jpg", "images/balloons/balloon-15.jpg", "images/balloons/balloon-16.jpg", "images/balloons/balloon-17.jpg", "images/balloons/balloon-18.jpg", "images/balloons/balloon-19.jpg", "images/balloons/balloon-20.jpg", "images/balloons/balloon-21.jpg", "images/balloons/balloon-22.jpg", "images/balloons/balloon-23.jpg", "images/balloons/balloon-24.jpg", "images/balloons/balloon-25.jpg", "images/balloons/balloon-26.jpg", "images/balloons/balloon-27.jpg", "images/balloons/balloon-28.jpg", "images/balloons/balloon-29.jpg", "images/balloons/balloon-30.jpg", "images/balloons/balloon-31.jpg", "images/balloons/balloon-32.jpg", "images/balloons/balloon-33.jpg", "images/balloons/balloon-34.jpg", "images/balloons/balloon-35.jpg", "images/balloons/balloon-36.jpg", "images/balloons/balloon-37.jpg", "images/balloons/balloon-38.jpg", "images/balloons/balloon-39.jpg", "images/balloons/balloon-40.jpg", "images/balloons/balloon-41.jpg", "images/balloons/balloon-42.jpg", "images/balloons/balloon-43.jpg", "images/balloons/balloon-44.jpg", "images/balloons/balloon-45.jpg", "images/balloons/balloon-46.jpg", "images/balloons/balloon-47.jpg", "images/balloons/balloon-48.jpg"],
PUZ=["images/puzzle/puzzle-1.jpg", "images/puzzle/puzzle-2.jpg", "images/puzzle/puzzle-3.jpg", "images/puzzle/puzzle-4.jpg"],
NAME='Saatvik',COL=['#ff6b6b','#ffd23f','#4ecdc4','#8b5cf6','#ff9f43','#54a0ff','#ff78c4'];
var stars=0,ac=null,sayT,faceT,cur=null,G={};
try{stars=+localStorage.getItem('svs')||0}catch(e){}
function addStar(){stars++;$('#score').textContent='⭐ '+stars;try{localStorage.setItem('svs',stars)}catch(e){}sync()}
$('#score').textContent='⭐ '+stars;$('#face').style.backgroundImage='url('+FACES[0]+')';
function tone(a,b,d,t){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();var o=ac.createOscillator(),g=ac.createGain(),n=ac.currentTime;o.type=t||'square';o.frequency.setValueAtTime(a,n);o.frequency.exponentialRampToValueAtTime(b,n+d*.8);g.gain.setValueAtTime(.22,n);g.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(g);g.connect(ac.destination);o.start();o.stop(n+d+.02)}catch(e){}}
function POP(){tone(520,70,.15)}function DING(){tone(660,990,.25,'sine')}
function say(t){var s=$('#say');s.textContent=t;s.classList.add('on');clearTimeout(sayT);sayT=setTimeout(function(){s.classList.remove('on')},1900);
 try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='en-IN';u.pitch=1.6;u.rate=.9;speechSynthesis.speak(u)}catch(e){}}
function cheer(){say(pick(['Super '+NAME+'!','Wonderful!','Yay '+NAME+'!','Very good!','Hooray!','Semma '+NAME+'!']));
 $('#face').style.backgroundImage='url('+pick(FACES.slice(1))+')';clearTimeout(faceT);faceT=setTimeout(function(){$('#face').style.backgroundImage='url('+FACES[0]+')'},1500)}
function open(k){$('#home').classList.remove('on');$('#'+k).classList.add('on');cur=k;$('#back').style.display='block';G[k].start()}
function home(){if(cur){G[cur].stop();$('#'+cur).classList.remove('on')}cur=null;$('#home').classList.add('on');$('#back').style.display='none'}
[['g6','🧩','Puzzle','#ffd6a5'],['g1','🎈','Balloons','#ff9aa2'],['g2','🐘','Animals','#b5ead7'],['g3','⭐','Catch','#ffe66d'],['g4','🔷','Shapes','#a0c4ff'],['g5','🎨','Paint','#d7b8ff']].forEach(function(m){var b=document.createElement('button');b.style.background=m[3];b.innerHTML='<b>'+m[1]+'</b>'+m[2];b.onclick=function(){open(m[0])};$('#menu').appendChild(b)});
$('#back').onclick=home;
$('#go').onclick=function(){$('#start').style.display='none';POP();home();say('Hi '+NAME+'!')};

/* 1 balloons */
G.g1={start:function(){var box=$('#g1'),live=0,bag=[];
 function nextPic(){if(!bag.length)bag=PICS.slice().sort(function(){return Math.random()-.5});return bag.pop()}
 function spawn(){if(live>=7)return;var b=document.createElement('div'),sz=95+Math.random()*35,p=document.createElement('div'),img=nextPic();
  b.className='b';b.style.setProperty('--c',pick(COL));b.style.setProperty('--t',(9+Math.random()*5)+'s');b.style.width=sz+'px';b.style.height=sz*1.18+'px';b.style.left=(4+Math.random()*(88-sz/4))+'%';
  p.className='pic';p.style.backgroundImage='url('+img+')';b.appendChild(p);
  b.onpointerdown=function(e){e.preventDefault();pop(b,img)};b.onanimationend=function(){if(b.parentNode){b.remove();live--}};box.appendChild(b);live++}
 function pop(b,img){if(!b.parentNode)return;var r=b.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,c=b.style.getPropertyValue('--c');
  for(var i=0;i<14;i++){var q=document.createElement('div'),a=i/14*6.28,d=50+Math.random()*60;q.className='p';q.style.cssText='left:'+cx+'px;top:'+cy+'px;--c:'+c+';--x:'+Math.cos(a)*d+'px;--y:'+Math.sin(a)*d+'px';document.body.appendChild(q);setTimeout(function(z){z.remove()},750,q)}
  var rv=$('#rv');rv.classList.remove('on');void rv.offsetWidth;rv.style.backgroundImage='url('+img+')';rv.classList.add('on');
  b.remove();live--;POP();addStar();cheer()}
 spawn();this.t=setInterval(spawn,900)},
 stop:function(){clearInterval(this.t);$('#g1').innerHTML='';$('#rv').classList.remove('on')}};

/* 2 animals */
G.g2={start:function(){var g=document.createElement('div');g.className='grid';
 [['🐘','Elephant','Paaoo!'],['🐶','Dog','Woof woof!'],['🐱','Cat','Meow meow!'],['🐔','Hen','Cock a doodle doo!'],['🐄','Cow','Moooo!'],['🐴','Horse','Neigh neigh!']].forEach(function(a){var b=document.createElement('button');b.className='an';b.innerHTML=a[0]+'<small>'+a[1]+'</small>';
  b.onclick=function(){b.classList.remove('hit');void b.offsetWidth;b.classList.add('hit');tone(400,800,.2,'sine');addStar();say(a[1]+'! '+a[2])};g.appendChild(b)});
 $('#g2').appendChild(g)},stop:function(){$('#g2').innerHTML=''}};

/* 3 catch */
G.g3={start:function(){var box=$('#g3');box.innerHTML='<div id="bk"><div class="bf"></div><div class="bb">🧺</div></div>';var bk=$('#bk');bk.firstChild.style.backgroundImage='url('+FACES[0]+')';var got=0;
 var W=innerWidth,H=innerHeight,bx=W/2,its=[],run=true;bk.style.left=bx-60+'px';
 box.onpointermove=box.onpointerdown=function(e){bx=Math.max(60,Math.min(W-60,e.clientX));bk.style.left=bx-60+'px'};
 var sp=setInterval(function(){var d=document.createElement('div');d.className='fl';d.textContent=pick(['⭐','🍎','🍌','🍓','🍦','🍉']);var x=30+Math.random()*(W-90);d.style.left=x+'px';box.appendChild(d);its.push({d:d,x:x+25,y:-60,v:2.5+Math.random()*2+Math.min(got/12,2.5)})},850);
 (function loop(){if(!run)return;its=its.filter(function(o){o.y+=o.v;o.d.style.top=o.y+'px';if(o.y>H-215&&o.y<H-120&&Math.abs(o.x-bx)<62){o.d.remove();POP();addStar();got++;if(got%10==0)party();cheer();return false}if(o.y>H){o.d.remove();return false}return true});requestAnimationFrame(loop)})();
 this.s=function(){run=false;clearInterval(sp);box.innerHTML=''}},stop:function(){if(this.s)this.s()}};

/* 4 shapes */
G.g4={start:function(){round()},stop:function(){$('#g4').innerHTML=''}};
function round(){var box=$('#g4');box.innerHTML='';var T=['circle','square','triangle'],C=['#ff6b6b','#4ecdc4','#ffd23f','#8b5cf6','#ff9f43','#54a0ff'],done=0,
 top=document.createElement('div'),bot=document.createElement('div');top.className=bot.className='row';
 function sh(){return T.slice().sort(function(){return Math.random()-.5})}
 sh().forEach(function(t){var s=document.createElement('div');s.className='sh '+t;s.dataset.t=t;s.style.background=pick(C);drag(s);top.appendChild(s)});
 sh().forEach(function(t){var s=document.createElement('div');s.className='sh tg '+t;s.dataset.t=t;bot.appendChild(s)});
 box.appendChild(top);box.appendChild(bot);
 function drag(s){var sx,sy,r0;
  s.onpointerdown=function(e){if(s.dataset.ok)return;e.preventDefault();s.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;r0=s.getBoundingClientRect();s.style.transition='none';s.style.position='relative';s.style.zIndex=5};
  s.onpointermove=function(e){if(!s.hasPointerCapture(e.pointerId))return;s.style.transform='translate('+(e.clientX-sx)+'px,'+(e.clientY-sy)+'px)'};
  s.onpointerup=function(e){if(!s.hasPointerCapture(e.pointerId))return;var cx=r0.left+r0.width/2+e.clientX-sx,cy=r0.top+r0.height/2+e.clientY-sy,
   tg=Array.prototype.find.call(bot.children,function(x){return x.dataset.t==s.dataset.t}),r=tg.getBoundingClientRect(),tx=r.left+r.width/2,ty=r.top+r.height/2;s.style.transition='transform .25s';
   if(Math.hypot(cx-tx,cy-ty)<70){s.style.transform='translate('+(tx-r0.left-r0.width/2)+'px,'+(ty-r0.top-r0.height/2)+'px)';s.dataset.ok=1;DING();addStar();cheer();if(++done==3)setTimeout(function(){if(cur=='g4')round()},1600)}
   else{s.style.transform='';tone(220,120,.15,'sine')}}}}

/* 5 paint */
G.g5={start:function(){var box=$('#g5');box.innerHTML='<canvas id="cv"></canvas><div id="pal"></div>';var cv=$('#cv'),c=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;c.fillStyle='#fff';c.fillRect(0,0,cv.width,cv.height);c.lineCap=c.lineJoin='round';c.lineWidth=16;
 var down=false,lx,ly,pal=$('#pal');c.strokeStyle='#ff6b6b';
 ['#ff6b6b','#ff9f43','#ffd23f','#4ecdc4','#54a0ff','#8b5cf6','#ff78c4','#7b4a2a','#ffffff'].forEach(function(k,i){var b=document.createElement('button');b.style.background=k;b.setAttribute('aria-label','Colour');if(!i)b.className='sel';
  b.onclick=function(){c.strokeStyle=k;c.lineWidth=k=='#ffffff'?44:16;Array.prototype.forEach.call(pal.children,function(x){x.classList.remove('sel')});b.classList.add('sel')};pal.appendChild(b)});
 var cl=document.createElement('button');cl.textContent='🗑';cl.setAttribute('aria-label','Clear');cl.style.background='#fff';cl.onclick=function(){c.fillStyle='#fff';c.fillRect(0,0,cv.width,cv.height);tone(300,100,.2,'sine')};pal.appendChild(cl);
 cv.onpointerdown=function(e){down=true;lx=e.clientX;ly=e.clientY;c.beginPath();c.moveTo(lx,ly);c.lineTo(lx+.1,ly);c.stroke()};
 cv.onpointermove=function(e){if(!down)return;c.beginPath();c.moveTo(lx,ly);c.lineTo(e.clientX,e.clientY);c.stroke();lx=e.clientX;ly=e.clientY};
 cv.onpointerup=cv.onpointerleave=function(){if(down){down=false;addStar();if(Math.random()<.35)cheer()}}},stop:function(){$('#g5').innerHTML=''}};
function party(){for(var i=0;i<26;i++){var d=document.createElement('div');d.className='cf';d.textContent=pick(['🎉','⭐','🎈','✨','🎊']);d.style.left=Math.random()*100+'vw';d.style.animationDuration=(1.8+Math.random()*1.6)+'s';d.style.animationDelay=Math.random()*.5+'s';document.body.appendChild(d);setTimeout(function(z){z.remove()},4200,d)}}
/* 6 puzzle */
var lvl=0;
G.g6={start:function(){puz()},stop:function(){$('#g6').innerHTML=''}};
function puz(){var box=$('#g6');box.innerHTML='';var L=[[2,2],[3,2],[3,3]][lvl],cols=L[0],rows=L[1],n=cols*rows,cell=Math.floor(Math.min(innerWidth*.84/cols,innerHeight*.28/rows,150)),base=Math.max(cols,rows)*cell,img='url('+pick(PUZ)+')',done=0,slots=[],i;
 var bd=document.createElement('div');bd.style.cssText='position:relative;margin:86px auto 0;width:'+cols*cell+'px;height:'+rows*cell+'px';
 function bg(el,k){el.style.backgroundImage=img;el.style.backgroundSize=base+'px '+base+'px';el.style.backgroundPosition=(-(k%cols)*cell)+'px '+(-Math.floor(k/cols)*cell)+'px'}
 for(i=0;i<n;i++){var s=document.createElement('div');s.className='sl';s.style.cssText='left:'+(i%cols)*cell+'px;top:'+Math.floor(i/cols)*cell+'px;width:'+cell+'px;height:'+cell+'px';var gh=document.createElement('div');gh.className='gh';bg(gh,i);s.appendChild(gh);bd.appendChild(s);slots.push(s)}
 var tray=document.createElement('div');tray.id='tray';var order=[];for(i=0;i<n;i++)order.push(i);order.sort(function(){return Math.random()-.5});
 order.forEach(function(k){var p=document.createElement('div');p.className='pc';p.style.width=p.style.height=cell+'px';bg(p,k);drag(p,k);tray.appendChild(p)});
 box.appendChild(bd);box.appendChild(tray);
 function drag(p,k){var sx,sy,r0;
  p.onpointerdown=function(e){if(p.dataset.ok)return;e.preventDefault();p.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;r0=p.getBoundingClientRect();p.style.transition='none';p.style.zIndex=9};
  p.onpointermove=function(e){if(p.hasPointerCapture(e.pointerId))p.style.transform='translate('+(e.clientX-sx)+'px,'+(e.clientY-sy)+'px)'};
  p.onpointerup=function(e){if(!p.hasPointerCapture(e.pointerId))return;var cx=r0.left+cell/2+e.clientX-sx,cy=r0.top+cell/2+e.clientY-sy,r=slots[k].getBoundingClientRect();p.style.transition='transform .25s';
   if(Math.hypot(cx-(r.left+cell/2),cy-(r.top+cell/2))<cell*.6){p.style.transform='translate('+(r.left-r0.left)+'px,'+(r.top-r0.top)+'px)';p.dataset.ok=1;p.style.zIndex=1;DING();addStar();
    if(++done==n){party();cheer();setTimeout(function(){if(cur=='g6'){lvl=(lvl+1)%3;puz()}},3400)}else if(Math.random()<.5)cheer()}
   else{p.style.transform='';p.style.zIndex='';tone(220,120,.15,'sine')}}}}

/* Optional MySQL sync: needs api.php + database (see README). If api.php is missing, the game still works and keeps stars in the browser. */
var syncT=null;
function sync(){clearTimeout(syncT);syncT=setTimeout(function(){try{fetch('api.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({stars:stars,game:cur||'home'})}).catch(function(){})}catch(e){}},4000)}
try{fetch('api.php').then(function(r){return r.json()}).then(function(d){if(d&&d.stars>stars){stars=d.stars;$('#score').textContent='⭐ '+stars;try{localStorage.setItem('svs',stars)}catch(e){}}}).catch(function(){})}catch(e){}
