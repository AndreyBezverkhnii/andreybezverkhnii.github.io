(function(e){function t(t){for(var n,r,l=t[0],s=t[1],m=t[2],d=0,u=[];d<l.length;d++)r=l[d],a[r]&&u.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(u.length)u.shift()();return i.push.apply(i,m||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var c=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2546:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper-content"},[o("section",[o("div",{attrs:{id:"container"}},[o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalFirst=!0}}},[e._v("Show first modal")]),o("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalFirst,expression:"modalFirst"}],attrs:{title:"First modals"},on:{close:function(t){e.modalFirst=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("p",[e._v("text")]),o("button",{staticClass:"btn btnPrimary"},[e._v("Well done!")])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalSecond.show=!0}}},[e._v("Show modal with form")]),o("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalSecond.show,expression:"modalSecond.show"}],attrs:{title:"Modal woth form"},on:{close:function(t){e.modalSecond.show=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitSecondForm(t)}}},[o("label",[e._v("Name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.name,expression:"modalSecond.name"}],attrs:{type:"text"},domProps:{value:e.modalSecond.name},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"name",t.target.value)}}}),o("label",[e._v("Email:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.email,expression:"modalSecond.email"}],attrs:{type:"email"},domProps:{value:e.modalSecond.email},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"email",t.target.value)}}}),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalValidate.show=!0}}},[e._v("Show modal with validate")]),o("modalValidate",{directives:[{name:"show",rawName:"v-show",value:e.modalValidate.show,expression:"modalValidate.show"}],on:{close:e.closeWindow}})],1)])])])},i=[],r=(o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("close")}}},[o("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"modal-header"},[o("span",{staticClass:"modal-title"},[e._v(e._s(e.title))]),o("span",{staticClass:"button-close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),o("div",{staticClass:"modal-body"},[e._t("body")],2)])])])}),l=[],s={props:{title:{type:String,required:!0}},mounted:function(){var e=this;document.body.addEventListener("keyup",function(t){27===t.keyCode&&e.$emit("close")})},computed:{},methods:{}},m=s,c=(o("7e1e"),o("2877")),d=Object(c["a"])(m,r,l,!1,null,"c5dbb8b8",null),u=d.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Modal with form"},on:{close:function(t){return e.$emit("close")}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[o("label",[e._v("Name:")]),e.$v.name.required?e._e():o("p",{staticClass:"errorText"},[e._v("Field is required!")]),e.$v.name.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" !")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},attrs:{type:"text"},domProps:{value:e.name},on:{change:function(t){return e.$v.name.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email:")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("Field is required!")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("Email is not correct !")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},attrs:{type:"email"},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])])])])},p=[],f=o("b5ae"),h={components:{modal:u},data:function(){return{name:"",email:""}},validations:{name:{required:f["required"],minLength:Object(f["minLength"])(4)},email:{required:f["required"],email:f["email"]}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email};console.log(e),this.name="",this.email="",this.$v.$reset(),this.$emit("close")}}}},b=h,w=(o("900c"),Object(c["a"])(b,v,p,!1,null,null,null)),_=w.exports,y={components:{modals:u,modalValidate:_},data:function(){return{modalFirst:!1,modalSecond:{show:!1,name:"",email:""},modalValidate:{show:!1,name:"",email:""}}},methods:{submitSecondForm:function(){console.log({name:this.modalSecond.name,email:this.modalSecond.email}),this.modalSecond.name="",this.modalSecond.email="",this.modalSecond.show=!1},closeWindow:function(){this.modalValidate.show=!1}}},$=y,g=Object(c["a"])($,a,i,!1,null,null,null),S=g.exports,x=o("1dce"),C=o.n(x);o("c1c3");n["a"].use(C.a),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"5ff5":function(e,t,o){},"7e1e":function(e,t,o){"use strict";var n=o("2546"),a=o.n(n);a.a},"900c":function(e,t,o){"use strict";var n=o("5ff5"),a=o.n(n);a.a},c1c3:function(e,t,o){}});