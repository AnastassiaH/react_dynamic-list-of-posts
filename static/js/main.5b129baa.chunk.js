(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n.n(c),a=n(2),i=n(1),o=(n(15),n(16),n(17),n(4)),r=n.n(o),l=n(0),d=function(e){var t=e.posts,n=e.setSelectedPost,c=e.selectedPost,s=e.setIsNewCommentForm,a=e.setIsCommentsError;return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button","is-link",{"is-light":(null===c||void 0===c?void 0:c.id)!==e.id}),onClick:function(){return function(e){a(!1),s(!1),n((function(){return(null===c||void 0===c?void 0:c.id)===e.id?null:e}))}(e)},children:(null===c||void 0===c?void 0:c.id)===e.id?"Close":"Open"})})]},e.id)}))})]})]})},m=n(10),j="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(j+e,c)})).then((function(e){return e.json()}))}var h=function(e){return b(e)},O=function(e,t){return b(e,"POST",t)},f=function(e){return b(e,"DELETE")},x=function(e){return e.map((function(e){return{id:e.id,postId:e.postId,name:e.name,email:e.email,body:e.body}}))},p=(n(19),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),N=function(e){var t=e.comments,n=e.setComments,c=e.setIsCommentsError,s=function(e){var s;n(t.filter((function(t){return t.id!==e}))),(s=e,f("/comments/".concat(s))).catch((function(){c(!0)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(l.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return s(e.id)}})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]})},v=function(e){var t=e.selectedPost,n=e.setIsNewCommentForm,c=e.newComment,s=e.setNewComment,o=e.setIsCommentsError,r=t.id,d=t.title,j=t.body,u=Object(i.useState)(),b=Object(a.a)(u,2),O=b[0],f=b[1],v=Object(i.useState)(!0),y=Object(a.a)(v,2),C=y[0],g=y[1];return Object(i.useEffect)((function(){var e;t&&(f(void 0),g(!0),(e=t.id,h("/comments?postId=".concat(e))).then((function(e){f(x(e))})).catch((function(){o(!0)})).finally((function(){g((function(){return!1}))})))}),[t]),Object(i.useEffect)((function(){c&&(f(O?[].concat(Object(m.a)(O),[c]):[c]),s(null))}),[c]),Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(r," ").concat(d)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:j})]}),Object(l.jsxs)("div",{className:"block",children:[C&&Object(l.jsx)(p,{}),!C&&O&&Object(l.jsxs)(l.Fragment,{children:[O.length?Object(l.jsx)(N,{comments:O,setComments:f,setIsCommentsError:o}):Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),Object(l.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return n(!0)},children:"Write a comment"})]})]})]})})},y=function(e){var t=e.user,n=e.setUser,c=e.users,s=e.setIsPostsLoading,o=Object(i.useState)(!1),r=Object(a.a)(o,2),d=r[0],m=r[1];return Object(l.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return m((function(e){return!e}))},children:[Object(l.jsx)("span",{children:(null===t||void 0===t?void 0:t.name)||"Choose a user"}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),d&&Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",children:c.map((function(e){return Object(l.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){return function(e){s(!0),n(e),m(!1)}(e)},children:e.name},e.id)}))})})]})},C=function(e){var t=e.isImportant,n=e.title,c=void 0===n?"Something went wrong":n,s=e.dataCy;return Object(l.jsx)("div",{className:r()("notification",{"is-danger":t,"is-warning":!t}),"data-cy":s,children:c})},g=n(7),w=n(3),S=[{name:"name",label:"Author Name",id:"comment-author-name",placeholder:"Name Surname",icon:"fa-user"},{name:"email",label:"Author Email",id:"comment-author-email",placeholder:"email@test.com",icon:"fa-envelope"},{name:"body",label:"Comment Text",id:"comment-body",placeholder:"Type comment here",icon:""}],I=function(e){var t=e.selectedPost,n=e.setNewComment,c=e.setIsCommentsError,s={name:"",email:"",body:""},o={name:!1,email:!1,body:!1},r=Object(i.useState)(s),d=Object(a.a)(r,2),m=d[0],j=d[1],u=Object(i.useState)(o),b=Object(a.a)(u,2),h=b[0],f=b[1],p=Object(i.useState)(!1),N=Object(a.a)(p,2),v=N[0],y=N[1],C=Object(i.useCallback)((function(e){h[e]=!0,f((function(e){return Object(w.a)(Object(w.a)({},e),h)}))}),[m]),I=Object(i.useCallback)((function(){for(var e=0,t=Object.entries(m);e<t.length;e++){var n=Object(a.a)(t[e],2),c=n[0];n[1].length||C(c.toString())}}),[m]),P=function(e){var t=e.value,n=e.name;f(Object(w.a)({},o)),j((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(g.a)({},n,t))}))};return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){var s;e.preventDefault(),I(),c(!1),Object.values(m).some((function(e){return!e}))||(y(!0),(s=Object(w.a)({postId:t.id},m),O("/comments",s)).then((function(e){j((function(e){return Object(w.a)(Object(w.a)({},e),{},{body:""})})),n(x([e])[0])})).catch((function(){c(!0)})).finally((function(){y(!1),f(Object(w.a)({},o))})))},children:[S.map((function(e){return Object(l.jsxs)("div",{className:"field","data-cy":"".concat(e.name.charAt(0).toLocaleUpperCase()+e.name.slice(1),"Field"),children:[Object(l.jsx)("label",{className:"label",htmlFor:e.id,children:e.label}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:["body"!==e.name?Object(l.jsx)("input",{type:"text",name:e.name,id:e.id,placeholder:e.placeholder,className:"input".concat(h[e.name]?" is-danger":""),value:m[e.name],onChange:function(e){return P(e.target)}}):Object(l.jsx)("textarea",{name:e.name,id:e.id,placeholder:e.placeholder,className:"textarea".concat(h[e.name]?" is-danger":""),value:m[e.name],onChange:function(e){return P(e.target)}}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas ".concat(e.icon)})}),h[e.name]&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h[e.name]&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"".concat(e.name.charAt(0).toUpperCase()+e.name.slice(1)," is required")})]},e.name)})),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-link".concat(v?" is-loading":""),children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){f(Object(w.a)({},o)),j(s)},children:"Clear"})})]})]})},P=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(null),o=Object(a.a)(s,2),m=o[0],j=o[1],u=Object(i.useState)(!1),b=Object(a.a)(u,2),O=b[0],f=b[1],x=Object(i.useState)(),N=Object(a.a)(x,2),g=N[0],w=N[1],S=Object(i.useState)(null),P=Object(a.a)(S,2),E=P[0],k=P[1],F=Object(i.useState)(!1),T=Object(a.a)(F,2),L=T[0],U=T[1],A=Object(i.useState)(null),B=Object(a.a)(A,2),D=B[0],_=B[1],J=Object(i.useState)(!1),M=Object(a.a)(J,2),W=M[0],q=M[1],G=Object(i.useState)(!1),Y=Object(a.a)(G,2),z=Y[0],H=Y[1];return Object(i.useEffect)((function(){h("/users").then((function(e){c(function(e){return e.map((function(e){return{id:e.id,name:e.name,email:e.email,phone:e.phone}}))}(e))}))}),[]),Object(i.useEffect)((function(){var e;m&&(e=m.id,h("/posts?userId=".concat(e))).then((function(e){w(function(e){return e.map((function(e){return{id:e.id,userId:e.userId,title:e.title,body:e.body}}))}(e))})).catch((function(){q(!0)})).finally((function(){f(!1)}))}),[m]),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(y,{user:m,setUser:j,users:n,setIsPostsLoading:f})}),Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[O&&Object(l.jsx)(p,{}),!m&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),!O&&m&&Object(l.jsx)(l.Fragment,{children:g?Object(l.jsx)(d,{posts:g,selectedPost:E,setSelectedPost:k,setIsNewCommentForm:U,setIsCommentsError:H}):Object(l.jsx)(C,{title:"No posts yet",dataCy:"NoPostsYet",isImportant:!1})})]})]})}),E&&Object(l.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":E}),children:Object(l.jsxs)("div",{className:"tile is-child box is-success ",children:[Object(l.jsx)(v,{selectedPost:E,setIsNewCommentForm:U,newComment:D,setNewComment:_,setIsCommentsError:H}),L&&Object(l.jsx)(I,{selectedPost:E,setNewComment:_,setIsCommentsError:H}),(W||z)&&Object(l.jsx)(C,{isImportant:!0,dataCy:W?"PostsLoadingError":"CommentsError",title:"Something went wrong"})]})})]})})})};s.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5b129baa.chunk.js.map