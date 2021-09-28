(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),s=(n(32),n(33),n(14)),i=n(4),l=n.n(i),u=n(7),h=n(5),b=n(1);var j=function(e){var t=e.onSubmit;return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.elements.searchValue.value)},className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",name:"searchValue",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var d=function(e){var t=e.item,n=e.onClick;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{"data-large":t.largeImageURL,onClick:n,src:t.webformatURL,alt:"",className:"ImageGalleryItem-image"})})};var m=function(e){var t=e.gallery,n=e.onClick;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)(d,{onClick:n,item:e},e.id)}))})};var p=function(e){var t=e.onClick,n=e.children;return Object(b.jsx)("button",{className:"Button",onClick:t,children:n})},f=n(23),O=n(24),v=n(27),g=n(26),x=document.querySelector("#modal-root"),y=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(b.jsx)("div",{onClick:this.handleOverlayClick,className:"Overlay",children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),x)}}]),n}(a.Component),k=n(10),w=n.n(k);w.a.defaults.baseURL="https://pixabay.com/api/",w.a.defaults.params={image_type:"photo",key:"22496813-a3fbe39786787c712b168fbe4"};var C=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("",{params:{page:n,q:t}});case 2:return a=e.sent,r=a.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=n(11),N=n(25),F=n.n(N);var E=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(h.a)(c,2),i=o[0],d=o[1],f=Object(a.useState)(1),O=Object(h.a)(f,2),v=O[0],g=O[1],x=Object(a.useState)(!1),k=Object(h.a)(x,2),w=k[0],N=k[1],E=Object(a.useState)("idle"),I=Object(h.a)(E,2),L=I[0],D=I[1],U=Object(a.useState)(""),q=Object(h.a)(U,2),B=q[0],G=q[1];Object(a.useEffect)((function(){n&&Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D("pending"),G(""),e.next=5,C(n);case 5:0===(t=e.sent).length&&S.b.error("Try another keyword. No matches",{autoClose:3e3}),D("resolved"),d(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[n]),Object(a.useEffect)((function(){n&&Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D("pending"),G(""),e.next=5,C(n);case 5:0===(t=e.sent).length&&S.b.error("Sorry, there are no images matching your search query. Please try again.",{autoClose:3e3}),D("resolved"),d(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[n]);var K=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g((function(e){return e+1})),e.next=3,C(n,v+1);case 3:t=e.sent,d((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if("pending"===L)return Object(b.jsx)("div",{className:"Container",children:Object(b.jsx)(F.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e4})});var M=i.length>1;return Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsx)(j,{onSubmit:function(e){d([]),r(e),g(1)}}),Object(b.jsx)(m,{onClick:function(e){N(!0),G(e.target.dataset.large)},gallery:i}),M&&Object(b.jsx)(p,{onClick:K,children:"Load more"}),w&&Object(b.jsx)(y,{src:B,onClose:function(){N(!1)},children:Object(b.jsx)("div",{style:{width:900},children:Object(b.jsx)("img",{src:B,alt:""})})}),Object(b.jsx)(S.a,{})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.f83b78eb.chunk.js.map