import{u as U,p as z,b as M,P as W,m as j,c as q}from"./request-9970d97a.js";import{d as p,r as E,c as o,a as D,D as V,m as I,E as Y}from"./index-382d02f8.js";import{B as k}from"./index-8b4a00bc.js";import{c as T,u as G,t as S,w as N,e as h,a as J,n as Q,j as X,d as Z,h as ee,k as te,l as O,o as ne,q as oe,r as ae,s as le}from"./index-17bfa05c.js";import{u as se}from"./use-placeholder-43ad3744.js";import{r as re,u as ce,c as ie}from"./use-route-4b024d8b.js";const[R,A]=T("action-bar"),F=Symbol(R),ue={placeholder:Boolean,safeAreaInsetBottom:S};var de=p({name:R,props:ue,setup(e,{slots:a}){const n=E(),s=se(n,A),{linkChildren:r}=G(F);r();const f=()=>{var m;return o("div",{ref:n,class:[A(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=a.default)==null?void 0:m.call(a)])};return()=>e.placeholder?s(f):f()}});const fe=N(de),[me,Be]=T("action-bar-button"),ge=h({},re,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var he=p({name:me,props:ge,setup(e,{slots:a}){const n=ce(),{parent:s,index:r}=J(F),f=D(()=>{if(s){const c=s.children[r.value-1];return!(c&&"isButton"in c)}}),m=D(()=>{if(s){const c=s.children[r.value+1];return!(c&&"isButton"in c)}});return U({isButton:!0}),()=>{const{type:c,icon:B,text:g,color:w,loading:v,disabled:y}=e;return o(k,{class:Be([c,{last:m.value,first:f.value}]),size:"large",type:c,icon:B,color:w,loading:v,disabled:y,onClick:n},{default:()=>[a.default?a.default():g]})}}});const _=N(he),[Ce,i,b]=T("dialog"),be=h({},z,{title:String,theme:String,width:Q,message:[String,Function],callback:Function,allowHtml:Boolean,className:X,transition:Z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:S,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:S,closeOnClickOverlay:Boolean}),we=[...M,"transition","closeOnPopstate"];var ve=p({name:Ce,props:be,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const s=E(),r=V({confirm:!1,cancel:!1}),f=t=>a("update:show",t),m=t=>{var l;f(!1),(l=e.callback)==null||l.call(e,t)},c=t=>()=>{e.show&&(a(t),e.beforeClose?(r[t]=!0,ie(e.beforeClose,{args:[t],done(){m(t),r[t]=!1},canceled(){r[t]=!1}})):m(t))},B=c("cancel"),g=c("confirm"),w=Y(t=>{var l,u;if(t.target!==((u=(l=s.value)==null?void 0:l.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:O,Escape:e.showCancelButton?B:O})[t.key](),a("keydown",t)},["enter","esc"]),v=()=>{const t=n.title?n.title():e.title;if(t)return o("div",{class:i("header",{isolated:!e.message&&!n.default})},[t])},y=t=>{const{message:l,allowHtml:u,messageAlign:d}=e,C=i("message",{"has-title":t,[d]:d}),P=ne(l)?l():l;return u&&typeof P=="string"?o("div",{class:C,innerHTML:P},null):o("div",{class:C},[P])},H=()=>{if(n.default)return o("div",{class:i("content")},[n.default()]);const{title:t,message:l,allowHtml:u}=e;if(l){const d=!!(t||n.title);return o("div",{key:u?1:0,class:i("content",{isolated:!d})},[y(d)])}},K=()=>o("div",{class:[ae,i("footer")]},[e.showCancelButton&&o(k,{size:"large",text:e.cancelButtonText||b("cancel"),class:i("cancel"),style:{color:e.cancelButtonColor},loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(k,{size:"large",text:e.confirmButtonText||b("confirm"),class:[i("confirm"),{[oe]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),$=()=>o(fe,{class:i("footer")},{default:()=>[e.showCancelButton&&o(_,{type:"warning",text:e.cancelButtonText||b("cancel"),class:i("cancel"),color:e.cancelButtonColor,loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(_,{type:"danger",text:e.confirmButtonText||b("confirm"),class:i("confirm"),color:e.confirmButtonColor,loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),L=()=>n.footer?n.footer():e.theme==="round-button"?$():K();return()=>{const{width:t,title:l,theme:u,message:d,className:C}=e;return o(W,I({ref:s,role:"dialog",class:[i([u]),C],style:{width:te(t)},tabindex:0,"aria-labelledby":l||d,onKeydown:w,"onUpdate:show":f},ee(e,we)),{default:()=>[v(),H(),L()]})}}});let x;const ye={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Pe=h({},ye);function ke(){({instance:x}=j({setup(){const{state:a,toggle:n}=q();return()=>o(ve,I(a,{"onUpdate:show":n}),null)}}))}function Se(e){return le?new Promise((a,n)=>{x||ke(),x.open(h({},Pe,e,{callback:s=>{(s==="confirm"?a:n)(s)}}))}):Promise.resolve()}const _e=e=>Se(h({showCancelButton:!0},e));export{_ as A,Se as a,fe as b,ve as c,_e as s};
