(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KqPT:function(n,r,l){"use strict";l.r(r);var t=l("CcnG"),u=function(){return function(){}}(),e=l("pMnS"),o=l("ogFj"),a=l("w2Yy"),b=l("Ip0R"),c=l("pviS"),i=l("BfvO"),s=l("WzJs"),p=l("yGvg"),f=l("mrSG"),d=l("6T78"),y=l("zyZ6"),m=function(n){function r(r,l){return n.call(this,r,l)||this}return Object(f.c)(r,n),r}(d.a),v=l("ZYCi"),h=t.pb({encapsulation:0,styles:[[""]],data:{}});function w(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,15,"section",[],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,["Odejmowanie"])),(n()(),t.rb(3,0,null,null,4,"app-hud",[],null,null,null,o.b,o.a)),t.qb(4,114688,null,0,a.a,[],{score:[0,"score"],level:[1,"level"],totalScore:[2,"totalScore"]},null),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h]),(n()(),t.rb(8,0,null,null,2,"app-addition-form",[],null,[[null,"answer"]],function(n,r,l){var t=!0;return"answer"===r&&(t=!1!==n.component.onAnswer(l)&&t),t},c.b,c.a)),t.qb(9,4833280,null,0,i.a,[],{operation:[0,"operation"]},{answer:"answer"}),t.Ab(131072,b.b,[t.h]),(n()(),t.rb(11,0,null,null,4,"app-round-status",[],null,null,null,s.b,s.a)),t.qb(12,114688,null,0,p.a,[],{operations:[0,"operations"],answers:[1,"answers"],currentRound:[2,"currentRound"]},null),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h])],function(n,r){var l=r.component;n(r,4,0,t.Fb(r,4,0,t.zb(r,5).transform(l.score$)),t.Fb(r,4,1,t.zb(r,6).transform(l.level$)),t.Fb(r,4,2,t.zb(r,7).transform(l.totalScore$))),n(r,9,0,t.Fb(r,9,0,t.zb(r,10).transform(l.currentOperation$))),n(r,12,0,t.Fb(r,12,0,t.zb(r,13).transform(l.operations$)),t.Fb(r,12,1,t.zb(r,14).transform(l.answers$)),t.Fb(r,12,2,t.zb(r,15).transform(l.current$)))},null)}function R(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-subtraction",[],null,null,null,w,h)),t.qb(1,180224,null,0,m,[v.a,y.a],null,null)],null,null)}var $=t.nb("app-subtraction",m,R,{},{},[]),z=l("URGB"),F=l("XRvv"),k=function(n){function r(r,l){var t=n.call(this,r,l)||this;return t.answers$=t.gameService.answers$,t.roundInfo$=t.gameService.roundInfo$,t.roundResult$=t.gameService.roundResult$,t}return Object(f.c)(r,n),r}(l("4D1i").a),A=t.pb({encapsulation:0,styles:[[""]],data:{}});function O(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,[" Tak Ci posz\u0142o odejmowanie:\n"])),(n()(),t.rb(2,0,null,null,4,"app-end-of-round",[],null,[[null,"levelUpOrRetry"],["document","keydown.enter"]],function(n,r,l){var u=!0,e=n.component;return"document:keydown.enter"===r&&(u=!1!==t.zb(n,3).onKeydownHandler(l)&&u),"levelUpOrRetry"===r&&(u=!1!==e.levelUpOrRetry()&&u),u},z.b,z.a)),t.qb(3,49152,null,0,F.a,[],{answers:[0,"answers"],roundInfo:[1,"roundInfo"],roundResult:[2,"roundResult"]},{levelUpOrRetry:"levelUpOrRetry"}),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h]),t.Ab(131072,b.b,[t.h])],function(n,r){var l=r.component;n(r,3,0,t.Fb(r,3,0,t.zb(r,4).transform(l.answers$)),t.Fb(r,3,1,t.zb(r,5).transform(l.roundInfo$)),t.Fb(r,3,2,t.zb(r,6).transform(l.roundResult$)))},null)}function S(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-end-of-subtraction-round",[],null,null,null,O,A)),t.qb(1,245760,null,0,k,[v.a,y.a],null,null)],function(n,r){n(r,1,0)},null)}var G=t.nb("app-end-of-subtraction-round",k,S,{},{},[]),g=l("gIcY"),q=l("PUag"),j=function(n){function r(){var r=null!==n&&n.apply(this,arguments)||this;return r.operator="-",r}return Object(f.c)(r,n),r.prototype.createDisplayValue=function(n,r){return n+" "+this.operator+" "+r},r.prototype.createResult=function(n,r){return n-r},r.prototype.isEquationValid=function(n,r){var l=n.result,t=r.max;return l>=r.min&&l<=t&&n.a<t&&n.b<t},r.prototype.getMaxResultForLevel=function(n){return Math.max(1,5+3*n)},r}(q.a),I=l("v5HZ"),U=l("yGQT"),Z=l("eG4p"),T=l("8EdP"),x={start:!0},E=function(){return function(){}}(),M=l("aIOZ"),P=l("aPZZ");l.d(r,"SubtractionModuleNgFactory",function(){return B});var B=t.ob(u,[],function(n){return t.xb([t.yb(512,t.j,t.db,[[8,[e.a,$,G]],[3,t.j],t.z]),t.yb(4608,b.l,b.k,[t.v,[2,b.r]]),t.yb(4608,g.d,g.d,[]),t.yb(4608,g.r,g.r,[]),t.yb(4608,q.a,j,[]),t.yb(4608,I.a,I.a,[q.a]),t.yb(4608,y.a,y.a,[U.o,I.a,v.k]),t.yb(4608,Z.a,Z.a,[y.a,v.k]),t.yb(4608,T.a,T.a,[y.a]),t.yb(1073742336,b.c,b.c,[]),t.yb(1073742336,v.m,v.m,[[2,v.s],[2,v.k]]),t.yb(1073742336,E,E,[]),t.yb(1073742336,g.o,g.o,[]),t.yb(1073742336,g.m,g.m,[]),t.yb(1073742336,M.a,M.a,[]),t.yb(1024,U.k,function(){return[{key:"addition",reducerFactory:U.B,metaReducers:[],initialState:void 0}]},[]),t.yb(1024,U.s,function(){return[P.a]},[]),t.yb(1024,U.t,function(n){return[n]},[U.s]),t.yb(1024,U.b,function(n,r,l){return[U.y(n,r,l)]},[t.r,U.s,U.t]),t.yb(1073873408,U.p,U.p,[U.k,U.b,U.h,U.q]),t.yb(1073742336,u,u,[]),t.yb(1024,v.i,function(){return[[{path:"",redirectTo:"start"},{path:"start",component:m,data:x},{path:"runda",component:m,canActivate:[Z.a]},{path:"koniec-rundy",component:k,canActivate:[T.a]}]]},[])])})}}]);