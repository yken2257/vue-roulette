(function(e){function t(t){for(var a,c,r=t[0],u=t[1],i=t[2],d=0,v=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],a=!0,r=1;r<l.length;r++){var u=l[r];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=l[0]))}return e}var a={},n={app:0},o=[];function c(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=e,c.c=a,c.d=function(e,t,l){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(l,a,function(t){return e[t]}.bind(null,a));return l},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/roulette-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var s=u;o.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var a=l("7a23"),n=l("cf05"),o=l.n(n),c={class:"columns"},r={class:"column is-two-fifths is-offset-2",id:"roulette"},u={class:"block"},i=Object(a["createElementVNode"])("img",{src:o.a,height:"40",width:"40"},null,-1),s={class:"block"},d={class:"column"},v={class:"control"},f=["onUpdate:modelValue"],b={class:"control"},p=["onClick"],O={class:"field"},j={class:"control"},m={class:"modal-content"},h=Object(a["createTextVNode"])(" 選ばれたのは"),g=Object(a["createTextVNode"])("でした！ ");function E(e,t,l,n,o,E){var y=Object(a["resolveComponent"])("PieChart");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",u,[i,Object(a["createVNode"])(y,{chartData:n.testData,options:n.options},null,8,["chartData","options"])]),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("button",{class:"button is-info",onClick:t[0]||(t[0]=function(e){return n.startRoulette()})},"回転")])]),Object(a["createElementVNode"])("div",d,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.labels,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"field has-addons",key:e},[Object(a["createElementVNode"])("div",v,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"input is-info",type:"text","onUpdate:modelValue":function(e){return n.labels[t]=e}},null,8,f),[[a["vModelText"],n.labels[t]]])]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("a",{class:"button is-info",onClick:function(e){return n.deleteItem(t)}}," 削除 ",8,p)])])})),128)),Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("button",{class:"button is-info",onClick:t[1]||(t[1]=function(e){return n.onAddItem()})},"追加")])])])]),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["modal",{"is-active":n.showResult}]),id:"modal"},[Object(a["createElementVNode"])("div",{class:"modal-background",onClick:t[2]||(t[2]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)})}),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",{class:"notification is-info is-light",onClick:t[3]||(t[3]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)})},[h,Object(a["createElementVNode"])("strong",null,Object(a["toDisplayString"])(n.picked)+"さん",1),g])])],2)],64)}var y=l("2909"),V=(l("99af"),l("a434"),l("fb6a"),l("2ef0")),C=l("9b4a"),k=l("b48c"),N=l("d9fa");C["Chart"].register.apply(C["Chart"],Object(y["a"])(C["registerables"])),C["Chart"].register(N["a"]);var w={name:"App",components:{PieChart:k["PieChart"]},setup:function(){var e=Object(a["ref"])([1,1,1,1]),t=Object(a["ref"])(Object(V["shuffle"])(["田中","金","吉田","中田"])),l=Object(a["ref"])(["#77CEFF","#0079AF","#97B0C4","#A5C8ED"]),n=["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED","#AFB4DB","#6EA4CA","#6283C2","#659AD2"],o=Object(a["ref"])("on"),c=Object(a["ref"])(0),r=5*Math.random()+30,u=Object(a["ref"])(r*r*5/2),i=Object(a["ref"])(360*Math.random()+u.value-360),s=Object(a["ref"])(!1),d=Object(a["ref"])(""),v=Object(a["ref"])(0),f=Object(a["ref"])(0),b=Object(a["ref"])(0),p=Object(a["ref"])(1),O=Object(a["reactive"])({responsive:!0,plugins:{legend:{display:!1},title:{display:!1},datalabels:{formatter:function(e,t){return t.chart.data.labels[t.dataIndex]},font:{weight:"bold",size:24}}}}),j=Object(a["computed"])((function(){return{labels:t.value,datasets:[{data:e.value,backgroundColor:l.value,rotation:c.value}]}}));function m(){return n[Math.round(Math.random()*n.length)]}function h(){t.value=t.value.concat([""]),e.value=e.value.concat([1]),l.value=l.value.concat([m()])}function g(a){t.value.length>1&&(t.value.splice(a,1),e.value=e.value.slice(0,t.value.length),l.value=l.value.slice(0,t.value.length))}function E(){s.value=!1,c.value+=f.value,t.value.length>1&&(t.value.splice(b.value,1),e.value=e.value.slice(0,t.value.length),l.value=l.value.slice(0,t.value.length))}function y(){setTimeout((function e(){if("on"==o.value)-c.value<i.value?(c.value-=r-.2*v.value,p.value+=1,v.value>90&&(p.value+=.5),setTimeout(e,p.value)):(o.value,f.value=-c.value%360,b.value=Math.floor(f.value/(360/t.value.length)),d.value=j.value.labels[b.value],setTimeout((function(){s.value=!0}),2e3),i.value+=360*Math.random()+u.value-720,v.value=0,p.value=1),v.value++;else if("off"==o.value)return}),p.value)}return{labels:t,count:v,rotation:c,finalDegree:i,testData:j,deleteItem:g,startRoulette:y,options:O,closeModal:E,showResult:s,picked:d,onAddItem:h}}},M=(l("ad59"),l("6b0d")),x=l.n(M);const A=x()(w,[["render",E]]);var B=A;Object(a["createApp"])(B).mount("#app")},"6e67":function(e,t,l){},ad59:function(e,t,l){"use strict";l("6e67")},cf05:function(e,t,l){e.exports=l.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.94eb9a3e.js.map