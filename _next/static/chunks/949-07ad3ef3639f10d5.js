(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{94523:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(67294),a=function(){var e=(0,r.useRef)(null),t=(0,r.useCallback)((function(){return e.current=new AbortController,e.current.signal}),[]);return(0,r.useEffect)((function(){return function(){e.current&&e.current.abort()}}),[]),t}},48842:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893);n(67294);function a(e){var t=e.title,n=e.output;return(0,r.jsxs)("div",{style:{marginTop:"var(--spacer)"},children:[t&&(0,r.jsx)("h5",{children:t}),(0,r.jsx)("pre",{style:{wordWrap:"break-word"},children:(0,r.jsx)("code",{children:JSON.stringify(n,null,2)})})]})}},58952:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),a=n(67294),o=n(50633),c=n(411),s=n(96565),u=n.n(s),i={angle:90,spread:360,startVelocity:40,elementCount:70,dragFriction:.12,duration:3e3,stagger:3,width:"10px",height:"10px",perspective:"500px",colors:["var(--brand-pink)","var(--brand-purple)","var(--brand-violet)","var(--brand-grey-light)","var(--brand-grey-lighter)"]};function l(e){var t=e.success,n=e.action,s=e.className;return(0,a.useEffect)((function(){if(t){var e=document.querySelector("span[data-confetti]");(0,o.p)(e,i)}}),[t]),(0,r.jsxs)("div",{className:s||null,children:[(0,r.jsx)(c.Z,{text:t,state:"success"}),(0,r.jsx)("span",{className:u().action,"data-confetti":!0,children:n})]})}},53577:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var r=n(85893),a=n(67294),o=n(13674),c=n(11050),s=n(42764),u=n.n(s),i=n(34051),l=n.n(i),f=n(21159),p=n(41773),d=n.n(p),h=n(7390),b=n(55670),v=n(92169);function m(e,t,n,r,a,o,c){try{var s=e[o](c),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){m(o,r,a,c,s,"next",e)}function s(e){m(o,r,a,c,s,"throw",e)}c(void 0)}))}}function k(){var e=(0,o.$6)(),t=e.networkId,n=e.web3Provider,a=(0,v.Gs)().asset,c=(0,b.ZP)().networksList,s=(0,b.RB)(c,a.chainId),u=(0,b.RB)(c,t),i=(0,r.jsx)("strong",{children:(0,b.OA)(s,a.chainId)}),p=(0,r.jsx)("strong",{children:(0,b.OA)(u,t)});function m(){return(m=w(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.find((function(e){return e.chainId===a.chainId}));case 2:t=e.sent,(0,h.Pj)(n,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:d().text,children:["This asset is published on ",i," but your wallet is connected to ",p,". Connect to ",i," to interact with this asset."]}),(0,r.jsxs)(f.Z,{size:"small",onClick:function(){return function(){return m.apply(this,arguments)}()},children:["Switch to ",i]})]})}var g=n(76110),y=n(3283),x=n.n(y),_=n(9669),j=n.n(_),S=n(99436);function N(e,t,n,r,a,o,c){try{var s=e[o](c),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,a)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){N(o,r,a,c,s,"next",e)}function s(e){N(o,r,a,c,s,"throw",e)}c(void 0)}))}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}var Z="https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",C='{"query":"  query Blocks{   blocks(first: 1, skip: 0, orderBy: number, orderDirection: desc, where: {number_gt: 9300000}) { id number timestamp  author  difficulty  gasUsed  gasLimit } }","variables":{},"operationName":"Blocks"}',F='{"query": "query Meta { _meta { block { hash number } deployment hasIndexingErrors } }", "variables": {},"operationName":"Meta"}';function I(e,t){return G.apply(this,arguments)}function G(){return(G=P(l().mark((function e(t,n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j().post(t,O({},JSON.parse(n)));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),g.KF.error("Error parsing json: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(e){return B.apply(this,arguments)}function B(){return(B=P(l().mark((function e(t){var n,r,a,o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if("mainnet"!==t.network){e.next=8;break}return e.next=6,I(Z,C);case 6:return a=e.sent,e.abrupt("return",Number(null===(r=null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.blocks[0])||void 0===r?void 0:r.number));case 8:return o=new(x())(t.nodeUri),e.next=11,o.eth.getBlockNumber();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return q.apply(this,arguments)}function q(){return(q=P(l().mark((function e(t){var n,r,a,o,c,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,I("".concat(t,"/subgraphs/name/oceanprotocol/ocean-subgraph"),F);case 3:return c=e.sent,s=Number(null===c||void 0===c||null===(n=c.data)||void 0===n||null===(r=n.data)||void 0===r||null===(a=r._meta)||void 0===a||null===(o=a.block)||void 0===o?void 0:o.number),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=e.networkId,n=e.isAssetNetwork,s=(0,o.$6)().accountId,i=function(e){var t=(0,o.$6)(),n=t.block,r=t.web3Loading,c=(0,a.useState)(),s=c[0],u=c[1],i=(0,a.useState)(),f=i[0],p=i[1],d=(0,a.useState)(!0),h=d[0],b=d[1],v=(0,a.useState)(!1),m=v[0],w=v[1],k=(0,a.useState)(),y=k[0],x=k[1];return(0,a.useEffect)((function(){if(e){var t=(0,S.H)(e);x(t)}}),[e]),(0,a.useEffect)((function(){function e(){return(e=P(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,e.t0){e.next=5;break}return e.next=4,W(y);case 4:e.t0=e.sent;case 5:t=e.t0,p(t),g.KF.log("[GraphStatus] Head block: ",t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===y||void 0===y?void 0:y.nodeUri)&&!r&&function(){e.apply(this,arguments)}()}),[r,n,y]),(0,a.useEffect)((function(){function e(){return(e=P(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,L(y.subgraphUri);case 3:t=e.sent,u(t),w(!1),g.KF.log("[GraphStatus] Latest block from subgraph: ",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===y||void 0===y?void 0:y.subgraphUri)&&function(){e.apply(this,arguments)}()}),[y]),(0,a.useEffect)((function(){!s&&!f||r||m||b(!(f-s>30))}),[s,f,r,m]),{blockHead:f,blockGraph:s,isGraphSynced:h}}(t),f=i.isGraphSynced,p=i.blockGraph,d=i.blockHead,h=(0,a.useState)(),b=h[0],v=h[1],m=(0,a.useState)(),w=m[0],y=m[1],x=(0,a.useState)(),_=x[0],j=x[1],N=(0,a.useState)(!1),E=N[0],O=N[1];return(0,a.useEffect)((function(){O(!s||!1===n||!1===f),s&&n&&f||(s?!1===n?(v("error"),y("Not connected to asset network"),j("Please connect your Web3 wallet.")):!1===f?(v("warning"),y("Data out of sync"),j("The data for this network has only synced to Ethereum block ".concat(p," (out of ").concat(d,"). Transactions may fail! Please check back soon."))):(v("warning"),y("Something went wrong."),j("Something went wrong.")):(v("error"),y("No account connected"),j("Please connect your Web3 wallet.")))}),[s,f,n]),E?(0,r.jsxs)("section",{className:u().feedback,children:[(0,r.jsx)(c.Z,{state:b,"aria-hidden":!0}),(0,r.jsx)("h3",{className:u().title,children:w}),!1===n?(0,r.jsx)(k,{}):_&&(0,r.jsx)("p",{className:u().error,children:_})]}):null}},11050:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),a=(n(67294),n(47166)),o=n.n(a),c=n(86194),s=n.n(c);var u=o().bind(s());function i(e){var t,n,a,o=e.state,c=e.className,s=u((a=c,(n=c)in(t={status:!0,warning:"warning"===o,error:"error"===o})?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t));return(0,r.jsx)("i",{className:s})}},96565:function(e){e.exports={action:"SuccessConfetti_action__l8M2i"}},41773:function(e){e.exports={text:"WalletNetworkSwitcher_text__zVf4g"}},42764:function(e){e.exports={feedback:"Web3Feedback_feedback__zoZ4g",title:"Web3Feedback_title__R3mfy",error:"Web3Feedback_error__idR33"}},86194:function(e){e.exports={status:"Status_status__aL7Mi",warning:"Status_warning__NPtDa",error:"Status_error__ifLih"}}}]);