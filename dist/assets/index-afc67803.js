import{_ as V}from"./CpIcon-0a317127.js";import{u as N,a as j,b as q}from"./index-844ba21e.js";import{B as D}from"./index-8b4a00bc.js";import{d as y,o as p,e as h,k as C,f as s,c as e,t as _,w as t,h as S,n as f,F as I,q as L,_ as $,r as g,j as G,p as F,l as T,s as A,b as E}from"./index-382d02f8.js";import{I as K}from"./index-f63a076a.js";import{L as H,T as M,a as P}from"./index-d5331230.js";import"./request-9970d97a.js";import{u as W}from"./index-b17fe00e.js";import{S as B,a as z,e as J}from"./index-9a1f5411.js";import{R as O,C as Q}from"./index-2bda01d2.js";import"./rapidConsultation-6ec55b0f.js";import"./use-route-4b024d8b.js";import"./index-17bfa05c.js";import"./use-id-19d94aa5.js";import"./use-refs-8b5f30d6.js";const R="/assets/ad-c4ee3bf4.png",X={class:"head"},Y={class:"info"},Z={class:"name"},ee={class:"dep van-ellipsis"},se={class:"body"},te={class:"title van-ellipsis"},oe={class:"tag"},ne={class:"intro van-multi-ellipsis--l2"},ae={class:"imgs"},le={class:"logs"},ce=y({__name:"KnowledgeCard",props:{items:{}},setup(i){const{loading:m,followInterest:u}=N();return(l,c)=>{const n=K,a=D;return p(!0),h(I,null,C(l.items,o=>(p(),h("div",{class:"knowledge-card van-hairline--bottom",key:o.id},[s("div",X,[e(n,{round:"",class:"avatar",src:o.creatorAvatar},null,8,["src"]),s("div",Y,[s("p",Z,_(o.creatorName),1),s("p",ee,_(o.creatorHospatalName)+" "+_(o.creatorDep)+" "+_(o.creatorTitles),1)]),e(a,{class:"btn",size:"small",round:"",onClick:r=>f(u)("knowledge",o),loading:f(m)},{default:t(()=>[S(_(o.likeFlag==0?"+ 关注":"已关注"),1)]),_:2},1032,["onClick","loading"])]),s("div",se,[s("h3",te,_(o.title),1),s("p",oe,[(p(!0),h(I,null,C(o.topics,(r,v)=>(p(),h("span",{key:v},"# "+_(r),1))),128))]),s("p",ne,_(o.content.replace(/<[^>]+>/g,"")),1),s("div",ae,[(p(!0),h(I,null,C(o.coverUrl,(r,v)=>(p(),L(n,{src:r,key:v},null,8,["src"]))),128))]),s("p",le,[s("span",null,_(o.collectionNumber)+" 收藏",1),s("span",null,_(o.commentNumber)+" 评论",1)])])]))),128)}}});const _e=$(ce,[["__scopeId","data-v-87bd46f8"]]),ie={class:"knowledge-list"},de=y({__name:"KnowledgeList",props:{type:{}},setup(i){const m=i,u=g(!1),l=g(!1),c=g([]),n=g({type:m.type||"recommend",current:1,pageSize:5}),a=async()=>{const o=await j(n.value);c.value.push(...o.data.rows),c.value.length>=o.data.pageTotal?l.value=!0:n.value.current=n.value.current+1,u.value=!1};return(o,r)=>{const v=H;return p(),h("div",ie,[e(v,{loading:u.value,"onUpdate:loading":r[0]||(r[0]=w=>u.value=w),finished:l.value,"finished-text":"没有更多了",onLoad:a},{default:t(()=>[e(_e,{items:c.value},null,8,["items"])]),_:1},8,["loading","finished"])])}}});const b=$(de,[["__scopeId","data-v-b5e562d0"]]),re={class:"doctor-card"},pe={class:"name"},ue={class:"van-ellipsis"},me=y({__name:"DoctorCard",props:{item:{}},setup(i){const{followInterest:m,loading:u}=N();return(l,c)=>{const n=K,a=D;return p(),h("div",re,[e(n,{round:"",src:l.item.avatar},null,8,["src"]),s("p",pe,_(l.item.name),1),s("p",ue,_(l.item.hospitalName)+" "+_(l.item.depName),1),s("p",null,_(l.item.positionalTitles),1),e(a,{round:"",size:"small",type:"primary",onClick:c[0]||(c[0]=o=>f(m)("doc",l.item)),loading:f(u)},{default:t(()=>[S(_(l.item.likeFlag==0?"+ 关注":"已关注"),1)]),_:1},8,["loading"])])}}});const ve=$(me,[["__scopeId","data-v-c0a7e892"]]),he=i=>(F("data-v-88dd36cc"),i=i(),T(),i),fe={class:"follow-doctor"},ge=he(()=>s("div",{className:"head"},[s("p",null,"推荐关注"),s("a",{href:"javascript:;"},[S(" 查看更多"),s("i",{class:"van-icon van-icon-arrow"})])],-1)),we={class:"body"},ye=y({__name:"FollowDoctors",setup(i){const{width:m,height:u}=W(),l=g({current:1,pageSize:5}),c=g([]),n=async()=>{const a=await q(l.value);c.value=a.data.rows};return G(()=>{n()}),(a,o)=>{const r=B,v=z;return p(),h("div",fe,[ge,s("div",we,[e(v,{loop:!1,width:150/390*f(m),height:205/844*f(u),"show-indicators":!1},{default:t(()=>[(p(!0),h(I,null,C(c.value,w=>(p(),L(r,{key:w.id},{default:t(()=>[e(ve,{item:w},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["width","height"])])])}}});const $e=$(ye,[["__scopeId","data-v-88dd36cc"]]),d=i=>(F("data-v-0e303f53"),i=i(),T(),i),ke={class:"home-page"},be={class:"home-header"},Ce={class:"con"},Ie=d(()=>s("h1",null,"优医",-1)),Se={class:"search"},xe={class:"home-navs"},Ne=d(()=>s("p",{class:"title"},"问医生",-1)),De=d(()=>s("p",{class:"desc"},"按科室查问医生",-1)),Le=d(()=>s("p",{class:"title"},"极速问诊",-1)),Fe=d(()=>s("p",{class:"desc"},"20s医生极速回复",-1)),Te=d(()=>s("p",{class:"title"},"开药门诊",-1)),Ke=d(()=>s("p",{class:"desc"},"线上买药更方便",-1)),Be=d(()=>s("p",{class:"title"},"药品订单",-1)),ze=d(()=>s("p",{class:"title"},"健康档案",-1)),Re=d(()=>s("p",{class:"title"},"我的处方",-1)),Ue=d(()=>s("p",{class:"title"},"疾病查询",-1)),Ve={class:"home-banner"},je=d(()=>s("img",{src:R,alt:""},null,-1)),qe=d(()=>s("img",{src:R,alt:""},null,-1)),Ge=y({__name:"index",setup(i){const m=g(1),u=A();return(l,c)=>{const n=V,a=E("router-link"),o=Q,r=O,v=B,w=z,k=P,U=M;return p(),h("div",ke,[s("div",be,[s("div",Ce,[Ie,s("div",Se,[e(n,{name:"home-search"}),S(" 搜一搜：疾病/症状/医生/健康知识 ")])])]),s("div",xe,[e(r,null,{default:t(()=>[e(o,{span:"8"},{default:t(()=>[e(a,{to:"/",class:"nav"},{default:t(()=>[e(n,{name:"home-doctor"}),Ne,De]),_:1})]),_:1}),e(o,{span:"8",onClick:c[0]||(c[0]=x=>f(u).setType(f(J).rapidConsultation))},{default:t(()=>[e(a,{to:"/consult/fast",class:"nav"},{default:t(()=>[e(n,{name:"home-graphic"}),Le,Fe]),_:1})]),_:1}),e(o,{span:"8"},{default:t(()=>[e(a,{to:"/",class:"nav"},{default:t(()=>[e(n,{name:"home-prescribe"}),Te,Ke]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(o,{span:"6"},{default:t(()=>[e(a,{to:"/",class:"nav min"},{default:t(()=>[e(n,{name:"home-order"}),Be]),_:1})]),_:1}),e(o,{span:"6"},{default:t(()=>[e(a,{to:"/",class:"nav min"},{default:t(()=>[e(n,{name:"home-docs"}),ze]),_:1})]),_:1}),e(o,{span:"6"},{default:t(()=>[e(a,{to:"/",class:"nav min"},{default:t(()=>[e(n,{name:"home-rp"}),Re]),_:1})]),_:1}),e(o,{span:"6"},{default:t(()=>[e(a,{to:"/",class:"nav min"},{default:t(()=>[e(n,{name:"home-find"}),Ue]),_:1})]),_:1})]),_:1})]),s("div",Ve,[e(w,{"indicator-color":"#fff"},{default:t(()=>[e(v,null,{default:t(()=>[je]),_:1}),e(v,null,{default:t(()=>[qe]),_:1})]),_:1})]),e(U,{shrink:"",sticky:"",active:m.value,"onUpdate:active":c[1]||(c[1]=x=>m.value=x)},{default:t(()=>[e(k,{title:"关注"},{default:t(()=>[e($e),e(b,{type:"like"})]),_:1}),e(k,{title:"推荐"},{default:t(()=>[e(b,{type:"recommend"})]),_:1}),e(k,{title:"减脂"},{default:t(()=>[e(b,{type:"fatReduction"})]),_:1}),e(k,{title:"饮食"},{default:t(()=>[e(b,{type:"food"})]),_:1})]),_:1},8,["active"])])}}});const os=$(Ge,[["__scopeId","data-v-0e303f53"]]);export{os as default};
