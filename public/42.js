(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{527:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),o={name:"CreateEmailTemplate",data:function(){return{template:{name:"",subject:"",content:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;n.a.post("/api/mail?token="+localStorage.getItem("api_token"),e.template).then((function(t){e.template={name:"",subject:"",content:""},e.message="Successfully created Email Template.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},r=a(0),l=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("h4",[e._v("\n          Create Email Template\n        ")]),e._v(" "),a("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),a("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.template.name,callback:function(t){e.$set(e.template,"name",t)},expression:"template.name"}}),e._v(" "),a("CInput",{attrs:{label:"Subject",type:"text",placeholder:"Subject"},model:{value:e.template.subject,callback:function(t){e.$set(e.template,"subject",t)},expression:"template.subject"}}),e._v(" "),a("CTextarea",{attrs:{textarea:"true",label:"Content",rows:15,placeholder:"Content.."},model:{value:e.template.content,callback:function(t){e.$set(e.template,"content",t)},expression:"template.content"}}),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Create")]),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);