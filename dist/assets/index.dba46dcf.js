import{i as m,r as v,c as w,o as c,a as d,w as y,v as h,b as l,d as g,u,t as f,e as x,f as k,F as I,g as S,p as O,h as L,j as $,k as N,l as D,m as K,n as b,q as T,s as C}from"./vendor.df474e7f.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};V();var p=(n,t)=>{for(const[r,o]of t)n[r]=o;return n};const j={class:"wrap"},B=["onKeyup"],A=["onKeyup"],E=["disabled"],F={setup(n){const t=m("list"),r=v(""),o=v(""),e=w(()=>!r.value||!o.value),s=()=>{e.value||(t.push({title:r.value,desc:o.value}),r.value="",o.value="")};return(a,i)=>(c(),d("div",j,[y(l("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=_=>r.value=_),onKeyup:g(s,["enter"])},null,40,B),[[h,r.value]]),y(l("textarea",{"onUpdate:modelValue":i[1]||(i[1]=_=>o.value=_),cols:"80",rows:"3",onKeyup:g(s,["enter"])},null,40,A),[[h,o.value]]),l("div",{class:"submit btn",onClick:s,disabled:u(e)},"submit",8,E)]))}};var M=p(F,[["__scopeId","data-v-644a0129"]]);const q={class:"root"},G={class:"title"},J=["onClick"],P={key:0,class:"desc"},U={props:{item:Object},emits:["delete"],setup(n,{emit:t}){const r=n,{item:o}=r,e=v(!1),s=()=>{t("delete")},a=()=>{e.value=!e.value};return(i,_)=>(c(),d("div",q,[l("div",{onClick:a,class:"wrap"},[l("div",G,f(u(o).title),1),l("div",{class:"delete btn",onClick:x(s,["stop"])},"Delete",8,J)]),e.value?(c(),d("div",P,f(u(o).desc),1)):k("",!0)]))}};var R=p(U,[["__scopeId","data-v-3d9fa392"]]);const Y=n=>(O("data-v-7f549db0"),n=n(),L(),n),z={class:"wrap"},H={class:"total"},Q=Y(()=>l("hr",null,null,-1)),W={class:"group"},X={setup(n){const t=m("list"),r=o=>{t.splice(o,1)};return(o,e)=>(c(),d("div",z,[l("div",H,"Total: "+f(u(t).length),1),Q,l("div",W,[(c(!0),d(I,null,S(u(t),(s,a)=>(c(),$(R,{item:s,key:`${a}${s.title}`,onDelete:i=>r(a)},null,8,["item","onDelete"]))),128))])]))}};var Z=p(X,[["__scopeId","data-v-7f549db0"]]);function ee(){const n="todo-list-storage-key";return{load(){const t=localStorage.getItem(n);return t&&JSON.parse(t)||[]},write(t){localStorage.setItem(n,JSON.stringify(t))}}}const te={class:"main"},se={setup(n){const{load:t,write:r}=ee(),o=N(t());return D("list",o),K(o,e=>{r(T(e))}),(e,s)=>(c(),d("div",te,[b(M),b(Z)]))}};var oe=p(se,[["__scopeId","data-v-5d62af00"]]);const ne={setup(n){return(t,r)=>(c(),$(oe))}};C(ne).mount("#app");
