(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),a=n.n(c),i=n(37),s=n.n(i),o=n(25),l=n(12),u=n(50),b=n(16),d=n(39),j=(n(70),n(58)),p=n(51),O=n.n(p),h=n(6),m={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},f={currentUser:null,error:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SIGN_IN_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload,error:null});case m.SIGN_OUT_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{currentUser:null,error:null});case m.SIGN_IN_FAILURE:case m.SIGN_OUT_FAILURE:case m.SIGN_UP_FAILURE:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},g=n(57),S=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(h.a)(Object(h.a)({},t),{},{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity-1}):e}))},C={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(h.a)(Object(h.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:S(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case v.CLEAR_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:[]});default:return e}},y={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"/shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"/shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"/shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"/shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"/shop/mens"}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type,e},_={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},w={collections:null,isFetching:!1,errorMessage:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.FETCH_COLLECTIONS_START:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!0});case _.FETCH_COLLECTIONS_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!1,collections:t.payload});case _.FETCH_COLLECTIONS_FAILURE:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},k={key:"root",storage:O.a,whitelist:["cart"]},U=Object(b.c)({user:x,cart:I,directory:E,shop:T}),A=Object(d.a)(k,U),R=n(4),L=n.n(R),G=n(8),F=n(35),P=n(36),H=(n(74),n(76),function(){var e=Object(F.a)(L.a.mark((function e(t,n){var r,c,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=q.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(h.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),M=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};P.a.initializeApp({apiKey:"AIzaSyDjMW5sF6sUKlCUaxRofqLyRyhxaKIhhj0",authDomain:"shop-react-web-app.firebaseapp.com",projectId:"shop-react-web-app",storageBucket:"shop-react-web-app.appspot.com",messagingSenderId:"841526108603",appId:"1:841526108603:web:0557abd2410f305e71a49e"});var D=P.a.auth(),q=P.a.firestore(),V=new P.a.auth.GoogleAuthProvider;V.setCustomParameters({propmpt:"select_account"});P.a;var z=function(e){return{type:_.FETCH_COLLECTIONS_SUCCESS,payload:e}},K=L.a.mark(J),W=L.a.mark(Y),B=L.a.mark($);function J(){var e,t,n;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=q.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(G.b)(M,t);case 7:return n=r.sent,r.next=10,Object(G.c)(z(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(G.c)((c=r.t0.message,{type:_.FETCH_COLLECTIONS_FAILURE,payload:c}));case 16:case"end":return r.stop()}var c}),K,null,[[0,12]])}function Y(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(_.FETCH_COLLECTIONS_START,J);case 2:case"end":return e.stop()}}),W)}function $(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Y)]);case 2:case"end":return e.stop()}}),B)}var Q=function(e){return{type:m.SIGN_IN_FAILURE,payload:e}},Z=function(e){var t=e.user,n=e.additionalData;return{type:m.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},X=L.a.mark(je),ee=L.a.mark(pe),te=L.a.mark(Oe),ne=L.a.mark(he),re=L.a.mark(me),ce=L.a.mark(fe),ae=L.a.mark(xe),ie=L.a.mark(ve),se=L.a.mark(ge),oe=L.a.mark(Se),le=L.a.mark(Ne),ue=L.a.mark(Ce),be=L.a.mark(Ie),de=L.a.mark(ye);function je(e,t){var n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(G.b)(H,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(G.c)((a=Object(h.a)({id:r.id},r.data()),{type:m.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(G.c)(Q(c.t0));case 15:case"end":return c.stop()}var a}),X,null,[[0,11]])}function pe(){var e,t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.signInWithPopup(V);case 3:return e=n.sent,t=e.user,n.next=7,je(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(G.c)(Q(n.t0));case 13:case"end":return n.stop()}}),ee,null,[[0,9]])}function Oe(e){var t,n,r,c,a;return L.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,D.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,je(a);case 8:i.next=13;break;case 10:i.prev=10,i.t0=i.catch(1),Object(G.c)(Q(i.t0));case 13:case"end":return i.stop()}}),te,null,[[1,10]])}function he(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=D.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,je(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(G.c)(Q(t.t0));case 14:case"end":return t.stop()}}),ne,null,[[0,10]])}function me(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.signOut();case 3:return e.next=5,Object(G.c)({type:m.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(G.c)((t=e.t0,{type:m.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),re,null,[[0,7]])}function fe(e){var t,n,r,c,a,i;return L.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,D.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(G.c)(Z({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(G.c)((o=s.t0,{type:m.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),ce,null,[[1,10]])}function xe(e){var t,n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,je(n,r);case 3:case"end":return c.stop()}}),ae)}function ve(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.GOOGLE_SIGN_IN_START,pe);case 2:case"end":return e.stop()}}),ie)}function ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.EMAIL_SIGN_IN_START,Oe);case 2:case"end":return e.stop()}}),se)}function Se(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.CHECK_USER_SESSION,he);case 2:case"end":return e.stop()}}),oe)}function Ne(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.SIGN_OUT_START,me);case 2:case"end":return e.stop()}}),le)}function Ce(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.SIGN_UP_START,fe);case 2:case"end":return e.stop()}}),ue)}function Ie(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.SIGN_UP_SUCCESS,xe);case 2:case"end":return e.stop()}}),be)}function ye(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(ve),Object(G.b)(ge),Object(G.b)(Se),Object(G.b)(Ne),Object(G.b)(Ce),Object(G.b)(Ie)]);case 2:case"end":return e.stop()}}),de)}var Ee=function(){return{type:v.TOGGLE_CART_HIDDEN}},_e=function(e){return{type:v.ADD_ITEM,payload:e}},we=L.a.mark(Ue),Te=L.a.mark(Ae),ke=L.a.mark(Re);function Ue(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)({type:v.CLEAR_CART});case 2:case"end":return e.stop()}}),we)}function Ae(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(m.SIGN_OUT_SUCCESS,Ue);case 2:case"end":return e.stop()}}),Te)}function Re(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Ae)]);case 2:case"end":return e.stop()}}),ke)}var Le=L.a.mark(Ge);function Ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)($),Object(G.b)(ye),Object(G.b)(Re)]);case 2:case"end":return e.stop()}}),Le)}var Fe=Object(j.a)(),Pe=[Fe];var He=Object(b.e)(A,b.a.apply(void 0,Pe));Fe.run(Ge);var Me=Object(d.b)(He),De=(n(78),n(26)),qe=n(27),Ve=n(29),ze=n(28),Ke=n(14),We=n(11),Be=(n(79),n(24)),Je=Object(We.a)([function(e){return e.directory}],(function(e){return e.sections})),Ye=(n(80),Object(Ke.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,s=e.match;return Object(r.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(s.url).concat(i))},children:[Object(r.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),$e=(n(84),Object(We.b)({sections:Je})),Qe=Object(l.b)($e)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Be.a)(e,["id"]);return Object(r.jsx)(Ye,Object(h.a)({},n),t)}))})})),Ze=n(17),Xe=n(18);function et(){var e=Object(Ze.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return et=function(){return e},e}var tt=Xe.b.div(et()),nt=function(){return Object(r.jsx)(tt,{children:Object(r.jsx)(Qe,{})})},rt=n(55),ct=n.n(rt),at=function(e){return e.shop},it=Object(We.a)([at],(function(e){return e.collections})),st=Object(We.a)([it],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),ot=ct()((function(e){return Object(We.a)([it],(function(t){return t?t[e]:null}))})),lt=Object(We.a)([at],(function(e){return e.isFetching})),ut=Object(We.a)([at],(function(e){return!!e.collections}));function bt(){var e=Object(Ze.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return bt=function(){return e},e}function dt(){var e=Object(Ze.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return dt=function(){return e},e}var jt=Xe.b.div(dt()),pt=Xe.b.div(bt()),Ot=function(e){return function(t){var n=t.isLoading,c=Object(Be.a)(t,["isLoading"]);return n?Object(r.jsx)(jt,{children:Object(r.jsx)(pt,{})}):Object(r.jsx)(e,Object(h.a)({},c))}};function ht(){var e=Object(Ze.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return ht=function(){return e},e}function mt(){var e=Object(Ze.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n\n    &:hover {\n    background-color: #357ae8;\n    border: none;\n    }\n"]);return mt=function(){return e},e}function ft(){var e=Object(Ze.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n    }\n"]);return ft=function(){return e},e}function xt(){var e=Object(Ze.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return xt=function(){return e},e}var vt=Object(Xe.a)(xt()),gt=Object(Xe.a)(ft()),St=Object(Xe.a)(mt()),Nt=Xe.b.button(ht(),(function(e){return e.isGoogleSignIn?St:e.inverted?gt:vt})),Ct=function(e){var t=e.children,n=Object(Be.a)(e,["children"]);return Object(r.jsx)(Nt,Object(h.a)(Object(h.a)({className:"custom-button"},n),{},{children:t}))},It=(n(86),Object(l.b)(null,(function(e){return{addItem:function(t){return e(_e(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(r.jsxs)("div",{className:"collection-item",children:[Object(r.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(r.jsxs)("div",{className:"collection-footer",children:[Object(r.jsx)("span",{className:"name",children:c}),Object(r.jsx)("span",{className:"price",children:a})]}),Object(r.jsx)(Ct,{onClick:function(){return n(t)},inverted:!0,children:"ADD TO CART"})]})}))),yt=(n(87),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(It,{item:e},e.id)}))})]})}),Et=(n(88),Object(We.b)({collections:st})),_t=Object(l.b)(Et)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Be.a)(e,["id"]);return Object(r.jsx)(yt,Object(h.a)({},n),t)}))})})),wt=Object(We.b)({isLoading:lt}),Tt=Object(b.d)(Object(l.b)(wt),Ot)(_t),kt=(n(89),Object(l.b)((function(e,t){return{collection:ot(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(It,{item:e},e.id)}))})]})}))),Ut=Object(We.b)({isLoading:function(e){return!ut(e)}}),At=Object(b.d)(Object(l.b)(Ut),Ot)(kt),Rt=(n(90),function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){return Object(De.a)(this,n),t.apply(this,arguments)}return Object(qe.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(Ke.b,{exact:!0,path:"".concat(e.path),component:Tt}),Object(r.jsx)(Ke.b,{exact:!0,path:"".concat(e.path,"/:collectionId"),component:At})]})}}]),n}(a.a.Component)),Lt=Object(l.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:_.FETCH_COLLECTIONS_START})}}}))(Rt),Gt=n(34),Ft=(n(91),function(e){var t=e.handleChange,n=e.label,c=Object(Be.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(h.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Pt=(n(92),function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(e){var r;return Object(De.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(F.a)(L.a.mark((function e(t){var n,c,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=r.props.emailSignInStart,c=r.state,a=c.email,i=c.password,n(a,i);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(Gt.a)({},c,n))},r.state={email:"",password:""},r}return Object(qe.a)(n,[{key:"render",value:function(){var e=this.props.googleSignInStart;return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"I already have an account"}),Object(r.jsx)("span",{children:"Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(Ft,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),Object(r.jsx)(Ft,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(Ct,{type:"submit",children:"Sign In"}),Object(r.jsx)(Ct,{type:"button",onClick:e,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(a.a.Component)),Ht=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:m.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:m.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))(Pt),Mt=(n(93),function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){var e;return Object(De.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(F.a)(L.a.mark((function t(n){var r,c,a,i,s,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.props.signUpStart,c=e.state,a=c.displayName,i=c.email,s=c.password,o=c.confirmPassword,s===o){t.next=6;break}return alert("Password don't match!"),t.abrupt("return");case 6:r({displayName:a,email:i,password:s});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(Gt.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(qe.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(r.jsx)(Ft,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(r.jsx)(Ft,{type:"text",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(r.jsx)(Ft,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(r.jsx)(Ft,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(r.jsx)(Ct,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),Dt=Object(l.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:m.SIGN_UP_START,payload:e}}(t))}}}))(Mt),qt=(n(94),function(){return Object(r.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(r.jsx)(Ht,{}),Object(r.jsx)(Dt,{})]})}),Vt=(n(95),n(96),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(_e(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.imageUrl,o=t.price,l=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(r.jsx)("span",{className:"value",children:l}),Object(r.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(r.jsxs)("span",{className:"price",children:["$",o]}),Object(r.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),zt=function(e){return e.cart},Kt=Object(We.a)([zt],(function(e){return e.cartItems})),Wt=Object(We.a)([zt],(function(e){return e.hidden})),Bt=Object(We.a)([Kt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Jt=Object(We.a)([Kt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Yt=n(56),$t=n.n(Yt),Qt=(n(97),function(e){var t=e.price,n=1e3*t;return Object(r.jsx)($t.a,{label:"Pay Now",name:"Selling Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/TcL.svg",descriptiopn:"Your total is $".concat(t),amount:n,pannelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51IEsEqBu1WuJxY54A0dmbNGxKF9YSC89QJmo6fUEld9pckEfT2gpdHvrwPOIgw2ITfxiUz0GReJRViTHFHNj0efk00JMwtxmjT"})}),Zt=Object(We.b)({cartItems:Kt,total:Jt}),Xt=Object(l.b)(Zt)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(Vt,{cartItem:e},e.id)})),Object(r.jsxs)("div",{className:"total",children:[Object(r.jsxs)("span",{children:["TOTAL: $",n]}),Object(r.jsx)(Qt,{price:n})]}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following thes credit card for Payment",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"bold",children:"VISA card number: "}),Object(r.jsx)("span",{className:"red",children:"4242 4242 4242 4242"})," -",Object(r.jsx)("span",{className:"bold",children:" Exp.date (any future date) for example: "}),Object(r.jsx)("span",{className:"red",children:"05/21"})," -",Object(r.jsx)("span",{className:"bold",children:" CVC: "}),Object(r.jsx)("span",{className:"red",children:"123"})]})]})})),en=(n(98),function(){return Object(r.jsxs)("div",{className:"contact-form",children:[Object(r.jsx)("h1",{children:"CONTACT FORM - (not working yet)"}),Object(r.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(r.jsx)("input",{className:"contact-input",type:"text",id:"fname",name:"firstname",placeholder:"Your name.."}),Object(r.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(r.jsx)("input",{className:"contact-input",type:"text",id:"lname",name:"lastname",placeholder:"Your last name.."}),Object(r.jsx)("label",{htmlFor:"country",children:"Country"}),Object(r.jsxs)("select",{className:"contact-input",name:"country",children:[Object(r.jsx)("option",{value:"australia",children:"Australia"}),Object(r.jsx)("option",{value:"canada",children:"Canada"}),Object(r.jsx)("option",{value:"usa",children:"USA"})]}),Object(r.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(r.jsx)("textarea",{className:"contact-input contact-textarea",name:"subject",placeholder:"Write something.."}),Object(r.jsx)("input",{className:"contact-submit",type:"submit",value:"Submit"})]})});function tn(){return(tn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nn(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var rn=c.createElement("g",null),cn=c.createElement("g",null),an=c.createElement("g",null),sn=c.createElement("g",null),on=c.createElement("g",null),ln=c.createElement("g",null),un=c.createElement("g",null),bn=c.createElement("g",null),dn=c.createElement("g",null),jn=c.createElement("g",null),pn=c.createElement("g",null),On=c.createElement("g",null),hn=c.createElement("g",null),mn=c.createElement("g",null),fn=c.createElement("g",null);function xn(e,t){var n=e.title,r=e.titleId,a=nn(e,["title","titleId"]);return c.createElement("svg",tn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),rn,cn,an,sn,on,ln,un,bn,dn,jn,pn,On,hn,mn,fn)}var vn=c.forwardRef(xn),gn=(n.p,n(99),Object(We.b)({itemCount:Bt})),Sn=Object(l.b)(gn,(function(e){return{toggleCartHidden:function(){return e(Ee())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(vn,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),Nn=(n(100),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," x $",c]})]})]})}),Cn=(n(101),Object(We.b)({cartItems:Kt})),In=Object(Ke.g)(Object(l.b)(Cn)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(Nn,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(r.jsx)(Ct,{onClick:function(){n.push("/crwn-clothing/checkout"),c(Ee())},children:"GO TO CHECKOUT"})]})}))),yn=Object(We.a)([function(e){return e.user}],(function(e){return e.currentUser}));function En(){return(En=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _n(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var wn=c.createElement("defs",null,c.createElement("style",null,".cls-1{fill:#2d3e50;}.cls-2{fill:#2e79bd;}")),Tn=c.createElement("path",{className:"cls-1",d:"M72.07252,67.21705H93.50595a2.2952,2.2952,0,0,1,2.2952,2.2952V82.3455a2.29665,2.29665,0,0,1-2.29665,2.29665h-21.432a2.29665,2.29665,0,0,1-2.29665-2.29665V69.5137A2.29665,2.29665,0,0,1,72.07252,67.21705Z"}),kn=c.createElement("path",{className:"cls-1",d:"M105.78688,59.13966c-.4942,0-.98839-.0208-1.47738-.06242V71.51h.02083v31.43046a4.75042,4.75042,0,0,0,.04159.56182H58.29265c-.02083-4.31248,0-31.50329-.02083-35.85219l-23.15406.2861v35.56608H23.62654a4.75021,4.75021,0,0,0,.04162-.56182V71.51h.0208V59.07724c-.489.04162-.98319.06242-1.47735.06242a18.306,18.306,0,0,1-7.12674-1.441L15.012,110.94116h97.89638l.00521-53.23725A18.33857,18.33857,0,0,1,105.78688,59.13966Z"}),Un=c.createElement("path",{className:"cls-2",d:"M126.22964,45.30337l-9.378-28.24453H11.14836l-9.378,28.24453s-.134,0,0,.0061A17.18083,17.18083,0,0,1,13.097,49.90711a12.61686,12.61686,0,0,0,2.33839,1.84517,12.89538,12.89538,0,0,0,15.88779-1.84517,16.65889,16.65889,0,0,1,9.76161-4.60374h3.77556a17.29108,17.29108,0,0,1,9.91995,4.60374,13.15984,13.15984,0,0,0,18.43933,0,17.29108,17.29108,0,0,1,9.91995-4.60374h3.77556a16.65889,16.65889,0,0,1,9.76161,4.60374,12.89538,12.89538,0,0,0,15.88779,1.84517,12.61686,12.61686,0,0,0,2.33839-1.84517,17.18083,17.18083,0,0,1,11.32668-4.59764C126.3636,45.30337,126.22964,45.30337,126.22964,45.30337Z"});function An(e,t){var n=e.title,r=e.titleId,a=_n(e,["title","titleId"]);return c.createElement("svg",En({id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 128 128",ref:t,"aria-labelledby":r},a),wn,void 0===n?c.createElement("title",{id:r},"n"):n?c.createElement("title",{id:r},n):null,Tn,kn,Un)}var Rn=c.forwardRef(An);n.p;function Ln(){var e=Object(Ze.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n    border: 1px solid #eee;\n    margin: 0 2px;\n"]);return Ln=function(){return e},e}function Gn(){var e=Object(Ze.a)(["\n    width: 50px;\n"]);return Gn=function(){return e},e}function Fn(){var e=Object(Ze.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Fn=function(){return e},e}function Pn(){var e=Object(Ze.a)(["\n    height: 50px;\n    width: 50px;\n    padding: 10px 0px;\n"]);return Pn=function(){return e},e}function Hn(){var e=Object(Ze.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n    border-bottom: 1px solid #ddd;\n"]);return Hn=function(){return e},e}var Mn=Xe.b.div(Hn()),Dn=Object(Xe.b)(o.b)(Pn()),qn=Xe.b.div(Fn()),Vn=Object(Xe.b)(Rn)(Gn()),zn=Object(Xe.b)(o.b)(Ln()),Kn=Object(We.b)({currentUser:yn,hidden:Wt}),Wn=Object(l.b)(Kn,(function(e){return{signOutStart:function(){return e({type:m.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.signOutStart;return Object(r.jsxs)(Mn,{children:[Object(r.jsx)(Dn,{to:"/crwn-clothing",children:Object(r.jsx)(Vn,{})}),Object(r.jsxs)(qn,{children:[Object(r.jsx)(zn,{to:"/crwn-clothing",children:"HOME"}),Object(r.jsx)(zn,{to:"/crwn-clothing/shop",children:"SHOP"}),Object(r.jsx)(zn,{to:"/crwn-clothing/contact",children:"CONTACT"}),t?Object(r.jsx)(zn,{as:"div",onClick:c,children:"SIGN OUT"}):Object(r.jsx)(zn,{to:"/crwn-clothing/signin",children:"SIGN IN"}),Object(r.jsx)(Sn,{})]}),n?null:Object(r.jsx)(In,{})]})})),Bn=function(e){Object(Ve.a)(n,e);var t=Object(ze.a)(n);function n(){var e;Object(De.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(qe.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(Wn,{}),Object(r.jsxs)(Ke.d,{children:[Object(r.jsx)(Ke.b,{path:"crwn-clothing/",exact:!0,children:Object(r.jsx)(Ke.a,{to:"crwn-clothing"})}),Object(r.jsx)(Ke.b,{exact:!0,path:"/crwn-clothing",component:nt}),Object(r.jsx)(Ke.b,{path:"/crwn-clothing/shop",component:Lt}),Object(r.jsx)(Ke.b,{exact:!0,path:"/crwn-clothing/checkout",component:Xt}),Object(r.jsx)(Ke.b,{exact:!0,path:"/crwn-clothing/contact",component:en}),Object(r.jsx)(Ke.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?Object(r.jsx)(Ke.a,{to:"/crwn-clothing"}):Object(r.jsx)(qt,{})}})]})]})}}]),n}(a.a.Component),Jn=Object(We.b)({currentUser:yn}),Yn=Object(l.b)(Jn,(function(e){return{checkUserSession:function(){return e({type:m.CHECK_USER_SESSION})}}}))(Bn);s.a.render(Object(r.jsx)(l.a,{store:He,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(u.a,{persistor:Me,children:Object(r.jsx)(Yn,{})})})}),document.getElementById("root"))},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.832d1241.chunk.js.map