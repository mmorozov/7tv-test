(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{67:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return f});var r=n(76),c=n(2),u=n(71),a=n(70),o=function(t,e){return function(n,o){var s=Object(u.a)(n);return s?Object(c.s)(t,Object(r.a)(e).concat([Object(a.a)(s.url,o)])):(console.warn("Undefined resource",n),Object(c.a)(t))}},s=o({fetching:!1,fetched:null,error:null},["meta"]),i=function(t){var e=t.entity,n=t.id;return Object(c.s)(null,["entities",e,n])},l=o([],["collections"]),f=function(t,e){return function(n){return Object(c.c)(Object(c.l)(function(t){return i(t)(n)}),l(t,e))(n)}}},68:function(t,e,n){"use strict";var r=n(73),c=n(2);e.a=function(t){return function(){for(var e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return Object(c.v)(t).reduce(function(t,e){var c=Object(r.a)(e,2),u=c[0],a=c[1];return t[u]=a.apply(void 0,n),t},{})}}},69:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(8),c=n(16),u=n(2),a=n(3),o=n(70),s=n(71),i=Object(u.e)(Object(u.c)(u.w,Object(u.k)("."),function(t,e){return[t,e]})),l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,u=Object(s.a)(t);if(!u)return{type:i("undefined")("resource"),resource:t};var l=i(t);return Object(r.a)({type:l("action")},a.a,Object(c.a)({},u,{query:e,data:n,url:Object(o.a)(u.url,e),types:{success:l("success"),failure:l("failure"),request:l("request")}}))},f=function(t){return{dispatch:t,callAPI:Object(u.t)(l,t)}}},70:function(t,e,n){"use strict";var r=n(2),c=n(74),u=n.n(c);e.a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?u.a.parse(t).expand(Object(r.p)(n,e)):null}},71:function(t,e,n){"use strict";var r=n(2),c=n(75),u=new c.b.Entity("post"),a=new c.b.Entity("user"),o=new c.b.Entity("comment"),s=function(t,e){return Object(r.c)(function(e){return e.result&&Array.isArray(e.result)?(e.result=e.result.map(function(e){return{id:e,entity:t}}),e):e},Object(r.i)(c.a)(e))},i={posts:{url:"/posts",cache:!0,transform:s("post",[u])},post:{url:"/posts/{id}",cache:function(t,e,n){var c=n.id;return Object(r.c)(Object(r.j)(c),Object(r.s)({},["entities","post"]))(t)},transform:s("post",u)},user:{url:"/users/{id}",cache:!0,transform:s("user",a)},comments:{url:"/comments",cache:!0,transform:s("comment",[o])}};e.a=function(t){return Object(r.s)(null,[t],i)}},72:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0);function c(t){Object(r.useEffect)(function(){return document.title=t,function(){return document.title=""}},[t])}},81:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),u=n(15),a=n(69),o=n(67),s=n(11),i=n(73),l=n(17),f=n(79),b=n(2),m=n(68),j=Object(u.b)(function(t,e){return Object(m.a)({count:Object(b.c)(Object(b.u)(e.id),Object(b.d)(Object(b.u)("postId")),b.x,Object(b.s)({},["entities","comment"]))})})(function(t){var e=t.count,n=void 0===e?0:e;return c.a.createElement("span",null,n)});function O(t){var e=t.counter,n=Object(l.a)(t,["counter"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,c.a.createElement(f.a,{to:"/post/".concat(n.id)},n.title)),c.a.createElement("p",null,n.body),e&&c.a.createElement("p",null,"Comments:\xa0",c.a.createElement(j,{id:n.id})),c.a.createElement("hr",null))}function d(t){var e=t.posts,n=t.counter,u=void 0!==n&&n,a=t.limit,o=void 0===a?5:a,s=Object(r.useState)(o),l=Object(i.a)(s,2),f=l[0],b=l[1];return c.a.createElement(c.a.Fragment,null,e.slice(0,f).map(function(t){return c.a.createElement(O,Object.assign({},t,{key:t.id,counter:u}))}),f<e.length&&c.a.createElement("button",{onClick:function(){return b(function(t){return t+o})}},c.a.createElement("b",null,"Show more")))}var p=n(72);e.default=Object(u.b)(Object(m.a)({posts:Object(o.b)("posts"),meta:Object(o.c)("posts"),metaComments:Object(o.c)("comments")}),a.a)(function(t){var e=t.callAPI,n=t.meta,u=t.metaComments,a=t.posts;return Object(r.useEffect)(function(){e("posts"),e("comments")},[]),Object(p.a)("Posts"),c.a.createElement("div",{className:"page"},c.a.createElement("h1",null,"Posts"),n.fetching&&c.a.createElement(s.a,{msg:"Fetching posts"}),!!n.error&&c.a.createElement("p",null,"Error: ",n.error.status),n.fetched&&c.a.createElement(d,{posts:a,counter:u.fetched}))})}}]);
//# sourceMappingURL=2.a93814bc.chunk.js.map