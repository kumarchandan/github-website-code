(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),c=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||c(t)||o(t)||i()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("RIqP"),c=n("sXyB"),o=n("lSNA"),i=n("8OQS");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),p=n("7ljp").mdx,s=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,o=i(t,["scope","children"]),a=s(e),f=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:p},a),e=Object.keys(t),o=e.map((function(e){return t[e]}));return c(Function,["_fn"].concat(e,[""+n])).apply(void 0,[{}].concat(r(o)))}),[n,e]);return l.createElement(f,u({},o))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},sXyB:function(t,e,n){var r=n("SksO"),c=n("b48C");function o(e,n,i){return c()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var c=[null];c.push.apply(c,e);var o=new(Function.bind.apply(t,c));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},xjC2:function(t,e,n){"use strict";n.r(e);var r=n("rePB"),c=n("q1tI"),o=n.n(c),i=n("A2+M"),a=n("PqFP"),u=n("dlzO"),l=n("wzp6"),p=n("qKvR"),s=function(t){return Object(p.c)(l.a.h1,t)},f=n("wx14"),b=n("VwMn"),O=function(t){return Object(b.a)(l.a.p,Object(f.a)({sx:{fontSize:1,mt:-3,mb:3}},t))},j=n("Wbzz"),y=n("VWnV"),d=n("G5tS"),v=n("s/18"),g=function(t){var e=t.previous,n=t.next;return Object(p.c)("footer",{css:Object(y.a)({mt:4,pt:3})},Object(p.c)(l.a.hr,null),Object(p.c)(v.a,null),(e||n)&&Object(p.c)(d.a,{as:"ul",css:Object(y.a)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(p.c)("li",null,e&&Object(p.c)(l.a.a,{as:j.Link,to:e.slug,rel:"prev"},"← ",e.title)),Object(p.c)("li",null,n&&Object(p.c)(l.a.a,{as:j.Link,to:n.slug,rel:"next"},n.title," →"))))},m=n("9eSz"),h=n.n(m),x=function(t){var e=t.text,n=t.url;return Object(p.c)(o.a.Fragment,null,e&&Object(p.c)(d.a,null,n?Object(p.c)(l.a.a,{css:Object(y.a)({margin:"auto",fontStyle:"italic"}),href:n,target:"_blank"},e):Object(p.c)(l.a.i,{css:Object(y.a)({margin:"auto"})},e)))},P=function(t){var e,n=t.post;return Object(p.c)(o.a.Fragment,null,(null==n||null===(e=n.image)||void 0===e?void 0:e.childImageSharp)&&Object(p.c)(o.a.Fragment,null,Object(p.c)(h.a,{fluid:n.image.childImageSharp.fluid,alt:n.imageAlt?n.imageAlt:n.excerpt}),Object(p.c)(x,{text:n.imageCaptionText,url:n.imageCaptionLink})))},w=function(t){var e,n,r,c,o=t.data,l=o.post,f=o.site.siteMetadata.title,b=t.location,j=t.previous,y=t.next;return Object(p.c)(a.a,{location:b,title:f},Object(p.c)(u.a,{title:l.title,description:l.excerpt,imageSource:l.socialImage?null===(e=l.socialImage)||void 0===e||null===(n=e.childImageSharp)||void 0===n?void 0:n.fluid.src:null===(r=l.image)||void 0===r||null===(c=r.childImageSharp)||void 0===c?void 0:c.fluid.src,imageAlt:l.imageAlt}),Object(p.c)("main",null,Object(p.c)("article",null,Object(p.c)("header",null,Object(p.c)(P,{post:l}),Object(p.c)(s,null,l.title),Object(p.c)(O,null,l.date)),Object(p.c)("section",null,Object(p.c)(i.MDXRenderer,null,l.body)))),Object(p.c)(g,{previous:j,next:y}))};function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A=function(t){var e=t.location,n=t.data,r=n.blogPost,c=n.previous,o=n.next;return Object(p.c)(w,{data:I(I({},n),{},{post:r}),location:e,previous:c,next:o})};e.default=A}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-486c8f1783344be658f4.js.map