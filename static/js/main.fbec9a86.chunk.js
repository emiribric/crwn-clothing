(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(31),s=n.n(i),l=n(18),o=n(8),u=n(40),d=n(17),b=n(32),p=n(41),m=n.n(p),j=n(42),h=n.n(j),O=n(4),g={SET_CURRENT_USER:"SET_CURRENT_USER"},f={currentUser:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SET_CURRENT_USER:return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},y=n(45),N=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(y.a)(e),[Object(O.a)(Object(O.a)({},t),{},{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(O.a)(Object(O.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(O.a)(Object(O.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(O.a)(Object(O.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(O.a)(Object(O.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"/shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"/shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"/shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"/shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"/shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.types,e},S={key:"root",storage:h.a,whitelist:["cart"]},R=Object(d.c)({user:x,cart:E,directory:U,shop:T}),A=Object(b.a)(S,R),M=[m.a],_=Object(d.d)(A,d.a.apply(void 0,M)),P=Object(b.b)(_),B=(n(59),n(14)),D=n.n(B),H=n(19),G=n(25),L=n(26),V=n(28),q=n(27),J=n(9),W=n(6),F=(n(61),n(20)),z=Object(W.a)([function(e){return e.directory}],(function(e){return e.sections})),Y=(n(62),Object(J.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,r=e.history,i=e.linkUrl,s=e.match;return Object(c.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return r.push("".concat(s.url).concat(i))},children:[Object(c.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),K=(n(66),Object(W.b)({sections:z})),Q=Object(o.b)(K)((function(e){var t=e.sections;return Object(c.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(F.a)(e,["id"]);return Object(c.jsx)(Y,Object(O.a)({},n),t)}))})})),Z=(n(67),function(){return Object(c.jsx)("div",{className:"homepage",children:Object(c.jsx)(Q,{})})}),X=n(43),$=n.n(X),ee=Object(W.a)([function(e){return e.shop}],(function(e){return e.collections})),te=Object(W.a)([ee],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ne=$()((function(e){return Object(W.a)([ee],(function(t){return t[e]}))})),ce=(n(68),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,r=Object(F.a)(e,["children","isGoogleSignIn","inverted"]);return Object(c.jsx)("button",Object(O.a)(Object(O.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))}),ae=function(){return{type:v.TOGGLE_CART_HIDDEN}},re=function(e){return{type:v.ADD_ITEM,payload:e}},ie=(n(69),Object(o.b)(null,(function(e){return{addItem:function(t){return e(re(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,r=t.price,i=t.imageUrl;return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(c.jsxs)("div",{className:"collection-footer",children:[Object(c.jsx)("span",{className:"name",children:a}),Object(c.jsx)("span",{className:"price",children:r})]}),Object(c.jsx)(ce,{onClick:function(){return n(t)},inverted:!0,children:"ADD TO CART"})]})}))),se=(n(70),function(e){var t=e.title,n=e.items;return Object(c.jsxs)("div",{className:"collection-preview",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(c.jsx)(ie,{item:e},e.id)}))})]})}),le=(n(71),Object(W.b)({collections:te})),oe=Object(o.b)(le)((function(e){var t=e.collections;return Object(c.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(F.a)(e,["id"]);return Object(c.jsx)(se,Object(O.a)({},n),t)}))})})),ue=(n(72),function(){return Object(c.jsx)("div",{className:"shop-page",children:Object(c.jsx)(oe,{})})}),de=n(24),be=(n(73),function(e){var t=e.handleChange,n=e.label,a=Object(F.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("input",Object(O.a)({className:"form-input",onChange:t},a)),n?Object(c.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),pe=n(29),me=(n(74),n(77),function(){var e=Object(H.a)(D.a.mark((function e(t,n){var c,a,r,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=he.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(O.a)({displayName:a,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());pe.a.initializeApp({apiKey:"AIzaSyDjMW5sF6sUKlCUaxRofqLyRyhxaKIhhj0",authDomain:"shop-react-web-app.firebaseapp.com",projectId:"shop-react-web-app",storageBucket:"shop-react-web-app.appspot.com",messagingSenderId:"841526108603",appId:"1:841526108603:web:0557abd2410f305e71a49e"});var je=pe.a.auth(),he=pe.a.firestore(),Oe=new pe.a.auth.GoogleAuthProvider;Oe.setCustomParameters({propmpt:"select_account"});var ge=function(){return je.signInWithPopup(Oe)},fe=(pe.a,n(79),function(e){Object(V.a)(n,e);var t=Object(q.a)(n);function n(e){var c;return Object(G.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(H.a)(D.a.mark((function e(t){var n,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,r=n.password,e.prev=2,e.next=5,je.signInWithEmailAndPassword(a,r);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(de.a)({},a,n))},c.state={email:"",password:""},c}return Object(L.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"sign-in",children:[Object(c.jsx)("h2",{children:"I already have an account"}),Object(c.jsx)("span",{children:"Sign in with your email and password"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)(be,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),Object(c.jsx)(be,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(ce,{type:"submit",children:"Sign In"}),Object(c.jsx)(ce,{type:"button",onClick:ge,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(r.a.Component)),xe=(n(80),function(e){Object(V.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(H.a)(D.a.mark((function t(n){var c,a,r,i,s,l,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,r=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("Password don't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,je.createUserWithEmailAndPassword(r,i);case 8:return l=t.sent,o=l.user,t.next=12,me(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("User not created "+t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(de.a)({},c,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(c.jsxs)("div",{className:"sign-up",children:[Object(c.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(c.jsx)("span",{children:"Sign up with your email and password"}),Object(c.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(c.jsx)(be,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(c.jsx)(be,{type:"text",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(c.jsx)(be,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(c.jsx)(be,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(c.jsx)(ce,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.a.Component)),ve=(n(81),function(){return Object(c.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(c.jsx)(fe,{}),Object(c.jsx)(xe,{})]})}),ye=function(e){return e.cart},Ne=Object(W.a)([ye],(function(e){return e.cartItems})),we=Object(W.a)([ye],(function(e){return e.hidden})),ke=Object(W.a)([Ne],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ee=Object(W.a)([Ne],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ie=a.createElement("g",null),Te=a.createElement("g",null),Se=a.createElement("g",null),Re=a.createElement("g",null),Ae=a.createElement("g",null),Me=a.createElement("g",null),_e=a.createElement("g",null),Pe=a.createElement("g",null),Be=a.createElement("g",null),De=a.createElement("g",null),He=a.createElement("g",null),Ge=a.createElement("g",null),Le=a.createElement("g",null),Ve=a.createElement("g",null),qe=a.createElement("g",null);function Je(e,t){var n=e.title,c=e.titleId,r=Ue(e,["title","titleId"]);return a.createElement("svg",Ce({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ie,Te,Se,Re,Ae,Me,_e,Pe,Be,De,He,Ge,Le,Ve,qe)}var We=a.forwardRef(Je),Fe=(n.p,n(82),Object(W.b)({itemCount:ke})),ze=Object(o.b)(Fe,(function(e){return{toggleCartHidden:function(){return e(ae())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(c.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(c.jsx)(We,{className:"shopping-icon"}),Object(c.jsx)("span",{className:"item-count",children:n})]})})),Ye=(n(83),function(e){var t=e.item,n=t.imageUrl,a=t.price,r=t.name,i=t.quantity;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:"item"}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("span",{className:"name",children:r}),Object(c.jsxs)("span",{className:"price",children:[i," x $",a]})]})]})}),Ke=(n(84),Object(W.b)({cartItems:Ne})),Qe=Object(J.g)(Object(o.b)(Ke)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(c.jsxs)("div",{className:"cart-dropdown",children:[Object(c.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(c.jsx)(Ye,{item:e},e.id)})):Object(c.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(c.jsx)(ce,{onClick:function(){n.push("/crwn-clothing/checkout"),a(ae())},children:"GO TO CHECKOUT"})]})}))),Ze=Object(W.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var et=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#2d3e50;}.cls-2{fill:#2e79bd;}")),tt=a.createElement("path",{className:"cls-1",d:"M72.07252,67.21705H93.50595a2.2952,2.2952,0,0,1,2.2952,2.2952V82.3455a2.29665,2.29665,0,0,1-2.29665,2.29665h-21.432a2.29665,2.29665,0,0,1-2.29665-2.29665V69.5137A2.29665,2.29665,0,0,1,72.07252,67.21705Z"}),nt=a.createElement("path",{className:"cls-1",d:"M105.78688,59.13966c-.4942,0-.98839-.0208-1.47738-.06242V71.51h.02083v31.43046a4.75042,4.75042,0,0,0,.04159.56182H58.29265c-.02083-4.31248,0-31.50329-.02083-35.85219l-23.15406.2861v35.56608H23.62654a4.75021,4.75021,0,0,0,.04162-.56182V71.51h.0208V59.07724c-.489.04162-.98319.06242-1.47735.06242a18.306,18.306,0,0,1-7.12674-1.441L15.012,110.94116h97.89638l.00521-53.23725A18.33857,18.33857,0,0,1,105.78688,59.13966Z"}),ct=a.createElement("path",{className:"cls-2",d:"M126.22964,45.30337l-9.378-28.24453H11.14836l-9.378,28.24453s-.134,0,0,.0061A17.18083,17.18083,0,0,1,13.097,49.90711a12.61686,12.61686,0,0,0,2.33839,1.84517,12.89538,12.89538,0,0,0,15.88779-1.84517,16.65889,16.65889,0,0,1,9.76161-4.60374h3.77556a17.29108,17.29108,0,0,1,9.91995,4.60374,13.15984,13.15984,0,0,0,18.43933,0,17.29108,17.29108,0,0,1,9.91995-4.60374h3.77556a16.65889,16.65889,0,0,1,9.76161,4.60374,12.89538,12.89538,0,0,0,15.88779,1.84517,12.61686,12.61686,0,0,0,2.33839-1.84517,17.18083,17.18083,0,0,1,11.32668-4.59764C126.3636,45.30337,126.22964,45.30337,126.22964,45.30337Z"});function at(e,t){var n=e.title,c=e.titleId,r=$e(e,["title","titleId"]);return a.createElement("svg",Xe({id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 128 128",ref:t,"aria-labelledby":c},r),et,void 0===n?a.createElement("title",{id:c},"n"):n?a.createElement("title",{id:c},n):null,tt,nt,ct)}var rt=a.forwardRef(at),it=(n.p,n(85),Object(W.b)({currentUser:Ze,hidden:we})),st=Object(o.b)(it)((function(e){var t=e.currentUser,n=e.hidden;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(l.b,{className:"logo-container",to:"/crwn-clothing",children:Object(c.jsx)(rt,{className:"logo"})}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(l.b,{className:"option",to:"/crwn-clothing",children:"HOME"}),Object(c.jsx)(l.b,{className:"option",to:"/crwn-clothing/shop",children:"SHOP"}),Object(c.jsx)(l.b,{className:"option",to:"/crwn-clothing/contact",children:"CONTACT"}),t?Object(c.jsx)("div",{className:"option",onClick:function(){return je.signOut()},children:"SIGN OUT"}):Object(c.jsx)(l.b,{className:"option",to:"/crwn-clothing/signin",children:"SIGN IN"}),Object(c.jsx)(ze,{})]}),n?null:Object(c.jsx)(Qe,{})]})})),lt=(n(86),n(87),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(re(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,r=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(c.jsxs)("div",{className:"checkout-item",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{src:s,alt:"item"})}),Object(c.jsx)("span",{className:"name",children:i}),Object(c.jsxs)("span",{className:"quantity",children:[Object(c.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(c.jsx)("span",{className:"value",children:o}),Object(c.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(c.jsxs)("span",{className:"price",children:["$",l]}),Object(c.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ot=n(44),ut=n.n(ot),dt=(n(88),function(e){var t=e.price,n=1e3*t;return Object(c.jsx)(ut.a,{label:"Pay Now",name:"Selling Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",descriptiopn:"Your total is $".concat(t),amount:n,pannelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51IEsEqBu1WuJxY54A0dmbNGxKF9YSC89QJmo6fUEld9pckEfT2gpdHvrwPOIgw2ITfxiUz0GReJRViTHFHNj0efk00JMwtxmjT"})}),bt=Object(W.b)({cartItems:Ne,total:Ee}),pt=Object(o.b)(bt)((function(e){var t=e.cartItems,n=e.total;return Object(c.jsxs)("div",{className:"checkout-page",children:[Object(c.jsxs)("div",{className:"checkout-header",children:[Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Product"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Description"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Quantity"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Price"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(c.jsx)(lt,{cartItem:e},e.id)})),Object(c.jsxs)("div",{className:"total",children:[Object(c.jsxs)("span",{children:["TOTAL: $",n]}),Object(c.jsx)(dt,{price:n})]}),Object(c.jsxs)("div",{className:"test-warning",children:["*Please use the following thes credit card for Payment",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"bold",children:"VISA card number: "}),Object(c.jsx)("span",{className:"red",children:"4242 4242 4242 4242"})," -",Object(c.jsx)("span",{className:"bold",children:" Exp.date (any future date) for example: "}),Object(c.jsx)("span",{className:"red",children:"05/21"})," -",Object(c.jsx)("span",{className:"bold",children:" CVC: "}),Object(c.jsx)("span",{className:"red",children:"123"})]})]})})),mt=(n(89),Object(o.b)((function(e,t){return{collection:ne(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return Object(c.jsxs)("div",{className:"collection-page",children:[Object(c.jsx)("h2",{className:"title",children:n}),Object(c.jsx)("div",{className:"items",children:a.map((function(e){return Object(c.jsx)(ie,{item:e},e.id)}))})]})}))),jt=(n(90),function(){return Object(c.jsxs)("div",{className:"contact-form",children:[Object(c.jsx)("h1",{children:"CONTACT FORM - (not working yet)"}),Object(c.jsx)("label",{for:"fname",children:"First Name"}),Object(c.jsx)("input",{className:"contact-input",type:"text",id:"fname",name:"firstname",placeholder:"Your name.."}),Object(c.jsx)("label",{for:"lname",children:"Last Name"}),Object(c.jsx)("input",{className:"contact-input",type:"text",id:"lname",name:"lastname",placeholder:"Your last name.."}),Object(c.jsx)("label",{for:"country",children:"Country"}),Object(c.jsxs)("select",{className:"contact-input",name:"country",children:[Object(c.jsx)("option",{value:"australia",children:"Australia"}),Object(c.jsx)("option",{value:"canada",children:"Canada"}),Object(c.jsx)("option",{value:"usa",children:"USA"})]}),Object(c.jsx)("label",{for:"subject",children:"Subject"}),Object(c.jsx)("textarea",{className:"contact-input contact-textarea",name:"subject",placeholder:"Write something.."}),Object(c.jsx)("input",{class:"contact-submit",type:"submit",value:"Submit"})]})}),ht=function(e){Object(V.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=je.onAuthStateChanged(function(){var t=Object(H.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,me(n);case 3:t.sent.onSnapshot((function(t){e(Object(O.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(st,{}),Object(c.jsxs)(J.d,{children:[Object(c.jsx)(J.b,{path:"crwn-clothing/",exact:!0,children:Object(c.jsx)(J.a,{to:"crwn-clothing"})}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing",component:Z}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing/shop",component:ue}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing/checkout",component:pt}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing/shop/:collectionId",component:mt}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing/contact",component:jt}),Object(c.jsx)(J.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?Object(c.jsx)(J.a,{to:"/crwn-clothing"}):Object(c.jsx)(ve,{})}})]})]})}}]),n}(r.a.Component),Ot=Object(W.b)({currentUser:Ze}),gt=Object(o.b)(Ot,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g.SET_CURRENT_USER,payload:e}}(t))}}}))(ht);s.a.render(Object(c.jsx)(o.a,{store:_,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(u.a,{persistor:P,children:Object(c.jsx)(gt,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.fbec9a86.chunk.js.map