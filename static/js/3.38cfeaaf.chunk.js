/*! For license information please see 3.38cfeaaf.chunk.js.LICENSE.txt */
(this.webpackJsonpless1_game_tic_toc=this.webpackJsonpless1_game_tic_toc||[]).push([[3],{310:function(e,t,r){e.exports={users_box:"Users_users_box__3rgrt"}},311:function(e,t,r){e.exports={paginator:"Paginator_paginator__3Qv9f",pageNumber:"Paginator_pageNumber__2Jj8E",selectedPage:"Paginator_selectedPage__31Tdn"}},312:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===a)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},313:function(e,t,r){e.exports={user_box_img:"User_user_box_img__1vBUt",user_box:"User_user_box__3OQEF",user_box_info:"User_user_box_info__3ETfA",user_box_name:"User_user_box_name__nA538",user_box_status:"User_user_box_status__3Spo9",user_box_followed_false:"User_user_box_followed_false__plaqm",user_box_followed_true:"User_user_box_followed_true__usS77",user_box_followed:"User_user_box_followed__2M6Gc"}},314:function(e,t,r){"use strict";r.r(t);var n=r(12),o=r(13),a=r(15),s=r(14),u=r(16),l=r(0),i=r.n(l),c=r(10),f=r(310),_=r.n(f),p=r(80),g=r(42),m=r(311),b=r.n(m),h=r(312),v=r.n(h),d=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),r=[],n=1;n<=t;n++)r.push(n);var o=Math.ceil(t/10),a=Object(l.useState)(1),s=Object(g.a)(a,2),u=s[0],c=s[1],f=10*(u-1)+1,_=10*u;return i.a.createElement("div",{className:b.a.paginator},u>1&&i.a.createElement("button",{onClick:function(){c(u-1)}},"\xab prev"),r.filter((function(e){return e>=f&&e<=_})).map((function(t){return i.a.createElement("span",{className:v()(Object(p.a)({},b.a.selectedPage,e.currentPage===t),b.a.pageNumber),key:t,onClick:function(r){e.onPageChanged(t)}},t)})),o>u&&i.a.createElement("button",{onClick:function(){c(u+1)}},"next \xbb"))},w=r(18),x=r(313),P=r.n(x),E=r(146),y=r.n(E),C=function(e){var t=e.user;return i.a.createElement("div",{className:P.a.user_box},i.a.createElement("div",{className:P.a.user_box_info},i.a.createElement(w.b,{className:P.a.user_box_img,to:"/profile/"+t.id},i.a.createElement("img",{src:null!=t.avatar?t.avatar:y.a,alt:""}),i.a.createElement("p",null,"view profile")),i.a.createElement("div",null,i.a.createElement("div",{className:P.a.user_box_name},t.name),i.a.createElement("div",{className:P.a.user_box_status},t.status))),i.a.createElement("div",null,i.a.createElement("div",{className:P.a.user_box_followed},t.followed?i.a.createElement("button",{className:P.a.user_box_followed_true,onClick:function(){e.unfollow(t.id)}},"Unfollow"):i.a.createElement("button",{className:P.a.user_box_followed_false,onClick:function(){e.follow(t.id)}},"Follow"))))},U=function(e){return i.a.createElement("div",{className:_.a.users_box},i.a.createElement(d,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return i.a.createElement(C,{key:t.id,user:t,follow:e.follow,unfollow:e.unfollow})})))},j=r(65),k=r(40),N=r(8),O=r(83);function S(e,t){return e===t}function F(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}function z(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}var A=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=0,s=n.pop(),u=z(n),l=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(r)),i=e((function(){for(var e=[],t=u.length,r=0;r<t;r++)e.push(u[r].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return a},i.resetRecomputations=function(){return a=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,r=null,n=null;return function(){return F(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));var T=A([function(e){return e.users.users}],(function(e){return e.filter((function(e){return!0}))})),M=function(e){return e.users.pageSize},I=function(e){return e.users.totalUsersCount},J=function(e){return e.users.currentPage},Q=function(e){return e.users.isFetching},q=function(e){return e.users.followingInProgress},B=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return(r=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).onPageChanged=function(e){var t=r.props.pageSize;r.props.getUsersOnChange(t,e)},r}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageSize,r=e.currentPage;this.props.getUsersThunkCreator(t,r)}},{key:"render",value:function(){return i.a.createElement(l.Fragment,null,i.a.createElement(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress}),this.props.isFetching?i.a.createElement(k.a,null):null)}}]),t}(i.a.Component);t.default=Object(N.d)(O.a,Object(c.b)((function(e){return{users:T(e),pageSize:M(e),totalUsersCount:I(e),currentPage:J(e),isFetching:Q(e),followingInProgress:q(e)}}),{follow:j.b,unfollow:j.k,setUsers:j.h,setCurrentPage:j.f,setTotalCount:j.g,toggleIsFetching:j.j,toggleFollowingProgress:j.i,getUsersThunkCreator:j.e,getUsersOnChange:j.d}))(B)}}]);
//# sourceMappingURL=3.38cfeaaf.chunk.js.map