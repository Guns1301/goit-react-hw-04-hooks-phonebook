(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Form_form__2EUDc",label:"Form_label__3amCs",input:"Form_input__1y-iB",btn:"Form_btn__2E0pZ"}},,,,,function(e,t,n){e.exports={links:"Contacts_links__h-p27",btn:"Contacts_btn__1_G0p"}},,function(e,t,n){e.exports={section:"Section_section__2mUBJ"}},function(e,t,n){e.exports={filter:"Filter_filter__340Kr"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),o=(n(16),n(6)),u=n(2),s=n(10),l=n.n(s),b=n(0),j=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:l.a.section,children:[Object(b.jsx)("h1",{children:t}),n]})},m=n(3),d=n.n(m);function f(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),l=s[0],j=s[1],m=function(){i("")},f=function(){j("")};return Object(b.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault(),t(a,l),m(),f()},children:[Object(b.jsxs)("label",{className:d.a.label,children:["Name",Object(b.jsx)("input",{className:d.a.input,type:"text",name:"name",value:a,placeholder:"Enter your name",onChange:function(e){i(e.currentTarget.value)},required:!0})]}),Object(b.jsxs)("label",{className:d.a.label,children:["Number",Object(b.jsx)("input",{className:d.a.input,type:"tel",name:"number",value:l,placeholder:"Enter your number",onChange:function(e){j(e.currentTarget.value)},required:!0})]}),Object(b.jsx)("button",{type:"submit",className:d.a.btn,children:"Add contact"})]})}var O=n(11),h=n.n(O),p=function(e){var t=e.filter,n=e.getFilterContact;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",{className:h.a.filter,type:"text",name:"filter",value:t,onChange:n,placeholder:"Enter name to find"})})},x=n(8),_=n.n(x),v=function(e){var t=e.contacts,n=e.deleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{className:_.a.links,children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.number}),Object(b.jsx)("button",{className:_.a.btn,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},g=n(21);n(18);function C(){var e=function(e,t){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),r=Object(u.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,i]}("contacts",[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),s=i[0],l=i[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Phonebook",children:Object(b.jsx)(f,{contacts:n,onSubmit:function(e,t){var c={id:Object(g.a)(),name:e,number:t},a=n.reduce((function(e,t){return[].concat(Object(o.a)(e),[t.name])}),[]),i=n.reduce((function(e,t){return[].concat(Object(o.a)(e),[t.number])}),[]);""!==e&&""!==t?a.includes(e)?alert("".concat(e," is already in contacts")):i.includes(t)?alert("".concat(t," is already in contacts")):r((function(e){return[c].concat(Object(o.a)(e))})):alert("Please enter all fields!")}})}),Object(b.jsxs)(j,{title:"Contacts",children:[Object(b.jsx)(p,{value:s,onChange:function(e){l(e.currentTarget.value)}}),Object(b.jsx)(v,{contacts:function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),deleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c22051dc.chunk.js.map