"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[968],{966:(e,n,r)=>{r.d(n,{f:()=>c});var t,o,a=r(168),s=r(867);s.ZP.div(t||(t=(0,a.Z)(["\n    margin-top: 30px;\n"])));const c=s.ZP.button(o||(o=(0,a.Z)(["\n  display: block;\n  margin: 15px auto;\n  text-align: center;\n  background-color: #555;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 10px 20px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n"])))},357:(e,n,r)=>{r.d(n,{Z:()=>l});r(791);var t,o,a=r(168),s=r(867);const c=s.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  text-align: center;\n"]))),d=s.ZP.p(o||(o=(0,a.Z)(["\n\n  font-size: 18px;\n"])));var i=r(184);const l=e=>{let{searchParam:n}=e;return console.log(n),(0,i.jsx)(c,{style:{textAlign:"center",width:"100%"},children:(0,i.jsxs)(d,{children:['\u041d\u043e\u0432\u0438\u043d \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "',n,'" \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.']})})}},489:(e,n,r)=>{r.d(n,{h:()=>c});var t,o=r(168),a=r(867),s=r(87);const c=(0,a.ZP)(s.OL)(t||(t=(0,o.Z)(["\n  text-decoration: none;\n  color: #0e0f0f; \n\n  &:hover {\n    text-decoration: underline; \n  }\n"])))},968:(e,n,r)=>{r.r(n),r.d(n,{default:()=>u});var t=r(791),o=r(87),a=r(635),s=r(677),c=r(743),d=r(376),i=r(70),l=r(489),p=r(184);const h=e=>{let{el:n}=e;return(0,p.jsxs)(i.Z,{className:"h-100",children:[(0,p.jsx)(i.Z.Img,{variant:"top",src:n.main_image,alt:n.short_description}),(0,p.jsx)(l.h,{to:"/".concat(n.id),state:n,rel:"noopener noreferrer",className:"stretched-link",children:(0,p.jsxs)(i.Z.Body,{children:[(0,p.jsx)(i.Z.Title,{children:n.title}),(0,p.jsx)(i.Z.Text,{children:n.short_description})]})})]})};var m=r(357),x=r(966);const u=()=>{var e;const[n,r]=(0,t.useState)([]),[i,l]=(0,t.useState)([]),[u,g]=(0,t.useState)(20),[Z,f]=(0,o.lr)(),b=null!==(e=Z.get("search"))&&void 0!==e?e:"";(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,a.b)();r(e)}catch(e){console.error(e)}})()}),[]),(0,t.useEffect)((()=>{l(n.filter((e=>e.title.toLowerCase().includes(b.toLowerCase()))))}),[Z,n,b]);const j=i.length>0?i:n,v=u<j.length;return console.log(u),(0,p.jsxs)("div",{children:[(0,p.jsx)(d.Z,{setSearchParam:f,query:b}),(0,p.jsx)(c.Z,{xs:1,md:3,className:"g-3 mt-3 d-flex align-items-stretch",children:Z&&b&&0===i.length?(0,p.jsx)(s.Z,{children:(0,p.jsx)(m.Z,{searchParam:Z})}):j.slice(0,u).map(((e,n)=>(0,p.jsx)(s.Z,{children:(0,p.jsx)(h,{el:e})},n)))}),v&&(0,p.jsx)(x.f,{onClick:()=>{g((e=>e+20))},children:"Load more"})]})}},376:(e,n,r)=>{r.d(n,{Z:()=>l});r(791);var t,o,a=r(168),s=r(867);const c=s.ZP.input(t||(t=(0,a.Z)(["\nmargin-top: 15px;\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  transition: border-color 0.3s ease-in-out;\n  width: 100%;\n  max-width: 300px;\n\n  /* \u0417\u043c\u0456\u043d\u0430 \u0441\u0442\u0438\u043b\u044e \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  &:focus {\n    border-color: #4d4c4a; /* \u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 */\n    box-shadow: 0 0 5px rgba(27, 27, 27, 0.5); /* \u0422\u0456\u043d\u044c \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  }\n\n  /* \u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0444\u043e\u043d\u0443 */\n  body.dark-mode & {\n    background-color: #333;\n    color: #fff;\n    border-color: #555;\n  }\n"]))),d=s.ZP.div(o||(o=(0,a.Z)(["\n    text-align: center;\n    margin-bottom: 30px;\n"])));var i=r(184);const l=e=>{let{setSearchParam:n,query:r}=e;return(0,i.jsx)(d,{children:(0,i.jsx)(c,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442...",onChange:e=>{let{target:r}=e;n({search:r.value})},value:r})})}},635:(e,n,r)=>{r.d(n,{C:()=>a,b:()=>o});var t=r(294);const o=async()=>{const e={method:"GET",url:"https://mmo-games.p.rapidapi.com/latestnews",headers:{"X-RapidAPI-Key":"cb5ec0d937mshd5990c2595c25fap103db2jsn373dd91ee4a4","X-RapidAPI-Host":"mmo-games.p.rapidapi.com"}};try{return(await t.Z.request(e)).data}catch(n){console.error(n)}},a=async()=>{const e={method:"GET",url:"https://mmo-games.p.rapidapi.com/games",headers:{"X-RapidAPI-Key":"cb5ec0d937mshd5990c2595c25fap103db2jsn373dd91ee4a4","X-RapidAPI-Host":"mmo-games.p.rapidapi.com"}};try{return(await t.Z.request(e)).data}catch(n){console.error(n)}}}}]);
//# sourceMappingURL=968.8c323411.chunk.js.map