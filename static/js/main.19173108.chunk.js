(this.webpackJsonpunspash=this.webpackJsonpunspash||[]).push([[0],{38:function(e,t,a){e.exports=a(75)},63:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(4),i=a(5),l=a(7),u=a(6),m=a(8),h=a(14),p=a.n(h),d=a(19),g=a(17);function b(e,t){return function(a){function n(e){var a;return Object(s.a)(this,n),(a=Object(l.a)(this,Object(u.a)(n).call(this,e))).populate=function(){document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+1&&(a.setState({fething:!0}),a.nextImages())},a.nextImages=function(){a.state.hasMore&&a.setState((function(e){var t=Object.assign(e);return t.currentPage++,t}),(function(){a.getData(a.state.currentPage,Object(g.a)(a),a.props.match.params.queryString)}))},a.getData=t,a.populate=a.populate.bind(Object(g.a)(a)),a.state={images:[],currentPage:1,hasMore:!0},a}return Object(m.a)(n,a),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.match.params.queryString!==this.props.match.params.queryString&&(this.setImages([]),this.getData(this.state.currentPage,this,this.props.match.params.queryString))}},{key:"setImages",value:function(e){this.setState({images:e})}},{key:"componentDidMount",value:function(){this.getData(this.state.currentPage,this,this.props.match.params.queryString),window.addEventListener("scroll",this.populate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.populate)}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,{images:this.state.images}))}}]),n}(r.a.Component)}var f=a(22),v=a.n(f),E=a(15);v.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("Logging the error",e),E.b.error("Something went wrong")),Promise.reject(e)}));var k=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v.a.get(e,{headers:t})}}]),e}(),j=function(e){return(new k).get("https://api.unsplash.com/photos?page=".concat(e),{Authorization:"Client-ID ".concat("1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8")})},O=function(e,t){return(new k).get("https://api.unsplash.com/search/photos?page=".concat(t,"&query=").concat(e.toLowerCase()),{Authorization:"Client-ID ".concat("1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8")})},_=function(e){return(new k).get("https://api.unsplash.com/photos/".concat(e),{Authorization:"Client-ID ".concat("1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8")})},y={dark:!1,toggleTheme:function(){}},N=r.a.createContext(y),w=a(16),x=a(37),C=a(13),S=(a(63),Object(w.g)((function(e){var t=e.location,a=e.history,c=e.match,o=Object(n.useState)({photo:null,isFetching:!0}),s=Object(x.a)(o,2),i=s[0],l=s[1],u=t.state,m=(void 0===u?{}:u).background,h=i.photo;document.title=h?"".concat(h.data.alt_description):"Photo";var g=function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l({photo:null,isFetching:!0}),e.next=4,_(c.params.id);case 4:t=e.sent,l({photo:t,isFetching:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),E.b.error("Something went wrong"+"".concat(e.t0.id));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),Object(n.useEffect)((function(){if(m){var e=document.getElementsByTagName("body");return e[0].classList.add("modal-opened"),function(){return e[0].classList.remove("modal-opened")}}})),i.isFetching?r.a.createElement("div",{className:m?"photo-page modal":"photo-page"}):r.a.createElement("div",{className:m?"photo-page modal":"photo-page"},r.a.createElement("div",{className:"photo-page__main"},r.a.createElement("div",{className:"photo-page__header"},r.a.createElement("div",{className:"photo-page__header-credentials"},r.a.createElement("p",{className:"photo-page__header-name"},h.data.user.name),h.data.user.instagram_username&&r.a.createElement("p",{className:"photo-page__header-instagram"},"@",h.data.user.instagram_username)),m&&r.a.createElement("i",{className:"fas fa-times photo-page__header-back-button",onClick:function(){return a.goBack()}})),r.a.createElement("div",{className:"photo-page__main-image"},r.a.createElement("img",{src:"".concat(i.photo.data.urls.regular)})),r.a.createElement("div",{className:"photo-page__main-other"},r.a.createElement("p",{className:"photo-page__main-other-description"},i.photo.data.description),h.data.related_collections.results.length>0&&r.a.createElement("div",{className:"photo-page__main-other-collections"},r.a.createElement("p",null,"Featured in: "),r.a.createElement("ul",{className:"photo-page__main-other-collections-list"},h.data.related_collections.results.map((function(e){return r.a.createElement("li",{key:e.id,className:"photo-page__main-other-collections-list-element"},r.a.createElement(C.b,{to:""},r.a.createElement("div",{className:"photo-page__main-other-collections-list-element-images"},e.preview_photos.slice(1).map((function(e){return r.a.createElement("img",{key:e.id,src:"".concat(e.urls.small)})})))))})))))))}))),T=(a(67),r.a.lazy((function(){return a.e(3).then(a.bind(null,79))}))),D=Object(w.g)((function(e){var t=e.images,a=void 0===t?[]:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Consumer,null,(function(e){var t=e.darkTheme;return r.a.createElement("div",{className:t?"grid dark":"grid"},a.map((function(e){return r.a.createElement(r.a.Suspense,{key:e.id,fallback:r.a.createElement("div",null,"LOADING")},r.a.createElement(T,{key:e.id,image:e}))})))})))})),F=(a(68),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.currentTarget.value;a.setState({searchValue:t})},a.state={isFocus:!1,searchValue:""},a.submitForm=a.submitForm.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.state.searchValue&&this.props.history.push("/search/".concat(this.state.searchValue))}},{key:"render",value:function(){return r.a.createElement("form",{className:"search-form",onSubmit:this.submitForm},r.a.createElement("button",{className:"search-form__button"},"S"),r.a.createElement("input",{onChange:this.onChange,value:this.state.searchValue,type:"text",placeholder:"Search...",className:"search-form__input"}))}}]),t}(n.Component)),I=Object(w.g)(F),A=function(e){return function(t){return Array.from(t.reduce((function(t,a){return a&&a[e]&&t.set(a[e],a),t}),new Map).values())}};a(69);function q(){return(q=Object(d.a)(p.a.mark((function e(t,a){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:if((n=e.sent).data.length){e.next=6;break}return e.abrupt("return",a.setState({hasMore:!1}));case 6:r=a.state.images.concat(n.data),c=A("id")(r),a.setImages(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),E.b.info("No more photos on main page:)");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var M=b(function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Home"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("div",{className:"home__page-header"},r.a.createElement("h1",null,"Not Unsplash"),r.a.createElement("div",{className:"home__page-header-input-wrapper"},r.a.createElement(I,null)))),r.a.createElement("section",null,r.a.createElement(D,{images:this.props.images})))}}]),t}(n.Component),(function(e,t){return q.apply(this,arguments)})),P=(a(70),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getClass=function(){return a.context.darkTheme?"theme-toggle-button dark":"theme-toggle-button"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=this.context.darkTheme,a=this.context.toggleTheme;return r.a.createElement("div",{className:"theme-switch-wrapper"},r.a.createElement("label",{className:"theme-switch",htmlFor:"checkbox"},r.a.createElement("input",Object.assign({},e,{className:"".concat(this.getClass()),type:"checkbox",id:"checkbox",checked:t,onChange:a})),r.a.createElement("div",{className:"slider round"})))}}]),t}(r.a.Component));P.contextType=N;var L=P,B=(a(71),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.getClass=function(){return a.context.darkTheme?"nav dark":"nav"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.onSearch;return r.a.createElement("nav",{className:"".concat(this.getClass())},r.a.createElement("div",{className:"nav__content"},r.a.createElement("div",{className:"nav__search-form"},r.a.createElement(I,{onSearch:e})),r.a.createElement("ul",{className:"nav__links"},r.a.createElement("li",{className:"nav__links-link"},r.a.createElement(C.c,{exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav__links-link"},r.a.createElement(C.c,{to:"/about"},"About"))),r.a.createElement(L,null)))}}]),t}(n.Component));B.contextType=N;var V=b(function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="".concat(this.props.match.params.queryString)}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(D,{images:this.props.images}))}}]),t}(n.Component),function(){var e=Object(d.a)(p.a.mark((function e(t,a,n){var r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(n,t);case 3:if((r=e.sent).data.results.length){e.next=6;break}return e.abrupt("return",a.setState({hasMore:!1}));case 6:c=a.state.images.concat(r.data.results),o=A("id")(c),a.setImages(o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,n){return e.apply(this,arguments)}}()),z=function(){return Object(n.useEffect)((function(){document.title="About"})),r.a.createElement("div",null,"About")},H=(a(72),a(73),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleTheme=function(){a.setState((function(e){return{darkTheme:!e.darkTheme}}))},a.state={darkTheme:y.dark,toggleTheme:a.toggleTheme},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.state&&this.props.location.state.background;return r.a.createElement(N.Provider,{value:this.state},r.a.createElement("div",{className:this.state.darkTheme?"app dark":"app"},r.a.createElement(E.a,null),r.a.createElement(B,null),r.a.createElement(w.d,{location:e||this.props.location},r.a.createElement(w.b,{exact:!0,path:"/",component:M}),r.a.createElement(w.b,{path:"/search/:queryString",component:V}),r.a.createElement(w.b,{path:"/about",component:z}),r.a.createElement(w.b,{path:"/photo/:id",component:S}),">",r.a.createElement(w.b,{path:"/404",component:function(){return r.a.createElement("h1",null,"Not found")}}),r.a.createElement(w.a,{to:"/404"})),this.props.location.state?r.a.createElement(w.b,{path:"/photo/:id",component:S}):null))}}]),t}(n.Component)),U=Object(w.g)(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);o.a.render(r.a.createElement(C.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.19173108.chunk.js.map