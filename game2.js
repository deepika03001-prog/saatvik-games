/* game2.js - Space Shoot, Chef, Saatvik Store (3D shop). Load AFTER game.js and BEFORE game3.js. Needs three.js (r128) loaded before game.js. */
(function(){var st=document.createElement("style");st.textContent="/* style2.css - 18+ Zone */\n#ad{padding:76px 14px 130px}#ad .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:460px;margin:0 auto}\n#g7{background:#0b1030}#sc{position:absolute;inset:0}\n#g8{background:linear-gradient(#1c2230,#2e3a4d);color:#f4efe6;overflow:auto}\n.chef{max-width:480px;margin:0 auto;padding:76px 14px 130px;text-align:center}\n.chef h2{margin:0 0 8px;font-size:1.6rem;letter-spacing:.02em}\n#od{font-size:1.7rem;font-weight:800}#tm{margin:4px 0 10px;color:#ffb347;font-weight:800}\n#stk{min-height:64px;font-size:2.2rem;border:2px dashed #8793a8;border-radius:14px;padding:8px}\n#ig{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}\n#ig button{font:inherit;font-size:2.6rem;border:0;border-radius:16px;padding:10px 0;background:#f4efe6;color:#1c2230;box-shadow:0 5px 0 rgba(0,0,0,.35)}\n#ig button:active{transform:translateY(3px)}#ig small{display:block;font-size:1rem;font-weight:800}\n#g9{background:linear-gradient(#ffe0ec,#fff1c9)}\n.bt{height:100%;overflow-y:auto;touch-action:pan-y;padding:70px 12px 130px;max-width:480px;margin:0 auto;text-align:center}\n.tabs{display:flex;gap:8px;justify-content:center}.tabs button,.li button{font:inherit;font-weight:800;border:3px solid transparent;border-radius:16px;background:var(--card);color:var(--ink);padding:8px 10px}\n.tabs button.sel,.li button.sel{border-color:#8b5cf6}\n.av{display:flex;justify-content:center;gap:6px;font-size:2rem;margin:10px 0;background:var(--card);border-radius:16px;padding:6px}\n.li{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.li button{font-size:2.2rem}.li small{display:block;font-size:.8rem}.li p{grid-column:1/4;margin:6px 0;font-weight:800;color:#2b2d42}\n#g10{background:#ffe4ec}#g10 canvas{display:block}.np{padding:120px 20px;text-align:center;font-weight:800}\n/* mall boutique */\n.ct{flex-wrap:wrap;margin-top:8px}.ct button{font-size:.85rem;padding:5px 8px}\n.l4{grid-template-columns:repeat(4,1fr)}.l4 p{grid-column:1/5}.li{margin-top:8px}\n.li button{font-size:1.9rem;padding:6px 2px;line-height:1.3}.li small{font-size:.62rem;line-height:1.1}\n.sk{display:inline-block;width:40px;height:34px;background:var(--c);clip-path:polygon(18% 0,82% 0,100% 100%,0 100%)}\n.k2{background:repeating-linear-gradient(90deg,var(--c) 0 6px,rgba(0,0,0,.2) 6px 8px)}.k3{height:24px}\n.hd{margin:8px 0;font-weight:800}.cu{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;min-height:120px}\n.cu button{font:inherit;border:3px solid transparent;border-radius:14px;background:var(--card);color:var(--ink);padding:4px 2px;font-size:1.5rem}.cu button.sel{border-color:#8b5cf6;background:#f1e8ff}\n.cu b{display:block;font-size:1.9rem;font-weight:400}.cu small{display:block;font-size:.58rem;font-weight:800;line-height:1}\n.cu em{display:block;height:6px;border-radius:4px;background:#ddd;margin-top:3px}.cu u{display:block;height:100%;border-radius:4px;background:#4ecdc4}\n.av{display:flex;flex-direction:column;align-items:center;width:130px;margin:10px auto;background:var(--card);border-radius:20px;padding:6px;font-size:1.8rem;line-height:1.15}\n.av div{min-height:36px;display:flex;align-items:center}\n/* mall v2 */\n#g9{background:linear-gradient(#ffd6e8,#fff4d6 60%,#e8dcff);overflow:hidden}\n.mall{height:100%;display:flex;flex-direction:column;padding-top:62px}\n.stage{position:relative;flex:0 0 44%;display:flex;justify-content:center}.doll{height:100%;width:auto}\n.job{position:absolute;right:6px;top:4px;max-width:44%;background:var(--card);border-radius:16px 16px 4px 16px;padding:6px 10px;font-size:.78rem;font-weight:800;color:var(--ink);animation:jin .5s}\n.job b{font-size:1.8rem;font-weight:400}.job p{margin:2px 0 6px}.job button{font:inherit;border:0;border-radius:12px;background:#4ecdc4;color:#fff;padding:4px 12px;font-weight:800}\n@keyframes jin{from{transform:translateX(120%)}}\n.pn{flex:1;overflow-y:auto;touch-action:pan-y;padding:8px 12px 120px;text-align:center}\n.sg{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:420px;margin:0 auto}\n.sg button{font:inherit;font-weight:800;border:0;border-radius:18px;padding:0 0 10px;background:var(--c);color:#2b2d42;box-shadow:0 5px 0 rgba(0,0,0,.15);overflow:hidden}\n.sg i{display:block;height:16px;margin-bottom:4px;background:repeating-linear-gradient(90deg,#fff 0 14px,rgba(255,255,255,.4) 14px 28px)}.sg b{display:block;font-size:2.2rem;font-weight:400}\n.bar{display:flex;align-items:center;gap:10px;justify-content:center;font-weight:800}.bar button,.it button{font:inherit;font-weight:800;border:3px solid transparent;border-radius:14px;background:var(--card);color:var(--ink);padding:6px 10px}\n.it{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}.it button.sel{border-color:#8b5cf6}\n.swr{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:10px}.swr button{width:38px;height:38px;border-radius:50%;border:3px solid #fff}.swr button.sel{border-color:#2b2d42;transform:scale(1.15)}\n/* 3D boutique */\n#g9 canvas{position:absolute;inset:0;display:block}\n.rq{position:absolute;top:calc(env(safe-area-inset-top,0px) + 66px);left:50%;transform:translateX(-50%);width:min(94vw,440px);display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;background:var(--card);color:var(--ink);border-radius:22px;padding:6px 12px;font-weight:800;font-size:1.05rem;box-shadow:0 5px 0 rgba(0,0,0,.15)}\n.rq b{font-size:2rem;font-weight:400}.rq i{width:28px;height:28px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 2px rgba(0,0,0,.2)}.rq small{width:100%;text-align:center;font-size:.8rem}\n.nm{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 300px);text-align:center;font-size:1.5rem;color:#2b2d42;text-shadow:0 2px 0 #fff}\n.cols{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 206px);display:flex;gap:6px;justify-content:center;padding:0 6px}\n.cols button{font:inherit;font-size:1.9rem;line-height:1;border:4px solid #fff;border-radius:18px;background:#ffe9f3;color:#2b2d42;padding:4px 6px;box-shadow:0 4px 0 rgba(0,0,0,.18)}.cols small{display:block;font-size:.62rem;font-weight:800}.cols .sel{background:#ffd23f;transform:translateY(-4px)}\n.ctl{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 112px);display:flex;gap:12px;justify-content:center;padding:0 10px}\n.ctl button{font:inherit;font-weight:800;font-size:2.2rem;border:0;border-radius:26px;width:84px;height:78px;background:#8b5cf6;color:#fff;box-shadow:0 8px 0 rgba(0,0,0,.25)}.ctl .sell{width:190px;background:#2ecc71;font-size:1.05rem;line-height:1.1;white-space:nowrap;padding:0 4px;letter-spacing:.5px}.ctl button:active{transform:translateY(5px);box-shadow:0 3px 0 rgba(0,0,0,.25)}\n#sold{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%) rotate(-12deg) scale(0);font-size:4.6rem;font-weight:800;color:#e63946;border:8px solid #e63946;border-radius:18px;padding:0 22px;background:rgba(255,255,255,.9);z-index:40;pointer-events:none}\n#sold.on{animation:stamp 1.1s ease-out}@keyframes stamp{0%{transform:translate(-50%,-50%) rotate(-12deg) scale(3);opacity:0}25%{transform:translate(-50%,-50%) rotate(-12deg) scale(1);opacity:1}80%{transform:translate(-50%,-50%) rotate(-12deg) scale(1)}100%{transform:translate(-50%,-50%) rotate(-12deg) scale(1);opacity:0}}\n/* 3D mall */\n#fl{position:absolute;top:calc(env(safe-area-inset-top,0px) + 66px);right:8px;background:var(--card);color:var(--ink);border-radius:16px;padding:4px 12px;font-weight:800;font-size:1rem;z-index:5}\n#dz{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 112px);font:inherit;font-weight:800;font-size:2rem;border:0;border-radius:28px;padding:12px 28px;background:#8b5cf6;color:#fff;box-shadow:0 8px 0 rgba(0,0,0,.25)}\n#dz:active{transform:translateX(-50%) translateY(5px)}\n#sx{position:absolute;top:calc(env(safe-area-inset-top,0px) + 8px);right:10px;z-index:35;font-size:1.6rem;border:0;border-radius:50%;width:52px;height:52px;background:var(--card);color:var(--ink)}\n#stu .nm,#stu .cols,#stu .ctl{z-index:34}";document.head.appendChild(st)})();
/* game2.js - 18+ Zone: Space Shoot (endless), Chef, Boutique, My 3D Shop. Needs game.js loaded first. */
(function(){
var $=function(s){return document.querySelector(s)},pick=function(a){return a[Math.random()*a.length|0]};
['ad','g7','g8','g9','g10'].forEach(function(id){var s=document.createElement('section');s.className='g';s.id=id;document.body.appendChild(s)});
function store(){$('#score').textContent='⭐ '+stars;try{localStorage.setItem('svs',stars)}catch(e){}}
function spend(n){if(stars<n)return 0;stars-=n;store();return 1}
function earn(n){stars+=n;store()}

/* menu entry (adult gate) */
[['g9','🏬','Saatvik Store','#ffd23f',1],['g7','🚀','Space Shoot','#54a0ff'],['g8','🍔','Chef','#ff9f43']].forEach(function(m,i){var b=document.createElement('button'),mn=$('#menu');b.style.cssText='background:'+m[3]+(m[4]?';grid-column:1/3':'');b.innerHTML='<b>'+m[1]+'</b>'+m[2];b.onclick=function(){open(m[0])};mn.insertBefore(b,mn.children[i])});
G.ad={start:function(){var g=document.createElement('div');g.className='grid';
 [['g7','🚀','Space Shoot'],['g8','🍔','Chef'],['g9','🏬','Saatvik Store']].forEach(function(m){var b=document.createElement('button');b.className='an';b.innerHTML=m[1]+'<small>'+m[2]+'</small>';
  b.onclick=function(){G.ad.stop();$('#ad').classList.remove('on');$('#'+m[0]).classList.add('on');cur=m[0];G[m[0]].start()};g.appendChild(b)});
 $('#ad').appendChild(g)},stop:function(){$('#ad').innerHTML=''}};

/* 7 space shoot: unlimited levels, each level needs more kills and gets faster */
G.g7={start:function(){var box=$('#g7');box.innerHTML='<canvas id="sc"></canvas>';var cv=$('#sc'),c=cv.getContext('2d'),W=cv.width=innerWidth,H=cv.height=innerHeight,x=W/2,B=[],E=[],lv=1,k=0,hp=3,t=0,run=true,EM=['👾','🛸','☄️','👽'];
 box.onpointermove=box.onpointerdown=function(e){x=e.clientX};c.textAlign='center';
 (function f(){if(!run)return;t++;c.fillStyle='#0b1030';c.fillRect(0,0,W,H);c.fillStyle='#fff';
  for(var i=0;i<40;i++)c.fillRect(i*67%W,(i*53+t*(1+i%3))%H,2,2);
  if(t%10==0)B.push({x:x,y:H-130});
  if(t%Math.max(12,58-lv*3)==0)E.push({x:30+Math.random()*(W-60),y:-30,v:1.4+lv*.2,h:1+(lv>4)+(lv>10)+(lv>20)});
  c.font='42px serif';c.fillText('🚀',x,H-90);
  B=B.filter(function(b){b.y-=9;c.fillStyle='#ffd23f';c.fillRect(b.x-2,b.y,4,14);return b.y>-20});
  E=E.filter(function(e){e.y+=e.v;c.font='38px serif';c.fillText(EM[lv%4],e.x,e.y);
   for(var j=0;j<B.length;j++)if(Math.abs(B[j].x-e.x)<24&&Math.abs(B[j].y-e.y)<24){B.splice(j,1);if(--e.h<=0){POP();if(++k>=lv*5){k=0;lv++;addStar();say('Level '+lv+'!')}return false}break}
   if(e.y>H-60){hp--;tone(200,60,.3);if(hp<=0){hp=3;lv=1;k=0;E=[];say('Try again!')}return false}return true});
  c.fillStyle='#fff';c.font='22px sans-serif';c.fillText('Level '+lv+'   ❤️ '+hp+'   '+k+'/'+lv*5,W/2,100);
  requestAnimationFrame(f)})();
 this.s=function(){run=false;box.innerHTML=''}},stop:function(){if(this.s)this.s()}};

/* 8 chef: timed burger orders, patty needs grilling */
G.g8={start:function(){var box=$('#g8'),ING={'🍞':'Bun','🥬':'Lettuce','🍅':'Tomato','🧀':'Cheese','🥩':'Patty'},keys=Object.keys(ING),n=0,ord,st,left,busy=0,tm;
 box.innerHTML='<div class="chef"><h2>Chef Counter</h2><div id="od"></div><div id="tm"></div><div id="stk"></div><div id="ig"></div></div>';
 keys.forEach(function(k){var b=document.createElement('button');b.innerHTML=k+'<small>'+ING[k]+'</small>';b.onclick=function(){add(k)};$('#ig').appendChild(b)});
 function draw(){if(!$('#od'))return;$('#od').textContent='Order '+(n+1)+':  '+ord.join(' ');$('#stk').textContent=st.join(' ')||'Empty plate';$('#tm').textContent='⏱ '+left+'s'}
 function nw(){var m=[];for(var i=0;i<2+Math.min(3,n/3|0);i++)m.push(pick(keys.slice(1)));ord=['🍞'].concat(m,['🍞']);st=[];left=25;draw()}
 function add(k){if(busy)return;function put(){if(k!=ord[st.length]){tone(200,90,.2);say('Wrong! Restart plate');st=[];draw();return}st.push(k);POP();draw();if(st.length==ord.length){n++;addStar();addStar();DING();say('Served! '+n+' done');nw()}}
  if(k=='🥩'){busy=1;$('#stk').textContent='🔥 Grilling...';setTimeout(function(){busy=0;put()},1000)}else put()}
 tm=setInterval(function(){if(--left<=0){say('Too slow!');n=Math.max(0,n-1);nw()}else if($('#tm'))$('#tm').textContent='⏱ '+left+'s'},1000);
 nw();this.s=function(){clearInterval(tm);box.innerHTML=''}},stop:function(){if(this.s)this.s()}};

/* 9 3D Mall: 2 floors, 4 rooms, lift. Design unlimited items, your shopkeeper shifts them to the rooms, customers walk in, take and pay. */
var PRO={gown:[[.28,2.85],[.4,2.6],[.3,2.0],[.55,1.4],[.95,.6],[1.2,.2]],aline:[[.28,2.85],[.4,2.6],[.3,2.0],[.5,1.5],[.75,.9]],party:[[.28,2.85],[.4,2.6],[.3,2.0],[.8,1.7],[1.0,1.3]],pencil:[[.28,2.85],[.4,2.6],[.3,2.0],[.43,1.5],[.38,.8]],mermaid:[[.28,2.85],[.4,2.6],[.3,2.0],[.42,1.3],[.4,.8],[.75,.45],[1.0,.2]]},
 CATS={dress:{e:'👗',n:'Dresses',t:['gown','aline','party','pencil','mermaid'],b:[40,25,30,28,42],f:0,x:-5.5,c:0xffd6e8},top:{e:'👚',n:'Tops',t:['tee','crop','tank','puff','blouse'],b:[15,14,12,18,20],f:0,x:5.5,c:0xd6ecff},
  shirt:{e:'👔',n:'Shirts',t:['shirt','stripe','kurta','polo','check'],b:[22,26,30,20,28],f:1,x:-5.5,c:0xd6ffe6},jewel:{e:'💎',n:'Jewels',t:['necklace','crown','ring','earring','bangle'],b:[35,50,30,25,28],f:1,x:5.5,c:0xfff0c2}},
 ADJ=['Rosa','Luna','Aria','Nila','Mira','Zara','Dia','Kavya','Ruby','Sia','Maya','Tara','Neha','Isha'],PC=[0xe63946,0x4ecdc4,0x8b5cf6,0xff9f43,0x54a0ff,0xff6b9d,0x2eb872],HR=[0x15100e,0x1b130f,0x241915,0x2b1b17];
function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function design(cat,n){var rn=rng(n*977+cat.charCodeAt(0)*131+cat.length),C=CATS[cat],k=rn()*5|0,h=rn()*360,col=function(hh,l){return new THREE.Color().setHSL((hh%360)/360,.65,l).getHex()};
 return{cat:cat,t:C.t[k],c1:col(h,.5),c2:col(h+(rn()<.5?35:0),.8),c3:rn()<.6?0xffd23f:0xffffff,n:ADJ[rn()*ADJ.length|0]+' '+C.t[k][0].toUpperCase()+C.t[k].slice(1),p:C.b[k]+(rn()*5|0)*5}}
function mk(d){var T=THREE,g=new T.Group(),t=d.t,c1=d.c1,c2=d.c2,c3=d.c3,m,i,ped=d.cat=='jewel'&&(t=='ring'||t=='earring'||t=='bangle'),
 S=function(c,r,mt){return new T.MeshStandardMaterial({color:c,roughness:r==null?.6:r,metalness:mt||0})},FB=new T.MeshStandardMaterial({vertexColors:true,roughness:.65,side:T.DoubleSide}),GD=S(c3,.3,.6),VEL=S(0x2b2d42,.9),FORM=S(d.cat=='jewel'?0x2b2d42:0xe9ddd0,.55),CH=S(0xcccccc,.3,.8);
 GD.side=T.DoubleSide;
 function add(geo,mat,x,y,z){var q=new T.Mesh(geo,mat);q.position.set(x,y,z);g.add(q);return q}
 function cy(a,b,h,mat,x,y,z){return add(new T.CylinderGeometry(a,b,h,32),mat,x,y,z)}
 function tor(R,tu,mat,x,y,z){var q=add(new T.TorusGeometry(R,tu,10,48),mat,x,y,z);q.rotation.x=Math.PI/2;return q}
 function V(a){return new T.SplineCurve(a.map(function(v){return new T.Vector2(v[0],v[1])})).getPoints(40)}
 function dg(pr,N,amp,f){var pts=V(pr),geo=new T.LatheGeometry(pts,64),p=geo.attributes.position,lo=pts[pts.length-1].y,hi=pts[0].y,cl=[],a=new T.Color(c1),b=new T.Color(c2),q,tt,s,j;
  for(j=0;j<p.count;j++){tt=(p.getY(j)-lo)/(hi-lo);s=1+amp*(1-tt)*(1-tt)*Math.sin(Math.atan2(p.getX(j),p.getZ(j))*N);p.setX(j,p.getX(j)*s);p.setZ(j,p.getZ(j)*s);q=f?(f(p.getX(j),p.getY(j),p.getZ(j))?b:a):b.clone().lerp(a,Math.min(1,tt*1.3));cl.push(q.r,q.g,q.b)}
  geo.setAttribute('color',new T.Float32BufferAttribute(cl,3));geo.computeVertexNormals();return geo}
 cy(.7,.75,.06,CH,0,.03,0);
 if(!ped){cy(.035,.035,1.4,CH,0,.76,0);add(new T.LatheGeometry(V([[.01,t=='crown'?2.95:3.1],[.09,3.04],[.1,2.9],[.3,2.8],[.42,2.62],[.35,2.35],[.3,2.05],[.37,1.8],[.33,1.5],[.01,1.46]]),40),FORM,0,0,0);if(t=='crown')add(new T.SphereGeometry(.28,24,18),FORM,0,3.2,0)}
 if(d.cat=='dress'){var ft=PRO[t],sl=t=='pencil'||t=='mermaid',e=ft[ft.length-1];add(dg(ft,16,sl?.025:.07),FB,0,0,0);
  if(!sl){var tp=ft.filter(function(v){return v[1]<=2.0}).map(function(v){return[v[0]*1.12,v[1]+.04]}),tm=S(c2,.5);tp.unshift([.33,2.04]);tm.transparent=true;tm.opacity=.55;tm.side=T.DoubleSide;tm.depthWrite=false;add(dg(tp,24,.1),tm,0,0,0)}
  tor(e[0]*1.02,.045,GD,0,e[1],0);tor(e[0]*.99,.03,GD,0,e[1]+.1,0);tor(.27,.025,GD,0,2.86,0);tor(.31,.05,GD,0,2.0,0);
  m=add(new T.ConeGeometry(.1,.26,12),GD,-.13,2.0,.35);m.rotation.z=-Math.PI/2;m=add(new T.ConeGeometry(.1,.26,12),GD,.13,2.0,.35);m.rotation.z=Math.PI/2;add(new T.SphereGeometry(.06,12,10),GD,0,2.0,.36);
  if(t=='aline'||t=='party')[-1,1].forEach(function(s){add(new T.SphereGeometry(t=='party'?.2:.15,16,12),S(c1),s*.4,2.7,0)})}
 else if(d.cat=='top'){var pr={tee:[[.3,2.86],[.43,2.62],[.38,2.2],[.4,1.9]],crop:[[.3,2.86],[.43,2.62],[.38,2.35],[.38,2.25]],tank:[[.3,2.86],[.43,2.62],[.38,2.2],[.4,1.9]],puff:[[.3,2.86],[.43,2.62],[.38,2.2],[.4,1.95]],blouse:[[.3,2.86],[.43,2.62],[.38,2.3],[.56,1.85]]}[t];add(dg(pr,12,.03),FB,0,0,0);tor(.3,.03,GD,0,2.86,0);
  if(t!='tank'&&t!='blouse')[-1,1].forEach(function(s){add(new T.SphereGeometry(t=='puff'?.2:.14,16,12),S(c1),s*.45,2.66,0)});if(t=='blouse')for(i=0;i<4;i++)add(new T.SphereGeometry(.03,8,8),S(0xffffff),0,2.55-i*.17,.42)}
 else if(d.cat=='shirt'){var kt=t=='kurta',sp=[[.3,2.86],[.45,2.62],[.42,2.1],[.44,kt?1.0:1.5]],fn=t=='stripe'?function(x,y,z){return Math.floor((Math.atan2(x,z)+3.15)*5)%2}:t=='check'?function(x,y,z){return(Math.floor((Math.atan2(x,z)+3.15)*5)+Math.floor(Math.abs(y)*5))%2}:t=='polo'?function(x,y,z){return y>2.7}:null;
  add(dg(sp,0,0,fn),FB,0,0,0);[-1,1].forEach(function(s){m=cy(.1,.08,1.0,S(c1),s*.55,2.28,0);m.rotation.z=s*.32;m=cy(.085,.085,.1,GD,s*.66,1.77,0);m.rotation.z=s*.32;m=add(new T.BoxGeometry(.2,.05,.14),S(t=='polo'?c2:0xffffff),s*.12,2.86,.24);m.rotation.z=s*.5});
  for(i=0;i<4;i++)add(new T.SphereGeometry(.03,8,8),S(0xffffff),0,2.6-i*.22,.45)}
 else{if(t=='necklace'){m=tor(.45,.03,GD,0,2.55,0);m.rotation.x=1.35;add(new T.OctahedronGeometry(.1),S(c1,.1,.3),0,2.28,.47);for(i=0;i<7;i++)add(new T.SphereGeometry(.045,10,8),S(c2,.2,.2),Math.sin((i-3)*.3)*.46,2.5,Math.cos((i-3)*.3)*.46)}
  if(t=='crown'){add(new T.CylinderGeometry(.3,.3,.16,32,1,true),GD,0,3.5,0);for(i=0;i<7;i++){var a=i*.898;add(new T.ConeGeometry(.06,.24,8),GD,Math.sin(a)*.3,3.68,Math.cos(a)*.3);add(new T.SphereGeometry(.035,8,8),S(c1,.1,.3),Math.sin(a)*.3,3.82,Math.cos(a)*.3)}}
  if(ped){cy(.55,.6,.7,VEL,0,.45,0);tor(.56,.03,GD,0,.8,0);
   if(t=='ring'){tor(.2,.055,GD,0,1.1,0).rotation.x=0;add(new T.OctahedronGeometry(.1),S(c1,.1,.3),0,1.36,0)}
   if(t=='earring')[-1,1].forEach(function(s){tor(.14,.025,GD,s*.3,1.2,0).rotation.x=0;add(new T.SphereGeometry(.07,12,10),S(c1,.1,.3),s*.3,.98,0)});
   if(t=='bangle')for(i=0;i<3;i++)tor(.3,.05,i%2?GD:S(c1,.3,.3),0,.95+i*.13,0)}}
 g.traverse(function(o){o.castShadow=true});return g}
function mkP(T,lady,a,b,hr,kind){var SK=[0xc68642,0xa9714b,0x8d5524,0xb98258,0xd9a066],M=function(c){return new T.MeshLambertMaterial({color:c})},sk=M(SK[Math.random()*5|0]),sh=M(a),tr=M(b),hm=M(hr),GL=new T.MeshStandardMaterial({color:0xffd23f,metalness:.7,roughness:.3}),WH=M(0xf6f1e4),g=new T.Group(),lg=[],ar=[],i,saree=lady&&Math.random()<.65,vesh=!lady&&(kind=='v'||(kind==null&&Math.random()<.5)),top=lady?(saree?tr:sh):sh,lgm=lady?(saree?sk:tr):(vesh?sk:WH);
 function bx(w,h,d,mat,x,y,z){var m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);return m}
 function sph(r,mat,x,y,z){var m=new T.Mesh(new T.SphereGeometry(r,10,8),mat);m.position.set(x,y,z);return m}
 function cyl(r,r2,h,mat,y){var m=new T.Mesh(new T.CylinderGeometry(r,r2,h,18),mat);m.position.y=y;return m}
 [-1,1].forEach(function(s){var l=new T.Group();l.position.set(s*.12,.8,0);l.add(bx(.16,.8,.16,lgm,0,-.4,0));l.add(bx(.18,.07,.27,M(lady?0xffd23f:0x3b2a20),0,-.77,.05));g.add(l);lg.push(l);
  var r=new T.Group();r.position.set(s*.34,1.45,0);r.add(bx(.14,.32,.14,top,0,-.16,0));r.add(bx(.12,.3,.12,sk,0,-.45,0));
  if(lady){var bg=new T.Mesh(new T.TorusGeometry(.075,.02,6,12),GL);bg.rotation.x=Math.PI/2;bg.position.y=-.4;r.add(bg);var b2=bg.clone();b2.position.y=-.34;r.add(b2)}
  g.add(r);ar.push(r)});
 g.add(bx(.5,.65,.28,top,0,1.15,0));g.add(sph(.2,sk,0,1.7,0));g.add(sph(.22,hm,0,1.76,-.04));g.add(sph(.025,M(0x111111),-.07,1.72,.185),sph(.025,M(0x111111),.07,1.72,.185));
 if(lady){var sc=saree?a:b;
  if(saree){g.add(cyl(.23,.46,.85,sh,.62));g.add(cyl(.455,.46,.07,GL,.24))}else g.add(cyl(.25,.4,.55,sh,.85));
  var sa=bx(.13,.8,.33,M(sc),.14,1.12,0);sa.rotation.z=.35;g.add(sa);g.add(bx(.46,.75,.04,M(sc),0,1.0,-.17));
  var br=cyl(.07,.04,.8,hm,1.2);br.position.z=-.2;g.add(br);for(i=0;i<5;i++)g.add(sph(.045,WH,-.16+i*.08,1.64,-.2));
  g.add(sph(.03,M(0xd62828),0,1.77,.195),sph(.03,GL,-.2,1.64,0),sph(.03,GL,.2,1.64,0))}
 else{if(vesh){g.add(cyl(.2,.33,.8,WH,.6));g.add(cyl(.335,.34,.07,tr,.25))}else g.add(cyl(.27,.33,.55,sh,.83));
  g.add(bx(.15,.03,.04,hm,0,1.65,.19));if(Math.random()<.4)g.add(sph(.025,M(0xd62828),0,1.77,.195))}
 g.userData={legs:lg,arms:ar};return g}
G.g9={start:function(){var box=$('#g9');
 if(!window.THREE){box.innerHTML='<p class="np">3D shop needs internet to load three.js.</p>';return}
 var T=THREE,W=innerWidth,H=innerHeight,r=new T.WebGLRenderer({antialias:true}),sc=new T.Scene(),cam=new T.PerspectiveCamera(50,W/H,.1,100),sc2=new T.Scene(),cam2=new T.PerspectiveCamera(50,W/H,.1,100),run=true,fl=[],rooms=[],cu=[],fx=[],tws=[],served=0,stu=0,sT=0,sCat='dress',sN=0,sD,sm,last=performance.now(),pad=[0,-4.7],ray=new T.Raycaster(),pln=new T.Plane(new T.Vector3(0,1,0),0);
 r.setSize(W,H);r.shadowMap.enabled=true;box.innerHTML='';box.appendChild(r.domElement);sc.background=new T.Color(0xcfe9ff);sc2.background=new T.Color(0xffe4f1);
 [sc,sc2].forEach(function(s){s.add(new T.HemisphereLight(0xffffff,0xd9c7b0,.8));var d=new T.DirectionalLight(0xffffff,.8);d.position.set(4,12,8);d.castShadow=true;d.shadow.mapSize.set(2048,2048);var c=d.shadow.camera;c.left=-16;c.right=16;c.top=12;c.bottom=-12;c.far=40;s.add(d)});
 function bx(p,w,h,d,c,x,y,z,o){var m=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshLambertMaterial({color:c,transparent:!!o,opacity:o||1}));m.position.set(x,y,z);m.castShadow=y>0&&h>.1&&h<3.3&&y<2.2;p.add(m);return m}
 function sp(p,txt,w,h,fs,sx,sy,x,y,z){var q=document.createElement('canvas');q.width=w;q.height=h;var c=q.getContext('2d');c.font='800 '+fs+'px sans-serif';c.textAlign='center';c.textBaseline='middle';c.lineWidth=8;c.strokeStyle='#fff';c.strokeText(txt,w/2,h/2);c.fillStyle='#2b2d42';c.fillText(txt,w/2,h/2);
  var s=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(q),transparent:true}));s.scale.set(sx,sy,1);s.position.set(x,y,z);p.add(s);return s}
 var wc=document.createElement('canvas');wc.width=wc.height=256;var wx=wc.getContext('2d');for(var wi=0;wi<4;wi++)for(var wj=0;wj<4;wj++){wx.fillStyle=(wi+wj)%2?'#efe6d8':'#e2d5c1';wx.fillRect(wi*64,wj*64,64,64)}wx.fillStyle='rgba(0,0,0,.14)';for(wi=0;wi<4;wi++){wx.fillRect(wi*64,0,2,256);wx.fillRect(0,wi*64,256,2)}var wood=new T.CanvasTexture(wc);wood.wrapS=wood.wrapT=T.RepeatWrapping;wood.repeat.set(5,3);
 [0,1].forEach(function(f){var g=new T.Group();sc.add(g);fl.push(g);var fm=bx(g,20,.2,12,0xffffff,0,-.1,-1.5);fm.material=new T.MeshStandardMaterial({map:wood,roughness:.22,metalness:.12});fm.receiveShadow=true;bx(g,20,5,.2,0xfff7e8,0,2.5,-6.1);bx(g,.2,5,12,0xfff7e8,-10,2.5,-1.5);bx(g,.2,5,12,0xfff7e8,10,2.5,-1.5);
  var p=new T.Mesh(new T.CylinderGeometry(.8,.8,.08,24),new T.MeshLambertMaterial({color:0xffd23f}));p.position.set(pad[0],.04,pad[1]);g.add(p);sp(g,'🛗 LIFT to Floor '+(f?1:2),512,96,60,3,.56,0,3.95,-4.2);
  Object.keys(CATS).forEach(function(k){var C=CATS[k];if(C.f!=f)return;bx(g,8.6,.05,6,C.c,C.x,.03,-3.1);sp(g,C.e+' '+C.n,512,110,76,4.2,.9,C.x,4.2,-5.9);bx(g,1.8,1,1.1,0x8b5a2b,C.x+3.8,.5,-1.5);bx(g,.5,.35,.4,0x2b2d42,C.x+3.8,1.15,-1.5);
   var rm={k:k,f:f,x:C.x,nx:0,slots:[-3,-1,1,3].map(function(o){var pd=new T.Mesh(new T.CylinderGeometry(.8,.85,.12,32),new T.MeshStandardMaterial({color:0xffffff,roughness:.3}));pd.position.set(C.x+o,.06,-5);pd.receiveShadow=true;g.add(pd);bx(g,1.8,3.2,.1,0xfdf3ff,C.x+o,1.7,-5.95);return{x:C.x+o,z:-5,d:null}})};rooms.push(rm)})});
 fl.forEach(function(g,f){var M=function(c){return new T.MeshLambertMaterial({color:c})},i,j;
  bx(g,20,.25,.12,0x8b5a2b,0,.12,-6);bx(g,.12,.25,12,0x8b5a2b,-9.9,.12,-1.5);bx(g,.12,.25,12,0x8b5a2b,9.9,.12,-1.5);bx(g,20,.12,.12,0xd4a017,0,4.9,-6);
  for(i=0;i<41;i++){var fm=new T.Mesh(new T.SphereGeometry(.14,8,6),M(i%2?0xff8c00:0xffc107));fm.position.set(-10+i*.5,4.7-.25*Math.sin((i%8)/8*Math.PI),-5.95);g.add(fm)}
  [-1,1].forEach(function(s){for(i=0;i<3;i++){bx(g,.55,.07,2.9,0x8b5a2b,s*9.65,.8+i*.85,-4);for(j=0;j<5;j++)bx(g,.4,.4,.5,[0xe63946,0xffd23f,0x2eb872,0x8b5cf6,0xff9f43,0x54a0ff,0xff6b9d][(i*3+j)%7],s*9.6,1.03+i*.85,-5+j*.6)}});
  [[-9,3.4],[9,3.4],[-2.2,3.4],[2.2,3.4]].forEach(function(p){var pot=new T.Mesh(new T.CylinderGeometry(.3,.22,.5,14),M(0xb5532f));pot.position.set(p[0],.25,p[1]);g.add(pot);for(j=0;j<4;j++){var lf=new T.Mesh(new T.SphereGeometry(.3-j*.04,10,8),M(j%2?0x2e8b57:0x3cb371));lf.position.set(p[0]+(j%2?.08:-.08),.75+j*.22,p[1]);g.add(lf)}});
  sp(g,"SAATVIK STORE",700,110,72,5.2,.82,0,4.3,-5.9);
  rooms.filter(function(m){return m.f==f}).forEach(function(rm){sp(g,'💳 BILLING',320,80,52,1.7,.45,rm.x+3.8,1.9,-1.5)});
  if(f==0)[[1.2,0xff6b9d],[.9,0xffd23f],[.6,0x4ecdc4],[.3,0xe63946]].forEach(function(r,k){var c=new T.Mesh(new T.CylinderGeometry(r[0],r[0],.02,32),M(r[1]));c.position.set(0,.03+k*.01,2.4);g.add(c)})});
 fl.forEach(function(g,f){var i,CL=[0xe63946,0xffd23f,0x2eb872,0x8b5cf6,0xff9f43,0x54a0ff,0xff6b9d];
  bx(g,2.2,.02,6,0x8e1b2c,0,.02,1.2);
  bx(g,8.5,2.2,.05,0xbfe9ff,-5.75,1.1,4.4,.13);bx(g,8.5,2.2,.05,0xbfe9ff,5.75,1.1,4.4,.13);
  [-10,-5.75,-1.5,1.5,5.75,10].forEach(function(x){bx(g,.1,2.4,.1,0xd4a017,x,1.2,4.4)});bx(g,20,.08,.08,0xd4a017,0,2.2,4.4);
  if(f==0){bx(g,2,.02,1,0x8b1a1a,0,.035,3.9);sp(g,'🙏 WELCOME',512,96,60,2.6,.5,0,.4,3.9)}
  function rack(x,z,h){bx(g,.05,1.5,.05,0x999999,x-.62,.75,z);bx(g,.05,1.5,.05,0x999999,x+.62,.75,z);bx(g,1.3,.05,.05,0xdddddd,x,1.5,z);bx(g,.06,.04,.6,0x999999,x-.62,.02,z);bx(g,.06,.04,.6,0x999999,x+.62,.02,z);for(var k=0;k<7;k++)bx(g,.1,h,.5,CL[(k+f*2+(x>0?1:0))%7],x-.5+k*.17,1.46-h/2,z)}
  function showcase(x,z){bx(g,1.2,.9,.6,0x2b2d42,x,.45,z);bx(g,1.2,.7,.6,0xcfeaff,x,1.25,z,.3);for(var k=0;k<5;k++){var m=new T.Mesh(new T.SphereGeometry(.07,10,8),new T.MeshStandardMaterial({color:0xffd23f,metalness:.8,roughness:.25}));m.position.set(x-.45+k*.22,.98,z);g.add(m)}}
  rooms.filter(function(m){return m.f==f}).forEach(function(rm){
   [-2,0,2].forEach(function(o){if(rm.k=='jewel')showcase(rm.x+o,-2.2);else rack(rm.x+o,-2.2,{dress:.95,top:.5,shirt:.7}[rm.k])});
   var cs=mkP(T,rm.k=='dress'||rm.k=='jewel',pick(PC),pick(PC),pick(HR));cs.position.set(rm.x+3.8,0,-2.45);g.add(cs)})});
 var ldr=[],lu=1,lt=1,shake=0;
 function ride(q,to){q.push({fn:function(){lt=0;tone(500,300,.3,'sine')}},{w:.9},{fn:function(){shake=1.4;tone(300,600,1.2,'sine');say(to?'Going up ⬆️':'Going down ⬇️')}},{w:1.4},{f:to},{fn:function(){lt=1;DING();say('Floor '+(to+1)+' 🛗')}},{w:.6})}
 fl.forEach(function(g){
  ldr.push([-1,1].map(function(s){var d=bx(g,1.05,3.2,.08,0xdfe6ee,s*.55,1.6,-3.8,.45);d.userData.s=s;return d}));
  [-1,1].forEach(function(s){bx(g,.12,3.3,2.2,0xb8c4d0,s*1.15,1.65,-4.9)});
  bx(g,2.5,.35,.15,0xd4a017,0,3.45,-3.8);bx(g,.5,.95,.1,0x2b2d42,1.5,1.35,-3.75);sp(g,'▲ 2',128,64,40,.5,.25,1.5,1.58,-3.66);sp(g,'▼ 1',128,64,40,.5,.25,1.5,1.15,-3.66);bx(g,2.2,.04,2.1,0xeeeeee,0,.03,-4.85);
  bx(g,20,.1,12,0xffffff,0,5.05,-1.5,.2);
  [-3,0,3].forEach(function(z){bx(g,20,.12,.14,0xd4a017,0,5,z)});
  [-7.5,-2.5,2.5,7.5].forEach(function(x){[-4.5,-1.5,1.5].forEach(function(z){var l=new T.Mesh(new T.BoxGeometry(1.8,.06,.9),new T.MeshBasicMaterial({color:0xfffbe0}));l.position.set(x,5,z);g.add(l)})})});
 var sps=[];
 fl.forEach(function(g,f){var i,x;
  bx(g,5.6,.95,.04,0xfffdf5,0,4.3,-5.97);bx(g,5.8,1.12,.03,0xd4a017,0,4.3,-5.99);
  [-5.5,5.5].forEach(function(x){var L=new T.PointLight(0xffe2b0,.55,16,1.5);L.position.set(x,4.3,-2);g.add(L)});
  [[-9.86,.6,'👗',0xffd6e8],[-9.86,2.6,'💎',0xfff0c2],[9.86,.6,'👔',0xd6ffe6],[9.86,2.6,'👚',0xd6ecff]].forEach(function(o){bx(g,.08,1.5,1.2,0xd4a017,o[0],2.2,o[1]);bx(g,.1,1.3,1,o[3],o[0]*.998,2.2,o[1]);sp(g,o[2],128,128,90,.9,.9,o[0]*.96,2.2,o[1])});
  var P=new Float32Array(240);for(i=0;i<240;i+=3){P[i]=Math.random()*18-9;P[i+1]=.3+Math.random()*4.5;P[i+2]=Math.random()*10-6}
  var gm=new T.BufferGeometry();gm.setAttribute('position',new T.BufferAttribute(P,3));var pt=new T.Points(gm,new T.PointsMaterial({color:0xffe27a,size:.13,transparent:true,opacity:.8,depthWrite:false}));g.add(pt);sps.push(pt);
  rooms.filter(function(m){return m.f==f}).forEach(function(rm){rm.slots.forEach(function(s){var c=new T.Mesh(new T.CylinderGeometry(1.5,1.5,.01,32),new T.MeshBasicMaterial({color:0xfff0b0,transparent:true,opacity:.3,depthWrite:false}));c.position.set(s.x,.04,s.z+.2);g.add(c)})})});
 function put(rm,i,d,g0){var s=rm.slots[i];if(s.g){fl[rm.f].remove(s.g,s.tag)}s.d=d;s.g=g0||mk(d);s.g.scale.setScalar(.62);s.g.position.set(s.x,.12,s.z);s.g.rotation.y=0;if(!g0)fl[rm.f].add(s.g);s.tag=sp(fl[rm.f],'⭐'+d.p,160,64,44,.9,.36,s.x,.12,s.z+1)}
 rooms.forEach(function(rm){put(rm,0,design(rm.k,0));put(rm,1,design(rm.k,1));rm.nx=2});
 function inR(){return 0}
 function P(q,cp,x,z){if(inR(cp[0],cp[1])||inR(x,z)){q.push({p:[cp[0],.5]},{p:[x,.5]})}q.push({p:[x,z]});cp[0]=x;cp[1]=z}
 function anim(a,mv,dt){a.t=(a.t||0)+dt*(mv?9:0);var u=a.g.userData,s=mv?Math.sin(a.t)*.7:0;u.legs[0].rotation.x=s;u.legs[1].rotation.x=-s;u.arms[0].rotation.x=-s;u.arms[1].rotation.x=s}
 function upd(a,dt){var s=a.q[0],mv=0;if(s){if(s.p){var dx=s.p[0]-a.x,dz=s.p[1]-a.z,d=Math.hypot(dx,dz),st=3.2*dt;if(d<st){a.x=s.p[0];a.z=s.p[1];a.q.shift()}else{a.x+=dx/d*st;a.z+=dz/d*st;a.g.rotation.y=Math.atan2(dx,dz);mv=1}}
  else if(s.f!=null){a.f=s.f;fl[s.f].add(a.g);a.q.shift()}else if(s.w!=null){s.w-=dt;if(s.w<=0)a.q.shift()}else if(s.fn){a.q.shift();s.fn(a)}}
  a.g.position.set(a.x,0,a.z);anim(a,mv,dt)}
 function ftx(txt,x,z,f){var s=sp(fl[f],txt,256,80,56,1.8,.56,x,2.6,z);fx.push({s:s,t:0,f:f})}
 var pl={g:mkP(T,0,0x3a7bd5,0xb5121b,0x15100e,'v'),x:0,z:1.8,f:0,q:[],cd:0};
 var bxm=new T.Mesh(new T.BoxGeometry(.6,.45,.5),new T.MeshLambertMaterial({color:0xc58b4a}));bxm.position.set(0,1.15,.5);bxm.visible=false;pl.g.add(bxm);fl[0].add(pl.g);sp(pl.g,'Saatvik',256,64,48,1.3,.32,0,2.65,0);
 function cust(){var rs=rooms.filter(function(m){return m.slots.some(function(s){return s.d})});if(!rs.length)return;var rm=pick(rs),sl=pick(rm.slots.filter(function(s){return s.d})),lady=Math.random()<.5,a={g:mkP(T,lady,pick(PC),pick(PC),pick(HR)),x:0,z:3.6,f:0,q:[],price:0},cp=[0,3.6];fl[0].add(a.g);
  if(rm.f){P(a.q,cp,pad[0],pad[1]);a.q.push({f:1})}P(a.q,cp,sl.x,-3.7);a.q.push({w:.5},{fn:function(a){if(sl.d){a.price=sl.d.p;fl[rm.f].remove(sl.g,sl.tag);sl.d=null;sl.g=null;var b=new T.Mesh(new T.BoxGeometry(.3,.35,.15),new T.MeshLambertMaterial({color:pick(PC)}));b.position.set(.3,.8,.15);a.g.add(b)}}});
  P(a.q,cp,rm.x+3.8,.3);a.q.push({fn:function(a){if(a.price){earn(a.price);served++;POP();ftx('+⭐'+a.price,a.x,a.z,a.f);hud()}}},{w:.9});
  if(rm.f){P(a.q,cp,pad[0],pad[1]);a.q.push({f:0})}P(a.q,cp,0,3.7);a.q.push({fn:function(a){a.done=1;fl[a.f].remove(a.g)}});cu.push(a)}
 function hud(){$('#fl').textContent='🏬 Saatvik Store · Floor '+(pl.f+1)+'   🧍 Served '+served}
 box.insertAdjacentHTML('beforeend','<div id="fl"></div><button id="dz">🎨 DESIGN</button><div id="stu" style="display:none"><button id="sx">✖</button><div class="nm" id="snm"></div><div class="cols" id="stt"></div><div class="ctl"><button data-s="p">◀</button><button class="sell" data-s="s"><span style="font-size:1.9rem;display:block;line-height:1.1">📦</span>SEND TO SHOP</button><button data-s="n">▶</button></div></div>');
 $('#stt').innerHTML=Object.keys(CATS).map(function(k){return '<button data-k="'+k+'">'+CATS[k].e+'<small>'+CATS[k].n+'</small></button>'}).join('');
 var fg=new T.Mesh(new T.CylinderGeometry(2.4,2.4,.1,40),new T.MeshLambertMaterial({color:0xffffff}));sc2.add(fg);cam2.position.set(0,2.6,8);cam2.lookAt(0,2.2,0);
 function sb(){if(sm)sc2.remove(sm);sD=design(sCat,sN);sm=mk(sD);sm.scale.setScalar(1.15);sc2.add(sm);$('#snm').innerHTML=CATS[sCat].e+' <b>'+sD.n+'</b> ⭐'+sD.p;[].forEach.call(document.querySelectorAll('#stt button'),function(b){b.className=b.dataset.k==sCat?'sel':''})}
 function mkBox(x,z,f){var g=new T.Group(),m=new T.MeshStandardMaterial({color:0xc58b4a,roughness:.9}),b=new T.Mesh(new T.BoxGeometry(.9,.6,.9),m),tp=new T.Mesh(new T.BoxGeometry(.18,.02,.9),new T.MeshStandardMaterial({color:0xefe2b8}));b.position.y=.3;tp.position.y=.62;g.add(b);g.add(tp);g.userData.fp=[];
  [[0,.45,.9,.45,0,-.225,'x',1],[0,-.45,.9,.45,0,.225,'x',-1],[-.45,0,.45,.9,.225,0,'z',1],[.45,0,.45,.9,-.225,0,'z',-1]].forEach(function(o){var p=new T.Group(),q=new T.Mesh(new T.BoxGeometry(o[2],.03,o[3]),m);p.position.set(o[0],.6,o[1]);q.position.set(o[4],0,o[5]);p.add(q);g.add(p);g.userData.fp.push({p:p,ax:o[6],s:o[7]})});
  g.traverse(function(o){o.castShadow=true});g.position.set(x,0,z);fl[f].add(g);return g}
 function send(){var rm=rooms.filter(function(m){return m.k==sCat})[0],i=rm.nx++%4,sl=rm.slots[i],d=sD,cp=[pl.x,pl.z];if(pl.q.length){say('Busy, wait!');return}
  pl.q.push({fn:function(){bxm.visible=true}});if(rm.f!=pl.f){P(pl.q,cp,pad[0],pad[1]);ride(pl.q,rm.f)}P(pl.q,cp,sl.x,-2.5);
  pl.q.push({fn:function(a){a.g.rotation.y=Math.PI;bxm.visible=false;var bg=mkBox(sl.x,sl.z+1.4,rm.f),it=null;
   tw(3,function(u){bg.position.y=.9*Math.max(0,1-u*5);var o=Math.max(0,Math.min(1,(u-.2)*5));bg.userData.fp.forEach(function(q){q.p.rotation[q.ax]=q.s*o*2.1});
    if(u>.4){if(!it){it=mk(d);it.scale.setScalar(.1);fl[rm.f].add(it)}var v=Math.min(1,(u-.4)/.4);it.position.set(sl.x,.7*(1-v)+.12*v+Math.sin(Math.PI*v)*1.8,sl.z+1.4*(1-v));it.scale.setScalar(.1+.52*Math.min(1,v*1.4));it.rotation.y=v*6.28}
    if(u>.8)bg.scale.setScalar(Math.max(.01,1-(u-.8)*5))},function(){fl[rm.f].remove(bg);put(rm,i,d,it);DING();say(d.n+' is on the rack!')})}},{w:3.2});
  stu=0;$('#stu').style.display='none';$('#dz').style.display='block';say('Carrying the box to '+CATS[sCat].n+'...')}
 function tw(d,fn,done){tws.push({d:d,t:0,fn:fn,done:done})}
 $('#dz').onclick=function(){if(pl.q.length){say('Wait, shifting!');return}stu=1;$('#stu').style.display='block';this.style.display='none';sb()};
 $('#sx').onclick=function(){stu=0;$('#stu').style.display='none';$('#dz').style.display='block'};
 box.onclick=function(e){var b=e.target.closest('#stu button');if(!b||!b.dataset)return;var d=b.dataset;if(d.k){sCat=d.k;sN=0}else if(d.s=='p')sN--;else if(d.s=='n')sN++;else if(d.s=='s'){send();return}POP();sb()};
 var jv=[0,0],ps=null,dr=0,wx=0,wz=0,keys={},dom=r.domElement;dom.style.touchAction='none';
 box.insertAdjacentHTML('beforeend','<div id="jr" style="position:fixed;display:none;width:90px;height:90px;border-radius:50%;background:rgba(255,255,255,.25);border:3px solid rgba(255,255,255,.7);pointer-events:none;z-index:5"><div id="jk" style="position:absolute;left:25px;top:25px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.85)"></div></div>');
 var jr=$('#jr'),jk=$('#jk');
 var bs='font:inherit;font-weight:800;font-size:1.3rem;border:0;border-radius:14px;padding:10px 16px;color:#2b2d42';
 box.insertAdjacentHTML('beforeend','<div id="lp" style="position:fixed;display:none;right:14px;top:40%;flex-direction:column;gap:10px;z-index:6;background:rgba(43,45,66,.88);padding:10px;border-radius:20px"><div style="color:#fff;font-weight:800;text-align:center">🛗 Lift</div><button data-f="1" style="'+bs+'">⬆ Floor 2</button><button data-f="0" style="'+bs+'">⬇ Floor 1</button></div>');
 $('#lp').onclick=function(e){var b=e.target.closest('button');if(!b||pl.q.length)return;var f=+b.dataset.f;if(f==pl.f){say('You are on Floor '+(f+1));return}P(pl.q,[pl.x,pl.z],pad[0],pad[1]);ride(pl.q,f)};
 function tap(e){if(stu||pl.q.length)return;ray.setFromCamera({x:e.clientX/W*2-1,y:-(e.clientY/H)*2+1},cam);var p=new T.Vector3();if(ray.ray.intersectPlane(pln,p))P(pl.q,[pl.x,pl.z],Math.max(-9.5,Math.min(9.5,p.x)),Math.max(-5.4,Math.min(3.4,p.z)))}
 dom.onpointerdown=function(e){ps={x:e.clientX,y:e.clientY};dr=0;try{dom.setPointerCapture(e.pointerId)}catch(x){}};
 dom.onpointermove=function(e){if(!ps)return;var dx=e.clientX-ps.x,dy=e.clientY-ps.y,l=Math.hypot(dx,dy)||1;if(l>14)dr=1;if(dr){var k=Math.min(1,l/70);jv=[dx/l*k,dy/l*k];jr.style.display='block';jr.style.left=(ps.x-45)+'px';jr.style.top=(ps.y-45)+'px';jk.style.transform='translate('+dx/l*Math.min(l,45)+'px,'+dy/l*Math.min(l,45)+'px)'}};
 dom.onpointerup=dom.onpointercancel=function(e){if(ps&&!dr&&e.type=='pointerup')tap(e);ps=null;dr=0;jv=[0,0];jr.style.display='none'};
 var kd=function(e){keys[e.key.toLowerCase()]=1},ku=function(e){keys[e.key.toLowerCase()]=0};addEventListener('keydown',kd);addEventListener('keyup',ku);
 dom.addEventListener('wheel',function(e){e.preventDefault();wz+=e.deltaY*.012;wx+=e.deltaX*.012},{passive:false});
 var spT=2;hud();cam.position.set(0,8,12);
 (function f(){if(!run)return;var n=performance.now(),dt=Math.min(.05,(n-last)/1000);last=n;
  var dd=Math.hypot(pl.x-pad[0],pl.z-pad[1]),lp=$('#lp');lp.style.display=(dd<2.8&&!stu&&!pl.q.length)?'flex':'none';[].forEach.call(lp.children,function(b){b.style.background=b.dataset.f==pl.f?'#ffd23f':'#fff'});
  var jm=0;if(!pl.q.length&&!stu){var jx=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0)+jv[0],jz=(keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0)+jv[1],jl=Math.hypot(jx,jz),wsx=wx*Math.min(1,dt*10),wsz=wz*Math.min(1,dt*10);wx-=wsx;wz-=wsz;if(jl>1){jx/=jl;jz/=jl}
  var mx=jx*3.2*dt+wsx,mz=jz*3.2*dt+wsz;if(Math.abs(mx)+Math.abs(mz)>.0005){pl.x=Math.max(-9.5,Math.min(9.5,pl.x+mx));pl.z=Math.max(-5.4,Math.min(3.4,pl.z+mz));pl.g.rotation.y=Math.atan2(mx,mz);jm=1}}
  upd(pl,dt);if(jm)anim(pl,1,dt);cu.forEach(function(a){upd(a,dt)});cu=cu.filter(function(a){return!a.done});
  if((spT-=dt)<=0){spT=6;if(cu.length<3)cust()}
  tws=tws.filter(function(o){o.t+=dt;var u=Math.min(1,o.t/o.d);o.fn(u);if(u>=1){o.done&&o.done();return false}return true});
  fx=fx.filter(function(o){o.t+=dt;o.s.position.y+=dt*.8;if(o.t>1.4){fl[o.f].remove(o.s);return false}return true});
  fl.forEach(function(g,i){g.visible=i==pl.f});$('#fl').textContent='🏬 Saatvik Store · Floor '+(pl.f+1)+'   🧍 Served '+served;
  cam.position.x+=(pl.x*.8-cam.position.x)*.08;cam.position.z+=(pl.z+9-cam.position.z)*.08;cam.position.y=6.8+Math.sin(n*.06)*.07*Math.min(1,shake);shake=Math.max(0,shake-dt);lu+=(lt-lu)*Math.min(1,dt*5);ldr.forEach(function(D){D.forEach(function(d){var c=1-.85*lu;d.scale.x=c;d.position.x=d.userData.s*(1.1-.525*c)})});cam.lookAt(pl.x*.8,1,pl.z-1);
  rooms.forEach(function(rm){if(rm.f==pl.f)rm.slots.forEach(function(s){if(s.g)s.g.rotation.y=Math.sin(n*.0012+s.x)*.45})});sps.forEach(function(P0){var a=P0.geometry.attributes.position.array;for(var i=1;i<a.length;i+=3){a[i]+=dt*.15;if(a[i]>4.8)a[i]=.3}P0.geometry.attributes.position.needsUpdate=true});if(sm)sm.rotation.y+=.015;r.render(stu?sc2:sc,stu?cam2:cam);requestAnimationFrame(f)})();
 this.s=function(){removeEventListener('keydown',kd);removeEventListener('keyup',ku);run=false;r.dispose();box.innerHTML=''}},stop:function(){if(this.s)this.s()}};
})();
