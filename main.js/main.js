(()=>{"use strict";function t(t,e,i){const s=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>{s.removeEventListener(t,n)})),i())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,n)))})),t.setAttribute(o,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t,e){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo",this.activeAccordion=this.activeAccordion.bind(this),void 0!==e&&(this.accordionList[e].classList.add(this.activeClass),this.accordionList[e].nextElementSibling.classList.add(this.activeClass))}addClass(t){void 0!==t&&(this.accordionList[t].classList.add(this.activeClass),this.accordionList[t].nextElementSibling.classList.add(this.activeClass))}removeClass(t){void 0!==t&&(this.accordionList[t].classList.remove(this.activeClass),this.accordionList[t].nextElementSibling.classList.remove(this.activeClass))}activeAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}init(){return this.accordionList.length&&this.accordionList.forEach((t=>{t.addEventListener("click",(()=>{this.activeAccordion(t)}))})),this}}('[data-anime="accordion"] dt',0).init();const e=new class{constructor(t,e,i,s){this.tabItem=document.querySelectorAll(t),this.tabDisplay=document.querySelectorAll(e),this.activeClass=s,this.initial=i,void 0===s&&(this.activeClass="ativo"),void 0===i&&(this.initial=0)}activeTab(t){this.tabDisplay.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabDisplay[t].dataset.anime;this.tabDisplay[t].classList.add(this.activeClass,e)}goto(t){t<=this.tabItem.length-1&&t>=0&&(this.activeTab(t),this.tabItem[0].parentElement.scroll({top:this.tabItem[t].offsetTop,behavior:"smooth"}))}init(){this.tabItem.length&&this.tabDisplay.length&&(this.tabItem.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))})),this.goto(this.initial))}}('[data-tab="menu"] li','[data-tab="content"] section');e.init(),document.addEventListener("keydown",(t=>{t.key.match(/\d/)&&e.goto(t.key-1)})),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),i=document.querySelector('[data-modal="container"]');function s(t){t.preventDefault(),i.classList.toggle("ativo")}t&&e&&i&&(t.addEventListener("click",s),e.addEventListener("click",s),i.addEventListener("click",(function(t){t.target===this&&s(t)})))}(),function(){if(!window.matchMedia("(max-width: 700px)").matches){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},i={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",i),this.element.removeEventListener("mousemove",e)}};function s(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),e}function o(){const t=s(this);e.tooltipBox=t,this.addEventListener("mousemove",e),i.tooltipBox=t,i.element=this,this.addEventListener("mouseleave",i)}t.forEach((t=>{t.addEventListener("mouseover",o)}))}}(),function(){function e(e){e.preventDefault(),this.classList.toggle("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((i=>{t.addEventListener(i,e)}))}))}(),function(){const e=document.querySelector("nav.menu"),i=document.querySelector('[data-menu="button"]'),s=document.querySelector('[data-menu="list"]'),o=["click","touch","touchstart"];function n(){s.classList.toggle("active"),i.classList.toggle("active"),t(e,o,(()=>{s.classList.remove("active"),i.classList.remove("active")}))}document.querySelectorAll('[data-menu="list"] > li').forEach((t=>{t.addEventListener("click",(()=>{s.classList.remove("active"),i.classList.remove("active")}))})),i&&["click","touch"].forEach((t=>i.addEventListener(t,n)))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),s=new Date,o=s.getDay(),n=s.getHours(),a=-1!==e.indexOf(o),c=n>=i[0]&&n<i[1];a&&c&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),i=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)})),function(){let t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,i=Math.floor(e/100);let s=0;const o=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));const e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.buy).toFixed(4)})).catch((t=>console.log(Error(t)))),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.8*window.innerHeight;function i(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(i(),window.addEventListener("scroll",i))}()})();