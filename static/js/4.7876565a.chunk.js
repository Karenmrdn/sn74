(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,a,t){"use strict";var n=t(0),s=t.n(n),i=t(8),l=t(14),m=function(e){return{isAuthed:e.auth.isAuthed}};a.a=function(e){return Object(l.b)(m)((function(a){return a.isAuthed?s.a.createElement(e,a):s.a.createElement(i.a,{to:"/login"})}))}},293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3n5C0",dialogsItems:"Dialogs_dialogsItems__1BFJw",active:"Dialogs_active__3k5UB",messages:"Dialogs_messages__Qw1gh",message:"Dialogs_message__1aN1g"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(128),l=t(293),m=t.n(l),c=t(12),r=function(e){return s.a.createElement("div",{className:m.a.dialog+" "+m.a.active},s.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name))},o=function(e){return s.a.createElement("div",{className:m.a.message},e.message)},d=t(89),g=t(129),u=t(56),E=t(47),f=Object(u.a)(50),b=Object(E.a)("textarea"),v=Object(g.a)({form:"dialogsForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{name:"newMessageText",component:b,validate:[u.b,f],placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Add message")))})),_=function(e){var a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(r,{key:e.id,name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return s.a.createElement(o,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:m.a.dialogs},s.a.createElement("div",{className:m.a.dialogsItems},a),s.a.createElement("div",{className:m.a.messages},s.a.createElement("div",null,t),s.a.createElement("div",null,s.a.createElement(v,{onSubmit:function(a){e.addMessage(a.newMessageText)}}))))},p=t(14),h=t(292),j=t(7);a.default=Object(j.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:i.a}),h.a)(_)}}]);
//# sourceMappingURL=4.7876565a.chunk.js.map