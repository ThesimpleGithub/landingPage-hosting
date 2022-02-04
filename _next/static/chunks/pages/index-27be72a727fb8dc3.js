(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9675)}])},9675:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ot}});var i=t(5893),r=t(7294),a=t(4362),o=t.n(a),c=(t(4964),t(9699),t(445)),s=t(2711),u=t.n(s),d=t(8520),l=t.n(d);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(){var n=f(["\n    --scroll-length: 1;\n    height: 100vh;\n    width: 100%;\n  "]);return m=function(){return n},n}function h(){var n=f(["\n    font-size: 2.75em;\n    white-space: pre;\n    line-height: 1;\n    letter-spacing: 0.1rem;\n    color: white;\n    position: relative;\n    top: -10%;\n    margin: 0;\n  "]);return h=function(){return n},n}function x(){var n=f(["\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-top: 10px;\n  "]);return x=function(){return n},n}function p(){var n=f(["\n    --scale: calc(0.822 + (0.2 * var(--scroll-length) * var(--visible-y)));\n    top: 0;\n    width: 100vw;\n    left: 0;\n    margin: 0;\n    height: 100vh;\n    display: block;\n    position: absolute;\n    will-change: transform;\n    transform: scale(var(--scale));\n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      background-color: rgba(0, 0, 0, 1);\n      opacity: calc(var(--visible-y) * 0.5);\n    }\n  "]);return p=function(){return n},n}function v(){var n=f(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white;\n    padding: 2em;\n    float: right;\n    font-size: 2.5vmin;\n    text-align: left;\n    max-width: 35em;\n    bottom: -10vh;\n    height: 100vh;\n  "]);return v=function(){return n},n}function g(){var n=f(["\n    font-size: 1.25em;\n    font-weight: 600;\n    margin-bottom: 0.5em;\n    opacity: 1;\n    /* opacity: calc(1.5 + var(--viewport-y)); */\n  "]);return g=function(){return n},n}function w(){var n=f(["\n    grid-row: 1 / 2;\n    display: flex;\n    color: white;\n    flex-direction: column;\n    justify-content: flex-end;\n  "]);return w=function(){return n},n}function j(){var n=f(["\n    display: block;\n    will-change: transform;\n    transform: scale(0.5 / calc(var(--scale)));\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center center;\n  "]);return j=function(){return n},n}function b(){var n=f(["\n    grid-row: 2 / 3;\n    line-height: 1.5;\n    opacity: 1;\n    word-break: keep-all;\n    /* opacity: calc(1.5 + var(--viewport-y)); */\n  "]);return b=function(){return n},n}var P={Section:c.ZP.section(m()),H2:c.ZP.h2(h()),Flex:c.ZP.div(x()),Figure:c.ZP.figure(p()),Content:c.ZP.article(v()),SubHeader:c.ZP.div(g()),Header:c.ZP.header(w()),Bg:c.ZP.img(j()),Paragraph:c.ZP.p(b())};function y(n,e,t,i,r,a,o){try{var c=n[a](o),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function z(){var n=Z(["\n    from,to {\n        border-color: transparent\n    }\n    \n    50%{\n        border-color: white;\n    }\n"]);return z=function(){return n},n}function N(){var n=Z(["\n from {\n         transform: scale(1);\n    }\n    \n    50%{\n        transform: scale(1.03);\n    }\n    100%{\n      transform: scale(1);\n    }\n"]);return N=function(){return n},n}function O(){var n=Z(["\n  border-right: 0.1em solid white;\n  animation: "," 1s step-end infinite;\n  -webkit-animation: "," 1s step-end infinite;\n  -moz-animation: "," 1s step-end infinite;\n  -o-animation: "," 1s step-end infinite;\n"]);return O=function(){return n},n}function S(){var n=Z(["\n  animation: "," 6s ease infinite;\n  -webkit-animation: "," 6s ease infinite;\n  -moz-animation: "," 6s ease infinite;\n  -o-animation: "," 6s ease infinite;\n"]);return S=function(){return n},n}function k(){var n=Z(["\n  height: 100vh;\n"]);return k=function(){return n},n}var E=(0,c.F4)(z()),I=(0,c.F4)(N()),A=(0,c.ZP)(P.H2)(O(),E,E,E,E),C=(0,c.ZP)(P.Bg)(S(),I,I,I,I),_=(0,c.ZP)(P.Section)(k()),T=function(){var n=(0,r.useState)(""),e=n[0],t=n[1],a=(0,r.useState)(""),o=a[0],c=a[1];return(0,r.useEffect)((function(){var n="AI \uc804\ubb38 \uce5c\ud658\uacbd \uae30\uc5c5",e="\uc8fc\uc2dd\ud68c\uc0ac \ub354\uc2ec\ud50c\uc785\ub2c8\ub2e4",i=0,r="",a=setInterval((function(){if(t(r+=n[i]),(i+=1)===n.length){i=0,r="",clearInterval(a),document.getElementById("title").style.borderRight="unset";var o=setInterval((s=l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(r+=e[i]),(i+=1)===e.length&&clearInterval(o);case 4:case"end":return n.stop()}}),n)})),function(){var n=this,e=arguments;return new Promise((function(t,i){var r=s.apply(n,e);function a(n){y(r,t,i,a,o,"next",n)}function o(n){y(r,t,i,a,o,"throw",n)}a(void 0)}))}),150)}var s}),150)}),[]),(0,i.jsxs)(_,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(C,{alt:"",src:"./images/introBG.webp"})}),(0,i.jsxs)(P.Content,{"data-aos":"fade-up",className:"content",children:[(0,i.jsxs)(P.Header,{className:"header",children:[(0,i.jsx)(P.SubHeader,{className:"subheading",children:"Machine Learning AI"}),(0,i.jsxs)(P.Flex,{children:[(0,i.jsx)(A,{id:"title",children:e}),(0,i.jsx)("br",{}),(0,i.jsx)(A,{id:"title2",children:o})]})]}),(0,i.jsx)(P.Paragraph,{className:"paragraph",children:"\uc8fc\uc2dd\ud68c\uc0ac \ub354\uc2ec\ud50c\uc740 \uac15\ub825\ud55c AI \uae30\uc220\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \ud658\uacbd\ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 ESG \uae30\uc5c5\uc785\ub2c8\ub2e4."})]})]})};function F(){var n,e,t=(n=["\n  float: left;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return F=function(){return t},t}var H=(0,c.ZP)(P.Content)(F()),B=function(){return(0,i.jsxs)(P.Section,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(P.Bg,{alt:"",src:"https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_960_720.jpg"})}),(0,i.jsxs)(H,{id:"visionContent",className:"content",children:[(0,i.jsxs)(P.Header,{"data-aos":"fade-down",className:"header",children:[(0,i.jsx)(P.SubHeader,{className:"subheading",children:"Vision Of The Simple"}),(0,i.jsx)(P.Flex,{children:(0,i.jsxs)(P.H2,{className:"heading",children:["\ud658\uacbd\uacfc \uc0ac\ud68c\ub97c \ucc45\uc784\uc9c0\ub294",(0,i.jsx)("br",{}),"AI \uae30\uc220 - E.S.G \uacbd\uc601"]})})]}),(0,i.jsx)(P.Paragraph,{"data-aos":"fade-down",className:"paragraph",children:"ESG\ub294 \uae30\uc5c5\uc758 \ube44\uc7ac\ubb34\uc801 \uc694\uc18c\uc778 \ud658\uacbd, \uc0ac\ud68c\uc5d0 \ub300\ud55c \ucc45\uc784, \uc9c0\ubc30\uad6c\uc870\uc758 \ud22c\uba85\ud568\uc744 \ud3c9\uac00\ud569\ub2c8\ub2e4. \ub354\uc2ec\ud50c\uc740 AI \uae30\uc220\ub825\uc744 \ud65c\uc6a9\ud558\uc5ec \ud658\uacbd \ubc0f \uc0ac\ud68c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."})]})]})};t(8279);function R(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=R(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 723px) {\n    flex-direction: column;\n    justify-content: center;\n  } ;\n"]);return L=function(){return n},n}function M(){var n=R(["\n  flex-direction: row;\n  align-items: center;\n  height: unset;\n  @media (max-width: 723px) {\n    bottom: 0;\n    max-width: 75vmin;\n  }\n"]);return M=function(){return n},n}function Y(){var n=R(["\n  max-width: 40vw;\n  height: unset;\n  @media (max-width: 723px) {\n    bottom: 0;\n    max-width: 75vmin;\n  }\n"]);return Y=function(){return n},n}function q(){var n=R(["\n  width: 30vmin;\n  @media (max-width: 1280px) {\n    width: 17vw;\n  }\n  @media (max-width: 723px) {\n    width: 24vmin;\n  }\n"]);return q=function(){return n},n}function V(){var n=R(["\n  white-space: unset;\n  word-break: keep-all;\n  @media (max-width: 1280px) {\n    font-size: 4.03vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 5.5vmin;\n  }\n"]);return V=function(){return n},n}function G(){var n=R(["\n  @media (max-width: 1280px) {\n    font-size: 1.84vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n    margin-bottom: 3vmin;\n  }\n"]);return G=function(){return n},n}function W(){var n=R(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return W=function(){return n},n}function D(){var n=R(["\n  font-size: 15px;\n  margin-top: 5px;\n  @media (max-width: 1280px) {\n    font-size: 1.472vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n  }\n"]);return D=function(){return n},n}function J(){var n=R(["\n  @media (max-width: 1280px) {\n    font-size: 1.472vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n    margin-top: 0.5vmin;\n  }\n"]);return J=function(){return n},n}var K=(0,c.ZP)(P.Section)(L()),U=(0,c.ZP)(P.Content)(M()),X=(0,c.ZP)(P.Content)(Y()),Q=c.ZP.img(q()),$=(0,c.ZP)(P.H2)(V()),nn=(0,c.ZP)(P.SubHeader)(G()),en=c.ZP.div(W()),tn=c.ZP.span(D()),rn=(0,c.ZP)(P.Paragraph)(J()),an=function(){return(0,i.jsxs)(K,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(P.Bg,{alt:"",src:"https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_960_720.jpg"})}),(0,i.jsxs)(U,{children:[(0,i.jsxs)(en,{"data-aos-delay":"200","data-aos":"fade-down-right",children:[(0,i.jsx)(Q,{src:"./images/beforeAWB.png"}),(0,i.jsxs)(tn,{children:["<","\uc6d0\ubcf8 \uc774\ubbf8\uc9c0",">"]})]}),(0,i.jsxs)(en,{"data-aos-delay":"400","data-aos":"fade-down-right",children:[(0,i.jsx)(Q,{src:"./images/afterAWB.jpg"}),(0,i.jsxs)(tn,{children:["<","\ud654\uc774\ud2b8 \ubc38\ub7f0\uc2f1 \ud6c4",">"]})]}),(0,i.jsxs)(en,{"data-aos-delay":"600","data-aos":"fade-down-right",children:[(0,i.jsx)(Q,{src:"./images/afterExposure.jpg"}),(0,i.jsxs)(tn,{children:["<","\ub178\ucd9c\ub3c4 \ubcf4\uc815 \ud6c4",">"]})]})]}),(0,i.jsxs)(X,{id:"visionContent",className:"content",children:[(0,i.jsxs)(P.Header,{"data-aos":"fade-down",className:"header",children:[(0,i.jsx)(nn,{className:"subheading",children:"Auto White Balance & Exposure"}),(0,i.jsx)($,{className:"heading",children:"AI\ub97c \ud65c\uc6a9\ud55c \uac15\ub825\ud55c \uc774\ubbf8\uc9c0 \ubcf4\uc815"})]}),(0,i.jsx)(rn,{"data-aos":"fade-down",className:"paragraph",children:"\ub354\uc2ec\ud50c\uc740 \uc624\ud1a0 \ud654\uc774\ud2b8 \ubc38\ub7f0\uc2f1 \ubaa8\ub378\uacfc, \ub178\ucd9c \ubcf4\uc815 \ubaa8\ub378\ub85c \uc2e4\uc0ac\uc640 \uac19\uc740 \uc774\ubbf8\uc9c0 \ubcf4\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. tensorflowJS \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc838 WEB\uc5d0\ub3c4 \uc774\uc2dd\uc774 \uac00\ub2a5\ud55c \ud655\uc7a5\uc131 \ub192\uc740 \ubaa8\ub378\uc785\ub2c8\ub2e4."})]})]})};function on(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function cn(){var n=on(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 723px) {\n    flex-direction: column;\n    justify-content: center;\n  } ;\n"]);return cn=function(){return n},n}function sn(){var n=on(["\n  flex-direction: row;\n  align-items: center;\n  height: unset;\n  @media (max-width: 723px) {\n    bottom: 0;\n    max-width: 75vmin;\n  }\n"]);return sn=function(){return n},n}function un(){var n=on(["\n  max-width: 40vw;\n  height: unset;\n  @media (max-width: 723px) {\n    bottom: 0;\n    max-width: 75vmin;\n  }\n"]);return un=function(){return n},n}function dn(){var n=on(["\n  width: 30vmin;\n  @media (max-width: 1280px) {\n    width: 17vw;\n  }\n  @media (max-width: 723px) {\n    width: 24vmin;\n  }\n"]);return dn=function(){return n},n}function ln(){var n=on(["\n  ","\n  bottom : 3vmin;\n  z-index: 997;\n"]);return ln=function(){return n},n}function fn(){var n=on(["\n  ","\n  top : 3vmin;\n  right: 3vmin;\n  z-index: 999;\n"]);return fn=function(){return n},n}function mn(){var n=on(["\n  width: 27vmin;\n  height: 56vmin;\n  object-fit: fill;\n  position: absolute;\n  @media (max-width: 1280px) {\n    width: 15vw;\n    height: 32vw;\n  }\n  @media (max-width: 723px) {\n    width: 22vmin;\n    height: 45vmin;\n  }\n"]);return mn=function(){return n},n}function hn(){var n=on(["\n  ","\n  z-index : 996;\n  left: 6.1vmin;\n  bottom: 10vmin;\n  @media (max-width: 1280px) {\n    left: 6.2vmin;\n    bottom: 9.2vmin;\n  }\n"]);return hn=function(){return n},n}function xn(){var n=on(["\n  ","\n  z-index : 998;\n  right: 9.4vmin;\n  top: 9.6vmin;\n  @media (max-width: 1280px) {\n    right: 9.2vmin;\n    top: 9.4vmin;\n  }\n"]);return xn=function(){return n},n}function pn(){var n=on(["\n  white-space: unset;\n  word-break: keep-all;\n  @media (max-width: 1280px) {\n    font-size: 4.03vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 5.5vmin;\n  }\n"]);return pn=function(){return n},n}function vn(){var n=on(["\n  @media (max-width: 1280px) {\n    font-size: 1.84vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n    margin-bottom: 3vmin;\n  }\n"]);return vn=function(){return n},n}function gn(){var n=on(["\n  @media (max-width: 1280px) {\n    font-size: 1.472vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n    margin-top: 0.5vmin;\n  }\n"]);return gn=function(){return n},n}var wn=(0,c.ZP)(P.Section)(cn()),jn=(0,c.ZP)(P.Content)(sn()),bn=(0,c.ZP)(P.Content)(un()),Pn=(0,c.iv)(dn()),yn=c.ZP.img(ln(),Pn),Zn=c.ZP.img(fn(),Pn),zn=(0,c.iv)(mn()),Nn=c.ZP.video(hn(),zn),On=c.ZP.video(xn(),zn),Sn=(0,c.ZP)(P.H2)(pn()),kn=(0,c.ZP)(P.SubHeader)(vn()),En=(0,c.ZP)(P.Paragraph)(gn()),In=function(){return(0,i.jsxs)(wn,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(P.Bg,{alt:"",src:"https://source.unsplash.com/P4a43pThV3c/800x800"})}),(0,i.jsxs)(bn,{id:"visionContent",className:"content",children:[(0,i.jsxs)(P.Header,{"data-aos":"fade-down",className:"header",children:[(0,i.jsx)(kn,{className:"subheading",children:"Personal Color"}),(0,i.jsx)(Sn,{className:"heading",children:"\ud37c\uc2a4\ub110 \uceec\ub7ec \uce21\uc815 \uae30\uc220"})]}),(0,i.jsx)(En,{"data-aos":"fade-down",className:"paragraph",children:"\uc774\ubbf8\uc9c0 \ubcf4\uc815 \uae30\uc220\uacfc \uc790\uccb4 \uc81c\uc791\ud55c \ud37c\uc2a4\ub110\uceec\ub7ec \uce21\uc815 \ub85c\uc9c1\uc744 \uc774\uc6a9\ud558\uc5ec \uc2e4\uc2dc\uac04\uc73c\ub85c \uc5bc\uad74\uc744 \uc2a4\uce94\ud558\uc5ec \ud37c\uc2a4\ub110\uceec\ub7ec\ub97c \uce21\uc815\ud569\ub2c8\ub2e4."})]}),(0,i.jsxs)(jn,{children:[(0,i.jsx)(yn,{"data-aos":"flip-left",src:"./images/mockup.png"}),(0,i.jsx)(Nn,{"data-aos":"flip-left",src:"./videos/self.mp4",loop:!0,autoPlay:!0,playsInline:!0,muted:!0}),(0,i.jsx)(Zn,{"data-aos":"flip-left","data-aos-delay":"300",src:"./images/mockup.png"}),(0,i.jsx)(On,{"data-aos":"flip-left","data-aos-delay":"300",src:"./videos/scan.mp4",loop:!0,autoPlay:!0,playsInline:!0,muted:!0})]})]})},An=function(){var n;return{debounce:function(e,t){var i=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(void 0,i)}),t)}}};function Cn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function _n(){var n=Cn(["\n  position: fixed;\n  z-index: 999;\n  right: 0;\n  border-bottom: 1px solid #a0a0a0;\n  list-style: none;\n  margin: 0;\n  margin-top: 1vh;\n"]);return _n=function(){return n},n}function Tn(){var n=Cn(["\n  display: block;\n  color: #a0a0a0;\n  text-align: center;\n  margin: 0px 20px;\n  float: left;\n  @media (max-width: 812px) {\n    margin: 0px 1.56vw;\n  }\n"]);return Tn=function(){return n},n}function Fn(){var n=Cn(["\n  color: ",";\n  /* color: #FFF; */\n  line-height: 84px;\n  letter-spacing: -0.5px;\n  font-size: 17px;\n  @media (max-width: 812px) {\n    line-height: 6.54vw;\n    letter-spacing: -0.04vw;\n    font-size: 1.8vw;\n  }\n  position: relative;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  background: unset;\n  :hover {\n    color: white;\n    font-size: 18px;\n    @media (max-width: 812px) {\n      font-size: 1.9vw;\n    }\n  }\n  ::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 7px;\n    bottom: -4px;\n    background: ",";\n    @media (max-width: 812px) {\n      height: 0.54vw;\n      bottom: -0.31vw;\n    }\n\n    left: 0px;\n  }\n"]);return Fn=function(){return n},n}var Hn=c.ZP.ul(_n()),Bn=c.ZP.li(Tn()),Rn=c.ZP.button(Fn(),(function(n){return n.selected?"white":"#a0a0a0"}),(function(n){return n.selected?"white":"unset"})),Ln=function(n){var e=n.selected,t=n.selectMenu,r=n.menuList;return(0,i.jsx)(Hn,{children:r.map((function(n,r){return(0,i.jsx)(Bn,{children:(0,i.jsx)(Rn,{id:r.toString(),selected:e[r],onClick:function(){return t(r)},children:n})})}))})};function Mn(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Yn=function(){var n=(0,r.useState)([!0].concat(Mn(new Array(4).fill(!1)))),e=n[0],t=n[1],a=["INTRO","VISION","AI","SERVICE","CONTACT","MAP"],o=(0,r.useRef)(0),c=An(),s=function(n){var e=new Array(a.length).fill(!1);e[n]=!0,t(e)};return(0,r.useEffect)((function(){var n=e.indexOf(!0);document.querySelectorAll(".section")[n].scrollIntoView({behavior:"smooth"}),sessionStorage.setItem("sectionIdx",n.toString())}),[e]),(0,r.useEffect)((function(){document.querySelectorAll(".section").forEach((function(n,e){n.addEventListener("wheel",(function(t){var i=t.deltaY;c.debounce((function(){var t;i>0&&n.nextElementSibling?s(e+1):i<0&&"SECTION"===(null===(t=n.previousElementSibling)||void 0===t?void 0:t.tagName)&&s(e-1)}),600)})),n.addEventListener("touchstart",(function(n){o.current=n.changedTouches[0].screenY})),n.addEventListener("touchend",(function(t){c.debounce((function(){var i;t.changedTouches[0].screenY<o.current&&n.nextElementSibling?s(e+1):t.changedTouches[0].screenY>o.current&&"SECTION"===(null===(i=n.previousElementSibling)||void 0===i?void 0:i.tagName)&&s(e-1)}),600)}))}))}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(Ln,{selected:e,selectMenu:s,menuList:a})})},qn=t(9101),Vn=t(5923),Gn=t(5333);function Wn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Dn(){var n=Wn(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  text-align: left !important;\n"]);return Dn=function(){return n},n}function Jn(){var n=Wn(["\n  color: white;\n  width: 92%;\n  max-width: 1290px;\n  padding: 2% 0;\n  margin: auto;\n  text-align: center;\n  margin-bottom: 0;\n"]);return Jn=function(){return n},n}function Kn(){var n=Wn(["\n  max-width: 700px;\n  margin: auto;\n  margin-top: 0;\n  background: white;\n  padding: 10px;\n  border-radius: 5px;\n  @media (max-width: 700px) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n"]);return Kn=function(){return n},n}function Un(){var n=Wn(["\n  width: 100% !important;\n  margin-right: 20px;\n  float: left;\n"]);return Un=function(){return n},n}function Xn(){var n=Wn(["\n  width: 100%;\n  display: flex;\n"]);return Xn=function(){return n},n}function Qn(){var n=Wn(["\n  float: right;\n"]);return Qn=function(){return n},n}function $n(){var n=Wn(["\n  width: 98%;\n  height: 180px;\n  border-radius: 4px;\n  @media (max-height: 644px) {\n    height: 20vh;\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Wn(["\n  position: absolute;\n"]);return ne=function(){return n},n}function ee(){var n=Wn(["\n  width: 98%;\n  height: 150px;\n  padding: 00px 20px 10px 20px;\n  border: 1px solid #ddd;\n  background-color: #fff;\n  overflow-y: scroll;\n  margin: 10px 0;\n  @media (max-height: 644px) {\n    height: 20vh;\n  }\n"]);return ee=function(){return n},n}function te(){var n=Wn(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return te=function(){return n},n}function ie(){var n=Wn(["\n  margin-bottom: 5px;\n  font-size: 13px;\n"]);return ie=function(){return n},n}function re(){var n=Wn(["\n  outline: 0;\n  border: 0;\n  border-radius: 15px;\n  background: black;\n  color: white;\n  padding: 10px 40px;\n  cursor: pointer;\n"]);return re=function(){return n},n}var ae=(0,c.ZP)(Gn.Z)(Dn()),oe=c.ZP.div(Jn()),ce=c.ZP.div(Kn()),se=(0,c.ZP)(Vn.Z)(Un()),ue=c.ZP.div(Xn()),de=(0,c.ZP)(se)(Qn()),le=c.ZP.textarea($n()),fe=(0,c.ZP)(P.Bg)(ne()),me=c.ZP.div(ee()),he=(0,c.ZP)(P.Section)(te()),xe=c.ZP.li(ie()),pe=c.ZP.input(re()),ve=function(){var n=(0,r.useRef)();return(0,i.jsxs)(he,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(fe,{alt:"",src:"https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_960_720.jpg"})}),(0,i.jsxs)(oe,{"data-aos":"fade-down",children:[(0,i.jsx)("h2",{children:"\ubb38\uc758\uc0ac\ud56d"}),(0,i.jsx)("div",{children:"INQUIRY"})]}),(0,i.jsx)(ce,{"data-aos":"fade-down",children:(0,i.jsxs)(ae,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},ref:n,onSubmit:function(e){e.preventDefault(),qn.ZP.sendForm("tonymkcv","template_3YUmNpTi",n.current,"user_tbMVZhZNhbJbK8s6CoGH3").then((function(n){alert("\uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),console.log(n.text)}),(function(n){console.log(n.text)}))},children:[(0,i.jsxs)(ue,{children:[(0,i.jsx)(se,{required:!0,label:"\uc774\ub984",name:"user_name"}),(0,i.jsx)(de,{required:!0,label:"\uc774\uba54\uc77c \uc8fc\uc18c",type:"email",name:"user_email"})]}),(0,i.jsx)(le,{name:"message",placeholder:"\ubb38\uc758\uc0ac\ud56d"}),(0,i.jsxs)(me,{children:[(0,i.jsx)("h5",{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc548\ub0b4"}),(0,i.jsx)("h6",{children:"\ubb38\uc758 \uc2e0\uccad \uc2dc, \uc544\ub798\uc640 \uac19\uc774 \uace0\uac1d\ub2d8\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,i.jsxs)("ol",{children:[(0,i.jsx)(xe,{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\ubc94\uc704 : \uc774\ub984, \uc5f0\ub77d\ucc98, \uc774\uba54\uc77c"}),(0,i.jsx)(xe,{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801 : \ubb38\uc758 \uc2e0\uccad \ud655\uc778 \ubc0f \uc0c1\ub2f4\uc790\ub8cc"}),(0,i.jsx)(xe,{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \ubcf4\uc720\uae30\uac04 : \uc774\uc6a9\uc790\uc758 \uac1c\uc778\uc815\ubcf4\ub294 \uc6d0\uce59\uc801\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\uc758 \uc218\uc9d1 \ubc0f \uc774\uc6a9 \ubaa9\uc801\uc774 \ub2ec\uc131\ub418\uba74 \uc9c0\uccb4 \uc5c6\uc774 \ud30c\uae30\ud558\uba70\ubcf4\uc720\uae30\uac04\uc740 \ucd5c\ub300 1\ub144\uc744 \ub118\uae30\uc9c0 \uc54a\ub294 \uac83\uc744 \uc6d0\uce59\uc73c\ub85c \ud55c\ub2e4."})]})]}),(0,i.jsx)(pe,{type:"submit",value:"\ubcf4\ub0b4\uae30"})]})})]})},ge=t(4020),we=t(9903),je=t(1123);function be(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Pe(){var n=be(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  background: #333;\n  padding: 0px 30px;\n  font-weight: 200;\n  word-break: keep-all;\n  @media (max-width: 1360px) {\n    padding: 0 2.21vw;\n  }\n  @media (max-width: 740px) {\n    flex-direction: column;\n  }\n"]);return Pe=function(){return n},n}function ye(){var n=be(["\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0px;\n  color: #a5a5a5;\n  font-size: 16px;\n  line-height: 18px;\n  padding: 30px 0;\n  justify-content: center;\n  display: flex;\n  @media (max-width: 1360px) {\n    font-size: 1.18vw;\n    padding: 2.21vw 0;\n    line-height: 1.32vw;\n  }\n  @media (max-width: 740px) {\n    font-size: 9.9px;\n    padding: 8px 0;\n    line-height: 11px;\n  }\n"]);return ye=function(){return n},n}function Ze(){var n=be(["\n  align-items: center;\n  font-size: 20px;\n  @media (max-width: 1360px) {\n    font-size: 1.47vw;\n  }\n  @media (max-width: 740px) {\n    font-size: 9px;\n  }\n"]);return Ze=function(){return n},n}function ze(){var n=be(["\n  padding-left: 20px;\n  @media (max-width: 1360px) {\n    padding-left: 1.47vw;\n  }\n  @media (max-width: 740px) {\n    padding-left: 12.1px;\n  }\n"]);return ze=function(){return n},n}function Ne(){var n=be(["\n  font-weight: bold;\n"]);return Ne=function(){return n},n}function Oe(){var n=be(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  transition: all 0.1s;\n  :hover {\n    font-weight: 600;\n  }\n  @media (max-width: 1360px) {\n    margin-right: 1.47vw;\n  }\n  @media (max-width: 740px) {\n    margin-right: 12.1px;\n  }\n"]);return Oe=function(){return n},n}function Se(){var n=be(["\n  font-size: 45px;\n  margin-right: 5px;\n  @media (max-width: 1360px) {\n    font-size: 3.31vw;\n    margin-right: 0.37vw;\n  }\n  @media (max-width: 740px) {\n    font-size: 26.4px;\n    margin-right: 3.3px;\n  }\n"]);return Se=function(){return n},n}function ke(){var n=be(["\n  ","\n"]);return ke=function(){return n},n}function Ee(){var n=be(["\n  ","\n"]);return Ee=function(){return n},n}function Ie(){var n=be(["\n  ","\n"]);return Ie=function(){return n},n}var Ae=c.ZP.footer(Pe()),Ce=c.ZP.div(ye()),_e=(0,c.ZP)(Ce)(Ze()),Te=c.ZP.span(ze()),Fe=c.ZP.span(Ne()),He=c.ZP.a(Oe()),Be=(0,c.iv)(Se()),Re=(0,c.ZP)(ge.Z)(ke(),Be),Le=(0,c.ZP)(je.Z)(Ee(),Be),Me=(0,c.ZP)(we.Z)(Ie(),Be),Ye=function(){return(0,i.jsxs)(Ae,{children:[(0,i.jsx)(Ce,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(Fe,{children:"\uc0c1\ud638 : \uc8fc\uc2dd\ud68c\uc0ac \ub354\uc2ec\ud50c"})," ",(0,i.jsx)(Te,{children:"\uc8fc\uc18c : \uad11\uc8fc\uad11\uc5ed\uc2dc \uc11c\uad6c \uacbd\uc5f4\ub85c 17\ubc88\uae38 12 303\ud638"})," ",(0,i.jsx)(Te,{children:"\ub300\ud45c : \uc624\uacbd\ubbf8"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 402-82-22486"," ",(0,i.jsx)(Te,{children:" \ud1b5\uc2e0\ud310\ub9e4\uc2e0\uace0\ubc88\ud638 : \uc81c 2012 - \uc804\ubd81\uc644\uc8fc - 0030\ud638 "})," ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Copyright \xa9 Thesimple Co,.Ltd. All Rights Reserved."]})}),(0,i.jsxs)(_e,{children:[(0,i.jsxs)(He,{href:"naver.com",children:[(0,i.jsx)(Re,{}),(0,i.jsx)("span",{children:"Instagram"})]}),(0,i.jsxs)(He,{href:"tel:010-9357-9784",children:[(0,i.jsx)(Le,{}),(0,i.jsx)("span",{children:"010-9357-9784"})]}),(0,i.jsxs)(He,{href:"mailto:thesimple@thesimple.kr",children:[(0,i.jsx)(Me,{}),(0,i.jsx)("span",{children:"thesimple@thesimple.kr"})]})]})]})};function qe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Ve(){var n=qe(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"]);return Ve=function(){return n},n}function Ge(){var n=qe(["\n  height: 50vh;\n  width: 100vw;\n"]);return Ge=function(){return n},n}function We(){var n=qe(["\n  @media (max-width: 1280px) {\n    font-size: 1.84vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 3vmin;\n    margin-bottom: 3vmin;\n  }\n"]);return We=function(){return n},n}function De(){var n=qe(["\n  white-space: unset;\n  word-break: keep-all;\n  @media (max-width: 1280px) {\n    font-size: 4.03vw;\n  }\n  @media (max-width: 723px) {\n    font-size: 5.5vmin;\n  }\n"]);return De=function(){return n},n}function Je(){var n=qe(["\n  margin-bottom: 5vh;\n"]);return Je=function(){return n},n}var Ke=(0,c.ZP)(P.Section)(Ve()),Ue=c.ZP.iframe(Ge()),Xe=(0,c.ZP)(P.SubHeader)(We()),Qe=(0,c.ZP)(P.H2)(De()),$e=(0,c.ZP)(P.Header)(Je()),nt=function(){return(0,i.jsxs)(Ke,{className:"section","data-scroll":!0,children:[(0,i.jsx)(P.Figure,{className:"figure",children:(0,i.jsx)(P.Bg,{alt:"",src:"https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_960_720.jpg"})}),(0,i.jsxs)($e,{"data-aos":"fade-down",className:"header",children:[(0,i.jsx)(Qe,{className:"heading",children:"\uc624\uc2dc\ub294 \uae38"}),(0,i.jsx)(Xe,{className:"subheading",children:"\uad11\uc8fc\uad11\uc5ed\uc2dc \uc11c\uad6c \uacbd\uc5f4\ub85c 17\ubc88\uae38 12 303\ud638"})]}),(0,i.jsx)(Ue,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.1234058231312!2d126.88926357965772!3d35.15284353531198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c753ab03c1b%3A0x4b3dd0247d77a3b9!2z6rSR7KO86rSR7Jet7IucIOyEnOq1rCDqsr3sl7TroZwxN-uyiOq4uCAxMiAz7Li1IDMwM-2YuA!5e0!3m2!1sko!2skr!4v1643164277696!5m2!1sko!2skr",loading:"lazy",title:"map"}),(0,i.jsx)(Ye,{})]})},et=t(523),tt=t.n(et);function it(){var n,e,t=(n=["\n  width: 8vmin;\n  z-index: 999;\n  position: fixed;\n  left: 4vmin;\n  top: 3vmin;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return it=function(){return t},t}var rt=c.ZP.img(it()),at=An(),ot=function(){var n=(0,r.useState)(!0),e=n[0],t=n[1];return(0,r.useEffect)((function(){window.scrollTo(0,0),window.addEventListener("resize",(function(){at.debounce((function(){t(!e),setTimeout((function(){var n,e=null!==(n=sessionStorage.getItem("sectionIdx"))&&void 0!==n?n:(0).toString();document.getElementById(e).click()}),500)}),300)})),tt().polyfill();var n=document.createElement("script");n.type="text/javascript",n.src="https://unpkg.com/splitting/dist/splitting.min.js",document.head.appendChild(n),n.onload=function(){window.Splitting({target:".heading",by:"chars",key:null})}}),[]),(0,r.useEffect)((function(){u().init({duration:1e3}),u().refresh(),o()({cssProps:{visibleY:!0,viewportY:!0}})}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Yn,{}),(0,i.jsx)(rt,{src:"./images/logo.png"}),(0,i.jsx)(T,{}),(0,i.jsx)(B,{}),(0,i.jsx)(an,{}),(0,i.jsx)(In,{}),(0,i.jsx)(ve,{}),(0,i.jsx)(nt,{})]})}}},function(n){n.O(0,[971,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);