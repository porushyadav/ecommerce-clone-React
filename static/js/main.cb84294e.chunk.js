(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a.n(c),o=(a(40),a(8)),i=a(9),s=a(11),u=a(10),m=a(12),d=a(17),p=a(2),f=a(5),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.cart.cart;return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"left-div"},n.a.createElement("ul",null,n.a.createElement(d.b,{to:"/ecommerce-clone-React"},n.a.createElement("li",{className:"search-results-row"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/3081/3081559.svg",alt:"user-dp",className:"img-size-profile"}),n.a.createElement("span",null,n.a.createElement("h1",{style:{color:"white"}},"ECom")))))),n.a.createElement("div",{className:"search-container"},n.a.createElement("img",{className:"search-icon",src:"https://image.flaticon.com/icons/svg/483/483356.svg",alt:"search-icon"}),n.a.createElement("input",{placeholder:"Search"}),n.a.createElement("div",{className:"search-results"},n.a.createElement("ul",null,n.a.createElement("li",{className:"search-results-row"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"}),n.a.createElement("span",null,"John Doe")),n.a.createElement("li",{className:"search-results-row"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"}),n.a.createElement("span",null,"John Doe"))))),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"search-results-row"},n.a.createElement(d.b,{to:"/addProduct"},n.a.createElement("img",{src:"https://www.flaticon.com/premium-icon/icons/svg/3114/3114824.svg",alt:"user-dp",style:{height:"40px",width:"40px"}})),n.a.createElement(d.b,{to:"/addProduct"},n.a.createElement("span",null,n.a.createElement("h2",{style:{color:"white"}},"Add a Product")))))),n.a.createElement("div",{className:"right-nav"},n.a.createElement("div",{className:"nav-links"},n.a.createElement("ul",null,n.a.createElement("li",{className:"search-results-row card-count"},n.a.createElement(d.b,{to:"/checkout"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1170/1170678.svg",alt:"card",className:"img-size"}),n.a.createElement("div",{className:"count"},e.length))),n.a.createElement("li",{className:"search-results-row"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/3135/3135715.svg",alt:"user-dp",className:"img-size-profile"})))))))}}]),t}(r.Component);var h=Object(f.b)(function(e){return{cart:e.cart}})(g),v=a(19),E=a(20),y="FETCH_DATA",b="INCREASE_QTY",O="DECREASE_QTY",N="DELETE_PRODUCT",C="ADD_CART",S="REMOVE_CART",j="LOADING",k="ADD_PRODUCTS",P="SORT_DATA",A="Update_CART",D="EDIT_PRODUCT",w="UPDATE_PRODUCT";function I(){return function(e){if(e({type:j}),null===localStorage.getItem("products")){fetch("https://my-json-server.typicode.com/porushyadav/ecommerce-fake-data/products").then(function(e){return e.json()}).then(function(t){localStorage.setItem("products",JSON.stringify(t)),e(T(t))})}else e(T(JSON.parse(localStorage.getItem("products")))),null!==localStorage.getItem("card")&&e(function(){var e=JSON.parse(localStorage.getItem("card"));return{type:A,products:e}}())}}function T(e){return{type:y,products:e}}function U(e){return{type:b,product:e}}function x(e){return{type:O,product:e}}function R(e){return{type:N,product:e}}function J(e){if(null===localStorage.getItem("card")){var t=[];t.push(e),localStorage.setItem("card",JSON.stringify(t))}else{var a=[];(a=JSON.parse(localStorage.getItem("card"))).push(e),console.log(a),localStorage.setItem("card",JSON.stringify(a))}return console.log("sadsad"),{type:C,product:e}}function F(e){if(null!==localStorage.getItem("card")){var t=JSON.parse(localStorage.getItem("card")).filter(function(t){return t.key!==e.key});localStorage.setItem("card",JSON.stringify(t))}return{type:S,product:e}}var Q=a(14),q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).addDetails=function(t){t.preventDefault(),Object(Q.b)("Product added Successfully"),e.setState({key:Date.now()},function(){var t=e.state,a=t.name,r=t.description,n=t.price,c=t.rating,l=t.key,o=t.imgUrl,i=t.count;e.props.dispatch(function(e){var t=[];null!==localStorage.getItem("products")&&(t=JSON.parse(localStorage.getItem("products")));var a=[].concat(Object(E.a)(t),[e]);return localStorage.setItem("products",JSON.stringify(a)),{type:k,product:e}}({imgUrl:o,name:a,description:r,price:n,count:i,rating:c,key:l}))})},e.state={name:"",description:"",rating:"",imgUrl:"",count:0,key:Date.now(),price:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(v.a)({},e,t))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"AddToMiddle"},n.a.createElement("form",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Add a Product"),n.a.createElement("hr",null),n.a.createElement("label",{htmlFor:"Product-name"},n.a.createElement("b",null,"Product name")),n.a.createElement("input",{type:"text",placeholder:"Product name",id:"Product-name",onChange:function(t){e.handleChange("name",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"link-url"},n.a.createElement("b",null,"Url")),n.a.createElement("input",{type:"text",placeholder:"image-url",id:"link-url",onChange:function(t){e.handleChange("imgUrl",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"Price"},n.a.createElement("b",null,"Price")),n.a.createElement("input",{type:"text",placeholder:"Price of Product",id:"Price",onChange:function(t){e.handleChange("price",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"rating"},n.a.createElement("b",null,"Rating")),n.a.createElement("input",{type:"text",placeholder:"Rating on the scale of 5",id:"rating",onChange:function(t){e.handleChange("rating",t.target.value)},required:!0}),n.a.createElement("label",{className:"label",htmlFor:"Description"},n.a.createElement("b",null,"Description")),n.a.createElement("textarea",{type:"text",placeholder:"Description About the Product",id:"Description",onChange:function(t){e.handleChange("description",t.target.value)},required:!0}),n.a.createElement("hr",null),n.a.createElement("div",{className:"registerbtn"},n.a.createElement("button",{type:"submit",onClick:this.addDetails},n.a.createElement("h1",null,"Add"))))))}}]),t}(r.Component);var z=Object(f.b)(function(e){return{products:e.products}})(q),_=a(24),M=a.n(_);a(31);function V(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw c}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).increaseQty=function(e){e.count=e.count+1,a.props.dispatch(U(e))},a.decreaseQty=function(e){0!==e.count&&(e.count=e.count-1,a.props.dispatch(x(e)))},a.deleteProduct=function(e){Object(Q.b)("Product is Deleted"),a.props.dispatch(R(e))},a.addToCard=function(e){Object(Q.b)("Added to Cart"),a.increaseQty(e),a.props.dispatch(J(e))},a.removeFromCard=function(e){Object(Q.b)("Remove from Cart"),e.count=0,a.props.dispatch(x(e)),a.props.dispatch(F(e))},a.checkStatusOfProduct=function(e){var t,r=V(a.props.cart.cart);try{for(r.s();!(t=r.n()).done;){if(t.value.key==e.key)return!0}}catch(n){r.e(n)}finally{r.f()}return!1},a.sortData=function(){a.props.dispatch({type:P})},a.removesortData=function(){a.props.dispatch(I())},a.editProduct=function(e){Object(Q.b)("Update the Product"),a.props.dispatch(function(e){return localStorage.setItem("editProduct",JSON.stringify(e)),{type:D,product:e}}(e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(I())}},{key:"render",value:function(){var e=this,t=this.props.products,a=t.products,r=t.inProgress,c=t.isSorted;return n.a.createElement("div",null,c?n.a.createElement("div",{className:"sort-price",onClick:this.removesortData},"Remove"):n.a.createElement("div",{className:"sort-price",style:{backgroundColor:"blue"},onClick:this.sortData},"Sort By Price"),r&&n.a.createElement("div",{style:{fontSize:"40px"}},"Loading..."),n.a.createElement("div",{className:"outer"},a.map(function(t){return n.a.createElement("div",{className:"items",key:t.key},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{src:t.imgUrl,alt:"item-name"})),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"price"},n.a.createElement("div",{style:{fontSize:"30px"}},t.name),n.a.createElement("div",{style:{fontSize:"20px"}}," Rs:",t.price),n.a.createElement("br",null),n.a.createElement(M.a,{size:30,value:t.rating,edit:!1})),n.a.createElement("div",{className:"rating"},n.a.createElement("div",{className:"qty cursor"},"Qty: ",t.count),n.a.createElement("div",null,n.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.increaseQty(t)}},n.a.createElement("img",{className:"increase-decrease cursor",src:"https://image.flaticon.com/icons/svg/864/864378.svg",alt:"increase"})),n.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.decreaseQty(t)}},n.a.createElement("img",{className:"increase-decrease  ",src:"https://image.flaticon.com/icons/svg/864/864373.svg",alt:"decrease"})))))),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"product-description"},t.description),n.a.createElement("div",{className:"option-edit-delete"},n.a.createElement("div",null,e.checkStatusOfProduct(t)?n.a.createElement("button",{id:"button-color",onClick:function(){e.removeFromCard(t)}},"Remove From Card"):n.a.createElement("button",{className:"button",onClick:function(){e.addToCard(t)}},"Add to Cart")),n.a.createElement("div",{style:{cursor:"pointer"}},n.a.createElement(d.b,{to:"/editProduct",product:e.product},n.a.createElement("img",{className:"increase-decrease ",src:"https://image.flaticon.com/icons/svg/481/481874.svg",alt:"edit",onClick:function(){e.editProduct(t)}})),n.a.createElement("img",{className:"increase-decrease cursor",src:"https://image.flaticon.com/icons/svg/1632/1632602.svg",alt:"delete",onClick:function(){e.deleteProduct(t)}})))))})))}}]),t}(r.Component);var H=Object(f.b)(function(e){return{products:e.products,cart:e.cart}})(B);function Y(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw c}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).increaseQty=function(e){e.count=e.count+1,a.props.dispatch(U(e))},a.decreaseQty=function(e){0!==e.count&&(e.count=e.count-1,a.props.dispatch(x(e)))},a.deleteProduct=function(e){a.props.dispatch(R(e))},a.addToCard=function(e){a.increaseQty(e),a.props.dispatch(J(e))},a.removeFromCard=function(e){e.count=0,a.props.dispatch(x(e)),a.props.dispatch(F(e))},a.checkStatusOfProduct=function(e){return-1!==a.props.cart.cart.indexOf(e)},a.checkTotal=function(){var e,t=0,r=Y(a.props.cart.cart);try{for(r.s();!(e=r.n()).done;){var n=e.value;t+=n.count*n.price}}catch(c){r.e(c)}finally{r.f()}return console.log(t),t},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cart.cart;return n.a.createElement("div",null,n.a.createElement("div",{className:"outer"},n.a.createElement("div",null,n.a.createElement("div",{style:{fontSize:"50px"}},"CHECKOUT"),n.a.createElement("div",{style:{fontSize:"50px"}},"Total Price ",this.checkTotal())),t.map(function(t){return n.a.createElement("div",{className:"items"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{src:t.imgUrl,alt:"item-name"})),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"price"},n.a.createElement("div",{style:{fontSize:"30px"}},t.name),n.a.createElement("div",{style:{fontSize:"20px"}}," Rs:",t.price),n.a.createElement("br",null),n.a.createElement(M.a,{size:30,value:t.rating,edit:!1})),n.a.createElement("div",{className:"rating"},n.a.createElement("div",{className:"qty cursor"},"Qty: ",t.count),n.a.createElement("div",null,n.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.increaseQty(t)}},n.a.createElement("img",{className:"increase-decrease cursor",src:"https://image.flaticon.com/icons/svg/864/864378.svg",alt:"increase"})),n.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.decreaseQty(t)}},n.a.createElement("img",{className:"increase-decrease  ",src:"https://image.flaticon.com/icons/svg/864/864373.svg",alt:"decrease"})))))),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"product-description"},t.description),n.a.createElement("div",{className:"option-edit-delete"},n.a.createElement("div",null,e.checkStatusOfProduct(t)?n.a.createElement("button",{id:"button-color",onClick:function(){e.removeFromCard(t)}},"Remove From Card"):n.a.createElement("button",{className:"button",onClick:function(){e.addToCard(t)}},"Add to Cart")),n.a.createElement("div",{className:"cursor"},n.a.createElement("img",{className:"increase-decrease ",src:"https://image.flaticon.com/icons/svg/481/481874.svg",alt:"edit"}),n.a.createElement("img",{className:"increase-decrease cursor",src:"https://image.flaticon.com/icons/svg/1632/1632602.svg",alt:"delete",onClick:function(){e.deleteProduct(t)}})))))})))}}]),t}(r.Component);var K=Object(f.b)(function(e){return{products:e.products,cart:e.cart}})(G),W=function(e){function t(){var e;Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).updateProduct=function(t){t.preventDefault(),Object(Q.b)("Product Updated Successfully");var a=e.state,r=a.name,n=a.description,c=a.price,l=a.rating,o=a.key,i=a.imgUrl,s=a.count;console.log("dsfds"),e.props.dispatch(function(e){var t=JSON.parse(localStorage.getItem("products")).filter(function(t){return t.key!==e.key});return t.push(e),console.log(t),localStorage.setItem("products",JSON.stringify(t)),{type:w,product:e}}({imgUrl:i,name:r,description:n,price:c,count:s,rating:l,key:o}))};var a=JSON.parse(localStorage.getItem("editProduct"));return e.state={name:a.name,description:a.description,rating:a.rating,imgUrl:a.imgUrl,count:0,key:a.key,price:a.price},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(v.a)({},e,t))}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("editProduct"));return n.a.createElement("div",{className:"AddToMiddle"},n.a.createElement("form",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Update the Product"),n.a.createElement("hr",null),n.a.createElement("label",{htmlFor:"Product-name"},n.a.createElement("b",null,"Product name")),n.a.createElement("input",{type:"text",placeholder:"Product name",id:"Product-name",defaultValue:t.name,onChange:function(t){e.handleChange("name",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"link-url"},n.a.createElement("b",null,"Url")),n.a.createElement("input",{type:"text",placeholder:"image-url",id:"link-url",defaultValue:t.imgUrl,onChange:function(t){e.handleChange("imgUrl",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"Price"},n.a.createElement("b",null,"Price")),n.a.createElement("input",{type:"text",placeholder:"Price of Product",id:"Price",defaultValue:t.price,onChange:function(t){e.handleChange("price",t.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"rating"},n.a.createElement("b",null,"Rating")),n.a.createElement("input",{type:"text",placeholder:"Rating on the scale of 5",id:"rating",defaultValue:t.rating,onChange:function(t){e.handleChange("rating",t.target.value)},required:!0}),n.a.createElement("label",{className:"label",htmlFor:"Description"},n.a.createElement("b",null,"Description")),n.a.createElement("textarea",{type:"text",placeholder:"Description About the Product",id:"Description",defaultValue:t.description,onChange:function(t){e.handleChange("description",t.target.value)},required:!0}),n.a.createElement("hr",null),n.a.createElement("div",{className:"registerbtn"},n.a.createElement("button",{type:"submit",onClick:this.updateProduct},n.a.createElement("h1",null,"Update"))))))}}]),t}(r.Component);var X=Object(f.b)(function(e){return{products:e.products}})(W),Z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(Q.a,{autoClose:1500}),n.a.createElement(h,null),n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/ecommerce-clone-React",exact:!0,component:H}),n.a.createElement(p.a,{path:"/AddProduct",component:z}),n.a.createElement(p.a,{path:"/checkout",component:K}),n.a.createElement(p.a,{path:"/editProduct",component:X}))))}}]),t}(r.Component);var ee=Object(f.b)(function(e){return{products:e.products}})(Z),te=a(18),ae=a(33),re=a.n(ae),ne=a(34),ce=a(6),le={products:[],editproduct:{},inProgress:!1,isSorted:!1};function oe(e,t){return e.price-t.price}var ie={cart:[]},se=Object(te.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(ce.a)({},e,{products:t.products,inProgress:!1,isSorted:!1});case b:case O:return Object(ce.a)({},e,{inProgress:!1});case N:var a=e.products.filter(function(e){return e.key!==t.product.key});return Object(ce.a)({},e,{products:a,inProgress:!1});case j:return Object(ce.a)({},e,{inProgress:!0});case k:return Object(ce.a)({},e,{products:[].concat(Object(E.a)(e.products),[t.product])});case P:var r=e.products;return r.sort(oe),Object(ce.a)({},e,{products:r,isSorted:!0});case D:return Object(ce.a)({},e,{editproduct:t.product});case w:var n=e.products.filter(function(e){return e.key!==t.product.key});return Object(ce.a)({},e,{products:n,editproduct:{}});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(ce.a)({},e,{cart:[].concat(Object(E.a)(e.cart),[t.product]),inProgress:!1});case S:var a=e.cart.filter(function(e){return e.key!==t.product.key});return Object(ce.a)({},e,{cart:a,inProgress:!1});case A:return Object(ce.a)({},e,{cart:t.products});default:return e}}});var ue=Object(te.d)(se,Object(te.a)(re.a,ne.a));console.log(ue),l.a.render(n.a.createElement(f.a,{store:ue},n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cb84294e.chunk.js.map