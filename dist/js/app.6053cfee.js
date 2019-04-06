(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],f=0,h=[];f<o.length;f++)s=o[f],a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"28b8":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("grid")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"name",on:{mouseenter:function(e){return t.activate("first")},mouseleave:function(e){return t.deactivate("first")}}},[n("h1",[t._v("Sam Garson")])]),n("dot",{key:0,attrs:{active:!!t.active,i:0}}),n("dot",{key:1,attrs:{active:!!t.active,i:1}}),n("div",{staticClass:"links"},[n("p",{on:{mouseenter:function(e){return t.activate(2)},mouseleave:function(e){return t.deactivate(2)}}},[n("a",{attrs:{target:"_blank",href:"https://github.com/samtgarson"}},[t._v("Code "),n("external-arrow")],1),n("a",{attrs:{target:"_blank",href:"https://twitter.com/samtgarson"}},[t._v("Comments "),n("external-arrow")],1),n("a",{attrs:{target:"_blank",href:"https://instagram.com/samtgarson"}},[t._v("Pictures "),n("external-arrow")],1),n("a",{attrs:{target:"_blank",href:"https://lessons.samgarson.com"}},[t._v("Lessons Learned "),n("external-arrow")],1)])]),t._l(8,function(e){return n("dot",{key:e+2,attrs:{active:!!t.active,i:e}})}),n("div",{staticClass:"desc"},[n("p",{on:{mouseenter:function(e){return t.activate("last")},mouseleave:function(e){return t.deactivate("last")}}},[n("span",[t._v("Product management")]),n("span",[t._v("Tech Culture")]),n("span",[t._v("Digital Strategy")]),n("a",{attrs:{href:"mailto:sam@samgarson.com"}},[t._v("Get in touch "),n("external-arrow")],1),n("a",{staticClass:"resume",attrs:{href:"/sam-garson-cv.pdf",target:"_blank"}},[t._v("Résumé "),n("external-arrow")],1)])])],2)},s=[],o=(n("96cf"),n("3b8d")),c=n("1209"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"dot-wrapper",class:{active:t.active&&!t.entering},attrs:{width:"100%",height:"100%",viewBox:"0 0 100 100"},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[n("circle",{ref:"dot",attrs:{cx:"50",cy:"50",r:"3",fill:"white"}}),n("circle",{ref:"halo",staticClass:"halo",class:"delay-"+t.i,attrs:{cx:"50",cy:"50",r:"1",stroke:"white","stroke-width":"0.5",fill:"none"}})])},l=[],f=(n("c5f6"),n("9dc0")),h=n.n(f),d=20,v=8,g=15,p=30,m="mousemove",b=function(t){var e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.width,i=e.height,s=r+a/2,o=n+i/2;return{cx:s,cy:o,width:a,height:i}},w=function(t){var e=t.target,n=t.clientX,r=t.clientY,a=b(e),i=a.cx,s=a.cy,o=a.width,c=a.height,u=(n-i)/o*100,l=(r-s)/c*100;return{dx:u,dy:l}},x={data:function(){return{listeners:{},entering:!1,dotLeaving:!1,haloLeaving:!1}},props:{active:{type:Boolean,default:!1},i:Number},mounted:function(){this.listener=h()(this.$el,m,this.onMouseMove.bind(this))},computed:{},beforeDestroy:function(){this.listener&&this.$el.removeEventListener(m,this.listener)},methods:{onMouseMove:function(t){var e=w(t),n=e.dx,r=e.dy,a=n/d+50,i=r/d+50;c["a"].set(this.$refs.dot,{cx:a,cy:i});var s={cx:n/v+50,cy:r/v+50};this.entering||(s.r=g),c["a"].set(this.$refs.halo,s)},onMouseEnter:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dotLeaving&&this.dotLeaving.pause(),this.haloLeaving&&this.haloLeaving.pause(),e=Object(c["a"])({targets:this.$refs.halo,r:g,duration:1500}),this.entering=e,t.next=6,e.finished;case 6:this.entering=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onMouseLeave:function(){this.entering&&(this.entering.pause(),this.entering=!1),this.dotLeaving=Object(c["a"])({targets:this.$refs.dot,cx:50,cy:50,duration:1e3}),this.haloLeaving=Object(c["a"])({targets:this.$refs.halo,duration:1e3,cx:50,cy:50,r:1,easing:"easeOutQuint"})}}},y=x,_=(n("4b9b"),n("2877")),O=Object(_["a"])(y,u,l,!1,null,"7a47cda4",null),j=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"feather feather-arrow-up-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",role:"img"}},[n("title",[t._v("Will open in a new window.")]),n("line",{attrs:{x1:"7",y1:"17",x2:"17",y2:"7"}}),n("polyline",{attrs:{points:"7 7 17 7 17 17"}})])},C=[],L={},$=L,M=Object(_["a"])($,k,C,!1,null,null,null),E=M.exports,P={components:{Dot:j,ExternalArrow:E},data:function(){return{active:!1,activating:!1,deactivating:!1}},methods:{activate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first";this.active=!0,this.deactivating&&this.deactivating.pause(),this.activating=Object(c["a"])({targets:".grid .halo",r:p,cx:50,cy:50,duration:1200,delay:c["a"].stagger(80,{grid:[3,4],from:t})})},deactivate:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"first",this.activating&&this.activating.pause(),this.deactivating=Object(c["a"])({targets:".grid .halo",r:1,cx:50,cy:50,easing:"easeOutExpo",duration:500,delay:c["a"].stagger(40,{grid:[3,4],from:e})}),t.next=5,this.deactivating.finished;case 5:this.active=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},S=P,R=(n("f4fb"),Object(_["a"])(S,i,s,!1,null,"a691bed8",null)),B=R.exports,D={name:"app",components:{Grid:B}},T=D,G=(n("5c0b"),Object(_["a"])(T,r,a,!1,null,null,null));e["a"]=G.exports},"4b9b":function(t,e,n){"use strict";var r=n("caa1"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("cadf"),n("551c"),n("f751"),n("097d");var e=n("2b0e"),r=n("3dfd");e["a"].config.productionTip=!1,(t||window).$v=new e["a"]({render:function(t){return t(r["a"])},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")}.call(this,n("c8ba"))},"5c0b":function(t,e,n){"use strict";var r=n("8fba"),a=n.n(r);a.a},"8fba":function(t,e,n){t.exports={blue:"#051DA3"}},caa1:function(t,e,n){},f4fb:function(t,e,n){"use strict";var r=n("28b8"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6053cfee.js.map