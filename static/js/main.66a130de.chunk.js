(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports=n(29)},18:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(18),n(7)),i=n(8),s=n(2),u=n(12),m=n(11),d=n(3),h=n.n(d),E=n(9);function p(){return(p=Object(E.a)(h.a.mark((function e(){var t,n,a,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrePolicy:"no-referrer",body:JSON.stringify(n)});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(10),b=(n(21),n(22),n(23),n(24),n(25),n(26),n(27),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={code:null,stdout:null,stderr:null,error:null,API:"https://stormy-inlet-61516.herokuapp.com/task",id:null,cpp:""},a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a.update=a.update.bind(Object(s.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.update();var e=document.getElementById("color"),t=document.getElementById("color-mode");console.log(e),console.log(t),t.addEventListener("change",(function(){t.checked?e.innerText="Light":e.innerText="Dark"}))}},{key:"update",value:function(){var e=this;this.state.id&&fetch(this.state.API+"/"+this.state.id).then((function(e){return e.json()})).then((function(t){if("completed"===t.status[0]){var n=document.getElementById("stdout"),a=document.getElementById("stderr"),r=document.getElementById("error"),l=document.getElementById("status");n.value=t.stdout,a.value=t.stderr,r.value=t.err,l.innerText=t.status[0],e.setState({id:null})}})),setTimeout(this.update,2e3)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.cpp,a=document.getElementById("input").value,r=document.getElementById("status");console.log(n),function(){return p.apply(this,arguments)}(this.state.API+"/create",{code:n,input:a}).then((function(e){console.log(e),t.state.id=e._id,r.innerText="running"}))}},{key:"render",value:function(){var e=this,t=this.state.cpp;return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"color-mode"}),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"C++ IDE"),r.a.createElement("label",{htmlFor:"color-mode",id:"color"},"Dark")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ide"},r.a.createElement("div",{className:"editor"},r.a.createElement(v.Controlled,{value:t,options:{mode:"text/x-c++src",theme:"default",lineNumbers:!0,lineWraping:!0,matchBrackets:!0,matchTags:!0,autoCloseTags:!0,autoCloseBrackets:!0,styleActiveLine:{nonEmpty:!0}},onBeforeChange:function(t,n,a){e.setState({cpp:a})}}),r.a.createElement("div",{className:"submit"},r.a.createElement("input",{type:"submit",value:"Run"}),r.a.createElement("br",null),r.a.createElement("h4",null,r.a.createElement("span",{id:"status"})))),r.a.createElement("div",{className:"io"},r.a.createElement("div",{className:"input"},r.a.createElement("label",{htmlFor:"input"},"Input"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"input",name:"input"}),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"stdout"},"stdout"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"stdout",name:"stdout"},this.state.stdout),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"stderr"},"stderr"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"stderr",name:"stderr"},this.state.stderr),r.a.createElement("br",null)))),r.a.createElement("div",{className:"err"},r.a.createElement("label",{htmlFor:"error"},"Error"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"error"},this.state.error),r.a.createElement("br",null))))))}}]),n}(a.Component));n(28);var f=function(){return r.a.createElement("div",null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.66a130de.chunk.js.map