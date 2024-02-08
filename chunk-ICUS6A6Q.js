import{a as pe,c as se,d as me,e as ue,f as de}from"./chunk-2VKE7XYL.js";import{A as F,B as N,C as H,D as Q,E as D,F as J,O as V,P as k,Q as P,T as K,U,X as W,Y as X,Z as Y,_ as Z,a as I,aa as ee,b as v,ba as O,c as C,ca as B,d as a,da as te,e as j,ea as ne,f as g,fa as ie,g as l,ga as oe,h as c,ha as $,i as p,ia as re,j as y,k as u,ka as ae,l as d,la as z,m as T,ma as le,n as w,na as ce,o as _,p as m,q as R,r as x,s as A,t as h,v as E,w as G,x as q}from"./chunk-3PXXV4CA.js";import"./chunk-UXELLRHP.js";import"./chunk-6BEOBQGB.js";import"./chunk-JLCSPST3.js";import"./chunk-7WM6EVQP.js";import"./chunk-5L7NN2CP.js";import"./chunk-IX3SRTR4.js";import"./chunk-4U6PRYVA.js";import"./chunk-52I2J3IJ.js";import"./chunk-Z4V4M3ZT.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-FQ65QLOX.js";function ve(e,n){if(e&1){let t=T();c(0,"ion-row")(1,"ion-col",3),y(2,"ion-img",4),p(),c(3,"ion-col",5)(4,"ion-label",6)(5,"strong"),m(6),E(7,"number"),p()()(),c(8,"ion-col",7)(9,"ion-input",8),w("input",function(){let o=v(t).$implicit,s=_(3);return C(s.onInputData(o))})("ngModelChange",function(i){let s=v(t).$implicit;return C(s.qty=i)}),p()()()}if(e&2){let t=n.$implicit;a(2),l("alt",t.title)("src",t.img),a(4),x(" ",t.amount===null?0:G(7,5,t.amount,"0.0")," "),a(3),l("ngModel",t.qty)("label",t.title)}}function Ce(e,n){if(e&1&&(u(0),g(1,ve,10,8,"ion-row",2),d()),e&2){let t=_(2);a(),l("ngForOf",t.listMoney)("ngForTrackBy",t.trackByFn)}}function xe(e,n){e&1&&(u(0),c(1,"ion-title")(2,"i"),m(3," No data available "),p()(),d())}function Ie(e,n){if(e&1&&(u(0),c(1,"ion-grid",1),g(2,Ce,2,2,"ng-container",0)(3,xe,4,0,"ng-container",0),p(),d()),e&2){let t=_();a(2),l("ngIf",(t.listMoney==null?null:t.listMoney.length)!==0),a(),l("ngIf",(t.listMoney==null?null:t.listMoney.length)===0)}}function he(e,n){if(e&1&&(u(0),c(1,"div",12)(2,"ion-label",13),m(3),p(),c(4,"ion-label",14),m(5),E(6,"currency"),p()(),d()),e&2){let t=n.$implicit,r=_(2);a(3),x(" ",t.label," "),a(2),x(" ",q(6,2,r.getTypeTotal(t),"Rp","symbol","0.0")," ")}}function Se(e,n){if(e&1&&(u(0),c(1,"ion-toolbar")(2,"ion-accordion-group")(3,"ion-accordion",9)(4,"ion-item",10)(5,"ion-title"),m(6,"Total"),p(),c(7,"ion-title",11),m(8),E(9,"currency"),p()(),g(10,he,7,7,"ng-container",2),p()()(),d()),e&2){let t=_();a(8),x(" ",q(9,3,t.getTotal(),"Rp","symbol","0.0")," "),a(2),l("ngForOf",t.currency)("ngForTrackBy",t.trackByFn)}}var ge=function(e){return e[e.list=0]="list",e[e.total=1]="total",e}(ge||{}),b=(()=>{let n=class n{constructor(){this.typeView=ge}ngOnInit(){}onInputData(r){r.amount=r.qty*r.value}getTypeTotal(r){let i=0;return r.values.forEach(o=>i+=isNaN(Number(o.amount))?0:Number(o.amount)),i}getTotal(){var i;let r=0;return(i=this.currency)==null||i.forEach(o=>{let s=this.getTypeTotal(o);o.total=s,r+=s}),r}trackByFn(r,i){return i}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=I({type:n,selectors:[["app-money-data"]],inputs:{currency:"currency",listMoney:"listMoney",view:"view"},standalone:!0,features:[h],decls:2,vars:2,consts:[[4,"ngIf"],[1,"ion-margin"],[4,"ngFor","ngForOf","ngForTrackBy"],["size","12","sizeMd","2"],[3,"alt","src"],["size","8","sizeSm","5","pushSm","5",1,"ion-text-end"],[1,"custom-flex","ion-padding"],["size","4","sizeSm","5","pullSm","5"],["labelPlacement","stacked","placeholder","Enter Qty",3,"ngModel","label","input","ngModelChange"],["value","total"],["slot","header","color","light"],[1,"ion-text-end"],["slot","content",1,"ion-padding","ion-margin-bottom"],[1,"ion-float-start"],[1,"ion-float-end"]],template:function(i,o){i&1&&g(0,Ie,4,2,"ng-container",0)(1,Se,11,8,"ng-container",0),i&2&&(l("ngIf",o.view===o.typeView.list),a(),l("ngIf",o.view===o.typeView.total))},dependencies:[D,F,N,H,Q,P,V,k,O,K,U,re,$,z,B,ee,W,ne,Z],styles:["ion-img[_ngcontent-%COMP%]{width:auto;height:auto;max-width:300px;padding:.5rem}.custom-flex[_ngcontent-%COMP%]{height:100%;display:grid;align-content:space-between}"]});let e=n;return e})();function Te(e,n){e&1&&(c(0,"ion-title"),m(1,"Save File"),p(),y(2,"ion-input",0))}var L=(()=>{let n=class n{constructor(){}ngOnInit(){}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=I({type:n,selectors:[["app-dataset"]],standalone:!0,features:[h],decls:3,vars:0,consts:[["label","File Name","labelPlacement","floating"]],template:function(i,o){i&1&&(c(0,"p"),m(1,` dataset works!
`),p(),g(2,Te,3,0,"ng-template"))},dependencies:[$,z]});let e=n;return e})();function we(e,n){if(e&1){let t=T();u(0),c(1,"ion-segment-button",3),w("click",function(){let o=v(t).$implicit,s=_();return s.currentNav=o,C(s.money.listMoney=o.list)}),y(2,"ion-icon",4),c(3,"ion-label"),m(4),p()(),d()}if(e&2){let t=n.$implicit;a(),l("value",t.value),a(),l("name",t.icon),a(2),R(t.label)}}function be(e,n){if(e&1&&(u(0),c(1,"ion-content"),y(2,"app-money-data",5),p(),c(3,"ion-footer"),y(4,"app-money-data",5),p(),d()),e&2){let t=_();a(2),l("currency",t.data)("listMoney",t.currentNav.list)("view",t.money.typeView.list),a(2),l("currency",t.data)("listMoney",t.currentNav.list)("view",t.money.typeView.total)}}function Ee(e,n){if(e&1&&(u(0),c(1,"ion-select-option",0),m(2),p(),d()),e&2){let t=n.$implicit;a(),l("value",t.country),a(),x(" ",t.country," ")}}function Fe(e,n){if(e&1){let t=T();u(0),c(1,"ion-content")(2,"ion-list")(3,"ion-item")(4,"ion-select",6),w("ngModelChange",function(i){v(t);let o=_();return C(o.country=i)})("input",function(){v(t);let i=_();return C(i.selectedCurrency())}),g(5,Ee,3,2,"ng-container",1),p()()()(),d()}if(e&2){let t=_();a(4),l("ngModel",t.country),a(),l("ngForOf",t.currencies)("ngForTrackBy",t.track)}}function Ne(e,n){e&1&&(u(0),c(1,"ion-content"),y(2,"app-dataset"),p(),d())}var Qe=(()=>{let n=class n{constructor(r,i){var o,s,S,f;this.http=r,this.money=i,this.country="Indonesia",this.nav=[{value:"setup",label:"Setup",icon:"construct-sharp"},{value:"data",label:"Data",icon:"save-sharp"},{value:"paper",label:"Paper",icon:"layers-sharp",list:(s=(o=this.data)==null?void 0:o.find(M=>M.type=="paper"))==null?void 0:s.values},{value:"coins",label:"Coins",icon:"server-sharp",list:(f=(S=this.data)==null?void 0:S.find(M=>M.type=="coins"))==null?void 0:f.values}],this.currentNav=this.nav[0],this.http.get("assets/counter/currency.json").subscribe(M=>{this.currencies=M,this.selectedCurrency()}),pe({constructSharp:se,serverSharp:de,layersSharp:me,saveSharp:ue})}ngOnInit(){}selectedCurrency(){var i,o,s,S;let r=this.currencies.find(f=>f.country==this.country);this.data=r.currencies,this.nav[2].list=(o=(i=this.data)==null?void 0:i.find(f=>f.type=="paper"))==null?void 0:o.values,this.nav[3].list=(S=(s=this.data)==null?void 0:s.find(f=>f.type=="coins"))==null?void 0:S.values}track(r,i){return i}};n.\u0275fac=function(i){return new(i||n)(j(J),j(b))},n.\u0275cmp=I({type:n,selectors:[["app-counter"]],standalone:!0,features:[A([{provide:b},{provide:L}]),h],decls:5,vars:6,consts:[[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[3,"value","click"],[3,"name"],[3,"currency","listMoney","view"],["label","Currency","labelPlacement","floating",3,"ngModel","ngModelChange","input"]],template:function(i,o){i&1&&(c(0,"ion-segment",0),g(1,we,5,3,"ng-container",1),p(),g(2,be,5,6,"ng-container",2)(3,Fe,6,3,"ng-container",2)(4,Ne,3,0,"ng-container",2)),i&2&&(l("value",o.currentNav.value),a(),l("ngForOf",o.nav)("ngForTrackBy",o.track),a(),l("ngIf",o.currentNav.value==="paper"||o.currentNav.value==="coins"),a(),l("ngIf",o.currentNav.value==="setup"),a(),l("ngIf",o.currentNav.value==="data"))},dependencies:[b,L,Y,X,te,O,ce,oe,D,F,N,P,V,k,le,ie,ae,B]});let e=n;return e})();export{Qe as CounterPage};
