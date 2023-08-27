import{c as B,k as u,E as $,s as j,n as d,t as P,d as z,I as D,w as N}from"./index-ae49f426.js";import{d as _,r as f,g as C,a as R,N as U,K as F,j as K,B as b,c as n,L as M,Z as O,m as E}from"./index-86cd2e39.js";const[T,t]=B("image"),V={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:P,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:P,loadingIcon:z("photo")};var Z=_({name:T,props:V,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=f(!1),o=f(!0),r=f(),{$Lazyload:l}=C().proxy,S=R(()=>{const e={width:u(a.width),height:u(a.height)};return $(a.radius)&&(e.overflow="hidden",e.borderRadius=u(a.radius)),e});U(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},m=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},h=e=>{i.value=!0,o.value=!1,v("error",e)},w=(e,c,I)=>I?I():n(D,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),k=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[w(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[w(a.errorIcon,t("error-icon"),s.error)])},x=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?M(n("img",E({ref:r},e),null),[[O("lazy"),a.src]]):n("img",E({ref:r,src:a.src,onLoad:g,onError:h},e),null)},L=({el:e})=>{const c=()=>{e===r.value&&o.value&&m()};r.value?c():b(c)},y=({el:e})=>{e===r.value&&!i.value&&h()};return l&&j&&(l.$on("loaded",L),l.$on("error",y),F(()=>{l.$off("loaded",L),l.$off("error",y)})),K(()=>{b(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&m()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:S.value},[x(),k(),(e=s.default)==null?void 0:e.call(s)])}}});const G=N(Z);export{G as I};