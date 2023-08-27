import{_ as q}from"./ReNavBar-5f1fcfab.js";import{_ as L}from"./avatar-doctor-206a2b5c.js";import{E as v}from"./index-9a1f5411.js";import{C as M}from"./ConsultMore-02c033a5.js";import{h as z}from"./rapidConsultation-6ec55b0f.js";import{d as G,r as A,v as H,i as J,j as K,a as Q,e as d,c as t,f as o,t as m,w as l,n as a,h as n,z as c,q as g,o as s,p as U,l as W,_ as X}from"./index-382d02f8.js";import{C as Y,g as Z,a as ee}from"./filter-c63fe7af.js";import{d as te,e as oe,c as ae}from"./index-844ba21e.js";import{a as le}from"./index-b17fe00e.js";import{C as ne,S as se}from"./index-da315261.js";import{B as ie}from"./index-8b4a00bc.js";import{s as S}from"./request-9970d97a.js";import{I as ue}from"./index-17bfa05c.js";import{C as re}from"./index-0a087ba4.js";import"./use-placeholder-43ad3744.js";import"./index-f63a076a.js";import"./use-route-4b024d8b.js";import"./constants-b7700075.js";const f=y=>(U("data-v-16f3fee6"),y=y(),W(),y),de={key:0,class:"consult-detail-page"},ce={class:"detail-head"},pe={class:"text"},_e={class:"sta"},ve=f(()=>o("p",{class:"tip"},"服务医生信息",-1)),me={class:"card"},fe=f(()=>o("img",{class:"avatar",src:L,alt:""},null,-1)),ye={class:"doc"},ge=f(()=>o("span",null,"极速问诊",-1)),he={class:"detail-patient"},Ce={class:"detail-order"},Ie=f(()=>o("h3",null,"订单信息",-1)),ke={key:0,class:"detail-time"},$e={key:1,class:"detail-action van-hairline--top"},we={class:"price"},De=f(()=>o("span",null,"需付款",-1)),xe={key:2,class:"detail-action van-hairline--top"},Be={key:3,class:"detail-action van-hairline--top"},Se={key:4,class:"detail-action van-hairline--top"},Oe={key:5,class:"detail-action van-hairline--top"},be={key:1,class:"consult-detail-page"},Ne=G({__name:"consultDtail",setup(y){const{cancelConsultation:h,loading:C}=te(),{originalPrescription:O}=ae(),e=A(),b=H(),N=J(),I=b.query.itemId,{onDeleteOrder:k,loading:P}=oe(()=>{N.push("/user/consult")}),{text:Pe,copy:V,copied:Ve,isSupported:T}=le(),F=async()=>{var _;if(!T.value)return S("未经授权，不支持");await V((_=e.value)==null?void 0:_.orderNo),S("已复制")};return K(async()=>{console.log("itemId",Object.prototype.toString.call(I));const _=await z(I);e.value=_.data,console.log("res",_.data)}),Q(()=>{if(e.value&&e.value.status==1)return"待支付"}),(_,u)=>{var D;const $=q,E=ue,r=re,w=ne,R=Y,i=ie,j=se;return e.value?(s(),d("div",de,[t($,{title:"问诊详情"}),o("div",ce,[o("div",pe,[o("h3",null,"图文问诊 "+m(e.value.payment)+" 元",1),o("span",_e,m(e.value.statusValue),1),ve]),o("div",me,[fe,o("p",ye,[ge,o("span",null,m(((D=e.value.docInfo)==null?void 0:D.name)||""),1)]),t(E,{name:"arrow"})])]),o("div",he,[t(w,{border:!1},{default:l(()=>{var p,x,B;return[t(r,{title:"患者信息",value:`${(p=e.value.patientInfo)==null?void 0:p.name} | ${(x=e.value.patientInfo)==null?void 0:x.genderValue} | ${(B=e.value.patientInfo)==null?void 0:B.age}岁`},null,8,["value"]),t(r,{title:"患病时长",value:a(Z)(e.value.illnessTime||1)},null,8,["value"]),t(r,{title:"就诊情况",value:a(ee)(e.value.consultFlag||1)},null,8,["value"]),t(r,{title:"病情描述",label:e.value.illnessDesc},null,8,["label"])]}),_:1})]),o("div",Ce,[Ie,t(w,{border:!1},{default:l(()=>[t(r,{title:"订单编号"},{value:l(()=>[o("span",{class:"copy",onClick:F},"复制"),n(" "+m(e.value.orderNo),1)]),_:1}),t(r,{title:"创建时间",value:e.value.createTime},null,8,["value"]),t(r,{title:"应付款",value:`￥${e.value.payment}`},null,8,["value"]),t(r,{title:"优惠券",value:`-￥${e.value.couponDeduction}`},null,8,["value"]),t(r,{title:"积分抵扣",value:`-￥${e.value.pointDeduction}`},null,8,["value"]),t(r,{title:"实付款",value:`￥${e.value.actualPayment}`,class:"price"},null,8,["value"])]),_:1})]),e.value.status===a(v).toBePaid?(s(),d("div",ke,[n(" 请在 "),t(R,{time:(e.value.countdown||0)*1e3},null,8,["time"]),n(" 内完成支付，超时订单将取消 ")])):c("",!0),e.value.status===a(v).toBePaid?(s(),d("div",$e,[o("div",we,[De,o("span",null,"￥"+m(e.value.actualPayment.toFixed(2)),1)]),t(i,{type:"default",round:"",loading:a(C),onClick:u[0]||(u[0]=p=>a(h)(e.value))},{default:l(()=>[n("取消问诊")]),_:1},8,["loading"]),t(i,{type:"primary",round:""},{default:l(()=>[n("继续支付")]),_:1})])):c("",!0),e.value.status===a(v).waitingForConsultation?(s(),d("div",xe,[t(i,{type:"default",round:"",loading:a(C),onClick:u[1]||(u[1]=p=>a(h)(e.value))},{default:l(()=>[n("取消问诊")]),_:1},8,["loading"]),t(i,{type:"primary",round:"",to:`/room?orderId=${e.value.id}`},{default:l(()=>[n("继续沟通")]),_:1},8,["to"])])):c("",!0),e.value.status===a(v).inConsultation?(s(),d("div",Be,[e.value.prescriptionId?(s(),g(i,{key:0,type:"default",round:""},{default:l(()=>[n("查看处方")]),_:1})):c("",!0),t(i,{type:"primary",round:"",to:`/room?orderId=${e.value.id}`},{default:l(()=>[n("继续沟通")]),_:1},8,["to"])])):c("",!0),e.value.status===a(v).completed?(s(),d("div",Se,[t(M,{item:e.value,onOnDeleteOrder:u[2]||(u[2]=p=>a(k)(e.value)),onOriginalPrescription:u[3]||(u[3]=p=>a(O)(e.value.prescriptionId||""))},null,8,["item"]),e.value.prescriptionId?(s(),g(i,{key:0,type:"default",round:"",to:`/room?orderId=${e.value.id}`},{default:l(()=>[n("问诊记录")]),_:1},8,["to"])):c("",!0),e.value.evaluateId?(s(),g(i,{key:1,type:"default",round:"",to:`/room?orderId=${e.value.id}`},{default:l(()=>[n("查看评价")]),_:1},8,["to"])):(s(),g(i,{key:2,type:"primary",round:"",to:`/room?orderId=${e.value.id}`},{default:l(()=>[n("写评价")]),_:1},8,["to"]))])):c("",!0),e.value.status===5?(s(),d("div",Oe,[t(i,{type:"default",round:"",onClick:u[4]||(u[4]=p=>a(k)(e.value)),loading:a(P)},{default:l(()=>[n("删除订单")]),_:1},8,["loading"]),t(i,{type:"primary",round:"",to:"/"},{default:l(()=>[n("咨询其他医生")]),_:1})])):c("",!0)])):(s(),d("div",be,[t($,{title:"问诊详情"}),t(j,{title:"",row:3})]))}}});const Ye=X(Ne,[["__scopeId","data-v-16f3fee6"]]);export{Ye as default};