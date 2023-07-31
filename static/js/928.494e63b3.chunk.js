"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[928],{9928:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});var a=t(2791),n=t(4942),i=t(1413),c=t(885),r=t(7022),l=t(9743),o={_origin:"https://api.emailjs.com"},m=function(e,s,t){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},d=t(3144),u=t(5671),h=(0,d.Z)((function e(s){(0,u.Z)(this,e),this.status=s.status,this.text=s.responseText})),x=function(e,s){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,n){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var s=e.target,t=new h(s);200===t.status||"OK"===t.text?a(t):n(t)})),i.addEventListener("error",(function(e){var s=e.target;n(new h(s))})),i.open("POST",o._origin+e,!0),Object.keys(t).forEach((function(e){i.setRequestHeader(e,t[e])})),i.send(s)}))},p=function(e,s,t,a){var n=a||o._userID,i=function(e){var s;if(!(s="string"===typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s}(t);m(n,e,s);var c=new FormData(i);return c.append("lib_version","3.6.2"),c.append("service_id",e),c.append("template_id",s),c.append("user_id",n),x("/api/v1.0/email/send-form",c)},f=t(5497),j=t(184);var N=function(){var e=(0,a.useRef)(),s=(0,a.useState)(!1),t=(0,c.Z)(s,2),o=t[0],m=t[1],d=(0,a.useState)({user_name:"",user_email:"",subject:"",message:""}),u=(0,c.Z)(d,2),h=u[0],x=u[1],N=function(e){var s=e.target,t=s.name,a=s.value;x((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},t,a))}))};return(0,j.jsx)(r.Z,{className:"ContentPage",style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"90vw"},children:o?(0,j.jsx)(r.Z,{children:(0,j.jsx)("div",{className:"ContactContainer",children:(0,j.jsx)("h1",{className:"contactTitle",children:f.Cy})})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:"contactTitle",children:f.MV}),(0,j.jsx)(r.Z,{className:"contactContainer",children:(0,j.jsxs)("div",{className:"ContactContainer",children:[(0,j.jsxs)("col-6",{children:[(0,j.jsx)(l.Z,{children:(0,j.jsxs)("td",{children:[(0,j.jsx)(l.Z,{className:"contactRow",children:(0,j.jsxs)("p",{className:"informationTitle",children:[(0,j.jsx)("img",{className:"contactIcon",src:"./images/contactLocation.png",alt:""}),f.A1]})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)("p",{className:"informationText",children:f.xW})})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)("td",{children:[(0,j.jsx)(l.Z,{className:"contactRow",children:(0,j.jsxs)("p",{className:"informationTitle",children:[(0,j.jsx)("img",{className:"contactIcon",src:"./images/contactPhone.png",alt:""}),f.xz]})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)("p",{className:"informationText",children:f.jM})})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)("td",{children:[(0,j.jsx)(l.Z,{className:"contactRow",children:(0,j.jsxs)("p",{className:"informationTitle",children:[(0,j.jsx)("img",{className:"contactIcon",src:"./images/contactEmail.png",alt:""}),f.KB]})}),(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("p",{className:"informationText",children:f.S3}),(0,j.jsx)("p",{className:"informationText",children:f.uf})]})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)("td",{children:[(0,j.jsx)(l.Z,{className:"contactRow",children:(0,j.jsxs)("p",{className:"informationTitle",children:[(0,j.jsx)("img",{className:"contactIcon",src:"./images/linkedinOutline.png",style:{paddingBottom:"15px"},alt:""}),f.b6]})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)("a",{href:"https://www.linkedin.com/in/michael-powell-38870333",children:(0,j.jsx)("p",{className:"informationText",children:f._c})})})]})})]}),(0,j.jsx)("div",{className:"ContactForm",children:(0,j.jsxs)("form",{id:"form",ref:e,onSubmit:function(s){p("service_4biylnj","template_2k3p4f6",e.current,"Bh-qOe5zllkY8rBt6").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),m(!0)},children:[(0,j.jsx)("label",{className:"inputTitle",for:"name",children:f.xh}),(0,j.jsx)("input",{onChange:N,type:"text",name:"user_name",className:"feedback-input",placeholder:"Name",value:h.user_name}),(0,j.jsx)("label",{className:"inputTitle",for:"email",children:f.sC}),(0,j.jsx)("input",{onChange:N,type:"email",name:"user_email",className:"feedback-input",placeholder:"Email",value:h.user_email}),(0,j.jsx)("label",{className:"inputTitle",for:"subject",children:f.FV}),(0,j.jsx)("input",{onChange:N,type:"text",name:"subject",className:"feedback-input",placeholder:"Subject",value:h.subject}),(0,j.jsx)("label",{className:"inputTitle",for:"message",children:f.bs}),(0,j.jsx)("textarea",{onChange:N,name:"message",className:"feedback-input",placeholder:"Lets chat",value:h.message}),(0,j.jsx)("button",{className:"submitButton",disabled:!h.user_name||!h.user_email||!h.subject||!h.message,type:"submit",value:"Send",children:f.hW})]})})]})})]})})},v=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(N,{})})}},9743:function(e,s,t){var a=t(1413),n=t(5987),i=t(1694),c=t.n(i),r=t(2791),l=t(162),o=t(184),m=["bsPrefix","className","as"],d=r.forwardRef((function(e,s){var t=e.bsPrefix,i=e.className,r=e.as,d=void 0===r?"div":r,u=(0,n.Z)(e,m),h=(0,l.vE)(t,"row"),x=(0,l.pi)(),p="".concat(h,"-cols"),f=[];return x.forEach((function(e){var s,t=u[e];delete u[e],s=null!=t&&"object"===typeof t?t.cols:t;var a="xs"!==e?"-".concat(e):"";null!=s&&f.push("".concat(p).concat(a,"-").concat(s))})),(0,o.jsx)(d,(0,a.Z)((0,a.Z)({ref:s},u),{},{className:c().apply(void 0,[i,h].concat(f))}))}));d.displayName="Row",s.Z=d}}]);
//# sourceMappingURL=928.494e63b3.chunk.js.map