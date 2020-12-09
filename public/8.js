(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{226:function(t,e,n){"use strict";var i=n(85);n.n(i).a},227:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,"\n.card-body[data-v-78ade070] table > tbody > tr > td {\n  cursor: pointer;\n}\n",""])},526:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),s={name:"Emails",data:function(){return{items:[],fields:["name","subject","send","show","edit","delete"],currentPage:1,perPage:5,totalRows:0,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},noteLink:function(t){return"email/".concat(t.toString())},editLink:function(t){return"email/".concat(t.toString(),"/edit")},showEmail:function(t){var e=this.noteLink(t);this.$router.push({path:e})},editEmail:function(t){var e=this.editLink(t);this.$router.push({path:e})},sendEmail:function(t){this.$router.push({path:"email/".concat(t.toString(),"/sendEmail")})},deleteEmail:function(t){var e=this;o.a.post("/api/mail/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted Email Template.",e.showAlert(),e.getTemplates()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createTemplate:function(){this.$router.push({path:"email/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getTemplates:function(){var t=this;o.a.get("/api/mail?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getTemplates()}},a=(n(226),n(0)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardBody",[n("h4",[t._v("Email Templates")]),t._v(" "),n("CButton",{staticClass:"m-3",attrs:{color:"primary"},on:{click:function(e){return t.createTemplate()}}},[t._v("Create Template")]),t._v(" "),n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"name",fn:function(e){var i=e.item;return[n("td",[n("strong",[t._v(t._s(i.name))])])]}},{key:"subject",fn:function(e){var i=e.item;return[n("td",[n("strong",[t._v(t._s(i.subject))])])]}},{key:"send",fn:function(e){var i=e.item;return[n("td",[n("CButton",{attrs:{color:"warning"},on:{click:function(e){return t.sendEmail(i.id)}}},[t._v("Send")])],1)]}},{key:"show",fn:function(e){var i=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.showEmail(i.id)}}},[t._v("Show")])],1)]}},{key:"edit",fn:function(e){var i=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.editEmail(i.id)}}},[t._v("Edit")])],1)]}},{key:"delete",fn:function(e){var i=e.item;return[n("td",[n("CButton",{attrs:{color:"danger"},on:{click:function(e){return t.deleteEmail(i.id)}}},[t._v("Delete")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"78ade070",null);e.default=r.exports},85:function(t,e,n){var i=n(227);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(22)(i,o);i.locals&&(t.exports=i.locals)}}]);