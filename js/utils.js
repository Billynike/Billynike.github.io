if(_i18n={"zh-cn":["确定","取消","是","否","设置","联机","游戏","界面","键位","存档","关于","玩家名称：","修改","粒子效果","语言","设置将在重启后生效，是否立即重启？","平滑缩放","深色模式","退出回放","播放速度","联机状态下无法回放录像","录像加载失败","录像文件损坏","本地存档","导入","删除存档后您需要重新开始游戏，确定要删除？","确认删除该存档？","确认切换到该存档？","切换失败，请尝试刷新存档列表","无","创建日期","更新日期","时间","死亡","成就","提示信息","存档加载失败","连接服务器","服务器连接成功","当前服务器连接人数已满","服务器连接失败","加载中","大厅","确认加入此房间？","获取房间数据失败","普通模式","竞技模式","合作模式","连接中","私有房间","按空格键输入联机对话，回车键发送...","在线玩家","连接断开，尝试重连中...","连接失败","加入房间","离开房间","当前存档：","已存档","未连接","联机服务器","选择联机模式","新建","新建一个公开联机房间，任何人都可以加入","请输入房间名称：","创建","加入","输入相同的密码即可加入同样的私有联机房间","使用并复制建议的密码：","请输入房间密码（仅包含数字和字母）：","无效的密码","返回","公开房间","退出联机","确定退出联机？","游戏资源加载失败","游戏内容获取失败","窗口大小","全屏模式","退出","加载错误：无法打开数据库","请设置您的玩家名称：","错误提示","选择","点击开始加载游戏","渲染引擎崩溃，请检查计算机内存/显存使用情况，尝试重启应用","房间内容解析错误","游戏暂停","玩家：","时间：","死亡：","渲染引擎初始化失败","确定要重新开始游戏？","新开存档","覆盖当前存档","错误来源：","物体","时间轴","节点","动作组","创建物体","超出最大循环次数限制","，这可能需要一些时间","全局音量","音乐/音效相对音量","死亡/暂停后停止音乐播放","左","右","上","下","跳跃","射击","重试","拉伸","原始","进度","已通关","未知","，请检查是否存在死循环","合作模式注意事项：","玩家间将共享游戏存档","存档是临时的，不会录像，不会保存","服务器有新存档后，第一次按R将回到服务器最新存档，再次按R回到自己本地的存档，按Ctrl+R强制回到服务器最新存档","知道了","正在下载音乐文件","正在下载字体文件","合作模式下无法切换存档"],"en-us":[["OK","Yes"],["Cancel","No"],"Yes","No","Settings","Online","Game","Interface","Keymap","Save","About","Player Name: ","Edit","Particle Effects","Language","A restart is required for changes to take effect. Restart now?","Smooth Scaling","Dark Mode","Exit","Replay Speed","Cannot start replay in online mode.","Failed to load replay.","Replay files are corrupted.","Save List","Import","Deleting the save will require you to restart the game. Are you sure you want to delete it?","Are you sure you want to delete this save?","Are you sure you want to switch to this save?","Failed to load save data. Please try refreshing the save list.","Empty","Created at","Updated at","Time","Death","Achievements","Notice","Failed to load save data.","Connecting","Connection established.","The server is currently full.","Failed to connect to server.","Loading...","Lobby","Are you sure you want to join this room?","Failed to get room data.","Basic Mode","Race Mode","Co-op Mode","Connecting","Private room","Press SPACE to type in chat, ENTER to send...","Online players","Connection lost, reconnecting...","Disconnected","joined","left","Current save: ","saved","Not connected","Server","Select online mode","New","Create a new public room where anyone can join.","Please enter the name for the room:","Create","Join","Note: Enter the same password to join the same private room.","Use and copy the suggested password:","Please enter the room password (numbers and letters only):","Invalid password","Back","Public room","Exit","Are you sure you want to exit online mode?","Failed to load resources.","Failed to load game data.","Window Size","Fullscreen","Exit","Error: Cannot open database.","Enter your name:","Error","Select","Click to start loading the game","Render process crashed. Please try restarting the game.","Cannot parse room","Paused","Player: ","Time: ","Death: ","Failed to initialize rr.","Are you sure you want to restart the game?","New Save","Overwrite Current Save","Error from: ","Object","Timeline","Node","","","Maximum loop count exceeded.",", this might take a moment.","Global Volume","Music/Sound Volume Balance","Stop Music on Death/Pause","Left","Right",["Up","Top"],"Down","Jump","Shoot","Retry","Stretch","Original","Progress","Cleared","Unknown","","Co-op Mode Notes:","Players will share the saves.","Saves are temporary and replays are disabled.","Pressing R once will switch to the latest server save, and pressing R again will revert to your local save. Alternatively, you can press Ctrl+R to instantly synchronize to the latest server save.","OK","Downloading music files","Downloading font files","Cannot switch saves in co-op mode."]},_lang=localStorage.getItem("lang"),!_lang){switch(navigator.language.toLowerCase()){case"zh":case"zh-cn":_lang="zh-cn";break;default:_lang="en-us"}localStorage.setItem("lang",_lang)}const i18n=(e,t)=>{let s=_i18n[_lang][e]||_i18n["zh-cn"][e];return Array.isArray(s)?s[t]:s},IDB=class{constructor(e,t,s){this.rd=[],this.cls=s.split(",").map(e=>{let t=e.split("."),s=t[0],i={a:"+"===s[0]};return i.a&&(s=s.slice(1)),i.n=s,t.length>1&&(i.k=t.slice(1)),i});let i=indexedDB.open(e,t);i.onerror=e=>{console.error(i.error),UI.$a(`${i18n(79,0)}`)},i.onsuccess=()=>{this.db=i.result,this.rd.for(e=>e()),this.rd=null,Object.freeze(this)},i.onupgradeneeded=e=>{this.db=i.result,this.cls.for(e=>{if(this.db.objectStoreNames.contains(e.n)){let t=i.transaction.objectStore(e.n),s=t.indexNames;e.k?.for(e=>{s.contains(e)||t.createIndex(e,e.includes("+")?e.split("+"):e)});for(let i of s)e.k?.includes(i)||t.deleteIndex(i)}else{let t=this.db.createObjectStore(e.n,{keyPath:"id",autoIncrement:e.a});e.k?.for(e=>t.createIndex(e,e.includes("+")?e.split("+"):e))}})}}r$(e){this.rd?this.rd.push(e):e()}open(e,t){return this.db.transaction(e,t?"readwrite":"readonly").objectStore(e)}trans(e,t,s,i,n){let o=this.db.transaction(e,t?"readwrite":"readonly",n);return o.oncomplete=s,o.onerror=e=>i(o.error),o.objectStore(e)}put(e,t){return new Promise((s,i)=>{let n=this.db.transaction(e,"readwrite"),o=null;n.objectStore(e).put(t).onsuccess=e=>o=e,n.oncomplete=()=>{s(o)},n.onerror=e=>i(n.error)})}upd(e,t,s){return new Promise((i,n)=>{let o=this.trans(e,1,i,n),r=o.get(t);r.onsuccess=i=>{r.result?(s(r.result),o.put(r.result)):n(`Cannot get ${e}/${t}`)}})}clear(e){return new Promise((t,s)=>{let i=this.open(e,1).clear();i.onsuccess=t,i.onerror=e=>s(i.error)})}del(e,t){return new Promise((s,i)=>{let n=this.open(e,1).delete(t);n.onsuccess=s,n.onerror=e=>i(n.error)})}delAll(e,t){return new Promise((s,i)=>{if(!t.length)return s();let n=this.trans(e,1,s,i);t.for(e=>n.delete(e))})}get(e,t){return new Promise((s,i)=>{let n=this.open(e).get(t);n.onsuccess=o=>{n.result?s(n.result):i(`Cannot get ${e}/${t}`)},n.onerror=e=>i(n.error)})}query(e,t){return{idb:this,eq(e){return this.r=IDBKeyRange.only(e),this},lt(e,t){return this.r=IDBKeyRange.upperBound(e,t),this},limit(e){return this.l=e,this},filter(e){return this.f=e,this},t:()=>t?this.open(e).index(t):this.open(e),find(e=!0){return new Promise((t,s)=>{let i=[],n=this.t().openCursor(this.r,e?"next":"prev");n.onsuccess=()=>{let e=n.result;if(e){if((!this.f||this.f(e.value))&&(i.push(e.value),this.l&&i.length>=this.l))return t(i);e.continue()}else t(i)},n.onerror=()=>s(n.error)})},ids(e=!0){return new Promise((t,s)=>{let i=[],n=this.t().openKeyCursor(this.r,e?"next":"prev");n.onsuccess=()=>{let e=n.result;e?(i.push(e.primaryKey),e.continue()):t(i)},n.onerror=()=>s(n.error)})},_o(e){return new Promise((t,s)=>{let i=this.t()[e](this.r,this.l);i.onsuccess=()=>t(i.result),i.onerror=()=>s(i.error)})},get(){return this._o("getAll")},del(){return this._o("getAllKeys").then(t=>this.idb.delAll(e,t))}}}},CIW=new IDB("CIW",3,"save.g,snd,bgm,font");{let e=Array.prototype;e.for=function(e){for(let t=0,s=this.length;t<s;t++)e(this[t],t)},e.forv=function(e){for(let t=this.length;t--;)e(this[t])},e.add=function(e){if(!this.includes(e))return this.push(e)};let t=HTMLElement.prototype;t.ap=function(...e){return e.for(e=>this.append(e)),e[0]},t._c=function(...e){return e.for(e=>this.append(e)),this},t.tx=function(e){return this.innerText=e,this},t.hC=function(e){return this.classList.contains(e)},t.aC=function(e){this.classList.add(e)},t.rC=function(e){this.classList.remove(e)},t.pS=function(e=1){let t=this;for(;e--;)t=t.previousSibling;return t},t.nS=function(e=1){let t=this;for(;e--;)t=t.nextSibling;return t},t._h=function(){this.style.display="none"},t._s=function(){this.style.display=""},Object.defineProperties(t,{ch:{get(){return this.children}},pN:{get(){return this.parentNode}}})}const doc=document,$=e=>doc.getElementById(e),$c=(e,t=doc)=>[...t.getElementsByClassName(e)],$t=(e,t=doc)=>[...t.getElementsByTagName(e)],El=(e,t,s)=>{let i=doc.createElement(e);return t&&(i.className=t),s&&Object.assign(i,s),i},css=(e,t,s=-1,i)=>{if(e.style)Object.assign(e.style,t);else for(let n=e.length;n--;)Object.assign(e[n].style,n===s?i:t)},k_=(e,t)=>{for(const s of t)delete e[s]},ac=(e,t="")=>css(e,{color:t,pointerEvents:""}),dac=(e,t="#aaa")=>css(e,{color:t,pointerEvents:"none"}),$RD=new Promise(e=>{css($("wrap"),{opacity:1,pointerEvents:"auto"}),setTimeout(()=>CIW.r$(e),500)}),$M=Object.freeze({_ids:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()",id(e,t,s="0"){let i=e?"":"0";for(;e>=1;)i=this._ids[e%64<<0]+i,e/=64;return t?i.padStart(t,s):i},rid(e){let t="";for(;t.length<e;)t+=this._ids[64*Math.random()|0];return t},lid(){return"_"+this.id(Date.now()).slice(-7)+this.rid(2)},cp(e){if(Array.isArray(e)){const t=[];for(let s=0;s<e.length;s++)"object"==typeof e[s]&&null!==e[s]?t[s]=$M.cp(e[s]):t[s]=e[s];return t}if("object"==typeof e&&null!==e){const t={};for(let s in e)"object"==typeof e[s]&&null!==e[s]?t[s]=$M.cp(e[s]):t[s]=e[s];return t}return e},freeze(e){if(Array.isArray(e))for(let t=0;t<e.length;t++)"object"==typeof e[t]&&null!==e[t]&&$M.freeze(e[t]);else for(let t in e)"object"==typeof e[t]&&null!==e[t]&&$M.freeze(e[t]);return Object.freeze(e)},xhr(e,t,s,i=null,n=30){return new Promise((o,r)=>{let a=new XMLHttpRequest;s&&(a.responseType=s),a.open(e,t),"POST"===e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.timeout=1e3*n,a.onload=()=>{a.status>399?(a.err=`${e} ${t} ERR_CODE: ${a.status}`,r(a)):o(a)},a.onerror=()=>{a.err=`Failed to ${e} ${t}`,r(a)},a.ontimeout=()=>{a.err=`${e} ${t} timeout`,r(a)},a.send(i)})},async html2img(e,t,s){const i=new Image;return i.src=`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${s}'><foreignObject x='0' y='0' width='${t}' height='${s}'><div xmlns='http://www.w3.org/1999/xhtml'>${e.replaceAll("#","%23")}</div></foreignObject></svg>`,await i.decode(),i}});Math.mM=function(e,t,s){return this.max(t,this.min(s,e))},Date.pad=e=>(e<10?"0":"")+e,Date.cD=(e,t)=>{if("number"==typeof e)e=new Date(e);else if(!e?.getDay)return e;let s=`${e.getFullYear()}-${Date.pad(e.getMonth()+1)}-${Date.pad(e.getDate())}`;return t?s:`${s} ${Date.pad(e.getHours())}:${Date.pad(e.getMinutes())}`},Date.cT=e=>`${Date.pad(e/3600<<0)}:${Date.pad((e/60<<0)%60)}:${Date.pad(e%60)}`,Date.cTm=e=>`${Date.pad(e/3600<<0)}:${Date.pad((e/60<<0)%60)}:${Date.pad((e%60).toFixed(2))}`,Date.cM=e=>`${Date.pad(e/60<<0)}:${Date.pad(e%60<<0)}`;const $S={get(e,t=!0){let s=(t?localStorage:sessionStorage).getItem(e);return"0"===s||"1"===s?s|=0:"undefined"===s?s=void 0:"null"===s&&(s=null),s},set(e,t,s=!0){let i=s?localStorage:sessionStorage;"boolean"==typeof t?t|=0:"object"==typeof t&&(t=JSON.stringify(t)),i.setItem(e,t)},rm(e,t=!0){(t?localStorage:sessionStorage).removeItem(e)}},App={cV(e,t){t??=$S.get("version");let s=e.split("."),i=t.split(".");for(let e=0;e<3;e++){let t=0|s[e],n=0|i[e];if(t<n)break;if(t>n)return 3-e}return 0},config:{run:{vol:50,bgm:100,pause:1,smooth:1},key:{J:[16,"Shift"],L:[37,"ArrowLeft"],U:[38,"ArrowUp"],R:[39,"ArrowRight"],D:[40,"ArrowDown"],a:[65,"A"],d:[68,"D"],r:[82,"R"],s:[83,"S"],w:[87,"W"],x:[88,"X"],z:[90,"Z"]},net:{server:0}},gC(e,t){return this.config[e][t]},sC(e,t,s){this.config[e][t]=s,this.saveConf(e)},loadConf(e){try{return JSON.parse($S.get(e+"Conf"))}catch{return null}},saveConf(e){$S.set(e+"Conf",this.config[e])},setDarkMode(e,t=!0){let s=doc.body;s.className=e?"dark":"",t&&$S.set("theme",s.className),$("set-ui").set()},initWin(){let e=Math.min(window.innerWidth/800,window.innerHeight/608);0|$S.get("fullscreen")&&(e=1),doc.zoom=e,doc.body.style.zoom=e},init(){for(let e in this.config)Object.assign(this.config[e],this.loadConf(e));doc.body.className=$S.get("theme")??"",this.initWin()}},U$={id:$M.lid(),username:$S.get("username")??"Anonymous",getUsername(){return this.username},setUsername(e){new UI.M(0,0,1).t(`${i18n(80,0)}`).ip(this.username).b(`${i18n(0,0)}`).c$(e=>e?.trim()).ok(t=>{let s=t.v.trim();this.username=s,$S.set("username",s),e()})}},Ipc={bC:[]};App.init();const UI={bg:doc.body.ap(El("div","msg-bg",{n:0})),menu:doc.body.ap(El("div",0,{id:"menu"})),tip:doc.body.ap(El("div",0,{id:"mt"})),showMenu(){let e=$("setting");e&&(css(this.menu,{opacity:1,pointerEvents:"auto"}),ac(this.menu.ch,""),e._h(),this.bg.n&&$c("msg",this.bg).for(e=>{e.onMenu&&(dac(UI.menu.ch,""),this.menu.ap(e).style.animation="none")}),this.menu.on=!0)},hideMenu(){css(this.menu,{opacity:0,pointerEvents:""}),css($("setting"),{opacity:0,transform:""}),this.bg.n&&$c("msg",this.menu).for(e=>{e.onMenu&&(this.bg.ap(e).style.animation="none")}),this.menu.on=!1},showTips(e,t,s){t&&(this.tip.style.transform=`translate(${t}px,${s}px)`),this.tip.tx(e).style.display="block"},BC(e,t){return t.for((t,s)=>{let i=El("div","setcat").tx(t),n=El("div","setpage panel");e.ap(i,n),i.i=s,i.onclick=function(){css($c("setcat",this.pN),{background:"",color:""},this.i,{background:"var(--bgl)",color:"var(--cs)"});let e=$c("setpage",this.pN);css(e,{display:""},this.i,{display:"block"}),e[this.i].set?.(this.pN._tab),this.pN._tab=this}}),$c("setpage",e)},M:class{constructor(e,t,s){css(UI.bg,{pointerEvents:"auto"}),s=UI.menu.on&&s,dac(s?UI.menu.ch:UI.bg.ch,""),this.box=(s?UI.menu:UI.bg).ap(El("div","msg")),this.box.onMenu=s,e?this.box.style.width=e+"px":this.box.style.maxWidth="480px",t&&(this.box.style.height=t+"px"),UI.bg.n++,this.r={}}t(e){return this.ap(El("p").tx(e))}p(...e){return this.ap(El("p")._c(...e))}l(e){return this.ap(El("li").tx(e))}li(...e){return this.ap(El("li")._c(...e))}#e;b(...e){let t=this.box.ap(El("div","a-cen n-w"));return t.style.height="46px",e.for((e,s)=>{let i=t.ap(El("div","btn").tx(e));i.onclick=()=>{this.r.i=s,this.#t()},s||(this.#e=i)}),this}h(e){return this.box.ap(El("h1","kid").tx(e)),this}#s;a(e){return this.#s=this.box.ap(El("div","msg-area")),e&&(this.#s.innerHTML=e),this}ac(...e){return this.#s??=this.box.ap(El("div","msg-area")),this.#s.ap(...e),this}aC(e){return this.#s.aC(e),this}ip(e="",t){let s=El("input");if(s.onchange=()=>{"password"!==t&&(s.value=s.value.trim()),this.r.v=s.value,this.v$?.()},s.value=e,s.onchange(),t&&(s.type=t,"password"===t)){let e=this.box.ap(El("div","see ab",{innerHTML:UI.ico("unsee")}));return e.onclick=()=>{let t=e.lastChild.lastChild.href;"#-see"===t.baseVal?(t.baseVal="#-unsee",s.type="password"):(t.baseVal="#-see",s.type="")},this.box.ap(El("div","rl")._c(s,e)),this}return this.box.ap(s),this}cb(){return this.box.ap(El("div","msg-cb")).onclick=()=>this.close(),this}ap(...e){return this.box.ap(...e),this}#i;c$(e=(e=>e)){return this.v$=()=>e(this.#i??this.r.v)?this.#e.rC("gray"):this.#e.aC("gray"),this.v$(),this}i$(e,t){return this.#i=0,this.#s.ap(e.on(e=>{t(e),this.v$()})),this}then(e){return this.fin=e,this}ok(e){return this._f=e,this.fin=e=>{e.i||this._f(e)},this}#t(){this.fin?.(this.r),this.hold?($c("btn",this.box).for(e=>e.aC("gray")),dac(this.box,"")):this.close()}actv(){$c("btn",this.box).for(e=>e.rC("gray")),ac(this.box)}kC(){return this.kL=e=>{13===e.keyCode&&this.kL&&!this.hold&&(this.r.i=0,this.#t())},doc.addEventListener("keydown",this.kL),this}close(){this.kL&&(doc.removeEventListener("keydown",this.kL),this.kL=null),css(this.box,{animation:"msg-close 0.4s forwards",animationPlayState:"running",pointerEvents:"none"}),--UI.bg.n||css(UI.bg,{pointerEvents:"none"}),setTimeout(()=>this.box.remove(),400);let e=this.box.pS();this.box.pN===UI.menu?ac(e.onMenu?e:UI.menu.ch):e&&ac(e),this.#n?.()}#n;AC(e){this.#n=e}},$a:(e,t)=>new UI.M(0,0,t).t(e).b(`${i18n(0,0)}`),$q:(e,t,s=`${i18n(0,1)}`,i=`${i18n(1,1)}`)=>new UI.M(0,0,t).t(e).b(s,i).kC(),$p(e,t,s=1){let i=(new UI.M).t(e).ip(t).b(`${i18n(0,0)}`,`${i18n(1,0)}`);return s&&i.c$(),i},check:(e,t=`${i18n(0,0)}`)=>(new UI.M).t(e).ip().b(t).c$(),message(e,t,s,i="#49e",n=0){let o=El("div","msg-tip")._c(El("h5").tx(e),El("p").tx(t));return s&&(o.t=setTimeout(()=>o.lastChild.click(),1e3*s)),n&&css(o,{left:"16px",right:"auto"}),o.firstChild.style.background=i,o.ap(El("div","msg-cb")).onclick=()=>{o.f?.(),clearTimeout(o.t),css(o,{animation:"tip-close 0.4s forwards",pointerEvents:"none"}),setTimeout(()=>o.remove(),400)},doc.body.ap(o),o.then=e=>o.f=e,o},err:e=>UI.message(`${i18n(81,0)}`,e,5,"#e44"),ico:e=>`<svg><use href='#-${e}'></use></svg>`,p(e,t,s){let i=El("p");return i.innerHTML=e,t&&(i.style.margin=t),s&&(i.style.color=s),i},span(e,t,s){let i=El("span");return i.innerHTML=e," "===e.at(-1)&&(i.style.marginRight="16px"),t&&(i.style.color=t),s&&(i.style.fontSize=s+"px"),i},copy(e){let t=El("div","ib cm"),s=UI.span(UI.ico("copy")),i=UI.span("✓");return css(t,{width:"16px",marginLeft:"4px"}),css(i,{padding:"2px",color:"var(--cs)"}),s.aC("hl"),i._h(),t.ap(s,i).onclick=()=>navigator.clipboard.writeText(e.innerText??e).then(()=>{s._h(),i._s(),setTimeout((e,t)=>{e._s(),t._h()},1500,s,i)}),t},ipf:El("input",0,{type:"file",multiple:!1}),file:(e,t)=>new Promise((s,i)=>{UI.ipf.accept=e,UI.ipf.onchange=()=>$M.read(UI.ipf.files[0],"string"==typeof t?t:t(UI.ipf.files[0].name)).then(e=>s([e,UI.ipf.files[0].name])).catch(i),UI.ipf.value="",UI.ipf.click()}),on(e){return e.on=t=>(e.f=t,e),e},S(e,t=0,s=0){let i=El("div").tx(e),n=El("div",(2===s?"chk":"sw")+(t?" on":""));return s&&(i.aC("ib"),i.style.marginRight="12px"),2===s?i.prepend(n):i.ap(n),n.onclick=e=>{i.v=!i.v,i.v?n.aC("on"):n.rC("on"),e&&i.f?.(0|i.v,i)},i.set=e=>{!e!=!i.v&&n.onclick()},i.v=t,this.on(i)},B(e,t){let s=El("div",t?"btn s":"btn").tx(e);return s.set=e=>e?s.rC("gray"):s.aC("gray"),s.onclick=()=>{s.hC("gray")||s.f(s)},this.on(s)},B2(e,t,s){let i=El("div","btn2");return i.innerHTML=e,i.onclick=e=>i.f(i,e),t&&(i.aC("c"),i.aC(t),s||i.aC("s")),this.on(i)},C(e,t,...s){let i=El("div").tx(e),n=i.ap(El("div","chs"));i.v=0,i.m=t,i.set=(e,t)=>{if(i.vi&&(e=i.vi(e)),i.m){let t=i.vi?i.vi(i.v):i.v;for(let i=0;i<s.length;i++)!(e&1<<i)!=!(t&1<<i)&&n.ch[i].onclick()}else n.ch[e].onclick();t&&i.f(i.v,t)};for(let e=0;e<s.length;e++){let t=El("span").tx(s[e]);i.m||e||css(t,{color:"var(--cs)",background:"var(--bgl)"}),n.ap(t).onclick=s=>{let o=i.vi?i.vi(i.v):i.v;if(!i.m&&o==e)return;i.m?o^=1<<e:(o=e,css(n.ch,{color:"",background:""}));let r=t.style.color;css(t,{color:r?"":"var(--cs)",background:r?"":"var(--bgl)"}),i.v=i.iv?i.iv(o):o,s&&i.f(i.v,s)}}return this.on(i)},mbList:new Set,mbS(e){let t=e.lastChild,s=e.pN;t._s();let i=e.offsetTop,n=t.clientHeight+2;if(t.T=s.T+i,t.B=t.T+n,t.B>s.H){let e=s.B-t.B;css(t,{top:e+"px",bottom:""}),t.T+=e,t.B+=e}else if(t.B-s.B>t.B-t.T-25||t.B-s.MB>64&&t.T-s.T>64){let o=Math.min(s.T,s.MT),r=s.B,a=o-t.T-1;if(n-(r-o)>48){let s=e.style.border?26.6:25.6;s=Math.round(((n-(r-o))/2/s|0)*s),t.T+a-s>=40&&(a-=s)}i-n<-64?(css(t,{top:a+"px",bottom:""}),t.T+=a,t.B+=a):(css(t,{top:"unset",bottom:0}),t.T+=t.offsetTop,t.B+=t.offsetTop)}else css(t,{top:"",bottom:""});t.MT=s.MT,t.MB=s.MB,t.H=s.H,s.R?(css(t,{left:"unset",right:"100%"}),t.R=s.R):css(t,{left:"",right:""})},apO(e,t,s,i){i.for((i,n)=>{let o=""===s?n:s+"."+(n+1),r=t.ap(El("div","op"));if(Array.isArray(i)){let s=r.ap(El("span","ib dots")),[n,a]=i[0].split("#");a?s.innerHTML=UI.ico(a)+" "+n:s.tx(n),r.aC("arr"),t.aC("fix"),"function"==typeof i[1]?(r.ap(UI.option(e,o,i[1])),r.onmouseenter=function(e){e.target===this&&(this.lastChild.show(),UI.mbS(this))}):(t.w=Math.max(t.w,r.ap(UI.option(e,o,i.slice(1))).w),r.onmouseenter=function(e){e.target===this&&UI.mbS(this)})}else{let[s,n]=i.split(":");s=s.split("#"),s[1]?r.innerHTML=("-"===s[1][0]?`<div class='c-op ib' style='background:#${s[1].slice(1)}'></div>`:UI.ico(s[1]))+" "+s[0]:r.tx(s[0]),r.v=n||o,r.onclick=()=>{r.v.startsWith?.("")||(e.v=r.v,e.firstChild?.tx(r.innerText)),t.hide(),e.f?.(r.v,r.innerText,r)},r.onmousedown=e=>{e.preventDefault()}}})},option(e,t,s){let i=El("div","mb");return i._h(),i.w=0,i.hide=function(){this._h(),this.hC("T")?(this.remove(),window.removeEventListener("mousedown",this.mbL),UI.mbList.delete(this)):this.pN.hC("op")&&this.pN.pN.hide()},"function"==typeof s?(i.f=s,i.show=()=>{i.innerHTML="",i.rC("fix"),this.apO(e,i,t,i.f())}):this.apO(e,i,t,s),i.w+=64,i},mbO(e,t,s=0,i=0,n=0,o){e.f&&e.show();let r,a,l=1400,h=770;if(s)if(t){let s=t.getBoundingClientRect();r=s.x+i,a=s.bottom+n,e.style.position="fixed";let o=t.pN;for(;o!==doc.body&&!o.hC("msg-bg");)o=o.pN;o.ap(e)}else t={offsetHeight:8},r=i,a=n+4,doc.body.ap(e);else{let s=t.pN;for(r=t.offsetLeft+1+i,a=t.offsetTop+t.offsetHeight+n-2;s!==doc.body&&!(s.hC("page")||s.hC("pointer")||s.hC("panel"))&&(r+=s.offsetLeft+s.clientLeft,a+=s.offsetTop+s.clientTop,!s.hC("msg-area"));)s=s.pN;s.hC("msg-area")&&!s.hC("panel")?(s=s.pN,l=700+s.offsetWidth/2,h=400+s.offsetHeight/2):(l=s.scrollWidth-8,h=s.scrollHeight-8),s.ap(e)}if(e._s(),o){e.aC("kb"),e.op=e.ch[0],e.ch[0]?.aC("on");for(let t of e.ch)t.style.minWidth=0,t.onmouseenter=()=>{e.op.rC("on"),t.aC("on"),e.op=t,t.scrollIntoViewIfNeeded(!1)}}else e.rC("kb"),e.op=null;let c=r+e.offsetWidth,d=a+e.offsetHeight;if(c>l){let e=l-c;r+=e,c+=e}e.R=c+e.w>l&&r-e.w>0;let u=4-e.offsetHeight;d>h&&a+u>=24?(a+=u,d+=u,n||(a-=t.offsetHeight,d-=t.offsetHeight),e.MB=h):e.MB=d,e.H=h,e.B=d,e.T=a,e.MT=a,css(e,{left:r+"px",top:a+"px"}),window.addEventListener("mousedown",e.mbL),UI.mbList.add(e)},mb(e,t,s){let i=UI.option(e,"","function"==typeof t[0]?t[0]:t);return i.aC("T"),s&&css($c("op",i),{minWidth:s+"px"}),i.onmouseleave=i.hide,i.onmousedown=e=>e.stopPropagation(),i.open=()=>{i.style.display?UI.mbO(i,e,i.fx):i.hide()},i.find=e=>{const t=s=>{for(let i of s)if(Array.isArray(i)){let e=t(i);if(e)return e}else{let[t,s]=i.split(":");if(s==e)return t}},s=(i,n)=>{for(let o=0;o<i.length;o++){if(i[o].v==e)return i[o].innerText;if(!i[o].hC("arr"))continue;let r=i[o].lastChild.f?t(i[o].lastChild.f()):s(i[o].lastChild.ch,""===n?o:n+"."+o);if(r)return r}};return i.f?t(i.f()):s(i.ch,"")},i.mbL=e=>i.hide(),i},mbC(e){for(let t of this.mbList)t.mbL?.(e)||this.mbList.delete(t)},O(...e){let t=El("div","sl"),s=UI.mb(t,e);return t.ap(El("span")).tx(`${i18n(82,0)}`),t.v=0,t.m=s,t.set=(e=0,i)=>{let n=Number(e),o=s.find(e);t.v=isNaN(n)?e:n,t.firstChild.tx(o||`${i18n(82,0)}`),i&&t.f?.(t.v)},t.onclick=()=>s.open(),t.onmouseleave=e=>{s.style.display||e.toElement?.hC("op")||s.hide()},this.on(t)},I(e,t,s,i){let n=El("div","ip ib").tx(e),o=n.ap(El("input"));return s&&(o.style.width=s+"px"),n.set=(e,t,...s)=>(n.v="number"===o.type?Number(o.value=e):o.value=e,t&&n.f?.(n.v,...s),n.v),"~"!==e&&"×"!==e||(n.style.marginLeft="-5px",o.style.marginLeft="1px"),t&&(o.s=1,Object.assign(o,t),o.m||o.M?(o.type="number",o.step=.01,o.sf=o.s<.1?2:o.s<1?1:0,o.onmouseout=()=>UI.tip._h(),o.onchange=function(){let e=Number(this.value);isNaN(e)||(void 0!==this.m&&e<this.m&&(e=this.m),void 0!==this.M&&e>this.M&&(e=this.M),e=Math.round(e/this.s)*this.s,this.value=e.toFixed(this.sf))},o.onmouseover=function(){let{left:e,top:t}=this.getBoundingClientRect();UI.showTips(this.m.toFixed(this.sf)+"~"+this.M.toFixed(this.sf),0|e,0|t)},o.onkeydown=function(e){38!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.w&&this.inc(38===e.keyCode?1:-1))}):o.l&&(o.oninput=function(){this.value.length>this.l&&(this.value=this.value.slice(0,this.l))}),o.w&&(o.ww=0),n.v="number"===o.type?Number(o.value):o.value),o.inc=function(e){let t=Math.floor((Number(this.value)+1e-5)/this.w);e>0?++t:Math.abs(this.value-t*this.w)<1e-5&&--t;let s=t*this.w;if(s<this.m||s>this.M)return;this.value=s,clearTimeout(this.wt);let i=new Event("change");this.ww>0&&(i.sk=233),this.dispatchEvent(i),this.wt=setTimeout(e=>e.ww=0,this.ww=1e3,this)},o.onwheel=function(e){e.preventDefault(),this.w&&document.activeElement===this&&this.inc(-e.deltaY)},o.addEventListener("change",e=>n.f(n.v="number"===o.type?Number(o.value):o.value,e.sk)),i&&(n.aC("rl"),o.onclick=e=>{o.mb??=UI.mb({f(e,t){o.value=t,n.v=t,n.f(t)}},i),o.mb.style.display?UI.mbO(o.mb,o):o.mb.hide()}),this.on(n)},Bar(e=200,t=0,s=1,i,n){let o=El("div","rg"),r=o.ap(El("div","rgb"));return o.style.width=e+8+"px",o.zoom=1,r.onmousedown=e=>{r.d=!0,r.x=e.x/doc.zoom/o.zoom-r.offsetLeft},o.onmousemove=t=>{if(r.d){let i=t.x/doc.zoom/o.zoom-r.x;o.set(Math.mM(i/e,0,1),s),o.fin(o.v)}},o.onmouseleave=o.onmouseup=()=>{r.d&&(r.d=!1,o.f?.(o.v))},o.set=(t,s=1)=>{if(o.v=t,s&&(r.style.left=t*e+"px",i))if(n){let s=Math.min(t,n),r=Math.max(t,n);o.style.backgroundImage=`linear-gradient(90deg,#0000 ${s*e}px,${i} ${s*e}px,${i} ${r*e}px,#0000 0)`}else o.style.backgroundImage=`linear-gradient(90deg,${i} ${t*e}px,#0000 0)`},o.set(t),o.in=e=>(o.fin=e,o),this.on(o)},Play(e=!1){let t=El("div","m-play cbd");return e&&t.aC("btn2"),t.v=0,t.onclick=()=>{t.set(1-t.v),t.f(t.v)},t.set=e=>(t.v=e)?t.aC("p"):t.rC("p"),this.on(t)},KB(e,t){let s=El("div","ip keyset n-w"),i=El("input");return i.onkeydown=e=>{if(e.preventDefault(),[9,17,27,114,115,116].includes(e.keyCode))return;let t=e.code;t.match(/(Shift|$C|Alt|Meta)(Left|Right)/)?t=t.slice(0,t.endsWith("Left")?-4:-5):t.match(/Key[A-Z]/)?t=t.slice(3):t.match(/Digit\d/)&&(t=t.slice(5)),i.value=t,s.v=[e.keyCode,t],s.f(s.v)},s.v=t,i.value=t[1],i.style.width="96px",s.ap(UI.span(e),i),this.on(s)}};doc.igI=e=>{let t=doc.activeElement.tagName;return"TEXTAREA"===t||"INPUT"===t&&!("number"===doc.activeElement.type&&32===e?.keyCode)||UI.bg.n||UI.menu.on};