"use strict";(self.webpackChunkaniversario=self.webpackChunkaniversario||[]).push([[76],{2262:(h,s,i)=>{i.d(s,{Q:()=>g});var r=i(177),t=i(540);function c(e,u){if(1&e&&(t.j41(0,"div",4),t.EFF(1),t.k0s()),2&e){const n=u.$implicit;t.R7$(1),t.JRh(n)}}const l=function(e){return{"background-color":e}},d=function(e){return{disabled:e}};let g=(()=>{class e{constructor(){this.label="Pr\xe9sioname \u2764\ufe0f",this.disabled=!1,this.backgroundColor="#ff5f6d",this.hearts=[]}onClick(){this.addHeart()}addHeart(){this.hearts.push("\u2764\ufe0f"),setTimeout(()=>{this.hearts.shift()},1e3)}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-button"]],inputs:{label:"label",disabled:"disabled",backgroundColor:"backgroundColor"},standalone:!0,features:[t.aNF],decls:5,vars:9,consts:[[1,"button-container"],[1,"heart-button",3,"ngStyle","disabled","ngClass","click"],[1,"hearts-container"],["class","heart",4,"ngFor","ngForOf"],[1,"heart"]],template:function(a,o){1&a&&(t.j41(0,"div",0)(1,"button",1),t.bIt("click",function(){return o.onClick()}),t.EFF(2),t.k0s(),t.j41(3,"div",2),t.DNE(4,c,2,1,"div",3),t.k0s()()),2&a&&(t.R7$(1),t.Y8G("ngStyle",t.eq3(5,l,o.backgroundColor))("disabled",o.disabled)("ngClass",t.eq3(7,d,o.disabled)),t.R7$(1),t.SpI("",o.label," "),t.R7$(2),t.Y8G("ngForOf",o.hearts))},dependencies:[r.MD,r.YU,r.Sq,r.B3],styles:['@charset "UTF-8";.button-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.heart-button[_ngcontent-%COMP%]{color:#fff;font-size:20px;border:none;padding:15px 30px;border-radius:25px;cursor:pointer;transition:transform .3s ease}.heart-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.hearts-container[_ngcontent-%COMP%]{position:absolute;top:-30px;left:50%;transform:translate(-50%);pointer-events:none}.heart[_ngcontent-%COMP%]{font-size:24px;animation:_ngcontent-%COMP%_heartAnimation 1s ease-in-out forwards}@keyframes _ngcontent-%COMP%_heartAnimation{0%{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.6;transform:translateY(-50px) scale(1.5)}to{opacity:0;transform:translateY(-100px) scale(2)}}@media screen and (max-width: 600px){.heart-button[_ngcontent-%COMP%]{font-size:16px;padding:10px 20px}.heart[_ngcontent-%COMP%]{font-size:20px}}button.disabled[_ngcontent-%COMP%]{background-color:#dcdcdc;color:#a0a0a0;cursor:not-allowed}button[_ngcontent-%COMP%]:disabled{background-color:#dcdcdc;color:#a0a0a0;cursor:not-allowed}.heart-button.disabled[_ngcontent-%COMP%]:hover{transform:scale(1)}']})}}return e})()},7436:(h,s,i)=>{i.d(s,{K:()=>g});var r=i(177),t=i(540);const c=function(e){return{circle:e}};function l(e,u){if(1&e&&t.nrm(0,"img",3),2&e){const n=t.XpG();t.Y8G("ngClass",t.eq3(4,c,n.circle))("src",n.imageUrl,t.B4B)("width",n.width)("height",n.height)}}function d(e,u){1&e&&(t.j41(0,"p"),t.EFF(1,"No image available"),t.k0s())}let g=(()=>{class e{constructor(){this.imageUrl="",this.width="100%",this.height="auto",this.circle=!1}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-image-renderer"]],inputs:{imageUrl:"imageUrl",width:"width",height:"height",circle:"circle"},standalone:!0,features:[t.aNF],decls:3,vars:2,consts:[[1,"image-container"],["alt","Image","class","responsive-image",3,"ngClass","src","width","height",4,"ngIf"],[4,"ngIf"],["alt","Image",1,"responsive-image",3,"ngClass","src","width","height"]],template:function(a,o){1&a&&(t.j41(0,"div",0),t.DNE(1,l,1,6,"img",1),t.DNE(2,d,2,0,"p",2),t.k0s()),2&a&&(t.R7$(1),t.Y8G("ngIf",o.imageUrl),t.R7$(1),t.Y8G("ngIf",!o.imageUrl))},dependencies:[r.MD,r.YU,r.bT],styles:['@charset "UTF-8";.image-container[_ngcontent-%COMP%]{max-width:100%;margin:0 auto;text-align:center}.responsive-image[_ngcontent-%COMP%]{width:100%;height:auto;display:block}p[_ngcontent-%COMP%]{font-size:1.2rem;color:gray}.circle[_ngcontent-%COMP%]{border-radius:50%}']})}}return e})()}}]);