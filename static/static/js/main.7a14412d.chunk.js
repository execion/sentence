(this["webpackJsonpfront-end-redux"]=this["webpackJsonpfront-end-redux"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(21),s=n.n(o),i=n(14),u=n(24),l=n(12),j="INSERT_SENTENCES",d="ANSWER",b="QUESTION",p=(n(44),function(e){var t=e.id,n=Object(r.useState)(!0),a=Object(l.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(new Audio("http://localhost:8000/api/audio/".concat(t))),u=Object(l.a)(i,2),j=u[0],d=u[1];Object(r.useEffect)((function(){d(new Audio("http://localhost:8000/api/audio/".concat(t))),j.load(),s(!0)}),[t]);var b=function(){var e=j.duration.toString().replace(".","");Number(e),setTimeout((function(){s(!0)}),e)};return Object(c.jsx)("button",{className:"button-game",onClick:function(){o?(j.play(),s(!1),b()):(j.pause(),s(!0))},children:">"})}),O=(n(45),function(e){var t=e.letter,n=e.type,r=e.change;return Object(c.jsx)("button",{className:"button",id:t.id,onClick:function(e){return r(e.target.id,n)},children:t.letter})}),f=function(e){var t=e.WordList,n=e.AlternateLetter,r=e.Types;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(O,{letter:e,type:r,change:n},e.id)}))})},h=(n(46),function(e){var t=e.count;return Object(c.jsxs)("div",{className:"counter",children:[Object(c.jsxs)("p",{children:["Correct: ",t.correct]}),Object(c.jsxs)("p",{children:["Incorrect: ",t.incorrect]}),Object(c.jsxs)("p",{children:["Count: ",t.count]})]})}),x=(n(47),n(5)),g=n(10),m=n(56),v=n(20),y=function(e,t){switch(t.type){case j:return function(e,t){var n=t.payload.split(" "),c=[];n=Object(v.a)(n);var r,a=Object(g.a)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;c.push({id:Object(m.a)(),letter:o})}}catch(s){a.e(s)}finally{a.f()}return c=Object(v.a)(c),Object(x.a)(Object(x.a)({},e),{},{loaded:!0,question:c,answerCorrect:t.payload})}(e,t);case b:return function(e,t){var n=e.question.filter((function(e){return e.id===t})),c=e.answer.concat(n),r=e.question.filter((function(e){return e.id!==t}));if(0===r.length)return(n=c.map((function(e){return e.letter})).join(" "))===e.answerCorrect?Object(x.a)(Object(x.a)({},e),{},{question:[],answer:[],countCorrect:e.countCorrect+1,index:e.index+1,count:e.count+1}):Object(x.a)(Object(x.a)({},e),{},{question:[],answer:[],countIncorrect:e.countIncorrect+1,index:e.index+1,count:e.count+1});return Object(x.a)(Object(x.a)({},e),{},{question:r,answer:c})}(e,t.payload);case d:return function(e,t){var n=e.answer.filter((function(e){return e.id===t})),c=e.question.concat(n),r=e.answer.filter((function(e){return e.id!==t}));return Object(x.a)(Object(x.a)({},e),{},{answer:r,question:c})}(e,t.payload);default:return e}};var S={loaded:!1,index:0,question:[],answer:[],answerCorrect:"",countCorrect:0,countIncorrect:0,count:0},w=function(e){return{count:e.count,correct:e.countCorrect,incorrect:e.countIncorrect}},N=function(e,t){return e[t.index%e.length].id},E=Object(i.b)((function(e){var t=e.sentenceState;return{sentences:t.sentences,init:!t.loading}}),void 0)((function(e){var t=e.sentences,n=Object(r.useReducer)(y,S),a=Object(l.a)(n,2),o=a[0],s=a[1],i=function(e,t){return s({type:t,payload:e})};return Object(r.useEffect)((function(){!function(e,t,n){if(e.length>0){var c=e[t.index%e.length].sentence;n({type:j,payload:c})}}(t,o,s)}),[o.index]),o.loaded?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{count:w(o)}),Object(c.jsx)(p,{id:N(t,o)}),Object(c.jsx)("div",{className:"answer",children:Object(c.jsx)(f,{WordList:o.answer,AlternateLetter:i,Types:d})}),Object(c.jsx)("div",{className:"question",children:Object(c.jsx)(f,{WordList:o.question,AlternateLetter:i,Types:b})})]}):Object(c.jsx)("div",{children:"Loading...."})})),T=(n(48),function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"./img/logo.png",alt:"logo"})}),Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("button",{className:"button-signup",children:"Sign-up"}),Object(c.jsx)("button",{className:"button-login",children:"Login"})]})]})}),C=n(3),q=n.n(C),I=n(7),L="SET_SENTENCES",P="GET_SENTENCES",A=Object(i.b)((function(e){return{init:e.sentenceState.loading}}),{getSentences:function(){return function(){var e=Object(I.a)(q.a.mark((function e(t){var n,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L}),n={passport:localStorage.getItem("passport")},e.next=4,fetch("http://localhost:8000/api/sentences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,e.next=7,c.json();case 7:"object"===typeof(r=e.sent)&&t({type:P,payload:Object(v.a)(r)});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.init,n=e.getSentences;return Object(r.useEffect)((function(){n()}),[n]),t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)("p",{children:"..Loading"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(E,{})]})})),k=n(4),F=(n(50),"SET_PASSPORT"),J=n(32),R=Object(i.b)(void 0,{getPassport:function(e,t){return function(){var n=Object(I.a)(q.a.mark((function n(c){var r,a,o;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={user:e,password:t},n.next=3,fetch("http://localhost:8000/login/access",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 3:return a=n.sent,n.next=6,a.json();case 6:o=n.sent,c({type:F,payload:o});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.getPassport,n=Object(J.a)(),r=n.register,a=n.handleSubmit;return Object(c.jsx)("div",{className:"login-container",children:Object(c.jsxs)("form",{className:"login",onSubmit:a((function(e){t(e.username,e.password)})),children:[Object(c.jsx)("input",{type:"text",placeholder:"User",name:"username",ref:r}),Object(c.jsx)("input",{type:"password",placeholder:"Password",name:"password",ref:r}),Object(c.jsx)("button",{type:"submit",children:"Login"})]})})})),W=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(R,{})]})},_=Object(i.b)((function(e){return{havePassport:e.loginState.loading}}))((function(e){return e.havePassport?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(k.c,{children:Object(c.jsx)(k.a,{exact:!0,path:"/",component:A})})}):Object(c.jsx)(k.c,{children:Object(c.jsx)(k.a,{exact:!0,path:"/",component:W})})})),U={loading:!1,sentences:[]},B=n(17),G=n(31),M={passport:"passport"in localStorage?localStorage.getItem("passport"):"",loading:"passport"in localStorage},Q=function(e,t){return console.log(t.payload),!1===t.payload?e:t.payload.length>4?(localStorage.setItem("passport",t.payload),Object(x.a)(Object(x.a)({},e),{},{loading:!0,passport:t.payload})):e},z=Object(B.c)({sentenceState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case P:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,sentences:t.payload});default:return e}},loginState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Q(e,t);default:return e}}}),D=Object(B.d)(z,Object(B.a)(G.a));s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(i.a,{store:D,children:Object(c.jsx)(_,{})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.7a14412d.chunk.js.map