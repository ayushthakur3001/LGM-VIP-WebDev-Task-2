(this.webpackJsonptask2letsgrowmore=this.webpackJsonptask2letsgrowmore||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(13),n=c.n(a),i=c(3),j=(c(19),c(0));var r=function(e){var t=e.clickedInNav;return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("h2",{children:"WebMaker"}),Object(j.jsx)("button",{onClick:function(){t(!0)},children:"Get Users"})]})};c(21),c(22);var d=function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.avatar,alt:"img.."})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("h3",{children:[e.first_name," ",e.last_name," "]}),Object(j.jsxs)("p",{children:[e.email," "]})]})]})};c(23);var l=function(e){return e.load?Object(j.jsxs)("div",{className:"lds-default",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}):""},b=c(14),o=c.n(b);var O=function(e){var t=Object(s.useState)(!1),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(null),b=Object(i.a)(r,2),O=b[0],h=b[1];return Object(s.useEffect)((function(){e.click&&(n(!0),o.a.get("https://reqres.in/api/users?page=1",{timeout:1100}).then((function(e){h(e.data.data),n(!1)})))}),[e.click]),Object(j.jsxs)("div",{className:"container",children:[O&&O.map((function(e){return Object(j.jsx)(d,{first_name:e.first_name,last_name:e.last_name,email:e.email,avatar:e.avatar},e.id)})),Object(j.jsx)(l,{load:a})]})};c(42);var h=function(){return Object(j.jsxs)("div",{className:"before",children:[Object(j.jsx)("h1",{children:"Task 2"}),Object(j.jsx)("h2",{children:"LetsGrowMore"}),Object(j.jsxs)("h3",{children:["Fetch Data From API and show on",Object(j.jsx)("span",{children:" User Card Grid"}),"."]}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Create a User card grid layout having a navbar showing a brand name."}),Object(j.jsx)("li",{children:"Show a loader while the API fetches the data."})]})]})};c(43);var u=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(r,{clickedInNav:function(e){a(e)}}),!c&&Object(j.jsx)(h,{}),Object(j.jsx)(O,{click:c})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b5008cbf.chunk.js.map