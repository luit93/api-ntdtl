(this["webpackJsonpreact-not-to-do-task-list"]=this["webpackJsonpreact-not-to-do-task-list"]||[]).push([[0],{49:function(e,t,r){},50:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(18),c=r(40),u=Object(a.b)({name:"taskList",initialState:{taskLists:[],badLists:[],status:"",message:"",isLoading:!1,totalHrs:0,taskToDelete:[]},reducers:{requestPending:function(e){e.isLoading=!0},updateTaskSuccess:function(e,t){var r=t.payload,n=r.status,s=r.message;e.isLoading=!1,e.status=n,e.message=s},deleteTaskSuccess:function(e,t){var r=t.payload,n=r.status,s=r.message;e.isLoading=!1,e.status=n,e.message=s,e.taskToDelete=[]},fetchTaskListSuccess:function(e,t){var r=t.payload,n=(r.status,r.message,r.result);e.totalHrs=n?n.reduce((function(e,t){return e+ +t.hr}),0):0,e.isLoading=!1,n&&(e.taskLists=n.filter((function(e){return e.toDo})),e.badLists=n.filter((function(e){return!e.toDo})))},setIdToDelete:function(e,t){var r=t.payload,n=r.checked,s=r.value;if(console.log(n,s),n)e.taskToDelete=[].concat(Object(c.a)(e.taskToDelete),[s]);else{var a=e.taskToDelete.filter((function(e){return e!==s}));e.taskToDelete=a}},requestFail:function(e,t){var r=t.payload,n=r.status,s=r.message;e.status=n,e.message=s}}}),o=u.reducer,i=u.actions,l=i.updateTaskSuccess,d=i.requestPending,j=i.fetchTaskListSuccess,b=i.setIdToDelete,h=i.deleteTaskSuccess,f=i.requestFail,p=o,O=Object(a.b)({name:"userList",initialState:{status:"",message:"",isLoading:!1,userId:"",userName:"",isLoggedIn:!1},reducers:{requestPending:function(e){e.isLoading=!0},createUserSuccess:function(e,t){var r=t.payload,n=r.status,s=r.message;e.status=n,e.message=s,e.isLoading=!1},loginUserSuccess:function(e){e.status="",e.message="",e.isLoading=!1,e.isLoggedIn=!0},userLogout:function(e){e.isLoggedIn=!1},requestFail:function(e,t){var r=t.payload,n=r.status,s=r.message;e.status=n,e.message=s,e.isLoading=!1}}}),x=O.reducer,m=O.actions,g=m.createUserSuccess,v=m.requestPending,k=m.loginUserSuccess,w=m.userLogout,y=m.requestFail,T=x,L=Object(a.a)({reducer:{task:p,user:T}}),S=r(7),N=r(15),D=r.n(N),I=(r(49),r(50),r(78)),C=r(75),_=r(76),q=r(39),A=r(81),F=r(80),H=r(74),z=r(6),P=r.n(z),B=r(9),E=r(16),R=r.n(E),U="http://localhost:5000/api/v1/user",M=function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post(U+"/register",t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{status:"error",message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post(U,t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{status:"error",message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),W=r(22),J=r(79),Y=r(0),G=function(e){var t=e.color,r=e.text,s=Object(n.useState)(!0),a=Object(W.a)(s,2),c=a[0],u=a[1];return"danger"==t?c?Object(Y.jsxs)(J.a,{variant:t,onClose:function(){return u(!1)},dismissible:!0,children:[r,"!"]}):Object(Y.jsx)(H.a,{onClick:function(){return u(!0)},children:"Show Alert"}):Object(Y.jsxs)(J.a,{variant:t,children:[r,"!"]})},K=function(){var e=Object(n.useRef)(""),t=Object(n.useRef)(""),r=Object(S.c)((function(e){return e.user})),s=r.isLoading,a=r.status,c=r.message,u=(r.isLoggedIn,Object(S.b)());return Object(Y.jsxs)("div",{className:"user-form mt-5 pt-5",children:[Object(Y.jsx)("h1",{className:"py-3",children:"Welcome to the task time management"}),Object(Y.jsx)("hr",{}),Object(Y.jsx)("div",{className:"text-muted mb-3",children:"This app will allow you to list your weekly task and let mark your task as not to do so that you can see how many hours you could have saved last week for good purpose."}),c&&Object(Y.jsx)(G,{color:"success"===a?"success":"danger",text:c}),s&&Object(Y.jsx)(C.a,{variant:"info",animation:"border"}),Object(Y.jsxs)(_.a,{children:[Object(Y.jsx)(q.a,{md:"6",children:Object(Y.jsxs)(A.a,{className:"p-3",children:[Object(Y.jsx)("h2",{className:"mb-3",children:"Login"}),Object(Y.jsx)("hr",{}),Object(Y.jsx)(F.a.Control,{ref:e,type:"email",placeholder:"Enter userName"}),Object(Y.jsx)(H.a,{variant:"success",type:"submit",className:"mt-3",onClick:function(){var t=e.current.value;console.log(t),u(function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){var n,s,a,c,u;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(v()),t.next=3,V(e);case 3:if(s=t.sent,console.log(s,"log in user "),!(null===s||void 0===s||null===(n=s.result)||void 0===n?void 0:n._id)){t.next=11;break}return a=s.result,c=a._id,u=a.userName,window.localStorage.setItem("_id",c),window.localStorage.setItem("userName",u),r(k(s)),t.abrupt("return");case 11:r(y(s));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({userName:t}))},children:"Login"})]})}),Object(Y.jsx)(q.a,{md:"6",children:Object(Y.jsxs)(A.a,{className:"p-3",children:[Object(Y.jsx)("h2",{className:"mb-3",children:"Register"}),Object(Y.jsx)("hr",{}),Object(Y.jsx)(F.a.Control,{ref:t,type:"email",placeholder:"Enter userName"}),Object(Y.jsx)(H.a,{variant:"primary",type:"submit",className:"mt-3",onClick:function(){var e,r=t.current.value;if(!r)return alert("username needs to be provided");u((e={userName:r},function(){var t=Object(B.a)(P.a.mark((function t(r){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(v()),t.next=3,M(e);case 3:if("success"!==(n=t.sent).status){t.next=7;break}return r(g(n)),t.abrupt("return");case 7:r(y(n));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Register"})]})})]})]})},Q=function(){var e=Object(S.b)(),t=window.localStorage.getItem("userName");return Object(Y.jsxs)("div",{className:"bg-promary d-flex justify-content-end p-3 text-light",children:[Object(Y.jsxs)("h3",{className:"welcome-msg",children:["Welcome ",t]}),Object(Y.jsx)(H.a,{onClick:function(){e((function(e){window.localStorage.removeItem("_id"),window.localStorage.removeItem("userName"),e(w())}))},variant:"warning",children:"Logout"})]})},X=r(77),Z="/api/v1/task",$=function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post(Z,t,{headers:{Authorization:window.localStorage.getItem("_id")}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{status:"error",message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(B.a)(P.a.mark((function e(){var t,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get(Z,{headers:{Authorization:window.localStorage.getItem("_id")}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{status:"error",message:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.delete(Z,{headers:{Authorization:window.localStorage.getItem("_id")},data:t});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{status:"error",message:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.patch(Z,t,{headers:{Authorization:window.localStorage.getItem("_id")}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{status:"error",message:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),e.next=3,ee();case 3:r=e.sent,console.log(r),"success"===r.status?t(j(r)):t(f(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(d()),t.next=3,$(e);case 3:n=t.sent,console.log(n),"success"===n.status?(r(l(n)),r(ne())):r(f(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(d()),t.next=3,re(e);case 3:n=t.sent,console.log(n),"success"===n.status?(r(l(n)),r(ne())):r(f(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ce=function(e){e.handleOnTaskBadClick,e.indexToDeleteFromBadTask;var t=Object(S.c)((function(e){return e.task})),r=t.badLists,n=t.taskToDelete,s=Object(S.b)(),a=r.reduce((function(e,t){return e+t.hr}),0);return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Bad Task List"}),Object(Y.jsxs)(X.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(Y.jsx)("thead",{children:Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("th",{children:"Task"}),Object(Y.jsx)("th",{children:"Hours"}),Object(Y.jsx)("th",{children:"Action"})]})}),Object(Y.jsx)("tbody",{children:r.map((function(e,t){return Object(Y.jsxs)("tr",{children:[Object(Y.jsxs)("td",{children:[Object(Y.jsx)("input",{type:"checkbox",defaultValue:e._id,onChange:function(e){return s(b(e.target))},checked:n.includes(e._id)})," ",Object(Y.jsx)("label",{children:e.task})]}),Object(Y.jsx)("td",{children:e.hr}),Object(Y.jsx)("td",{children:Object(Y.jsx)(H.a,{onClick:function(){return s(ae({id:e._id,toDo:!0}))},type:"submit",children:"Mark As To Do"})})]},t)}))})]}),Object(Y.jsx)(G,{color:"info",text:"You could have saved ".concat(a," hrs/week")})]})},ue=function(e){e.handleOnTaskClick,e.indexToDeleteFromTask;var t=Object(S.b)(),r=Object(S.c)((function(e){return e.task})),n=r.taskLists,s=r.taskToDelete;return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Task List"}),Object(Y.jsxs)(X.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(Y.jsx)("thead",{children:Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("th",{children:"Task"}),Object(Y.jsx)("th",{children:"Hours"}),Object(Y.jsx)("th",{children:"Action"})]})}),Object(Y.jsx)("tbody",{children:n.map((function(e,r){return Object(Y.jsxs)("tr",{children:[Object(Y.jsxs)("td",{children:[Object(Y.jsx)("input",{type:"checkbox",defaultValue:e._id,onChange:function(e){return t(b(e.target))},checked:s.includes(e._id)})," ",Object(Y.jsx)("label",{children:e.task})]}),Object(Y.jsx)("td",{children:e.hr}),Object(Y.jsx)("td",{children:Object(Y.jsx)(H.a,{onClick:function(){return t(ae({id:e._id,toDo:!1}))},children:"Mark As Not To Do"})})]},r)}))})]})]})},oe=r(14),ie=r(2),le={task:"Watching TV",hr:10},de=function(){var e=Object(S.b)(),t=Object(n.useState)(le),r=Object(W.a)(t,2),s=r[0],a=r[1],c=Object(S.c)((function(e){return e.task})).totalHrs,u=function(e){var t=e.target,r=t.name,n=t.value;a(Object(ie.a)(Object(ie.a)({},s),{},Object(oe.a)({},r,n)))};return Object(Y.jsx)(F.a,{onSubmit:function(t){if(t.preventDefault(),c+ +s.hr>168)e(f({status:"error",message:"You don't have enough hours left"}));else{var r=window.localStorage.getItem("_id");r&&e(se(Object(ie.a)(Object(ie.a)({},s),{},{userId:r}))),e(se(s))}},children:Object(Y.jsxs)(_.a,{children:[Object(Y.jsx)(q.a,{xs:7,children:Object(Y.jsx)(F.a.Control,{name:"task",placeholder:"Task",value:s.task,required:!0,onChange:u})}),Object(Y.jsx)(q.a,{children:Object(Y.jsx)(F.a.Control,{name:"hr",placeholder:"Hours",value:s.hr,type:"number",required:!0,onChange:u})}),Object(Y.jsx)(q.a,{children:Object(Y.jsx)(H.a,{type:"submit",children:"Add Task"})})]})})},je=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.task})),r=t.totalHrs,s=t.isLoading,a=t.status,c=t.message,u=t.taskToDelete;Object(n.useEffect)((function(){e(ne())}),[]);return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(_.a,{className:"mt-5",children:Object(Y.jsxs)(q.a,{children:[" ",Object(Y.jsx)("h1",{children:"Not To Do Task List"})]})}),Object(Y.jsx)("hr",{}),c&&Object(Y.jsx)(G,{color:"success"===a?"success":"danger",text:c}),Object(Y.jsx)(de,{}),s&&Object(Y.jsx)(C.a,{variant:"danger",animation:"grow"}),Object(Y.jsx)("hr",{}),Object(Y.jsxs)(_.a,{children:[Object(Y.jsx)(q.a,{md:"6",children:Object(Y.jsx)(ue,{})}),Object(Y.jsx)(q.a,{md:"6",children:Object(Y.jsx)(ce,{})})]}),Object(Y.jsx)(_.a,{children:Object(Y.jsx)(q.a,{children:Object(Y.jsx)(H.a,{onClick:function(){return e(function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(d()),t.next=3,te(e);case 3:n=t.sent,console.log(n),"success"===n.status?(r(h(n)),r(ne())):r(f(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(u))},variant:"danger",className:"btn-block",children:"Delete"})})}),Object(Y.jsx)(_.a,{children:Object(Y.jsx)(q.a,{children:Object(Y.jsx)(G,{color:"info",text:"Total hours allocated = ".concat(r," hours/week")})})})]})},be=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.user})).isLoggedIn;return Object(n.useEffect)((function(){!t&&window.localStorage.getItem("userName")&&e(k())}),[]),Object(Y.jsxs)("div",{children:[t&&Object(Y.jsx)(Q,{}),Object(Y.jsx)(I.a,{fluid:!0,className:"text-center",children:t?Object(Y.jsx)(je,{}):Object(Y.jsx)(K,{})})]})},he=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,82)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};r(71);D.a.render(Object(Y.jsx)(s.a.StrictMode,{children:Object(Y.jsx)(S.a,{store:L,children:Object(Y.jsx)(be,{})})}),document.getElementById("root")),he()}},[[72,1,2]]]);
//# sourceMappingURL=main.19186382.chunk.js.map