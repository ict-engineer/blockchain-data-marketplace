(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(69895)}])},69895:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(85893),s=r(67294),a=r(34051),o=r.n(a),i=r(60417),c=r(17563),u=r(83372),l=r(98443),d=r(21159),v=r(98627),f=r.n(v),p=r(47166),h=r.n(p),_=r(71026),g=r(11163);function x(e,t,r,n,s,a,o){try{var i=e[a](o),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,s)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(e){x(a,n,s,o,i,"next",e)}function i(e){x(a,n,s,o,i,"throw",e)}o(void 0)}))}}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=h().bind(f()),j=[{display:"Relevance",value:_.Hj.Relevance},{display:"Published",value:_.Hj.Created}];function N(e){var t=e.sortType,r=e.setSortType,s=e.sortDirection,a=e.setSortDirection,i=(0,g.useRouter)(),c=String.fromCharCode(s===_.jN.Ascending?9650:9660);function u(e,t){return v.apply(this,arguments)}function v(){return(v=y(o().mark((function e(t,n){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=4,(0,l.qX)(location,["sort"]);case 4:s=e.sent,s="".concat(s,"&sort=").concat(t),r(t),e.next=15;break;case 9:if(!n){e.next=15;break}return e.next=12,(0,l.qX)(location,["sortOrder"]);case 12:s=e.sent,s="".concat(s,"&sortOrder=").concat(n),a(n);case 15:i.push(s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,n.jsxs)("div",{className:f().sortList,children:[(0,n.jsx)("label",{className:f().sortLabel,children:"Sort"}),j.map((function(e,r){var a,o=m((b(a={},f().selected,e.value===t),b(a,f().sorted,!0),a));return(0,n.jsxs)(d.Z,{className:o,size:"small",onClick:function(){var r;(r=e.value)===t?s===_.jN.Descending?u(null,_.jN.Ascending):u(null,_.jN.Descending):u(r,null)},children:[e.display,e.value===t?(0,n.jsx)("span",{className:f().direction,children:c}):null]},r)}))]})}var w=r(7810),S=r(51916),T=r(84015),P=r.n(T);function k(e,t,r,n,s,a,o){try{var i=e[a](o),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,s)}function C(e){var t=e.setTotalResults,r=e.setTotalPagesNumber,a=(0,g.useRouter)(),d=(0,s.useState)(),v=d[0],f=d[1],p=(0,w.o)().chainIds,h=(0,s.useState)(),_=h[0],x=h[1],y=(0,s.useState)(),b=y[0],m=y[1],j=(0,s.useState)(),T=j[0],C=j[1],E=(0,s.useState)(),R=E[0],L=E[1],O=(0,s.useState)(),X=O[0],D=O[1],A=(0,s.useState)(),q=A[0],F=A[1],Z=(0,S.U)();(0,s.useEffect)((function(){var e=c.parse(location.search),t=e.sort,r=e.sortOrder,n=e.serviceType,s=e.accessType;f(e),C(n),L(s),F(r),D(t)}),[a]);var H=(0,s.useCallback)((function(e){var t=a.pathname,r=a.query,n=(0,l.GW)(t+"?"+JSON.stringify(r).replace(/"|{|}/g,"").replace(/:/g,"=").replace(/,/g,"&"),"page","".concat(e));return a.push(n)}),[a]),J=(0,s.useCallback)(function(){var e,n=(e=o().mark((function e(n,s){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),t(void 0),e.next=4,(0,l.O7)(n,s,Z());case 4:a=e.sent,x(a),t((null===a||void 0===a?void 0:a.totalResults)||0),r((null===a||void 0===a?void 0:a.totalPages)||0),m(!1);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(e){k(a,n,s,o,i,"next",e)}function i(e){k(a,n,s,o,i,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),[Z,r,t]);return(0,s.useEffect)((function(){if(v&&_){var e=v.page;_.totalPages<Number(e)&&H(1)}}),[v,_,H]),(0,s.useEffect)((function(){v&&p&&J(v,p)}),[v,p,Z,J]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:P().search,children:(0,n.jsxs)("div",{className:P().row,children:[(0,n.jsx)(u.Z,{serviceType:T,accessType:R,setServiceType:C,setAccessType:L,addFiltersToUrl:!0}),(0,n.jsx)(N,{sortType:X,sortDirection:q,setSortType:D,setSortDirection:F})]})}),(0,n.jsx)("div",{className:P().results,children:(0,n.jsx)(i.Z,{assets:null===_||void 0===_?void 0:_.results,showPagination:!0,isLoading:b,page:null===_||void 0===_?void 0:_.page,totalPages:null===_||void 0===_?void 0:_.totalPages,onPageChange:H})})]})}var E=r(53233),R=r(7390),L=r(23307),O=r(3283),X=r.n(O);function D(){var e=(0,g.useRouter)(),t=e.query,r=t.text,a=t.owner,o=t.tags,i=t.categories,c=(0,s.useState)(),u=c[0],l=c[1],d=(0,s.useState)(),v=d[0],f=d[1],p=(X().utils.isAddress(r)?(0,R.XC)(r):r)||o||i,h=a?"Published by ".concat((0,R.XC)(a)):"".concat(void 0!==u?p&&" "!==p?0===u?"No results":u+(u>1?" results":" result")+" for "+p:u+" results":"Searching...");return(0,n.jsx)(E.Z,{title:v>L.xF?">10000 results ".concat(p&&" "!==p?"for ".concat(p):""):h,description:v&&v>L.xF?"**Results displayed are limited to the first 10k, please refine your search.**":void 0,uri:e.route,children:(0,n.jsx)(C,{setTotalResults:l,setTotalPagesNumber:f})})}},84015:function(e){e.exports={row:"Search_row__Bi2SW"}},98627:function(e){e.exports={sortList:"sort_sortList__imYHl",sortLabel:"sort_sortLabel__6z11j Label_label__AiTEy",sorted:"sort_sorted__M3JXI",selected:"sort_selected__Xpn2Y",direction:"sort_direction__Qc1Jr"}}},function(e){e.O(0,[38,136,485,774,888,179],(function(){return t=8266,e(e.s=t);var t}));var t=e.O();_N_E=t}]);