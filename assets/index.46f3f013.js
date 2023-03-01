(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const P=[{name:"Ask GPT-3",description:"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",technologies:["GPT-3","React.js","React Spring","Node.js"],github:"https://github.com/mo-shawa/openAI-AMA",deployment:"http://openai-ama.herokuapp.com/",image:"project-img/OpenAI.webp",tags:[]},{name:"sahba.space",description:"Custom portfolio website for Sahba El-Shawa, an interdisciplinary researcher and social entrepreneur.",technologies:["TypeScript","Three.js","GSAP","GLSL"],github:"https://github.com/mo-shawa/sahba.space",deployment:"http://sahba.space",image:"project-img/sahba_space.webp"},{name:"SaveQuest",description:"SaveQuest gamifies the budgeting process, and encourages users to consistently track their expenses with EXP, levelling up, and a retro NES-style interface.",technologies:["React.js","Express.js","MongoDB","Node.js"],github:"https://github.com/mo-shawa/SaveQuest",deployment:"http://savequest.herokuapp.com/",image:"project-img/SaveQuest_scaled.webp"},{name:"HelloFren",description:"HelloFren is a social media platform that is designed to put your furry friends in the spotlight. Add your pet(s) to your profile and share with the world what they're up to!",technologies:["Python","Django","Bootstrap","PostgreSQL"],github:"https://github.com/mo-shawa/spot",deployment:"http://hellofren.herokuapp.com/",image:"project-img/hellofren_scaled.webp"},{name:"Physics Simulation",description:"A simple earth physics simulation using Three.js and Cannon.js ",technologies:["JavaScript","Three.js","Cannon.js"],github:"https://github.com/mo-shawa/physics-sim",deployment:"http://shawa.dev/physics-sim",image:"project-img/physics-sim.webp"},{name:"Hall of Game",description:"Collect, curate, share, and discuss with others your favorite characters, the most memorable items, and iconic maps from the games we all loved playing.",technologies:["EJS","Express.js","MongoDB","Bootstrap"],github:"https://github.com/mo-shawa/hall-of-game",deployment:"http://hallofgame.herokuapp.com/",image:"project-img/HoG_scaled.webp"},{name:"BlackJack",description:"A then-beginner developers take on the classic card game using vanilla JavaScript, DOM-manipulation, and animations with GSAP",technologies:["JavaScript","HTML","CSS","GSAP"],github:"https://github.com/mo-shawa/BlackJack",deployment:"https://shawa.dev/Blackjack",image:"project-img/blackjack.webp"}];for(let e=0;e<4;e++){const o=P[e],s=document.createElement("div");s.classList="card shadow";const n=document.createElement("h2");n.textContent=o.name;const t=document.createElement("img");t.src=o.image,t.alt=o.name,t.addEventListener("click",()=>{!s.classList.contains("active")||window.open(o.deployment,"_blank")});const r=document.createElement("p");r.textContent=o.description;const i=document.createElement("div");i.classList="pills-container";for(let u of o.technologies){const d=document.createElement("small");d.classList.add("pill"),d.textContent=u,i.append(d)}const c=document.createElement("img");c.src="/svg/github.svg";const a=document.createElement("a");a.target="_blank",a.href=o.github,a.append(c);const m=document.createElement("img");m.src="/svg/link.svg";const p=document.createElement("a");p.target="_blank",p.href=o.deployment,p.append(m);const l=document.createElement("div");l.classList.add("links-container"),l.append(a,p);const g=document.createElement("div");g.append(n,r,i,l),s.append(t,g),document.getElementById("projects").appendChild(s)}function f(e={}){const s=Object.assign({min:0,max:1,isInt:!1,clamp:2},e),{min:n,max:t,isInt:r,clamp:i}=s;let c=Math.random()*(t-n)+n;return r&&(c=Math.floor(c)),!r&&i!==void 0&&(c=parseFloat(c.toFixed(i))),c}function L(e,o,s,n){const t=Math.floor((1-n)*255+n*e),r=Math.floor((1-n)*255+n*o),i=Math.floor((1-n)*255+n*s);return[t,r,i]}function G(e){if(e.indexOf("#")>-1)return"hex";if(e.substring(0,3).includes("rgb"))return e.charAt(3)==="a"?"rgba":"rgb"}function O(e={}){const s=Object.assign({type:"rgba",minR:0,minG:0,minB:0,maxR:255,maxG:255,maxB:255,alpha:!0},e),{type:n,minR:t,minG:r,minB:i,maxR:c,maxG:a,maxB:m,alpha:p,r:l,g,b:u,a:d}=s,[b,y,v]=[l||f({min:t,max:c,isInt:!0}),g||f({min:r,max:a,isInt:!0}),u||f({min:i,max:m,isInt:!0})];if(n==="rgb")return`rgb(${b}, ${y}, ${v})`;if(n==="rgba"){const x=d||(p?f({isInt:!1}):1);return`rgba(${b}, ${y}, ${v}, ${x})`}if(n==="hex"){const[x,I,B]=[b.toString(16),y.toString(16),v.toString(16)];return`#${x}${I}${B}`}return`rgb(${b}, ${y}, ${v})`}function T(e,o){if(typeof e=="string"){const s=document.querySelectorAll(e);if(s.length===1){const n=s[0];n.style.backgroundColor=o;return}if(s.length>1){s.forEach(n=>{n.style.backgroundColor=o});return}return console.warn("Query did not yield any results")}if("forEach"in e){e.forEach(n=>{n.style.backgroundColor=o});return}if(e instanceof HTMLElement){e.style.backgroundColor=o;return}return console.warn(`Something unexpected happened.
	args(query: ${e}, color: ${o})`)}function F(e,o="rgb"){const s=G(e);if(s==="rgba"){const n=e.indexOf("(")+1,t=e.indexOf(")"),c=e.trim().substring(n,t).split(",").map(a=>Number(a));if(o==="hex"){c[3]=Math.floor(c[3]*255);const a=c.map(d=>d.toString(16));for(let d=0;d<a.length;d++)a[d].toString().length<2&&(a[d]=[0,a[d]].join(""));const[m,p,l,g]=a;return`#${m}${p}${l}${g}`}if(o==="rgb"){const[a,m,p,l]=c,[g,u,d]=L(a,m,p,l);return`rgb(${g}, ${u}, ${d})`}}if(s==="hex"){const n=e.trim().substring(1),t=n.match(/.{1,2}/g);console.log(t);const r=t.map(i=>parseInt(i,16));if(r.length===4){let i=r[3];i=parseFloat((i/255).toFixed(2)),r[3]=i}if(o==="rgb"){const[i,c,a,m]=r;if(n.length<8)return`rgb(${i}, ${c}, ${a})`;const[p,l,g]=L(i,c,a,m);return`rgb(${p}, ${l}, ${g})`}if(o==="rgba"){const[i,c,a,m]=r;return`rgba(${i}, ${c}, ${a}, ${m})`}}return e}var h={gen:O,apply:T,convert:F,genNum:f};const H=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),R=window.matchMedia("only screen and (max-width: 940px )").matches,E={width:window.innerWidth,height:window.innerHeight},w={x:0,y:0};window.addEventListener("resize",()=>{E.width=window.innerWidth,E.height=window.innerHeight});let k=!1,j=!1;const C=document.getElementById("projects");C.addEventListener("pointerover",()=>j=!0);C.addEventListener("pointerleave",()=>j=!1);document.addEventListener("scroll",()=>{k||(M(),h.apply(document.body,h.gen({r:119,g:53,b:33,a:.7})))},{once:!0});document.addEventListener("pointermove",e=>{j||(N(e),!k&&M())});document.querySelectorAll("a").forEach(e=>{e.addEventListener("pointerover",()=>{h.apply(document.body,h.gen({a:.5}))})});function N(e){const o=e.clientX/E.width,s=e.clientY/E.height,n=Math.round(o*255),t=Math.round(s*255);if($(n,w.x,25)||$(t,w.y,25)){w.x=n,w.y=t;const r=h.gen({r:Math.abs(n-155),g:50+t/10,b:t,a:.7});h.apply(document.body,r)}}function M(){k=!0;const e=document.querySelector("nav"),o=document.getElementById("theme-color"),{content:s}=o.attributes;gsap.from("nav",{opacity:0,yPercent:-100,ease:"expo.inOut",onStart:()=>{document.body.style.color="var(--light-text-color)",e.style.visibility="visible",document.documentElement.style.setProperty("--main-color","#53f2b5")},onComplete:()=>{gsap.to(s,{nodeValue:"rgb(0,0,0)"})}})}function $(e,o,s){return o>e+s||o<e-s}const A=gsap.utils.toArray(".card");gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin);const _=document.querySelectorAll(".nav-link");_.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const s=e.getAttribute("href");gsap.to(window,{duration:1,scrollTo:{y:s,offsetY:80},ease:"expo.inOut"})})});const D=gsap.timeline();D.from("#hero>*:not(br)",{opacity:0,duration:1.5,x:-50,stagger:1,ease:"expo.inOut"}).from("#pointer-container>*",{opacity:0,y:40,stagger:.4,duration:1.5});gsap.to(".point",{duration:1.5,y:15,repeat:-1,yoyo:!0,ease:"sine.inOut",scrollTrigger:{trigger:".point",start:"top bottom",toggleActions:"play pause play pause"}});A.forEach(e=>{e.addEventListener("click",o=>{const s=Flip.getState("#projects, .card"),n=e.classList.contains("active");A.forEach(l=>{l.classList.remove("active"),l.classList.add("inactive"),n&&l.classList.remove("inactive")}),n||(e.classList.remove("inactive"),e.classList.add("active")),Flip.from(s,{duration:.4,ease:"expo.out",simple:!0,absolute:!H});const t={opacity:0,stagger:.1,x:-20},r={opacity:1,x:0,stagger:.1},[i,c,a,m]=e.children[1].children,p=gsap.timeline({paused:!0});if(n?p.clear().fromTo(a.children,{...t,stagger:.05},r).play(0):p.clear().fromTo([i,c],t,r).fromTo(a.children,{...t,stagger:.05},r).fromTo(m.children,t,r).play(0),T(document.body,O({a:.5})),R&&!n){const l=document.getElementById("projects");gsap.to(window,{duration:.5,scrollTo:{y:l,offsetY:100},ease:"expo.inOut"})}})});const S=document.getElementById("contact-section"),J=gsap.timeline({scrollTrigger:{trigger:S,start:"top 50%"}});J.from(S.children[1],{opacity:0,duration:.5,stagger:.1,y:-20,ease:"expo.inOut"}).from(S.children[2].children,{opacity:0,duration:.3,stagger:.1,y:15,ease:"expo.inOut"});
