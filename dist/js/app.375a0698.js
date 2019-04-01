(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3dfd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("grid")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"name",on:{mouseenter:function(e){return t.activate("first")},mouseleave:function(e){return t.deactivate("first")}}},[n("h1",[t._v("Sam Garson")])]),t._l(10,function(e){return n("dot",{key:e,attrs:{active:!!t.active,i:e}})}),n("div",{staticClass:"desc"},[n("p",[n("span",[t._v("Product management")]),n("span",[t._v("Tech Culture")]),n("span",[t._v("Digital Strategy")]),n("a",{attrs:{href:"mailto:sam@samgarson.com"},on:{mouseenter:function(e){return t.activate("last")},mouseleave:function(e){return t.deactivate("last")}}},[t._v("Get in touch")])])])],2)},o=[],s=(n("96cf"),n("3b8d")),c=n("1209"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"dot-wrapper",class:{active:t.active&&!t.entering},attrs:{width:"100%",height:"100%",viewBox:"0 0 100 100"},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[n("circle",{ref:"dot",attrs:{cx:"50",cy:"50",r:"3",fill:"white"}}),n("circle",{ref:"halo",staticClass:"halo",class:"delay-"+t.i,attrs:{cx:"50",cy:"50",r:"1",stroke:"white","stroke-width":"0.5",fill:"none"}})])},l=[],d=(n("c5f6"),n("9dc0")),f=n.n(d),h=20,v=8,p=15,g=30,m="mousemove",b=function(t){var e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.width,a=e.height,o=r+i/2,s=n+a/2;return{cx:o,cy:s,width:i,height:a}},y=function(t){var e=t.target,n=t.clientX,r=t.clientY,i=b(e),a=i.cx,o=i.cy,s=i.width,c=i.height,u=(n-a)/s*100,l=(r-o)/c*100;return{dx:u,dy:l}},x={data:function(){return{listeners:{},entering:!1,dotLeaving:!1,haloLeaving:!1}},props:{active:{type:Boolean,default:!1},i:Number},mounted:function(){this.listener=f()(this.$el,m,this.onMouseMove.bind(this))},computed:{},beforeDestroy:function(){this.listener&&this.$el.removeEventListener(m,this.listener)},methods:{onMouseMove:function(t){var e=y(t),n=e.dx,r=e.dy,i=n/h+50,a=r/h+50;c["a"].set(this.$refs.dot,{cx:i,cy:a});var o={cx:n/v+50,cy:r/v+50};this.entering||(o.r=p),c["a"].set(this.$refs.halo,o)},onMouseEnter:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dotLeaving&&this.dotLeaving.pause(),this.haloLeaving&&this.haloLeaving.pause(),e=Object(c["a"])({targets:this.$refs.halo,r:p,duration:1500}),this.entering=e,t.next=6,e.finished;case 6:this.entering=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onMouseLeave:function(){this.entering&&(this.entering.pause(),this.entering=!1),this.dotLeaving=Object(c["a"])({targets:this.$refs.dot,cx:50,cy:50,duration:1e3}),this.haloLeaving=Object(c["a"])({targets:this.$refs.halo,duration:1e3,cx:50,cy:50,r:1,easing:"easeOutQuint"})}}},w=x,O=(n("4b9b"),n("2877")),j=Object(O["a"])(w,u,l,!1,null,"7a47cda4",null),_=j.exports,M={components:{Dot:_},data:function(){return{active:!1,activating:!1,deactivating:!1}},methods:{activate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first";this.active=!0,this.deactivating&&this.deactivating.pause(),this.activating=Object(c["a"])({targets:".grid .halo",r:g,cx:50,cy:50,duration:1200,delay:c["a"].stagger(80,{grid:[3,4],from:t})})},deactivate:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"first",this.activating&&this.activating.pause(),this.deactivating=Object(c["a"])({targets:".grid .halo",r:1,cx:50,cy:50,easing:"easeOutExpo",duration:500,delay:c["a"].stagger(40,{grid:[3,4],from:e})}),t.next=5,this.deactivating.finished;case 5:this.active=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},$=M,L=(n("8747"),Object(O["a"])($,a,o,!1,null,"67e44dc1",null)),E=L.exports,k={name:"app",components:{Grid:E}},C=k,P=(n("5c0b"),Object(O["a"])(C,r,i,!1,null,null,null));e["a"]=P.exports},"4b9b":function(t,e,n){"use strict";var r=n("caa1"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("cadf"),n("551c"),n("f751"),n("097d");var e=n("2b0e"),r=n("3dfd");e["a"].config.productionTip=!1,(t||window).$v=new e["a"]({render:function(t){return t(r["a"])},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")}.call(this,n("c8ba"))},"5c0b":function(t,e,n){"use strict";var r=n("8fba"),i=n.n(r);i.a},8747:function(t,e,n){"use strict";var r=n("ed42"),i=n.n(r);i.a},"8fba":function(t,e,n){t.exports={blue:"#051DA3"}},caa1:function(t,e,n){},ed42:function(t,e,n){}});
//# sourceMappingURL=app.375a0698.js.map