import{_ as B}from"./ReNavBar-c95b3280.js";import{_ as S}from"./avatar-doctor-ce251225.js";import{E as h,e as k}from"./index-8a6aab93.js";import{d as w,r as C,a as T,o as r,e as m,f as l,t as $,q as s,P as b,c as o,w as a,h as d,A as g,s as D,p as V,l as F,_ as P,F as N,k as E,i as M}from"./index-91c59e71.js";import"./request-3cf2d5e2.js";import{d as q,e as A,c as R}from"./index-16d48e2a.js";import{C as U}from"./ConsultMore-8617bb97.js";import{B as G}from"./index-2daf35a5.js";import{i as j}from"./user-95d202f6.js";import{L as H,T as J,a as K}from"./index-41367530.js";import"./use-placeholder-ecf850e8.js";import"./index-5d8f6571.js";import"./index-38dfc129.js";import"./use-route-956230c9.js";import"./rapidConsultation-b5d3bd31.js";import"./use-id-8ec4f288.js";import"./use-refs-fc566cfb.js";const L=c=>(V("data-v-ec6e7ba4"),c=c(),F(),c),Q={class:"consult-item"},W={class:"head van-hairline--bottom"},X=L(()=>l("img",{class:"img",src:S},null,-1)),Y={class:"body-row"},Z=L(()=>l("div",{class:"body-label"},"病情描述",-1)),x={class:"body-value"},ee={class:"body-row"},te=L(()=>l("div",{class:"body-label"},"价格",-1)),se={class:"body-value"},oe={class:"body-row"},ne=L(()=>l("div",{class:"body-label"},"创建时间",-1)),ae={class:"body-value tip"},ie={key:0,class:"foot"},le={key:1,class:"foot"},re={key:2,class:"foot"},de={key:3,class:"foot"},ue={key:4,class:"foot"},pe=w({__name:"ConsultItem",props:{item:{}},emits:["deleteId"],setup(c,{emit:I}){const u=c;C(!1);const{originalPrescription:f}=R(),{cancelConsultation:p,loading:_}=q(),{onDeleteOrder:y,loading:v}=A(()=>{I("deleteId",u.item.id)});return T(()=>[{text:"查看处方",disabled:!u.item.prescriptionId},{text:"删除订单"}]),(t,e)=>{var z;const n=G;return r(),m("div",Q,[l("div",W,[X,l("p",null,$(((z=t.item.docInfo)==null?void 0:z.name)||"暂无医生接诊"),1),l("span",null,$(t.item.statusValue),1)]),l("div",{class:"body",onClick:e[0]||(e[0]=i=>s(b).push(`/user/consultDtail?itemId=${t.item.id}`))},[l("div",Y,[Z,l("div",x,$(t.item.illnessDesc),1)]),l("div",ee,[te,l("div",se,"¥ "+$(t.item.payment.toFixed(2)),1)]),l("div",oe,[ne,l("div",ae,$(t.item.createTime),1)])]),t.item.status===s(h).toBePaid?(r(),m("div",ie,[o(n,{class:"gray",plain:"",size:"small",round:"",onClick:e[1]||(e[1]=i=>s(p)(t.item)),"loading-text":"加载中...",loading:s(_)},{default:a(()=>[d("取消问诊")]),_:1},8,["loading"]),o(n,{type:"primary",plain:"",size:"small",round:"",onClick:e[2]||(e[2]=i=>s(b).push(`/user/consultDtail/${t.item.id}`))},{default:a(()=>[d("去支付")]),_:1})])):g("",!0),t.item.status===s(h).waitingForConsultation?(r(),m("div",le,[o(n,{class:"gray",plain:"",size:"small",round:"",onClick:e[3]||(e[3]=i=>s(p)(t.item))},{default:a(()=>[d("取消问诊")]),_:1}),o(n,{type:"primary",plain:"",size:"small",round:"",onClick:e[4]||(e[4]=i=>s(b).push(`/consult/room?orderId=${t.item.id}`))},{default:a(()=>[d("继续沟通")]),_:1})])):g("",!0),t.item.status===s(h).inConsultation?(r(),m("div",re,[t.item.prescriptionId?(r(),D(n,{key:0,class:"gray",plain:"",size:"small",round:"",onClick:e[5]||(e[5]=i=>s(f)(u.item.prescriptionId||""))},{default:a(()=>[d("查看处方")]),_:1})):g("",!0),o(n,{type:"primary",plain:"",size:"small",round:"",onClick:e[6]||(e[6]=i=>s(b).push(`/consult/room?orderId=${t.item.id}`))},{default:a(()=>[d("继续沟通")]),_:1})])):g("",!0),t.item.status===s(h).completed?(r(),m("div",de,[o(U,{item:t.item,onOriginalPrescription:s(f),onOnDeleteOrder:s(y)},null,8,["item","onOriginalPrescription","onOnDeleteOrder"]),o(n,{class:"gray",plain:"",size:"small",round:"",onClick:e[7]||(e[7]=i=>s(b).push(`/consult/room?orderId=${t.item.id}`))},{default:a(()=>[d("问诊记录")]),_:1}),o(n,{type:"primary",plain:"",size:"small",round:""},{default:a(()=>[d("写评价")]),_:1}),t.item.evaluateFlag==1?(r(),D(n,{key:0,type:"primary",plain:"",size:"small",round:""},{default:a(()=>[d("查看评价")]),_:1})):g("",!0)])):g("",!0),t.item.status===s(h).canceled?(r(),m("div",ue,[o(n,{class:"gray",plain:"",size:"small",round:"",loading:s(v),onClick:e[8]||(e[8]=i=>s(y)(t.item))},{default:a(()=>[d("删除订单")]),_:1},8,["loading"]),o(n,{type:"primary",plain:"",size:"small",round:"",onClick:e[9]||(e[9]=i=>s(b).push("/"))},{default:a(()=>[d("咨询其他医生")]),_:1})])):g("",!0)])}}});const me=P(pe,[["__scopeId","data-v-ec6e7ba4"]]),ce={class:"consult-list"},_e=w({__name:"ConsultList",props:{type:{}},setup(c){const u=C({current:1,pageSize:5,type:c.type}),f=C({total:0,pageTotal:0,rows:[]}),p=C([]),_=C(!1),y=C(!1),v=()=>{j(u.value).then(e=>{p.value.push(...e.data.rows),f.value=e.data,f.value.total<=p.value.length?y.value=!0:u.value.current=u.value.current+1,_.value=!1}).catch(()=>{console.log("获取失败")})},t=e=>{p.value=p.value.filter(n=>{n.id}),v()};return(e,n)=>{const z=H;return r(),m("div",ce,[o(z,{loading:_.value,"onUpdate:loading":n[0]||(n[0]=i=>_.value=i),finished:y.value,"finished-text":"没有更多了",onLoad:v},{default:a(()=>[(r(!0),m(N,null,E(p.value,i=>(r(),D(me,{key:i.id,item:i,onDeleteId:t},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])}}});const O=P(_e,[["__scopeId","data-v-ecd542c5"]]),ve={class:"consult-page"},fe=w({__name:"ConsultPage",setup(c){const I=C(2),u=M(),f=()=>{u.push("/user")};return(p,_)=>{const y=B,v=K,t=J;return r(),m("div",ve,[o(y,{title:"问诊记录",back:f}),o(t,{sticky:"",active:I.value,"onUpdate:active":_[0]||(_[0]=e=>I.value=e)},{default:a(()=>[o(v,{title:"极速问诊",name:s(k).consultDoctor},{default:a(()=>[o(O,{type:s(k).consultDoctor},null,8,["type"])]),_:1},8,["name"]),o(v,{title:"找医生",name:s(k).rapidConsultation},{default:a(()=>[o(O,{type:s(k).rapidConsultation},null,8,["type"])]),_:1},8,["name"]),o(v,{title:"开药问诊",name:s(k).MedicationConsultation},{default:a(()=>[o(O,{type:s(k).MedicationConsultation},null,8,["type"])]),_:1},8,["name"])]),_:1},8,["active"])])}}});const Ve=P(fe,[["__scopeId","data-v-52ff8225"]]);export{Ve as default};