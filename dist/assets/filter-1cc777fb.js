import{$ as u,c as d,m,d as p,t as S,a0 as h,w as g}from"./index-ae49f426.js";import{u as v}from"./request-f0b19ab0.js";import{d as w,a as D,N as C,c as H}from"./index-86cd2e39.js";import{o as F,c as N}from"./constants-067e8c8b.js";function P(e,s){const{days:n}=s;let{hours:i,minutes:t,seconds:l,milliseconds:a}=s;if(e.includes("DD")?e=e.replace("DD",u(n)):i+=n*24,e.includes("HH")?e=e.replace("HH",u(i)):t+=i*60,e.includes("mm")?e=e.replace("mm",u(t)):l+=t*60,e.includes("ss")?e=e.replace("ss",u(l)):a+=l*1e3,e.includes("S")){const c=u(a,3);e.includes("SSS")?e=e.replace("SSS",c):e.includes("SS")?e=e.replace("SS",c.slice(0,2)):e=e.replace("S",c.charAt(0))}return e}const[b,x]=d("count-down"),f={time:m(0),format:p("HH:mm:ss"),autoStart:S,millisecond:Boolean};var k=w({name:b,props:f,emits:["change","finish"],setup(e,{emit:s,slots:n}){const{start:i,pause:t,reset:l,current:a}=h({time:+e.time,millisecond:e.millisecond,onChange:r=>s("change",r),onFinish:()=>s("finish")}),c=D(()=>P(e.format,a.value)),o=()=>{l(+e.time),e.autoStart&&i()};return C(()=>e.time,o,{immediate:!0}),v({start:i,pause:t,reset:o}),()=>H("div",{role:"timer",class:x()},[n.default?n.default(a.value):c.value])}});const A=g(k),B=e=>{var s;return(s=F.find(n=>n.value==e))==null?void 0:s.label},E=e=>{var s;return(s=N.find(n=>n.value==e))==null?void 0:s.label};export{A as C,E as a,B as g};