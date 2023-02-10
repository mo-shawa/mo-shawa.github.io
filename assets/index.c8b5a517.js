(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const P=[{name:"Ask GPT-3",description:"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",technologies:["GPT-3","React.js","React Spring","Node.js"],github:"https://github.com/mo-shawa/openAI-AMA",deployment:"http://openai-ama.herokuapp.com/",image:"project-img/OpenAI.webp",tags:[]},{name:"sahba.space",description:"Custom portfolio website for Sahba El-Shawa, an interdisciplinary researcher and social entrepreneur.",technologies:["TypeScript","Three.js","GSAP","GLSL"],github:"https://github.com/mo-shawa/sahba.space",deployment:"http://sahba.space",image:"project-img/sahba_space.webp"},{name:"SaveQuest",description:"SaveQuest gamifies the budgeting process, and encourages users to consistently track their expenses with EXP, levelling up, and a retro NES-style interface.",technologies:["React.js","Express.js","MongoDB","Node.js"],github:"https://github.com/mo-shawa/SaveQuest",deployment:"http://savequest.herokuapp.com/",image:"project-img/SaveQuest_scaled.webp"},{name:"HelloFren",description:"HelloFren is a social media platform that is designed to put your furry friends in the spotlight. Add your pet(s) to your profile and share with the world what they're up to!",technologies:["Python","Django","Bootstrap","PostgreSQL"],github:"https://github.com/mo-shawa/spot",deployment:"http://hellofren.herokuapp.com/",image:"project-img/hellofren_scaled.webp"},{name:"Physics Simulation",description:"A simple earth physics simulation using Three.js and Cannon.js ",technologies:["JavaScript","Three.js","Cannon.js"],github:"https://github.com/mo-shawa/physics-sim",deployment:"http://shawa.dev/physics-sim",image:"project-img/physics-sim.webp"},{name:"Hall of Game",description:"Collect, curate, share, and discuss with others your favorite characters, the most memorable items, and iconic maps from the games we all loved playing.",technologies:["EJS","Express.js","MongoDB","Bootstrap"],github:"https://github.com/mo-shawa/hall-of-game",deployment:"http://hallofgame.herokuapp.com/",image:"project-img/HoG_scaled.webp"},{name:"BlackJack",description:"A then-beginner developers take on the classic card game using vanilla JavaScript, DOM-manipulation, and animations with GSAP",technologies:["JavaScript","HTML","CSS","GSAP"],github:"https://github.com/mo-shawa/BlackJack",deployment:"https://shawa.dev/Blackjack",image:"project-img/blackjack.webp"}];for(let e=0;e<4;e++){const n=P[e],o=document.createElement("div");o.classList="card shadow";const i=document.createElement("h2");i.textContent=n.name;const t=document.createElement("img");t.src=n.image,t.alt=n.name,t.addEventListener("click",()=>{!o.classList.contains("active")||window.open(n.deployment,"_blank")});const a=document.createElement("p");a.textContent=n.description;const s=document.createElement("div");s.classList="pills-container";for(let E of n.technologies){const u=document.createElement("small");u.classList.add("pill"),u.textContent=E,s.append(u)}const r=document.createElement("img");r.src="/svg/github.svg";const l=document.createElement("a");l.target="_blank",l.href=n.github,l.append(r);const p=document.createElement("img");p.src="/svg/link.svg";const d=document.createElement("a");d.target="_blank",d.href=n.deployment,d.append(p);const c=document.createElement("div");c.classList.add("links-container"),c.append(l,d);const g=document.createElement("div");g.append(i,a,s,c),o.append(t,g),document.getElementById("projects").appendChild(o)}var m={gen:O,apply:T};function O(e={}){const o=Object.assign({type:"rgba",minR:0,minG:0,minB:0,maxR:255,maxG:255,maxB:255,alpha:!0},e),{type:i,minR:t,minG:a,minB:s,maxR:r,maxG:l,maxB:p,alpha:d,r:c,g,b:E,a:u}=o,[h,f,y]=[c||b({min:t,max:r,isInt:!0}),g||b({min:a,max:l,isInt:!0}),E||b({min:s,max:p,isInt:!0})];if(i==="rgb")return`rgb(${h}, ${f}, ${y})`;if(i==="rgba"){const x=u||(d?b({isInt:!1}):1);return`rgba(${h}, ${f}, ${y}, ${x})`}if(i==="hex"){const[x,I,M]=[h.toString(16),f.toString(16),y.toString(16)];return`#${x}${I}${M}`}return`rgb(${h}, ${f}, ${y})`}function T(e,n){if(typeof e=="string"){const o=document.querySelectorAll(e);if(o.length===1){const i=o[0];i.style.backgroundColor=n;return}if(o.length>1){o.forEach(i=>{i.style.backgroundColor=n});return}return console.warn("Query did not yield any results")}if("forEach"in e){e.forEach(i=>{i.style.backgroundColor=n});return}if(e instanceof HTMLElement){e.style.backgroundColor=n;return}return console.warn(`Something unexpected happened.
	args(query: ${e}, color: ${n})`)}function b(e={}){const o=Object.assign({min:0,max:1,isInt:!1,clamp:2},e),{min:i,max:t,isInt:a,clamp:s}=o;let r=Math.random()*(t-i)+i;return a&&(r=Math.floor(r)),!a&&s!==void 0&&(r=parseFloat(r.toFixed(s))),r}const $=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),G=window.matchMedia("only screen and (max-width: 940px )").matches,w={width:window.innerWidth,height:window.innerHeight},v={x:0,y:0};window.addEventListener("resize",()=>{w.width=window.innerWidth,w.height=window.innerHeight});let k=!1,L=!1;const C=document.getElementById("projects");C.addEventListener("pointerover",()=>L=!0);C.addEventListener("pointerleave",()=>L=!1);document.addEventListener("scroll",()=>{k||(B(),m.apply(document.body,m.gen({r:119,g:53,b:33,a:.7})))},{once:!0});document.addEventListener("pointermove",e=>{L||(H(e),!k&&B())});document.querySelectorAll("a").forEach(e=>{e.addEventListener("pointerover",()=>{m.apply(document.body,m.gen({a:.5}))})});function H(e){const n=e.clientX/w.width,o=e.clientY/w.height,i=Math.round(n*255),t=Math.round(o*255);if(j(i,v.x,25)||j(t,v.y,25)){v.x=i,v.y=t;const a=m.gen({r:Math.abs(i-155),g:50+t/10,b:t,a:.7});m.apply(document.body,a)}}function B(){k=!0;const e=document.querySelector("nav"),n=document.getElementById("theme-color"),{content:o}=n.attributes;gsap.from("nav",{opacity:0,yPercent:-100,ease:"expo.inOut",onStart:()=>{document.body.style.color="var(--light-text-color)",e.style.visibility="visible",document.documentElement.style.setProperty("--main-color","#53f2b5")},onComplete:()=>{gsap.to(o,{nodeValue:"rgb(0,0,0)"})}})}function j(e,n,o){return n>e+o||n<e-o}const A=gsap.utils.toArray(".card");gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin);const R=document.querySelectorAll(".nav-link");R.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const o=e.getAttribute("href");gsap.to(window,{duration:1,scrollTo:{y:o,offsetY:80},ease:"expo.inOut"})})});const F=gsap.timeline();F.from("#hero>*:not(br)",{opacity:0,duration:1.5,x:-50,stagger:1,ease:"expo.inOut"}).from("#pointer-container>*",{opacity:0,y:40,stagger:.4,duration:1.5});gsap.to(".point",{duration:1.5,y:15,repeat:-1,yoyo:!0,ease:"sine.inOut",scrollTrigger:{trigger:".point",start:"top bottom",toggleActions:"play pause play pause"}});A.forEach(e=>{e.addEventListener("click",n=>{const o=Flip.getState("#projects, .card"),i=e.classList.contains("active");A.forEach(c=>{c.classList.remove("active"),c.classList.add("inactive"),i&&c.classList.remove("inactive")}),i||(e.classList.remove("inactive"),e.classList.add("active")),Flip.from(o,{duration:.4,ease:"expo.out",simple:!0,absolute:!$});const t={opacity:0,stagger:.1,x:-20},a={opacity:1,x:0,stagger:.1},[s,r,l,p]=e.children[1].children,d=gsap.timeline({paused:!0});if(i?d.clear().fromTo(l.children,{...t,stagger:.05},a).play(0):d.clear().fromTo([s,r],t,a).fromTo(l.children,{...t,stagger:.05},a).fromTo(p.children,t,a).play(0),T(document.body,O({a:.5})),G&&!i){const c=document.getElementById("projects");gsap.to(window,{duration:.5,scrollTo:{y:c,offsetY:100},ease:"expo.inOut"})}})});const S=document.getElementById("contact-section"),_=gsap.timeline({scrollTrigger:{trigger:S,start:"top 50%"}});_.from(S.children[1],{opacity:0,duration:.5,stagger:.1,y:-20,ease:"expo.inOut"}).from(S.children[2].children,{opacity:0,duration:.3,stagger:.1,y:15,ease:"expo.inOut"});