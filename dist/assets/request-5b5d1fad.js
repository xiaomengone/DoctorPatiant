import{g as $e,c as b,d as te,a as Je,r as g,Q as Ve,L as vt,O as F,a0 as Ke,M as We,N as Ge,j as Xe,R as xt,K as Pt,a1 as Nt,F as kt,C as Bt,m as Se,y as It,a2 as _t,E as Lt,u as Ye,P as Pe}from"./index-17af02c9.js";import{e as B,c as ne,D as Dt,n as k,d as I,k as Ft,w as re,t as D,j as Q,a6 as Ne,S as Ut,a9 as jt,p as Ze,y as Qe,g as zt,E as Oe,aa as Mt,H as Ht,I as et,h as qt,v as $t,s as Jt,i as Vt}from"./index-c960a1ea.js";import{c as Kt}from"./use-route-e2d195f8.js";function tt(e){const t=$e();t&&B(t.proxy,e)}let Wt=2e3;const Gt=()=>++Wt,[Xt,q]=ne("loading"),Yt=Array(12).fill(null).map((e,t)=>b("i",{class:q("line",String(t+1))},null)),Zt=b("svg",{class:q("circular"),viewBox:"25 25 50 50"},[b("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Qt={size:k,type:I("circular"),color:String,vertical:Boolean,textSize:k,textColor:String};var en=te({name:Xt,props:Qt,setup(e,{slots:t}){const n=Je(()=>B({color:e.color},Dt(e.size))),r=()=>{const s=e.type==="spinner"?Yt:Zt;return b("span",{class:q("spinner",e.type),style:n.value},[t.icon?t.icon():s])},o=()=>{var s;if(t.default)return b("span",{class:q("text"),style:{fontSize:Ft(e.textSize),color:(s=e.textColor)!=null?s:e.color}},[t.default()])};return()=>{const{type:s,vertical:i}=e;return b("div",{class:q([s,{vertical:i}]),"aria-live":"polite","aria-busy":!0},[r(),o()])}}});const tn=re(en),nt={show:Boolean,zIndex:k,overlay:D,duration:k,teleport:[String,Object],lockScroll:D,lazyRender:D,beforeClose:Function,overlayStyle:Object,overlayClass:Q,transitionAppear:Boolean,closeOnClickOverlay:D},Wr=Object.keys(nt);function nn(e,t){return e>t?"horizontal":t>e?"vertical":""}function rn(){const e=g(0),t=g(0),n=g(0),r=g(0),o=g(0),s=g(0),i=g(""),c=g(!0),h=()=>i.value==="vertical",l=()=>i.value==="horizontal",u=()=>{n.value=0,r.value=0,o.value=0,s.value=0,i.value="",c.value=!0};return{move:m=>{const f=m.touches[0];n.value=(f.clientX<0?0:f.clientX)-e.value,r.value=f.clientY-t.value,o.value=Math.abs(n.value),s.value=Math.abs(r.value);const p=10;(!i.value||o.value<p&&s.value<p)&&(i.value=nn(o.value,s.value)),c.value&&(o.value>Ne||s.value>Ne)&&(c.value=!1)},start:m=>{u(),e.value=m.touches[0].clientX,t.value=m.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:n,deltaY:r,offsetX:o,offsetY:s,direction:i,isVertical:h,isHorizontal:l,isTap:c}}let z=0;const ke="van-overflow-hidden";function on(e,t){const n=rn(),r="01",o="10",s=u=>{n.move(u);const d=n.deltaY.value>0?o:r,y=jt(u.target,e.value),{scrollHeight:m,offsetHeight:f,scrollTop:p}=y;let E="11";p===0?E=f>=m?"00":"01":p+f>=m&&(E="10"),E!=="11"&&n.isVertical()&&!(parseInt(E,2)&parseInt(d,2))&&Ze(u,!0)},i=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",s,{passive:!1}),z||document.body.classList.add(ke),z++},c=()=>{z&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",s),z--,z||document.body.classList.remove(ke))},h=()=>t()&&i(),l=()=>t()&&c();Ut(h),Ve(l),vt(l),F(t,u=>{u?i():c()})}function rt(e){const t=g(!1);return F(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const[sn,an]=ne("overlay"),cn={show:Boolean,zIndex:k,duration:k,className:Q,lockScroll:D,lazyRender:D,customStyle:Object};var ln=te({name:sn,props:cn,setup(e,{slots:t}){const n=g(),r=rt(()=>e.show||!e.lazyRender),o=i=>{e.lockScroll&&Ze(i,!0)},s=r(()=>{var i;const c=B(zt(e.zIndex),e.customStyle);return Oe(e.duration)&&(c.animationDuration=`${e.duration}s`),We(b("div",{ref:n,style:c,class:[an(),e.className]},[(i=t.default)==null?void 0:i.call(t)]),[[Ge,e.show]])});return Qe("touchmove",o,{target:n}),()=>b(Ke,{name:"van-fade",appear:!0},{default:s})}});const un=re(ln),fn=B({},nt,{round:Boolean,position:I("center"),closeIcon:I("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:I("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[dn,Be]=ne("popup");var hn=te({name:dn,inheritAttrs:!1,props:fn,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:r}){let o,s;const i=g(),c=g(),h=rt(()=>e.show||!e.lazyRender),l=Je(()=>{const O={zIndex:i.value};if(Oe(e.duration)){const P=e.position==="center"?"animationDuration":"transitionDuration";O[P]=`${e.duration}s`}return O}),u=()=>{o||(o=!0,i.value=e.zIndex!==void 0?+e.zIndex:Gt(),t("open"))},d=()=>{o&&Kt(e.beforeClose,{done(){o=!1,t("close"),t("update:show",!1)}})},y=O=>{t("clickOverlay",O),e.closeOnClickOverlay&&d()},m=()=>{if(e.overlay)return b(un,{show:e.show,class:e.overlayClass,zIndex:i.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:y},{default:r["overlay-content"]})},f=O=>{t("clickCloseIcon",O),d()},p=()=>{if(e.closeable)return b(et,{role:"button",tabindex:0,name:e.closeIcon,class:[Be("close-icon",e.closeIconPosition),Ht],classPrefix:e.iconPrefix,onClick:f},null)};let E;const R=()=>{E&&clearTimeout(E),E=setTimeout(()=>{t("opened")})},x=()=>t("closed"),_=O=>t("keydown",O),ue=h(()=>{var O;const{round:P,position:K,safeAreaInsetTop:fe,safeAreaInsetBottom:Ct}=e;return We(b("div",Se({ref:c,style:l.value,role:"dialog",tabindex:0,class:[Be({round:P,[K]:K}),{"van-safe-area-top":fe,"van-safe-area-bottom":Ct}],onKeydown:_},n),[(O=r.default)==null?void 0:O.call(r),p()]),[[Ge,e.show]])}),xe=()=>{const{position:O,transition:P,transitionAppear:K}=e,fe=O==="center"?"van-fade":`van-popup-slide-${O}`;return b(Ke,{name:P||fe,appear:K,onAfterEnter:R,onAfterLeave:x},{default:ue})};return F(()=>e.show,O=>{O&&!o&&(u(),n.tabindex===0&&Bt(()=>{var P;(P=c.value)==null||P.focus()})),!O&&o&&(o=!1,t("close"))}),tt({popupRef:c}),on(c,()=>e.show&&e.lockScroll),Qe("popstate",()=>{e.closeOnPopstate&&(d(),s=!1)}),Xe(()=>{e.show&&u()}),xt(()=>{s&&(t("update:show",!0),s=!1)}),Ve(()=>{e.show&&e.teleport&&(d(),s=!0)}),Pt(Mt,()=>e.show),()=>e.teleport?b(Nt,{to:e.teleport},{default:()=>[m(),xe()]}):b(kt,null,[m(),xe()])}});const pn=re(hn);let M=0;function mn(e){e?(M||document.body.classList.add("van-toast--unclickable"),M++):M&&(M--,M||document.body.classList.remove("van-toast--unclickable"))}const[yn,L]=ne("toast"),wn=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],bn={icon:String,show:Boolean,type:I("text"),overlay:Boolean,message:k,iconSize:k,duration:$t(2e3),position:I("middle"),teleport:[String,Object],wordBreak:String,className:Q,iconPrefix:String,transition:I("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:Q,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var ot=te({name:yn,props:bn,emits:["update:show"],setup(e,{emit:t,slots:n}){let r,o=!1;const s=()=>{const d=e.show&&e.forbidClick;o!==d&&(o=d,mn(o))},i=d=>t("update:show",d),c=()=>{e.closeOnClick&&i(!1)},h=()=>clearTimeout(r),l=()=>{const{icon:d,type:y,iconSize:m,iconPrefix:f,loadingType:p}=e;if(d||y==="success"||y==="fail")return b(et,{name:d||y,size:m,class:L("icon"),classPrefix:f},null);if(y==="loading")return b(tn,{class:L("loading"),size:m,type:p},null)},u=()=>{const{type:d,message:y}=e;if(n.message)return b("div",{class:L("text")},[n.message()]);if(Oe(y)&&y!=="")return d==="html"?b("div",{key:0,class:L("text"),innerHTML:String(y)},null):b("div",{class:L("text")},[y])};return F(()=>[e.show,e.forbidClick],s),F(()=>[e.show,e.type,e.message,e.duration],()=>{h(),e.show&&e.duration>0&&(r=setTimeout(()=>{i(!1)},e.duration))}),Xe(s),It(s),()=>b(pn,Se({class:[L([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:c,onClosed:h,"onUpdate:show":i},qt(e,wn)),{default:()=>[l(),u()]})}});function En(){const e=Lt({show:!1}),t=o=>{e.show=o},n=o=>{B(e,o,{transitionAppear:!0}),t(!0)},r=()=>t(!1);return tt({open:n,close:r,toggle:t}),{open:n,close:r,state:e,toggle:t}}function Sn(e){const t=_t(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const On={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let W=[],Rn=!1,Ie=B({},On);const gn=new Map;function st(e){return Vt(e)?e:{message:e}}function Tn(){const{instance:e,unmount:t}=Sn({setup(){const n=g(""),{open:r,state:o,close:s,toggle:i}=En(),c=()=>{},h=()=>b(ot,Se(o,{onClosed:c,"onUpdate:show":i}),null);return F(n,l=>{o.message=l}),$e().render=h,{open:r,close:s,message:n}}});return e}function An(){if(!W.length||Rn){const e=Tn();W.push(e)}return W[W.length-1]}function it(e={}){if(!Jt)return{};const t=An(),n=st(e);return t.open(B({},Ie,gn.get(n.type||Ie.type),n)),t}const Cn=e=>t=>it(B({type:e},st(t))),Gr=Cn("success"),Xr=re(ot);function at(e,t){return function(){return e.apply(t,arguments)}}const{toString:vn}=Object.prototype,{getPrototypeOf:Re}=Object,oe=(e=>t=>{const n=vn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>oe(t)===e),se=e=>t=>typeof t===e,{isArray:j}=Array,$=se("undefined");function xn(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ct=C("ArrayBuffer");function Pn(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ct(e.buffer),t}const Nn=se("string"),T=se("function"),lt=se("number"),ie=e=>e!==null&&typeof e=="object",kn=e=>e===!0||e===!1,G=e=>{if(oe(e)!=="object")return!1;const t=Re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bn=C("Date"),In=C("File"),_n=C("Blob"),Ln=C("FileList"),Dn=e=>ie(e)&&T(e.pipe),Fn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=oe(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Un=C("URLSearchParams"),jn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function ut(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const ft=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),dt=e=>!$(e)&&e!==ft;function ye(){const{caseless:e}=dt(this)&&this||{},t={},n=(r,o)=>{const s=e&&ut(t,o)||o;G(t[s])&&G(r)?t[s]=ye(t[s],r):G(r)?t[s]=ye({},r):j(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&J(arguments[r],n);return t}const zn=(e,t,n,{allOwnKeys:r}={})=>(J(t,(o,s)=>{n&&T(o)?e[s]=at(o,n):e[s]=o},{allOwnKeys:r}),e),Mn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qn=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$n=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Jn=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!lt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Re(Uint8Array)),Kn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Wn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Gn=C("HTMLFormElement"),Xn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Yn=C("RegExp"),ht=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Zn=e=>{ht(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qn=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return j(e)?r(e):r(String(e).split(t)),n},er=()=>{},tr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),de="abcdefghijklmnopqrstuvwxyz",Le="0123456789",pt={DIGIT:Le,ALPHA:de,ALPHA_DIGIT:de+de.toUpperCase()+Le},nr=(e=16,t=pt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rr(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const or=e=>{const t=new Array(10),n=(r,o)=>{if(ie(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=j(r)?[]:{};return J(r,(i,c)=>{const h=n(i,o+1);!$(h)&&(s[c]=h)}),t[o]=void 0,s}}return r};return n(e,0)},sr=C("AsyncFunction"),ir=e=>e&&(ie(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:j,isArrayBuffer:ct,isBuffer:xn,isFormData:Fn,isArrayBufferView:Pn,isString:Nn,isNumber:lt,isBoolean:kn,isObject:ie,isPlainObject:G,isUndefined:$,isDate:Bn,isFile:In,isBlob:_n,isRegExp:Yn,isFunction:T,isStream:Dn,isURLSearchParams:Un,isTypedArray:Vn,isFileList:Ln,forEach:J,merge:ye,extend:zn,trim:jn,stripBOM:Mn,inherits:Hn,toFlatObject:qn,kindOf:oe,kindOfTest:C,endsWith:$n,toArray:Jn,forEachEntry:Kn,matchAll:Wn,isHTMLForm:Gn,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:ht,freezeMethods:Zn,toObjectSet:Qn,toCamelCase:Xn,noop:er,toFiniteNumber:tr,findKey:ut,global:ft,isContextDefined:dt,ALPHABET:pt,generateString:nr,isSpecCompliantForm:rr,toJSONObject:or,isAsyncFn:sr,isThenable:ir};function w(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mt=w.prototype,yt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{yt[e]={value:e}});Object.defineProperties(w,yt);Object.defineProperty(mt,"isAxiosError",{value:!0});w.from=(e,t,n,r,o,s)=>{const i=Object.create(mt);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),w.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const ar=null;function we(e){return a.isPlainObject(e)||a.isArray(e)}function wt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function De(e,t,n){return e?e.concat(t).map(function(o,s){return o=wt(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function cr(e){return a.isArray(e)&&!e.some(we)}const lr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ae(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,E){return!a.isUndefined(E[p])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new w("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,p,E){let R=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&cr(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(R=a.toArray(f)))return p=wt(p),R.forEach(function(_,ue){!(a.isUndefined(_)||_===null)&&t.append(i===!0?De([p],ue,s):i===null?p:p+"[]",l(_))}),!1}return we(f)?!0:(t.append(De(E,p,s),l(f)),!1)}const d=[],y=Object.assign(lr,{defaultVisitor:u,convertValue:l,isVisitable:we});function m(f,p){if(!a.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));d.push(f),a.forEach(f,function(R,x){(!(a.isUndefined(R)||R===null)&&o.call(t,R,a.isString(x)?x.trim():x,p,y))===!0&&m(R,p?p.concat(x):[x])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ge(e,t){this._pairs=[],e&&ae(e,this,t)}const bt=ge.prototype;bt.append=function(t,n){this._pairs.push([t,n])};bt.toString=function(t){const n=t?function(r){return t.call(this,r,Fe)}:Fe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ur(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Et(e,t,n){if(!t)return e;const r=n&&n.encode||ur,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ge(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class fr{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ue=fr,St={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dr=typeof URLSearchParams<"u"?URLSearchParams:ge,hr=typeof FormData<"u"?FormData:null,pr=typeof Blob<"u"?Blob:null,mr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),yr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:dr,FormData:hr,Blob:pr},isStandardBrowserEnv:mr,isStandardBrowserWebWorkerEnv:yr,protocols:["http","https","file","blob","url","data"]};function wr(e,t){return ae(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function br(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Er(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ot(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),h=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,h?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Er(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(br(r),o,n,0)}),n}return null}const Sr={"Content-Type":void 0};function Or(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ce={transitional:St,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ot(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wr(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ae(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Or(t)):t}],transformResponse:[function(t){const n=this.transitional||ce.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?w.from(c,w.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){ce.headers[t]={}});a.forEach(["post","put","patch"],function(t){ce.headers[t]=a.merge(Sr)});const Te=ce,Rr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gr=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Rr[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},je=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function X(e){return e===!1||e==null?e:a.isArray(e)?e.map(X):String(e)}function Tr(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ar=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function he(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Cr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vr(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class le{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,h,l){const u=H(h);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(o,u);(!d||o[d]===void 0||l===!0||l===void 0&&o[d]!==!1)&&(o[d||h]=X(c))}const i=(c,h)=>a.forEach(c,(l,u)=>s(l,u,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Ar(t)?i(gr(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Tr(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||he(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||he(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||he(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=X(o),delete n[s];return}const c=t?Cr(s):String(s).trim();c!==s&&delete n[s],n[c]=X(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[je]=this[je]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=H(i);r[c]||(vr(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(le.prototype);a.freezeMethods(le);const v=le;function pe(e,t){const n=this||Te,r=t||n,o=v.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Rt(e){return!!(e&&e.__CANCEL__)}function V(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(V,w,{__CANCEL__:!0});function xr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pr=A.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const h=[];h.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&h.push("expires="+new Date(o).toGMTString()),a.isString(s)&&h.push("path="+s),a.isString(i)&&h.push("domain="+i),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Nr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function gt(e,t){return e&&!Nr(t)?kr(e,t):t}const Br=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Ir(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _r(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(h){const l=Date.now(),u=r[s];i||(i=l),n[o]=h,r[o]=l;let d=s,y=0;for(;d!==o;)y+=n[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const m=u&&l-u;return m?Math.round(y*1e3/m):void 0}}function ze(e,t){let n=0;const r=_r(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,h=r(c),l=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&l?(i-s)/h:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Lr=typeof XMLHttpRequest<"u",Dr=Lr&&function(e){return new Promise(function(n,r){let o=e.data;const s=v.from(e.headers).normalize(),i=e.responseType;let c;function h(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+f))}const u=gt(e.baseURL,e.url);l.open(e.method.toUpperCase(),Et(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function d(){if(!l)return;const m=v.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:e,request:l};xr(function(R){n(R),h()},function(R){r(R),h()},p),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new w("Request aborted",w.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||St;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new w(f,p.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,l)),l=null},A.isStandardBrowserEnv){const m=(e.withCredentials||Br(u))&&e.xsrfCookieName&&Pr.read(e.xsrfCookieName);m&&s.set(e.xsrfHeaderName,m)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(f,p){l.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ze(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ze(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=m=>{l&&(r(!m||m.type?new V(null,e,l):m),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Ir(u);if(y&&A.protocols.indexOf(y)===-1){r(new w("Unsupported protocol "+y+":",w.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Y={http:ar,xhr:Dr};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fr={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?Y[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(Y,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Y};function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V(null,e)}function Me(e){return me(e),e.headers=v.from(e.headers),e.data=pe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fr.getAdapter(e.adapter||Te.adapter)(e).then(function(r){return me(e),r.data=pe.call(e,e.transformResponse,r),r.headers=v.from(r.headers),r},function(r){return Rt(r)||(me(e),r&&r.response&&(r.response.data=pe.call(e,e.transformResponse,r.response),r.response.headers=v.from(r.response.headers))),Promise.reject(r)})}const He=e=>e instanceof v?e.toJSON():e;function U(e,t){t=t||{};const n={};function r(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function s(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const h={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>o(He(l),He(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=h[u]||o,y=d(e[u],t[u],u);a.isUndefined(y)&&d!==c||(n[u]=y)}),n}const Tt="1.4.0",Ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const qe={};Ae.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Tt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new w(o(i," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!qe[i]&&(qe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Ur(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],h=c===void 0||i(c,s,e);if(h!==!0)throw new w("option "+s+" must be "+h,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+s,w.ERR_BAD_OPTION)}}const be={assertOptions:Ur,validators:Ae},N=be.validators;class ee{constructor(t){this.defaults=t,this.interceptors={request:new Ue,response:new Ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&be.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:be.assertOptions(o,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=v.concat(i,s);const c=[];let h=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(h=h&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let u,d=0,y;if(!h){const f=[Me.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),y=f.length,u=Promise.resolve(n);d<y;)u=u.then(f[d++],f[d++]);return u}y=c.length;let m=n;for(d=0;d<y;){const f=c[d++],p=c[d++];try{m=f(m)}catch(E){p.call(this,E);break}}try{u=Me.call(this,m)}catch(f){return Promise.reject(f)}for(d=0,y=l.length;d<y;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=U(this.defaults,t);const n=gt(t.baseURL,t.url);return Et(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){ee.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}ee.prototype[t]=n(),ee.prototype[t+"Form"]=n(!0)});const Z=ee;class Ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new V(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ce(function(o){t=o}),cancel:t}}}const jr=Ce;function zr(e){return function(n){return e.apply(null,n)}}function Mr(e){return a.isObject(e)&&e.isAxiosError===!0}const Ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ee).forEach(([e,t])=>{Ee[t]=e});const Hr=Ee;function At(e){const t=new Z(e),n=at(Z.prototype.request,t);return a.extend(n,Z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return At(U(e,o))},n}const S=At(Te);S.Axios=Z;S.CanceledError=V;S.CancelToken=jr;S.isCancel=Rt;S.VERSION=Tt;S.toFormData=ae;S.AxiosError=w;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=zr;S.isAxiosError=Mr;S.mergeConfig=U;S.AxiosHeaders=v;S.formToJSON=e=>Ot(a.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=Hr;S.default=S;const qr=S,$r="https://consult-api.itheima.net/",ve=qr.create({baseURL:$r,timeout:1e4});ve.interceptors.request.use(function(e){var n;const t=Ye();return(n=t.user)!=null&&n.token&&e.headers&&(e.headers.Authorization=`Bearer ${t.user.token}`),e},function(e){return Promise.reject(e)});ve.interceptors.response.use(function(e){return e.data.code!==1e4?(it(e.data.message||"业务失败"),Promise.reject(e.data)):e.data},function(e){var t;return((t=e.response)==null?void 0:t.status)===401&&(Ye().deleteUser(),Pe.push({path:"/login",query:{returnUrl:Pe.currentRoute.value.fullPath}})),Promise.reject()});const Yr=(e,t="GET",n)=>ve.request({url:e,method:t,[t.toUpperCase()==="GET"?"params":"data"]:n});export{tn as L,pn as P,Xr as T,Gr as a,Wr as b,En as c,rn as d,$r as e,Sn as m,nt as p,Yr as r,it as s,tt as u};
