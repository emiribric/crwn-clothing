(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),i=n.n(r),c=n(30),s=n.n(c),l=n(20),o=n(12),u=n(23),p=n(38),d=n.n(p),b=n(5),m={SET_CURRENT_USER:"SET_CURRENT_USER"},h={currentUser:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_CURRENT_USER:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},g={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},f=n(39),O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(f.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},v={hidden:!0,cartItems:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{hidden:!e.hidden});case g.ADD_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});default:return e}},w=Object(u.c)({user:j,cart:x}),y=[d.a],k=Object(u.d)(w,u.a.apply(void 0,y)),N=(n(51),n(13)),U=n.n(N),E=n(21),C=n(16),S=n(17),T=n(19),I=n(18),B=n(7),A=(n(53),n(22)),P=(n(54),Object(B.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,i=e.history,c=e.linkUrl,s=e.match;return Object(a.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(c))},children:[Object(a.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(a.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),D=(n(58),function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"/shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"/shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"/shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"/shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"/shop/mens"}]},e}return Object(S.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(A.a)(e,["id"]);return Object(a.jsx)(P,Object(b.a)({},n),t)}))})}}]),n}(i.a.Component)),R=(n(59),function(){return Object(a.jsx)("div",{className:"homepage",children:Object(a.jsx)(D,{})})}),G=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],M=(n(60),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,i=Object(A.a)(e,["children","isGoogleSignIn","inverted"]);return Object(a.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))}),W=(n(61),Object(o.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:g.ADD_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,i=t.price,c=t.imageUrl;return Object(a.jsxs)("div",{className:"collection-item",children:[Object(a.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(a.jsxs)("div",{className:"collection-footer",children:[Object(a.jsx)("span",{className:"name",children:r}),Object(a.jsx)("span",{className:"price",children:i})]}),Object(a.jsx)(M,{onClick:function(){return n(t)},inverted:!0,children:"ADD TO CART"})]})}))),_=(n(62),function(e){var t=e.title,n=e.items;return Object(a.jsxs)("div",{className:"collection-preview",children:[Object(a.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(a.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(a.jsx)(W,{item:e},e.id)}))})]})}),H=function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={collections:G},a}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(a.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(A.a)(e,["id"]);return Object(a.jsx)(_,Object(b.a)({},n),t)}))})}}]),n}(i.a.Component),J=n(27),z=(n(63),function(e){var t=e.handleChange,n=e.label,r=Object(A.a)(e,["handleChange","label"]);return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",Object(b.a)({className:"form-input",onChange:t},r)),n?Object(a.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}),q=n(28),L=(n(64),n(67),function(){var e=Object(E.a)(U.a.mark((function e(t,n){var a,r,i,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=F.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,a.set(Object(b.a)({displayName:r,email:i,createdAt:c},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());q.a.initializeApp({apiKey:"AIzaSyCMHs84fA9a9wP3MNqAK7JKAhCfj-SAWrU",authDomain:"crwn-clothing-d55ea.firebaseapp.com",databaseURL:"https://crwn-clothing-d55ea.firebaseio.com",projectId:"crwn-clothing-d55ea",storageBucket:"crwn-clothing-d55ea.appspot.com",messagingSenderId:"243132503338",appId:"1:243132503338:web:76a8e6fecd2e40e5da7a53"});var V=q.a.auth(),F=q.a.firestore(),K=new q.a.auth.GoogleAuthProvider;K.setCustomParameters({propmpt:"select_account"});var Q=function(){return V.signInWithPopup(K)},Y=(q.a,n(69),function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(E.a)(U.a.mark((function e(t){var n,r,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.password,e.prev=2,e.next=5,V.signInWithEmailAndPassword(r,i);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(J.a)({},r,n))},a.state={email:"",password:""},a}return Object(S.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"sign-in",children:[Object(a.jsx)("h2",{children:"I already have an account"}),Object(a.jsx)("span",{children:"Sign in with your email and password"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(z,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),Object(a.jsx)(z,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(M,{type:"submit",children:"Sign In"}),Object(a.jsx)(M,{type:"button",onClick:Q,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(i.a.Component)),X=(n(70),function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(E.a)(U.a.mark((function t(n){var a,r,i,c,s,l,o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,i=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("Password don't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,V.createUserWithEmailAndPassword(i,c);case 8:return l=t.sent,o=l.user,t.next=12,L(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("User not created "+t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(J.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,i=e.confirmPassword;return Object(a.jsxs)("div",{className:"sign-up",children:[Object(a.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(a.jsx)("span",{children:"Sign up with your email and password"}),Object(a.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)(z,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(a.jsx)(z,{type:"text",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(a.jsx)(z,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(a.jsx)(z,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(a.jsx)(M,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),Z=(n(71),function(){return Object(a.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(a.jsx)(Y,{}),Object(a.jsx)(X,{})]})});function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var te=r.createElement("g",null),ne=r.createElement("g",null),ae=r.createElement("g",null),re=r.createElement("g",null),ie=r.createElement("g",null),ce=r.createElement("g",null),se=r.createElement("g",null),le=r.createElement("g",null),oe=r.createElement("g",null),ue=r.createElement("g",null),pe=r.createElement("g",null),de=r.createElement("g",null),be=r.createElement("g",null),me=r.createElement("g",null),he=r.createElement("g",null);function je(e,t){var n=e.title,a=e.titleId,i=ee(e,["title","titleId"]);return r.createElement("svg",$({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),te,ne,ae,re,ie,ce,se,le,oe,ue,pe,de,be,me,he)}var ge=r.forwardRef(je),fe=(n.p,n(72),Object(o.b)(null,(function(e){return{toggleCartHidden:function(){return e({type:g.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden;return Object(a.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(a.jsx)(ge,{className:"shopping-icon"}),Object(a.jsx)("span",{className:"item-count",children:"0"})]})}))),Oe=(n(73),function(e){var t=e.item,n=t.imageUrl,r=t.price,i=t.name,c=t.quantity;return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsx)("img",{src:n,alt:"item"}),Object(a.jsxs)("div",{className:"item-details",children:[Object(a.jsx)("span",{className:"name",children:i}),Object(a.jsxs)("span",{className:"price",children:[c," x $",r]})]})]})}),ve=(n(74),Object(o.b)((function(e){return{cartItems:e.cart.cartItems}}))((function(e){var t=e.cartItems;return Object(a.jsxs)("div",{className:"cart-dropdown",children:[Object(a.jsx)("div",{className:"cart-items",children:t.map((function(e){return Object(a.jsx)(Oe,{item:e},e.id)}))}),Object(a.jsx)(M,{children:"GO TO CHECKOUT"})]})})));function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ye=r.createElement("desc",null,"Created with Sketch."),ke=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Ne(e,t){var n=e.title,a=e.titleId,i=we(e,["title","titleId"]);return r.createElement("svg",xe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t,"aria-labelledby":a},i),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,ye,ke)}var Ue=r.forwardRef(Ne),Ee=(n.p,n(75),Object(o.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(l.b,{className:"logo-container",to:"/crwn-clothing",children:Object(a.jsx)(Ue,{className:"logo"})}),Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)(l.b,{className:"option",to:"/crwn-clothing/shop",children:"SHOP"}),Object(a.jsx)(l.b,{className:"option",to:"/crwn-clothing/contact",children:"CONTACT"}),t?Object(a.jsx)("div",{className:"option",onClick:function(){return V.signOut()},children:"SIGN OUT"}):Object(a.jsx)(l.b,{className:"option",to:"/crwn-clothing/signin",children:"SIGN IN"}),Object(a.jsx)(fe,{})]}),n?null:Object(a.jsx)(ve,{})]})}))),Ce=function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=V.onAuthStateChanged(function(){var t=Object(E.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,L(n);case 3:t.sent.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(Ee,{}),Object(a.jsxs)(B.d,{children:[Object(a.jsx)(B.b,{path:"crwn-clothing/",exact:!0,children:Object(a.jsx)(B.a,{to:"crwn-clothing"})}),Object(a.jsx)(B.b,{exact:!0,path:"/crwn-clothing",component:R}),Object(a.jsx)(B.b,{exact:!0,path:"/crwn-clothing/shop",component:H}),Object(a.jsx)(B.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?Object(a.jsx)(B.a,{to:"/crwn-clothing"}):Object(a.jsx)(Z,{})}})]})]})}}]),n}(i.a.Component),Se=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:m.SET_CURRENT_USER,payload:e}}(t))}}}))(Ce);s.a.render(Object(a.jsx)(o.a,{store:k,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(Se,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.9a04a6a3.chunk.js.map