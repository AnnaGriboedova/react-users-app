(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,s,r){},46:function(e,s,r){},75:function(e,s,r){"use strict";r.r(s);var t=r(1),n=r(0),c=r.n(n),a=r(15),i=r.n(a),u=(r(45),r(46),r(17)),j=r(9),o=r(22),d=r.n(o),b=r(37),l=r(25),O=r(10),v=r(38).create({baseURL:"https://reqres.in/api/",headers:{"Content-Type":"application/json"}}),m=function(){return v.get("users?per_page=12").then((function(e){return e.data}))},h="SET_USERS",f="REMOVE_USERS",x="ADD_USER",p={users:[],removeUsers:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case h:return Object(O.a)(Object(O.a)({},e),{},{users:s.users});case f:var r=[],t=e.users.filter((function(e){return e.id!==s.userId||(r=e,!1)}));return Object(O.a)(Object(O.a)({},e),{},{users:t,removeUsers:[].concat(Object(l.a)(e.removeUsers),[r])});case x:var n=e.removeUsers[0];return Object(O.a)(Object(O.a)({},e),{},{users:[].concat(Object(l.a)(e.users),[n]),removeUsers:e.removeUsers.filter((function(e){return e.id!==n.id}))})}return e},g=r(39),N=Object(j.c)({usersPage:U}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,y=Object(j.e)(N,_(Object(j.a)(g.a))),S=r(3),E=r(14),C=r(18),R=function(e){var s=e.user,r=e.removeUser,n=Object(t.jsx)(I,{firstName:s.first_name,lastName:s.last_name}),c=Object(t.jsx)(P,{removeUser:r,userId:s.id});return Object(t.jsxs)("li",{className:"user",children:[n,c]})},k=function(e){var s=e.user,r=e.removeUser,n=Object(t.jsx)(I,{firstName:s.first_name,lastName:s.last_name}),c=Object(t.jsx)(P,{removeUser:r,userId:s.id});return Object(t.jsxs)("div",{className:"user",children:[Object(t.jsx)("div",{children:Object(t.jsx)("img",{alt:"avatar",src:s.avatar})}),Object(t.jsxs)("div",{children:[n,Object(t.jsx)("div",{children:s.email})]}),c]})},I=function(e){var s=e.firstName,r=e.lastName;return Object(t.jsxs)("b",{children:[Object(t.jsx)("span",{children:s}),Object(t.jsx)("span",{children:r})]})},P=function(e){var s=e.removeUser,r=e.userId;return Object(t.jsx)("button",{className:"user__buttonRemove",onClick:function(){s(r)},children:"Remove"})},w=function(e){var s=e.users,r=e.AddButton,n=e.Settings,c=e.removeUser,a=s.map((function(e){return Object(t.jsx)(R,{user:e,removeUser:c},e.id)}));return Object(t.jsxs)("div",{className:"users_display_list",children:[n,Object(t.jsx)("ul",{className:"users",children:a}),r]})},A=function(e){var s=e.users,r=e.AddButton,n=e.Settings,c=e.removeUser,a=s.map((function(e){return Object(t.jsx)(k,{user:e,removeUser:c},e.id)}));return Object(t.jsxs)("div",{className:"users_display_blocks",children:[n,Object(t.jsxs)("div",{className:"users",children:[a,r]})]})},B=function(e){var s=Object(n.useState)(!0),r=Object(C.a)(s,2),c=r[0],a=r[1],i=!e.isEmptyRemoveUsers&&Object(t.jsx)("div",{className:"addUser ",children:Object(t.jsx)("button",{className:"button",onClick:e.addUser,children:"Add User"})}),u=Object(t.jsx)("div",{className:"settings",children:Object(t.jsx)("button",{className:"displayButton",onClick:function(){a(!c)},children:"display blocks"})});return c?Object(t.jsx)(w,{users:e.users,removeUser:e.removeUser,AddButton:i,Settings:u}):Object(t.jsx)(A,{users:e.users,removeUser:e.removeUser,AddButton:i,Settings:u})},T=Object(u.b)((function(e){return{users:e.usersPage.users,removeUsers:e.usersPage.removeUsers}}),{requestUsers:function(){return function(){var e=Object(b.a)(d.a.mark((function e(s){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return r=e.sent,s((t=r.data,{type:h,users:t})),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}var t}),e)})));return function(s){return e.apply(this,arguments)}}()},removeUser:function(e){return{type:f,userId:e}},addUser:function(){return{type:x}}})((function(e){var s=Object(n.useState)(!0),r=Object(C.a)(s,2),c=r[0],a=r[1],i=e.users;if(Object(n.useEffect)((function(){i.length||e.requestUsers().then((function(){a(!1)}))}),[i]),c&&!i.length)return"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430";var u=!e.removeUsers.length;return Object(t.jsx)("div",{children:Object(t.jsx)(B,{users:i,removeUser:e.removeUser,addUser:e.addUser,isEmptyRemoveUsers:u})})})),D=function(){return Object(t.jsxs)("nav",{children:[Object(t.jsx)("div",{children:Object(t.jsx)(E.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(t.jsx)("div",{children:Object(t.jsx)(E.b,{to:"/employees",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})})]})};function F(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(D,{}),Object(t.jsx)("div",{className:"contentContainer",children:Object(t.jsxs)(S.c,{children:[Object(t.jsx)(S.a,{exact:!0,render:function(){return Object(t.jsx)("div",{className:"homeContent",children:"Home Page"})},path:"/"}),Object(t.jsx)(S.a,{render:function(){return Object(t.jsx)(T,{})},path:"/employees"}),Object(t.jsx)(S.a,{render:function(){return Object(t.jsx)("div",{children:"404 page not found"})},path:"*"})]})})]})}var L=function(){return Object(t.jsx)(E.a,{children:Object(t.jsx)(u.a,{store:y,children:Object(t.jsx)(F,{})})})},q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,76)).then((function(s){var r=s.getCLS,t=s.getFID,n=s.getFCP,c=s.getLCP,a=s.getTTFB;r(e),t(e),n(e),c(e),a(e)}))};i.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(L,{})}),document.getElementById("root")),q()}},[[75,1,2]]]);
//# sourceMappingURL=main.4ddba8e3.chunk.js.map