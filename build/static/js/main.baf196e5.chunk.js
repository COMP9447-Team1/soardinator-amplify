(this["webpackJsonpremediation-frontend"]=this["webpackJsonpremediation-frontend"]||[]).push([[1],{172:function(e,t,n){},173:function(e,t,n){},179:function(e,t,n){var i={"./amplify-amazon-button_5.entry.js":[239,6],"./amplify-auth-fields_9.entry.js":[240,16],"./amplify-authenticator.entry.js":[241,0,24],"./amplify-button_3.entry.js":[242,7],"./amplify-chatbot.entry.js":[243,5],"./amplify-checkbox.entry.js":[244,25],"./amplify-confirm-sign-in_7.entry.js":[245,0,26],"./amplify-container.entry.js":[246,27],"./amplify-federated-buttons_2.entry.js":[247,8],"./amplify-federated-sign-in.entry.js":[248,20],"./amplify-form-field_4.entry.js":[249,28],"./amplify-greetings.entry.js":[250,9],"./amplify-icon-button.entry.js":[251,29],"./amplify-icon.entry.js":[252,21],"./amplify-link.entry.js":[253,30],"./amplify-nav_2.entry.js":[254,10],"./amplify-photo-picker.entry.js":[255,18],"./amplify-picker.entry.js":[256,19],"./amplify-radio-button_2.entry.js":[257,0,31],"./amplify-s3-album.entry.js":[258,11],"./amplify-s3-image-picker.entry.js":[259,12],"./amplify-s3-image.entry.js":[260,17],"./amplify-s3-text-picker.entry.js":[261,13],"./amplify-s3-text.entry.js":[262,14],"./amplify-select-mfa-type.entry.js":[263,15],"./amplify-sign-in-button.entry.js":[264,22],"./amplify-toast.entry.js":[265,32],"./amplify-tooltip.entry.js":[266,33]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=179,e.exports=a},230:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(15),c=n.n(r),s=(n(172),n(173),n(151)),o=n(14),l=n(92),j=n(311),d=n(313),u=n(314),f=n(96),m=n(310),p=n(139),b=n.n(p),y=n(322),O=n(315),h=n(316),x=n(317),_=n(324),g=n(6),v=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,letterSpacing:15,fontSize:"2em"},menu:{width:250,color:e.palette.primary.main}}}));function S(){var e=v(),t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(j.a,{position:"static",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return r(!0)},children:Object(g.jsx)(b.a,{})}),Object(g.jsx)(f.a,{variant:"h6",className:e.title,children:"SOARDINATOR 3000"}),Object(g.jsx)(_.b,{children:"Logout"})]})}),Object(g.jsx)(y.a,{anchor:"left",open:a,onClose:function(){return r(!1)},children:Object(g.jsx)("div",{className:e.menu,role:"presentation",onClick:function(){return r(!1)},onKeyDown:function(){return r(!1)},children:Object(g.jsx)(O.a,{children:["Remediations","Notification Channels","Upload Template","Exceptions"].map((function(e,t){return Object(g.jsx)(h.a,{button:!0,children:Object(g.jsx)(x.a,{primary:e})},e)}))})})})]})}var w=n(51),T=n(318),C=n(323),E=n(141),N=n.n(E),P=n(140),k=n.n(P),A=Object(m.a)((function(e){return{text:{color:"#3f51b5",width:"95%"}}}));function L(e){var t=e.id,n=e.updateList;return Object(g.jsx)(u.a,{color:"primary",onClick:function(){fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/delete",{method:"POST",mode:"cors",body:JSON.stringify({id:t})}).catch((function(e){return console.log(e)})),n(t)},children:Object(g.jsx)(k.a,{})})}function R(e){var t=e.id,n=e.updateList;return Object(g.jsx)(u.a,{color:"primary",onClick:function(){fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/add",{method:"POST",mode:"cors",body:JSON.stringify({id:t})}).catch((function(e){return console.log(e)})),n(t)},children:Object(g.jsx)(N.a,{})})}function D(e){e.name;var t=e.id,n=e.active,i=e.updateList,a=A();return Object(g.jsxs)(C.a,{display:"flex","justify-content":"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap",children:[Object(g.jsx)(f.a,{className:a.text,children:t}),n?Object(g.jsx)(L,{id:t,updateList:i}):Object(g.jsx)(R,{id:t,updateList:i})]})}var I=[{id:"enable-auto-vpc-flowlogging",active:!0},{id:"enable-default-serverside-s3-bucket-encryption",active:!0},{id:"EC2",active:!1}],F=Object(m.a)((function(e){return{root:{flexGrow:1,maxWidth:"1200px",margin:"0 auto",padding:"0 50px"},heading:{color:e.palette.primary.main,padding:"20px"},list:{textAlign:"center"}}}));function U(){var e=F(),t=a.a.useState(I,[]),n=Object(l.a)(t,2),i=n[0],r=n[1],c=function(e){console.log("updating",e),r(i.map((function(t){return t.id===e?Object(w.a)(Object(w.a)({},t),{},{active:!t.active}):t})))};return Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)(T.a,{container:!0,spacing:10,children:[Object(g.jsxs)(T.a,{item:!0,xs:12,sm:6,className:e.list,children:[Object(g.jsx)(f.a,{variant:"h3",className:e.heading,children:"Active"}),i.filter((function(e){return e.active})).map((function(e){return Object(g.jsx)(D,Object(w.a)(Object(w.a)({},e),{},{updateList:c}))}))]}),Object(g.jsxs)(T.a,{item:!0,xs:12,sm:6,className:e.list,children:[Object(g.jsx)(f.a,{variant:"h3",className:e.heading,children:"Available"}),i.filter((function(e){return!e.active})).map((function(e){return Object(g.jsx)(D,Object(w.a)(Object(w.a)({},e),{},{updateList:c}))}))]})]})})}var W=n(152),K=n(320),B={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:6caee0bb-b09a-4484-a632-0bce51728563",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_cbXiE2jCZ",aws_user_pools_web_client_id:"1rdd7oi9f6pn72abvv3sps3k9h",oauth:{},aws_cloud_logic_custom:[{name:"RemediationAPI",endpoint:"https://imgj4b19wi.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"},{name:"SoardinatorAPI",endpoint:"https://7cpk5sylel.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}],aws_user_files_s3_bucket:"soardinator-remediation-cfns201512-dev",aws_user_files_s3_bucket_region:"us-east-1"};n(142).default.configure(B);var H=Object(W.a)({palette:{primary:{main:"#3f51b5"},secondary:{main:"#11cb5f"}}});var z=function(){return Object(g.jsx)(s.a,{children:Object(g.jsx)(K.a,{theme:H,children:Object(g.jsxs)(_.a,{children:[Object(g.jsx)(S,{}),Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/",children:Object(g.jsx)(o.a,{to:"/remediations"})}),Object(g.jsx)(o.b,{path:"/remediations",children:Object(g.jsx)(U,{})})]})]})})})},J=function(e){e&&e instanceof Function&&n.e(36).then(n.bind(null,343)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root")),J()}},[[230,3,4]]]);
//# sourceMappingURL=main.baf196e5.chunk.js.map