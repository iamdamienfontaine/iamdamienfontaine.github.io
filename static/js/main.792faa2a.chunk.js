(this["webpackJsonpdamienfontaine.io"]=this["webpackJsonpdamienfontaine.io"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/profileImage.485eb20d.png"},33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=(a(38),a(39),a(12)),o=a(11),s=a(5),m=a(6),u=a(8),h=a(7),b=a(9),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"fixed-bottom"},r.a.createElement("div",{id:"footer"},r.a.createElement("span",null,"\xa9Damien Fontaine, 2020.")))}}]),t}(n.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"header"},r.a.createElement("nav",{className:"navbar1"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/site/",className:"navbar-brand1"},"Accueil"),r.a.createElement(i.b,{to:"/site/contact",className:"navbar-brand"},"Contact"),r.a.createElement(i.b,{to:"/site/projet",className:"navbar-brand"},"Projet"),r.a.createElement(i.b,{to:"/site/",className:"navbar-brand"},"Accueil")))),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component),E=a(31),f=a.n(E),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement("h1",null,"Mon site internet est encore en d\xe9veloppement !"),r.a.createElement("br",null),r.a.createElement("h2",null,"Auteur : Damien Fontaine - \xe9tudiant en informatique "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:f.a,alt:"profil",width:"150px",height:"200px"}))}}]),t}(r.a.Component),g=a(32),j=a.n(g),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",message:""},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),j()({method:"POST",url:"https://immense-mountain-06199.herokuapp.com/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"formcss"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("h1",null,"Contactez moi !"),r.a.createElement("br",null),r.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Nom"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",minLength:"10",maxLength:"500",value:this.state.message,onChange:this.onMessageChange.bind(this)})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary justify-content-center d-flex w-100"},"Envoyer")))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(r.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Mes Projets !"))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/"},r.a.createElement(d,null),r.a.createElement("div",null,r.a.createElement(o.a,{exact:!0,path:"/site/",component:v}),r.a.createElement(o.a,{path:"/site/projet",component:y}),r.a.createElement(o.a,{path:"/site/contact",component:O})),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.792faa2a.chunk.js.map