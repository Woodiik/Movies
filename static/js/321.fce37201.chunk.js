"use strict";(self.webpackChunkMovies=self.webpackChunkMovies||[]).push([[321],{321:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var o,i,r,l,a,s,c,d,p=t(439),u=t(791),h=t(87),x=t(689),f=t(168),v=t(82),m=v.ZP.form(o||(o=(0,f.Z)(["\n  position: absolute;\n  top: -40px;\n  left: 55%;\n  margin-top: 58px;\n"]))),b=v.ZP.input(i||(i=(0,f.Z)(["\n  font-size: 20px;\n  outline: none;\n  border: 2px solid #5a5a5a;\n  border-radius: 5px;\n  :focus {\n    border-color: purple;\n  }\n"]))),g=v.ZP.button(r||(r=(0,f.Z)(["\n  font-size: 20px;\n  color: purple;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #5a5a5a;\n  border-radius: 5px;\n  :hover {\n    border-color: purple;\n    background-color: gainsboro;\n  }\n  :active {\n    transform: scale(0.9);\n  }\n"]))),Z=v.ZP.ul(l||(l=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: -15px;\n  list-style: none;\n"]))),w=v.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 220px;\n  margin: 30px;\n"]))),j=(0,v.ZP)(h.OL)(s||(s=(0,f.Z)(["\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n"]))),y=v.ZP.div(c||(c=(0,f.Z)(["\n  max-width: 200px;\n"]))),_=v.ZP.img(d||(d=(0,f.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);\n"]))),k=t(184),P=function(){var n,e=(0,u.useState)(""),t=(0,p.Z)(e,2),o=t[0],i=t[1],r=(0,u.useState)(null),l=(0,p.Z)(r,2),a=l[0],s=l[1],c=(0,h.lr)(),d=(0,p.Z)(c,2),f=d[0],v=d[1],P=null!==(n=f.get("name"))&&void 0!==n?n:"",S=(0,x.TH)();return(0,u.useEffect)((function(){""!==P&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("c2cddca1d76ae825076ff4418ab72190","&language=en-US&query=").concat(P,"&include_adult=false")).then((function(n){return n.json()})).then((function(n){var e=n.results;s(e)}))}),[o,P]),(0,k.jsxs)("div",{children:[(0,k.jsxs)(m,{autoComplete:"off",onSubmit:function(n){var e,t=n.target.elements.input.value;n.preventDefault(),i(t.trim()),e=t.trim(),v(""!==e?{name:e}:{})},children:[(0,k.jsx)(b,{defaultValue:P,placeholder:"Search movie",type:"text",name:"input"}),(0,k.jsx)(g,{type:"submit",children:"Search"})]}),a&&(0,k.jsx)("div",{children:(0,k.jsx)(Z,{children:a.map((function(n){return(0,k.jsx)(w,{children:(0,k.jsx)(j,{to:"/movies/".concat(n.id),state:{from:S},children:(0,k.jsxs)(y,{children:[n.poster_path&&(0,k.jsx)(_,{width:"200",height:"300",alt:"".concat(null===n||void 0===n?void 0:n.title),src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/".concat(n.poster_path)}),!n.poster_path&&(0,k.jsx)(_,{width:"200",height:"300",alt:"".concat(null===n||void 0===n?void 0:n.title),src:"https://www.publicdomainpictures.net/pictures/260000/nahled/play-button-15282372642Gh.jpg"}),(0,k.jsx)("p",{children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_name)})]})})},n.id)}))})}),0===(null===a||void 0===a?void 0:a.length)&&(0,k.jsxs)("h3",{children:['No results founded by search request "',P,'"']})]})}}}]);
//# sourceMappingURL=321.fce37201.chunk.js.map