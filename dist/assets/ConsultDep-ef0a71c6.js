import{_ as y}from"./ReNavBar-364281e2.js";import{a as N}from"./rapidConsultation-e477c24b.js";import{d as b,c as d,m as S,r as f,s as I,j as R,b as $,e as v,f as g,w as k,F as C,k as x,o as i,q as h,h as E,t as j,n as F,_ as q}from"./index-c9fc3956.js";import{c as B,m as G,u as K,w as P,e as L,n as M,a as O,b as T}from"./index-6575b4f2.js";import{r as U,u as Y}from"./use-route-c0dbeb7e.js";import"./use-placeholder-9f9a0586.js";import"./request-cc1ff509.js";const[A,z]=B("sidebar"),D=Symbol(A),H={modelValue:G(0)};var J=b({name:A,props:H,emits:["change","update:modelValue"],setup(l,{emit:a,slots:t}){const{linkChildren:r}=K(D),s=()=>+l.modelValue;return r({getActive:s,setActive:e=>{e!==s()&&(a("update:modelValue",e),a("change",e))}}),()=>{var e;return d("div",{role:"tablist",class:z()},[(e=t.default)==null?void 0:e.call(t)])}}});const Q=P(J),[W,V]=B("sidebar-item"),X=L({},U,{dot:Boolean,title:String,badge:M,disabled:Boolean,badgeProps:Object});var Z=b({name:W,props:X,emits:["click"],setup(l,{emit:a,slots:t}){const r=Y(),{parent:s,index:o}=O(D);if(!s)return;const e=()=>{l.disabled||(a("click",o.value),s.setActive(o.value),r())};return()=>{const{dot:p,badge:_,title:m,disabled:u}=l,c=o.value===s.getActive();return d("div",{role:"tab",class:V({select:c,disabled:u}),tabindex:u?void 0:0,"aria-selected":c,onClick:e},[d(T,S({dot:p,class:V("text"),content:_},l.badgeProps),{default:()=>[t.title?t.title():m]})])}}});const ee=P(Z),te={class:"consult-dep-page"},ae={class:"wrapper"},se={class:"sub-dep"},oe=b({__name:"ConsultDep",setup(l){const a=f(0),t=f([]),r=I(),s=async()=>{const o=await N();t.value=o.data};return R(()=>{s()}),(o,e)=>{var c;const p=y,_=ee,m=Q,u=$("router-link");return i(),v("div",te,[d(p,{title:"选择科室"}),g("div",ae,[d(m,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n)},{default:k(()=>[(i(!0),v(C,null,x(t.value,(n,w)=>(i(),h(_,{title:n.name},null,8,["title"]))),256))]),_:1},8,["modelValue"]),g("div",se,[(i(!0),v(C,null,x((c=t.value[a.value])==null?void 0:c.child,n=>(i(),h(u,{to:"/consult/illness",key:n.id,onClick:w=>F(r).setDep(n.id)},{default:k(()=>[E(j(n.name),1)]),_:2},1032,["onClick"]))),128))])])])}}});const pe=q(oe,[["__scopeId","data-v-6db5a1dc"]]);export{pe as default};
