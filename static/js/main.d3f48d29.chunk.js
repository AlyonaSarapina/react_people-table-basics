(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),r=c(7),a=(c(31),c(32),c(0)),s=c(3),j=(c(33),c(2)),i=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{className:"title",children:"Home Page"})})},l=c(20),o=c(4);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(35);var h=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},d=c(12),O=c.n(d),x=function(e){var t=e.person;return Object(j.jsx)(r.b,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:O()({"has-text-danger":t&&"f"===t.sex}),children:t.name})},u=function(e){var t=e.people,c=e.onError,n=Object(s.p)().slug;return Object(j.jsx)(j.Fragment,{children:!c&&(t.length>0?Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":e.slug===n}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(x,{person:e.mother}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(x,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]}):Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}))})},m=function(e,t,c){return"father"===c?e.find((function(e){return e.name===t.fatherName})):e.find((function(e){return e.name===t.motherName}))},p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],d=s[1],O=Object(a.useState)(!0),x=Object(o.a)(O,2),p=x[0],f=x[1];return Object(a.useEffect)((function(){f(!0),b().then((function(e){var t=e.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{father:m(e,t,"father"),mother:m(e,t,"mother")})}));n(t)})).catch((function(){return d(!0)})).finally((function(){return f(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[p?Object(j.jsx)(h,{}):Object(j.jsx)(u,{onError:i,people:c}),i&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})},g=function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(r.c,{className:g,to:"/",children:"Home"}),Object(j.jsx)(r.c,{className:g,to:"/people",children:"People"})]})})}),Object(j.jsx)(s.b,{})]})},N=function(){return Object(j.jsx)("div",{"data-cy":"app",children:Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(s.e,{children:Object(j.jsxs)(s.c,{path:"/",element:Object(j.jsx)(v,{}),children:[Object(j.jsx)(s.c,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(s.c,{path:"home",element:Object(j.jsx)(s.a,{replace:!0,to:"/"})}),Object(j.jsxs)(s.c,{path:"people",children:[Object(j.jsx)(s.c,{index:!0,element:Object(j.jsx)(p,{})}),Object(j.jsx)(s.c,{path:":slug",element:Object(j.jsx)(p,{})})]}),Object(j.jsx)(s.c,{path:"*",element:Object(j.jsx)(f,{})})]})})})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(r.a,{children:Object(j.jsx)(N,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d3f48d29.chunk.js.map