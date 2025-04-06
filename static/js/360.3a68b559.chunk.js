"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[360],{352:(n,r,o)=>{o.r(r),o.d(r,{default:()=>W});var e=o(791);const t={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var a,i=new Uint8Array(16);function d(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).slice(1));function l(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(s[n[r+0]]+s[n[r+1]]+s[n[r+2]]+s[n[r+3]]+"-"+s[n[r+4]]+s[n[r+5]]+"-"+s[n[r+6]]+s[n[r+7]]+"-"+s[n[r+8]]+s[n[r+9]]+"-"+s[n[r+10]]+s[n[r+11]]+s[n[r+12]]+s[n[r+13]]+s[n[r+14]]+s[n[r+15]]).toLowerCase()}const p=function(n,r,o){if(t.randomUUID&&!r&&!n)return t.randomUUID();var e=(n=n||{}).random||(n.rng||d)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){o=o||0;for(var a=0;a<16;++a)r[o+a]=e[a];return r}return l(e)};var u,x,g,f=o(168),b=o(867),m=o(360);const h=b.ZP.div(u||(u=(0,f.Z)(["\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  max-width: 500px;\n  margin: 20px auto;\n"]))),v=b.ZP.textarea(x||(x=(0,f.Z)(["\n  width: 100%;\n  height: 150px;\n  padding: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 16px;\n  resize: vertical;\n  box-sizing: border-box;\n\n  &:focus {\n    border-color: #adb5bd; /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0444\u043e\u043a\u0443\u0441\u0443 */\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0442\u0456\u043d\u044c */\n  }\n"]))),w=(0,b.ZP)(m.Z)(g||(g=(0,f.Z)(["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n  background-color: #6c757d; /* \u0422\u0435\u043c\u043d\u043e-\u0441\u0456\u0440\u0438\u0439 \u0444\u043e\u043d \u043a\u043d\u043e\u043f\u043a\u0438 */\n  border-color: #6c757d; /* \u0422\u0435\u043c\u043d\u043e-\u0441\u0456\u0440\u0438\u0439 \u0431\u043e\u0440\u0434\u0435\u0440 \u043a\u043d\u043e\u043f\u043a\u0438 */\n\n  &:hover {\n    background-color: #5a6268; /* \u0422\u0440\u043e\u0445\u0438 \u0442\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0445\u043e\u0432\u0435\u0440\u0430 */\n    border-color: #545b62; /* \u0429\u0435 \u0442\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0431\u043e\u0440\u0434\u0435\u0440\u0430 \u043f\u0440\u0438 \u0445\u043e\u0432\u0435\u0440\u0456 */\n  }\n"])));var Z=o(184);const j=n=>{let{onSubmit:r}=n;const[o,t]=(0,e.useState)((()=>{const n=localStorage.getItem("review");return n?JSON.parse(n):""})),{login:a}=JSON.parse(localStorage.getItem("data")||{});return(0,Z.jsx)(h,{children:(0,Z.jsxs)("form",{onSubmit:n=>{if(n.preventDefault(),""===o)return void alert("Fill up all the fields!");const e={review:o,id:p()};t(""),r(e),localStorage.removeItem("review")},children:[(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:a})}),(0,Z.jsx)(v,{onChange:n=>{const r=n.target.value;t(r),localStorage.setItem("review",JSON.stringify(r))},value:o}),(0,Z.jsx)(w,{type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})})};var k,S,y,P,I,z;const N=b.ZP.div(k||(k=(0,f.Z)(["\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: 30px;\n"]))),U=b.ZP.div(S||(S=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n"]))),J=b.ZP.div(y||(y=(0,f.Z)(["\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: relative; /* \u0414\u043b\u044f \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043d\u043e\u043f\u043a\u0438 */\n"]))),O=b.ZP.h1(P||(P=(0,f.Z)(["\n  font-size: 24px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),_=b.ZP.p(I||(I=(0,f.Z)(["\n  font-size: 16px;\n  color: #666;\n"]))),C=b.ZP.button(z||(z=(0,f.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: #555;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n"]))),D=n=>{let{games:r}=n;const[o,t]=(0,e.useState)((()=>{const n=localStorage.getItem("comment");return n?JSON.parse(n):[]}));return(0,e.useEffect)((()=>{localStorage.setItem("comment",JSON.stringify(o))}),[o]),(0,Z.jsxs)(N,{children:[0!==o.length&&(0,Z.jsx)(U,{children:o.map(((n,r)=>(0,Z.jsxs)(J,{children:[(0,Z.jsx)(C,{onClick:()=>{return r=n.id,void t(o.filter((n=>n.id!==r)));var r},children:"X"}),(0,Z.jsx)(O,{children:n.game}),(0,Z.jsx)(_,{children:n.review})]},r)))}),(0,Z.jsx)(j,{games:r,onSubmit:n=>{t((r=>[...r,n]))}})]})};var R,E,V,F,L,T,A;const B=b.ZP.div(R||(R=(0,f.Z)(["\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  padding-top: 30px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n"]))),G=b.ZP.h1(E||(E=(0,f.Z)(["\n  font-size: 2.5rem;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),H=b.ZP.img(V||(V=(0,f.Z)(["\ndisplay: block;\nmargin: 0 auto;\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n"]))),X=b.ZP.p(F||(F=(0,f.Z)(["\n  font-size: 1.2rem;\n  color: #555;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  text-align: justify;\n"]))),q=b.ZP.p(L||(L=(0,f.Z)(["\n  font-size: 1rem;\n  color: #444;\n  margin: 10px 0;\n\n  & a {\n    color: #007bff;\n    text-decoration: none;\n    font-weight: bold;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),K=b.ZP.button(T||(T=(0,f.Z)(["\n  background-color: #ff7f50; /* \u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 */\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n\n  &:hover {\n    background-color: #ff6347; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u0438\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transform: scale(1.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* \u0414\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438, \u043a\u043e\u043b\u0438 \u0432\u043e\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0430 (\u043d\u0435 \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0432\u0438\u0431\u0440\u0430\u043d\u043e\u0433\u043e) */\n  &.active {\n    background-color: #ff6347;\n  }\n\n  &.active:hover {\n    background-color: #ff4500; /* \u041d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0432\u0436\u0435 \u0434\u043e\u0434\u0430\u043d\u043e\u0457 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  }\n"]))),M=b.ZP.button(A||(A=(0,f.Z)(['\n  background-color: #4caf50; /* \u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438, \u044f\u043a\u0449\u043e \u0432\u0436\u0435 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443 */\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: not-allowed;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n\n  &:hover {\n    background-color: #45a049; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transform: scale(1.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* \u0414\u043e\u0434\u0430\u0454\u043c\u043e \u0441\u0442\u0438\u043b\u0456 \u0434\u043b\u044f \u0441\u0442\u0430\u043d\u0443, \u043a\u043e\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0430 "\u0412\u0436\u0435 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443" */\n  &.disabled {\n    cursor: not-allowed; /* \u0417\u0430\u0431\u043e\u0440\u043e\u043d\u044f\u0454 \u043d\u0430\u0442\u0438\u0441\u043a\u0430\u043d\u043d\u044f */\n    background-color: #388e3c; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u0438\u0439 */\n  }\n'])));var Q=o(689);const W=n=>{let{isLoggedIn:r,games:o}=n;const t=(0,Q.TH)(),{state:a}=t,{title:i,thumbnail:d,short_description:s,genre:c,platform:l,developer:p,release_date:u,game_url:x}=a,[g,f]=(0,e.useState)((()=>{var n;return null!==(n=JSON.parse(localStorage.getItem("favourite")))&&void 0!==n?n:[]})),b=g.includes(i);return(0,Z.jsxs)(B,{children:[r&&(b?(0,Z.jsx)(M,{onClick:()=>{const n=g.filter((n=>n!==i));f(n),localStorage.setItem("favourite",JSON.stringify(n))},children:"\u0413\u0440\u0430 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443"}):(0,Z.jsx)(K,{onClick:()=>{const n=[...g,i];f(n),localStorage.setItem("favourite",JSON.stringify(n))},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445"})),(0,Z.jsx)(G,{children:i}),(0,Z.jsx)(H,{src:d}),(0,Z.jsx)(X,{children:s}),(0,Z.jsxs)(q,{children:["Platform: ",l]}),(0,Z.jsxs)(q,{children:["Genre: ",c]}),(0,Z.jsxs)(q,{children:["Developer: ",p]}),(0,Z.jsxs)(q,{children:["Release date: ",u]}),(0,Z.jsxs)(q,{children:["Play:"," ",(0,Z.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:x})]}),r&&(0,Z.jsx)(D,{games:o})]})}},360:(n,r,o)=>{o.d(r,{Z:()=>l});var e=o(694),t=o.n(e),a=o(791),i=o(341),d=o(162),s=o(184);const c=a.forwardRef(((n,r)=>{let{as:o,bsPrefix:e,variant:a="primary",size:c,active:l=!1,disabled:p=!1,className:u,...x}=n;const g=(0,d.vE)(e,"btn"),[f,{tagName:b}]=(0,i.FT)({tagName:o,disabled:p,...x}),m=b;return(0,s.jsx)(m,{...f,...x,ref:r,disabled:p,className:t()(u,g,l&&"active",a&&"".concat(g,"-").concat(a),c&&"".concat(g,"-").concat(c),x.href&&p&&"disabled")})}));c.displayName="Button";const l=c}}]);
//# sourceMappingURL=360.3a68b559.chunk.js.map