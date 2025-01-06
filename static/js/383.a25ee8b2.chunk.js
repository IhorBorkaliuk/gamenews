"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{383:(n,o,e)=>{e.r(o),e.d(o,{default:()=>Z});var r,t,a,i,l,s,c,d=e(791),g=e(168),f=e(867);const u=f.ZP.div(r||(r=(0,g.Z)(["\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  padding-top: 30px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n"]))),x=f.ZP.h1(t||(t=(0,g.Z)(["\n  font-size: 2.5rem;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),p=f.ZP.img(a||(a=(0,g.Z)(["\ndisplay: block;\nmargin: 0 auto;\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n"]))),h=f.ZP.p(i||(i=(0,g.Z)(["\n  font-size: 1.2rem;\n  color: #555;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  text-align: justify;\n"]))),b=f.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 1rem;\n  color: #444;\n  margin: 10px 0;\n\n  & a {\n    color: #007bff;\n    text-decoration: none;\n    font-weight: bold;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),m=f.ZP.button(s||(s=(0,g.Z)(["\n  background-color: #ff7f50; /* \u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 */\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n\n  &:hover {\n    background-color: #ff6347; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u0438\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transform: scale(1.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* \u0414\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438, \u043a\u043e\u043b\u0438 \u0432\u043e\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0430 (\u043d\u0435 \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0432\u0438\u0431\u0440\u0430\u043d\u043e\u0433\u043e) */\n  &.active {\n    background-color: #ff6347;\n  }\n\n  &.active:hover {\n    background-color: #ff4500; /* \u041d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0432\u0436\u0435 \u0434\u043e\u0434\u0430\u043d\u043e\u0457 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  }\n"]))),k=f.ZP.button(c||(c=(0,g.Z)(['\n  background-color: #4caf50; /* \u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438, \u044f\u043a\u0449\u043e \u0432\u0436\u0435 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443 */\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: not-allowed;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n\n  &:hover {\n    background-color: #45a049; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transform: scale(1.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* \u0414\u043e\u0434\u0430\u0454\u043c\u043e \u0441\u0442\u0438\u043b\u0456 \u0434\u043b\u044f \u0441\u0442\u0430\u043d\u0443, \u043a\u043e\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0430 "\u0412\u0436\u0435 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443" */\n  &.disabled {\n    cursor: not-allowed; /* \u0417\u0430\u0431\u043e\u0440\u043e\u043d\u044f\u0454 \u043d\u0430\u0442\u0438\u0441\u043a\u0430\u043d\u043d\u044f */\n    background-color: #388e3c; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u0438\u0439 */\n  }\n'])));var v=e(689),w=e(184);const Z=n=>{let{isLoggedIn:o}=n;console.log(o);const e=localStorage.getItem("favourite"),[r,t]=(0,d.useState)(!!e),a=(0,v.TH)(),{state:i}=a,{title:l,thumbnail:s,short_description:c,genre:g,platform:f,developer:Z,release_date:j,game_url:P}=i;return console.log(r),(0,w.jsxs)(u,{children:[o&&(r?(0,w.jsx)(k,{onClick:()=>{localStorage.removeItem("favourite"),t(!1)},children:"\u0413\u0440\u0430 \u0432 \u043e\u0431\u0440\u0430\u043d\u043e\u043c\u0443"}):(0,w.jsx)(m,{onClick:()=>{localStorage.setItem("favourite",JSON.stringify(l)),t(!0)},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445"})),(0,w.jsx)(x,{children:l}),(0,w.jsx)(p,{src:s}),(0,w.jsx)(h,{children:c}),(0,w.jsxs)(b,{children:["Platform: ",f]}),(0,w.jsxs)(b,{children:["Genre: ",g]}),(0,w.jsxs)(b,{children:["Developer: ",Z]}),(0,w.jsxs)(b,{children:["Release date: ",j]}),(0,w.jsxs)(b,{children:["Play:"," ",(0,w.jsx)("a",{href:P,target:"_blank",rel:"noreferrer",children:P})]})]})}}}]);
//# sourceMappingURL=383.a25ee8b2.chunk.js.map