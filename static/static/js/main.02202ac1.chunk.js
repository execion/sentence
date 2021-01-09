(this["webpackJsonpfront-end-redux"]=this["webpackJsonpfront-end-redux"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(21),s=n.n(o),i=n(14),u=n(24),l=n(12),d="INSERT_SENTENCES",j="ANSWER",p="QUESTION",b=(n(44),function(e){var t=e.id,n=Object(r.useState)(!0),a=Object(l.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(new Audio("http://localhost:8000/api/audio/".concat(t))),u=Object(l.a)(i,2),d=u[0],j=u[1];Object(r.useEffect)((function(){j(new Audio("http://localhost:8000/api/audio/".concat(t))),d.load(),s(!0)}),[t]);var p=function(){var e=d.duration.toString().replace(".","");Number(e),setTimeout((function(){s(!0)}),e)};return Object(c.jsx)("button",{className:"button-game",onClick:function(){o?(d.play(),s(!1),p()):(d.pause(),s(!0))},children:">"})}),O=(n(45),function(e){var t=e.letter,n=e.type,r=e.change;return Object(c.jsx)("button",{className:"button",id:t.id,onClick:function(e){return r(e.target.id,n)},children:t.letter})}),f=function(e){var t=e.WordList,n=e.AlternateLetter,r=e.Types;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(O,{letter:e,type:r,change:n},e.id)}))})},h=(n(46),function(e){var t=e.count;return Object(c.jsxs)("div",{className:"counter",children:[Object(c.jsxs)("p",{children:["Correct: ",t.correct]}),Object(c.jsxs)("p",{children:["Incorrect: ",t.incorrect]}),Object(c.jsxs)("p",{children:["Count: ",t.count]})]})}),x=(n(47),n(5)),g=n(10),y=n(56),v=n(20),m=function(e,t){switch(t.type){case d:return function(e,t){var n=t.payload.split(" "),c=[];n=Object(v.a)(n);var r,a=Object(g.a)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;c.push({id:Object(y.a)(),letter:o})}}catch(s){a.e(s)}finally{a.f()}return c=Object(v.a)(c),Object(x.a)(Object(x.a)({},e),{},{loaded:!0,question:c,answerCorrect:t.payload})}(e,t);case p:return function(e,t){var n=e.question.filter((function(e){return e.id===t})),c=e.answer.concat(n),r=e.question.filter((function(e){return e.id!==t}));if(0===r.length)return(n=c.map((function(e){return e.letter})).join(" "))===e.answerCorrect?Object(x.a)(Object(x.a)({},e),{},{question:[],answer:[],countCorrect:e.countCorrect+1,index:e.index+1,count:e.count+1}):Object(x.a)(Object(x.a)({},e),{},{question:[],answer:[],countIncorrect:e.countIncorrect+1,index:e.index+1,count:e.count+1});return Object(x.a)(Object(x.a)({},e),{},{question:r,answer:c})}(e,t.payload);case j:return function(e,t){var n=e.answer.filter((function(e){return e.id===t})),c=e.question.concat(n),r=e.answer.filter((function(e){return e.id!==t}));return Object(x.a)(Object(x.a)({},e),{},{answer:r,question:c})}(e,t.payload);default:return e}};var S={loaded:!1,index:0,question:[],answer:[],answerCorrect:"",countCorrect:0,countIncorrect:0,count:0},w=function(e){return{count:e.count,correct:e.countCorrect,incorrect:e.countIncorrect}},N=function(e,t){return e.sentences[t.index%e.sentences.length].id},E=Object(i.b)((function(e){var t=e.sentenceState;return{sentence:{sentences:t.sentences,init:!t.loading}}}),void 0)((function(e){var t=e.sentence,n=Object(r.useReducer)(m,S),a=Object(l.a)(n,2),o=a[0],s=a[1],i=function(e,t){return s({type:t,payload:e})};return Object(r.useEffect)((function(){!function(e,t,n){if(e.init){var c=e.sentences[t.index%e.sentences.length].sentence;console.log(c),n({type:d,payload:c})}}(t,o,s)}),[o.index,t.init]),o.loaded?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{count:w(o)}),Object(c.jsx)(b,{id:N(t,o)}),Object(c.jsx)("div",{className:"answer",children:Object(c.jsx)(f,{WordList:o.answer,AlternateLetter:i,Types:j})}),Object(c.jsx)("div",{className:"question",children:Object(c.jsx)(f,{WordList:o.question,AlternateLetter:i,Types:p})})]}):Object(c.jsx)("div",{children:"Loading...."})})),T=(n(48),function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"./img/logo.png",alt:"logo"})}),Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("button",{className:"button-signup",children:"Sign-up"}),Object(c.jsx)("button",{className:"button-login",children:"Login"})]})]})}),C=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(E,{})]})},q=n(4),I=(n(49),n(3)),L=n.n(I),A=n(7),P="SET_PASSPORT",k=n(32),F=Object(i.b)(void 0,(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,n=Object(k.a)(),r=n.register,a=n.handleSubmit;return Object(c.jsx)("div",{className:"login-container",children:Object(c.jsxs)("form",{className:"login",onSubmit:a((function(e){var n,c;t((n=e.username,c=e.password,function(){var e=Object(A.a)(L.a.mark((function e(t){var r,a,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={user:n,password:c},e.next=3,fetch("http://localhost:8000/login/access",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,t({type:P,payload:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})),children:[Object(c.jsx)("input",{type:"text",placeholder:"User",name:"username",ref:r}),Object(c.jsx)("input",{type:"password",placeholder:"Password",name:"password",ref:r}),Object(c.jsx)("button",{type:"submit",children:"Login"})]})})})),J=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(F,{})]})},R=Object(i.b)((function(e){return{havePassport:e.loginState.loading}}))((function(e){return e.havePassport?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(q.c,{children:Object(c.jsx)(q.a,{exact:!0,path:"/",component:C})})}):Object(c.jsx)(q.c,{children:Object(c.jsx)(q.a,{exact:!0,path:"/",component:J})})})),W="SET_SENTENCES",_="GET_SENTENCES",U={loading:!1,sentences:[]},B=n(17),G=n(31),M={passport:"passport"in localStorage?localStorage.getItem("passport"):"",loading:"passport"in localStorage},Q=function(e,t){return console.log(t.payload),!1===t.payload?e:t.payload.length>4?(localStorage.setItem("passport",t.payload),Object(x.a)(Object(x.a)({},e),{},{loading:!0,passport:t.payload})):e},z=Object(B.c)({sentenceState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case _:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,sentences:t.payload});default:return e}},loginState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Q(e,t);default:return e}}}),D=Object(B.d)(z,Object(B.a)(G.a));D.dispatch(function(){var e=Object(A.a)(L.a.mark((function e(t){var n,c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:W}),n={passport:localStorage.getItem("passport")},console.log(n),e.next=5,fetch("http://localhost:8000/api/sentences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,console.log(r),t("boolean"===typeof r?{type:P,payload:r}:{type:_,payload:Object(v.a)(r)});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(i.a,{store:D,children:Object(c.jsx)(R,{})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.02202ac1.chunk.js.map