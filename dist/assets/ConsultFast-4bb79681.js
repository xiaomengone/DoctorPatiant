import{_ as f}from"./CpIcon-a1db815b.js";import{_ as v}from"./ReNavBar-364281e2.js";import{d as g,i as C,s as h,b as k,e as x,c as t,f as s,w as p,n as i,o as I,p as w,l as y,h as N,_ as R}from"./index-c9fc3956.js";import{I as b}from"./index-6575b4f2.js";import"./use-placeholder-9f9a0586.js";const B="/DoctorPatiant/dist/assets/consult-fast-d1432ec9.png",n=o=>(w("data-v-61aaecb9"),o=o(),y(),o),F={class:"consult-fast-page"},S=n(()=>s("div",{class:"fast-logo"},[s("img",{class:"img",src:B,alt:""}),s("p",{class:"text"},[s("span",null,"20s"),N(" 快速匹配专业医生")])],-1)),T={class:"fast-type"},V=n(()=>s("div",{class:"info"},[s("p",null,"三甲图文问诊"),s("p",null,"三甲主治及以上级别医生")],-1)),$=n(()=>s("div",{class:"info"},[s("p",null,"普通图文问诊"),s("p",null,"二甲主治及以上级别医生")],-1)),D=g({__name:"ConsultFast",setup(o){const r=C(),a=h(),u=()=>{r.push("/user/consult")};return(E,e)=>{const d=v,c=f,l=b,_=k("router-link");return I(),x("div",F,[t(d,{title:"极速问诊","right-text":"问诊记录",onNavClickRight:u}),S,s("div",T,[t(_,{to:"/consult/dep",class:"item",onClick:e[0]||(e[0]=m=>i(a).setIllnessType(1))},{default:p(()=>[t(c,{class:"pic",name:"consult-doctor"}),V,t(l,{name:"arrow"})]),_:1}),t(_,{to:"/consult/dep",class:"item",onClick:e[1]||(e[1]=m=>i(a).setIllnessType(0))},{default:p(()=>[t(c,{class:"pic",name:"consult-message"}),$,t(l,{name:"arrow"})]),_:1})])])}}});const G=R(D,[["__scopeId","data-v-61aaecb9"]]);export{G as default};
