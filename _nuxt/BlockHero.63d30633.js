import f from"./ContentSlot.6938107d.js";import y from"./ButtonLink.153b616d.js";import h from"./Terminal.4cf11af8.js";import k from"./VideoPlayer.44ab6338.js";import{a as v,o as s,i as a,k as o,m as c,l as r,w as i,S as u,c as l,F as $,t as d,K as B,x as w}from"./entry.9978b883.js";import"./index.debbce65.js";import"./NuxtImg.vue.9630b896.js";const S={class:"block-hero"},g={class:"layout"},H={class:"content"},V={key:0,class:"announce"},q={class:"title"},x={class:"description"},C={key:1,class:"extra"},N={class:"actions"},A=["href"],T={class:"support"},b=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,F)=>{const n=f,_=y,p=h,m=k;return s(),a("section",S,[o("div",g,[o("div",H,[t.$slots.announce?(s(),a("p",V,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",q,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",x,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",C,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",N,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),l(_,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,A)):r("",!0)],64))])]),o("div",T,[B(t.$slots,"support",{},()=>[e.snippet?(s(),l(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const j=w(b,[["__scopeId","data-v-75221353"]]);export{j as default};
