var Mv=Object.defineProperty;var Sv=(n,t,e)=>t in n?Mv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Mc=(n,t,e)=>(Sv(n,typeof t!="symbol"?t+"":t,e),e),Sc=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var vn=(n,t,e)=>(Sc(n,t,"read from private field"),e?e.call(n):t.get(n)),wr=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},Ec=(n,t,e,i)=>(Sc(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var kn=(n,t,e)=>(Sc(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rh(n,t){const e=new Set(n.split(","));return t?i=>e.has(i.toLowerCase()):i=>e.has(i)}const pe={},Fs=[],On=()=>{},Ev=()=>!1,Gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ch=n=>n.startsWith("onUpdate:"),ze=Object.assign,Ph=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Tv=Object.prototype.hasOwnProperty,Qt=(n,t)=>Tv.call(n,t),Ht=Array.isArray,Bs=n=>Vl(n)==="[object Map]",Jm=n=>Vl(n)==="[object Set]",Wt=n=>typeof n=="function",Re=n=>typeof n=="string",ao=n=>typeof n=="symbol",ge=n=>n!==null&&typeof n=="object",Qm=n=>(ge(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),t_=Object.prototype.toString,Vl=n=>t_.call(n),bv=n=>Vl(n).slice(8,-1),e_=n=>Vl(n)==="[object Object]",Lh=n=>Re(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Co=Rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wl=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},wv=/-(\w)/g,di=Wl(n=>n.replace(wv,(t,e)=>e?e.toUpperCase():"")),Av=/\B([A-Z])/g,lo=Wl(n=>n.replace(Av,"-$1").toLowerCase()),Xl=Wl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tc=Wl(n=>n?`on${Xl(n)}`:""),gr=(n,t)=>!Object.is(n,t),bc=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},gl=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Rv=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ff;const n_=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dh(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Re(i)?Dv(i):Dh(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Re(n)||ge(n))return n}const Cv=/;(?![^(]*\))/g,Pv=/:([^]+)/,Lv=/\/\*[^]*?\*\//g;function Dv(n){const t={};return n.replace(Lv,"").split(Cv).forEach(e=>{if(e){const i=e.split(Pv);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function lr(n){let t="";if(Re(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=lr(n[e]);i&&(t+=i+" ")}else if(ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nv=Rh(Iv);function i_(n){return!!n||n===""}const r_=n=>Re(n)?n:n==null?"":Ht(n)||ge(n)&&(n.toString===t_||!Wt(n.toString))?JSON.stringify(n,s_,2):String(n),s_=(n,t)=>t&&t.__v_isRef?s_(n,t.value):Bs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[wc(i,s)+" =>"]=r,e),{})}:Jm(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>wc(e))}:ao(t)?wc(t):ge(t)&&!Ht(t)&&!e_(t)?String(t):t,wc=(n,t="")=>{var e;return ao(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wn;class Ov{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wn,!t&&Wn&&(this.index=(Wn.scopes||(Wn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Wn;try{return Wn=this,t()}finally{Wn=e}}}on(){Wn=this}off(){Wn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Uv(n,t=Wn){t&&t.active&&t.effects.push(n)}function Fv(){return Wn}let qr;class Ih{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Uv(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,rs();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(Bv(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ss()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=cr,e=qr;try{return cr=!0,qr=this,this._runnings++,Bf(this),this.fn()}finally{zf(this),this._runnings--,qr=e,cr=t}}stop(){var t;this.active&&(Bf(this),zf(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Bv(n){return n.value}function Bf(n){n._trackId++,n._depsLength=0}function zf(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)o_(n.deps[t],n);n.deps.length=n._depsLength}}function o_(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let cr=!0,Lu=0;const a_=[];function rs(){a_.push(cr),cr=!1}function ss(){const n=a_.pop();cr=n===void 0?!0:n}function Nh(){Lu++}function Oh(){for(Lu--;!Lu&&Du.length;)Du.shift()()}function l_(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&o_(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const Du=[];function c_(n,t,e){Nh();for(const i of n.keys()){let r;i._dirtyLevel<t&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Du.push(i.scheduler)))}Oh()}const u_=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},Iu=new WeakMap,Yr=Symbol(""),Nu=Symbol("");function pn(n,t,e){if(cr&&qr){let i=Iu.get(n);i||Iu.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=u_(()=>i.delete(e))),l_(qr,r)}}function Di(n,t,e,i,r,s){const o=Iu.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Ht(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!ao(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Ht(n)?Lh(e)&&a.push(o.get("length")):(a.push(o.get(Yr)),Bs(n)&&a.push(o.get(Nu)));break;case"delete":Ht(n)||(a.push(o.get(Yr)),Bs(n)&&a.push(o.get(Nu)));break;case"set":Bs(n)&&a.push(o.get(Yr));break}Nh();for(const l of a)l&&c_(l,4);Oh()}const zv=Rh("__proto__,__v_isRef,__isVue"),h_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ao)),kf=kv();function kv(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=ee(this);for(let s=0,o=this.length;s<o;s++)pn(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){rs(),Nh();const i=ee(this)[t].apply(this,e);return Oh(),ss(),i}}),n}function Hv(n){const t=ee(this);return pn(t,"has",n),t.hasOwnProperty(n)}class f_{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?tx:__:s?m_:p_).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!r){if(o&&Qt(kf,e))return Reflect.get(kf,e,i);if(e==="hasOwnProperty")return Hv}const a=Reflect.get(t,e,i);return(ao(e)?h_.has(e):zv(e))||(r||pn(t,"get",e),s)?a:mn(a)?o&&Lh(e)?a:a.value:ge(a)?r?v_(a):Yl(a):a}}class d_ extends f_{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=qs(s);if(!vl(i)&&!qs(i)&&(s=ee(s),i=ee(i)),!Ht(t)&&mn(s)&&!mn(i))return l?!1:(s.value=i,!0)}const o=Ht(t)&&Lh(e)?Number(e)<t.length:Qt(t,e),a=Reflect.set(t,e,i,r);return t===ee(r)&&(o?gr(i,s)&&Di(t,"set",e,i):Di(t,"add",e,i)),a}deleteProperty(t,e){const i=Qt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Di(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!ao(e)||!h_.has(e))&&pn(t,"has",e),i}ownKeys(t){return pn(t,"iterate",Ht(t)?"length":Yr),Reflect.ownKeys(t)}}class Gv extends f_{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Vv=new d_,Wv=new Gv,Xv=new d_(!0),Uh=n=>n,ql=n=>Reflect.getPrototypeOf(n);function Ta(n,t,e=!1,i=!1){n=n.__v_raw;const r=ee(n),s=ee(t);e||(gr(t,s)&&pn(r,"get",t),pn(r,"get",s));const{has:o}=ql(r),a=i?Uh:e?zh:Wo;if(o.call(r,t))return a(n.get(t));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(t)}function ba(n,t=!1){const e=this.__v_raw,i=ee(e),r=ee(n);return t||(gr(n,r)&&pn(i,"has",n),pn(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function wa(n,t=!1){return n=n.__v_raw,!t&&pn(ee(n),"iterate",Yr),Reflect.get(n,"size",n)}function Hf(n){n=ee(n);const t=ee(this);return ql(t).has.call(t,n)||(t.add(n),Di(t,"add",n,n)),this}function Gf(n,t){t=ee(t);const e=ee(this),{has:i,get:r}=ql(e);let s=i.call(e,n);s||(n=ee(n),s=i.call(e,n));const o=r.call(e,n);return e.set(n,t),s?gr(t,o)&&Di(e,"set",n,t):Di(e,"add",n,t),this}function Vf(n){const t=ee(this),{has:e,get:i}=ql(t);let r=e.call(t,n);r||(n=ee(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Di(t,"delete",n,void 0),s}function Wf(){const n=ee(this),t=n.size!==0,e=n.clear();return t&&Di(n,"clear",void 0,void 0),e}function Aa(n,t){return function(i,r){const s=this,o=s.__v_raw,a=ee(o),l=t?Uh:n?zh:Wo;return!n&&pn(a,"iterate",Yr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ra(n,t,e){return function(...i){const r=this.__v_raw,s=ee(r),o=Bs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Uh:t?zh:Wo;return!t&&pn(s,"iterate",l?Nu:Yr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ki(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function qv(){const n={get(s){return Ta(this,s)},get size(){return wa(this)},has:ba,add:Hf,set:Gf,delete:Vf,clear:Wf,forEach:Aa(!1,!1)},t={get(s){return Ta(this,s,!1,!0)},get size(){return wa(this)},has:ba,add:Hf,set:Gf,delete:Vf,clear:Wf,forEach:Aa(!1,!0)},e={get(s){return Ta(this,s,!0)},get size(){return wa(this,!0)},has(s){return ba.call(this,s,!0)},add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear"),forEach:Aa(!0,!1)},i={get(s){return Ta(this,s,!0,!0)},get size(){return wa(this,!0)},has(s){return ba.call(this,s,!0)},add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear"),forEach:Aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ra(s,!1,!1),e[s]=Ra(s,!0,!1),t[s]=Ra(s,!1,!0),i[s]=Ra(s,!0,!0)}),[n,e,t,i]}const[Yv,jv,$v,Kv]=qv();function Fh(n,t){const e=t?n?Kv:$v:n?jv:Yv;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qt(e,r)&&r in i?e:i,r,s)}const Zv={get:Fh(!1,!1)},Jv={get:Fh(!1,!0)},Qv={get:Fh(!0,!1)},p_=new WeakMap,m_=new WeakMap,__=new WeakMap,tx=new WeakMap;function ex(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nx(n){return n.__v_skip||!Object.isExtensible(n)?0:ex(bv(n))}function Yl(n){return qs(n)?n:Bh(n,!1,Vv,Zv,p_)}function g_(n){return Bh(n,!1,Xv,Jv,m_)}function v_(n){return Bh(n,!0,Wv,Qv,__)}function Bh(n,t,e,i,r){if(!ge(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=nx(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function zs(n){return qs(n)?zs(n.__v_raw):!!(n&&n.__v_isReactive)}function qs(n){return!!(n&&n.__v_isReadonly)}function vl(n){return!!(n&&n.__v_isShallow)}function x_(n){return zs(n)||qs(n)}function ee(n){const t=n&&n.__v_raw;return t?ee(t):n}function y_(n){return Object.isExtensible(n)&&gl(n,"__v_skip",!0),n}const Wo=n=>ge(n)?Yl(n):n,zh=n=>ge(n)?v_(n):n;class M_{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ih(()=>t(this._value),()=>al(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=ee(this);return(!t._cacheable||t.effect.dirty)&&gr(t._value,t._value=t.effect.run())&&al(t,4),S_(t),t.effect._dirtyLevel>=2&&al(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ix(n,t,e=!1){let i,r;const s=Wt(n);return s?(i=n,r=On):(i=n.get,r=n.set),new M_(i,r,s||!r,e)}function S_(n){var t;cr&&qr&&(n=ee(n),l_(qr,(t=n.dep)!=null?t:n.dep=u_(()=>n.dep=void 0,n instanceof M_?n:void 0)))}function al(n,t=4,e){n=ee(n);const i=n.dep;i&&c_(i,t)}function mn(n){return!!(n&&n.__v_isRef===!0)}function da(n){return E_(n,!1)}function rx(n){return E_(n,!0)}function E_(n,t){return mn(n)?n:new sx(n,t)}class sx{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ee(t),this._value=e?t:Wo(t)}get value(){return S_(this),this._value}set value(t){const e=this.__v_isShallow||vl(t)||qs(t);t=e?t:ee(t),gr(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Wo(t),al(this,4))}}function ur(n){return mn(n)?n.value:n}const ox={get:(n,t,e)=>ur(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return mn(r)&&!mn(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function T_(n){return zs(n)?n:new Proxy(n,ox)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hr(n,t,e,i){try{return i?n(...i):n()}catch(r){jl(r,t,e)}}function Jn(n,t,e,i){if(Wt(n)){const s=hr(n,t,e,i);return s&&Qm(s)&&s.catch(o=>{jl(o,t,e)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jn(n[s],t,e,i));return r}function jl(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){hr(l,null,10,[n,o,a]);return}}ax(n,e,r,i)}function ax(n,t,e,i=!0){console.error(n)}let Xo=!1,Ou=!1;const qe=[];let oi=0;const ks=[];let Zi=null,kr=0;const b_=Promise.resolve();let kh=null;function w_(n){const t=kh||b_;return n?t.then(this?n.bind(this):n):t}function lx(n){let t=oi+1,e=qe.length;for(;t<e;){const i=t+e>>>1,r=qe[i],s=qo(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function Hh(n){(!qe.length||!qe.includes(n,Xo&&n.allowRecurse?oi+1:oi))&&(n.id==null?qe.push(n):qe.splice(lx(n.id),0,n),A_())}function A_(){!Xo&&!Ou&&(Ou=!0,kh=b_.then(C_))}function cx(n){const t=qe.indexOf(n);t>oi&&qe.splice(t,1)}function ux(n){Ht(n)?ks.push(...n):(!Zi||!Zi.includes(n,n.allowRecurse?kr+1:kr))&&ks.push(n),A_()}function Xf(n,t,e=Xo?oi+1:0){for(;e<qe.length;e++){const i=qe[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;qe.splice(e,1),e--,i()}}}function R_(n){if(ks.length){const t=[...new Set(ks)].sort((e,i)=>qo(e)-qo(i));if(ks.length=0,Zi){Zi.push(...t);return}for(Zi=t,kr=0;kr<Zi.length;kr++)Zi[kr]();Zi=null,kr=0}}const qo=n=>n.id==null?1/0:n.id,hx=(n,t)=>{const e=qo(n)-qo(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function C_(n){Ou=!1,Xo=!0,qe.sort(hx);try{for(oi=0;oi<qe.length;oi++){const t=qe[oi];t&&t.active!==!1&&hr(t,null,14)}}finally{oi=0,qe.length=0,R_(),Xo=!1,kh=null,(qe.length||ks.length)&&C_()}}function fx(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||pe;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||pe;f&&(r=e.map(d=>Re(d)?d.trim():d)),h&&(r=e.map(Rv))}let a,l=i[a=Tc(t)]||i[a=Tc(di(t))];!l&&s&&(l=i[a=Tc(lo(t))]),l&&Jn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jn(c,n,6,r)}}function P_(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=P_(c,t,!0);u&&(a=!0,ze(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ge(n)&&i.set(n,null),null):(Ht(s)?s.forEach(l=>o[l]=null):ze(o,s),ge(n)&&i.set(n,o),o)}function $l(n,t){return!n||!Gl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,lo(t))||Qt(n,t))}let sn=null,Kl=null;function xl(n){const t=sn;return sn=n,Kl=n&&n.type.__scopeId||null,t}function Gh(n){Kl=n}function Vh(){Kl=null}function Kt(n,t=sn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&nd(-1);const s=xl(t);let o;try{o=n(...r)}finally{xl(s),i._d&&nd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ac(n){const{type:t,vnode:e,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=n;let p,m;const y=xl(n);try{if(e.shapeFlag&4){const S=r||i,R=S;p=ri(u.call(R,S,h,s,d,f,_)),m=l}else{const S=t;p=ri(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),m=t.props?l:dx(l)}}catch(S){Io.length=0,jl(S,n,1),p=Zt(Ys)}let v=p;if(m&&g!==!1){const S=Object.keys(m),{shapeFlag:R}=v;S.length&&R&7&&(o&&S.some(Ch)&&(m=px(m,o)),v=js(v,m))}return e.dirs&&(v=js(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),p=v,xl(y),p}const dx=n=>{let t;for(const e in n)(e==="class"||e==="style"||Gl(e))&&((t||(t={}))[e]=n[e]);return t},px=(n,t)=>{const e={};for(const i in n)(!Ch(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function mx(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?qf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!$l(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qf(i,o,c):!0:!!o;return!1}function qf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!$l(e,s))return!0}return!1}function _x({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Wh="components";function gx(n,t){return D_(Wh,n,!0,t)||n}const L_=Symbol.for("v-ndc");function vx(n){return Re(n)?D_(Wh,n,!1)||n:n||L_}function D_(n,t,e=!0,i=!1){const r=sn||Ye;if(r){const s=r.type;if(n===Wh){const a=h1(s,!1);if(a&&(a===t||a===di(t)||a===Xl(di(t))))return s}const o=Yf(r[n]||s[n],t)||Yf(r.appContext[n],t);return!o&&i?s:o}}function Yf(n,t){return n&&(n[t]||n[di(t)]||n[Xl(di(t))])}const xx=n=>n.__isSuspense;function yx(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):ux(n)}const Mx=Symbol.for("v-scx"),Sx=()=>Ii(Mx),Ca={};function ll(n,t,e){return I_(n,t,e)}function I_(n,t,{immediate:e,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=pe){if(t&&s){const T=t;t=(...A)=>{T(...A),R()}}const l=Ye,c=T=>i===!0?T:Ls(T,i===!1?1:void 0);let u,h=!1,f=!1;if(mn(n)?(u=()=>n.value,h=vl(n)):zs(n)?(u=()=>c(n),h=!0):Ht(n)?(f=!0,h=n.some(T=>zs(T)||vl(T)),u=()=>n.map(T=>{if(mn(T))return T.value;if(zs(T))return c(T);if(Wt(T))return hr(T,l,2)})):Wt(n)?t?u=()=>hr(n,l,2):u=()=>(d&&d(),Jn(n,l,3,[_])):u=On,t&&i){const T=u;u=()=>Ls(T())}let d,_=T=>{d=v.onStop=()=>{hr(T,l,4),d=v.onStop=void 0}},g;if(tc)if(_=On,t?e&&Jn(t,l,3,[u(),f?[]:void 0,_]):u(),r==="sync"){const T=Sx();g=T.__watcherHandles||(T.__watcherHandles=[])}else return On;let p=f?new Array(n.length).fill(Ca):Ca;const m=()=>{if(!(!v.active||!v.dirty))if(t){const T=v.run();(i||h||(f?T.some((A,I)=>gr(A,p[I])):gr(T,p)))&&(d&&d(),Jn(t,l,3,[T,p===Ca?void 0:f&&p[0]===Ca?[]:p,_]),p=T)}else v.run()};m.allowRecurse=!!t;let y;r==="sync"?y=m:r==="post"?y=()=>an(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),y=()=>Hh(m));const v=new Ih(u,On,y),S=Fv(),R=()=>{v.stop(),S&&Ph(S.effects,v)};return t?e?m():p=v.run():r==="post"?an(v.run.bind(v),l&&l.suspense):v.run(),g&&g.push(R),R}function Ex(n,t,e){const i=this.proxy,r=Re(n)?n.includes(".")?N_(i,n):()=>i[n]:n.bind(i,i);let s;Wt(t)?s=t:(s=t.handler,e=t);const o=pa(this),a=I_(r,s.bind(i),e);return o(),a}function N_(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Ls(n,t,e=0,i){if(!ge(n)||n.__v_skip)return n;if(t&&t>0){if(e>=t)return n;e++}if(i=i||new Set,i.has(n))return n;if(i.add(n),mn(n))Ls(n.value,t,e,i);else if(Ht(n))for(let r=0;r<n.length;r++)Ls(n[r],t,e,i);else if(Jm(n)||Bs(n))n.forEach(r=>{Ls(r,t,e,i)});else if(e_(n))for(const r in n)Ls(n[r],t,e,i);return n}function Ar(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(rs(),Jn(l,e,8,[n.el,a,n,t]),ss())}}/*! #__NO_SIDE_EFFECTS__ */function O_(n,t){return Wt(n)?ze({name:n.name},t,{setup:n}):n}const Po=n=>!!n.type.__asyncLoader,U_=n=>n.type.__isKeepAlive;function Tx(n,t){F_(n,"a",t)}function bx(n,t){F_(n,"da",t)}function F_(n,t,e=Ye){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Zl(t,i,e),e){let r=e.parent;for(;r&&r.parent;)U_(r.parent.vnode)&&wx(i,t,e,r),r=r.parent}}function wx(n,t,e,i){const r=Zl(t,n,i,!0);Xh(()=>{Ph(i[t],r)},e)}function Zl(n,t,e=Ye,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;rs();const a=pa(e),l=Jn(t,e,n,o);return a(),ss(),l});return i?r.unshift(s):r.push(s),s}}const zi=n=>(t,e=Ye)=>(!tc||n==="sp")&&Zl(n,(...i)=>t(...i),e),Ax=zi("bm"),B_=zi("m"),Rx=zi("bu"),Cx=zi("u"),Px=zi("bum"),Xh=zi("um"),Lx=zi("sp"),Dx=zi("rtg"),Ix=zi("rtc");function Nx(n,t=Ye){Zl("ec",n,t)}function Ox(n,t,e,i){let r;const s=e&&e[i];if(Ht(n)||Re(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=t(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=t(o+1,o,void 0,s&&s[o])}else if(ge(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(n[c],c,a,s&&s[a])}}else r=[];return e&&(e[i]=r),r}function Fr(n,t,e={},i,r){if(sn.isCE||sn.parent&&Po(sn.parent)&&sn.parent.isCE)return t!=="default"&&(e.name=t),Zt("slot",e,i&&i());let s=n[t];s&&s._c&&(s._d=!1),ue();const o=s&&z_(s(e)),a=ke(Sn,{key:e.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function z_(n){return n.some(t=>Ml(t)?!(t.type===Ys||t.type===Sn&&!z_(t.children)):!0)?n:null}const Uu=n=>n?Z_(n)?$h(n)||n.proxy:Uu(n.parent):null,Lo=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uu(n.parent),$root:n=>Uu(n.root),$emit:n=>n.emit,$options:n=>qh(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Hh(n.update)}),$nextTick:n=>n.n||(n.n=w_.bind(n.proxy)),$watch:n=>Ex.bind(n)}),Rc=(n,t)=>n!==pe&&!n.__isScriptSetup&&Qt(n,t),Ux={get({_:n},t){const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Rc(i,t))return o[t]=1,i[t];if(r!==pe&&Qt(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&Qt(c,t))return o[t]=3,s[t];if(e!==pe&&Qt(e,t))return o[t]=4,e[t];Fu&&(o[t]=0)}}const u=Lo[t];let h,f;if(u)return t==="$attrs"&&pn(n,"get",t),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==pe&&Qt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Rc(r,t)?(r[t]=e,!0):i!==pe&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==pe&&Qt(n,o)||Rc(t,o)||(a=s[0])&&Qt(a,o)||Qt(i,o)||Qt(Lo,o)||Qt(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function jf(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Fu=!0;function Fx(n){const t=qh(n),e=n.proxy,i=n.ctx;Fu=!1,t.beforeCreate&&$f(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:y,destroyed:v,unmounted:S,render:R,renderTracked:T,renderTriggered:A,errorCaptured:I,serverPrefetch:k,expose:M,inheritAttrs:P,components:at,directives:Z,filters:O}=t;if(c&&Bx(c,i,null),o)for(const X in o){const Y=o[X];Wt(Y)&&(i[X]=Y.bind(e))}if(r){const X=r.call(e,e);ge(X)&&(n.data=Yl(X))}if(Fu=!0,s)for(const X in s){const Y=s[X],ot=Wt(Y)?Y.bind(e,e):Wt(Y.get)?Y.get.bind(e,e):On,pt=!Wt(Y)&&Wt(Y.set)?Y.set.bind(e):On,dt=qn({get:ot,set:pt});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Mt=>dt.value=Mt})}if(a)for(const X in a)k_(a[X],i,e,X);if(l){const X=Wt(l)?l.call(e):l;Reflect.ownKeys(X).forEach(Y=>{cl(Y,X[Y])})}u&&$f(u,n,"c");function G(X,Y){Ht(Y)?Y.forEach(ot=>X(ot.bind(e))):Y&&X(Y.bind(e))}if(G(Ax,h),G(B_,f),G(Rx,d),G(Cx,_),G(Tx,g),G(bx,p),G(Nx,I),G(Ix,T),G(Dx,A),G(Px,y),G(Xh,S),G(Lx,k),Ht(M))if(M.length){const X=n.exposed||(n.exposed={});M.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>e[Y],set:ot=>e[Y]=ot})})}else n.exposed||(n.exposed={});R&&n.render===On&&(n.render=R),P!=null&&(n.inheritAttrs=P),at&&(n.components=at),Z&&(n.directives=Z)}function Bx(n,t,e=On){Ht(n)&&(n=Bu(n));for(const i in n){const r=n[i];let s;ge(r)?"default"in r?s=Ii(r.from||i,r.default,!0):s=Ii(r.from||i):s=Ii(r),mn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function $f(n,t,e){Jn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function k_(n,t,e,i){const r=i.includes(".")?N_(e,i):()=>e[i];if(Re(n)){const s=t[n];Wt(s)&&ll(r,s)}else if(Wt(n))ll(r,n.bind(e));else if(ge(n))if(Ht(n))n.forEach(s=>k_(s,t,e,i));else{const s=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(s)&&ll(r,s,n)}}function qh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>yl(l,c,o,!0)),yl(l,t,o)),ge(t)&&s.set(t,l),l}function yl(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&yl(n,s,e,!0),r&&r.forEach(o=>yl(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=zx[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const zx={data:Kf,props:Zf,emits:Zf,methods:Eo,computed:Eo,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Eo,directives:Eo,watch:Hx,provide:Kf,inject:kx};function Kf(n,t){return t?n?function(){return ze(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function kx(n,t){return Eo(Bu(n),Bu(t))}function Bu(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Je(n,t){return n?[...new Set([].concat(n,t))]:t}function Eo(n,t){return n?ze(Object.create(null),n,t):t}function Zf(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:ze(Object.create(null),jf(n),jf(t??{})):t}function Hx(n,t){if(!n)return t;if(!t)return n;const e=ze(Object.create(null),n);for(const i in t)e[i]=Je(n[i],t[i]);return e}function H_(){return{app:null,config:{isNativeTag:Ev,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gx=0;function Vx(n,t){return function(i,r=null){Wt(i)||(i=ze({},i)),r!=null&&!ge(r)&&(r=null);const s=H_(),o=new WeakSet;let a=!1;const l=s.app={_uid:Gx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:d1,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Wt(c.install)?(o.add(c),c.install(l,...u)):Wt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Zt(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,$h(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Do;Do=l;try{return c()}finally{Do=u}}};return l}}let Do=null;function cl(n,t){if(Ye){let e=Ye.provides;const i=Ye.parent&&Ye.parent.provides;i===e&&(e=Ye.provides=Object.create(i)),e[n]=t}}function Ii(n,t,e=!1){const i=Ye||sn;if(i||Do){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Do._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}function Wx(n,t,e,i=!1){const r={},s={};gl(s,Ql,1),n.propsDefaults=Object.create(null),G_(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:g_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Xx(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ee(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if($l(n.emitsOptions,f))continue;const d=t[f];if(l)if(Qt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=di(f);r[_]=zu(l,a,_,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{G_(n,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!Qt(t,h)&&((u=lo(h))===h||!Qt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=zu(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!Qt(t,h))&&(delete s[h],c=!0)}c&&Di(n,"set","$attrs")}function G_(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Co(l))continue;const c=t[l];let u;r&&Qt(r,u=di(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:$l(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ee(e),c=a||pe;for(let u=0;u<s.length;u++){const h=s[u];e[h]=zu(r,l,h,c[h],n,!Qt(c,h))}}return o}function zu(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=Qt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=pa(r);i=c[e]=l.call(null,t),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===lo(e))&&(i=!0))}return i}function V_(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=h=>{l=!0;const[f,d]=V_(h,t,!0);ze(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ge(n)&&i.set(n,Fs),Fs;if(Ht(s))for(let u=0;u<s.length;u++){const h=di(s[u]);Jf(h)&&(o[h]=pe)}else if(s)for(const u in s){const h=di(u);if(Jf(h)){const f=s[u],d=o[h]=Ht(f)||Wt(f)?{type:f}:ze({},f);if(d){const _=ed(Boolean,d.type),g=ed(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||Qt(d,"default"))&&a.push(h)}}}const c=[o,a];return ge(n)&&i.set(n,c),c}function Jf(n){return n[0]!=="$"&&!Co(n)}function Qf(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function td(n,t){return Qf(n)===Qf(t)}function ed(n,t){return Ht(t)?t.findIndex(e=>td(e,n)):Wt(t)&&td(t,n)?0:-1}const W_=n=>n[0]==="_"||n==="$stable",Yh=n=>Ht(n)?n.map(ri):[ri(n)],qx=(n,t,e)=>{if(t._n)return t;const i=Kt((...r)=>Yh(t(...r)),e);return i._c=!1,i},X_=(n,t,e)=>{const i=n._ctx;for(const r in n){if(W_(r))continue;const s=n[r];if(Wt(s))t[r]=qx(r,s,i);else if(s!=null){const o=Yh(s);t[r]=()=>o}}},q_=(n,t)=>{const e=Yh(t);n.slots.default=()=>e},Yx=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=ee(t),gl(t,"_",e)):X_(t,n.slots={})}else n.slots={},t&&q_(n,t);gl(n.slots,Ql,1)},jx=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(ze(r,t),!e&&a===1&&delete r._):(s=!t.$stable,X_(t,r)),o=t}else t&&(q_(n,t),o={default:1});if(s)for(const a in r)!W_(a)&&o[a]==null&&delete r[a]};function ku(n,t,e,i,r=!1){if(Ht(n)){n.forEach((f,d)=>ku(f,t&&(Ht(t)?t[d]:t),e,i,r));return}if(Po(i)&&!r)return;const s=i.shapeFlag&4?$h(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,Qt(h,c)&&(h[c]=null)):mn(c)&&(c.value=null)),Wt(l))hr(l,a,12,[o,u]);else{const f=Re(l),d=mn(l);if(f||d){const _=()=>{if(n.f){const g=f?Qt(h,l)?h[l]:u[l]:l.value;r?Ht(g)&&Ph(g,s):Ht(g)?g.includes(s)||g.push(s):f?(u[l]=[s],Qt(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Qt(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,an(_,e)):_()}}}const an=yx;function $x(n){return Kx(n)}function Kx(n,t){const e=n_();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=On,insertStaticContent:_}=n,g=(b,w,N,U=null,H=null,j=null,rt=void 0,lt=null,E=!!w.dynamicChildren)=>{if(b===w)return;b&&!po(b,w)&&(U=W(b),Mt(b,H,j,!0),b=null),w.patchFlag===-2&&(E=!1,w.dynamicChildren=null);const{type:x,ref:B,shapeFlag:V}=w;switch(x){case Jl:p(b,w,N,U);break;case Ys:m(b,w,N,U);break;case Pc:b==null&&y(w,N,U,rt);break;case Sn:at(b,w,N,U,H,j,rt,lt,E);break;default:V&1?R(b,w,N,U,H,j,rt,lt,E):V&6?Z(b,w,N,U,H,j,rt,lt,E):(V&64||V&128)&&x.process(b,w,N,U,H,j,rt,lt,E,_t)}B!=null&&H&&ku(B,b&&b.ref,j,w||b,!w)},p=(b,w,N,U)=>{if(b==null)i(w.el=a(w.children),N,U);else{const H=w.el=b.el;w.children!==b.children&&c(H,w.children)}},m=(b,w,N,U)=>{b==null?i(w.el=l(w.children||""),N,U):w.el=b.el},y=(b,w,N,U)=>{[b.el,b.anchor]=_(b.children,w,N,U,b.el,b.anchor)},v=({el:b,anchor:w},N,U)=>{let H;for(;b&&b!==w;)H=f(b),i(b,N,U),b=H;i(w,N,U)},S=({el:b,anchor:w})=>{let N;for(;b&&b!==w;)N=f(b),r(b),b=N;r(w)},R=(b,w,N,U,H,j,rt,lt,E)=>{w.type==="svg"?rt="svg":w.type==="math"&&(rt="mathml"),b==null?T(w,N,U,H,j,rt,lt,E):k(b,w,H,j,rt,lt,E)},T=(b,w,N,U,H,j,rt,lt)=>{let E,x;const{props:B,shapeFlag:V,transition:J,dirs:tt}=b;if(E=b.el=o(b.type,j,B&&B.is,B),V&8?u(E,b.children):V&16&&I(b.children,E,null,U,H,Cc(b,j),rt,lt),tt&&Ar(b,null,U,"created"),A(E,b,b.scopeId,rt,U),B){for(const wt in B)wt!=="value"&&!Co(wt)&&s(E,wt,null,B[wt],j,b.children,U,H,Tt);"value"in B&&s(E,"value",null,B.value,j),(x=B.onVnodeBeforeMount)&&ni(x,U,b)}tt&&Ar(b,null,U,"beforeMount");const bt=Zx(H,J);bt&&J.beforeEnter(E),i(E,w,N),((x=B&&B.onVnodeMounted)||bt||tt)&&an(()=>{x&&ni(x,U,b),bt&&J.enter(E),tt&&Ar(b,null,U,"mounted")},H)},A=(b,w,N,U,H)=>{if(N&&d(b,N),U)for(let j=0;j<U.length;j++)d(b,U[j]);if(H){let j=H.subTree;if(w===j){const rt=H.vnode;A(b,rt,rt.scopeId,rt.slotScopeIds,H.parent)}}},I=(b,w,N,U,H,j,rt,lt,E=0)=>{for(let x=E;x<b.length;x++){const B=b[x]=lt?Ji(b[x]):ri(b[x]);g(null,B,w,N,U,H,j,rt,lt)}},k=(b,w,N,U,H,j,rt)=>{const lt=w.el=b.el;let{patchFlag:E,dynamicChildren:x,dirs:B}=w;E|=b.patchFlag&16;const V=b.props||pe,J=w.props||pe;let tt;if(N&&Rr(N,!1),(tt=J.onVnodeBeforeUpdate)&&ni(tt,N,w,b),B&&Ar(w,b,N,"beforeUpdate"),N&&Rr(N,!0),x?M(b.dynamicChildren,x,lt,N,U,Cc(w,H),j):rt||Y(b,w,lt,null,N,U,Cc(w,H),j,!1),E>0){if(E&16)P(lt,w,V,J,N,U,H);else if(E&2&&V.class!==J.class&&s(lt,"class",null,J.class,H),E&4&&s(lt,"style",V.style,J.style,H),E&8){const bt=w.dynamicProps;for(let wt=0;wt<bt.length;wt++){const ft=bt[wt],gt=V[ft],It=J[ft];(It!==gt||ft==="value")&&s(lt,ft,gt,It,H,b.children,N,U,Tt)}}E&1&&b.children!==w.children&&u(lt,w.children)}else!rt&&x==null&&P(lt,w,V,J,N,U,H);((tt=J.onVnodeUpdated)||B)&&an(()=>{tt&&ni(tt,N,w,b),B&&Ar(w,b,N,"updated")},U)},M=(b,w,N,U,H,j,rt)=>{for(let lt=0;lt<w.length;lt++){const E=b[lt],x=w[lt],B=E.el&&(E.type===Sn||!po(E,x)||E.shapeFlag&70)?h(E.el):N;g(E,x,B,null,U,H,j,rt,!0)}},P=(b,w,N,U,H,j,rt)=>{if(N!==U){if(N!==pe)for(const lt in N)!Co(lt)&&!(lt in U)&&s(b,lt,N[lt],null,rt,w.children,H,j,Tt);for(const lt in U){if(Co(lt))continue;const E=U[lt],x=N[lt];E!==x&&lt!=="value"&&s(b,lt,x,E,rt,w.children,H,j,Tt)}"value"in U&&s(b,"value",N.value,U.value,rt)}},at=(b,w,N,U,H,j,rt,lt,E)=>{const x=w.el=b?b.el:a(""),B=w.anchor=b?b.anchor:a("");let{patchFlag:V,dynamicChildren:J,slotScopeIds:tt}=w;tt&&(lt=lt?lt.concat(tt):tt),b==null?(i(x,N,U),i(B,N,U),I(w.children||[],N,B,H,j,rt,lt,E)):V>0&&V&64&&J&&b.dynamicChildren?(M(b.dynamicChildren,J,N,H,j,rt,lt),(w.key!=null||H&&w===H.subTree)&&Y_(b,w,!0)):Y(b,w,N,B,H,j,rt,lt,E)},Z=(b,w,N,U,H,j,rt,lt,E)=>{w.slotScopeIds=lt,b==null?w.shapeFlag&512?H.ctx.activate(w,N,U,rt,E):O(w,N,U,H,j,rt,E):$(b,w,E)},O=(b,w,N,U,H,j,rt)=>{const lt=b.component=o1(b,U,H);if(U_(b)&&(lt.ctx.renderer=_t),a1(lt),lt.asyncDep){if(H&&H.registerDep(lt,G),!b.el){const E=lt.subTree=Zt(Ys);m(null,E,w,N)}}else G(lt,b,w,N,H,j,rt)},$=(b,w,N)=>{const U=w.component=b.component;if(mx(b,w,N))if(U.asyncDep&&!U.asyncResolved){X(U,w,N);return}else U.next=w,cx(U.update),U.effect.dirty=!0,U.update();else w.el=b.el,U.vnode=w},G=(b,w,N,U,H,j,rt)=>{const lt=()=>{if(b.isMounted){let{next:B,bu:V,u:J,parent:tt,vnode:bt}=b;{const xt=j_(b);if(xt){B&&(B.el=bt.el,X(b,B,rt)),xt.asyncDep.then(()=>{b.isUnmounted||lt()});return}}let wt=B,ft;Rr(b,!1),B?(B.el=bt.el,X(b,B,rt)):B=bt,V&&bc(V),(ft=B.props&&B.props.onVnodeBeforeUpdate)&&ni(ft,tt,B,bt),Rr(b,!0);const gt=Ac(b),It=b.subTree;b.subTree=gt,g(It,gt,h(It.el),W(It),b,H,j),B.el=gt.el,wt===null&&_x(b,gt.el),J&&an(J,H),(ft=B.props&&B.props.onVnodeUpdated)&&an(()=>ni(ft,tt,B,bt),H)}else{let B;const{el:V,props:J}=w,{bm:tt,m:bt,parent:wt}=b,ft=Po(w);if(Rr(b,!1),tt&&bc(tt),!ft&&(B=J&&J.onVnodeBeforeMount)&&ni(B,wt,w),Rr(b,!0),V&&L){const gt=()=>{b.subTree=Ac(b),L(V,b.subTree,b,H,null)};ft?w.type.__asyncLoader().then(()=>!b.isUnmounted&&gt()):gt()}else{const gt=b.subTree=Ac(b);g(null,gt,N,U,b,H,j),w.el=gt.el}if(bt&&an(bt,H),!ft&&(B=J&&J.onVnodeMounted)){const gt=w;an(()=>ni(B,wt,gt),H)}(w.shapeFlag&256||wt&&Po(wt.vnode)&&wt.vnode.shapeFlag&256)&&b.a&&an(b.a,H),b.isMounted=!0,w=N=U=null}},E=b.effect=new Ih(lt,On,()=>Hh(x),b.scope),x=b.update=()=>{E.dirty&&E.run()};x.id=b.uid,Rr(b,!0),x()},X=(b,w,N)=>{w.component=b;const U=b.vnode.props;b.vnode=w,b.next=null,Xx(b,w.props,U,N),jx(b,w.children,N),rs(),Xf(b),ss()},Y=(b,w,N,U,H,j,rt,lt,E=!1)=>{const x=b&&b.children,B=b?b.shapeFlag:0,V=w.children,{patchFlag:J,shapeFlag:tt}=w;if(J>0){if(J&128){pt(x,V,N,U,H,j,rt,lt,E);return}else if(J&256){ot(x,V,N,U,H,j,rt,lt,E);return}}tt&8?(B&16&&Tt(x,H,j),V!==x&&u(N,V)):B&16?tt&16?pt(x,V,N,U,H,j,rt,lt,E):Tt(x,H,j,!0):(B&8&&u(N,""),tt&16&&I(V,N,U,H,j,rt,lt,E))},ot=(b,w,N,U,H,j,rt,lt,E)=>{b=b||Fs,w=w||Fs;const x=b.length,B=w.length,V=Math.min(x,B);let J;for(J=0;J<V;J++){const tt=w[J]=E?Ji(w[J]):ri(w[J]);g(b[J],tt,N,null,H,j,rt,lt,E)}x>B?Tt(b,H,j,!0,!1,V):I(w,N,U,H,j,rt,lt,E,V)},pt=(b,w,N,U,H,j,rt,lt,E)=>{let x=0;const B=w.length;let V=b.length-1,J=B-1;for(;x<=V&&x<=J;){const tt=b[x],bt=w[x]=E?Ji(w[x]):ri(w[x]);if(po(tt,bt))g(tt,bt,N,null,H,j,rt,lt,E);else break;x++}for(;x<=V&&x<=J;){const tt=b[V],bt=w[J]=E?Ji(w[J]):ri(w[J]);if(po(tt,bt))g(tt,bt,N,null,H,j,rt,lt,E);else break;V--,J--}if(x>V){if(x<=J){const tt=J+1,bt=tt<B?w[tt].el:U;for(;x<=J;)g(null,w[x]=E?Ji(w[x]):ri(w[x]),N,bt,H,j,rt,lt,E),x++}}else if(x>J)for(;x<=V;)Mt(b[x],H,j,!0),x++;else{const tt=x,bt=x,wt=new Map;for(x=bt;x<=J;x++){const Rt=w[x]=E?Ji(w[x]):ri(w[x]);Rt.key!=null&&wt.set(Rt.key,x)}let ft,gt=0;const It=J-bt+1;let xt=!1,he=0;const zt=new Array(It);for(x=0;x<It;x++)zt[x]=0;for(x=tt;x<=V;x++){const Rt=b[x];if(gt>=It){Mt(Rt,H,j,!0);continue}let Pt;if(Rt.key!=null)Pt=wt.get(Rt.key);else for(ft=bt;ft<=J;ft++)if(zt[ft-bt]===0&&po(Rt,w[ft])){Pt=ft;break}Pt===void 0?Mt(Rt,H,j,!0):(zt[Pt-bt]=x+1,Pt>=he?he=Pt:xt=!0,g(Rt,w[Pt],N,null,H,j,rt,lt,E),gt++)}const Nt=xt?Jx(zt):Fs;for(ft=Nt.length-1,x=It-1;x>=0;x--){const Rt=bt+x,Pt=w[Rt],D=Rt+1<B?w[Rt+1].el:U;zt[x]===0?g(null,Pt,N,D,H,j,rt,lt,E):xt&&(ft<0||x!==Nt[ft]?dt(Pt,N,D,2):ft--)}}},dt=(b,w,N,U,H=null)=>{const{el:j,type:rt,transition:lt,children:E,shapeFlag:x}=b;if(x&6){dt(b.component.subTree,w,N,U);return}if(x&128){b.suspense.move(w,N,U);return}if(x&64){rt.move(b,w,N,_t);return}if(rt===Sn){i(j,w,N);for(let V=0;V<E.length;V++)dt(E[V],w,N,U);i(b.anchor,w,N);return}if(rt===Pc){v(b,w,N);return}if(U!==2&&x&1&&lt)if(U===0)lt.beforeEnter(j),i(j,w,N),an(()=>lt.enter(j),H);else{const{leave:V,delayLeave:J,afterLeave:tt}=lt,bt=()=>i(j,w,N),wt=()=>{V(j,()=>{bt(),tt&&tt()})};J?J(j,bt,wt):wt()}else i(j,w,N)},Mt=(b,w,N,U=!1,H=!1)=>{const{type:j,props:rt,ref:lt,children:E,dynamicChildren:x,shapeFlag:B,patchFlag:V,dirs:J}=b;if(lt!=null&&ku(lt,null,N,b,!0),B&256){w.ctx.deactivate(b);return}const tt=B&1&&J,bt=!Po(b);let wt;if(bt&&(wt=rt&&rt.onVnodeBeforeUnmount)&&ni(wt,w,b),B&6)ht(b.component,N,U);else{if(B&128){b.suspense.unmount(N,U);return}tt&&Ar(b,null,w,"beforeUnmount"),B&64?b.type.remove(b,w,N,H,_t,U):x&&(j!==Sn||V>0&&V&64)?Tt(x,w,N,!1,!0):(j===Sn&&V&384||!H&&B&16)&&Tt(E,w,N),U&&Ot(b)}(bt&&(wt=rt&&rt.onVnodeUnmounted)||tt)&&an(()=>{wt&&ni(wt,w,b),tt&&Ar(b,null,w,"unmounted")},N)},Ot=b=>{const{type:w,el:N,anchor:U,transition:H}=b;if(w===Sn){K(N,U);return}if(w===Pc){S(b);return}const j=()=>{r(N),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(b.shapeFlag&1&&H&&!H.persisted){const{leave:rt,delayLeave:lt}=H,E=()=>rt(N,j);lt?lt(b.el,j,E):E()}else j()},K=(b,w)=>{let N;for(;b!==w;)N=f(b),r(b),b=N;r(w)},ht=(b,w,N)=>{const{bum:U,scope:H,update:j,subTree:rt,um:lt}=b;U&&bc(U),H.stop(),j&&(j.active=!1,Mt(rt,b,w,N)),lt&&an(lt,w),an(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Tt=(b,w,N,U=!1,H=!1,j=0)=>{for(let rt=j;rt<b.length;rt++)Mt(b[rt],w,N,U,H)},W=b=>b.shapeFlag&6?W(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el);let ct=!1;const it=(b,w,N)=>{b==null?w._vnode&&Mt(w._vnode,null,null,!0):g(w._vnode||null,b,w,null,null,null,N),ct||(ct=!0,Xf(),R_(),ct=!1),w._vnode=b},_t={p:g,um:Mt,m:dt,r:Ot,mt:O,mc:I,pc:Y,pbc:M,n:W,o:n};let Et,L;return t&&([Et,L]=t(_t)),{render:it,hydrate:Et,createApp:Vx(it,Et)}}function Cc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Rr({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Zx(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Y_(n,t,e=!1){const i=n.children,r=t.children;if(Ht(i)&&Ht(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ji(r[s]),a.el=o.el),e||Y_(o,a)),a.type===Jl&&(a.el=o.el)}}function Jx(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function j_(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:j_(t)}const Qx=n=>n.__isTeleport,Sn=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),Ys=Symbol.for("v-cmt"),Pc=Symbol.for("v-stc"),Io=[];let Kn=null;function ue(n=!1){Io.push(Kn=n?null:[])}function t1(){Io.pop(),Kn=Io[Io.length-1]||null}let Yo=1;function nd(n){Yo+=n}function $_(n){return n.dynamicChildren=Yo>0?Kn||Fs:null,t1(),Yo>0&&Kn&&Kn.push(n),n}function Oi(n,t,e,i,r,s){return $_(mt(n,t,e,i,r,s,!0))}function ke(n,t,e,i,r){return $_(Zt(n,t,e,i,r,!0))}function Ml(n){return n?n.__v_isVNode===!0:!1}function po(n,t){return n.type===t.type&&n.key===t.key}const Ql="__vInternal",K_=({key:n})=>n??null,ul=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Re(n)||mn(n)||Wt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function mt(n,t=null,e=null,i=0,r=null,s=n===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&K_(t),ref:t&&ul(t),scopeId:Kl,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(jh(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Re(e)?8:16),Yo>0&&!o&&Kn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kn.push(l),l}const Zt=e1;function e1(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===L_)&&(n=Ys),Ml(n)){const a=js(n,t,!0);return e&&jh(a,e),Yo>0&&!s&&Kn&&(a.shapeFlag&6?Kn[Kn.indexOf(n)]=a:Kn.push(a)),a.patchFlag|=-2,a}if(f1(n)&&(n=n.__vccOpts),t){t=n1(t);let{class:a,style:l}=t;a&&!Re(a)&&(t.class=lr(a)),ge(l)&&(x_(l)&&!Ht(l)&&(l=ze({},l)),t.style=Dh(l))}const o=Re(n)?1:xx(n)?128:Qx(n)?64:ge(n)?4:Wt(n)?2:0;return mt(n,t,e,i,r,o,s,!0)}function n1(n){return n?x_(n)||Ql in n?ze({},n):n:null}function js(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=t?i1(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&K_(a),ref:t&&t.ref?e&&r?Ht(r)?r.concat(ul(t)):[r,ul(t)]:ul(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Sn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&js(n.ssContent),ssFallback:n.ssFallback&&js(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function se(n=" ",t=0){return Zt(Jl,null,n,t)}function ri(n){return n==null||typeof n=="boolean"?Zt(Ys):Ht(n)?Zt(Sn,null,n.slice()):typeof n=="object"?Ji(n):Zt(Jl,null,String(n))}function Ji(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:js(n)}function jh(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),jh(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(Ql in t)?t._ctx=sn:r===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:sn},e=32):(t=String(t),i&64?(e=16,t=[se(t)]):e=8);n.children=t,n.shapeFlag|=e}function i1(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=lr([t.class,i.class]));else if(r==="style")t.style=Dh([t.style,i.style]);else if(Gl(r)){const s=t[r],o=i[r];o&&s!==o&&!(Ht(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function ni(n,t,e,i=null){Jn(n,t,7,[e,i])}const r1=H_();let s1=0;function o1(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||r1,s={uid:s1++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ov(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V_(i,r),emitsOptions:P_(i,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=fx.bind(null,s),n.ce&&n.ce(s),s}let Ye=null,Sl,Hu;{const n=n_(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Sl=t("__VUE_INSTANCE_SETTERS__",e=>Ye=e),Hu=t("__VUE_SSR_SETTERS__",e=>tc=e)}const pa=n=>{const t=Ye;return Sl(n),n.scope.on(),()=>{n.scope.off(),Sl(t)}},id=()=>{Ye&&Ye.scope.off(),Sl(null)};function Z_(n){return n.vnode.shapeFlag&4}let tc=!1;function a1(n,t=!1){t&&Hu(t);const{props:e,children:i}=n.vnode,r=Z_(n);Wx(n,e,r,t),Yx(n,i);const s=r?l1(n,t):void 0;return t&&Hu(!1),s}function l1(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=y_(new Proxy(n.ctx,Ux));const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?u1(n):null,s=pa(n);rs();const o=hr(i,n,0,[n.props,r]);if(ss(),s(),Qm(o)){if(o.then(id,id),t)return o.then(a=>{rd(n,a,t)}).catch(a=>{jl(a,n,0)});n.asyncDep=o}else rd(n,o,t)}else J_(n,t)}function rd(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ge(t)&&(n.setupState=T_(t)),J_(n,e)}let sd;function J_(n,t,e){const i=n.type;if(!n.render){if(!t&&sd&&!i.render){const r=i.template||qh(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ze(ze({isCustomElement:s,delimiters:a},o),l);i.render=sd(r,c)}}n.render=i.render||On}{const r=pa(n);rs();try{Fx(n)}finally{ss(),r()}}}function c1(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,e){return pn(n,"get","$attrs"),t[e]}}))}function u1(n){const t=e=>{n.exposed=e||{}};return{get attrs(){return c1(n)},slots:n.slots,emit:n.emit,expose:t}}function $h(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(T_(y_(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Lo)return Lo[e](n)},has(t,e){return e in t||e in Lo}}))}function h1(n,t=!0){return Wt(n)?n.displayName||n.name:n.name||t&&n.__name}function f1(n){return Wt(n)&&"__vccOpts"in n}const qn=(n,t)=>ix(n,t,tc);function Q_(n,t,e){const i=arguments.length;return i===2?ge(t)&&!Ht(t)?Ml(t)?Zt(n,null,[t]):Zt(n,t):Zt(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ml(e)&&(e=[e]),Zt(n,t,e))}const d1="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const p1="http://www.w3.org/2000/svg",m1="http://www.w3.org/1998/Math/MathML",Qi=typeof document<"u"?document:null,od=Qi&&Qi.createElement("template"),_1={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Qi.createElementNS(p1,n):t==="mathml"?Qi.createElementNS(m1,n):Qi.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qi.createTextNode(n),createComment:n=>Qi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{od.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=od.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},g1=Symbol("_vtc");function v1(n,t,e){const i=n[g1];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ad=Symbol("_vod"),x1=Symbol("_vsh"),y1=Symbol(""),M1=/(^|;)\s*display\s*:/;function S1(n,t,e){const i=n.style,r=Re(e);let s=!1;if(e&&!r){if(t)if(Re(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&hl(i,a,"")}else for(const o in t)e[o]==null&&hl(i,o,"");for(const o in e)o==="display"&&(s=!0),hl(i,o,e[o])}else if(r){if(t!==e){const o=i[y1];o&&(e+=";"+o),i.cssText=e,s=M1.test(e)}}else t&&n.removeAttribute("style");ad in n&&(n[ad]=s?i.display:"",n[x1]&&(i.display="none"))}const ld=/\s*!important$/;function hl(n,t,e){if(Ht(e))e.forEach(i=>hl(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=E1(n,t);ld.test(e)?n.setProperty(lo(i),e.replace(ld,""),"important"):n[i]=e}}const cd=["Webkit","Moz","ms"],Lc={};function E1(n,t){const e=Lc[t];if(e)return e;let i=di(t);if(i!=="filter"&&i in n)return Lc[t]=i;i=Xl(i);for(let r=0;r<cd.length;r++){const s=cd[r]+i;if(s in n)return Lc[t]=s}return t}const ud="http://www.w3.org/1999/xlink";function T1(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(ud,t.slice(6,t.length)):n.setAttributeNS(ud,t,e);else{const s=Nv(t);e==null||s&&!i_(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function b1(n,t,e,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),n[t]=e??"";return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=e??"";(c!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=i_(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function w1(n,t,e,i){n.addEventListener(t,e,i)}function A1(n,t,e,i){n.removeEventListener(t,e,i)}const hd=Symbol("_vei");function R1(n,t,e,i,r=null){const s=n[hd]||(n[hd]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=C1(t);if(i){const c=s[t]=D1(i,r);w1(n,a,c,l)}else o&&(A1(n,a,o,l),s[t]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function C1(n){let t;if(fd.test(n)){t={};let i;for(;i=n.match(fd);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):lo(n.slice(2)),t]}let Dc=0;const P1=Promise.resolve(),L1=()=>Dc||(P1.then(()=>Dc=0),Dc=Date.now());function D1(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Jn(I1(i,e.value),t,5,[i])};return e.value=n,e.attached=L1(),e}function I1(n,t){if(Ht(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const dd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,N1=(n,t,e,i,r,s,o,a,l)=>{const c=r==="svg";t==="class"?v1(n,i,c):t==="style"?S1(n,e,i):Gl(t)?Ch(t)||R1(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):O1(n,t,i,c))?b1(n,t,i,s,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),T1(n,t,i,c))};function O1(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&dd(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dd(t)&&Re(e)?!1:t in n}const U1=ze({patchProp:N1},_1);let pd;function F1(){return pd||(pd=$x(U1))}const B1=(...n)=>{const t=F1().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=k1(i);if(!r)return;const s=t._component;!Wt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,z1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function z1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function k1(n){return Re(n)?document.querySelector(n):n}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof document<"u";function H1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Ic(n,t){const e={};for(const i in t){const r=t[i];e[i]=Qn(r)?r.map(n):n(r)}return e}const No=()=>{},Qn=Array.isArray,tg=/#/g,G1=/&/g,V1=/\//g,W1=/=/g,X1=/\?/g,eg=/\+/g,q1=/%5B/g,Y1=/%5D/g,ng=/%5E/g,j1=/%60/g,ig=/%7B/g,$1=/%7C/g,rg=/%7D/g,K1=/%20/g;function Kh(n){return encodeURI(""+n).replace($1,"|").replace(q1,"[").replace(Y1,"]")}function Z1(n){return Kh(n).replace(ig,"{").replace(rg,"}").replace(ng,"^")}function Gu(n){return Kh(n).replace(eg,"%2B").replace(K1,"+").replace(tg,"%23").replace(G1,"%26").replace(j1,"`").replace(ig,"{").replace(rg,"}").replace(ng,"^")}function J1(n){return Gu(n).replace(W1,"%3D")}function Q1(n){return Kh(n).replace(tg,"%23").replace(X1,"%3F")}function ty(n){return n==null?"":Q1(n).replace(V1,"%2F")}function jo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ey=/\/$/,ny=n=>n.replace(ey,"");function Nc(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=n(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=oy(i??t,e),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:jo(o)}}function iy(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function md(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function ry(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&$s(t.matched[i],e.matched[r])&&sg(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function $s(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function sg(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!sy(n[e],t[e]))return!1;return!0}function sy(n,t){return Qn(n)?_d(n,t):Qn(t)?_d(t,n):n===t}function _d(n,t){return Qn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function oy(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var $o;(function(n){n.pop="pop",n.push="push"})($o||($o={}));var Oo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Oo||(Oo={}));function ay(n){if(!n)if(Cs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ny(n)}const ly=/^[^#]+#/;function cy(n,t){return n.replace(ly,"#")+t}function uy(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const ec=()=>({left:window.scrollX,top:window.scrollY});function hy(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=uy(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function gd(n,t){return(history.state?history.state.position-t:-1)+n}const Vu=new Map;function fy(n,t){Vu.set(n,t)}function dy(n){const t=Vu.get(n);return Vu.delete(n),t}let py=()=>location.protocol+"//"+location.host;function og(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),md(l,"")}return md(e,n)+i+r}function my(n,t,e,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=og(n,location),_=e.value,g=t.value;let p=0;if(f){if(e.value=d,t.value=f,o&&o===_){o=null;return}p=g?f.position-g.position:0}else i(d);r.forEach(m=>{m(e.value,_,{delta:p,type:$o.pop,direction:p?p>0?Oo.forward:Oo.back:Oo.unknown})})};function l(){o=e.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ie({},f.state,{scroll:ec()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function vd(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?ec():null}}function _y(n){const{history:t,location:e}=window,i={value:og(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:py()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){const u=ie({},t.state,vd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ie({},r.value,t.state,{forward:l,scroll:ec()});s(u.current,u,!0);const h=ie({},vd(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function gy(n){n=ay(n);const t=_y(n),e=my(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=ie({location:"",base:n,go:i,createHref:cy.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function vy(n){return typeof n=="string"||n&&typeof n=="object"}function ag(n){return typeof n=="string"||typeof n=="symbol"}const Hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lg=Symbol("");var xd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xd||(xd={}));function Ks(n,t){return ie(new Error,{type:n,[lg]:!0},t)}function vi(n,t){return n instanceof Error&&lg in n&&(t==null||!!(n.type&t))}const yd="[^/]+?",xy={sensitive:!1,strict:!1,start:!0,end:!0},yy=/[.+*?^${}()[\]/\\]/g;function My(n,t){const e=ie({},xy,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(e.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(yy,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:g,optional:p,regexp:m}=f;s.push({name:_,repeatable:g,optional:p});const y=m||yd;if(y!==yd){d+=10;try{new RegExp(`(${y})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+S.message)}}let v=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(v=p&&c.length<2?`(?:/${v})`:"/"+v),p&&(v+="?"),r+=v,d+=20,p&&(d+=-8),g&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:g,optional:p}=d,m=_ in c?c[_]:"";if(Qn(m)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=Qn(m)?m.join("/"):m;if(!y)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Sy(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ey(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=Sy(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(Md(i))return 1;if(Md(r))return-1}return r.length-i.length}function Md(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Ty={type:0,value:""},by=/[a-zA-Z0-9_]/;function wy(n){if(!n)return[[]];if(n==="/")return[[Ty]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(e===0?s.push({type:0,value:c}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:by.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Ay(n,t,e){const i=My(wy(n.path),e),r=ie(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ry(n,t){const e=[],i=new Map;t=Td({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,h,f){const d=!f,_=Cy(u);_.aliasOf=f&&f.record;const g=Td(t,u),p=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)p.push(ie({},_,{components:f?f.record.components:_.components,path:S,aliasOf:f?f.record:_}))}let m,y;for(const v of p){const{path:S}=v;if(h&&S[0]!=="/"){const R=h.record.path,T=R[R.length-1]==="/"?"":"/";v.path=h.record.path+(S&&T+S)}if(m=Ay(v,h,g),f?f.alias.push(m):(y=y||m,y!==m&&y.alias.push(m),d&&u.name&&!Ed(m)&&o(u.name)),_.children){const R=_.children;for(let T=0;T<R.length;T++)s(R[T],m,f&&f.children[T])}f=f||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return y?()=>{o(y)}:No}function o(u){if(ag(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&Ey(u,e[h])>=0&&(u.record.path!==e[h].record.path||!cg(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!Ed(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},_,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ks(1,{location:u});g=f.record.name,d=ie(Sd(h.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Sd(u.params,f.keys.map(y=>y.name))),_=f.stringify(d)}else if(u.path!=null)_=u.path,f=e.find(y=>y.re.test(_)),f&&(d=f.parse(_),g=f.record.name);else{if(f=h.name?i.get(h.name):e.find(y=>y.re.test(h.path)),!f)throw Ks(1,{location:u,currentLocation:h});g=f.record.name,d=ie({},h.params,u.params),_=f.stringify(d)}const p=[];let m=f;for(;m;)p.unshift(m.record),m=m.parent;return{name:g,path:_,params:d,matched:p,meta:Ly(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Sd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Cy(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Py(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Py(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Ed(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ly(n){return n.reduce((t,e)=>ie(t,e.meta),{})}function Td(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function cg(n,t){return t.children.some(e=>e===n||cg(n,e))}function Dy(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(eg," "),o=s.indexOf("="),a=jo(o<0?s:s.slice(0,o)),l=o<0?null:jo(s.slice(o+1));if(a in t){let c=t[a];Qn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function bd(n){let t="";for(let e in n){const i=n[e];if(e=J1(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Qn(i)?i.map(s=>s&&Gu(s)):[i&&Gu(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function Iy(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Qn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Ny=Symbol(""),wd=Symbol(""),Zh=Symbol(""),ug=Symbol(""),Wu=Symbol("");function mo(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function tr(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ks(4,{from:e,to:t})):f instanceof Error?l(f):vy(f)?l(Ks(2,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],t,e,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Oc(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Oy(l)){const u=(l.__vccOpts||l)[t];u&&s.push(tr(u,e,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=H1(u)?u.default:u;o.components[a]=h;const d=(h.__vccOpts||h)[t];return d&&tr(d,e,i,o,a,r)()}))}}return s}function Oy(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ad(n){const t=Ii(Zh),e=Ii(ug),i=qn(()=>t.resolve(ur(n.to))),r=qn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex($s.bind(null,u));if(f>-1)return f;const d=Rd(l[c-2]);return c>1&&Rd(u)===d&&h[h.length-1].path!==d?h.findIndex($s.bind(null,l[c-2])):f}),s=qn(()=>r.value>-1&&zy(e.params,i.value.params)),o=qn(()=>r.value>-1&&r.value===e.matched.length-1&&sg(e.params,i.value.params));function a(l={}){return By(l)?t[ur(n.replace)?"replace":"push"](ur(n.to)).catch(No):Promise.resolve()}return{route:i,href:qn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Uy=O_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ad,setup(n,{slots:t}){const e=Yl(Ad(n)),{options:i}=Ii(Zh),r=qn(()=>({[Cd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Cd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&t.default(e);return n.custom?s:Q_("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),Fy=Uy;function By(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function zy(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!Qn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Rd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Cd=(n,t,e)=>n??t??e,ky=O_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Ii(Wu),r=qn(()=>n.route||i.value),s=Ii(wd,0),o=qn(()=>{let c=ur(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=qn(()=>r.value.matched[o.value]);cl(wd,qn(()=>o.value+1)),cl(Ny,a),cl(Wu,r);const l=da();return ll(()=>[l.value,a.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!$s(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Pd(e.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Q_(f,ie({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pd(e.default,{Component:p,route:c})||p}}});function Pd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const hg=ky;function Hy(n){const t=Ry(n.routes,n),e=n.parseQuery||Dy,i=n.stringifyQuery||bd,r=n.history,s=mo(),o=mo(),a=mo(),l=rx(Hi);let c=Hi;Cs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ic.bind(null,W=>""+W),h=Ic.bind(null,ty),f=Ic.bind(null,jo);function d(W,ct){let it,_t;return ag(W)?(it=t.getRecordMatcher(W),_t=ct):_t=W,t.addRoute(_t,it)}function _(W){const ct=t.getRecordMatcher(W);ct&&t.removeRoute(ct)}function g(){return t.getRoutes().map(W=>W.record)}function p(W){return!!t.getRecordMatcher(W)}function m(W,ct){if(ct=ie({},ct||l.value),typeof W=="string"){const w=Nc(e,W,ct.path),N=t.resolve({path:w.path},ct),U=r.createHref(w.fullPath);return ie(w,N,{params:f(N.params),hash:jo(w.hash),redirectedFrom:void 0,href:U})}let it;if(W.path!=null)it=ie({},W,{path:Nc(e,W.path,ct.path).path});else{const w=ie({},W.params);for(const N in w)w[N]==null&&delete w[N];it=ie({},W,{params:h(w)}),ct.params=h(ct.params)}const _t=t.resolve(it,ct),Et=W.hash||"";_t.params=u(f(_t.params));const L=iy(i,ie({},W,{hash:Z1(Et),path:_t.path})),b=r.createHref(L);return ie({fullPath:L,hash:Et,query:i===bd?Iy(W.query):W.query||{}},_t,{redirectedFrom:void 0,href:b})}function y(W){return typeof W=="string"?Nc(e,W,l.value.path):ie({},W)}function v(W,ct){if(c!==W)return Ks(8,{from:ct,to:W})}function S(W){return A(W)}function R(W){return S(ie(y(W),{replace:!0}))}function T(W){const ct=W.matched[W.matched.length-1];if(ct&&ct.redirect){const{redirect:it}=ct;let _t=typeof it=="function"?it(W):it;return typeof _t=="string"&&(_t=_t.includes("?")||_t.includes("#")?_t=y(_t):{path:_t},_t.params={}),ie({query:W.query,hash:W.hash,params:_t.path!=null?{}:W.params},_t)}}function A(W,ct){const it=c=m(W),_t=l.value,Et=W.state,L=W.force,b=W.replace===!0,w=T(it);if(w)return A(ie(y(w),{state:typeof w=="object"?ie({},Et,w.state):Et,force:L,replace:b}),ct||it);const N=it;N.redirectedFrom=ct;let U;return!L&&ry(i,_t,it)&&(U=Ks(16,{to:N,from:_t}),dt(_t,_t,!0,!1)),(U?Promise.resolve(U):M(N,_t)).catch(H=>vi(H)?vi(H,2)?H:pt(H):Y(H,N,_t)).then(H=>{if(H){if(vi(H,2))return A(ie({replace:b},y(H.to),{state:typeof H.to=="object"?ie({},Et,H.to.state):Et,force:L}),ct||N)}else H=at(N,_t,!0,b,Et);return P(N,_t,H),H})}function I(W,ct){const it=v(W,ct);return it?Promise.reject(it):Promise.resolve()}function k(W){const ct=K.values().next().value;return ct&&typeof ct.runWithContext=="function"?ct.runWithContext(W):W()}function M(W,ct){let it;const[_t,Et,L]=Gy(W,ct);it=Oc(_t.reverse(),"beforeRouteLeave",W,ct);for(const w of _t)w.leaveGuards.forEach(N=>{it.push(tr(N,W,ct))});const b=I.bind(null,W,ct);return it.push(b),Tt(it).then(()=>{it=[];for(const w of s.list())it.push(tr(w,W,ct));return it.push(b),Tt(it)}).then(()=>{it=Oc(Et,"beforeRouteUpdate",W,ct);for(const w of Et)w.updateGuards.forEach(N=>{it.push(tr(N,W,ct))});return it.push(b),Tt(it)}).then(()=>{it=[];for(const w of L)if(w.beforeEnter)if(Qn(w.beforeEnter))for(const N of w.beforeEnter)it.push(tr(N,W,ct));else it.push(tr(w.beforeEnter,W,ct));return it.push(b),Tt(it)}).then(()=>(W.matched.forEach(w=>w.enterCallbacks={}),it=Oc(L,"beforeRouteEnter",W,ct,k),it.push(b),Tt(it))).then(()=>{it=[];for(const w of o.list())it.push(tr(w,W,ct));return it.push(b),Tt(it)}).catch(w=>vi(w,8)?w:Promise.reject(w))}function P(W,ct,it){a.list().forEach(_t=>k(()=>_t(W,ct,it)))}function at(W,ct,it,_t,Et){const L=v(W,ct);if(L)return L;const b=ct===Hi,w=Cs?history.state:{};it&&(_t||b?r.replace(W.fullPath,ie({scroll:b&&w&&w.scroll},Et)):r.push(W.fullPath,Et)),l.value=W,dt(W,ct,it,b),pt()}let Z;function O(){Z||(Z=r.listen((W,ct,it)=>{if(!ht.listening)return;const _t=m(W),Et=T(_t);if(Et){A(ie(Et,{replace:!0}),_t).catch(No);return}c=_t;const L=l.value;Cs&&fy(gd(L.fullPath,it.delta),ec()),M(_t,L).catch(b=>vi(b,12)?b:vi(b,2)?(A(b.to,_t).then(w=>{vi(w,20)&&!it.delta&&it.type===$o.pop&&r.go(-1,!1)}).catch(No),Promise.reject()):(it.delta&&r.go(-it.delta,!1),Y(b,_t,L))).then(b=>{b=b||at(_t,L,!1),b&&(it.delta&&!vi(b,8)?r.go(-it.delta,!1):it.type===$o.pop&&vi(b,20)&&r.go(-1,!1)),P(_t,L,b)}).catch(No)}))}let $=mo(),G=mo(),X;function Y(W,ct,it){pt(W);const _t=G.list();return _t.length?_t.forEach(Et=>Et(W,ct,it)):console.error(W),Promise.reject(W)}function ot(){return X&&l.value!==Hi?Promise.resolve():new Promise((W,ct)=>{$.add([W,ct])})}function pt(W){return X||(X=!W,O(),$.list().forEach(([ct,it])=>W?it(W):ct()),$.reset()),W}function dt(W,ct,it,_t){const{scrollBehavior:Et}=n;if(!Cs||!Et)return Promise.resolve();const L=!it&&dy(gd(W.fullPath,0))||(_t||!it)&&history.state&&history.state.scroll||null;return w_().then(()=>Et(W,ct,L)).then(b=>b&&hy(b)).catch(b=>Y(b,W,ct))}const Mt=W=>r.go(W);let Ot;const K=new Set,ht={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,hasRoute:p,getRoutes:g,resolve:m,options:n,push:S,replace:R,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:ot,install(W){const ct=this;W.component("RouterLink",Fy),W.component("RouterView",hg),W.config.globalProperties.$router=ct,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>ur(l)}),Cs&&!Ot&&l.value===Hi&&(Ot=!0,S(r.location).catch(Et=>{}));const it={};for(const Et in Hi)Object.defineProperty(it,Et,{get:()=>l.value[Et],enumerable:!0});W.provide(Zh,ct),W.provide(ug,g_(it)),W.provide(Wu,l);const _t=W.unmount;K.add(W),W.unmount=function(){K.delete(W),K.size<1&&(c=Hi,Z&&Z(),Z=null,l.value=Hi,Ot=!1,X=!1),_t()}}};function Tt(W){return W.reduce((ct,it)=>ct.then(()=>k(it)),Promise.resolve())}return ht}function Gy(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>$s(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>$s(c,l))||r.push(l))}return[e,i,r]}const co=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},Vy={},Wy=n=>(Gh("data-v-cb13c489"),n=n(),Vh(),n),Xy=Wy(()=>mt("h1",null,"lucien cauchy",-1));function qy(n,t,e,i,r,s){const o=gx("RouterLink");return ue(),Oi("header",null,[Xy,mt("nav",null,[Zt(o,{to:"/"},{default:Kt(()=>[se("Projets")]),_:1}),Zt(o,{to:"/about"},{default:Kt(()=>[se("À propos")]),_:1})])])}const Yy=co(Vy,[["render",qy],["__scopeId","data-v-cb13c489"]]),jy={__name:"App",setup(n){return(t,e)=>(ue(),Oi(Sn,null,[Zt(Yy),Zt(ur(hg))],64))}},$y="modulepreload",Ky=function(n){return"/"+n},Ld={},Dd=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");r=Promise.all(e.map(o=>{if(o=Ky(o),o in Ld)return;Ld[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":$y,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Zy={class:"project"},Jy={class:"project-header"},Qy={key:0},tM=mt("div",{class:"galery"},[mt("div",{class:"mockup"}),mt("div",{class:"mockup"}),mt("div",{class:"mockup"})],-1),eM=[tM],nM=mt("h4",null,"Projet",-1),iM={class:"flan"},rM=mt("h4",null,"Technos",-1),sM={class:"technos"},ma={__name:"PageTemplate",props:["hideGalery"],setup(n){return(t,e)=>(ue(),Oi("div",Zy,[mt("h2",null,[Fr(t.$slots,"title")]),mt("div",Jy,[mt("h3",null,[Fr(t.$slots,"subtitle")]),mt("div",null,[Fr(t.$slots,"links")])]),n.hideGalery?Fr(t.$slots,"content",{key:1,class:"content"}):(ue(),Oi("div",Qy,eM)),nM,mt("div",iM,[Fr(t.$slots,"project")]),rM,mt("p",sM,[Fr(t.$slots,"technos")])]))}},oM={},aM=n=>(Gh("data-v-376fdfc3"),n=n(),Vh(),n),lM={class:"link-icon",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},cM=aM(()=>mt("path",{fill:"currentColor",d:"M19 19H5V5h7V3H3v18h18v-9h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z"},null,-1)),uM=[cM];function hM(n,t){return ue(),Oi("svg",lM,uM)}const nc=co(oM,[["render",hM],["__scopeId","data-v-376fdfc3"]]),mi={__name:"IconTemplate",props:["title","large"],setup(n){return(t,e)=>(ue(),Oi("div",{class:lr(["icon",{horizontal:n.large}])},[Fr(t.$slots,"default"),mt("p",null,r_(n.title),1)],2))}},fM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128"},[mt("path",{fill:"none",d:"m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"}),mt("path",{fill:"#35495e",d:"m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"}),mt("path",{fill:"#41b883",d:"m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"})],-1),fg={__name:"VueIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Vue3"},{default:Kt(()=>[fM]),_:1}))}},dM=n=>(Gh("data-v-2dd8da86"),n=n(),Vh(),n),pM=dM(()=>mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[mt("path",{fill:"currentColor",d:"M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-2 13.33c.16.54.14 1.04 0 1.5c0 .05-.04.1-.06.17c-.02 0-.04.07-.07.12c-.11.24-.27.47-.46.67c-.58.64-1.41.88-1.74.68c-.38-.22-.17-1.12.49-1.83c.72-.76 1.76-1.26 1.76-1.26zm8.27-9.05c-.45-1.78-3.4-2.36-6.18-1.37c-1.66.59-3.46 1.51-4.75 2.72c-1.53 1.44-1.78 2.69-1.68 3.21c.34 1.84 2.88 3.05 3.92 3.94v.01c-.3.15-2.54 1.28-3.08 2.44c-.54 1.22.1 2.1.5 2.22c1.34.36 2.69-.29 3.41-1.38c.7-1.04.65-2.39.34-3.07c.42-.1.91-.15 1.53-.08c1.76.21 2.1 1.3 2.03 1.76c-.06.46-.43.71-.55.79c-.12.07-.16.1-.15.16c.01.08.07.08.17.06c.15-.03.93-.37.96-1.22c.04-1.08-.99-2.28-2.81-2.25c-.75.02-1.22.09-1.56.22l-.08-.09c-1.13-1.2-3.21-2.05-3.12-3.67c.03-.59.23-2.13 4-4.01c3.08-1.54 5.55-1.12 5.98-.17c.61 1.33-1.32 3.82-4.52 4.18c-1.22.14-1.87-.34-2.03-.51c-.17-.17-.19-.2-.25-.17c-.11.07-.04.23 0 .33c.09.25.49.67 1.15.91c.59.19 2.03.3 3.76-.37c1.94-.75 3.46-2.84 3.01-4.59"})],-1)),mM={__name:"SassIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Sass"},{default:Kt(()=>[pM]),_:1}))}},Jh=co(mM,[["__scopeId","data-v-2dd8da86"]]),_M=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28.06",height:"32",viewBox:"0 0 256 292"},[mt("defs",null,[mt("linearGradient",{id:"logosNodejsIconAlt0",x1:"68.188%",x2:"27.823%",y1:"17.487%",y2:"89.755%"},[mt("stop",{offset:"0%","stop-color":"#41873F"}),mt("stop",{offset:"32.88%","stop-color":"#418B3D"}),mt("stop",{offset:"63.52%","stop-color":"#419637"}),mt("stop",{offset:"93.19%","stop-color":"#3FA92D"}),mt("stop",{offset:"100%","stop-color":"#3FAE2A"})]),mt("linearGradient",{id:"logosNodejsIconAlt1",x1:"43.277%",x2:"159.245%",y1:"55.169%",y2:"-18.306%"},[mt("stop",{offset:"13.76%","stop-color":"#41873F"}),mt("stop",{offset:"40.32%","stop-color":"#54A044"}),mt("stop",{offset:"71.36%","stop-color":"#66B848"}),mt("stop",{offset:"90.81%","stop-color":"#6CC04A"})]),mt("linearGradient",{id:"logosNodejsIconAlt2",x1:"-4.389%",x2:"101.499%",y1:"49.997%",y2:"49.997%"},[mt("stop",{offset:"9.192%","stop-color":"#6CC04A"}),mt("stop",{offset:"28.64%","stop-color":"#66B848"}),mt("stop",{offset:"59.68%","stop-color":"#54A044"}),mt("stop",{offset:"86.24%","stop-color":"#41873F"})]),mt("path",{id:"logosNodejsIconAlt3",d:"M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"})]),mt("path",{fill:"url(#logosNodejsIconAlt0)",d:"M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"}),mt("mask",{id:"logosNodejsIconAlt4",fill:"#fff"},[mt("use",{href:"#logosNodejsIconAlt3"})]),mt("path",{fill:"url(#logosNodejsIconAlt1)",d:"M249.485 67.8L134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714",mask:"url(#logosNodejsIconAlt4)"}),mt("mask",{id:"logosNodejsIconAlt5",fill:"#fff"},[mt("use",{href:"#logosNodejsIconAlt3"})]),mt("path",{fill:"url(#logosNodejsIconAlt2)",d:"M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63z",mask:"url(#logosNodejsIconAlt5)"})],-1),dg={__name:"NodeIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"NodeJS"},{default:Kt(()=>[_M]),_:1}))}},gM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256"},[mt("g",{fill:"none"},[mt("rect",{width:"256",height:"256",fill:"#023430",rx:"60"}),mt("path",{fill:"#10AA50",d:"M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"}),mt("path",{fill:"#B8C4C2",d:"M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"}),mt("path",{fill:"#12924F",d:"M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"})])],-1),vM={__name:"MongoIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Mongo DB"},{default:Kt(()=>[gM]),_:1}))}},xM={href:"https://github.com/Amenokal/exam-front",target:"_blank"},yM=mt("p",null,"Création d'une app en Vue3/NodeJS pour rassembler les passionnés de flan pâtissier et leur permettre via une app communautaire de déterminer où se trouve les flans les plus délicieux en France.",-1),MM=mt("p",null,"Les utilisateurs peuvent trouver les boulangeries en France sur une carte interactive et s'inscrire pour noter les flans qu'on y trouve selon des caractéristiques définies.",-1),SM={__name:"FlanQuest",setup(n){return(t,e)=>(ue(),ke(ma,null,{title:Kt(()=>[se("La Quête du flan parfait")]),subtitle:Kt(()=>[se("Mais où se trouve-t'il ?")]),links:Kt(()=>[mt("a",xM,[se("Voir le code "),Zt(nc)])]),project:Kt(()=>[yM,MM]),technos:Kt(()=>[Zt(fg),se(),Zt(Jh),se(),Zt(dg),se(),Zt(vM)]),_:1}))}},EM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128"},[mt("path",{fill:"#ff3e00",d:"M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.198 34.198 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.396 34.396 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.48 36.48 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.128 34.128 0 0 0 15.438-22.918a35.52 35.52 0 0 0 .572-6.386a36.183 36.183 0 0 0-4.112-16.71a34.396 34.396 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.41 36.41 0 0 0-6.787-21.178z"}),mt("path",{fill:"#fff",d:"M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.638 23.638 0 0 1-19.435-10.187a21.89 21.89 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.646 38.646 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.625 6.625 0 0 0 1.228 3.854a7.092 7.092 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.258 6.258 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.137 7.137 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.643 23.643 0 0 1-25.39-9.416a21.944 21.944 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.653 20.653 0 0 1 9.286-13.781l29.792-18.99a21.863 21.863 0 0 1 6.048-2.667a23.963 23.963 0 0 1 5.954-.75A23.675 23.675 0 0 1 98.22 24.745a21.937 21.937 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.414 38.414 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.128 7.128 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.116 7.116 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.662 23.662 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.603 20.603 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"})],-1),TM={__name:"SvelteIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Svelte"},{default:Kt(()=>[EM]),_:1}))}},bM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256"},[mt("path",{fill:"#4945FF",d:"M0 88.747c0-41.836 0-62.754 12.997-75.75C25.993 0 46.91 0 88.747 0h78.507c41.835 0 62.752 0 75.75 12.997C256 25.993 256 46.91 256 88.747v78.507c0 41.835 0 62.752-12.997 75.75C230.006 256 209.09 256 167.253 256H88.748c-41.836 0-62.754 0-75.75-12.997C0 230.006 0 209.09 0 167.253z"}),mt("path",{fill:"#FFF",d:"M176.64 77.653H90.453V121.6H134.4v43.946h43.946V79.36c0-.943-.764-1.707-1.706-1.707"}),mt("path",{fill:"#FFF",d:"M132.693 121.6h1.707v1.707h-1.707z"}),mt("path",{fill:"#9593FF",d:"M90.453 121.6h42.24c.943 0 1.707.764 1.707 1.706v42.24H92.16a1.706 1.706 0 0 1-1.707-1.706zm43.947 43.946h43.946l-42.49 42.49c-.537.538-1.456.157-1.456-.602zM90.453 121.6H48.566c-.76 0-1.14-.92-.603-1.457l42.49-42.49z"})],-1),wM={__name:"StrapiIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Strapi"},{default:Kt(()=>[bM]),_:1}))}},AM={href:"",target:"_blank"},RM=mt("p",null,"Création d'un site vitrine pour un commerce sur Lille.",-1),CM=mt("p",null,"Mise en place du CMS headless Strapi pour alimenter une partie blog et photos d'articles et monter dans le référencement.",-1),PM={__name:"LaStation",setup(n){return(t,e)=>(ue(),ke(ma,null,{title:Kt(()=>[se("La Station")]),subtitle:Kt(()=>[se("Site vitrine pour friperie vintage")]),links:Kt(()=>[mt("a",AM,[se("Voir le code "),Zt(nc)])]),project:Kt(()=>[RM,CM]),technos:Kt(()=>[Zt(TM),se(),Zt(Jh),se(),Zt(wM)]),_:1}))}},LM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256"},[mt("g",{fill:"none"},[mt("rect",{width:"256",height:"256",fill:"#242938",rx:"60"}),mt("path",{fill:"#00DC82",d:"M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86"})])],-1),DM={__name:"NuxtIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"Nuxt3"},{default:Kt(()=>[LM]),_:1}))}},IM=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32.51",height:"32",viewBox:"0 0 256 252"},[mt("path",{fill:"#00546B",d:"M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872c-2.61 1.043-6.786 1.044-7.134 4.35c1.392 1.392 1.566 3.654 2.784 5.567c2.09 3.479 5.741 8.177 9.047 10.614c3.653 2.783 7.308 5.566 11.134 8.002c6.786 4.176 14.442 6.611 21.053 10.787c3.829 2.434 7.654 5.568 11.482 8.177c1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568c-1.738-1.74-3.48-3.306-5.22-5.046c-5.045-6.784-11.308-12.7-18.093-17.571c-5.567-3.828-17.747-9.047-20.008-15.485c0 0-.175-.173-.348-.347c3.827-.348 8.35-1.74 12.005-2.784c5.915-1.567 11.308-1.218 17.398-2.784c2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265c-8.873-7.657-18.617-15.137-28.707-21.4c-5.394-3.48-12.354-5.742-18.095-8.699c-2.086-1.045-5.567-1.566-6.784-3.306c-3.133-3.827-4.873-8.872-7.134-13.396c-5.044-9.57-9.917-20.182-14.267-30.272c-3.13-6.786-5.044-13.572-8.872-19.834c-17.92-29.577-37.406-47.497-67.33-65.07c-6.438-3.653-14.093-5.219-22.27-7.132c-4.348-.175-8.699-.522-13.048-.697c-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185c2.96 4.001 6.786 8.524 8.874 13.048c1.218 2.956 1.565 6.09 2.783 9.221c2.785 7.653 5.393 16.18 9.048 23.314c1.914 3.653 4.001 7.48 6.437 10.786c1.392 1.913 3.827 2.784 4.35 5.915c-2.435 3.48-2.61 8.7-4.003 13.049c-6.263 19.66-3.826 44.017 5.046 58.457c2.783 4.348 9.395 13.92 18.268 10.265c7.83-3.131 6.09-13.048 8.35-21.747c.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44c5.394 8.524 14.788 17.398 22.617 23.314c4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48c-3.131-3.13-6.612-6.958-9.047-10.438c-7.306-9.744-13.745-20.53-19.486-31.665c-2.783-5.392-5.22-11.308-7.481-16.701c-1.045-2.09-1.045-5.22-2.784-6.263c-2.61 3.827-6.437 7.133-8.351 11.83c-3.304 7.481-3.653 16.702-4.871 26.27c-.696.176-.349 0-.697.35c-5.566-1.394-7.48-7.134-9.569-12.006c-5.22-12.352-6.09-32.186-1.565-46.452c1.218-3.654 6.438-15.136 4.35-18.616c-1.044-3.306-4.525-5.22-6.438-7.829c-2.261-3.306-4.698-7.48-6.263-11.135c-4.176-9.743-6.264-20.53-10.787-30.273c-2.088-4.524-5.74-9.22-8.699-13.396c-3.305-4.697-6.959-8.004-9.569-13.571c-.869-1.913-2.088-5.045-.696-7.133c.348-1.392 1.043-1.913 2.436-2.261c2.262-1.915 8.7.521 10.96 1.565c6.438 2.608 11.831 5.046 17.225 8.699c2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913c9.222 2.957 17.572 7.307 25.054 12.005c22.792 14.44 41.58 34.97 54.282 59.501c2.088 4 2.957 7.656 4.871 11.83c3.655 8.526 8.178 17.225 11.83 25.576c3.654 8.176 7.133 16.528 12.353 23.314c2.61 3.652 13.048 5.567 17.746 7.481c3.48 1.565 8.874 2.958 12.005 4.871c5.915 3.652 11.83 7.83 17.398 11.83c2.784 2.088 11.482 6.438 12.005 9.917"}),mt("path",{fill:"#00546B",d:"M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133c1.393 2.783 2.61 5.568 4.003 8.352c.173-.175.347-.348.347-.348c2.437-1.741 3.654-4.524 3.654-8.7c-1.044-1.217-1.218-2.435-2.088-3.653c-1.043-1.741-3.306-2.61-4.698-4.003"})],-1),NM={__name:"SQLIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"MySQL"},{default:Kt(()=>[IM]),_:1}))}},OM={href:"https://xavier-cauchy.com",target:"_blank"},UM=mt("p",null,"Site porfolio pour présenter le travail d'un photographe professionel.",-1),FM=mt("p",null,"Création d'un back-office complet avec NodeJS/SQL pour gérer les catégories et photos.",-1),BM={__name:"XavierCauchy",setup(n){return(t,e)=>(ue(),ke(ma,null,{title:Kt(()=>[se("Xavier Cauchy Photographie")]),subtitle:Kt(()=>[se("Portfolio pour photographe professionel")]),links:Kt(()=>[mt("a",OM,[se("Voir le site "),Zt(nc)])]),project:Kt(()=>[UM,FM]),technos:Kt(()=>[Zt(DM),se(),Zt(Jh),se(),Zt(dg),se(),Zt(NM)]),_:1}))}},zM={href:"https://github.com/Amenokal/vue-composables",target:"_blank"},kM=mt("p",null,"Réalisation d'une documentation Vue3 sur les concepts et des composants réutilisables à l'intention des collègues d'entreprise.",-1),HM=mt("p",null,"Articles écrits et récupérés via des fichiers Markdown.",-1),GM={__name:"VueComponents",setup(n){return(t,e)=>(ue(),ke(ma,null,{title:Kt(()=>[se("Vue Components")]),subtitle:Kt(()=>[se("Library personnelle de composants Vue")]),links:Kt(()=>[mt("a",zM,[se("Voir le code "),Zt(nc)])]),project:Kt(()=>[kM,HM]),technos:Kt(()=>[Zt(fg)]),_:1}))}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="162",cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VM=0,Id=1,WM=2,pg=1,mg=2,bi=3,Ui=0,cn=1,Ci=2,Ni=0,Hs=1,Nd=2,Od=3,Ud=4,XM=5,Hr=100,qM=101,YM=102,Fd=103,Bd=104,jM=200,$M=201,KM=202,ZM=203,Xu=204,qu=205,JM=206,QM=207,tS=208,eS=209,nS=210,iS=211,rS=212,sS=213,oS=214,aS=0,lS=1,cS=2,El=3,uS=4,hS=5,fS=6,dS=7,ic=0,pS=1,mS=2,fr=0,_g=1,gg=2,vg=3,xg=4,_S=5,yg=6,Mg=7,Sg=300,Zs=301,Js=302,Yu=303,ju=304,rc=306,Tl=1e3,Yn=1001,$u=1002,nn=1003,zd=1004,_o=1005,ln=1006,Uc=1007,Vr=1008,dr=1009,gS=1010,vS=1011,tf=1012,Eg=1013,rr=1014,Pi=1015,Qs=1016,Tg=1017,bg=1018,jr=1020,xS=1021,jn=1023,yS=1024,MS=1025,$r=1026,to=1027,SS=1028,wg=1029,ES=1030,Ag=1031,Rg=1033,Fc=33776,Bc=33777,zc=33778,kc=33779,kd=35840,Hd=35841,Gd=35842,Vd=35843,Cg=36196,Wd=37492,Xd=37496,qd=37808,Yd=37809,jd=37810,$d=37811,Kd=37812,Zd=37813,Jd=37814,Qd=37815,tp=37816,ep=37817,np=37818,ip=37819,rp=37820,sp=37821,Hc=36492,op=36494,ap=36495,TS=36283,lp=36284,cp=36285,up=36286,bS=3200,wS=3201,sc=0,AS=1,nr="",Xn="srgb",Mr="srgb-linear",ef="display-p3",oc="display-p3-linear",bl="linear",le="srgb",wl="rec709",Al="p3",hs=7680,hp=519,RS=512,CS=513,PS=514,Pg=515,LS=516,DS=517,IS=518,NS=519,fp=35044,dp="300 es",Ku=1035,Li=2e3,Rl=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pp=1234567;const Uo=Math.PI/180,Ko=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function nf(n,t){return(n%t+t)%t}function OS(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function US(n,t,e){return n!==t?(e-n)/(t-n):0}function Fo(n,t,e){return(1-e)*n+e*t}function FS(n,t,e,i){return Fo(n,t,1-Math.exp(-e*i))}function BS(n,t=1){return t-Math.abs(nf(n,t*2)-t)}function zS(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function kS(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function HS(n,t){return n+Math.floor(Math.random()*(t-n+1))}function GS(n,t){return n+Math.random()*(t-n)}function VS(n){return n*(.5-Math.random())}function WS(n){n!==void 0&&(pp=n);let t=pp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function XS(n){return n*Uo}function qS(n){return n*Ko}function Zu(n){return(n&n-1)===0&&n!==0}function YS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jS(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $S={DEG2RAD:Uo,RAD2DEG:Ko,generateUUID:as,clamp:Oe,euclideanModulo:nf,mapLinear:OS,inverseLerp:US,lerp:Fo,damp:FS,pingpong:BS,smoothstep:zS,smootherstep:kS,randInt:HS,randFloat:GS,randFloatSpread:VS,seededRandom:WS,degToRad:XS,radToDeg:qS,isPowerOfTwo:Zu,ceilPowerOfTwo:YS,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:jS,normalize:Qe,denormalize:Ps};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=r[0],p=r[3],m=r[6],y=r[1],v=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*g+a*y+l*R,s[3]=o*p+a*v+l*T,s[6]=o*m+a*S+l*A,s[1]=c*g+u*y+h*R,s[4]=c*p+u*v+h*T,s[7]=c*m+u*S+h*A,s[2]=f*g+d*y+_*R,s[5]=f*p+d*v+_*T,s[8]=f*m+d*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=e*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-u*i)*g,t[2]=(a*i-r*o)*g,t[3]=f*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Yt;function Lg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function KS(){const n=Zo("canvas");return n.style.display="block",n}const mp={};function ZS(n){n in mp||(mp[n]=!0,console.warn(n))}const _p=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gp=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[Mr]:{transfer:bl,primaries:wl,toReference:n=>n,fromReference:n=>n},[Xn]:{transfer:le,primaries:wl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[oc]:{transfer:bl,primaries:Al,toReference:n=>n.applyMatrix3(gp),fromReference:n=>n.applyMatrix3(_p)},[ef]:{transfer:le,primaries:Al,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gp),fromReference:n=>n.applyMatrix3(_p).convertLinearToSRGB()}},JS=new Set([Mr,oc]),re={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!JS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Pa[t].toReference,r=Pa[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Pa[n].primaries},getTransfer:function(n){return n===nr?bl:Pa[n].transfer}};function Gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class Dg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Zo("canvas")),fs.width=t.width,fs.height=t.height;const i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gs(e[i]/255)*255):e[i]=Gs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QS=0;class Ig{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;class on extends os{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Yn,r=Yn,s=ln,o=Vr,a=jn,l=dr,c=on.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=as(),this.name="",this.source=new Ig(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tl:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case $u:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tl:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case $u:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Sg;on.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,r=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(d+1)/2,R=(m+1)/2,T=(u+f)/4,A=(h+g)/4,I=(_+p)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=I/s),this.set(i,r,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eE extends os{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ig(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends eE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ng extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nE extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,m*y);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}const S=a*y;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new z,vp=new ts;class _a{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Da.subVectors(this.max,go),ds.subVectors(t.a,go),ps.subVectors(t.b,go),ms.subVectors(t.c,go),Gi.subVectors(ps,ds),Vi.subVectors(ms,ps),Cr.subVectors(ds,ms);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-Cr.z,Cr.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,Cr.z,0,-Cr.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-Cr.y,Cr.x,0];return!qc(e,ds,ps,ms,Da)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,ds,ps,ms,Da))?!1:(Ia.crossVectors(Gi,Vi),e=[Ia.x,Ia.y,Ia.z],qc(e,ds,ps,ms,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,La=new _a,ds=new z,ps=new z,ms=new z,Gi=new z,Vi=new z,Cr=new z,go=new z,Da=new z,Ia=new z,Pr=new z;function qc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pr.fromArray(n,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=t.dot(Pr),c=e.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iE=new _a,vo=new z,Yc=new z;class ga{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):iE.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vo.subVectors(t,this.center);const e=vo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vo.copy(t.center).add(Yc)),this.expandByPoint(vo.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new z,jc=new z,Na=new z,Wi=new z,$c=new z,Oa=new z,Kc=new z;class ac{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){jc.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(jc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=Wi.dot(this.direction),l=-Wi.dot(Na),c=Wi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jc).addScaledVector(Na,f),d}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,r,s){$c.subVectors(e,t),Oa.subVectors(i,t),Kc.crossVectors($c,Oa);let o=this.direction.dot(Kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const l=a*this.direction.dot(Oa.crossVectors(Wi,Oa));if(l<0)return null;const c=a*this.direction.dot($c.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Kc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,r,s,o,a,l,c,u,h,f,d,_,g,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,d,_,g,p)}set(t,e,i,r,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/_s.setFromMatrixColumn(t,0).length(),s=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rE,t,sE)}lookAt(t,e,i){const r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(i,xn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(i,xn)),Xi.normalize(),Ua.crossVectors(xn,Xi),r[0]=Xi.x,r[4]=Ua.x,r[8]=xn.x,r[1]=Xi.y,r[5]=Ua.y,r[9]=xn.y,r[2]=Xi.z,r[6]=Ua.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],p=i[10],m=i[14],y=i[3],v=i[7],S=i[11],R=i[15],T=r[0],A=r[4],I=r[8],k=r[12],M=r[1],P=r[5],at=r[9],Z=r[13],O=r[2],$=r[6],G=r[10],X=r[14],Y=r[3],ot=r[7],pt=r[11],dt=r[15];return s[0]=o*T+a*M+l*O+c*Y,s[4]=o*A+a*P+l*$+c*ot,s[8]=o*I+a*at+l*G+c*pt,s[12]=o*k+a*Z+l*X+c*dt,s[1]=u*T+h*M+f*O+d*Y,s[5]=u*A+h*P+f*$+d*ot,s[9]=u*I+h*at+f*G+d*pt,s[13]=u*k+h*Z+f*X+d*dt,s[2]=_*T+g*M+p*O+m*Y,s[6]=_*A+g*P+p*$+m*ot,s[10]=_*I+g*at+p*G+m*pt,s[14]=_*k+g*Z+p*X+m*dt,s[3]=y*T+v*M+S*O+R*Y,s[7]=y*A+v*P+S*$+R*ot,s[11]=y*I+v*at+S*G+R*pt,s[15]=y*k+v*Z+S*X+R*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+g*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+m*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,S=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,T=e*y+i*v+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(g*f*s-h*p*s-g*r*d+i*p*d+h*r*m-i*f*m)*A,t[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*m+i*l*m)*A,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*A,t[4]=v*A,t[5]=(u*p*s-_*f*s+_*r*d-e*p*d-u*r*m+e*f*m)*A,t[6]=(_*l*s-o*p*s-_*r*c+e*p*c+o*r*m-e*l*m)*A,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*A,t[8]=S*A,t[9]=(_*h*s-u*g*s-_*i*d+e*g*d+u*i*m-e*h*m)*A,t[10]=(o*g*s-_*a*s+_*i*c-e*g*c-o*i*m+e*a*m)*A,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*d-e*a*d)*A,t[12]=R*A,t[13]=(u*g*r-_*h*r+_*i*f-e*g*f-u*i*p+e*h*p)*A,t[14]=(_*a*r-o*g*r-_*i*l+e*g*l+o*i*p-e*a*p)*A,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,y=l*c,v=l*u,S=l*h,R=i.x,T=i.y,A=i.z;return r[0]=(1-(g+m))*R,r[1]=(d+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(d-S)*T,r[5]=(1-(f+m))*T,r[6]=(p+y)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(p-y)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Gn.copy(this);const c=1/s,u=1/o,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,e.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Li){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let d,_;if(a===Li)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Li){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*c,d=(i+r)*u;let _,g;if(a===Li)_=(o+s)*h,g=-2*h;else if(a===Rl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _s=new z,Gn=new _e,rE=new z(0,0,0),sE=new z(1,1,1),Xi=new z,Ua=new z,xn=new z,xp=new _e,yp=new ts;class Bn{constructor(t=0,e=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yp.setFromEuler(this),this.setFromQuaternion(yp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const Mp=new z,gs=new ts,Mi=new _e,Fa=new z,xo=new z,aE=new z,lE=new ts,Sp=new z(1,0,0),Ep=new z(0,1,0),Tp=new z(0,0,1),cE={type:"added"},uE={type:"removed"},Zc={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Pe extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new z,e=new Bn,i=new ts,r=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Sp,t)}rotateY(t){return this.rotateOnAxis(Ep,t)}rotateZ(t){return this.rotateOnAxis(Tp,t)}translateOnAxis(t,e){return Mp.copy(t).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sp,t)}translateY(t){return this.translateOnAxis(Ep,t)}translateZ(t){return this.translateOnAxis(Tp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fa.copy(t):Fa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(xo,Fa,this.up):Mi.lookAt(Fa,xo,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Mi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cE),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uE),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,aE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,lE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new z(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new z,Si=new z,Qc=new z,Ei=new z,vs=new z,xs=new z,bp=new z,tu=new z,eu=new z,nu=new z;class ai{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Vn.subVectors(t,e),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Vn.subVectors(r,e),Si.subVectors(i,e),Qc.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(Si),l=Vn.dot(Qc),c=Si.dot(Si),u=Si.dot(Qc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(t,e,i,r){return Vn.subVectors(i,e),Si.subVectors(t,e),Vn.cross(Si).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Vn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ai.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;vs.subVectors(r,i),xs.subVectors(s,i),tu.subVectors(t,i);const l=vs.dot(tu),c=xs.dot(tu);if(l<=0&&c<=0)return e.copy(i);eu.subVectors(t,r);const u=vs.dot(eu),h=xs.dot(eu);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(vs,o);nu.subVectors(t,s);const d=vs.dot(nu),_=xs.dot(nu);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(xs,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return bp.subVectors(s,r),a=(h-u)/(h-u+(d-_)),e.copy(r).addScaledVector(bp,a);const m=1/(p+g+f);return o=g*m,a=f*m,e.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function iu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=nf(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=iu(o,s,t+1/3),this.g=iu(o,s,t),this.b=iu(o,s,t-1/3)}return re.toWorkingColorSpace(this,r),this}setStyle(t,e=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){const i=Ug[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=Vc(t.r),this.g=Vc(t.g),this.b=Vc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return re.fromWorkingColorSpace(We.copy(this),t),Math.round(Oe(We.r*255,0,255))*65536+Math.round(Oe(We.g*255,0,255))*256+Math.round(Oe(We.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(We.copy(this),e);const i=We.r,r=We.g,s=We.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Xn){re.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,r=We.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Ba);const i=Fo(qi.h,Ba.h,e),r=Fo(qi.s,Ba.s,e),s=Fo(qi.l,Ba.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Bt;Bt.NAMES=Ug;let hE=0;class ti extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Hs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=qu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xu&&(i.blendSrc=this.blendSrc),this.blendDst!==qu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fg extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new z,za=new yt;class ui{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ZS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fp&&(t.usage=this.usage),t}}class Bg extends ui{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class zg extends ui{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ce extends ui{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fE=0;const Pn=new _e,ru=new Pe,ys=new z,yn=new _a,yo=new _a,Ne=new z;class An extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lg(t)?zg:Bg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return ru.lookAt(t),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(yn.min,yo.min),yn.expandByPoint(Ne),Ne.addVectors(yn.max,yo.max),yn.expandByPoint(Ne)):(yn.expandByPoint(yo.min),yn.expandByPoint(yo.max))}yn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ne.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Ne.add(ys)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,u=new z,h=new z,f=new yt,d=new yt,_=new yt,g=new z,p=new z;function m(I,k,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,k),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,k),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[I].add(g),a[k].add(g),a[M].add(g),l[I].add(p),l[k].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,k=y.length;I<k;++I){const M=y[I],P=M.start,at=M.count;for(let Z=P,O=P+at;Z<O;Z+=3)m(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const v=new z,S=new z,R=new z,T=new z;function A(I){R.fromBufferAttribute(r,I),T.copy(R);const k=a[I];v.copy(k),v.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(T,k);const P=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,k=y.length;I<k;++I){const M=y[I],P=M.start,at=M.count;for(let Z=P,O=P+at;Z<O;Z+=3)A(t.getX(Z+0)),A(t.getX(Z+1)),A(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new ui(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wp=new _e,Lr=new ac,ka=new ga,Ap=new z,Ms=new z,Ss=new z,Es=new z,su=new z,Ha=new z,Ga=new yt,Va=new yt,Wa=new yt,Rp=new z,Cp=new z,Pp=new z,Xa=new z,qa=new z;class $e extends Pe{constructor(t=new An,e=new Fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(su.fromBufferAttribute(h,t),o?Ha.addScaledVector(su,u):Ha.addScaledVector(su.sub(e),u))}e.add(Ha)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(ka.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ka,Ap)===null||Lr.origin.distanceToSquared(Ap)>(t.far-t.near)**2))&&(wp.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(wp),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);r=Ya(this,m,t,i,c,u,h,T,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Ya(this,o,t,i,c,u,h,y,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const T=S,A=S+1,I=S+2;r=Ya(this,m,t,i,c,u,h,T,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,v=p+1,S=p+2;r=Ya(this,o,t,i,c,u,h,y,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function dE(n,t,e,i,r,s,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Ui,a),l===null)return null;qa.copy(a),qa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qa);return c<e.near||c>e.far?null:{distance:c,point:qa.clone(),object:n}}function Ya(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ms),n.getVertexPosition(l,Ss),n.getVertexPosition(c,Es);const u=dE(n,t,e,i,Ms,Ss,Es,Xa);if(u){r&&(Ga.fromBufferAttribute(r,a),Va.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,c),u.uv=ai.getInterpolation(Xa,Ms,Ss,Es,Ga,Va,Wa,new yt)),s&&(Ga.fromBufferAttribute(s,a),Va.fromBufferAttribute(s,l),Wa.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(Xa,Ms,Ss,Es,Ga,Va,Wa,new yt)),o&&(Rp.fromBufferAttribute(o,a),Cp.fromBufferAttribute(o,l),Pp.fromBufferAttribute(o,c),u.normal=ai.getInterpolation(Xa,Ms,Ss,Es,Rp,Cp,Pp,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};ai.getNormal(Ms,Ss,Es,h.normal),u.face=h}return u}class pr extends An{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function _(g,p,m,y,v,S,R,T,A,I,k){const M=S/A,P=R/I,at=S/2,Z=R/2,O=T/2,$=A+1,G=I+1;let X=0,Y=0;const ot=new z;for(let pt=0;pt<G;pt++){const dt=pt*P-Z;for(let Mt=0;Mt<$;Mt++){const Ot=Mt*M-at;ot[g]=Ot*y,ot[p]=dt*v,ot[m]=O,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[p]=0,ot[m]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Mt/A),h.push(1-pt/I),X+=1}}for(let pt=0;pt<I;pt++)for(let dt=0;dt<A;dt++){const Mt=f+dt+$*pt,Ot=f+dt+$*(pt+1),K=f+(dt+1)+$*(pt+1),ht=f+(dt+1)+$*pt;l.push(Mt,Ot,ht),l.push(Ot,K,ht),Y+=6}a.addGroup(d,Y,k),d+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=eo(n[e]);for(const r in i)t[r]=i[r]}return t}function pE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kg(n){return n.getRenderTarget()===null?n.outputColorSpace:re.workingColorSpace}const rf={clone:eo,merge:tn};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=pE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hg extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new z,Lp=new yt,Dp=new yt;class Nn extends Hg{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Lp,Dp),e.subVectors(Dp,Lp)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,bs=1;class gE extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Ts,bs,t,e);r.layers=this.layers,this.add(r);const s=new Nn(Ts,bs,t,e);s.layers=this.layers,this.add(s);const o=new Nn(Ts,bs,t,e);o.layers=this.layers,this.add(o);const a=new Nn(Ts,bs,t,e);a.layers=this.layers,this.add(a);const l=new Nn(Ts,bs,t,e);l.layers=this.layers,this.add(l);const c=new Nn(Ts,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gg extends on{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vE extends vr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gg(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ni});s.uniforms.tEquirect.value=e;const o=new $e(r,s),a=e.minFilter;return e.minFilter===Vr&&(e.minFilter=ln),new gE(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ou=new z,xE=new z,yE=new Yt;class er{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ou.subVectors(i,e).cross(xE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yE.getNormalMatrix(t),r=this.coplanarPoint(ou).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ga,ja=new z;class sf{constructor(t=new er,e=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],p=r[11],m=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-d,S-m).normalize(),i[1].setComponents(l+s,f+c,p+d,S+m).normalize(),i[2].setComponents(l+o,f+u,p+_,S+y).normalize(),i[3].setComponents(l-o,f-u,p-_,S-y).normalize(),i[4].setComponents(l-a,f-h,p-g,S-v).normalize(),e===Li)i[5].setComponents(l+a,f+h,p+g,S+v).normalize();else if(e===Rl)i[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ja.x=r.normal.x>0?t.max.x:t.min.x,ja.y=r.normal.y>0?t.max.y:t.min.y,ja.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vg(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ME(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),d.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];e?n.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):n.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class lc extends An{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-y,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),T=y+1+c*m;d.push(v,S,T),d.push(S,R,T)}this.setIndex(d),this.setAttribute("position",new Ce(_,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.width,t.height,t.widthSegments,t.heightSegments)}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ST=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:SE,alphahash_pars_fragment:EE,alphamap_fragment:TE,alphamap_pars_fragment:bE,alphatest_fragment:wE,alphatest_pars_fragment:AE,aomap_fragment:RE,aomap_pars_fragment:CE,batching_pars_vertex:PE,batching_vertex:LE,begin_vertex:DE,beginnormal_vertex:IE,bsdfs:NE,iridescence_fragment:OE,bumpmap_pars_fragment:UE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:kE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:VE,color_vertex:WE,common:XE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:YE,displacementmap_pars_vertex:jE,displacementmap_vertex:$E,emissivemap_fragment:KE,emissivemap_pars_fragment:ZE,colorspace_fragment:JE,colorspace_pars_fragment:QE,envmap_fragment:tT,envmap_common_pars_fragment:eT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:mT,envmap_vertex:rT,fog_vertex:sT,fog_pars_vertex:oT,fog_fragment:aT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_fragment:uT,lightmap_pars_fragment:hT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:dT,lights_pars_begin:pT,lights_toon_fragment:_T,lights_toon_pars_fragment:gT,lights_phong_fragment:vT,lights_phong_pars_fragment:xT,lights_physical_fragment:yT,lights_physical_pars_fragment:MT,lights_fragment_begin:ST,lights_fragment_maps:ET,lights_fragment_end:TT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:wT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:CT,map_pars_fragment:PT,map_particle_fragment:LT,map_particle_pars_fragment:DT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:NT,morphinstance_vertex:OT,morphcolor_vertex:UT,morphnormal_vertex:FT,morphtarget_pars_vertex:BT,morphtarget_vertex:zT,normal_fragment_begin:kT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:WT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:$T,opaque_fragment:KT,packing:ZT,premultiplied_alpha_fragment:JT,project_vertex:QT,dithering_fragment:tb,dithering_pars_fragment:eb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:ub,skinnormal_vertex:hb,specularmap_fragment:fb,specularmap_pars_fragment:db,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:_b,transmission_pars_fragment:gb,uv_pars_fragment:vb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:Mb,background_vert:Sb,background_frag:Eb,backgroundCube_vert:Tb,backgroundCube_frag:bb,cube_vert:wb,cube_frag:Ab,depth_vert:Rb,depth_frag:Cb,distanceRGBA_vert:Pb,distanceRGBA_frag:Lb,equirect_vert:Db,equirect_frag:Ib,linedashed_vert:Nb,linedashed_frag:Ob,meshbasic_vert:Ub,meshbasic_frag:Fb,meshlambert_vert:Bb,meshlambert_frag:zb,meshmatcap_vert:kb,meshmatcap_frag:Hb,meshnormal_vert:Gb,meshnormal_frag:Vb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:qb,meshphysical_frag:Yb,meshtoon_vert:jb,meshtoon_frag:$b,points_vert:Kb,points_frag:Zb,shadow_vert:Jb,shadow_frag:Qb,sprite_vert:tw,sprite_frag:ew},At={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},si={basic:{uniforms:tn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([At.points,At.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([At.common,At.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([At.sprite,At.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:tn([At.common,At.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:tn([At.lights,At.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};si.physical={uniforms:tn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const $a={r:0,b:0,g:0},Ir=new Bn,nw=new _e;function iw(n,t,e,i,r,s,o){const a=new Bt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rc)?(u===void 0&&(u=new $e(new pr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:eo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(m.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(Ir)),u.material.toneMapped=re.getTransfer(v.colorSpace)!==le,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $e(new lc(2,2),new ei({name:"BackgroundMaterial",uniforms:eo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB($a,kg(n)),i.buffers.color.setClear($a.r,$a.g,$a.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function rw(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(O,$,G,X,Y){let ot=!1;if(o){const pt=g(X,G,$);c!==pt&&(c=pt,d(c.object)),ot=m(O,X,G,Y),ot&&y(O,X,G,Y)}else{const pt=$.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==pt)&&(c.geometry=X.id,c.program=G.id,c.wireframe=pt,ot=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ot||u)&&(u=!1,I(O,$,G,X),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,$,G){const X=G.wireframe===!0;let Y=a[O.id];Y===void 0&&(Y={},a[O.id]=Y);let ot=Y[$.id];ot===void 0&&(ot={},Y[$.id]=ot);let pt=ot[X];return pt===void 0&&(pt=p(f()),ot[X]=pt),pt}function p(O){const $=[],G=[],X=[];for(let Y=0;Y<r;Y++)$[Y]=0,G[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:G,attributeDivisors:X,object:O,attributes:{},index:null}}function m(O,$,G,X){const Y=c.attributes,ot=$.attributes;let pt=0;const dt=G.getAttributes();for(const Mt in dt)if(dt[Mt].location>=0){const K=Y[Mt];let ht=ot[Mt];if(ht===void 0&&(Mt==="instanceMatrix"&&O.instanceMatrix&&(ht=O.instanceMatrix),Mt==="instanceColor"&&O.instanceColor&&(ht=O.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;pt++}return c.attributesNum!==pt||c.index!==X}function y(O,$,G,X){const Y={},ot=$.attributes;let pt=0;const dt=G.getAttributes();for(const Mt in dt)if(dt[Mt].location>=0){let K=ot[Mt];K===void 0&&(Mt==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),Mt==="instanceColor"&&O.instanceColor&&(K=O.instanceColor));const ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),Y[Mt]=ht,pt++}c.attributes=Y,c.attributesNum=pt,c.index=X}function v(){const O=c.newAttributes;for(let $=0,G=O.length;$<G;$++)O[$]=0}function S(O){R(O,0)}function R(O,$){const G=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;G[O]=1,X[O]===0&&(n.enableVertexAttribArray(O),X[O]=1),Y[O]!==$&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,$),Y[O]=$)}function T(){const O=c.newAttributes,$=c.enabledAttributes;for(let G=0,X=$.length;G<X;G++)$[G]!==O[G]&&(n.disableVertexAttribArray(G),$[G]=0)}function A(O,$,G,X,Y,ot,pt){pt===!0?n.vertexAttribIPointer(O,$,G,Y,ot):n.vertexAttribPointer(O,$,G,X,Y,ot)}function I(O,$,G,X){if(i.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,ot=G.getAttributes(),pt=$.defaultAttributeValues;for(const dt in ot){const Mt=ot[dt];if(Mt.location>=0){let Ot=Y[dt];if(Ot===void 0&&(dt==="instanceMatrix"&&O.instanceMatrix&&(Ot=O.instanceMatrix),dt==="instanceColor"&&O.instanceColor&&(Ot=O.instanceColor)),Ot!==void 0){const K=Ot.normalized,ht=Ot.itemSize,Tt=e.get(Ot);if(Tt===void 0)continue;const W=Tt.buffer,ct=Tt.type,it=Tt.bytesPerElement,_t=i.isWebGL2===!0&&(ct===n.INT||ct===n.UNSIGNED_INT||Ot.gpuType===Eg);if(Ot.isInterleavedBufferAttribute){const Et=Ot.data,L=Et.stride,b=Ot.offset;if(Et.isInstancedInterleavedBuffer){for(let w=0;w<Mt.locationSize;w++)R(Mt.location+w,Et.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let w=0;w<Mt.locationSize;w++)S(Mt.location+w);n.bindBuffer(n.ARRAY_BUFFER,W);for(let w=0;w<Mt.locationSize;w++)A(Mt.location+w,ht/Mt.locationSize,ct,K,L*it,(b+ht/Mt.locationSize*w)*it,_t)}else{if(Ot.isInstancedBufferAttribute){for(let Et=0;Et<Mt.locationSize;Et++)R(Mt.location+Et,Ot.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Et=0;Et<Mt.locationSize;Et++)S(Mt.location+Et);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Et=0;Et<Mt.locationSize;Et++)A(Mt.location+Et,ht/Mt.locationSize,ct,K,ht*it,ht/Mt.locationSize*Et*it,_t)}}else if(pt!==void 0){const K=pt[dt];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Mt.location,K);break;case 3:n.vertexAttrib3fv(Mt.location,K);break;case 4:n.vertexAttrib4fv(Mt.location,K);break;default:n.vertexAttrib1fv(Mt.location,K)}}}}T()}function k(){at();for(const O in a){const $=a[O];for(const G in $){const X=$[G];for(const Y in X)_(X[Y].object),delete X[Y];delete $[G]}delete a[O]}}function M(O){if(a[O.id]===void 0)return;const $=a[O.id];for(const G in $){const X=$[G];for(const Y in X)_(X[Y].object),delete X[Y];delete $[G]}delete a[O.id]}function P(O){for(const $ in a){const G=a[$];if(G[O.id]===void 0)continue;const X=G[O.id];for(const Y in X)_(X[Y].object),delete X[Y];delete G[O.id]}}function at(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:at,resetDefaultState:Z,dispose:k,releaseStatesOfGeometry:M,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function sw(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,_;if(r)d=n,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,h,f),e.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ow(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||t.has("OES_texture_float"),R=v&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function aw(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new er,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,v=y*4;let S=m.clippingState||null;l.value=S,S=u(_,f,v,d);for(let R=0;R!==v;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==g;++v,S+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function lw(n){let t=new WeakMap;function e(o,a){return a===Yu?o.mapping=Zs:a===ju&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yu||a===ju)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vE(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class of extends Hg{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,Ip=[.125,.215,.35,.446,.526,.582],Gr=20,au=new of,Np=new Bt;let lu=null,cu=0,uu=0;const Br=(1+Math.sqrt(5))/2,ws=1/Br,Op=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Br,ws),new z(0,Br,-ws),new z(ws,0,Br),new z(-ws,0,Br),new z(Br,ws,0),new z(-Br,ws,0)];class Up{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,cu,uu),t.scissorTest=!1,Ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Qs,format:jn,colorSpace:Mr,depthBuffer:!1},r=Fp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=uw(s,t,e)}return r}_compileMaterial(t){const e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,au)}_sceneToCubeUV(t,e,i,r){const a=new Nn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Np),u.toneMapping=fr,u.autoClear=!1;const d=new Fg({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new $e(new pr,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Np),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Ka(r,y*v,m>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Zs||t.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ka(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,au)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Op[(r-1)%Op.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Gr;p>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gr}`);const m=[];let y=0;for(let A=0;A<Gr;++A){const I=A/g,k=Math.exp(-I*I/2);m.push(k),A===0?y+=k:A<p&&(y+=2*k)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-Ds?r-v+Ds:0),T=4*(this._cubeSize-S);Ka(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(h,au)}}function cw(n){const t=[],e=[],i=[];let r=n;const s=n-Ds+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ds?l=Ip[o-n+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),v=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,I=T>2?0:-1,k=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(k,g*_*T),v.set(f,p*_*T);const M=[T,T,T,T,T,T];S.set(M,m*_*T)}const R=new An;R.setAttribute("position",new ui(y,g)),R.setAttribute("uv",new ui(v,p)),R.setAttribute("faceIndex",new ui(S,m)),t.push(R),r>Ds&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fp(n,t,e){const i=new vr(n,t,e);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function uw(n,t,e){const i=new Float32Array(Gr),r=new z(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bp(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function zp(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hw(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yu||l===ju,u=l===Zs||l===Js;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Up(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new Up(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function fw(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dw(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],T=y[v+1],A=y[v+2];f.push(R,T,T,A,A,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,T=v+1,A=v+2;f.push(R,T,T,A,A,R)}}else return;const p=new(Lg(f)?zg:Bg)(f,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pw(n,t,e,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,_){n.drawElements(s,_,a,d*l),e.update(_,s,1)}function h(d,_,g){if(g===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,a,d*l,g),e.update(_,s,g)}function f(d,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,a,d,0,g);let m=0;for(let y=0;y<g;y++)m+=_[y];e.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function mw(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function _w(n,t){return n[0]-t[0]}function gw(n,t){return Math.abs(t[1])-Math.abs(n[1])}function vw(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Fe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let at=function(){M.dispose(),s.delete(u),u.removeEventListener("dispose",at)};g!==void 0&&g.texture.dispose();const p=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let T=0;p===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let A=u.attributes.position.count*T,I=1;A>t.maxTextureSize&&(I=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const k=new Float32Array(A*I*4*_),M=new Ng(k,A,I,_);M.type=Pi,M.needsUpdate=!0;const P=T*4;for(let Z=0;Z<_;Z++){const O=v[Z],$=S[Z],G=R[Z],X=A*I*4*Z;for(let Y=0;Y<O.count;Y++){const ot=Y*P;p===!0&&(o.fromBufferAttribute(O,Y),k[X+ot+0]=o.x,k[X+ot+1]=o.y,k[X+ot+2]=o.z,k[X+ot+3]=0),m===!0&&(o.fromBufferAttribute($,Y),k[X+ot+4]=o.x,k[X+ot+5]=o.y,k[X+ot+6]=o.z,k[X+ot+7]=0),y===!0&&(o.fromBufferAttribute(G,Y),k[X+ot+8]=o.x,k[X+ot+9]=o.y,k[X+ot+10]=o.z,k[X+ot+11]=G.itemSize===4?o.w:1)}}g={count:_,texture:M,size:new yt(A,I)},s.set(u,g),u.addEventListener("dispose",at)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let p=0;for(let y=0;y<f.length;y++)p+=f[y];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",m),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==d){_=[];for(let v=0;v<d;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<d;v++){const S=_[v];S[0]=v,S[1]=f[v]}_.sort(gw);for(let v=0;v<8;v++)v<d&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(_w);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const S=a[v],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(g&&u.getAttribute("morphTarget"+v)!==g[R]&&u.setAttribute("morphTarget"+v,g[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),r[v]=T,m+=T):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xw(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Wg extends on{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:$r,u!==$r&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=rr),i===void 0&&u===to&&(i=jr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xg=new on,qg=new Wg(1,1);qg.compareFunction=Pg;const Yg=new Ng,jg=new nE,$g=new Gg,kp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function uo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cc(n,t){let e=Hp[t];e===void 0&&(e=new Int32Array(t),Hp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Mw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Sw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Tw(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Wp.set(i),n.uniformMatrix2fv(this.addr,!1,Wp),De(e,i)}}function bw(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Vp.set(i),n.uniformMatrix3fv(this.addr,!1,Vp),De(e,i)}}function ww(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Gp.set(i),n.uniformMatrix4fv(this.addr,!1,Gp),De(e,i)}}function Aw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Rw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Cw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Pw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Lw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Iw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Nw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Ow(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?qg:Xg;e.setTexture2D(t||s,r)}function Uw(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||jg,r)}function Fw(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||$g,r)}function Bw(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Yg,r)}function zw(n){switch(n){case 5126:return yw;case 35664:return Mw;case 35665:return Sw;case 35666:return Ew;case 35674:return Tw;case 35675:return bw;case 35676:return ww;case 5124:case 35670:return Aw;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return Pw;case 5125:return Lw;case 36294:return Dw;case 36295:return Iw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ow;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Bw}}function kw(n,t){n.uniform1fv(this.addr,t)}function Hw(n,t){const e=uo(t,this.size,2);n.uniform2fv(this.addr,e)}function Gw(n,t){const e=uo(t,this.size,3);n.uniform3fv(this.addr,e)}function Vw(n,t){const e=uo(t,this.size,4);n.uniform4fv(this.addr,e)}function Ww(n,t){const e=uo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Xw(n,t){const e=uo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qw(n,t){const e=uo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yw(n,t){n.uniform1iv(this.addr,t)}function jw(n,t){n.uniform2iv(this.addr,t)}function $w(n,t){n.uniform3iv(this.addr,t)}function Kw(n,t){n.uniform4iv(this.addr,t)}function Zw(n,t){n.uniform1uiv(this.addr,t)}function Jw(n,t){n.uniform2uiv(this.addr,t)}function Qw(n,t){n.uniform3uiv(this.addr,t)}function tA(n,t){n.uniform4uiv(this.addr,t)}function eA(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xg,s[o])}function nA(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||jg,s[o])}function iA(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$g,s[o])}function rA(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Yg,s[o])}function sA(n){switch(n){case 5126:return kw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return Ww;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return Yw;case 35667:case 35671:return jw;case 35668:case 35672:return $w;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Jw;case 36295:return Qw;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zw(e.type)}}class aA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sA(e.type)}}class lA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function Xp(n,t){n.seq.push(t),n.map[t.id]=t}function cA(n,t,e){const i=n.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),o=hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xp(e,c===void 0?new oA(a,n,t):new aA(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new lA(a),Xp(e,h)),e=h}}}class fl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);cA(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function qp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const uA=37297;let hA=0;function fA(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function dA(n){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(n);let i;switch(t===e?i="":t===Al&&e===wl?i="LinearDisplayP3ToLinearSRGB":t===wl&&e===Al&&(i="LinearSRGBToLinearDisplayP3"),n){case Mr:case oc:return[i,"LinearTransferOETF"];case Xn:case ef:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+fA(n.getShaderSource(t),o)}else return r}function pA(n,t){const e=dA(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mA(n,t){let e;switch(t){case _g:e="Linear";break;case gg:e="Reinhard";break;case vg:e="OptimizedCineon";break;case xg:e="ACESFilmic";break;case yg:e="AgX";break;case Mg:e="Neutral";break;case _S:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _A(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function gA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function vA(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xA(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Is(n){return n!==""}function jp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $p(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(yA,SA)}const MA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SA(n,t){let e=qt[t];if(e===void 0){const i=MA.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ju(e)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(n){return n.replace(EA,TA)}function TA(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bA(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===mg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function wA(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AA(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function RA(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case pS:t="ENVMAP_BLENDING_MIX";break;case mS:t="ENVMAP_BLENDING_ADD";break}return t}function CA(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function PA(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bA(e),c=wA(e),u=AA(e),h=RA(e),f=CA(e),d=e.isWebGL2?"":_A(e),_=gA(e),g=vA(s),p=r.createProgram();let m,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),y.length>0&&(y+=`
`)):(m=[Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),y=[d,Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?qt.tonemapping_pars_fragment:"",e.toneMapping!==fr?mA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,pA("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=Ju(o),o=jp(o,e),o=$p(o,e),a=Ju(a),a=jp(a,e),a=$p(a,e),o=Kp(o),a=Kp(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+m+o,R=v+y+a,T=qp(r,r.VERTEX_SHADER,S),A=qp(r,r.FRAGMENT_SHADER,R);r.attachShader(p,T),r.attachShader(p,A),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function I(at){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(T).trim(),$=r.getShaderInfoLog(A).trim();let G=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,T,A);else{const Y=Yp(r,T,"vertex"),ot=Yp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+at.name+`
Material Type: `+at.type+`

Program Info Log: `+Z+`
`+Y+`
`+ot)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(O===""||$==="")&&(X=!1);X&&(at.diagnostics={runnable:G,programLog:Z,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:y}})}r.deleteShader(T),r.deleteShader(A),k=new fl(r,p),M=xA(r,p)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,uA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hA++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}let LA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new IA(t),e.set(t,i)),i}}class IA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function NA(n,t,e,i,r,s,o){const a=new Og,l=new DA,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,P,at,Z,O){const $=Z.fog,G=O.geometry,X=M.isMeshStandardMaterial?Z.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),ot=Y&&Y.mapping===rc?Y.image.height:null,pt=g[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Ot=0;G.morphAttributes.position!==void 0&&(Ot=1),G.morphAttributes.normal!==void 0&&(Ot=2),G.morphAttributes.color!==void 0&&(Ot=3);let K,ht,Tt,W;if(pt){const ne=si[pt];K=ne.vertexShader,ht=ne.fragmentShader}else K=M.vertexShader,ht=M.fragmentShader,l.update(M),Tt=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const ct=n.getRenderTarget(),it=O.isInstancedMesh===!0,_t=O.isBatchedMesh===!0,Et=!!M.map,L=!!M.matcap,b=!!Y,w=!!M.aoMap,N=!!M.lightMap,U=!!M.bumpMap,H=!!M.normalMap,j=!!M.displacementMap,rt=!!M.emissiveMap,lt=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,V=M.iridescence>0,J=M.sheen>0,tt=M.transmission>0,bt=x&&!!M.anisotropyMap,wt=B&&!!M.clearcoatMap,ft=B&&!!M.clearcoatNormalMap,gt=B&&!!M.clearcoatRoughnessMap,It=V&&!!M.iridescenceMap,xt=V&&!!M.iridescenceThicknessMap,he=J&&!!M.sheenColorMap,zt=J&&!!M.sheenRoughnessMap,Nt=!!M.specularMap,Rt=!!M.specularColorMap,Pt=!!M.specularIntensityMap,D=tt&&!!M.transmissionMap,ut=tt&&!!M.thicknessMap,Dt=!!M.gradientMap,F=!!M.alphaMap,St=M.alphaTest>0,Q=!!M.alphaHash,vt=!!M.extensions;let Ct=fr;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ct=n.toneMapping);const $t={isWebGL2:h,shaderID:pt,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:ht,defines:M.defines,customVertexShaderID:Tt,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:_t,instancing:it,instancingColor:it&&O.instanceColor!==null,instancingMorph:it&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Mr,alphaToCoverage:!!M.alphaToCoverage,map:Et,matcap:L,envMap:b,envMapMode:b&&Y.mapping,envMapCubeUVHeight:ot,aoMap:w,lightMap:N,bumpMap:U,normalMap:H,displacementMap:d&&j,emissiveMap:rt,normalMapObjectSpace:H&&M.normalMapType===AS,normalMapTangentSpace:H&&M.normalMapType===sc,metalnessMap:lt,roughnessMap:E,anisotropy:x,anisotropyMap:bt,clearcoat:B,clearcoatMap:wt,clearcoatNormalMap:ft,clearcoatRoughnessMap:gt,iridescence:V,iridescenceMap:It,iridescenceThicknessMap:xt,sheen:J,sheenColorMap:he,sheenRoughnessMap:zt,specularMap:Nt,specularColorMap:Rt,specularIntensityMap:Pt,transmission:tt,transmissionMap:D,thicknessMap:ut,gradientMap:Dt,opaque:M.transparent===!1&&M.blending===Hs&&M.alphaToCoverage===!1,alphaMap:F,alphaTest:St,alphaHash:Q,combine:M.combine,mapUv:Et&&p(M.map.channel),aoMapUv:w&&p(M.aoMap.channel),lightMapUv:N&&p(M.lightMap.channel),bumpMapUv:U&&p(M.bumpMap.channel),normalMapUv:H&&p(M.normalMap.channel),displacementMapUv:j&&p(M.displacementMap.channel),emissiveMapUv:rt&&p(M.emissiveMap.channel),metalnessMapUv:lt&&p(M.metalnessMap.channel),roughnessMapUv:E&&p(M.roughnessMap.channel),anisotropyMapUv:bt&&p(M.anisotropyMap.channel),clearcoatMapUv:wt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&p(M.sheenRoughnessMap.channel),specularMapUv:Nt&&p(M.specularMap.channel),specularColorMapUv:Rt&&p(M.specularColorMap.channel),specularIntensityMapUv:Pt&&p(M.specularIntensityMap.channel),transmissionMapUv:D&&p(M.transmissionMap.channel),thicknessMapUv:ut&&p(M.thicknessMap.channel),alphaMapUv:F&&p(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(H||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Et||F),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ot,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&at.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ci,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:vt&&M.extensions.derivatives===!0,extensionFragDepth:vt&&M.extensions.fragDepth===!0,extensionDrawBuffers:vt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function y(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const at in M.defines)P.push(at),P.push(M.defines[at]);return M.isRawShaderMaterial===!1&&(v(P,M),S(P,M),P.push(n.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function v(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function S(M,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.instancingMorph&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.normalMapObjectSpace&&a.enable(7),P.normalMapTangentSpace&&a.enable(8),P.clearcoat&&a.enable(9),P.iridescence&&a.enable(10),P.alphaTest&&a.enable(11),P.vertexColors&&a.enable(12),P.vertexAlphas&&a.enable(13),P.vertexUv1s&&a.enable(14),P.vertexUv2s&&a.enable(15),P.vertexUv3s&&a.enable(16),P.vertexTangents&&a.enable(17),P.anisotropy&&a.enable(18),P.alphaHash&&a.enable(19),P.batching&&a.enable(20),M.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),M.push(a.mask)}function R(M){const P=g[M.type];let at;if(P){const Z=si[P];at=rf.clone(Z.uniforms)}else at=M.uniforms;return at}function T(M,P){let at;for(let Z=0,O=u.length;Z<O;Z++){const $=u[Z];if($.cacheKey===P){at=$,++at.usedTimes;break}}return at===void 0&&(at=new PA(n,P,M,s),u.push(at)),at}function A(M){if(--M.usedTimes===0){const P=u.indexOf(M);u[P]=u[u.length-1],u.pop(),M.destroy()}}function I(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:k}}function OA(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function UA(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,d,_,g,p){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||UA),i.length>1&&i.sort(f||Jp),r.length>1&&r.sort(f||Jp)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function FA(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qp,n.set(i,[o])):r>=s.length?(o=new Qp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function BA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Bt};break;case"SpotLight":e={position:new z,direction:new z,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function zA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let kA=0;function HA(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GA(n,t){const e=new BA,i=zA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new _e,a=new _e;function l(u,h){let f=0,d=0,_=0;for(let at=0;at<9;at++)r.probe[at].set(0,0,0);let g=0,p=0,m=0,y=0,v=0,S=0,R=0,T=0,A=0,I=0,k=0;u.sort(HA);const M=h===!0?Math.PI:1;for(let at=0,Z=u.length;at<Z;at++){const O=u[at],$=O.color,G=O.intensity,X=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=$.r*G*M,d+=$.g*G*M,_+=$.b*G*M;else if(O.isLightProbe){for(let ot=0;ot<9;ot++)r.probe[ot].addScaledVector(O.sh.coefficients[ot],G);k++}else if(O.isDirectionalLight){const ot=e.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const pt=O.shadow,dt=i.get(O);dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,r.directionalShadow[g]=dt,r.directionalShadowMap[g]=Y,r.directionalShadowMatrix[g]=O.shadow.matrix,S++}r.directional[g]=ot,g++}else if(O.isSpotLight){const ot=e.get(O);ot.position.setFromMatrixPosition(O.matrixWorld),ot.color.copy($).multiplyScalar(G*M),ot.distance=X,ot.coneCos=Math.cos(O.angle),ot.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ot.decay=O.decay,r.spot[m]=ot;const pt=O.shadow;if(O.map&&(r.spotLightMap[A]=O.map,A++,pt.updateMatrices(O),O.castShadow&&I++),r.spotLightMatrix[m]=pt.matrix,O.castShadow){const dt=i.get(O);dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,r.spotShadow[m]=dt,r.spotShadowMap[m]=Y,T++}m++}else if(O.isRectAreaLight){const ot=e.get(O);ot.color.copy($).multiplyScalar(G),ot.halfWidth.set(O.width*.5,0,0),ot.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=ot,y++}else if(O.isPointLight){const ot=e.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity*M),ot.distance=O.distance,ot.decay=O.decay,O.castShadow){const pt=O.shadow,dt=i.get(O);dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,dt.shadowCameraNear=pt.camera.near,dt.shadowCameraFar=pt.camera.far,r.pointShadow[p]=dt,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=O.shadow.matrix,R++}r.point[p]=ot,p++}else if(O.isHemisphereLight){const ot=e.get(O);ot.skyColor.copy(O.color).multiplyScalar(G*M),ot.groundColor.copy(O.groundColor).multiplyScalar(G*M),r.hemi[v]=ot,v++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==g||P.pointLength!==p||P.spotLength!==m||P.rectAreaLength!==y||P.hemiLength!==v||P.numDirectionalShadows!==S||P.numPointShadows!==R||P.numSpotShadows!==T||P.numSpotMaps!==A||P.numLightProbes!==k)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,P.directionalLength=g,P.pointLength=p,P.spotLength=m,P.rectAreaLength=y,P.hemiLength=v,P.numDirectionalShadows=S,P.numPointShadows=R,P.numSpotShadows=T,P.numSpotMaps=A,P.numLightProbes=k,r.version=kA++)}function c(u,h){let f=0,d=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),f++}else if(S.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const R=r.rectArea[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const R=r.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function tm(n,t){const e=new GA(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VA(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new tm(n,t),e.set(s,[l])):o>=a.length?(l=new tm(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class WA extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XA extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jA(n,t,e){let i=new sf;const r=new yt,s=new yt,o=new Fe,a=new WA({depthPacking:wS}),l=new XA,c={},u=e.maxTextureSize,h={[Ui]:cn,[cn]:Ui,[Ci]:Ci},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:qA,fragmentShader:YA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $e(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let m=this.type;this.render=function(T,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const k=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),at=n.state;at.setBlending(Ni),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const Z=m!==bi&&this.type===bi,O=m===bi&&this.type!==bi;for(let $=0,G=T.length;$<G;$++){const X=T[$],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ot=Y.getFrameExtents();if(r.multiply(ot),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,Y.mapSize.y=s.y)),Y.map===null||Z===!0||O===!0){const dt=this.type!==bi?{minFilter:nn,magFilter:nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vr(r.x,r.y,dt),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const pt=Y.getViewportCount();for(let dt=0;dt<pt;dt++){const Mt=Y.getViewport(dt);o.set(s.x*Mt.x,s.y*Mt.y,s.x*Mt.z,s.y*Mt.w),at.viewport(o),Y.updateMatrices(X,dt),i=Y.getFrustum(),S(A,I,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===bi&&y(Y,I),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(k,M,P)};function y(T,A){const I=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,I,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,I,d,g,null)}function v(T,A,I,k){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const at=M.uuid,Z=A.uuid;let O=c[at];O===void 0&&(O={},c[at]=O);let $=O[Z];$===void 0&&($=M.clone(),O[Z]=$,A.addEventListener("dispose",R)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,k===bi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const at=n.properties.get(M);at.light=I}return M}function S(T,A,I,k,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const Z=t.update(T),O=T.material;if(Array.isArray(O)){const $=Z.groups;for(let G=0,X=$.length;G<X;G++){const Y=$[G],ot=O[Y.materialIndex];if(ot&&ot.visible){const pt=v(T,ot,k,M);T.onBeforeShadow(n,T,A,I,Z,pt,Y),n.renderBufferDirect(I,null,Z,pt,T,Y),T.onAfterShadow(n,T,A,I,Z,pt,Y)}}}else if(O.visible){const $=v(T,O,k,M);T.onBeforeShadow(n,T,A,I,Z,$,null),n.renderBufferDirect(I,null,Z,$,T,null),T.onAfterShadow(n,T,A,I,Z,$,null)}}const at=T.children;for(let Z=0,O=at.length;Z<O;Z++)S(at[Z],A,I,k,M)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const k=c[I],M=T.target.uuid;M in k&&(k[M].dispose(),delete k[M])}}}function $A(n,t,e){const i=e.isWebGL2;function r(){let F=!1;const St=new Fe;let Q=null;const vt=new Fe(0,0,0,0);return{setMask:function(Ct){Q!==Ct&&!F&&(n.colorMask(Ct,Ct,Ct,Ct),Q=Ct)},setLocked:function(Ct){F=Ct},setClear:function(Ct,$t,ne,oe,Se){Se===!0&&(Ct*=oe,$t*=oe,ne*=oe),St.set(Ct,$t,ne,oe),vt.equals(St)===!1&&(n.clearColor(Ct,$t,ne,oe),vt.copy(St))},reset:function(){F=!1,Q=null,vt.set(-1,0,0,0)}}}function s(){let F=!1,St=null,Q=null,vt=null;return{setTest:function(Ct){Ct?it(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Ct){St!==Ct&&!F&&(n.depthMask(Ct),St=Ct)},setFunc:function(Ct){if(Q!==Ct){switch(Ct){case aS:n.depthFunc(n.NEVER);break;case lS:n.depthFunc(n.ALWAYS);break;case cS:n.depthFunc(n.LESS);break;case El:n.depthFunc(n.LEQUAL);break;case uS:n.depthFunc(n.EQUAL);break;case hS:n.depthFunc(n.GEQUAL);break;case fS:n.depthFunc(n.GREATER);break;case dS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Ct}},setLocked:function(Ct){F=Ct},setClear:function(Ct){vt!==Ct&&(n.clearDepth(Ct),vt=Ct)},reset:function(){F=!1,St=null,Q=null,vt=null}}}function o(){let F=!1,St=null,Q=null,vt=null,Ct=null,$t=null,ne=null,oe=null,Se=null;return{setTest:function(te){F||(te?it(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(te){St!==te&&!F&&(n.stencilMask(te),St=te)},setFunc:function(te,fe,He){(Q!==te||vt!==fe||Ct!==He)&&(n.stencilFunc(te,fe,He),Q=te,vt=fe,Ct=He)},setOp:function(te,fe,He){($t!==te||ne!==fe||oe!==He)&&(n.stencilOp(te,fe,He),$t=te,ne=fe,oe=He)},setLocked:function(te){F=te},setClear:function(te){Se!==te&&(n.clearStencil(te),Se=te)},reset:function(){F=!1,St=null,Q=null,vt=null,Ct=null,$t=null,ne=null,oe=null,Se=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,S=null,R=null,T=null,A=null,I=null,k=new Bt(0,0,0),M=0,P=!1,at=null,Z=null,O=null,$=null,G=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ot=0;const pt=n.getParameter(n.VERSION);pt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(pt)[1]),Y=ot>=1):pt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),Y=ot>=2);let dt=null,Mt={};const Ot=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ht=new Fe().fromArray(Ot),Tt=new Fe().fromArray(K);function W(F,St,Q,vt){const Ct=new Uint8Array(4),$t=n.createTexture();n.bindTexture(F,$t),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<Q;ne++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(St,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(St+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return $t}const ct={};ct[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ct[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),it(n.DEPTH_TEST),l.setFunc(El),j(!1),rt(Id),it(n.CULL_FACE),U(Ni);function it(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function _t(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function Et(F,St){return d[F]!==St?(n.bindFramebuffer(F,St),d[F]=St,i&&(F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=St),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=St)),!0):!1}function L(F,St){let Q=g,vt=!1;if(F){Q=_.get(St),Q===void 0&&(Q=[],_.set(St,Q));const Ct=F.textures;if(Q.length!==Ct.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let $t=0,ne=Ct.length;$t<ne;$t++)Q[$t]=n.COLOR_ATTACHMENT0+$t;Q.length=Ct.length,vt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,vt=!0);if(vt)if(e.isWebGL2)n.drawBuffers(Q);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function b(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const w={[Hr]:n.FUNC_ADD,[qM]:n.FUNC_SUBTRACT,[YM]:n.FUNC_REVERSE_SUBTRACT};if(i)w[Fd]=n.MIN,w[Bd]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(w[Fd]=F.MIN_EXT,w[Bd]=F.MAX_EXT)}const N={[jM]:n.ZERO,[$M]:n.ONE,[KM]:n.SRC_COLOR,[Xu]:n.SRC_ALPHA,[nS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[JM]:n.DST_ALPHA,[ZM]:n.ONE_MINUS_SRC_COLOR,[qu]:n.ONE_MINUS_SRC_ALPHA,[eS]:n.ONE_MINUS_DST_COLOR,[QM]:n.ONE_MINUS_DST_ALPHA,[iS]:n.CONSTANT_COLOR,[rS]:n.ONE_MINUS_CONSTANT_COLOR,[sS]:n.CONSTANT_ALPHA,[oS]:n.ONE_MINUS_CONSTANT_ALPHA};function U(F,St,Q,vt,Ct,$t,ne,oe,Se,te){if(F===Ni){m===!0&&(_t(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),F!==XM){if(F!==y||te!==P){if((v!==Hr||T!==Hr)&&(n.blendEquation(n.FUNC_ADD),v=Hr,T=Hr),te)switch(F){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ud:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ud:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,R=null,A=null,I=null,k.set(0,0,0),M=0,y=F,P=te}return}Ct=Ct||St,$t=$t||Q,ne=ne||vt,(St!==v||Ct!==T)&&(n.blendEquationSeparate(w[St],w[Ct]),v=St,T=Ct),(Q!==S||vt!==R||$t!==A||ne!==I)&&(n.blendFuncSeparate(N[Q],N[vt],N[$t],N[ne]),S=Q,R=vt,A=$t,I=ne),(oe.equals(k)===!1||Se!==M)&&(n.blendColor(oe.r,oe.g,oe.b,Se),k.copy(oe),M=Se),y=F,P=!1}function H(F,St){F.side===Ci?_t(n.CULL_FACE):it(n.CULL_FACE);let Q=F.side===cn;St&&(Q=!Q),j(Q),F.blending===Hs&&F.transparent===!1?U(Ni):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const vt=F.stencilWrite;c.setTest(vt),vt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),E(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){at!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),at=F)}function rt(F){F!==VM?(it(n.CULL_FACE),F!==Z&&(F===Id?n.cullFace(n.BACK):F===WM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),Z=F}function lt(F){F!==O&&(Y&&n.lineWidth(F),O=F)}function E(F,St,Q){F?(it(n.POLYGON_OFFSET_FILL),($!==St||G!==Q)&&(n.polygonOffset(St,Q),$=St,G=Q)):_t(n.POLYGON_OFFSET_FILL)}function x(F){F?it(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function B(F){F===void 0&&(F=n.TEXTURE0+X-1),dt!==F&&(n.activeTexture(F),dt=F)}function V(F,St,Q){Q===void 0&&(dt===null?Q=n.TEXTURE0+X-1:Q=dt);let vt=Mt[Q];vt===void 0&&(vt={type:void 0,texture:void 0},Mt[Q]=vt),(vt.type!==F||vt.texture!==St)&&(dt!==Q&&(n.activeTexture(Q),dt=Q),n.bindTexture(F,St||ct[F]),vt.type=F,vt.texture=St)}function J(){const F=Mt[dt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(F){ht.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ht.copy(F))}function Pt(F){Tt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Tt.copy(F))}function D(F,St){let Q=h.get(St);Q===void 0&&(Q=new WeakMap,h.set(St,Q));let vt=Q.get(F);vt===void 0&&(vt=n.getUniformBlockIndex(St,F.name),Q.set(F,vt))}function ut(F,St){const vt=h.get(St).get(F);u.get(St)!==vt&&(n.uniformBlockBinding(St,vt,F.__bindingPointIndex),u.set(St,vt))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},dt=null,Mt={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,S=null,R=null,T=null,A=null,I=null,k=new Bt(0,0,0),M=0,P=!1,at=null,Z=null,O=null,$=null,G=null,ht.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:it,disable:_t,bindFramebuffer:Et,drawBuffers:L,useProgram:b,setBlending:U,setMaterial:H,setFlipSided:j,setCullFace:rt,setLineWidth:lt,setPolygonOffset:E,setScissorTest:x,activeTexture:B,bindTexture:V,unbindTexture:J,compressedTexImage2D:tt,compressedTexImage3D:bt,texImage2D:zt,texImage3D:Nt,updateUBOMapping:D,uniformBlockBinding:ut,texStorage2D:xt,texStorage3D:he,texSubImage2D:wt,texSubImage3D:ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:It,scissor:Rt,viewport:Pt,reset:Dt}}function KA(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new yt,h=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return _?new OffscreenCanvas(E,x):Zo("canvas")}function p(E,x,B,V){let J=1;const tt=lt(E);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const bt=x?Cl:Math.floor,wt=bt(J*tt.width),ft=bt(J*tt.height);f===void 0&&(f=g(wt,ft));const gt=B?g(wt,ft):f;return gt.width=wt,gt.height=ft,gt.getContext("2d").drawImage(E,0,0,wt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+wt+"x"+ft+")."),gt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){const x=lt(E);return Zu(x.width)&&Zu(x.height)}function y(E){return a?!1:E.wrapS!==Yn||E.wrapT!==Yn||E.minFilter!==nn&&E.minFilter!==ln}function v(E,x){return E.generateMipmaps&&x&&E.minFilter!==nn&&E.minFilter!==ln}function S(E){n.generateMipmap(E)}function R(E,x,B,V,J=!1){if(a===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let tt=x;if(x===n.RED&&(B===n.FLOAT&&(tt=n.R32F),B===n.HALF_FLOAT&&(tt=n.R16F),B===n.UNSIGNED_BYTE&&(tt=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.R8UI),B===n.UNSIGNED_SHORT&&(tt=n.R16UI),B===n.UNSIGNED_INT&&(tt=n.R32UI),B===n.BYTE&&(tt=n.R8I),B===n.SHORT&&(tt=n.R16I),B===n.INT&&(tt=n.R32I)),x===n.RG&&(B===n.FLOAT&&(tt=n.RG32F),B===n.HALF_FLOAT&&(tt=n.RG16F),B===n.UNSIGNED_BYTE&&(tt=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.RG8UI),B===n.UNSIGNED_SHORT&&(tt=n.RG16UI),B===n.UNSIGNED_INT&&(tt=n.RG32UI),B===n.BYTE&&(tt=n.RG8I),B===n.SHORT&&(tt=n.RG16I),B===n.INT&&(tt=n.RG32I)),x===n.RGBA){const bt=J?bl:re.getTransfer(V);B===n.FLOAT&&(tt=n.RGBA32F),B===n.HALF_FLOAT&&(tt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(tt=bt===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(E,x,B){return v(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){return E===nn||E===zd||E===_o?n.NEAREST:n.LINEAR}function I(E){const x=E.target;x.removeEventListener("dispose",I),M(x),x.isVideoTexture&&h.delete(x)}function k(E){const x=E.target;x.removeEventListener("dispose",k),at(x)}function M(E){const x=i.get(E);if(x.__webglInit===void 0)return;const B=E.source,V=d.get(B);if(V){const J=V[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(E),Object.keys(V).length===0&&d.delete(B)}i.remove(E)}function P(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const B=E.source,V=d.get(B);delete V[x.__cacheKey],o.memory.textures--}function at(E){const x=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let J=0;J<x.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[V][J]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=E.textures;for(let V=0,J=B.length;V<J;V++){const tt=i.get(B[V]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(B[V])}i.remove(E)}let Z=0;function O(){Z=0}function $(){const E=Z;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),Z+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function X(E,x){const B=i.get(E);if(E.isVideoTexture&&j(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,E,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function Y(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){Tt(B,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function ot(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){Tt(B,E,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function pt(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){W(B,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const dt={[Tl]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[$u]:n.MIRRORED_REPEAT},Mt={[nn]:n.NEAREST,[zd]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Uc]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},Ot={[RS]:n.NEVER,[NS]:n.ALWAYS,[CS]:n.LESS,[Pg]:n.LEQUAL,[PS]:n.EQUAL,[IS]:n.GEQUAL,[LS]:n.GREATER,[DS]:n.NOTEQUAL};function K(E,x,B){if(x.type===Pi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===Uc||x.magFilter===_o||x.magFilter===Vr||x.minFilter===ln||x.minFilter===Uc||x.minFilter===_o||x.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(n.texParameteri(E,n.TEXTURE_WRAP_S,dt[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,dt[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,dt[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Mt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Mt[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Yn||x.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==nn&&x.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==_o&&x.minFilter!==Vr||x.type===Pi&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Qs&&t.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ht(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",I));const V=x.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const tt=G(x);if(tt!==E.__cacheKey){J[tt]===void 0&&(J[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[tt].usedTimes++;const bt=J[E.__cacheKey];bt!==void 0&&(J[E.__cacheKey].usedTimes--,bt.usedTimes===0&&P(x)),E.__cacheKey=tt,E.__webglTexture=J[tt].texture}return B}function Tt(E,x,B){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const J=ht(E,x),tt=x.source;e.bindTexture(V,E.__webglTexture,n.TEXTURE0+B);const bt=i.get(tt);if(tt.version!==bt.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const wt=re.getPrimaries(re.workingColorSpace),ft=x.colorSpace===nr?null:re.getPrimaries(x.colorSpace),gt=x.colorSpace===nr||wt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const It=y(x)&&m(x.image)===!1;let xt=p(x.image,It,!1,r.maxTextureSize);xt=rt(x,xt);const he=m(xt)||a,zt=s.convert(x.format,x.colorSpace);let Nt=s.convert(x.type),Rt=R(x.internalFormat,zt,Nt,x.colorSpace,x.isVideoTexture);K(V,x,he);let Pt;const D=x.mipmaps,ut=a&&x.isVideoTexture!==!0&&Rt!==Cg,Dt=bt.__version===void 0||J===!0,F=tt.dataReady,St=T(x,xt,he);if(x.isDepthTexture)Rt=n.DEPTH_COMPONENT,a?x.type===Pi?Rt=n.DEPTH_COMPONENT32F:x.type===rr?Rt=n.DEPTH_COMPONENT24:x.type===jr?Rt=n.DEPTH24_STENCIL8:Rt=n.DEPTH_COMPONENT16:x.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===$r&&Rt===n.DEPTH_COMPONENT&&x.type!==tf&&x.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=rr,Nt=s.convert(x.type)),x.format===to&&Rt===n.DEPTH_COMPONENT&&(Rt=n.DEPTH_STENCIL,x.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=jr,Nt=s.convert(x.type))),Dt&&(ut?e.texStorage2D(n.TEXTURE_2D,1,Rt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Rt,xt.width,xt.height,0,zt,Nt,null));else if(x.isDataTexture)if(D.length>0&&he){ut&&Dt&&e.texStorage2D(n.TEXTURE_2D,St,Rt,D[0].width,D[0].height);for(let Q=0,vt=D.length;Q<vt;Q++)Pt=D[Q],ut?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,zt,Nt,Pt.data):e.texImage2D(n.TEXTURE_2D,Q,Rt,Pt.width,Pt.height,0,zt,Nt,Pt.data);x.generateMipmaps=!1}else ut?(Dt&&e.texStorage2D(n.TEXTURE_2D,St,Rt,xt.width,xt.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,zt,Nt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,xt.width,xt.height,0,zt,Nt,xt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ut&&Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Rt,D[0].width,D[0].height,xt.depth);for(let Q=0,vt=D.length;Q<vt;Q++)Pt=D[Q],x.format!==jn?zt!==null?ut?F&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,xt.depth,zt,Pt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Rt,Pt.width,Pt.height,xt.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,xt.depth,zt,Nt,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Rt,Pt.width,Pt.height,xt.depth,0,zt,Nt,Pt.data)}else{ut&&Dt&&e.texStorage2D(n.TEXTURE_2D,St,Rt,D[0].width,D[0].height);for(let Q=0,vt=D.length;Q<vt;Q++)Pt=D[Q],x.format!==jn?zt!==null?ut?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,zt,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Rt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,zt,Nt,Pt.data):e.texImage2D(n.TEXTURE_2D,Q,Rt,Pt.width,Pt.height,0,zt,Nt,Pt.data)}else if(x.isDataArrayTexture)ut?(Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Rt,xt.width,xt.height,xt.depth),F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,zt,Nt,xt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,xt.width,xt.height,xt.depth,0,zt,Nt,xt.data);else if(x.isData3DTexture)ut?(Dt&&e.texStorage3D(n.TEXTURE_3D,St,Rt,xt.width,xt.height,xt.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,zt,Nt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,xt.width,xt.height,xt.depth,0,zt,Nt,xt.data);else if(x.isFramebufferTexture){if(Dt)if(ut)e.texStorage2D(n.TEXTURE_2D,St,Rt,xt.width,xt.height);else{let Q=xt.width,vt=xt.height;for(let Ct=0;Ct<St;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Rt,Q,vt,0,zt,Nt,null),Q>>=1,vt>>=1}}else if(D.length>0&&he){if(ut&&Dt){const Q=lt(D[0]);e.texStorage2D(n.TEXTURE_2D,St,Rt,Q.width,Q.height)}for(let Q=0,vt=D.length;Q<vt;Q++)Pt=D[Q],ut?F&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,zt,Nt,Pt):e.texImage2D(n.TEXTURE_2D,Q,Rt,zt,Nt,Pt);x.generateMipmaps=!1}else if(ut){if(Dt){const Q=lt(xt);e.texStorage2D(n.TEXTURE_2D,St,Rt,Q.width,Q.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,zt,Nt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Rt,zt,Nt,xt);v(x,he)&&S(V),bt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function W(E,x,B){if(x.image.length!==6)return;const V=ht(E,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const tt=i.get(J);if(J.version!==tt.__version||V===!0){e.activeTexture(n.TEXTURE0+B);const bt=re.getPrimaries(re.workingColorSpace),wt=x.colorSpace===nr?null:re.getPrimaries(x.colorSpace),ft=x.colorSpace===nr||bt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const gt=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!gt&&!It?xt[Q]=p(x.image[Q],!1,!0,r.maxCubemapSize):xt[Q]=It?x.image[Q].image:x.image[Q],xt[Q]=rt(x,xt[Q]);const he=xt[0],zt=m(he)||a,Nt=s.convert(x.format,x.colorSpace),Rt=s.convert(x.type),Pt=R(x.internalFormat,Nt,Rt,x.colorSpace),D=a&&x.isVideoTexture!==!0,ut=tt.__version===void 0||V===!0,Dt=J.dataReady;let F=T(x,he,zt);K(n.TEXTURE_CUBE_MAP,x,zt);let St;if(gt){D&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,F,Pt,he.width,he.height);for(let Q=0;Q<6;Q++){St=xt[Q].mipmaps;for(let vt=0;vt<St.length;vt++){const Ct=St[vt];x.format!==jn?Nt!==null?D?Dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,Ct.width,Ct.height,Nt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Pt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,Ct.width,Ct.height,Nt,Rt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Pt,Ct.width,Ct.height,0,Nt,Rt,Ct.data)}}}else{if(St=x.mipmaps,D&&ut){St.length>0&&F++;const Q=lt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,F,Pt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(It){D?Dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Nt,Rt,xt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pt,xt[Q].width,xt[Q].height,0,Nt,Rt,xt[Q].data);for(let vt=0;vt<St.length;vt++){const $t=St[vt].image[Q].image;D?Dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,$t.width,$t.height,Nt,Rt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Pt,$t.width,$t.height,0,Nt,Rt,$t.data)}}else{D?Dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Nt,Rt,xt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pt,Nt,Rt,xt[Q]);for(let vt=0;vt<St.length;vt++){const Ct=St[vt];D?Dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Nt,Rt,Ct.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Pt,Nt,Rt,Ct.image[Q])}}}v(x,zt)&&S(n.TEXTURE_CUBE_MAP),tt.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ct(E,x,B,V,J,tt){const bt=s.convert(B.format,B.colorSpace),wt=s.convert(B.type),ft=R(B.internalFormat,bt,wt,B.colorSpace);if(!i.get(x).__hasExternalTextures){const It=Math.max(1,x.width>>tt),xt=Math.max(1,x.height>>tt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,ft,It,xt,x.depth,0,bt,wt,null):e.texImage2D(J,tt,ft,It,xt,0,bt,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),H(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,i.get(B).__webglTexture,0,U(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,i.get(B).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(E,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let V=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||H(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===Pi?V=n.DEPTH_COMPONENT32F:J.type===rr&&(V=n.DEPTH_COMPONENT24));const tt=U(x);H(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,V,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,V,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const V=U(x);B&&H(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):H(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const V=x.textures;for(let J=0;J<V.length;J++){const tt=V[J],bt=s.convert(tt.format,tt.colorSpace),wt=s.convert(tt.type),ft=R(tt.internalFormat,bt,wt,tt.colorSpace),gt=U(x);B&&H(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,ft,x.width,x.height):H(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const V=i.get(x.depthTexture).__webglTexture,J=U(x);if(x.depthTexture.format===$r)H(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(x.depthTexture.format===to)H(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Et(E){const x=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_t(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=n.createRenderbuffer(),it(x.__webglDepthbuffer[V],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),it(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function L(E,x,B){const V=i.get(E);x!==void 0&&ct(V.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Et(E)}function b(E){const x=E.texture,B=i.get(E),V=i.get(x);E.addEventListener("dispose",k);const J=E.textures,tt=E.isWebGLCubeRenderTarget===!0,bt=J.length>1,wt=m(E)||a;if(bt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,o.memory.textures++),tt){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let gt=0;gt<x.mipmaps.length;gt++)B.__webglFramebuffer[ft][gt]=n.createFramebuffer()}else B.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<x.mipmaps.length;ft++)B.__webglFramebuffer[ft]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(bt)if(r.drawBuffers)for(let ft=0,gt=J.length;ft<gt;ft++){const It=i.get(J[ft]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&H(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<J.length;ft++){const gt=J[ft];B.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const It=s.convert(gt.format,gt.colorSpace),xt=s.convert(gt.type),he=R(gt.internalFormat,It,xt,gt.colorSpace,E.isXRRenderTarget===!0),zt=U(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,he,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),it(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),K(n.TEXTURE_CUBE_MAP,x,wt);for(let ft=0;ft<6;ft++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)ct(B.__webglFramebuffer[ft][gt],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else ct(B.__webglFramebuffer[ft],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);v(x,wt)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ft=0,gt=J.length;ft<gt;ft++){const It=J[ft],xt=i.get(It);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),K(n.TEXTURE_2D,It,wt),ct(B.__webglFramebuffer,E,It,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),v(It,wt)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ft=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,V.__webglTexture),K(ft,x,wt),a&&x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)ct(B.__webglFramebuffer[gt],E,x,n.COLOR_ATTACHMENT0,ft,gt);else ct(B.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ft,0);v(x,wt)&&S(ft),e.unbindTexture()}E.depthBuffer&&Et(E)}function w(E){const x=m(E)||a,B=E.textures;for(let V=0,J=B.length;V<J;V++){const tt=B[V];if(v(tt,x)){const bt=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,wt=i.get(tt).__webglTexture;e.bindTexture(bt,wt),S(bt),e.unbindTexture()}}}function N(E){if(a&&E.samples>0&&H(E)===!1){const x=E.textures,B=E.width,V=E.height;let J=n.COLOR_BUFFER_BIT;const tt=[],bt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(E),ft=x.length>1;if(ft)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){tt.push(n.COLOR_ATTACHMENT0+gt),E.depthBuffer&&tt.push(bt);const It=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(It===!1&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ft&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]),It===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),ft){const xt=i.get(x[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,B,V,0,0,B,V,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const It=i.get(x[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function U(E){return Math.min(r.maxSamples,E.samples)}function H(E){const x=i.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function j(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function rt(E,x){const B=E.colorSpace,V=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ku||B!==Mr&&B!==nr&&(re.getTransfer(B)===le?a===!1?t.has("EXT_sRGB")===!0&&V===jn?(E.format=Ku,E.minFilter=ln,E.generateMipmaps=!1):x=Dg.sRGBToLinear(x):(V!==jn||J!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function lt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=ot,this.setTextureCube=pt,this.rebindTextures=L,this.setupRenderTarget=b,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=H}function ZA(n,t,e){const i=e.isWebGL2;function r(s,o=nr){let a;const l=re.getTransfer(o);if(s===dr)return n.UNSIGNED_BYTE;if(s===Tg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===bg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gS)return n.BYTE;if(s===vS)return n.SHORT;if(s===tf)return n.UNSIGNED_SHORT;if(s===Eg)return n.INT;if(s===rr)return n.UNSIGNED_INT;if(s===Pi)return n.FLOAT;if(s===Qs)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xS)return n.ALPHA;if(s===jn)return n.RGBA;if(s===yS)return n.LUMINANCE;if(s===MS)return n.LUMINANCE_ALPHA;if(s===$r)return n.DEPTH_COMPONENT;if(s===to)return n.DEPTH_STENCIL;if(s===Ku)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===SS)return n.RED;if(s===wg)return n.RED_INTEGER;if(s===ES)return n.RG;if(s===Ag)return n.RG_INTEGER;if(s===Rg)return n.RGBA_INTEGER;if(s===Fc||s===Bc||s===zc||s===kc)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kd||s===Hd||s===Gd||s===Vd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cg)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wd||s===Xd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wd)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qd||s===Yd||s===jd||s===$d||s===Kd||s===Zd||s===Jd||s===Qd||s===tp||s===ep||s===np||s===ip||s===rp||s===sp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qd)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ep)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===op||s===ap)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Hc)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ap)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===TS||s===lp||s===cp||s===up)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===up)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class JA extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zn extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new on,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ei({extensions:{fragDepth:!0},vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $e(new lc(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class i2 extends os{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new n2,p=e.getContextAttributes();let m=null,y=null;const v=[],S=[],R=new yt;let T=null;const A=new Nn;A.layers.enable(1),A.viewport=new Fe;const I=new Nn;I.layers.enable(2),I.viewport=new Fe;const k=[A,I],M=new JA;M.layers.enable(1),M.layers.enable(2);let P=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=v[K];return ht===void 0&&(ht=new fu,v[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=v[K];return ht===void 0&&(ht=new fu,v[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=v[K];return ht===void 0&&(ht=new fu,v[K]=ht),ht.getHandSpace()};function Z(K){const ht=S.indexOf(K.inputSource);if(ht===-1)return;const Tt=v[ht];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,c||o),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",$);for(let K=0;K<v.length;K++){const ht=S[K];ht!==null&&(S[K]=null,v[K].disconnect(ht))}P=null,at=null,g.reset(),t.setRenderTarget(m),d=null,f=null,h=null,r=null,y=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",O),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ht={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ht),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new vr(d.framebufferWidth,d.framebufferHeight,{format:jn,type:dr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ht=null,Tt=null,W=null;p.depth&&(W=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=p.stencil?to:$r,Tt=p.stencil?jr:rr);const ct={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new vr(f.textureWidth,f.textureHeight,{format:jn,type:dr,depthTexture:new Wg(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const it=t.properties.get(y);it.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ot.setContext(r),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(K){for(let ht=0;ht<K.removed.length;ht++){const Tt=K.removed[ht],W=S.indexOf(Tt);W>=0&&(S[W]=null,v[W].disconnect(Tt))}for(let ht=0;ht<K.added.length;ht++){const Tt=K.added[ht];let W=S.indexOf(Tt);if(W===-1){for(let it=0;it<v.length;it++)if(it>=S.length){S.push(Tt),W=it;break}else if(S[it]===null){S[it]=Tt,W=it;break}if(W===-1)break}const ct=v[W];ct&&ct.connect(Tt)}}const G=new z,X=new z;function Y(K,ht,Tt){G.setFromMatrixPosition(ht.matrixWorld),X.setFromMatrixPosition(Tt.matrixWorld);const W=G.distanceTo(X),ct=ht.projectionMatrix.elements,it=Tt.projectionMatrix.elements,_t=ct[14]/(ct[10]-1),Et=ct[14]/(ct[10]+1),L=(ct[9]+1)/ct[5],b=(ct[9]-1)/ct[5],w=(ct[8]-1)/ct[0],N=(it[8]+1)/it[0],U=_t*w,H=_t*N,j=W/(-w+N),rt=j*-w;ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(j),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const lt=_t+j,E=Et+j,x=U-rt,B=H+(W-rt),V=L*Et/E*lt,J=b*Et/E*lt;K.projectionMatrix.makePerspective(x,B,V,J,lt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function ot(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;g.texture!==null&&(K.near=g.depthNear,K.far=g.depthFar),M.near=I.near=A.near=K.near,M.far=I.far=A.far=K.far,(P!==M.near||at!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,at=M.far,A.near=P,A.far=at,I.near=P,I.far=at,A.updateProjectionMatrix(),I.updateProjectionMatrix(),K.updateProjectionMatrix());const ht=K.parent,Tt=M.cameras;ot(M,ht);for(let W=0;W<Tt.length;W++)ot(Tt[W],ht);Tt.length===2?Y(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),pt(K,M,ht)};function pt(K,ht,Tt){Tt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ko*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null};let dt=null;function Mt(K,ht){if(u=ht.getViewerPose(c||o),_=ht,u!==null){const Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let W=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let it=0;it<Tt.length;it++){const _t=Tt[it];let Et=null;if(d!==null)Et=d.getViewport(_t);else{const b=h.getViewSubImage(f,_t);Et=b.viewport,it===0&&(t.setRenderTargetTextures(y,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(y))}let L=k[it];L===void 0&&(L=new Nn,L.layers.enable(it),L.viewport=new Fe,k[it]=L),L.matrix.fromArray(_t.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(_t.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Et.x,Et.y,Et.width,Et.height),it===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(L)}const ct=r.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const it=h.getDepthInformation(Tt[0]);it&&it.isValid&&it.texture&&g.init(t,it,r.renderState)}}for(let Tt=0;Tt<v.length;Tt++){const W=S[Tt],ct=v[Tt];W!==null&&ct!==void 0&&ct.update(W,ht,c||o)}g.render(t,M),dt&&dt(K,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}const Ot=new Vg;Ot.setAnimationLoop(Mt),this.setAnimationLoop=function(K){dt=K},this.dispose=function(){}}}const Nr=new Bn,r2=new _e;function s2(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,kg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,S=y.envMapRotation;if(v&&(p.envMap.value=v,Nr.copy(S),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),p.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Nr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o2(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(_(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(y,R);const T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const v=h();y.__bindingPointIndex=v;const S=n.createBuffer(),R=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let k=0,M=I.length;k<M;k++){const P=I[k];if(d(P,T,k,R)===!0){const at=P.__offset,Z=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let $=0;$<Z.length;$++){const G=Z[$],X=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,at+O,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,at,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,S,R){const T=y.value,A=v+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(y){const v=y.uniforms;let S=0;const R=16;for(let A=0,I=v.length;A<I;A++){const k=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,P=k.length;M<P;M++){const at=k[M],Z=Array.isArray(at.value)?at.value:[at.value];for(let O=0,$=Z.length;O<$;O++){const G=Z[O],X=g(G),Y=S%R;Y!==0&&R-Y<X.boundary&&(S+=R-Y),at.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=S,S+=X.storage}}}const T=S%R;return T>0&&(S+=R-T),y.__size=S,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Kg{constructor(t={}){const{canvas:e=KS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,T=0,A=null,I=-1,k=null;const M=new Fe,P=new Fe;let at=null;const Z=new Bt(0);let O=0,$=e.width,G=e.height,X=1,Y=null,ot=null;const pt=new Fe(0,0,$,G),dt=new Fe(0,0,$,G);let Mt=!1;const Ot=new sf;let K=!1,ht=!1,Tt=null;const W=new _e,ct=new yt,it=new z,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return A===null?X:1}let L=i;function b(C,q){for(let nt=0;nt<C.length;nt++){const st=C[nt],et=e.getContext(st,q);if(et!==null)return et}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qh}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",St,!1),L===null){const q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),L=b(q,C),L===null)throw b(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let w,N,U,H,j,rt,lt,E,x,B,V,J,tt,bt,wt,ft,gt,It,xt,he,zt,Nt,Rt,Pt;function D(){w=new fw(L),N=new ow(L,w,t),w.init(N),Nt=new ZA(L,w,N),U=new $A(L,w,N),H=new mw(L),j=new OA,rt=new KA(L,w,U,j,N,Nt,H),lt=new lw(v),E=new hw(v),x=new ME(L,N),Rt=new rw(L,w,x,N),B=new dw(L,x,H,Rt),V=new xw(L,B,x,H),xt=new vw(L,N,rt),ft=new aw(j),J=new NA(v,lt,E,w,N,Rt,ft),tt=new s2(v,j),bt=new FA,wt=new VA(w,N),It=new iw(v,lt,E,U,V,f,l),gt=new jA(v,V,N),Pt=new o2(L,H,N,U),he=new sw(L,w,H,N),zt=new pw(L,w,H,N),H.programs=J.programs,v.capabilities=N,v.extensions=w,v.properties=j,v.renderLists=bt,v.shadowMap=gt,v.state=U,v.info=H}D();const ut=new i2(v,L);this.xr=ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=w.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=w.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize($,G,!1))},this.getSize=function(C){return C.set($,G)},this.setSize=function(C,q,nt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,G=q,e.width=Math.floor(C*X),e.height=Math.floor(q*X),nt===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set($*X,G*X).floor()},this.setDrawingBufferSize=function(C,q,nt){$=C,G=q,X=nt,e.width=Math.floor(C*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(pt)},this.setViewport=function(C,q,nt,st){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,q,nt,st),U.viewport(M.copy(pt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,q,nt,st){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,q,nt,st),U.scissor(P.copy(dt).multiplyScalar(X).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){U.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(C=!0,q=!0,nt=!0){let st=0;if(C){let et=!1;if(A!==null){const Lt=A.texture.format;et=Lt===Rg||Lt===Ag||Lt===wg}if(et){const Lt=A.texture.type,Ut=Lt===dr||Lt===rr||Lt===tf||Lt===jr||Lt===Tg||Lt===bg,Ft=It.getClearColor(),kt=It.getClearAlpha(),jt=Ft.r,Gt=Ft.g,Vt=Ft.b;Ut?(d[0]=jt,d[1]=Gt,d[2]=Vt,d[3]=kt,L.clearBufferuiv(L.COLOR,0,d)):(_[0]=jt,_[1]=Gt,_[2]=Vt,_[3]=kt,L.clearBufferiv(L.COLOR,0,_))}else st|=L.COLOR_BUFFER_BIT}q&&(st|=L.DEPTH_BUFFER_BIT),nt&&(st|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",St,!1),bt.dispose(),wt.dispose(),j.dispose(),lt.dispose(),E.dispose(),V.dispose(),Rt.dispose(),Pt.dispose(),J.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Se),ut.removeEventListener("sessionend",te),Tt&&(Tt.dispose(),Tt=null),fe.stop()};function Dt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=H.autoReset,q=gt.enabled,nt=gt.autoUpdate,st=gt.needsUpdate,et=gt.type;D(),H.autoReset=C,gt.enabled=q,gt.autoUpdate=nt,gt.needsUpdate=st,gt.type=et}function St(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){const q=C.target;q.removeEventListener("dispose",Q),vt(q)}function vt(C){Ct(C),j.remove(C)}function Ct(C){const q=j.get(C).programs;q!==void 0&&(q.forEach(function(nt){J.releaseProgram(nt)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,nt,st,et,Lt){q===null&&(q=_t);const Ut=et.isMesh&&et.matrixWorld.determinant()<0,Ft=gv(C,q,nt,st,et);U.setMaterial(st,Ut);let kt=nt.index,jt=1;if(st.wireframe===!0){if(kt=B.getWireframeAttribute(nt),kt===void 0)return;jt=2}const Gt=nt.drawRange,Vt=nt.attributes.position;let Te=Gt.start*jt,gn=(Gt.start+Gt.count)*jt;Lt!==null&&(Te=Math.max(Te,Lt.start*jt),gn=Math.min(gn,(Lt.start+Lt.count)*jt)),kt!==null?(Te=Math.max(Te,0),gn=Math.min(gn,kt.count)):Vt!=null&&(Te=Math.max(Te,0),gn=Math.min(gn,Vt.count));const Ie=gn-Te;if(Ie<0||Ie===1/0)return;Rt.setup(et,st,Ft,nt,kt);let gi,ve=he;if(kt!==null&&(gi=x.get(kt),ve=zt,ve.setIndex(gi)),et.isMesh)st.wireframe===!0?(U.setLineWidth(st.wireframeLinewidth*Et()),ve.setMode(L.LINES)):ve.setMode(L.TRIANGLES);else if(et.isLine){let Xt=st.linewidth;Xt===void 0&&(Xt=1),U.setLineWidth(Xt*Et()),et.isLineSegments?ve.setMode(L.LINES):et.isLineLoop?ve.setMode(L.LINE_LOOP):ve.setMode(L.LINE_STRIP)}else et.isPoints?ve.setMode(L.POINTS):et.isSprite&&ve.setMode(L.TRIANGLES);if(et.isBatchedMesh)ve.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)ve.renderInstances(Te,Ie,et.count);else if(nt.isInstancedBufferGeometry){const Xt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,gc=Math.min(nt.instanceCount,Xt);ve.renderInstances(Te,Ie,gc)}else ve.render(Te,Ie)};function $t(C,q,nt){C.transparent===!0&&C.side===Ci&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,Ea(C,q,nt),C.side=Ui,C.needsUpdate=!0,Ea(C,q,nt),C.side=Ci):Ea(C,q,nt)}this.compile=function(C,q,nt=null){nt===null&&(nt=C),p=wt.get(nt),p.init(),y.push(p),nt.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),C!==nt&&C.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights(v._useLegacyLights);const st=new Set;return C.traverse(function(et){const Lt=et.material;if(Lt)if(Array.isArray(Lt))for(let Ut=0;Ut<Lt.length;Ut++){const Ft=Lt[Ut];$t(Ft,nt,et),st.add(Ft)}else $t(Lt,nt,et),st.add(Lt)}),y.pop(),p=null,st},this.compileAsync=function(C,q,nt=null){const st=this.compile(C,q,nt);return new Promise(et=>{function Lt(){if(st.forEach(function(Ut){j.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){et(C);return}setTimeout(Lt,10)}w.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ne=null;function oe(C){ne&&ne(C)}function Se(){fe.stop()}function te(){fe.start()}const fe=new Vg;fe.setAnimationLoop(oe),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(C){ne=C,ut.setAnimationLoop(C),C===null?fe.stop():fe.start()},ut.addEventListener("sessionstart",Se),ut.addEventListener("sessionend",te),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(q),q=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,q,A),p=wt.get(C,y.length),p.init(),y.push(p),W.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ot.setFromProjectionMatrix(W),ht=this.localClippingEnabled,K=ft.init(this.clippingPlanes,ht),g=bt.get(C,m.length),g.init(),m.push(g),He(C,q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,ot),this.info.render.frame++,K===!0&&ft.beginShadows();const nt=p.state.shadowsArray;if(gt.render(nt,C,q),K===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1)&&It.render(g,C),p.setupLights(v._useLegacyLights),q.isArrayCamera){const st=q.cameras;for(let et=0,Lt=st.length;et<Lt;et++){const Ut=st[et];Er(g,C,Ut,Ut.viewport)}}else Er(g,C,q);A!==null&&(rt.updateMultisampleRenderTarget(A),rt.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,q),Rt.resetDefaultState(),I=-1,k=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function He(C,q,nt,st){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ot.intersectsSprite(C)){st&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);const Ut=V.update(C),Ft=C.material;Ft.visible&&g.push(C,Ut,Ft,nt,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ot.intersectsObject(C))){const Ut=V.update(C),Ft=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),it.copy(Ut.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(W)),Array.isArray(Ft)){const kt=Ut.groups;for(let jt=0,Gt=kt.length;jt<Gt;jt++){const Vt=kt[jt],Te=Ft[Vt.materialIndex];Te&&Te.visible&&g.push(C,Ut,Te,nt,it.z,Vt)}}else Ft.visible&&g.push(C,Ut,Ft,nt,it.z,null)}}const Lt=C.children;for(let Ut=0,Ft=Lt.length;Ut<Ft;Ut++)He(Lt[Ut],q,nt,st)}function Er(C,q,nt,st){const et=C.opaque,Lt=C.transmissive,Ut=C.transparent;p.setupLightsView(nt),K===!0&&ft.setGlobalState(v.clippingPlanes,nt),Lt.length>0&&Ma(et,Lt,q,nt),st&&U.viewport(M.copy(st)),et.length>0&&Sa(et,q,nt),Lt.length>0&&Sa(Lt,q,nt),Ut.length>0&&Sa(Ut,q,nt),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Ma(C,q,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const Lt=N.isWebGL2;Tt===null&&(Tt=new vr(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?Qs:dr,minFilter:Vr,samples:Lt?4:0})),v.getDrawingBufferSize(ct),Lt?Tt.setSize(ct.x,ct.y):Tt.setSize(Cl(ct.x),Cl(ct.y));const Ut=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(Z),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Ft=v.toneMapping;v.toneMapping=fr,Sa(C,nt,st),rt.updateMultisampleRenderTarget(Tt),rt.updateRenderTargetMipmap(Tt);let kt=!1;for(let jt=0,Gt=q.length;jt<Gt;jt++){const Vt=q[jt],Te=Vt.object,gn=Vt.geometry,Ie=Vt.material,gi=Vt.group;if(Ie.side===Ci&&Te.layers.test(st.layers)){const ve=Ie.side;Ie.side=cn,Ie.needsUpdate=!0,Df(Te,nt,st,gn,Ie,gi),Ie.side=ve,Ie.needsUpdate=!0,kt=!0}}kt===!0&&(rt.updateMultisampleRenderTarget(Tt),rt.updateRenderTargetMipmap(Tt)),v.setRenderTarget(Ut),v.setClearColor(Z,O),v.toneMapping=Ft}function Sa(C,q,nt){const st=q.isScene===!0?q.overrideMaterial:null;for(let et=0,Lt=C.length;et<Lt;et++){const Ut=C[et],Ft=Ut.object,kt=Ut.geometry,jt=st===null?Ut.material:st,Gt=Ut.group;Ft.layers.test(nt.layers)&&Df(Ft,q,nt,kt,jt,Gt)}}function Df(C,q,nt,st,et,Lt){C.onBeforeRender(v,q,nt,st,et,Lt),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(v,q,nt,st,C,Lt),et.transparent===!0&&et.side===Ci&&et.forceSinglePass===!1?(et.side=cn,et.needsUpdate=!0,v.renderBufferDirect(nt,q,st,et,C,Lt),et.side=Ui,et.needsUpdate=!0,v.renderBufferDirect(nt,q,st,et,C,Lt),et.side=Ci):v.renderBufferDirect(nt,q,st,et,C,Lt),C.onAfterRender(v,q,nt,st,et,Lt)}function Ea(C,q,nt){q.isScene!==!0&&(q=_t);const st=j.get(C),et=p.state.lights,Lt=p.state.shadowsArray,Ut=et.state.version,Ft=J.getParameters(C,et.state,Lt,q,nt),kt=J.getProgramCacheKey(Ft);let jt=st.programs;st.environment=C.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(C.isMeshStandardMaterial?E:lt).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Q),jt=new Map,st.programs=jt);let Gt=jt.get(kt);if(Gt!==void 0){if(st.currentProgram===Gt&&st.lightsStateVersion===Ut)return Nf(C,Ft),Gt}else Ft.uniforms=J.getUniforms(C),C.onBuild(nt,Ft,v),C.onBeforeCompile(Ft,v),Gt=J.acquireProgram(Ft,kt),jt.set(kt,Gt),st.uniforms=Ft.uniforms;const Vt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=ft.uniform),Nf(C,Ft),st.needsLights=xv(C),st.lightsStateVersion=Ut,st.needsLights&&(Vt.ambientLightColor.value=et.state.ambient,Vt.lightProbe.value=et.state.probe,Vt.directionalLights.value=et.state.directional,Vt.directionalLightShadows.value=et.state.directionalShadow,Vt.spotLights.value=et.state.spot,Vt.spotLightShadows.value=et.state.spotShadow,Vt.rectAreaLights.value=et.state.rectArea,Vt.ltc_1.value=et.state.rectAreaLTC1,Vt.ltc_2.value=et.state.rectAreaLTC2,Vt.pointLights.value=et.state.point,Vt.pointLightShadows.value=et.state.pointShadow,Vt.hemisphereLights.value=et.state.hemi,Vt.directionalShadowMap.value=et.state.directionalShadowMap,Vt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Vt.spotShadowMap.value=et.state.spotShadowMap,Vt.spotLightMatrix.value=et.state.spotLightMatrix,Vt.spotLightMap.value=et.state.spotLightMap,Vt.pointShadowMap.value=et.state.pointShadowMap,Vt.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=Gt,st.uniformsList=null,Gt}function If(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=fl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Nf(C,q){const nt=j.get(C);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.instancingMorph=q.instancingMorph,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function gv(C,q,nt,st,et){q.isScene!==!0&&(q=_t),rt.resetTextureUnits();const Lt=q.fog,Ut=st.isMeshStandardMaterial?q.environment:null,Ft=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mr,kt=(st.isMeshStandardMaterial?E:lt).get(st.envMap||Ut),jt=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Gt=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!nt.morphAttributes.position,Te=!!nt.morphAttributes.normal,gn=!!nt.morphAttributes.color;let Ie=fr;st.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=v.toneMapping);const gi=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ve=gi!==void 0?gi.length:0,Xt=j.get(st),gc=p.state.lights;if(K===!0&&(ht===!0||C!==k)){const Cn=C===k&&st.id===I;ft.setState(st,C,Cn)}let de=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==gc.state.version||Xt.outputColorSpace!==Ft||et.isBatchedMesh&&Xt.batching===!1||!et.isBatchedMesh&&Xt.batching===!0||et.isInstancedMesh&&Xt.instancing===!1||!et.isInstancedMesh&&Xt.instancing===!0||et.isSkinnedMesh&&Xt.skinning===!1||!et.isSkinnedMesh&&Xt.skinning===!0||et.isInstancedMesh&&Xt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Xt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Xt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Xt.instancingMorph===!1&&et.morphTexture!==null||Xt.envMap!==kt||st.fog===!0&&Xt.fog!==Lt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ft.numPlanes||Xt.numIntersection!==ft.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==Gt||Xt.morphTargets!==Vt||Xt.morphNormals!==Te||Xt.morphColors!==gn||Xt.toneMapping!==Ie||N.isWebGL2===!0&&Xt.morphTargetsCount!==ve)&&(de=!0):(de=!0,Xt.__version=st.version);let Tr=Xt.currentProgram;de===!0&&(Tr=Ea(st,q,et));let Of=!1,fo=!1,vc=!1;const Ge=Tr.getUniforms(),br=Xt.uniforms;if(U.useProgram(Tr.program)&&(Of=!0,fo=!0,vc=!0),st.id!==I&&(I=st.id,fo=!0),Of||k!==C){Ge.setValue(L,"projectionMatrix",C.projectionMatrix),Ge.setValue(L,"viewMatrix",C.matrixWorldInverse);const Cn=Ge.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,it.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Ge.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ge.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,fo=!0,vc=!0)}if(et.isSkinnedMesh){Ge.setOptional(L,et,"bindMatrix"),Ge.setOptional(L,et,"bindMatrixInverse");const Cn=et.skeleton;Cn&&(N.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ge.setValue(L,"boneTexture",Cn.boneTexture,rt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(Ge.setOptional(L,et,"batchingTexture"),Ge.setValue(L,"batchingTexture",et._matricesTexture,rt));const xc=nt.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0&&N.isWebGL2===!0)&&xt.update(et,nt,Tr),(fo||Xt.receiveShadow!==et.receiveShadow)&&(Xt.receiveShadow=et.receiveShadow,Ge.setValue(L,"receiveShadow",et.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(br.envMap.value=kt,br.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),fo&&(Ge.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&vv(br,vc),Lt&&st.fog===!0&&tt.refreshFogUniforms(br,Lt),tt.refreshMaterialUniforms(br,st,X,G,Tt),fl.upload(L,If(Xt),br,rt)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(fl.upload(L,If(Xt),br,rt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ge.setValue(L,"center",et.center),Ge.setValue(L,"modelViewMatrix",et.modelViewMatrix),Ge.setValue(L,"normalMatrix",et.normalMatrix),Ge.setValue(L,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Cn=st.uniformsGroups;for(let yc=0,yv=Cn.length;yc<yv;yc++)if(N.isWebGL2){const Uf=Cn[yc];Pt.update(Uf,Tr),Pt.bind(Uf,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function vv(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function xv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,q,nt){j.get(C.texture).__webglTexture=q,j.get(C.depthTexture).__webglTexture=nt;const st=j.get(C);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=nt===void 0,st.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const nt=j.get(C);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,nt=0){A=C,R=q,T=nt;let st=!0,et=null,Lt=!1,Ut=!1;if(C){const kt=j.get(C);kt.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(L.FRAMEBUFFER,null),st=!1):kt.__webglFramebuffer===void 0?rt.setupRenderTarget(C):kt.__hasExternalTextures&&rt.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);const Gt=j.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[q])?et=Gt[q][nt]:et=Gt[q],Lt=!0):N.isWebGL2&&C.samples>0&&rt.useMultisampledRTT(C)===!1?et=j.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?et=Gt[nt]:et=Gt,M.copy(C.viewport),P.copy(C.scissor),at=C.scissorTest}else M.copy(pt).multiplyScalar(X).floor(),P.copy(dt).multiplyScalar(X).floor(),at=Mt;if(U.bindFramebuffer(L.FRAMEBUFFER,et)&&N.drawBuffers&&st&&U.drawBuffers(C,et),U.viewport(M),U.scissor(P),U.setScissorTest(at),Lt){const kt=j.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,kt.__webglTexture,nt)}else if(Ut){const kt=j.get(C.texture),jt=q||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,nt||0,jt)}I=-1},this.readRenderTargetPixels=function(C,q,nt,st,et,Lt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){U.bindFramebuffer(L.FRAMEBUFFER,Ft);try{const kt=C.texture,jt=kt.format,Gt=kt.type;if(jt!==jn&&Nt.convert(jt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Gt===Qs&&(w.has("EXT_color_buffer_half_float")||N.isWebGL2&&w.has("EXT_color_buffer_float"));if(Gt!==dr&&Nt.convert(Gt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===Pi&&(N.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-st&&nt>=0&&nt<=C.height-et&&L.readPixels(q,nt,st,et,Nt.convert(jt),Nt.convert(Gt),Lt)}finally{const kt=A!==null?j.get(A).__webglFramebuffer:null;U.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(C,q,nt=0){const st=Math.pow(2,-nt),et=Math.floor(q.image.width*st),Lt=Math.floor(q.image.height*st);rt.setTexture2D(q,0),L.copyTexSubImage2D(L.TEXTURE_2D,nt,0,0,C.x,C.y,et,Lt),U.unbindTexture()},this.copyTextureToTexture=function(C,q,nt,st=0){const et=q.image.width,Lt=q.image.height,Ut=Nt.convert(nt.format),Ft=Nt.convert(nt.type);rt.setTexture2D(nt,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,nt.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,nt.unpackAlignment),q.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,C.x,C.y,et,Lt,Ut,Ft,q.image.data):q.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Ut,q.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,st,C.x,C.y,Ut,Ft,q.image),st===0&&nt.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(C,q,nt,st,et=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Lt=Math.round(C.max.x-C.min.x),Ut=Math.round(C.max.y-C.min.y),Ft=C.max.z-C.min.z+1,kt=Nt.convert(st.format),jt=Nt.convert(st.type);let Gt;if(st.isData3DTexture)rt.setTexture3D(st,0),Gt=L.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)rt.setTexture2DArray(st,0),Gt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,st.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,st.unpackAlignment);const Vt=L.getParameter(L.UNPACK_ROW_LENGTH),Te=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ie=L.getParameter(L.UNPACK_SKIP_ROWS),gi=L.getParameter(L.UNPACK_SKIP_IMAGES),ve=nt.isCompressedTexture?nt.mipmaps[et]:nt.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,C.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,C.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C.min.z),nt.isDataTexture||nt.isData3DTexture?L.texSubImage3D(Gt,et,q.x,q.y,q.z,Lt,Ut,Ft,kt,jt,ve.data):st.isCompressedArrayTexture?L.compressedTexSubImage3D(Gt,et,q.x,q.y,q.z,Lt,Ut,Ft,kt,ve.data):L.texSubImage3D(Gt,et,q.x,q.y,q.z,Lt,Ut,Ft,kt,jt,ve),L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gi),et===0&&st.generateMipmaps&&L.generateMipmap(Gt),U.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),U.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,U.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ef?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===oc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class a2 extends Kg{}a2.prototype.isWebGL1Renderer=!0;class lf{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=i}clone(){return new lf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class l2 extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dl extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const em=new z,nm=new z,im=new _e,du=new ac,Za=new ga;class c2 extends Pe{constructor(t=new An,e=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)em.fromBufferAttribute(e,r-1),nm.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=em.distanceTo(nm);t.setAttribute("lineDistance",new Ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,t.ray.intersectsSphere(Za)===!1)return;im.copy(r).invert(),du.copy(t.ray).applyMatrix4(im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,f=new z,d=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const m=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=d){const R=_.getX(v),T=_.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,T),du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,S=y-1;v<S;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const rm=new z,sm=new z;class om extends c2{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)rm.fromBufferAttribute(e,r),sm.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rm.distanceTo(sm);t.setAttribute("lineDistance",new Ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class To extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const am=new _e,Qu=new ac,Ja=new ga,Qa=new z;class pu extends Pe{constructor(t=new An,e=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,t.ray.intersectsSphere(Ja)===!1)return;am.copy(r).invert(),Qu.copy(t.ray).applyMatrix4(am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);Qa.fromBufferAttribute(h,p),lm(Qa,p,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Qa.fromBufferAttribute(h,_),lm(Qa,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lm(n,t,e,i,r,s,o){const a=Qu.distanceSqToPoint(n);if(a<e){const l=new z;Qu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new yt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new z,r=[],s=[],o=[],a=new z,l=new _e;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Oe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Oe(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cf extends _i{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u2 extends cf{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uf(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const tl=new z,mu=new uf,_u=new uf,gu=new uf;class h2 extends _i{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new z){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(tl.subVectors(r[0],r[1]).add(r[0]),c=tl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(tl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=tl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),mu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),_u.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),gu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_u.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),gu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(mu.calc(l),_u.calc(l),gu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new z().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cm(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function f2(n,t){const e=1-n;return e*e*t}function d2(n,t){return 2*(1-n)*n*t}function p2(n,t){return n*n*t}function Bo(n,t,e,i){return f2(n,t)+d2(n,e)+p2(n,i)}function m2(n,t){const e=1-n;return e*e*e*t}function _2(n,t){const e=1-n;return 3*e*e*n*t}function g2(n,t){return 3*(1-n)*n*n*t}function v2(n,t){return n*n*n*t}function zo(n,t,e,i,r){return m2(n,t)+_2(n,e)+g2(n,i)+v2(n,r)}class Zg extends _i{constructor(t=new yt,e=new yt,i=new yt,r=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new yt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(t,r.x,s.x,o.x,a.x),zo(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x2 extends _i{constructor(t=new z,e=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new z){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(t,r.x,s.x,o.x,a.x),zo(t,r.y,s.y,o.y,a.y),zo(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jg extends _i{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y2 extends _i{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qg extends _i{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Bo(t,r.x,s.x,o.x),Bo(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M2 extends _i{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Bo(t,r.x,s.x,o.x),Bo(t,r.y,s.y,o.y),Bo(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t0 extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(cm(a,l.x,c.x,u.x,h.x),cm(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new yt().fromArray(r))}return this}}var th=Object.freeze({__proto__:null,ArcCurve:u2,CatmullRomCurve3:h2,CubicBezierCurve:Zg,CubicBezierCurve3:x2,EllipseCurve:cf,LineCurve:Jg,LineCurve3:y2,QuadraticBezierCurve:Qg,QuadraticBezierCurve3:M2,SplineCurve:t0});class S2 extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new th[r.type]().fromJSON(r))}return this}}class um extends S2{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Jg(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Qg(this.currentPoint.clone(),new yt(t,e),new yt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Zg(this.currentPoint.clone(),new yt(t,e),new yt(i,r),new yt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new t0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new cf(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class e0 extends um{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new um().fromJSON(r))}return this}}const E2={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=n0(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=R2(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let _=e;_<r;_+=e)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Jo(s,o,e,a,l,d,0),o}};function n0(n,t,e,i,r){let s,o;if(r===z2(n,t,e,i)>0)for(s=t;s<e;s+=i)o=hm(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=hm(s,n[s],n[s+1],o);return o&&uc(o,o.next)&&(ta(o),o=o.next),o}function es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(uc(e,e.next)||ye(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Jo(n,t,e,i,r,s,o){if(!n)return;!o&&s&&I2(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?b2(n,i,r,s):T2(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ta(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=w2(es(n),t,e),Jo(n,t,e,i,r,s,2)):o===2&&A2(n,t,e,i,r,s):Jo(es(n),t,e,i,r,s,1);break}}}function T2(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Ns(r,a,s,l,o,c,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function b2(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ye(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=eh(d,_,t,e,i),y=eh(g,p,t,e,i);let v=n.prevZ,S=n.nextZ;for(;v&&v.z>=m&&S&&S.z<=y;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&Ns(a,u,l,h,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&Ns(a,u,l,h,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&Ns(a,u,l,h,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==o&&Ns(a,u,l,h,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function w2(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!uc(r,s)&&i0(r,i,i.next,s)&&Qo(r,s)&&Qo(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),ta(i),ta(i.next),i=n=s),i=i.next}while(i!==n);return es(i)}function A2(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U2(o,a)){let l=r0(o,a);o=es(o,o.next),l=es(l,l.next),Jo(o,t,e,i,r,s,0),Jo(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function R2(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=n0(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(O2(c));for(r.sort(C2),s=0;s<r.length;s++)e=P2(r[s],e);return e}function C2(n,t){return n.x-t.x}function P2(n,t){const e=L2(n,t);if(!e)return t;const i=r0(e,n);return es(i,i.next),es(e,e.next)}function L2(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Ns(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Qo(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&D2(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function D2(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function I2(n,t,e,i){let r=n;do r.z===0&&(r.z=eh(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,N2(r)}function N2(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function eh(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function O2(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ns(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function U2(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!F2(n,t)&&(Qo(n,t)&&Qo(t,n)&&B2(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||uc(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function uc(n,t){return n.x===t.x&&n.y===t.y}function i0(n,t,e,i){const r=nl(ye(n,t,e)),s=nl(ye(n,t,i)),o=nl(ye(e,i,n)),a=nl(ye(e,i,t));return!!(r!==s&&o!==a||r===0&&el(n,e,t)||s===0&&el(n,i,t)||o===0&&el(e,n,i)||a===0&&el(e,t,i))}function el(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function nl(n){return n>0?1:n<0?-1:0}function F2(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&i0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qo(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function B2(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function r0(n,t){const e=new nh(n.i,n.x,n.y),i=new nh(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function hm(n,t,e,i){const r=new nh(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z2(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class ko{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return ko.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];fm(t),dm(i,t);let o=t.length;e.forEach(fm);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,dm(i,e[l]);const a=E2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fm(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function dm(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class hf extends An{constructor(t=new e0([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:k2;let v,S=!1,R,T,A,I;m&&(v=m.getSpacedPoints(u),S=!0,f=!1,R=m.computeFrenetFrames(u,!1),T=new z,A=new z,I=new z),f||(p=0,d=0,_=0,g=0);const k=a.extractPoints(c);let M=k.shape;const P=k.holes;if(!ko.isClockWise(M)){M=M.reverse();for(let L=0,b=P.length;L<b;L++){const w=P[L];ko.isClockWise(w)&&(P[L]=w.reverse())}}const Z=ko.triangulateShape(M,P),O=M;for(let L=0,b=P.length;L<b;L++){const w=P[L];M=M.concat(w)}function $(L,b,w){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(b,w)}const G=M.length,X=Z.length;function Y(L,b,w){let N,U,H;const j=L.x-b.x,rt=L.y-b.y,lt=w.x-L.x,E=w.y-L.y,x=j*j+rt*rt,B=j*E-rt*lt;if(Math.abs(B)>Number.EPSILON){const V=Math.sqrt(x),J=Math.sqrt(lt*lt+E*E),tt=b.x-rt/V,bt=b.y+j/V,wt=w.x-E/J,ft=w.y+lt/J,gt=((wt-tt)*E-(ft-bt)*lt)/(j*E-rt*lt);N=tt+j*gt-L.x,U=bt+rt*gt-L.y;const It=N*N+U*U;if(It<=2)return new yt(N,U);H=Math.sqrt(It/2)}else{let V=!1;j>Number.EPSILON?lt>Number.EPSILON&&(V=!0):j<-Number.EPSILON?lt<-Number.EPSILON&&(V=!0):Math.sign(rt)===Math.sign(E)&&(V=!0),V?(N=-rt,U=j,H=Math.sqrt(x)):(N=j,U=rt,H=Math.sqrt(x/2))}return new yt(N/H,U/H)}const ot=[];for(let L=0,b=O.length,w=b-1,N=L+1;L<b;L++,w++,N++)w===b&&(w=0),N===b&&(N=0),ot[L]=Y(O[L],O[w],O[N]);const pt=[];let dt,Mt=ot.concat();for(let L=0,b=P.length;L<b;L++){const w=P[L];dt=[];for(let N=0,U=w.length,H=U-1,j=N+1;N<U;N++,H++,j++)H===U&&(H=0),j===U&&(j=0),dt[N]=Y(w[N],w[H],w[j]);pt.push(dt),Mt=Mt.concat(dt)}for(let L=0;L<p;L++){const b=L/p,w=d*Math.cos(b*Math.PI/2),N=_*Math.sin(b*Math.PI/2)+g;for(let U=0,H=O.length;U<H;U++){const j=$(O[U],ot[U],N);W(j.x,j.y,-w)}for(let U=0,H=P.length;U<H;U++){const j=P[U];dt=pt[U];for(let rt=0,lt=j.length;rt<lt;rt++){const E=$(j[rt],dt[rt],N);W(E.x,E.y,-w)}}}const Ot=_+g;for(let L=0;L<G;L++){const b=f?$(M[L],Mt[L],Ot):M[L];S?(A.copy(R.normals[0]).multiplyScalar(b.x),T.copy(R.binormals[0]).multiplyScalar(b.y),I.copy(v[0]).add(A).add(T),W(I.x,I.y,I.z)):W(b.x,b.y,0)}for(let L=1;L<=u;L++)for(let b=0;b<G;b++){const w=f?$(M[b],Mt[b],Ot):M[b];S?(A.copy(R.normals[L]).multiplyScalar(w.x),T.copy(R.binormals[L]).multiplyScalar(w.y),I.copy(v[L]).add(A).add(T),W(I.x,I.y,I.z)):W(w.x,w.y,h/u*L)}for(let L=p-1;L>=0;L--){const b=L/p,w=d*Math.cos(b*Math.PI/2),N=_*Math.sin(b*Math.PI/2)+g;for(let U=0,H=O.length;U<H;U++){const j=$(O[U],ot[U],N);W(j.x,j.y,h+w)}for(let U=0,H=P.length;U<H;U++){const j=P[U];dt=pt[U];for(let rt=0,lt=j.length;rt<lt;rt++){const E=$(j[rt],dt[rt],N);S?W(E.x,E.y+v[u-1].y,v[u-1].x+w):W(E.x,E.y,h+w)}}}K(),ht();function K(){const L=r.length/3;if(f){let b=0,w=G*b;for(let N=0;N<X;N++){const U=Z[N];ct(U[2]+w,U[1]+w,U[0]+w)}b=u+p*2,w=G*b;for(let N=0;N<X;N++){const U=Z[N];ct(U[0]+w,U[1]+w,U[2]+w)}}else{for(let b=0;b<X;b++){const w=Z[b];ct(w[2],w[1],w[0])}for(let b=0;b<X;b++){const w=Z[b];ct(w[0]+G*u,w[1]+G*u,w[2]+G*u)}}i.addGroup(L,r.length/3-L,0)}function ht(){const L=r.length/3;let b=0;Tt(O,b),b+=O.length;for(let w=0,N=P.length;w<N;w++){const U=P[w];Tt(U,b),b+=U.length}i.addGroup(L,r.length/3-L,1)}function Tt(L,b){let w=L.length;for(;--w>=0;){const N=w;let U=w-1;U<0&&(U=L.length-1);for(let H=0,j=u+p*2;H<j;H++){const rt=G*H,lt=G*(H+1),E=b+N+rt,x=b+U+rt,B=b+U+lt,V=b+N+lt;it(E,x,B,V)}}}function W(L,b,w){l.push(L),l.push(b),l.push(w)}function ct(L,b,w){_t(L),_t(b),_t(w);const N=r.length/3,U=y.generateTopUV(i,r,N-3,N-2,N-1);Et(U[0]),Et(U[1]),Et(U[2])}function it(L,b,w,N){_t(L),_t(b),_t(N),_t(b),_t(w),_t(N);const U=r.length/3,H=y.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);Et(H[0]),Et(H[1]),Et(H[3]),Et(H[1]),Et(H[2]),Et(H[3])}function _t(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Et(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return H2(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new th[r.type]().fromJSON(r)),new hf(i,t.options)}}const k2={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new yt(s,o),new yt(a,l),new yt(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],d=t[r*3+1],_=t[r*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new yt(o,1-l),new yt(c,1-h),new yt(f,1-_),new yt(g,1-m)]:[new yt(a,1-l),new yt(u,1-h),new yt(d,1-_),new yt(p,1-m)]}};function H2(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class G2 extends ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pm extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class s0 extends ti{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V2 extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Pl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class W2{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const o0=new W2;class ho{constructor(t){this.manager=t!==void 0?t:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class X2 extends Error{constructor(t,e){super(t),this.response=e}}class a0 extends ho{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Pl.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ti[t]!==void 0){Ti[t].push({onLoad:e,onProgress:i,onError:r});return}Ti[t]=[],Ti[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ti[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let T=0,A=u.length;T<A;T++){const I=u[T];I.onProgress&&I.onProgress(R)}m.enqueue(S),y()}})}}});return new Response(p)}else throw new X2(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Pl.add(t,c);const u=Ti[t];delete Ti[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ti[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ti[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class q2 extends ho{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Pl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Zo("img");function l(){u(),Pl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Y2 extends ho{constructor(t){super(t)}load(t,e,i,r){const s=new on,o=new q2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class ff extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class j2 extends ff{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vu=new _e,mm=new z,_m=new z;class $2{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mm.setFromMatrixPosition(t.matrixWorld),e.position.copy(mm),_m.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_m),e.updateMatrixWorld(),vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class K2 extends $2{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z2 extends ff{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new K2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J2 extends ff{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Q2{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,r=t.length;i<r;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class tR{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gm(){return(typeof performance>"u"?Date:performance).now()}class vm{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);class eR extends ho{constructor(t){super(t)}load(t,e,i,r){const s=this,o=this.path===""?Q2.extractUrlBase(t):this.path,a=new a0(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},i,r)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const i=t.split(`
`);let r={};const s=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let f=u>=0?c.substring(u+1):"";if(f=f.trim(),h==="newmtl")r={name:f},o[f]=r;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const d=f.split(s,3);r[h]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else r[h]=f}const a=new nR(this.resourcePath||e,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class nR{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ui,this.wrap=this.options.wrap!==void 0?this.options.wrap:Tl}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const i in t){const r=t[i],s={};e[i]=s;for(const o in r){let a=!0,l=r[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,i=this.materialsInfo[t],r={name:t,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(r[a])return;const c=e.getTextureParams(l,r),u=e.loadTexture(s(e.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=e.wrap,u.wrapT=e.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=Xn),r[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":r.color=new Bt().fromArray(l).convertSRGBToLinear();break;case"ks":r.specular=new Bt().fromArray(l).convertSRGBToLinear();break;case"ke":r.emissive=new Bt().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),r.transparent=!0;break;case"ns":r.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(r.opacity=c,r.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(r.opacity=1-c,r.transparent=!0);break}}return this.materials[t]=new s0(r),this.materials[t]}getTextureParams(t,e){const i={scale:new yt(1,1),offset:new yt(0,0)},r=t.split(/\s+/);let s;return s=r.indexOf("-bm"),s>=0&&(e.bumpScale=parseFloat(r[s+1]),r.splice(s,2)),s=r.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),s=r.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),i.url=r.join(" ").trim(),i}loadTexture(t,e,i,r,s){const o=this.manager!==void 0?this.manager:o0;let a=o.getHandler(t);a===null&&(a=new Y2(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(t,i,r,s);return e!==void 0&&(l.mapping=e),l}}const iR=/^[og]\s*(.+)?/,rR=/^mtllib /,sR=/^usemtl /,oR=/^usemap /,xm=/\s+/,ym=new z,xu=new z,Mm=new z,Sm=new z,Ln=new z,il=new Bt;function aR(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(t,e,i){const r=this.vertices,s=this.object.geometry.normals;ym.fromArray(r,t),xu.fromArray(r,e),Mm.fromArray(r,i),Ln.subVectors(Mm,xu),Sm.subVectors(ym,xu),Ln.cross(Sm),Ln.normalize(),s.push(Ln.x,Ln.y,Ln.z),s.push(Ln.x,Ln.y,Ln.z),s.push(Ln.x,Ln.y,Ln.z)},addColor:function(t,e,i){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(t,e,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,r,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(i,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(l,_),d=this.parseNormalIndex(c,_),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(r!==void 0&&r!==""){const _=this.uvs.length;h=this.parseUVIndex(r,_),f=this.parseUVIndex(s,_),d=this.parseUVIndex(o,_),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,r=t.length;i<r;i++){const s=this.parseVertexIndex(t[i],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return n.startObject("",!1),n}class lR extends ho{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,o=new a0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new aR;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(xm);switch(h[0]){case"v":e.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(il.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),e.colors.push(il.r,il.g,il.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":e.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(xm),d=[];for(let g=0,p=f.length;g<p;g++){const m=f[g];if(m.length>0){const y=m.split("/");d.push(y)}}const _=d[0];for(let g=1,p=d.length-1;g<p;g++){const m=d[g],y=d[g+1];e.addFace(_[0],m[0],y[0],_[1],m[1],y[1],_[2],m[2],y[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,g=h.length;_<g;_++){const p=h[_].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&d.push(p[1])}e.addLineGeometry(f,d)}else if(u==="p"){const f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((r=iR.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);e.startObject(h)}else if(sR.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(rR.test(c))e.materialLibraries.push(c.substring(7).trim());else if(oR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const f=r[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const h=e.object.currentMaterial();h&&(h.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Zn;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new An;g.setAttribute("position",new Ce(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new Ce(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new Ce(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new Ce(u.uvs,2));const p=[];for(let y=0,v=h.length;y<v;y++){const S=h[y],R=S.name+"_"+S.smooth+"_"+_;let T=e.materials[R];if(this.materials!==null){if(T=this.materials.create(S.name),f&&T&&!(T instanceof dl)){const A=new dl;ti.prototype.copy.call(A,T),A.color.copy(T.color),T=A}else if(d&&T&&!(T instanceof To)){const A=new To({size:10,sizeAttenuation:!1});ti.prototype.copy.call(A,T),A.color.copy(T.color),A.map=T.map,T=A}}T===void 0&&(f?T=new dl:d?T=new To({size:1,sizeAttenuation:!1}):T=new s0,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=_,e.materials[R]=T),p.push(T)}let m;if(p.length>1){for(let y=0,v=h.length;y<v;y++){const S=h[y];g.addGroup(S.groupStart,S.groupCount,y)}f?m=new om(g,p):d?m=new pu(g,p):m=new $e(g,p)}else f?m=new om(g,p[0]):d?m=new pu(g,p[0]):m=new $e(g,p[0]);m.name=c.name,s.add(m)}else if(e.vertices.length>0){const a=new To({size:1,sizeAttenuation:!1}),l=new An;l.setAttribute("position",new Ce(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Ce(e.colors,3)),a.vertexColors=!0);const c=new pu(l,a);s.add(c)}return s}}const Em={type:"change"},yu={type:"start"},Tm={type:"end"},rl=new ac,bm=new er,cR=Math.cos(70*$S.DEG2RAD);class uR extends os{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",wt),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Em),i.update(),s=r.NONE},this.update=function(){const D=new z,ut=new ts().setFromUnitVectors(t.up,new z(0,1,0)),Dt=ut.clone().invert(),F=new z,St=new ts,Q=new z,vt=2*Math.PI;return function($t=null){const ne=i.object.position;D.copy(ne).sub(i.target),D.applyQuaternion(ut),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&at(M($t)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let oe=i.minAzimuthAngle,Se=i.maxAzimuthAngle;isFinite(oe)&&isFinite(Se)&&(oe<-Math.PI?oe+=vt:oe>Math.PI&&(oe-=vt),Se<-Math.PI?Se+=vt:Se>Math.PI&&(Se-=vt),oe<=Se?a.theta=Math.max(oe,Math.min(Se,a.theta)):a.theta=a.theta>(oe+Se)/2?Math.max(oe,a.theta):Math.min(Se,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let te=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=pt(a.radius);else{const fe=a.radius;a.radius=pt(a.radius*c),te=fe!=a.radius}if(D.setFromSpherical(a),D.applyQuaternion(Dt),ne.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&T){let fe=null;if(i.object.isPerspectiveCamera){const He=D.length();fe=pt(He*c);const Er=He-fe;i.object.position.addScaledVector(S,Er),i.object.updateMatrixWorld(),te=!!Er}else if(i.object.isOrthographicCamera){const He=new z(R.x,R.y,0);He.unproject(i.object);const Er=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),te=Er!==i.object.zoom;const Ma=new z(R.x,R.y,0);Ma.unproject(i.object),i.object.position.sub(Ma).add(He),i.object.updateMatrixWorld(),fe=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;fe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(fe).add(i.object.position):(rl.origin.copy(i.object.position),rl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(rl.direction))<cR?t.lookAt(i.target):(bm.setFromNormalAndCoplanarPoint(i.object.up,i.target),rl.intersectPlane(bm,i.target))))}else if(i.object.isOrthographicCamera){const fe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),fe!==i.object.zoom&&(i.object.updateProjectionMatrix(),te=!0)}return c=1,T=!1,te||F.distanceToSquared(i.object.position)>o||8*(1-St.dot(i.object.quaternion))>o||Q.distanceToSquared(i.target)>o?(i.dispatchEvent(Em),F.copy(i.object.position),St.copy(i.object.quaternion),Q.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",It),i.domElement.removeEventListener("pointerdown",rt),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",tt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",wt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new vm,l=new vm;let c=1;const u=new z,h=new yt,f=new yt,d=new yt,_=new yt,g=new yt,p=new yt,m=new yt,y=new yt,v=new yt,S=new z,R=new yt;let T=!1;const A=[],I={};let k=!1;function M(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function P(D){const ut=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*ut)}function at(D){l.theta-=D}function Z(D){l.phi-=D}const O=function(){const D=new z;return function(Dt,F){D.setFromMatrixColumn(F,0),D.multiplyScalar(-Dt),u.add(D)}}(),$=function(){const D=new z;return function(Dt,F){i.screenSpacePanning===!0?D.setFromMatrixColumn(F,1):(D.setFromMatrixColumn(F,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Dt),u.add(D)}}(),G=function(){const D=new z;return function(Dt,F){const St=i.domElement;if(i.object.isPerspectiveCamera){const Q=i.object.position;D.copy(Q).sub(i.target);let vt=D.length();vt*=Math.tan(i.object.fov/2*Math.PI/180),O(2*Dt*vt/St.clientHeight,i.object.matrix),$(2*F*vt/St.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(Dt*(i.object.right-i.object.left)/i.object.zoom/St.clientWidth,i.object.matrix),$(F*(i.object.top-i.object.bottom)/i.object.zoom/St.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ot(D,ut){if(!i.zoomToCursor)return;T=!0;const Dt=i.domElement.getBoundingClientRect(),F=D-Dt.left,St=ut-Dt.top,Q=Dt.width,vt=Dt.height;R.x=F/Q*2-1,R.y=-(St/vt)*2+1,S.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function pt(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function dt(D){h.set(D.clientX,D.clientY)}function Mt(D){ot(D.clientX,D.clientX),m.set(D.clientX,D.clientY)}function Ot(D){_.set(D.clientX,D.clientY)}function K(D){f.set(D.clientX,D.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ut=i.domElement;at(2*Math.PI*d.x/ut.clientHeight),Z(2*Math.PI*d.y/ut.clientHeight),h.copy(f),i.update()}function ht(D){y.set(D.clientX,D.clientY),v.subVectors(y,m),v.y>0?X(P(v.y)):v.y<0&&Y(P(v.y)),m.copy(y),i.update()}function Tt(D){g.set(D.clientX,D.clientY),p.subVectors(g,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(g),i.update()}function W(D){ot(D.clientX,D.clientY),D.deltaY<0?Y(P(D.deltaY)):D.deltaY>0&&X(P(D.deltaY)),i.update()}function ct(D){let ut=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ut=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ut=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?at(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ut=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?at(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ut=!0;break}ut&&(D.preventDefault(),i.update())}function it(D){if(A.length===1)h.set(D.pageX,D.pageY);else{const ut=Rt(D),Dt=.5*(D.pageX+ut.x),F=.5*(D.pageY+ut.y);h.set(Dt,F)}}function _t(D){if(A.length===1)_.set(D.pageX,D.pageY);else{const ut=Rt(D),Dt=.5*(D.pageX+ut.x),F=.5*(D.pageY+ut.y);_.set(Dt,F)}}function Et(D){const ut=Rt(D),Dt=D.pageX-ut.x,F=D.pageY-ut.y,St=Math.sqrt(Dt*Dt+F*F);m.set(0,St)}function L(D){i.enableZoom&&Et(D),i.enablePan&&_t(D)}function b(D){i.enableZoom&&Et(D),i.enableRotate&&it(D)}function w(D){if(A.length==1)f.set(D.pageX,D.pageY);else{const Dt=Rt(D),F=.5*(D.pageX+Dt.x),St=.5*(D.pageY+Dt.y);f.set(F,St)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ut=i.domElement;at(2*Math.PI*d.x/ut.clientHeight),Z(2*Math.PI*d.y/ut.clientHeight),h.copy(f)}function N(D){if(A.length===1)g.set(D.pageX,D.pageY);else{const ut=Rt(D),Dt=.5*(D.pageX+ut.x),F=.5*(D.pageY+ut.y);g.set(Dt,F)}p.subVectors(g,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(g)}function U(D){const ut=Rt(D),Dt=D.pageX-ut.x,F=D.pageY-ut.y,St=Math.sqrt(Dt*Dt+F*F);y.set(0,St),v.set(0,Math.pow(y.y/m.y,i.zoomSpeed)),X(v.y),m.copy(y);const Q=(D.pageX+ut.x)*.5,vt=(D.pageY+ut.y)*.5;ot(Q,vt)}function H(D){i.enableZoom&&U(D),i.enablePan&&N(D)}function j(D){i.enableZoom&&U(D),i.enableRotate&&w(D)}function rt(D){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",lt),i.domElement.addEventListener("pointerup",E)),!zt(D)&&(xt(D),D.pointerType==="touch"?ft(D):x(D)))}function lt(D){i.enabled!==!1&&(D.pointerType==="touch"?gt(D):B(D))}function E(D){switch(he(D),A.length){case 0:i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(Tm),s=r.NONE;break;case 1:const ut=A[0],Dt=I[ut];ft({pointerId:ut,pageX:Dt.x,pageY:Dt.y});break}}function x(D){let ut;switch(D.button){case 0:ut=i.mouseButtons.LEFT;break;case 1:ut=i.mouseButtons.MIDDLE;break;case 2:ut=i.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case cs.DOLLY:if(i.enableZoom===!1)return;Mt(D),s=r.DOLLY;break;case cs.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;Ot(D),s=r.PAN}else{if(i.enableRotate===!1)return;dt(D),s=r.ROTATE}break;case cs.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;dt(D),s=r.ROTATE}else{if(i.enablePan===!1)return;Ot(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yu)}function B(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(D);break;case r.DOLLY:if(i.enableZoom===!1)return;ht(D);break;case r.PAN:if(i.enablePan===!1)return;Tt(D);break}}function V(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(yu),W(J(D)),i.dispatchEvent(Tm))}function J(D){const ut=D.deltaMode,Dt={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ut){case 1:Dt.deltaY*=16;break;case 2:Dt.deltaY*=100;break}return D.ctrlKey&&!k&&(Dt.deltaY*=10),Dt}function tt(D){D.key==="Control"&&(k=!0,i.domElement.getRootNode().addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(D){D.key==="Control"&&(k=!1,i.domElement.getRootNode().removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function wt(D){i.enabled===!1||i.enablePan===!1||ct(D)}function ft(D){switch(Nt(D),A.length){case 1:switch(i.touches.ONE){case us.ROTATE:if(i.enableRotate===!1)return;it(D),s=r.TOUCH_ROTATE;break;case us.PAN:if(i.enablePan===!1)return;_t(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case us.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(D),s=r.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;b(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yu)}function gt(D){switch(Nt(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;w(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;N(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(D),i.update();break;default:s=r.NONE}}function It(D){i.enabled!==!1&&D.preventDefault()}function xt(D){A.push(D.pointerId)}function he(D){delete I[D.pointerId];for(let ut=0;ut<A.length;ut++)if(A[ut]==D.pointerId){A.splice(ut,1);return}}function zt(D){for(let ut=0;ut<A.length;ut++)if(A[ut]==D.pointerId)return!0;return!1}function Nt(D){let ut=I[D.pointerId];ut===void 0&&(ut=new yt,I[D.pointerId]=ut),ut.set(D.pageX,D.pageY)}function Rt(D){const ut=D.pointerId===A[0]?A[1]:A[0];return I[ut]}i.domElement.addEventListener("contextmenu",It),i.domElement.addEventListener("pointerdown",rt),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",V,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",tt,{passive:!0,capture:!0}),this.update()}}const hR={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fR=new of(-1,1,1,-1,0,1);class dR extends An{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const pR=new dR;class l0{constructor(t){this._mesh=new $e(pR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mR extends va{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ei?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rf.clone(t.uniforms),this.material=new ei({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new l0(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wm extends va{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class _R extends va{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gR{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new vr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qs}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mR(hR),this.copyPass.material.blending=Ni,this.clock=new tR}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wm!==void 0&&(o instanceof wm?i=!0:o instanceof _R&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vR extends va{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const xR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class yR extends va{constructor(){super();const t=xR;this.uniforms=rf.clone(t.uniforms),this.material=new G2({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new l0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_g?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const hc={TILE:MR(),STONE:new pr(10,10,10),MOUNTAIN:new pr(15,15,15),CLIFF:new pr(5,1,5)},fc={TILE:new V2,STONE:new pm({color:"gray"}),SNOW:new pm({color:"lightgray"})},ea={TILE:SR(),STONE:ER(),MOUNTAIN:TR(),CLIFF:bR()};function MR(){const e=new e0;e.moveTo(29.5*Math.cos(0),29.5*Math.sin(0));for(let r=1;r<=6;r+=1)e.lineTo(29.5*Math.cos(r*2*Math.PI/6),29.5*Math.sin(r*2*Math.PI/6));const i={steps:2,depth:10,bevelEnabled:!0,bevelThickness:.2,bevelSize:.5,bevelOffset:0,bevelSegments:10};return new hf(e,i)}function SR(){const n=new $e(hc.TILE,fc.TILE);return n.receiveShadow=!0,n.castShadow=!0,n}function ER(){const n=new $e(hc.STONE,fc.STONE);return n.receiveShadow=!0,n.castShadow=!0,n}function TR(){const n=new $e(hc.MOUNTAIN,fc.STONE);return n.receiveShadow=!0,n.castShadow=!0,n}function bR(){const n=new $e(hc.CLIFF,fc.STONE);return n.receiveShadow=!0,n.castShadow=!0,n}function wR(){const n=new l2;return n.background=new Bt("lightblue"),n.fog=new lf(11127245,400,3e3),n}function AR(){const n=new Nn(45,window.innerWidth/window.innerHeight,1,1e4);return n.position.set(600,670,600),n}function RR(n,t){const e=document.getElementById("gameScreen"),i=new Kg({powerPreference:"high-performance",antialias:!0,stencil:!1,depth:!1});i.shadowMap.enabled=!0,i.shadowMap.type=mg,i.setPixelRatio(window.devicePixelRatio),i.setSize(e.offsetWidth,e.offsetHeight);const r=new gR(i),s=new vR(n,t);r.addPass(s);const o=new yR;return r.addPass(o),{renderer:i,composer:r}}function CR(n,t){const e=new uR(n,t.domElement);return e.autoRotate=!0,e.minDistance=500,e.maxDistance=1200,e.enableDamping=!0,e.dampingFactor=.05,e.minPolarAngle=Math.PI/3.5,e.maxPolarAngle=Math.PI/3.5,e}function PR(){const n=new j2(16777215,16777215,3);n.color.setHSL(.6,1,.6),n.groundColor.setHSL(.095,1,.75),n.position.set(200,200,200);const t=new J2("orange",.7),e=new Z2(16777215,4);return e.color.setHSL(.42,.69,.9),e.position.set(200,200,0),e.castShadow=!0,e.shadow.mapSize.width=8192,e.shadow.mapSize.height=8192,e.shadow.camera.left=-5e3,e.shadow.camera.right=5e3,e.shadow.camera.top=5e3,e.shadow.camera.bottom=-5e3,e.shadow.camera.near=-1e3,e.shadow.camera.far=1e3,[n,t,e]}function LR(n,t){let e=[];return n.forEach(i=>{i.meshes={};const r=new Zn;r.position.set(i.data.center.x,0,i.data.center.y),i.meshes.group=r;const s=OR(i);if(i.meshes.tile=s,r.add(s),i.data.hasForest||i.data.hasStone||i.data.hasMountain||i.data.hasCliff){const o=new Zn;if(o.userData.name="decorum",o.position.set(0,i.display.height,0),o.scale.set(0,0,0),i.data.hasForest){const a=UR(i,t);i.meshes.trees=a,o.add(a)}if(i.data.hasStone){const a=FR(i);i.meshes.stones=a,o.add(a)}if(i.data.hasMountain){const a=BR(i);i.meshes.mountains=a,o.add(a)}if(i.data.hasCliff){const a=zR(i);i.meshes.cliffs=a,o.add(a)}i.meshes.decorum=o,r.add(o)}e.push(r)}),e}function df(n,t,e,i){requestAnimationFrame(()=>df(n,t,e,i)),n.updateProjectionMatrix(),t.update(),i.render()}function DR(n,t){cancelAnimationFrame(()=>df(n,t)),window.onresize=null}function IR(n,t,e){const i=document.getElementById("gameScreen"),r=i.offsetHeight,s=i.offsetWidth;n.aspect=s/r,n.updateProjectionMatrix(),t.setSize(s,r),e.setSize(s,r)}function NR(n,t,e){document.getElementById("gameScreen").appendChild(t.domElement),window.onresize=function(){IR(n,t,e)}}function OR(n){const t=ea.TILE.clone();return t.material=ea.TILE.material.clone(),t.material.color=new Bt(n.display.color),t.scale.set(0,0,0),t.rotation.set(-Math.PI/2,0,-Math.PI/2),t}function UR(n,t){const e=new Zn;return n.display.forest.forEach(i=>{const r=t.find(s=>s.name==="tree").object.clone();r.children[0].castShadow=!0,r.children[0].receiveShadow=!0,r.position.set(i.position.x,0,i.position.z),r.scale.set(i.scale.x,i.scale.y,i.scale.z),e.add(r)}),e}function FR(n){const t=new Zn;return n.display.stones.forEach(e=>{const i=ea.STONE.clone();i.position.set(e.position.x,-2,e.position.z),i.scale.set(e.scale.x,1,e.scale.z),i.rotation.y=e.rotation,t.add(i)}),t}function BR(n){const t=new Zn;return n.display.mountains.forEach(e=>{const i=ea.MOUNTAIN.clone();i.position.set(e.position.x,0,e.position.z),i.scale.set(e.scale.x,e.scale.y,e.scale.z),i.rotation.y=e.rotation,t.add(i)}),t}function zR(n){const t=new Zn;return t.position.y=-n.display.height/2,n.display.cliffs.forEach(e=>{e.forEach(i=>{const r=ea.CLIFF.clone();r.position.set(i.position.x,0,i.position.z),r.scale.set(i.scale.x,i.scale.y,i.scale.z),r.rotation.y=i.rotation,t.add(r)})}),t}const Mu=["tree"],sl=da([]);function c0(){async function n(){if(sl.value.length===Mu.length)return new Promise(o=>o());await new Promise(o=>{Mu.forEach(a=>{new eR().setPath(`/models/${a}/`).load(`${a}.mtl`,l=>{l.preload(),new lR().setMaterials(l).setPath(`/models/${a}/`).load(`${a}.obj`,c=>{sl.value.push({name:a,object:c}),sl.value.length===Mu.length&&o()})})})})}function t(){const o=wR(),a=AR(),{renderer:l,composer:c}=RR(o,a),u=CR(a,l);return{scene:o,camera:a,renderer:l,composer:c,controls:u}}function e({scene:o}){PR().forEach(l=>o.add(l))}function i({scene:o,tiles:a}){LR(a,sl.value).forEach(c=>o.add(c))}function r({camera:o,controls:a,renderer:l,composer:c}){NR(o,l,c),df(o,a,l,c)}function s({renderer:o,composer:a}){DR(o,a)}return{loadAssets:n,setup:t,createBase:e,createMap:i,start:r,stop:s}}function wi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u0(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},pf,Ke,me,Un=1e8,ce=1/Un,ih=Math.PI*2,kR=ih/4,HR=0,h0=Math.sqrt,GR=Math.cos,VR=Math.sin,Be=function(t){return typeof t=="string"},Ee=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},mf=function(t){return typeof t>"u"},pi=function(t){return typeof t=="object"},un=function(t){return t!==!1},_f=function(){return typeof window<"u"},ol=function(t){return Ee(t)||Be(t)},f0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ze=Array.isArray,rh=/(?:-?\.?\d|\.)+/gi,d0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,p0=/[+-]=-?[.\d]+/,m0=/[^,'"\[\]\s]+/gi,WR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,ii,sh,gf,Rn={},Ll={},_0,g0=function(t){return(Ll=ns(t,Rn))&&_n},vf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},na=function(t,e){return!e&&console.warn(t)},v0=function(t,e){return t&&(Rn[t]=e)&&Ll&&(Ll[t]=e)||Rn},ia=function(){return 0},XR={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},qR={suppressEvents:!0},xf={},mr=[],oh={},x0,Mn={},Eu={},Am=30,ml=[],yf="",Mf=function(t){var e=t[0],i,r;if(pi(e)||Ee(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=ml.length;r--&&!ml[r].targetTest(e););i=ml[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new V0(t[r],i)))||t.splice(r,1);return t},Kr=function(t){return t._gsap||Mf(Fn(t))[0]._gsap},y0=function(t,e,i){return(i=t[e])&&Ee(i)?t[e]():mf(i)&&t.getAttribute&&t.getAttribute(e)||i},hn=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},Vs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},YR=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Dl=function(){var t=mr.length,e=mr.slice(0),i,r;for(oh={},mr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},M0=function(t,e,i,r){mr.length&&!Ke&&Dl(),t.render(e,i,r||Ke&&e<0&&(t._initted||t._startAt)),mr.length&&!Ke&&Dl()},S0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(m0).length<2?e:Be(t)?t.trim():t},E0=function(t){return t},zn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},jR=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},ns=function(t,e){for(var i in e)t[i]=e[i];return t},Rm=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=pi(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Il=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Ho=function(t){var e=t.parent||xe,i=t.keyframes?jR(Ze(t.keyframes)):zn;if(un(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},$R=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},T0=function(t,e,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},dc=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},xr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},KR=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ah=function(t,e,i,r){return t._startAt&&(Ke?t._startAt.revert(pl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ZR=function n(t){return!t||t._ts&&n(t.parent)},Cm=function(t){return t._repeat?io(t._tTime,t=t.duration()+t._rDelay)*t:0},io=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Nl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},pc=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},mc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ue(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),pc(t),i._dirty||Zr(i,t)),t},b0=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Nl(t.rawTime(),e),(!e._dur||xa(0,e.totalDuration(),i)-e._tTime>ce)&&e.render(i,!0)),Zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ce}},li=function(t,e,i,r){return e.parent&&xr(e),e._start=Ue((Fi(i)?i:i||t!==xe?Dn(t,i,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),T0(t,e,"_first","_last",t._sort?"_start":0),lh(e)||(t._recent=e),r||b0(t,e),t._ts<0&&mc(t,t._tTime),t},w0=function(t,e){return(Rn.ScrollTrigger||vf("scrollTrigger",e))&&Rn.ScrollTrigger.create(e,t)},A0=function(t,e,i,r,s){if(Ef(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&x0!==En.frame)return mr.push(t),t._lazy=[s,r],1},JR=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},lh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},QR=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&JR(t)&&!(!t._initted&&lh(t))||(t._ts<0||t._dp._ts<0)&&!lh(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=xa(0,t._tDur,e),u=io(l,a),t._yoyo&&u&1&&(o=1-o),u!==io(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ke||r||t._zTime===ce||!e&&t._zTime){if(!t._initted&&A0(t,e,r,i,l))return;for(h=t._zTime,t._zTime=e||(i?ce:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ah(t,e,i,!0),t._onUpdate&&!i&&Tn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&xr(t,1),!i&&!Ke&&(Tn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},tC=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ro=function(t,e,i,r){var s=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ue(o*(s+1)+t._rDelay*s):o,a>0&&!r&&mc(t,t._tTime=t._tDur*a),t.parent&&pc(t),i||Zr(t.parent,t),t},Pm=function(t){return t instanceof rn?Zr(t):ro(t,t._dur)},eC={_start:0,endTime:ia,totalDuration:ia},Dn=function n(t,e,i){var r=t.labels,s=t._recent||eC,o=t.duration()>=Un?s.endTime(!1):t._dur,a,l,c;return Be(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Ze(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Go=function(t,e,i){var r=Fi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;o.immediateRender=un(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ae(e[0],o,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},xa=function(t,e,i){return i<t?t:i>e?e:i},je=function(t,e){return!Be(t)||!(e=WR.exec(t))?"":e[1]},nC=function(t,e,i){return Sr(i,function(r){return xa(t,e,r)})},ch=[].slice,R0=function(t,e){return t&&pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pi(t[0]))&&!t.nodeType&&t!==ii},iC=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Be(r)&&!e||R0(r,1)?(s=i).push.apply(s,Fn(r)):i.push(r)})||i},Fn=function(t,e,i){return me&&!e&&me.selector?me.selector(t):Be(t)&&!i&&(sh||!so())?ch.call((e||gf).querySelectorAll(t),0):Ze(t)?iC(t,i):R0(t)?ch.call(t,0):t?[t]:[]},uh=function(t){return t=Fn(t)[0]||na("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Fn(e,i.querySelectorAll?i:i===t?na("Invalid scope")||gf.createElement("div"):t)}},C0=function(t){return t.sort(function(){return .5-Math.random()})},P0=function(t){if(Ee(t))return t;var e=pi(t)?t:{each:t},i=Jr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return Be(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||e).length,p=o[g],m,y,v,S,R,T,A,I,k;if(!p){if(k=e.grid==="auto"?0:(e.grid||[1,Un])[1],!k){for(A=-Un;A<(A=_[k++].getBoundingClientRect().left)&&k<g;);k<g&&k--}for(p=o[g]=[],m=l?Math.min(k,g)*u-.5:r%k,y=k===Un?0:l?g*h/k-.5:r/k|0,A=0,I=Un,T=0;T<g;T++)v=T%k-m,S=y-(T/k|0),p[T]=R=c?Math.abs(c==="y"?S:v):h0(v*v+S*S),R>A&&(A=R),R<I&&(I=R);r==="random"&&C0(p),p.max=A-I,p.min=I,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(k>g?g-1:c?c==="y"?g/k:k:Math.max(k,g/k))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=je(e.amount||e.each)||0,i=i&&g<0?k0(i):i}return g=(p[f]-p.min)/p.max||0,Ue(p.b+(i?i(g):g)*p.v)+p.u}},hh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Ue(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Fi(i)?0:je(i))}},L0=function(t,e){var i=Ze(t),r,s;return!i&&pi(t)&&(r=i=t.radius||Un,t.values?(t=Fn(t.values),(s=!Fi(t[0]))&&(r*=r)):t=hh(t.increment)),Sr(e,i?Ee(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Un,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||Fi(o)?u:u+je(o)}:hh(t))},D0=function(t,e,i,r){return Sr(Ze(t)?!e:i===!0?!!(i=0):!r,function(){return Ze(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},rC=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},sC=function(t,e){return function(i){return t(parseFloat(i))+(e||je(i))}},oC=function(t,e,i){return N0(t,e,0,1,i)},I0=function(t,e,i){return Sr(i,function(r){return t[~~e(r)]})},aC=function n(t,e,i){var r=e-t;return Ze(t)?I0(t,n(0,t.length),e):Sr(i,function(s){return(r+(s-t)%r)%r+t})},lC=function n(t,e,i){var r=e-t,s=r*2;return Ze(t)?I0(t,n(0,t.length-1),e):Sr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},ra=function(t){for(var e=0,i="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?m0:rh),i+=t.substr(e,r-e)+D0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},N0=function(t,e,i,r,s){var o=e-t,a=r-i;return Sr(s,function(l){return i+((l-t)/o*a||0)})},cC=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Be(t),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(Ze(t)&&!Ze(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},i=e}else r||(t=ns(Ze(t)?[]:{},t));if(!u){for(l in e)Sf.call(a,t,l,"get",e[l]);s=function(_){return wf(_,a)||(o?t.p:t)}}}return Sr(i,s)},Lm=function(t,e,i){var r=t.labels,s=Un,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Tn=function(t,e,i){var r=t.vars,s=r[e],o=me,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&mr.length&&Dl(),a&&(me=a),u=l?s.apply(c,l):s.call(c),me=o,u},bo=function(t){return xr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&Tn(t,"onInterrupt"),t},Us,O0=[],U0=function(t){if(t)if(t=!t.name&&t.default||t,_f()||t.headless){var e=t.name,i=Ee(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:ia,render:wf,add:Sf,kill:bC,modifier:TC,rawVars:0},o={targetTest:0,get:0,getSetter:bf,aliases:{},register:0};if(so(),t!==r){if(Mn[e])return;zn(r,zn(Il(t,s),o)),ns(r.prototype,ns(s,Il(t,o))),Mn[r.prop=e]=r,t.targetTest&&(ml.push(r),xf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}v0(e,r),t.register&&t.register(_n,r,fn)}else O0.push(t)},ae=255,wo={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},Tu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ae+.5|0},F0=function(t,e,i){var r=t?Fi(t)?[t>>16,t>>8&ae,t&ae]:0:wo.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wo[t])r=wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ae,r&ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ae,t&ae]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(rh),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Tu(l+1/3,s,o),r[1]=Tu(l,s,o),r[2]=Tu(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(d0),i&&r.length<4&&(r[3]=1),r}else r=t.match(rh)||wo.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/ae,o=r[1]/ae,a=r[2]/ae,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},B0=function(t){var e=[],i=[],r=-1;return t.split(_r).forEach(function(s){var o=s.match(Os)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Dm=function(t,e,i){var r="",s=(t+r).match(_r),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=F0(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=B0(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(_r,"1").split(Os),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(_r),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},_r=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wo)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),uC=/hsl[a]?\(/,z0=function(t){var e=t.join(" "),i;if(_r.lastIndex=0,_r.test(e))return i=uC.test(e),t[1]=Dm(t[1],i),t[0]=Dm(t[0],i,B0(t[1])),!0},sa,En=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=n()-r,y=p===!0,v,S,R,T;if((m>t||m<0)&&(i+=m-e),r+=m,R=r-i,v=R-o,(v>0||y)&&(T=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,f,T,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){_0&&(!sh&&_f()&&(ii=sh=window,gf=ii.document||{},Rn.gsap=_n,(ii.gsapVersions||(ii.gsapVersions=[])).push(_n.version),g0(Ll||ii.GreenSockGlobals||!ii.gsap&&ii||{}),O0.forEach(U0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,y){var v=m?function(S,R,T,A){p(S,R,T,A),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),so(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),so=function(){return!sa&&En.wake()},Jt={},hC=/^[\d.\-M][\d.\-,\s]/,fC=/["']/g,dC=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(fC,"").trim():+c,r=l.substr(a+1).trim();return e},pC=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},mC=function(t){var e=(t+"").split("("),i=Jt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[dC(e[1])]:pC(t).split(",").map(S0)):Jt._CE&&hC.test(t)?Jt._CE("",t):i},k0=function(t){return function(e){return 1-t(1-e)}},H0=function n(t,e){for(var i=t._first,r;i;)i instanceof rn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Jr=function(t,e){return t&&(Ee(t)?t:Jt[t]||mC(t))||e},ls=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return hn(t,function(a){Jt[a]=Rn[a]=s,Jt[o=a.toLowerCase()]=i;for(var l in s)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=s[l]}),s},G0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bu=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/ih*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*VR((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:G0(a);return s=ih/s,l.config=function(c,u){return n(t,c,u)},l},wu=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:G0(i);return r.config=function(s){return n(t,s)},r};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;ls(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;ls("Elastic",bu("in"),bu("out"),bu());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ls("Circ",function(n){return-(h0(1-n*n)-1)});ls("Sine",function(n){return n===1?1:-GR(n*kR)+1});ls("Back",wu("in"),wu("out"),wu());Jt.SteppedEase=Jt.steps=Rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-ce;return function(a){return((r*xa(0,o,a)|0)+s)*i}}};no.ease=Jt["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yf+=n+","+n+"Params,"});var V0=function(t,e){this.id=HR++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:y0,this.set=e?e.getSetter:bf},oa=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ro(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),sa||En.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(so(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mc(this,i),!s._dp||s.parent||b0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&li(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ce||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),M0(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?io(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ce?0:this._rts,this.totalTime(xa(-Math.abs(this._delay),this._tDur,s),r!==!1),pc(this),KR(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(so(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&li(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=qR);var r=Ke;return Ke=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ke=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Pm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Pm(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Dn(this,i),un(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,un(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ce)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=Ee(i)?i:E0,a=function(){var c=r.then;r.then=null,Ee(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){bo(this)},n}();zn(oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var rn=function(n){u0(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=un(i.sortChildren),xe&&li(i.parent||xe,wi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&w0(wi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Go(0,arguments,this),this},e.from=function(r,s,o){return Go(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Go(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ho(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ae(r,s,Dn(this,o),1),this},e.call=function(r,s,o){return li(this,Ae.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ae(r,o,Dn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ho(o).immediateRender=un(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Ho(a).immediateRender=un(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ue(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,p,m,y,v,S,R,T,A;if(this!==xe&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Ue(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),R=io(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),T&&g&1&&(f=c-f,A=1),g!==R&&!this._lock){var I=T&&R&1,k=I===(T&&g&1);if(g<R&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ue(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;H0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=tC(this,Ue(a),Ue(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-ce);break}}d=_}else{d=this._last;for(var M=r<0?r:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Ke&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=M?-ce:ce);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-ce)._zTime=f>=a?1:-1,this._ts))return this._start=S,pc(this),this.render(r,s,o);this._onUpdate&&!s&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Tn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Fi(s)||(s=Dn(this,s,r)),!(r instanceof oa)){if(Ze(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Be(r))return this.addLabel(r,s);if(Ee(r))r=Ae.delayedCall(0,r);else return this}return this!==r?li(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ae?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Be(r)?this.removeLabel(r):Ee(r)?this.killTweensOf(r):(dc(this,r),r===this._recent&&(this._recent=this._last),Zr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(En.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ae.delayedCall(0,s||ia,o);return a.data="isPause",this._hasPause=1,li(this,a,Dn(this,r))},e.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&xr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Fn(r),l=this._first,c=Fi(s),u;l;)l instanceof Ae?YR(l._targets,a)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ae.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ce,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&ro(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,zn({startAt:{time:Dn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Lm(this,Dn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Lm(this,Dn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Zr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Un,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,li(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ro(o,o===xe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(xe._ts&&(M0(xe,Nl(r,xe)),x0=En.frame),En.frame>=Am){Am+=wn.autoSleep||120;var s=xe._first;if((!s||!s._ts)&&wn.autoSleep&&En._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||En.sleep()}}},t}(oa);zn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _C=function(t,e,i,r,s,o,a){var l=new fn(this._pt,t,e,0,1,$0,null,s),c=0,u=0,h,f,d,_,g,p,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=ra(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),f=i.match(Su)||[];h=Su.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Vs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Su.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(p0.test(r)||m)&&(l.e=0),this._pt=l,l},Sf=function(t,e,i,r,s,o,a,l,c,u){Ee(r)&&(r=r(s||0,t,o));var h=t[e],f=i!=="get"?i:Ee(h)?c?t[e.indexOf("set")||!Ee(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ee(h)?c?MC:Y0:Tf,_;if(Be(r)&&(~r.indexOf("random(")&&(r=ra(r)),r.charAt(1)==="="&&(_=Vs(f,r)+(je(f)||0),(_||_===0)&&(r=_))),!u||f!==r||fh)return!isNaN(f*r)&&r!==""?(_=new fn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?EC:j0,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&vf(e,r),_C.call(this,t,e,f,r,d,l||wn.stringFilter,c))},gC=function(t,e,i,r,s){if(Ee(t)&&(t=Vo(t,s,e,i,r)),!pi(t)||t.style&&t.nodeType||Ze(t)||f0(t))return Be(t)?Vo(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,i,r);return o},W0=function(t,e,i,r,s,o){var a,l,c,u;if(Mn[t]&&(a=new Mn[t]).init(s,a.rawVars?e[t]:gC(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Us))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},sr,fh,Ef=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=t._overwrite==="auto"&&!pf,S=t.timeline,R,T,A,I,k,M,P,at,Z,O,$,G,X;if(S&&(!f||!s)&&(s="none"),t._ease=Jr(s,no.ease),t._yEase=h?k0(Jr(h===!0?s:h,no.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(at=p[0]?Kr(p[0]).harness:0,G=at&&r[at.prop],R=Il(r,xf),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?pl:XR),g._lazy=0),o){if(xr(t._startAt=Ae.set(p,zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return Tn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke||!a&&!d)&&t._startAt.revert(pl),a&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),A=zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&un(l),immediateRender:a,stagger:0,parent:m},R),G&&(A[at.prop]=G),xr(t._startAt=Ae.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke?t._startAt.revert(pl):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&un(l)||l&&!_,T=0;T<p.length;T++){if(k=p[T],P=k._gsap||Mf(p)[T]._gsap,t._ptLookup[T]=O={},oh[P.id]&&mr.length&&Dl(),$=y===p?T:y.indexOf(k),at&&(Z=new at).init(k,G||R,t,$,y)!==!1&&(t._pt=I=new fn(t._pt,k,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(Y){O[Y]=I}),Z.priority&&(M=1)),!at||G)for(A in R)Mn[A]&&(Z=W0(A,R,t,$,k,y))?Z.priority&&(M=1):O[A]=I=Sf.call(t,k,A,"get",R[A],$,y,0,r.stringFilter);t._op&&t._op[T]&&t.kill(k,t._op[T]),v&&t._pt&&(sr=t,xe.killTweensOf(k,O,t.globalTime(e)),X=!t.parent,sr=0),t._pt&&l&&(oh[P.id]=1)}M&&K0(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&S.render(Un,!0,!0)},vC=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return fh=1,t.vars[e]="+=0",Ef(t,a),fh=0,l?na(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=be(i)+je(h.e)),h.b&&(h.b=u.s+je(h.b))},xC=function(t,e){var i=t[0]?Kr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=ns({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},yC=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(Ze(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,i,r,s){return Ee(t)?t.call(e,i,r,s):Be(t)&&~t.indexOf("random(")?ra(t):t},X0=yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",q0={};hn(X0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return q0[n]=1});var Ae=function(n){u0(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ho(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=r.parent||xe,v=(Ze(i)||f0(i)?Fi(i[0]):"length"in r)?[i]:Fn(i),S,R,T,A,I,k,M,P;if(a._targets=v.length?Mf(v):na("GSAP target "+i+" not found. https://gsap.com",!wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ol(c)||ol(u)){if(r=a.vars,S=a.timeline=new rn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=wi(a),S._start=0,f||ol(c)||ol(u)){if(A=v.length,M=f&&P0(f),pi(f))for(I in f)~X0.indexOf(I)&&(P||(P={}),P[I]=f[I]);for(R=0;R<A;R++)T=Il(r,q0),T.stagger=0,m&&(T.yoyoEase=m),P&&ns(T,P),k=v[R],T.duration=+Vo(c,wi(a),R,k,v),T.delay=(+Vo(u,wi(a),R,k,v)||0)-a._delay,!f&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),S.to(k,T,M?M(R,k,v):0),S._ease=Jt.none;S.duration()?c=u=0:a.timeline=0}else if(_){Ho(zn(S.vars.defaults,{ease:"none"})),S._ease=Jr(_.ease||r.ease||"none");var at=0,Z,O,$;if(Ze(_))_.forEach(function(G){return S.to(v,G,">")}),S.duration();else{T={};for(I in _)I==="ease"||I==="easeEach"||yC(I,_[I],T,_.easeEach);for(I in T)for(Z=T[I].sort(function(G,X){return G.t-X.t}),at=0,R=0;R<Z.length;R++)O=Z[R],$={ease:O.e,duration:(O.t-(R?Z[R-1].t:0))/100*c},$[I]=O.v,S.to(v,$,at),at+=$.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!pf&&(sr=wi(a),xe.killTweensOf(v),sr=0),li(y,wi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ue(y._time)&&un(h)&&ZR(wi(a))&&y.data!=="nested")&&(a._tTime=-ce,a.render(Math.max(0,-u)||0)),p&&w0(wi(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ce&&!u?l:r<ce?0:r,f,d,_,g,p,m,y,v,S;if(!c)QR(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Ue(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===Ue(h/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=io(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&H0(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Ue(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(A0(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!_&&(Tn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ah(this,r,s,o),Tn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ah(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){sa||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ef(this,c),u=this._ease(c/this._dur),vC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(mc(this,0),this.parent||T0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,sr&&sr.vars.overwrite!==!0)._first||bo(this),this.parent&&o!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fn(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&$R(a,l))return s==="all"&&(this._pt=0),bo(this);for(h=this._op=this._op||[],s!=="all"&&(Be(s)&&(g={},hn(s,function(y){return g[y]=1}),s=g),s=xC(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&dc(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&bo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Go(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Go(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return xe.killTweensOf(r,s,o)},t}(oa);zn(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(n){Ae[n]=function(){var t=new rn,e=ch.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Tf=function(t,e,i){return t[e]=i},Y0=function(t,e,i){return t[e](i)},MC=function(t,e,i,r){return t[e](r.fp,i)},SC=function(t,e,i){return t.setAttribute(e,i)},bf=function(t,e){return Ee(t[e])?Y0:mf(t[e])&&t.setAttribute?SC:Tf},j0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},EC=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$0=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},wf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},TC=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},bC=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?dc(this,e,"_pt"):e.dep||(i=1),e=r;return!i},wC=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},K0=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},fn=function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||j0,this.d=l||this,this.set=c||Tf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=wC,this.m=i,this.mt=s,this.tween=r},n}();hn(yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return xf[n]=1});Rn.TweenMax=Rn.TweenLite=Ae;Rn.TimelineLite=Rn.TimelineMax=rn;xe=new rn({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=z0;var Qr=[],_l={},AC=[],Im=0,RC=0,Au=function(t){return(_l[t]||AC).map(function(e){return e()})},dh=function(){var t=Date.now(),e=[];t-Im>2&&(Au("matchMediaInit"),Qr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ii.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Au("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Im=t,Au("matchMedia"))},Z0=function(){function n(e,i){this.selector=i&&uh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=RC++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ee(i)&&(s=r,r=i,i=Ee);var o=this,a=function(){var c=me,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=uh(s)),me=o,h=r.apply(o,arguments),Ee(h)&&o._r.push(h),me=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===Ee?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=me;me=null,i(this),me=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ae&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ae)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},t.revert=function(i){this.kill(i||{})},n}(),CC=function(){function n(e){this.contexts=[],this.scope=e,me&&me.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){pi(i)||(i={matches:i});var o=new Z0(0,s||this.scope),a=o.conditions={},l,c,u;me&&!o.selector&&(o.selector=me.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ii.matchMedia(i[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(dh):l.addEventListener("change",dh)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ol={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return U0(r)})},timeline:function(t){return new rn(t)},getTweensOf:function(t,e){return xe.getTweensOf(t,e)},getProperty:function(t,e,i,r){Be(t)&&(t=Fn(t)[0]);var s=Kr(t||{}).get,o=i?E0:S0;return i==="native"&&(i=""),t&&(e?o((Mn[e]&&Mn[e].get||s)(t,e,i,r)):function(a,l,c){return o((Mn[a]&&Mn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Fn(t),t.length>1){var r=t.map(function(u){return _n.quickSetter(u,e,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=Mn[e],a=Kr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Us._pt=0,h.init(t,i?u+i:u,Us,0,[t]),h.render(1,h),Us._pt&&wf(1,Us)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=_n.to(t,ns((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jr(t.ease,no.ease)),Rm(no,t||{})},config:function(t){return Rm(wn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mn[a]&&!Rn[a]&&na(e+" effect requires "+a+" plugin.")}),Eu[e]=function(a,l,c){return i(Fn(a),zn(l||{},s),c)},o&&(rn.prototype[e]=function(a,l,c){return this.add(Eu[e](a,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Jr(e)},parseEase:function(t,e){return arguments.length?Jr(t,e):Jt},getById:function(t){return xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new rn(t),r,s;for(i.smoothChildTiming=un(t.smoothChildTiming),xe.remove(i),i._dp=0,i._time=i._tTime=xe._time,r=xe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ae&&r.vars.onComplete===r._targets[0]))&&li(i,r,r._start-r._delay),r=s;return li(xe,i,0),i},context:function(t,e){return t?new Z0(t,e):me},matchMedia:function(t){return new CC(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||dh()},addEventListener:function(t,e){var i=_l[t]||(_l[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=_l[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:aC,wrapYoyo:lC,distribute:P0,random:D0,snap:L0,normalize:oC,getUnit:je,clamp:nC,splitColor:F0,toArray:Fn,selector:uh,mapRange:N0,pipe:rC,unitize:sC,interpolate:cC,shuffle:C0},install:g0,effects:Eu,ticker:En,updateRoot:rn.updateRoot,plugins:Mn,globalTimeline:xe,core:{PropTween:fn,globals:v0,Tween:Ae,Timeline:rn,Animation:oa,getCache:Kr,_removeLinkedListItem:dc,reverting:function(){return Ke},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return pf=t}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ol[n]=Ae[n]});En.add(rn.updateRoot);Us=Ol.to({},{duration:0});var PC=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},LC=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=PC(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Ru=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Be(s)&&(l={},hn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}LC(a,s)}}}},_n=Ol.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ke?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ru("roundProps",hh),Ru("modifiers"),Ru("snap",L0))||Ol;Ae.version=rn.version=_n.version="3.12.5";_0=1;_f()&&so();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nm,or,Ws,Af,Wr,Om,Rf,DC=function(){return typeof window<"u"},Bi={},zr=180/Math.PI,Xs=Math.PI/180,As=Math.atan2,Um=1e8,Cf=/([A-Z])/g,IC=/(left|right|width|margin|padding|x)/i,NC=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ph=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},OC=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},UC=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},FC=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},J0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Q0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},BC=function(t,e,i){return t.style[e]=i},zC=function(t,e,i){return t.style.setProperty(e,i)},kC=function(t,e,i){return t._gsap[e]=i},HC=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},GC=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},VC=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Me="transform",dn=Me+"Origin",WC=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Bi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ri(r,a)}):this.tfm[t]=o.x?o[t]:Ri(r,t),t===dn&&(this.tfm.zOrigin=o.zOrigin);else return ci.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Me)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(dn,e,"")),t=Me}(s||e)&&this.props.push(t,e,s[t])},tv=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},XC=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Cf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Rf(),(!s||!s.isStart)&&!i[Me]&&(tv(i),r.zOrigin&&i[dn]&&(i[dn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ev=function(t,e){var i={target:t,props:[],revert:XC,save:WC};return t._gsap||_n.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},nv,mh=function(t,e){var i=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):or.createElement(t);return i&&i.style?i:or.createElement(t)},hi=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Cf,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,oo(e)||e,1)||""},Fm="O,Moz,ms,Ms,Webkit".split(","),oo=function(t,e,i){var r=e||Wr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Fm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Fm[o]:"")+t},_h=function(){DC()&&window.document&&(Nm=window,or=Nm.document,Ws=or.documentElement,Wr=mh("div")||{style:{}},mh("div"),Me=oo(Me),dn=Me+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nv=!!oo("perspective"),Rf=_n.core.reverting,Af=1)},Cu=function n(t){var e=mh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Ws.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ws.removeChild(e),this.style.cssText=s,o},Bm=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},iv=function(t){var e;try{e=t.getBBox()}catch{e=Cu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Cu||(e=Cu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bm(t,["x","cx","x1"])||0,y:+Bm(t,["y","cy","y1"])||0,width:0,height:0}:e},rv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&iv(t))},is=function(t,e){if(e){var i=t.style,r;e in Bi&&e!==dn&&(e=Me),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Cf,"-$1").toLowerCase())):i.removeAttribute(e)}},ar=function(t,e,i,r,s,o){var a=new fn(t._pt,e,i,0,1,o?Q0:J0);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},zm={deg:1,rad:1,turn:1},qC={grid:1,flex:1},yr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Wr.style,l=IC.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,p,m;if(r===o||!s||zm[r]||zm[o])return s;if(o!=="px"&&!f&&(s=n(t,e,i,"px")),m=t.getCTM&&rv(t),(d||o==="%")&&(Bi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],be(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===or||!g.appendChild)&&(g=or.body),p=g._gsap,p&&d&&p.width&&l&&p.time===En.time&&!p.uncache)return be(s/p.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,_=t[u],y?t.style[e]=y:is(t,e)}else(d||o==="%")&&!qC[hi(g,"display")]&&(a.position=hi(t,"position")),g===t&&(a.position="static"),g.appendChild(Wr),_=Wr[u],g.removeChild(Wr),a.position="absolute";return l&&d&&(p=Kr(g),p.time=En.time,p.width=g[u]),be(f?_*s/h:_&&s?h/_*s:0)},Ri=function(t,e,i,r){var s;return Af||_h(),e in ci&&e!=="transform"&&(e=ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bi[e]&&e!=="transform"?(s=la(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Fl(hi(t,dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ul[e]&&Ul[e](t,e,i)||hi(t,e)||y0(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?yr(t,e,s,i)+i:s},YC=function(t,e,i,r){if(!i||i==="none"){var s=oo(e,t,1),o=s&&hi(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=hi(t,"borderTopColor"))}var a=new fn(this._pt,t.style,e,0,1,$0),l=0,c=0,u,h,f,d,_,g,p,m,y,v,S,R;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(g=t.style[e],t.style[e]=r,r=hi(t,e)||r,g?t.style[e]=g:is(t,e)),u=[i,r],z0(u),i=u[0],r=u[1],f=i.match(Os)||[],R=r.match(Os)||[],R.length){for(;h=Os.exec(r);)p=h[0],y=r.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Vs(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=Os.lastIndex-v.length,v||(v=v||wn.units[e]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(d=yr(t,e,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Q0:J0;return p0.test(r)&&(a.e=0),this._pt=a,a},km={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jC=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=km[i]||i,e[1]=km[r]||r,e.join(" ")},$C=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Bi[a]&&(l=1,a=a==="transformOrigin"?dn:Me),is(i,a);l&&(is(i,Me),o&&(o.svg&&i.removeAttribute("transform"),la(i,1),o.uncache=1,tv(r)))}},Ul={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new fn(t._pt,e,i,0,0,$C);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},aa=[1,0,0,1,0,0],sv={},ov=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Hm=function(t){var e=hi(t,Me);return ov(e)?aa:e.substr(7).match(d0).map(be)},Pf=function(t,e){var i=t._gsap||Kr(t),r=t.style,s=Hm(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!t.offsetParent&&t!==Ws&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ws.appendChild(t)),s=Hm(t),l?r.display=l:is(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gh=function(t,e,i,r,s,o){var a=t._gsap,l=s||Pf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],v=e.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,T,A,I,k;i?l!==aa&&(A=d*p-_*g)&&(I=S*(p/A)+R*(-g/A)+(g*y-p*m)/A,k=S*(-_/A)+R*(d/A)-(d*y-_*m)/A,S=I,R=k):(T=iv(t),S=T.x+(~v[0].indexOf("%")?S/100*T.width:S),R=T.y+(~(v[1]||v[0]).indexOf("%")?R/100*T.height:R)),r||r!==!1&&a.smooth?(m=S-c,y=R-u,a.xOffset=h+(m*d+y*g)-m,a.yOffset=f+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[dn]="0px 0px",o&&(ar(o,a,"xOrigin",c,S),ar(o,a,"yOrigin",u,R),ar(o,a,"xOffset",h,a.xOffset),ar(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+R)},la=function(t,e){var i=t._gsap||new V0(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=hi(t,dn)||"0",u,h,f,d,_,g,p,m,y,v,S,R,T,A,I,k,M,P,at,Z,O,$,G,X,Y,ot,pt,dt,Mt,Ot,K,ht;return u=h=f=g=p=m=y=v=S=0,d=_=1,i.svg=!!(t.getCTM&&rv(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Me]!=="none"?l[Me]:"")),r.scale=r.rotate=r.translate="none"),A=Pf(t,i.svg),i.svg&&(i.uncache?(Y=t.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),gh(t,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,A)),R=i.xOrigin||0,T=i.yOrigin||0,A!==aa&&(P=A[0],at=A[1],Z=A[2],O=A[3],u=$=A[4],h=G=A[5],A.length===6?(d=Math.sqrt(P*P+at*at),_=Math.sqrt(O*O+Z*Z),g=P||at?As(at,P)*zr:0,y=Z||O?As(Z,O)*zr+g:0,y&&(_*=Math.abs(Math.cos(y*Xs))),i.svg&&(u-=R-(R*P+T*Z),h-=T-(R*at+T*O))):(ht=A[6],Ot=A[7],pt=A[8],dt=A[9],Mt=A[10],K=A[11],u=A[12],h=A[13],f=A[14],I=As(ht,Mt),p=I*zr,I&&(k=Math.cos(-I),M=Math.sin(-I),X=$*k+pt*M,Y=G*k+dt*M,ot=ht*k+Mt*M,pt=$*-M+pt*k,dt=G*-M+dt*k,Mt=ht*-M+Mt*k,K=Ot*-M+K*k,$=X,G=Y,ht=ot),I=As(-Z,Mt),m=I*zr,I&&(k=Math.cos(-I),M=Math.sin(-I),X=P*k-pt*M,Y=at*k-dt*M,ot=Z*k-Mt*M,K=O*M+K*k,P=X,at=Y,Z=ot),I=As(at,P),g=I*zr,I&&(k=Math.cos(I),M=Math.sin(I),X=P*k+at*M,Y=$*k+G*M,at=at*k-P*M,G=G*k-$*M,P=X,$=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=be(Math.sqrt(P*P+at*at+Z*Z)),_=be(Math.sqrt(G*G+ht*ht)),I=As($,G),y=Math.abs(I)>2e-4?I*zr:0,S=K?1/(K<0?-K:K):0),i.svg&&(X=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ov(hi(t,Me)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=be(d),i.scaleY=be(_),i.rotation=be(g)+a,i.rotationX=be(p)+a,i.rotationY=be(m)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[dn]=Fl(c)),i.xOffset=i.yOffset=0,i.force3D=wn.force3D,i.renderTransform=i.svg?ZC:nv?av:KC,i.uncache=0,i},Fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Pu=function(t,e,i){var r=je(e);return be(parseFloat(e)+parseFloat(yr(t,"x",i+"px",r)))+r},KC=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,av(t,e)},Or="0deg",Mo="0px",Ur=") ",av=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,y=i.target,v=i.zOrigin,S="",R=m==="auto"&&t&&t!==1||m===!0;if(v&&(h!==Or||u!==Or)){var T=parseFloat(u)*Xs,A=Math.sin(T),I=Math.cos(T),k;T=parseFloat(h)*Xs,k=Math.cos(T),o=Pu(y,o,A*k*-v),a=Pu(y,a,-Math.sin(T)*-v),l=Pu(y,l,I*k*-v+v)}p!==Mo&&(S+="perspective("+p+Ur),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(R||o!==Mo||a!==Mo||l!==Mo)&&(S+=l!==Mo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ur),c!==Or&&(S+="rotate("+c+Ur),u!==Or&&(S+="rotateY("+u+Ur),h!==Or&&(S+="rotateX("+h+Ur),(f!==Or||d!==Or)&&(S+="skew("+f+", "+d+Ur),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ur),y.style[Me]=S||"translate(0, 0)"},ZC=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,y=i.forceCSS,v=parseFloat(o),S=parseFloat(a),R,T,A,I,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xs,c*=Xs,R=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=Xs,k=Math.tan(c-u),k=Math.sqrt(1+k*k),A*=k,I*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),R*=k,T*=k)),R=be(R),T=be(T),A=be(A),I=be(I)):(R=h,I=f,T=A=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=yr(d,"x",o,"px"),S=yr(d,"y",a,"px")),(_||g||p||m)&&(v=be(v+_-(_*R+g*A)+p),S=be(S+g-(_*T+g*I)+m)),(r||s)&&(k=d.getBBox(),v=be(v+r/100*k.width),S=be(S+s/100*k.height)),k="matrix("+R+","+T+","+A+","+I+","+v+","+S+")",d.setAttribute("transform",k),y&&(d.style[Me]=k)},JC=function(t,e,i,r,s){var o=360,a=Be(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Um)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Um)%o-~~(c/o)*o)),t._pt=f=new fn(t._pt,e,i,r,c,OC),f.e=u,f.u="deg",t._props.push(i),f},Gm=function(t,e){for(var i in e)t[i]=e[i];return t},QC=function(t,e,i){var r=Gm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Me]=e,a=la(i,1),is(i,Me),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Me],o[Me]=e,a=la(i,1),o[Me]=c);for(l in Bi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=je(c),_=je(u),h=d!==_?yr(i,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new fn(t._pt,a,l,h,f-h,ph),t._pt.u=_||0,t._props.push(l));Gm(a,r)};hn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});Ul[t>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Ri(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var lv={name:"css",register:_h,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,h,f,d,_,g,p,m,y,v,S,R,T,A,I;Af||_h(),this.styles=this.styles||ev(t),I=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Mn[g]&&W0(g,e,i,r,t,s)))){if(d=typeof u,_=Ul[g],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ra(u)),_)_(this,t,g,u,i)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",_r.lastIndex=0,_r.test(c)||(p=je(c),m=je(u)),m?p!==m&&(c=yr(t,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,t,s):l[g],Be(c)&&~c.indexOf("random(")&&(c=ra(c)),je(c+"")||c==="auto"||(c+=wn.units[g]||je(Ri(t,g))||""),(c+"").charAt(1)==="="&&(c=Ri(t,g))):c=Ri(t,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in ci&&(g==="autoAlpha"&&(f===1&&Ri(t,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),ar(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Bi,v){if(this.styles.save(g),S||(R=t._gsap,R.renderTransform&&!e.parseTransform||la(t,e.parseTransform),T=e.smoothOrigin!==!1&&R.smooth,S=this._pt=new fn(this._pt,a,Me,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new fn(this._pt,R,"scaleY",R.scaleY,(y?Vs(R.scaleY,y+h):h)-R.scaleY||0,ph),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(dn,0,a[dn]),u=jC(u),R.svg?gh(t,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&ar(this,R,"zOrigin",R.zOrigin,m),ar(this,a,g,Fl(c),Fl(u)));continue}else if(g==="svgOrigin"){gh(t,u,1,T,0,this);continue}else if(g in sv){JC(this,R,g,f,y?Vs(f,y+u):u);continue}else if(g==="smoothOrigin"){ar(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){QC(this,u,t);continue}}else g in a||(g=oo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!NC.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=je(u)||(g in wn.units?wn.units[g]:p),p!==m&&(f=yr(t,g,c,m)),this._pt=new fn(this._pt,v?R:a,g,f,(y?Vs(f,y+h):h)-f,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?FC:ph),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=UC);else if(g in a)YC.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,r,s);else if(g!=="parseTransform"){vf(g,u);continue}v||(g in a?I.push(g,0,a[g]):I.push(g,1,c||t[g])),o.push(g)}}A&&K0(this)},render:function(t,e){if(e.tween._time||!Rf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ri,aliases:ci,getSetter:function(t,e,i){var r=ci[e];return r&&r.indexOf(",")<0&&(e=r),e in Bi&&e!==dn&&(t._gsap.x||Ri(t,"x"))?i&&Om===i?e==="scale"?HC:kC:(Om=i||{})&&(e==="scale"?GC:VC):t.style&&!mf(t.style[e])?BC:~e.indexOf("-")?zC:bf(t,e)},core:{_removeProperty:is,_getMatrix:Pf}};_n.utils.checkPrefix=oo;_n.core.getStyleSaver=ev;(function(n,t,e,i){var r=hn(n+","+t+","+e,function(s){Bi[s]=1});hn(t,function(s){wn.units[s]="deg",sv[s]=1}),ci[r[13]]=n+","+t,hn(i,function(s){var o=s.split(":");ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wn.units[n]="px"});_n.registerPlugin(lv);var Ki=_n.registerPlugin(lv)||_n;Ki.core.Tween;const fi=n=>Number.isFinite(n)&&!Number.isNaN(n),Bl=n=>typeof n=="object"&&n!==null,tP=n=>typeof n=="function",zl=n=>Bl(n)&&fi(n.col)&&fi(n.row),eP=n=>Bl(n)&&fi(n.x)&&fi(n.y),vh=n=>Array.isArray(n)&&fi(n[0])&&fi(n[1]),_c=(n,t)=>t+n*(t&1)>>1,xh=([n,t,e=-n-t])=>({q:n,r:t,s:e});function kl({q:n,r:t,s:e}){const i=fi(n),r=fi(t),s=fi(e);if(i&&r&&s)return{q:n,r:t,s:e};if(i&&r)return{q:n,r:t,s:-n-t};if(i&&s)return{q:n,r:-n-e,s:e};if(r&&s)return{q:-t-e,r:t,s:e};throw new TypeError(`Can't determine three cube coordinates from less than two coordinates. Received: { q: ${n}, r: ${t}, s: ${e} }.`)}var $n=(n=>(n.FLAT="FLAT",n.POINTY="POINTY",n))($n||{});function nP(n,t){if(Bl(n)&&n.xRadius>0&&n.yRadius>0)return n;if(Bl(n)&&n.width>0&&n.height>0){const{width:e,height:i}=n;return t===$n.POINTY?{xRadius:e/Math.sqrt(3),yRadius:i/2}:{xRadius:e/2,yRadius:i/Math.sqrt(3)}}if(n>0)return{xRadius:n,yRadius:n};throw new TypeError(`Invalid dimensions: ${JSON.stringify(n)}. Dimensions must be expressed as an Ellipse ({ xRadius: number, yRadius: number }), a Rectangle ({ width: number, height: number }) or a number.`)}function iP(n,t){if(eP(n))return n;if(!t)throw new TypeError(`Supply a bounding box ({ width: number, height: number }). Received: ${JSON.stringify(t)}`);if(n==="topLeft")return{x:t.width*-.5,y:t.height*-.5};throw new TypeError(`Invalid origin: ${JSON.stringify(n)}. Origin must be expressed as a Point ({ x: number, y: number }) or the string 'topLeft'.`)}class Lf{constructor(t=[0,0]){Mc(this,"q");Mc(this,"r");const{q:e,r:i}=ca(this,t);this.q=e,this.r=i}static get settings(){const{dimensions:t,orientation:e,origin:i,offset:r}=this.prototype;return{dimensions:t,orientation:e,origin:i,offset:r}}get center(){const{width:t,height:e,x:i,y:r}=this;return{x:t/2-i,y:e/2-r}}get col(){return Vm(this).col}get corners(){const{orientation:t,width:e,height:i,x:r,y:s}=this;return t===$n.POINTY?rP(e,i,r,s):sP(e,i,r,s)}get dimensions(){return Ao.dimensions}get height(){const{orientation:t,dimensions:{yRadius:e}}=this;return t===$n.POINTY?e*2:e*Math.sqrt(3)}get isFlat(){return this.orientation===$n.FLAT}get isPointy(){return this.orientation===$n.POINTY}get orientation(){return Ao.orientation}get origin(){return Ao.origin}get offset(){return Ao.offset}get row(){return Vm(this).row}get width(){const{orientation:t,dimensions:{xRadius:e}}=this;return t===$n.POINTY?e*Math.sqrt(3):e*2}get x(){return Wm(this).x}get y(){return Wm(this).y}get s(){return-this.q-this.r}clone(t=this){return new this.constructor(t)}equals(t){return oP(this,zl(t)?fv(this,t):t)}toString(){return`${this.constructor.name}(${this.q},${this.r})`}translate(t){return uP(this,t)}}const Ao={dimensions:{xRadius:1,yRadius:1},orientation:$n.POINTY,origin:{x:0,y:0},offset:-1},rP=(n,t,e,i)=>[{x:e+n*.5,y:i-t*.25},{x:e+n*.5,y:i+t*.25},{x:e,y:i+t*.5},{x:e-n*.5,y:i+t*.25},{x:e-n*.5,y:i-t*.25},{x:e,y:i-t*.5}],sP=(n,t,e,i)=>[{x:e+n*.25,y:i-t*.5},{x:e+n*.5,y:i},{x:e+n*.25,y:i+t*.5},{x:e-n*.25,y:i+t*.5},{x:e-n*.5,y:i},{x:e-n*.25,y:i-t*.5}];function cv(n){const{dimensions:t,orientation:e,origin:i,offset:r}={...Ao,...n};return class extends Lf{get dimensions(){return nP(t,e)}get orientation(){return e}get origin(){return iP(i,this)}get offset(){return r}}}function oP(n,t){if(zl(n)&&zl(t))return n.col===t.col&&n.row===t.row;if(Object.hasOwn(n,"col")||Object.hasOwn(t,"col"))throw new Error(`Can't compare coordinates where one are offset coordinates. Either pass two offset coordinates or two axial/cube coordinates. Received: ${JSON.stringify(n)} and ${JSON.stringify(t)}`);const e=vh(n)?xh(n):n,i=vh(t)?xh(t):t;return e.q===i.q&&e.r===i.r}const aP=(n,t,e)=>({col:n+_c(e,t),row:t}),lP=(n,t,e)=>({col:n,row:t+_c(e,n)}),Vm=({q:n,r:t,offset:e,isPointy:i})=>i?aP(n,t,e):lP(n,t,e),Wm=({orientation:n,dimensions:{xRadius:t,yRadius:e},origin:{x:i,y:r},q:s,r:o})=>n===$n.POINTY?{x:t*Math.sqrt(3)*(s+o/2)-i,y:e*3/2*o-r}:{x:t*3/2*s-i,y:e*Math.sqrt(3)*(o+s/2)-r},uv=(n,t,e)=>{const i=n-_c(e,t),r=t,s=-i-r;return{q:i,r,s}},hv=(n,t,e)=>{const i=n,r=t-_c(e,n),s=-i-r;return{q:i,r,s}},fv=({offset:n,orientation:t},{col:e,row:i})=>t===$n.POINTY?uv(e,i,n):hv(e,i,n),yh=n=>{const{q:t,r:e,s:i}=kl(n);let r=Math.round(t),s=Math.round(e),o=Math.round(i);const a=Math.abs(t-r),l=Math.abs(e-s),c=Math.abs(i-o);return a>l&&a>c?r=-s-o:l>c?s=-r-o:o=-r-s,{q:r,r:s,s:o}},cP=({dimensions:{xRadius:n,yRadius:t},origin:e,orientation:i},{x:r,y:s})=>(r+=e.x,s+=e.y,i===$n.POINTY?yh({q:Math.sqrt(3)*r/(3*n)-s/(3*t),r:2/3*(s/t)}):yh({q:2/3*(r/n),r:Math.sqrt(3)*s/(3*t)-r/(3*n)}));function ca(n,t){return vh(t)?xh(t):zl(t)?fv(n,t):kl(t)}function uP(n,t){const{q:e,r:i,s:r}=kl(n),{q:s,r:o,s:a}=kl(t),l={q:e+s,r:i+o,s:r+a};return n instanceof Lf?n.clone(l):l}function Hl(n,t,e){const{q:i,r,s}=ca(n,t),{q:o,r:a,s:l}=ca(n,e);return Math.max(Math.abs(i-o),Math.abs(r-a),Math.abs(s-l))}var Mh=(n=>(n.CLOCKWISE="CLOCKWISE",n.COUNTERCLOCKWISE="COUNTERCLOCKWISE",n))(Mh||{}),bn=(n=>(n[n.N=0]="N",n[n.NE=1]="NE",n[n.E=2]="E",n[n.SE=3]="SE",n[n.S=4]="S",n[n.SW=5]="SW",n[n.W=6]="W",n[n.NW=7]="NW",n))(bn||{});const hP=[null,{q:1,r:-1},{q:1,r:0},{q:0,r:1},null,{q:-1,r:1},{q:-1,r:0},{q:0,r:-1}],fP=[{q:0,r:-1},{q:1,r:-1},null,{q:1,r:0},{q:0,r:1},{q:-1,r:1},null,{q:-1,r:0}],dP=({offset:n,q:t,r:e,col:i,row:r},s)=>{if(s===bn.S||s===bn.N){const a=s===bn.S?r+1:r-1;return uv(i,a,n)}const o=hP[s];return{q:t+o.q,r:e+o.r}},pP=({offset:n,q:t,r:e,col:i,row:r},s)=>{if(s===bn.E||s===bn.W){const a=s===bn.E?i+1:i-1;return hv(a,r,n)}const o=fP[s];return{q:t+o.q,r:e+o.r}},Sh=(n,t)=>n.clone(n.isPointy?dP(n,t):pP(n,t));function Eh(n){return Array.isArray(n)?function(t,e){const i=[];let r=e;for(const s of n)for(const o of s(t,r))i.push(r=o);return i}:n}function mP(n){return _P(n)?gP(n):vP(n)}function _P(n){return n.direction in bn}function gP({start:n,direction:t,length:e}){return function(i,r){const s=[];let o=i(n??r);!n&&r&&(o=Sh(o,t));for(let a=0;a<e;a++)s.push(o),o=Sh(o,t);return s}}function vP({start:n,stop:t}){return function(e,i){const r=[],s=e(n??i),o=Xm(s),a=Xm(ca(s,t)),l=xP(o,a),c=Hl(s,s,t),u=1/Math.max(c,1);let h=!n&&i?1:0;for(h;h<=c;h++){const f=yh(l(u*h));r.push(e(f))}return r}}function Xm({q:n,r:t,s:e}){return{q:n+1e-6,r:t+1e-6,s:e+-2e-6}}function xP(n,t){return e=>{const i=n.q*(1-e)+t.q*e,r=n.r*(1-e)+t.r*e;return{q:i,r}}}function yP(n,t,{includeSource:e=!0}={}){return function(i,r){const s=[];for(const o of Eh(n)(i,r)){e&&s.push(o);for(const a of Eh(t)(i,o))s.push(a)}return s}}bn.E,bn.N,bn.S,bn.W;function dv(n){const{center:t,rotation:e=Mh.CLOCKWISE}=n;return function(i,r){const s=e.toUpperCase(),o=[];let{radius:a}=n;const l=fi(a);let c;l?c=i(t).translate({q:a,s:-a}):(c=i(n.start??r),a=Hl(c,t,c));const{q:u,r:h,s:f}=ca(c,t);let d=i({q:u,r:h-a,s:f+a});if(s===Mh.CLOCKWISE)for(let p=0;p<6;p++)for(let m=0;m<a;m++){const{q:y,r:v}=qm[p];d=i({q:d.q+y,r:d.r+v}),o.push(d)}else for(let p=5;p>=0;p--)for(let m=0;m<a;m++){const{q:y,r:v}=qm[p];d=i({q:d.q-y,r:d.r-v}),o.push(d)}const _=l?!1:!n.start&&r,g=o.findIndex(p=>p.equals(c));return o.slice(g+(_?1:0)).concat(o.slice(0,g))}}const qm=[{q:1,r:0},{q:0,r:1},{q:-1,r:1},{q:-1,r:0},{q:0,r:-1},{q:1,r:-1}];function MP({radius:n,start:t,rotation:e}){return function(i,r){const s=t??r??[0,0],o=!t&&r?n:n+1;return yP(mP({start:t,direction:bn.N,length:o}),dv({center:s,rotation:e}))(i,r)}}var In,ir,Xr,Ro,ua,bh,ha,wh,fa,Ah;const Ai=class Ai{constructor(t,e=[]){wr(this,Xr);wr(this,ua);wr(this,ha);wr(this,fa);wr(this,In,void 0);wr(this,ir,new Map);if(t instanceof Ai){Ec(this,In,vn(t,In)),this.setHexes(t);return}Ec(this,In,t),this.setHexes(kn(this,ua,bh).call(this,e))}static fromIterable(t){const e=t[Symbol.iterator]().next().value;if(!e)throw new TypeError(`Can't create grid from empty iterable: ${JSON.stringify(t)}`);return new Ai(e.constructor,t)}static fromJSON({hexSettings:t,coordinates:e},i){if(i){const s=e.map(i),o=s.length>0?s[0].constructor:i({q:0,r:0},0,[{q:0,r:0}]).constructor;return new Ai(o,s)}const r=cv(t);return new Ai(r,e.map(s=>new r(s)))}get size(){return vn(this,ir).size}get pixelWidth(){if(this.size===0)return 0;const{isPointy:t,width:e}=this.hexPrototype,i=this.toArray(),{0:r,length:s,[s-1]:o}=t?i.sort((a,l)=>l.s-a.s||a.q-l.q):i.sort((a,l)=>a.q-l.q);return o.x-r.x+e}get pixelHeight(){if(this.size===0)return 0;const{isPointy:t,height:e}=this.hexPrototype,i=this.toArray(),{0:r,length:s,[s-1]:o}=t?i.sort((a,l)=>a.r-l.r):i.sort((a,l)=>l.s-a.s||a.r-l.r);return o.y-r.y+e}[Symbol.iterator](){return vn(this,ir).values()}get hexPrototype(){return vn(this,In).prototype}createHex(t){return new(vn(this,In))(t)}getHex(t){const e=this.createHex(t);return vn(this,ir).get(e.toString())}hasHex(t){return vn(this,ir).has(t.toString())}setHexes(t){for(const e of t){const i=e instanceof Lf?e:new(vn(this,In))(e);kn(this,Xr,Ro).call(this,i)}return this}filter(t){var i;const e=new Ai(vn(this,In));for(const r of this)t(r)&&kn(i=e,Xr,Ro).call(i,r);return e}map(t){var i;const e=new Ai(vn(this,In));for(const r of this)kn(i=e,Xr,Ro).call(i,t(r));return e}traverse(t,{bail:e=!1}={}){var r;const i=new Ai(vn(this,In));for(const s of kn(this,ua,bh).call(this,t)){const o=this.getHex(s);if(o)kn(r=i,Xr,Ro).call(r,o);else if(e)return i}return i}forEach(t){for(const e of this)t(e);return this}reduce(t,e){if(e===void 0){let r,s,o;for(const a of this)s=o,o=a,s&&(r=t(s,o));return r}let i=e;for(const r of this)i=t(i,r);return i}toArray(){return Array.from(this)}toJSON(){const{dimensions:t,orientation:e,origin:i,offset:r}=this.hexPrototype;return{hexSettings:{dimensions:t,orientation:e,origin:i,offset:r},coordinates:this.toArray()}}toString(){return`${this.constructor.name}(${this.size})`}pointToHex(t,{allowOutside:e=!0}={}){const i=cP(this.hexPrototype,t),r=this.getHex(i);return e?r??this.createHex(i):r}distance(t,e,{allowOutside:i=!0}={}){if(i)return Hl(this.hexPrototype,t,e);const r=this.getHex(t),s=this.getHex(e);if(!(!r||!s))return Hl(this.hexPrototype,r,s)}neighborOf(t,e,{allowOutside:i=!0}={}){const r=Sh(this.createHex(t),e),s=this.getHex(r);return i?s??r:s}};In=new WeakMap,ir=new WeakMap,Xr=new WeakSet,Ro=function(t){vn(this,ir).set(t.toString(),t)},ua=new WeakSet,bh=function(t){return kn(this,ha,wh).call(this,t)?kn(this,fa,Ah).call(this,t):Array.isArray(t)&&kn(this,ha,wh).call(this,t[0])?kn(this,fa,Ah).call(this,Eh(t)):t},ha=new WeakSet,wh=function(t){return tP(t)},fa=new WeakSet,Ah=function(t){return t(this.createHex.bind(this))};let Th=Ai;const SP=.5*(Math.sqrt(3)-1),So=(3-Math.sqrt(3))/6,Ym=n=>Math.floor(n)|0,jm=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function $m(n=Math.random){const t=EP(n),e=new Float64Array(t).map(r=>jm[r%12*2]),i=new Float64Array(t).map(r=>jm[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*SP,h=Ym(s+u),f=Ym(o+u),d=(h+f)*So,_=h-d,g=f-d,p=s-_,m=o-g;let y,v;p>m?(y=1,v=0):(y=0,v=1);const S=p-y+So,R=m-v+So,T=p-1+2*So,A=m-1+2*So,I=h&255,k=f&255;let M=.5-p*p-m*m;if(M>=0){const Z=I+t[k],O=e[Z],$=i[Z];M*=M,a=M*M*(O*p+$*m)}let P=.5-S*S-R*R;if(P>=0){const Z=I+y+t[k+v],O=e[Z],$=i[Z];P*=P,l=P*P*(O*S+$*R)}let at=.5-T*T-A*A;if(at>=0){const Z=I+1+t[k+1],O=e[Z],$=i[Z];at*=at,c=at*at*(O*T+$*A)}return 70*(a+l+c)}}function EP(n){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=e[i];e[i]=e[r],e[r]=s}for(let i=256;i<512;i++)e[i]=e[i-256];return e}const pv={TYPE:"ISLAND",SIZE:12,HMAP_SEED_MIN_HEIGHT:.3,HMAP_ZOOM:600,SEA_LEVEL:-3,SMOOTHING:6,getHeight:(n,t)=>Math.ceil(n*10)*10+Xe.SEA_LEVEL*10+mv(t)/2},TP={TYPE:"VALLEY",SIZE:12,HMAP_SEED_MIN_HEIGHT:.1,HMAP_ZOOM:500,SEA_LEVEL:5,SMOOTHING:2,getHeight:(n,t)=>Math.ceil(n*10)*10+Xe.SEA_LEVEL*10},bP={TYPE:"LAKE",SIZE:12,HMAP_SEED_MIN_HEIGHT:.1,HMAP_ZOOM:500,SEA_LEVEL:2,SMOOTHING:5,getHeight:(n,t)=>Math.ceil(n*10)*10+Xe.SEA_LEVEL*10-mv(t)/2},wP=[pv,TP,bP];let Xe=pv;function AP(n){Xe=wP[n]}function en(n){return Math.floor(Math.random()*n)}function ji(n){return Math.random()>.5?-n:n}function ya(n,t,e){return(n-e)/(t-e)}function mv(n){return Math.ceil((1-ya(RP(n),Xe.SIZE*50,0))*10)*10}function RP({x:n,y:t}){return Math.sqrt(n*n+t*t)}function CP({x:n,y:t},{x:e,y:i}){return{x:(n+e)/2,y:(t+i)/2}}function PP({x:n,y:t},{x:e,y:i}){return Math.atan2(i-t,e-n)*180/Math.PI}function Km(n,t,e){return t=t*(Math.PI/180),{x:n.x+Math.sin(t)*e,y:n.y+Math.cos(t)*e}}function LP(n){return`hsl(54, 100%, ${Math.round(ya(n,0,20)*10+70)}%)`}function DP(n){return`hsl(72, 49%, ${Math.round(ya(n,10,90)*30+10)}%)`}function IP(n){return`hsl(0, 0%, ${50-ya(n,30,100)*20}%)`}function NP(n){const t={id:null,x:null,y:null};do t.x=en(100),t.y=en(100),t.id=n(t.x,t.y);while(t.id<Xe.HMAP_SEED_MIN_HEIGHT);return t}function Zm(){const n=$m(),t=$m(),e=NP(n),i=new Th(cv({dimensions:30}),MP({radius:Xe.SIZE})),r=[];let s=0;return i.forEach(o=>{const a={data:{gridId:s++,center:{x:o.x,y:o.y},coords:{q:o.q,r:o.r},rawHeight:null},display:{name:null,color:null,height:null},neighbors:[]},l=e.x+o.x/Xe.HMAP_ZOOM,c=e.y+o.y/Xe.HMAP_ZOOM,h=n(l,c)/Xe.SMOOTHING;a.data.rawHeight=h;const f=Xe.getHeight(h,o);a.display.height=f,f<=0?(a.data.type=0,a.display.name="Océan",a.display.color="#0084b2",a.display.height=10):f<70?(a.data.type=2,a.display.name="Plaine",a.display.color=DP(f)):f<80?(a.data.type=3,a.display.name="Montagne",a.display.color=IP(f)):(a.data.type=4,a.display.name="Peak",a.display.color="lightgray"),a.display.height<10&&(a.display.height=10),Xe.TYPE==="VALLEY"&&a.display.height>=80&&(a.display.height*=1+ya(a.display.height,120,80)),r.push(a)}),r.forEach(o=>{i.traverse(dv({center:{q:o.data.coords.q,r:o.data.coords.r},radius:1})).forEach(l=>{o.neighbors.push(r.find(c=>c.data.coords.q===l.q&&c.data.coords.r===l.r))})}),r.filter(o=>o.data.type===0).forEach(o=>{o.neighbors.find(a=>a.data.type>0)&&(o.data.shore=!0,o.display.color="hsl(190, 56%, 50%)")}),r.filter(o=>o.data.type===0&&!o.data.shore).forEach(o=>{!o.neighbors.find(a=>a.data.type>0)&&o.neighbors.find(a=>a.data.shore)&&(o.data.deepShore=!0,o.display.color="hsl(192, 78%, 40%)")}),Xe.TYPE==="ISLAND"&&r.filter(o=>o.data.type===2).forEach(o=>{o.neighbors.find(a=>a.data.shore)&&o.data.rawHeight<0?(o.data.type=1,o.display.name="Plage",o.display.color=LP(o.display.height),o.display.height=10):o.display.height<20&&(o.display.height=20)}),r.filter(o=>o.data.type>0).forEach(o=>{const a=t(o.data.center.x/Xe.HMAP_ZOOM*2,o.data.center.y/Xe.HMAP_ZOOM*2)<o.display.height/500;if(o.data.type===2&&a){o.data.hasForest=!0,o.display.name="Forêt",o.display.forest=[];for(let l=0;l<en(6)+14;l++){const c=ji(en(19)),u=en(3),h=ji(en(19));o.display.forest.push({position:{x:c,y:u,z:h},scale:{x:3.5,y:5,z:3.5}})}}if(o.data.type===3&&Math.random()>.33){o.data.hasStone=!0,o.display.stones=[];for(let l=0;l<en(2)+8;l++){const c=ji(en(19)),u=ji(en(19)),h={x:.2+Math.random(),y:.2+Math.random()/2,z:.2+Math.random()},f=Math.PI/2*4*Math.random();o.display.stones.push({position:{x:c,y:100,z:u},scale:h,rotation:f})}}if(o.data.type===3&&Math.random()>.7){o.data.hasMountain=!0,o.display.mountains=[];const l=Math.PI/2*4*Math.random();o.display.mountains.push({position:{x:0,y:0,z:0},scale:{x:1+Math.random(),y:2+Math.random()*2,z:1+Math.random()},rotation:l});for(let c=0;c<en(2)+3;c++){const u=ji(en(7)+7),h=ji(en(7)+7),f=Math.PI/2*4*Math.random();o.display.mountains.push({position:{x:u,y:0,z:h},scale:{x:.5+Math.random(),y:.5+Math.random()*1.5,z:.5+Math.random()},rotation:f})}}if(o.data.type===4&&Math.random()>.7){o.data.hasMountain=!0,o.display.mountains=[];const l=Math.PI/2*4*Math.random();o.display.mountains.push({position:{x:0,y:0,z:0},scale:{x:1+Math.random(),y:2.5+Math.random()*3,z:1+Math.random()},rotation:l});for(let c=0;c<en(2)+3;c++){const u=ji(en(7)+7),h=ji(en(7)+7),f=Math.PI/2*4*Math.random();o.display.mountains.push({position:{x:u,y:0,z:h},scale:{x:1+Math.random(),y:2.5+Math.random()*3,z:1+Math.random()},rotation:f})}}}),Xe.TYPE!=="LAKE"&&r.filter(o=>o.data.type>1&&o.data.type<4).forEach(o=>{o.display.cliffs=[],o.neighbors.forEach(a=>{if(o.display.height<20||o.display.height-a.display.height<=10&&a.data.type!==0)return;o.data.hasCliff=!0;let l=PP(o.data.center,a.data.center);const c=CP(a.data.center,o.data.center),u=Km(c,-l,10),h=Km(u,Math.PI/2-l,-20);o.display.cliffs.push([{position:{x:c.x-o.data.center.x,y:0,z:c.y-o.data.center.y},scale:{x:1+Math.random()*2,y:5+o.display.height,z:1+Math.random()*2},rotation:Math.PI/2*4*Math.random()},{position:{x:u.x-o.data.center.x,y:0,z:u.y-o.data.center.y},scale:{x:1+Math.random()*2,y:5+o.display.height,z:1+Math.random()*2},rotation:Math.PI/2*4*Math.random()},{position:{x:h.x-o.data.center.x,y:0,z:h.y-o.data.center.y},scale:{x:1+Math.random()*2,y:5+o.display.height,z:1+Math.random()*2},rotation:Math.PI/2*4*Math.random()}])})}),r}const Rs=c0(),$i=da(null);function OP(){function n(){const o={...Rs.setup(),tiles:Zm()};Rs.createBase(o),Rs.createMap(o),Rs.start(o),$i.value=o,setTimeout(r,150)}function t(){const o=$i.value.scene,a=$i.value.tiles;for(;a.length;)o.remove(a[0].meshes.group),a.shift()}function e(){s(),setTimeout(()=>{t();const o={...$i.value,tiles:Zm()};Rs.createMap(o),$i.value=o,r()},500)}function i(){s(),t(),Rs.stop($i.value)}function r(){$i.value.tiles.forEach(o=>{Ki.to(o.meshes.tile.scale,{x:1,y:1,duration:.2}),setTimeout(()=>{Ki.to(o.meshes.tile.scale,{z:o.display.height/10,duration:.5}),o.meshes.decorum&&setTimeout(()=>{Ki.to(o.meshes.decorum.scale,{x:1,y:1,z:1,duration:.2})},200)},250)})}function s(){$i.value.tiles.forEach(o=>{o.meshes.decorum&&(Ki.to(o.meshes.decorum.scale,{x:0,y:0,z:0,duration:.5}),Ki.to(o.meshes.decorum.position,{y:0,duration:.5})),Ki.to(o.meshes.tile.scale,{z:0,duration:.5}),setTimeout(()=>{Ki.to(o.meshes.tile.scale,{x:0,y:0,duration:.2})},200)})}return{start:n,show:r,hide:s,reset:e,destroy:i}}const UP=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128"},[mt("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),mt("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"})],-1),FP={__name:"JSIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"JS natif"},{default:Kt(()=>[UP]),_:1}))}},BP=mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128"},[mt("g",{color:"#000"},[mt("path",{d:"M16.219 15.762a1.129 1.129 0 0 0-1.076 1.399l24.394 98.742a1.129 1.129 0 0 0 1.879.544l73.386-70.59a1.129 1.129 0 0 0-.47-1.899L16.55 15.806a1.129 1.129 0 0 0-.331-.044m1.584 2.754l94.024 27.07l-70.566 67.877z"}),mt("path",{d:"M65.137 29.84a1.129 1.129 0 0 0-.807.315L27.654 65.46a1.129 1.129 0 0 0 .471 1.898L76.984 81.44a1.129 1.129 0 0 0 1.409-1.355L66.21 30.698a1.129 1.129 0 0 0-1.073-.858m-.651 3.3l11.248 45.59l-45.104-13z"}),mt("path",{d:"M46.914 47.313a1.129 1.129 0 0 0-1.076 1.399l6.054 24.531a1.129 1.129 0 0 0 1.88.543l18.222-17.563a1.129 1.129 0 0 0-.472-1.898l-24.277-6.968a1.129 1.129 0 0 0-.331-.044m1.583 2.751l20.522 5.89L53.614 70.8z"}),mt("path",{d:"M40.902 22.809a1.129 1.129 0 0 0-.807.316L21.873 40.687a1.129 1.129 0 0 0 .472 1.898l24.273 6.969a1.129 1.129 0 0 0 1.408-1.356l-6.051-24.53a1.129 1.129 0 0 0-1.073-.86zm-.65 3.3l5.114 20.736l-20.517-5.89l15.403-14.847zm49.201 10.684a1.129 1.129 0 0 0-.806.316L70.423 54.67a1.129 1.129 0 0 0 .472 1.899l24.274 6.968a1.129 1.129 0 0 0 1.408-1.356l-6.05-24.53a1.129 1.129 0 0 0-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94zM52.944 71.864a1.129 1.129 0 0 0-.74.315L33.982 89.742a1.129 1.129 0 0 0 .472 1.898l24.278 6.968a1.129 1.129 0 0 0 1.407-1.355l-6.055-24.531a1.129 1.129 0 0 0-1.14-.858m-.582 3.3l5.118 20.737l-20.522-5.89z"})])],-1),zP={__name:"ThreeIcon",setup(n){return(t,e)=>(ue(),ke(mi,{title:"ThreeJS"},{default:Kt(()=>[BP]),_:1}))}},kP={id:"gameScreen"},HP={class:"GUI"},GP={__name:"ThreeScene",setup(n){const t=c0(),e=OP();B_(async()=>{await t.loadAssets(),e.start()}),Xh(()=>e.destroy());const i=da(0);function r(s){i.value!==s&&(i.value=s,AP(s),e.reset())}return(s,o)=>(ue(),ke(ma,{hideGalery:!0},{title:Kt(()=>[se("Algorithmie Procédurale")]),subtitle:Kt(()=>[se("Générateur de paysages numériques")]),content:Kt(()=>[mt("div",kP,[mt("div",HP,[mt("button",{onClick:o[0]||(o[0]=a=>ur(e).reset())},"Générer"),mt("p",{onClick:o[1]||(o[1]=a=>r(0))},[mt("span",{class:lr(["checkbox",{checked:i.value===0}])},null,2),se("Île")]),mt("p",{onClick:o[2]||(o[2]=a=>r(1))},[mt("span",{class:lr(["checkbox",{checked:i.value===1}])},null,2),se("Vallée")]),mt("p",{onClick:o[3]||(o[3]=a=>r(2))},[mt("span",{class:lr(["checkbox",{checked:i.value===2}])},null,2),se("Lac")])])])]),technos:Kt(()=>[Zt(FP),se(),Zt(zP)]),_:1}))}},VP=co(GP,[["__scopeId","data-v-450e2d46"]]),WP={},XP={class:"svg-bg"};function qP(n,t){return ue(),Oi("div",XP)}const YP=co(WP,[["render",qP],["__scopeId","data-v-d1d4e23b"]]),jP={class:"left"},$P=["onClick"],KP={class:"right"},ZP={__name:"HomeView",setup(n){const t=da(0),e=[{name:"la-station.com",component:PM},{name:"algorithmie procédurale",component:VP},{name:"xavier-cauchy.com",component:BM},{name:"la quête du flan parfait",component:SM},{name:"documentation vue3",component:GM}];function i(r){t.value=r,document.querySelector(".right").scrollTo({top:0,behavior:"smooth"})}return(r,s)=>(ue(),Oi("main",null,[mt("div",jP,[Zt(YP),(ue(),Oi(Sn,null,Ox(e,(o,a)=>mt("button",{onClick:l=>i(a),key:o.id,class:lr({active:t.value===a})},r_(o.name),11,$P)),64))]),mt("div",KP,[(ue(),ke(vx(e[t.value].component)))])]))}},JP=co(ZP,[["__scopeId","data-v-88c4f4b1"]]),QP=Hy({history:gy("/"),routes:[{path:"/",name:"home",component:JP},{path:"/about",name:"about",component:()=>Dd(()=>import("./AboutView-Cp6gF5cn.js"),__vite__mapDeps([]))},{path:"/contact",name:"contact",component:()=>Dd(()=>import("./ContactView-BBs2ELFu.js"),__vite__mapDeps([]))}]}),_v=B1(jy);_v.use(QP);_v.mount("#app");export{co as _,Oi as c,ue as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
