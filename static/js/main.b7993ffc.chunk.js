(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(33),l=t.n(r),i=(t(43),t(8)),o=t(34),s=t.n(o),m=t(35),u=t.n(m),d=(t(44),t(15)),p=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},_=function(){return Object(n.useContext)(p)},g=t(25),h=t.n(g),f=(h.a.initializeApp({apiKey:"AIzaSyBKgCVYELO1c-6jkZeRBvlSLgmisdM8xoc",authDomain:"clone-f1d90.firebaseapp.com",databaseURL:"https://clone-f1d90.firebaseio.com",projectId:"clone-f1d90",storageBucket:"clone-f1d90.appspot.com",messagingSenderId:"557895514564",appId:"1:557895514564:web:7dcd87dae7b072fe6f8c91",measurementId:"G-7XD3T0XTJV"}).firestore(),h.a.auth()),v=function(){var e,a,t=_(),n=Object(i.a)(t,2),r=n[0];n[1];return c.a.createElement("div",{className:"header"},c.a.createElement(d.b,{exact:!0,to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"amazon_logo"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(s.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(d.b,{exact:!0,to:!r.user&&"/login"},c.a.createElement("div",{onClick:function(){r.user&&f.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r.user?null===(e=r.user)||void 0===e?void 0:e.email:"User"),c.a.createElement("span",{className:"header__optionLineTwo"},r.user?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns "),c.a.createElement("span",{className:"header__optionLineTwo"},"&orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime ")),c.a.createElement(d.b,{exact:!0,to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(u.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===(a=r.basket)||void 0===a?void 0:a.length)))))},b=(t(60),t(61),function(e){var a=_(),t=Object(i.a)(a,2),n=t[0],r=t[1];console.log("this is data layer>>>",n.basket);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,e.title),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,e.price)),c.a.createElement("div",{className:"product__rating"},Array(e.rating).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:e.img,alt:"product image"}),c.a.createElement("button",{onClick:function(){r({type:"ADD_TO_BASKET",item:{id:e.id,title:e.title,image:e.img,rating:e.rating,price:e.price}})}},"Add to Basket"))}),k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"cover photo"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",price:19.99,rating:3,img:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),c.a.createElement(b,{title:"Kenwood kMix Stand Mixer for baking Stylish Kitchen Mixer with k-Beater",price:239,rating:4,img:"https://m.media-amazon.com/images/I/81O+GNdkzKL._AC_SX180_SY120_QL70_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{title:"Samsung C24F390 24-Inch Curved LED Monitor - HDMI, VGA , Black",price:199.99,rating:4,img:"https://m.media-amazon.com/images/I/914KVrXKtyL._AC_UY218_.jpg"}),c.a.createElement(b,{title:"Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric",price:39.99,rating:4,img:"https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"}),c.a.createElement(b,{title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:949.99,rating:5,img:"https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB",price:1155.15,rating:4,img:"https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UY218_.jpg"}))))},N=(t(62),t(4)),S=(t(63),t(64),function(e){var a=_(),t=Object(i.a)(a,2),n=(t[0],t[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:e.img,alt:"product image"}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},e.title),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,e.price)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(e.rating).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){n({type:"REMOVE_FROM_BASKET",id:e.id})}},"Remove from Basket")))}),C=(t(65),t(36)),O=t.n(C),j=function(){var e=_(),a=Object(i.a)(e,2),t=a[0];a[1];return c.a.createElement("div",{className:"subtotal"},c.a.createElement(O.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.basket.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This Order Contains a Gift"))},decimalScale:2,value:function(){for(var e=0,a=0;a<t.basket.length;a++)e+=t.basket[a].price;return e}(),displayType:"text",thousandSeperator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))},y=function(){var e,a=_(),t=Object(i.a)(a,2),n=t[0];t[1];return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"checkout ad"}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello,",null===(e=n.user)||void 0===e?void 0:e.email),c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.basket.map((function(e){return c.a.createElement(S,{id:e.id,title:e.title,img:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(j,null)))},w=(t(67),function(){var e=Object(N.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],u=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(d.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),f.signInWithEmailAndPassword(r,m).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to Amazon's Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),f.createUserWithEmailAndPassword(r,m).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))}),A=function(){var e=_(),a=Object(i.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("the user is",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(d.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/"},c.a.createElement(v,null),c.a.createElement(k,null)),c.a.createElement(N.a,{exact:!0,path:"/login"},c.a.createElement(w,null)),c.a.createElement(N.a,{exact:!0,path:"/checkout"},c.a.createElement(v,null),c.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(28),I=t(18),x=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(I.a)(Object(I.a)({},e),{},{basket:[].concat(Object(B.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(B.a)(e.basket);return t>=0?n.splice(t,1):console.warn("can't remove product (id: ".concat(a.id," as its not in the basket")),Object(I.a)(Object(I.a)({},e),{},{basket:n});case"SET_USER":return Object(I.a)(Object(I.a)({},e),{},{user:a.user});default:return e}};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{basket:[],user:null},reducer:x},c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b7993ffc.chunk.js.map