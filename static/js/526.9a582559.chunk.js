"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[526],{526:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var i,o,a,r,l,c=e(439),d=e(791),s=e(689),p=e(168),h=e(87),u=e(82),x=u.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: -15px;\n  list-style: none;\n"]))),f=u.ZP.li(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 220px;\n  margin: 30px;\n"]))),v=(0,u.ZP)(h.OL)(a||(a=(0,p.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n"]))),m=u.ZP.div(r||(r=(0,p.Z)(["\n  max-width: 200px;\n"]))),g=u.ZP.img(l||(l=(0,p.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);\n"]))),w=e(184),_="c2cddca1d76ae825076ff4418ab72190";var Z=function(){var n=(0,d.useState)(null),t=(0,c.Z)(n,2),e=t[0],i=t[1],o=(0,s.TH)();return(0,d.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(_)).then((function(n){return n.json()})).then((function(n){var t=n.results;i(t)}))}),[]),(0,w.jsx)("div",{children:(0,w.jsx)(x,{children:e&&e.map((function(n,t){return(0,w.jsx)(f,{children:(0,w.jsx)(v,{to:"/movies/".concat(n.id),state:{from:o},children:(0,w.jsxs)(m,{children:[(0,w.jsx)(g,{width:"200",heigth:"300",alt:"".concat(null===n||void 0===n?void 0:n.title),src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/".concat(null===n||void 0===n?void 0:n.poster_path)}),(0,w.jsx)("p",{children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_name)})]})})},t)}))})})}}}]);
//# sourceMappingURL=526.9a582559.chunk.js.map