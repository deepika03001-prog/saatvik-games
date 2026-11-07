/* game3.js - extra games for Saatvik's Games. Load AFTER game.js with a script tag whose src is game3.js
   Adds: Memory, Counting, ABC, Colors, Chocolate Crush, Choco Shooter (+ their CSS) */
(function(){var st=document.createElement("style");st.textContent=`/* new games */
#home{overflow-y:auto;touch-action:pan-y}
.zq{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:70px 14px 130px;text-align:center}
.zb{font-size:2.2rem;font-weight:800}.zs{font-size:3rem;line-height:1.25;max-width:92vw;min-height:3.5rem}.zl{font-size:7rem;line-height:1;font-weight:800}
.zc{display:flex;gap:14px;justify-content:center}.zc button{font:inherit;font-weight:800;font-size:3.4rem;width:26vw;max-width:120px;aspect-ratio:1;border:0;border-radius:28px;background:var(--c);color:#2b2d42;box-shadow:0 7px 0 rgba(0,0,0,.18)}.zc button:active{transform:translateY(4px)}.zc .zr{border-radius:50%}
.zn{animation:zsh .35s}@keyframes zsh{25%{transform:translateX(-9px)}75%{transform:translateX(9px)}}
.zm{display:grid;gap:10px;width:min(92vw,440px)}.zk{aspect-ratio:1;border-radius:18px;background:#8b5cf6 center/cover;color:#fff;font-size:2.4rem;font-weight:800;display:grid;place-items:center;box-shadow:0 6px 0 rgba(0,0,0,.2)}.zk.ok{opacity:.6;outline:4px solid #2ecc71}
/* chocolate crush */
.xh{font-weight:800;font-size:1.05rem;background:var(--card);color:var(--ink);border-radius:18px;padding:6px 14px;box-shadow:0 5px 0 rgba(0,0,0,.15)}
.xb{position:relative;touch-action:none;overflow:hidden;background:linear-gradient(135deg,#5a3321,#3b2013);border-radius:18px;box-shadow:0 8px 0 rgba(0,0,0,.25)}
.xt{position:absolute;left:0;top:0;display:grid;place-items:center;transition:transform .22s,opacity .22s,scale .22s}.xt.sl{background:rgba(255,255,255,.3);border-radius:12px}.xt.xp{opacity:0;scale:.2}
.xo{position:absolute;left:50%;top:42%;width:max-content;max-width:86vw;transform:translate(-50%,-50%);z-index:5;display:none;background:var(--card);color:var(--ink);padding:16px 24px;border-radius:24px;font-weight:800;font-size:1.7rem;text-align:center;box-shadow:0 8px 0 rgba(0,0,0,.25)}
.xo button{font:inherit;font-weight:800;font-size:1.3rem;margin-top:10px;border:0;border-radius:20px;padding:8px 24px;background:#8b5cf6;color:#fff;box-shadow:0 5px 0 rgba(0,0,0,.25)}
`;document.head.appendChild(st)})();
/* game3.js - new kid games: Memory, Counting, ABC, Colors */
(function(){
function mix(a){return a.slice().sort(function(){return Math.random()-.5})}
['g11','g12','g13','g14'].forEach(function(id){var s=document.createElement('section');s.className='g';s.id=id;document.body.appendChild(s)});
[['g11','🃏','Memory','#ffb3c6'],['g12','🔢','Counting','#c7f0bd'],['g13','🔤','ABC','#fff1a8'],['g14','🌈','Colors','#bde0fe']].forEach(function(m){var b=document.createElement('button');b.style.background=m[3];b.innerHTML='<b>'+m[1]+'</b>'+m[2];b.onclick=function(){open(m[0])};$('#menu').appendChild(b)});

/* 11 memory match: photos, gets bigger each round */
G.g11={start:function(){var box=$('#g11'),lv=0,a=null,lock=0,left=0;this.T=[];var T=this.T;
 function deal(){var n=[2,3,4,6][Math.min(lv,3)],ps=mix(PICS).slice(0,n),cs=mix(ps.concat(ps));left=n;a=null;lock=0;
  box.innerHTML='<div class="zq"><div class="zm" style="grid-template-columns:repeat('+(n==2?2:n==3?3:4)+',1fr)"></div></div>';var m=box.querySelector('.zm');say('Find the same!');
  cs.forEach(function(p){var d=document.createElement('div');d.className='zk';d.textContent='❓';
   d.onclick=function(){if(lock||d.className!='zk')return;d.className='zk up';d.textContent='';d.style.backgroundImage='url('+p+')';POP();
    if(!a){a={d:d,p:p};return}
    if(a.p==p){a.d.className=d.className='zk ok';a=null;addStar();DING();if(--left==0){lock=1;cheer();if(lv%2)party();lv++;T.push(setTimeout(deal,1800))}}
    else{lock=1;var b=a.d;a=null;T.push(setTimeout(function(){[b,d].forEach(function(x){x.className='zk';x.style.backgroundImage='';x.textContent='❓'});lock=0},900))}};
   m.appendChild(d)})}
 deal()},stop:function(){(this.T||[]).forEach(clearTimeout);$('#g11').innerHTML=''}};

/* shared question game: factory returns a function giving {q,s,say,win,o:[{h,c,ok,r}]} */
function quiz(id,fac){var t;G[id]={start:function(){var box=$('#'+id),nx=fac(),n=0,lock=0;
 function go(){var r=nx();lock=0;box.innerHTML='<div class="zq"><div class="zb">'+r.q+'</div><div class="zs">'+r.s+'</div><div class="zc"></div></div>';var ch=box.querySelector('.zc');say(r.say||r.q);
  r.o.forEach(function(o){var b=document.createElement('button');b.innerHTML=o.h;b.style.setProperty('--c',o.c||'#fff');if(o.r)b.className='zr';
   b.onclick=function(){if(lock)return;
    if(o.ok){lock=1;POP();DING();addStar();say(r.win||'Super '+NAME+'!');if(++n%5==0)party();t=setTimeout(go,1700)}
    else{tone(200,90,.2);b.classList.add('zn');setTimeout(function(){b.classList.remove('zn')},350);say('Try again!')}};
   ch.appendChild(b)})}
 go()},stop:function(){clearTimeout(t);$('#'+id).innerHTML=''}}}

/* 12 counting: 1-3 first, up to 10 as he gets them right */
quiz('g12',function(){var k=0;return function(){var mx=Math.min(10,3+(k++/2|0)),n=1+Math.random()*mx|0,e=pick(['🍎','⭐','🐟','🎈','🐥','🍓','🚗']),o=[n];
 while(o.length<3){var v=1+Math.random()*Math.max(4,mx)|0;if(o.indexOf(v)<0)o.push(v)}
 return{q:'How many?',s:new Array(n+1).join(e+' '),win:n+'! Super '+NAME,o:mix(o).map(function(v,i){return{h:v,c:COL[(v+i)%COL.length],ok:v==n}})}}});

/* 13 ABC: match the big capital letter to the small letter */
var AB=['Apple','Ball','Cat','Dog','Elephant','Fish','Grapes','Horse','Ice cream','Jeep','Koala','Lion','Mango','Nose','Orange','Parrot','Queen','Rainbow','Sun','Tiger','Umbrella','Van','Watch','Xmas tree','Yacht','Zebra'];
quiz('g13',function(){return function(){var i=Math.random()*26|0,o=[i],L=String.fromCharCode(65+i);
 while(o.length<3){var v=Math.random()*26|0;if(o.indexOf(v)<0)o.push(v)}
 return{q:'Find the small letter',s:'<span class="zl">'+L+'</span>',say:'Find small '+L,win:L+' for '+AB[i],o:mix(o).map(function(v){return{h:String.fromCharCode(97+v),c:COL[v%COL.length],ok:v==i}})}}});

/* 14 colors: tap the named color */
var CL=[['Red','#ff4d4d'],['Blue','#4d94ff'],['Yellow','#ffd23f'],['Green','#3ecf6e'],['Orange','#ff9f43'],['Purple','#a066ff'],['Pink','#ff78c4']];
quiz('g14',function(){return function(){var c=mix(CL).slice(0,3),t=pick(c);
 return{q:'Tap '+t[0]+'!',s:'🌈',win:t[0]+'! Super '+NAME,o:c.map(function(x){return{h:'',c:x[1],ok:x==t,r:1}})}}});
})();
/* game4.js - Chocolate Crush (match-3 for grown-ups): swap or swipe, endless levels */
(function(){
var sc0=document.createElement('section');sc0.className='g';sc0.id='g15';document.body.appendChild(sc0);
var mn=$('#menu'),mb=document.createElement('button');mb.style.cssText='background:#d2a679;grid-column:1/3';mb.innerHTML='<b>🍫</b>Chocolate Crush';mb.onclick=function(){open('g15')};mn.appendChild(mb);
G.g15={start:function(){
 var box=$('#g15'),N=7,S=Math.floor(Math.min(innerWidth*.94,440)/N),E=['🍫','🍩','🍪','🍬','🧁','🍦'],lv=1,sc=0,mv=0,goal=0,bz=1,sel=null,dn=null,g=[],alive=1;
 var w=function(ms){return new Promise(function(r){setTimeout(r,ms)})},rv=function(){return Math.random()*(lv<3?5:6)|0};
 box.innerHTML='<div class="zq"><div class="xh"></div><div class="xb"></div><div class="xo"></div></div>';
 var hd=box.querySelector('.xh'),bd=box.querySelector('.xb'),ov=box.querySelector('.xo');
 bd.style.width=bd.style.height=S*N+'px';bd.style.fontSize=S*.72+'px';
 function hud(){hd.textContent='🍫 Level '+lv+'  ·  🎯 '+sc+'/'+goal+'  ·  👣 '+mv}
 function ban(h,t,f){ov.style.display=h?'block':'none';if(h){ov.innerHTML=h+'<br><button>'+t+'</button>';ov.querySelector('button').onclick=f}}
 function pos(t,r,c){t.e.style.transform='translate('+c*S+'px,'+r*S+'px)'}
 function mk(v,r,c){var e=document.createElement('div');e.className='xt';e.textContent=E[v];e.style.width=e.style.height=S+'px';var t={e:e,v:v};bd.appendChild(e);pos(t,r,c);return t}
 function sw(a,b,c,d){var t=g[a][b];g[a][b]=g[c][d];g[c][d]=t}
 function find(){var s=new Set(),r,c;for(r=0;r<N;r++)for(c=0;c<N;c++){var v=g[r][c].v;
  if(c<N-2&&g[r][c+1].v==v&&g[r][c+2].v==v){s.add(g[r][c]);s.add(g[r][c+1]);s.add(g[r][c+2])}
  if(r<N-2&&g[r+1][c].v==v&&g[r+2][c].v==v){s.add(g[r][c]);s.add(g[r+1][c]);s.add(g[r+2][c])}}return Array.from(s)}
 function can(){for(var r=0;r<N;r++)for(var c=0;c<N;c++)for(var i=0;i<2;i++){var r2=r+i,c2=c+1-i;if(r2<N&&c2<N){sw(r,c,r2,c2);var f=find().length;sw(r,c,r2,c2);if(f)return 1}}return 0}
 function build(){bd.innerHTML='';g=[];for(var r=0;r<N;r++){g[r]=[];for(var c=0;c<N;c++){var v;do{v=rv()}while((c>1&&g[r][c-1].v==v&&g[r][c-2].v==v)||(r>1&&g[r-1][c].v==v&&g[r-2][c].v==v));g[r][c]=mk(v,r,c)}}if(!can())build()}
 async function settle(){var combo=0,m,r,c,i;
  while(alive&&(m=find()).length){combo++;sc+=m.length*10*combo;POP();if(combo>1)tone(500+combo*120,900+combo*120,.2,'sine');addStar();
   m.forEach(function(t){t.e.classList.add('xp')});hud();await w(260);if(!alive)return;
   m.forEach(function(t){t.e.remove()});
   for(c=0;c<N;c++){var col=[];for(r=N-1;r>=0;r--)if(m.indexOf(g[r][c])<0)col.push(g[r][c]);var k=N-col.length;
    for(i=0;i<k;i++)col.push(mk(rv(),-1-i,c));
    for(r=N-1,i=0;r>=0;r--,i++)g[r][c]=col[i]}
   bd.offsetWidth;for(r=0;r<N;r++)for(c=0;c<N;c++)pos(g[r][c],r,c);await w(300)}}
 function lvl(){sc=0;mv=20;goal=400+lv*200;build();hud();bz=1;ban('Level '+lv+'<br><small>Match 3+ · reach '+goal+' in 20 moves</small>','Play ▶',function(){ban();bz=0})}
 function chk(){hud();
  if(sc>=goal){bz=1;DING();addStar();addStar();addStar();party();ban('Level '+lv+' cleared! 🎉<br><small>Score '+sc+'</small>','Next ▶',function(){lv++;lvl()})}
  else if(mv<=0){bz=1;tone(300,100,.5,'sawtooth');ban('Out of moves 😢<br><small>'+sc+' / '+goal+'</small>','Retry 🔁',lvl)}
  else{if(!can())build();bz=0}}
 async function tr(r1,c1,r2,c2){if(bz||!alive)return;bz=1;if(sel){g[sel.r][sel.c].e.classList.remove('sl');sel=null}
  sw(r1,c1,r2,c2);pos(g[r1][c1],r1,c1);pos(g[r2][c2],r2,c2);await w(230);if(!alive)return;
  if(!find().length){sw(r1,c1,r2,c2);pos(g[r1][c1],r1,c1);pos(g[r2][c2],r2,c2);tone(200,90,.2);await w(230);bz=0;return}
  mv--;hud();await settle();if(alive)chk()}
 bd.onpointerdown=function(e){if(bz)return;var q=bd.getBoundingClientRect(),r=Math.floor((e.clientY-q.top)/S),c=Math.floor((e.clientX-q.left)/S);dn=(r<0||r>=N||c<0||c>=N)?null:{r:r,c:c,x:e.clientX,y:e.clientY,h:0}};
 bd.onpointermove=function(e){if(!dn||dn.h||bz)return;var dx=e.clientX-dn.x,dy=e.clientY-dn.y;if(Math.max(Math.abs(dx),Math.abs(dy))<S*.35)return;dn.h=1;var r2=dn.r,c2=dn.c;if(Math.abs(dx)>Math.abs(dy))c2+=dx>0?1:-1;else r2+=dy>0?1:-1;if(r2>=0&&r2<N&&c2>=0&&c2<N)tr(dn.r,dn.c,r2,c2)};
 bd.onpointercancel=function(){dn=null};
 bd.onpointerup=function(){if(!dn||dn.h||bz){dn=null;return}var r=dn.r,c=dn.c;dn=null;
  if(sel){var q=sel;if(Math.abs(q.r-r)+Math.abs(q.c-c)==1){tr(q.r,q.c,r,c);return}g[q.r][q.c].e.classList.remove('sl');sel=null;if(q.r==r&&q.c==c)return}
  sel={r:r,c:c};g[r][c].e.classList.add('sl');POP()};
 this.k=function(){alive=0;box.innerHTML=''};
 lvl()},stop:function(){if(this.k)this.k()}};
})();
/* Choco Shooter: bubble-shooter with chocolates. Aim, release, match 3+, 💣 clears an area, new row drops if you keep missing */
(function(){
var s0=document.createElement('section');s0.className='g';s0.id='g16';document.body.appendChild(s0);
var mn=$('#menu'),mb=document.createElement('button');mb.style.cssText='background:#c68642;grid-column:1/3';mb.innerHTML='<b>🎯</b>Choco Shooter';mb.onclick=function(){open('g16')};mn.appendChild(mb);
G.g16={start:function(){
 var box=$('#g16');box.innerHTML='<canvas id="cshc"></canvas><div class="xo"></div>';
 var cv=$('#cshc'),T=cv.getContext('2d'),W=cv.width=innerWidth,H=cv.height=innerHeight,ov=box.querySelector('.xo'),
  C=9,r=Math.min(30,Math.floor(W/(2*C+1))),ox=(W-(2*C+1)*r)/2,rh=r*1.732,y0=104,sx=W/2,sy=H-125,loseY=sy-r*2.4,mR=Math.max(4,Math.floor((loseY-y0)/rh)),
  TY=['🍫','🍩','🍪','🍬','🧁','💣'],BC=['#7b3f1d','#ff8fc1','#e0a040','#ef4444','#a78bfa','#222'],
  g=[],par=0,lv=1,sc=0,tc=4,cur=0,nxt=0,cnt=0,ball=null,miss=0,ang=0,pops=[],falls=[],fx=[],over=1,run=1,best=0,bg=T.createLinearGradient(0,0,0,H);
 try{best=+localStorage.getItem('svsCS')||0}catch(e){}
 bg.addColorStop(0,'#4a2a18');bg.addColorStop(1,'#1f0f08');T.textAlign='center';
 function mm(){return Math.max(3,6-(lv/2|0))}
 function off(i){return (i+par)&1}
 function ok(i,j){return i>=0&&i<g.length&&j>=0&&j<C-off(i)}
 function px(i,j){return ox+r+j*2*r+off(i)*r}
 function py(i){return y0+r+i*rh}
 function nb(i,j){var o=off(i),p=2*j+o,L=[[i,j-1],[i,j+1]],d,o2;for(d=-1;d<=1;d+=2){o2=off(i+d);L.push([i+d,(p-1-o2)/2],[i+d,(p+1-o2)/2])}return L.filter(function(a){return Number.isInteger(a[1])&&ok(a[0],a[1])})}
 function cells(f){for(var i=0;i<g.length;i++)for(var j=0;j<C-off(i);j++)f(i,j)}
 function left(){var n=0;cells(function(i,j){if(g[i][j]!=null)n++});return n}
 function nc(){cnt++;if(cnt%10==0)return 5;var s=[];cells(function(i,j){var v=g[i][j];if(v!=null&&v<5&&s.indexOf(v)<0)s.push(v)});return s.length?pick(s):Math.random()*tc|0}
 function row(){return new Array(C).fill(null)}
 function fill(i){for(var j=0;j<C-off(i);j++)g[i][j]=Math.random()*tc|0}
 function show(h,b,f){ov.innerHTML=h+'<br><button>'+b+'</button>';ov.style.display='block';over=1;ov.querySelector('button').onclick=f}
 function go(){ov.style.display='none';over=0}
 function lvl(){g=[];for(var i=0;i<mR+3;i++)g.push(row());par=0;tc=lv<3?4:5;var n=Math.min(3+lv,mR-2);for(i=0;i<n;i++)fill(i);miss=0;ball=null;pops=[];falls=[];fx=[];cnt=0;cur=nc();nxt=nc()}
 function addRow(){g.unshift(row());par^=1;fill(0);g.pop();tone(150,100,.2);fx.push({x:W/2,y:y0+30,s:'New row ⏬',a:40})}
 function win(){over=1;DING();addStar();addStar();addStar();party();sc+=100;show('Level '+lv+' cleared! 🎉<br><small>Score '+sc+'</small>','Next ▶',function(){lv++;lvl();go()})}
 function end(){over=1;if(sc>best){best=sc;try{localStorage.setItem('svsCS',best)}catch(e){}}tone(300,80,.6,'sawtooth');show('Game over 😢<br><small>Score '+sc+' · Best '+best+'</small>','Play again ▶',function(){lv=1;sc=0;lvl();go()})}
 function land(i,j,t){var del=[],p=[px(i,j),py(i)];
  if(t==5){tone(150,60,.4,'sawtooth');cells(function(a,b){if(g[a][b]!=null&&Math.hypot(px(a,b)-p[0],py(a)-p[1])<3.2*r)del.push([a,b])});fx.push({x:p[0],y:p[1],s:'💥',a:30})}
  else{g[i][j]=t;var seen={},q=[[i,j]],k;seen[i*C+j]=1;
   while(q.length){k=q.pop();del.push(k);nb(k[0],k[1]).forEach(function(n){if(g[n[0]][n[1]]===t&&!seen[n[0]*C+n[1]]){seen[n[0]*C+n[1]]=1;q.push(n)}})}
   if(del.length<3)del=[]}
  if(del.length){del.forEach(function(a){pops.push({x:px(a[0],a[1]),y:py(a[0]),t:g[a[0]][a[1]],a:0});g[a[0]][a[1]]=null});
   sc+=10*del.length;POP();addStar();miss=0;
   var sn={},q2=[],fl=0,b0;for(b0=0;b0<C;b0++)if(g[0][b0]!=null){sn[b0]=1;q2.push([0,b0])}
   while(q2.length){var k2=q2.pop();nb(k2[0],k2[1]).forEach(function(z){if(g[z[0]][z[1]]!=null&&!sn[z[0]*C+z[1]]){sn[z[0]*C+z[1]]=1;q2.push(z)}})}
   cells(function(a,b){if(g[a][b]!=null&&!sn[a*C+b]){falls.push({x:px(a,b),y:py(a),t:g[a][b],v:0});g[a][b]=null;fl++}});
   if(fl){sc+=20*fl;DING();addStar();fx.push({x:W/2,y:H/2-80,s:'Drop! +'+20*fl,a:50})}}
  else{miss++;if(miss>=mm()){miss=0;addRow()}}
  var bad=0;cells(function(a,b){if(g[a][b]!=null&&a>=mR)bad=1});
  if(!left())win();else if(bad)end()}
 function hit(x,y){if(y<=y0+r)return 1;var h=0;cells(function(i,j){if(!h&&g[i][j]!=null&&Math.hypot(px(i,j)-x,py(i)-y)<1.75*r)h=1});return h}
 function snap(){var b=ball,bi=0,bj=0,bd=1e9;ball=null;cells(function(i,j){if(g[i][j]==null){var d=Math.hypot(px(i,j)-b.x,py(i)-b.y);if(d<bd){bd=d;bi=i;bj=j}}});land(bi,bj,b.t)}
 function step(){for(var s=0;s<4&&ball;s++){var b=ball,lw=ox+r,rw=ox+2*C*r;b.x+=b.vx/4;b.y+=b.vy/4;if(b.x<lw){b.x=lw;b.vx=-b.vx}if(b.x>rw){b.x=rw;b.vx=-b.vx}if(hit(b.x,b.y))snap()}}
 function aim(e){var dx=e.clientX-sx,dy=sy-e.clientY;if(dy<20)dy=20;ang=Math.max(-1.3,Math.min(1.3,Math.atan2(dx,dy)))}
 box.onpointerdown=box.onpointermove=function(e){if(!over)aim(e)};
 box.onpointerup=function(e){if(over||ball)return;aim(e);ball={x:sx,y:sy,vx:Math.sin(ang)*16,vy:-Math.cos(ang)*16,t:cur};cur=nxt;nxt=nc()};
 function dr(x,y,t,k){var rr=(r-1)*k;T.beginPath();T.arc(x,y,rr,0,6.283);T.fillStyle=BC[t];T.fill();T.lineWidth=2;T.strokeStyle='rgba(255,255,255,.5)';T.stroke();T.font=Math.round(rr*1.25)+'px serif';T.fillStyle='#fff';T.fillText(TY[t],x,y+rr*.42)}
 lvl();show('🎯 Choco Shooter<br><small>Aim &amp; release · match 3+ · 💣 clears an area</small>','Play ▶',function(){lv=1;sc=0;lvl();go()});
 (function f(){if(!run)return;
  T.fillStyle=bg;T.fillRect(0,0,W,H);
  T.strokeStyle='rgba(255,80,80,.6)';T.setLineDash([8,8]);T.lineWidth=2;T.beginPath();T.moveTo(0,loseY);T.lineTo(W,loseY);T.stroke();T.setLineDash([]);
  cells(function(i,j){var v=g[i][j];if(v!=null)dr(px(i,j),py(i),v,1)});
  if(ball)step();if(ball)dr(ball.x,ball.y,ball.t,1);
  pops=pops.filter(function(o){o.a++;dr(o.x,o.y,o.t,Math.max(0,1-o.a/10));return o.a<10});
  falls=falls.filter(function(o){o.v+=.8;o.y+=o.v;dr(o.x,o.y,o.t,1);return o.y<H+40});
  if(!over&&!ball){var ax=sx,ay=sy,vx=Math.sin(ang)*8,vy=-Math.cos(ang)*8,n=0;T.fillStyle='rgba(255,255,255,.55)';
   while(n<90){ax+=vx;ay+=vy;if(ax<ox+r||ax>ox+2*C*r)vx=-vx;if(hit(ax,ay))break;if(n%2==0){T.beginPath();T.arc(ax,ay,3,0,6.283);T.fill()}n++}}
  T.save();T.translate(sx,sy);T.rotate(ang);T.fillStyle='#9ca3af';T.fillRect(-9,-r*2.1,18,r*1.4);T.restore();
  T.beginPath();T.arc(sx,sy,r*1.25,0,6.283);T.fillStyle='#4b5563';T.fill();dr(sx,sy,cur,1);
  dr(sx-r*4,sy+r*.6,nxt,.65);T.font='700 12px sans-serif';T.fillStyle='#fff';T.fillText('NEXT',sx-r*4,sy-r*.7);
  fx=fx.filter(function(q){q.y-=1;q.a--;T.globalAlpha=Math.max(0,Math.min(1,q.a/30));T.font='800 26px sans-serif';T.fillStyle='#ffd23f';T.fillText(q.s,q.x,q.y);T.globalAlpha=1;return q.a>0});
  T.font='800 20px sans-serif';T.fillStyle='#fff';T.fillText('🎯 Lv '+lv+'   ⭐ '+sc+'   ⏬ '+Math.max(1,mm()-miss),W/2,86);
  requestAnimationFrame(f)})();
 this.k=function(){run=0;box.innerHTML=''}},stop:function(){if(this.k)this.k()}};
})();
