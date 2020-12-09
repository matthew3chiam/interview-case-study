(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{500:function(t,s,r){"use strict";r.r(s);var e={name:"Alerts",data:function(){return{dismissSecs:10,dismissCountDown:10,alert1:!0,alert2:!0}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},showDismissibleAlerts:function(){var t=this;["alert1","alert2"].forEach((function(s){return t[s]=!0}))}}},a=r(0),n=Object(a.a)(e,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("CRow",[r("CCol",{attrs:{col:"12",md:"6"}},[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),t._v(" "),r("strong",[t._v(" Bootstrap Alert")]),t._v(" "),r("div",{staticClass:"card-header-actions"},[r("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/alert",rel:"noreferrer noopener",target:"_blank"}},[r("small",{staticClass:"text-muted"},[t._v("docs")])])])],1),t._v(" "),r("CCardBody",[r("div",[r("p"),t._v(" "),r("CAlert",{attrs:{show:"",color:"primary"}},[t._v("Primary Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"secondary"}},[t._v("Secondary Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"success"}},[t._v("Success Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"danger"}},[t._v("Danger Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"warning"}},[t._v("Warning Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"info"}},[t._v("Info Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"light"}},[t._v("Light Alert")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"dark"}},[t._v("Dark Alert")])],1)])],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",md:"6"}},[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),t._v(" Alert\n        "),r("small",[t._v(" use "),r("code",[t._v(".alert-link")]),t._v(" to provide links")])],1),t._v(" "),r("CCardBody",[r("div",[r("CAlert",{attrs:{show:"",color:"primary"}},[t._v("\n            Primary Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"secondary"}},[t._v("\n            Secondary Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"success"}},[t._v("\n            Success Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"danger"}},[t._v("\n            Danger Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"warning"}},[t._v("\n            Warning Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"info"}},[t._v("\n            Info Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"light"}},[t._v("\n            Light Alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n          ")]),t._v(" "),r("CAlert",{attrs:{show:"",color:"dark"}},[t._v("\n            Dark Alert with\n            "),r("CLink",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v("\n            .\n          ")],1)],1)])],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",md:"6"}},[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),t._v(" Alerts "),r("small",[t._v("with additional content")])],1),t._v(" "),r("CCardBody",[r("CAlert",{attrs:{show:"",color:"success"}},[r("h4",{staticClass:"alert-heading"},[t._v("Well done!")]),t._v(" "),r("p",[t._v("\n            Aww yeah, you successfully read this important alert message.\n            This example text is going to run a bit longer so that you can see\n            how spacing within an alert works with this kind of content.\n          ")]),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"mb-0"},[t._v("\n            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n          ")])])],1)],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",md:"6"}},[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),t._v(" Alerts\n        "),r("small",[t._v("dismissible")])],1),t._v(" "),r("CCardBody",[r("CAlert",{attrs:{color:"secondary",closeButton:"",show:t.alert1},on:{"update:show":function(s){t.alert1=s}}},[t._v("\n          Dismissible Alert!\n        ")]),t._v(" "),r("CAlert",{staticClass:"alert-dismissible",attrs:{color:"secondary",show:t.alert2},on:{"update:show":function(s){t.alert2=s}}},[t._v("\n          Dismissible Alert with custom button!\n          "),r("CButton",{staticClass:"position-absolute",staticStyle:{right:"10px",top:"50%",transform:"translateY(-50%)"},attrs:{color:"secondary"},on:{click:function(s){t.alert2=!1}}},[t._v("\n            Close\n          ")])],1),t._v(" "),r("CButton",{staticClass:"m-1",attrs:{color:"info"},on:{click:t.showDismissibleAlerts}},[t._v("\n          Show dismissible alerts\n        ")])],1)],1),t._v(" "),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),t._v(" Alerts\n        "),r("small",[t._v("auto dismissible")])],1),t._v(" "),r("CCardBody",[r("div",[r("CAlert",{attrs:{show:t.dismissCountDown,closeButton:"",color:"warning",fade:""},on:{"update:show":function(s){t.dismissCountDown=s}}},[t._v("\n            Alert will dismiss after\n            "),r("strong",[t._v(t._s(t.dismissCountDown))]),t._v(" seconds...\n          ")]),t._v(" "),r("CAlert",{attrs:{show:t.dismissCountDown,closeButton:"",color:"info"},on:{"update:show":function(s){t.dismissCountDown=s}}},[t._v("\n            Alert will dismiss after "+t._s(t.dismissCountDown)+" seconds...\n            "),r("CProgress",{attrs:{color:"info",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1),t._v(" "),r("CButton",{staticClass:"m-1",attrs:{color:"info"},on:{click:t.showAlert}},[t._v("\n            Show alert with timer\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);