(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{469:function(e,t,o){"use strict";o.r(t);var a={name:"ShowBreadFieldCard",props:{formField:Object},computed:{}},n=o(0),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("CCard",[o("CCardHeader",[o("h4",[e._v(e._s(e.formField.name))])]),e._v(" "),o("CCardBody",[o("p",[e._v("Field type:  "),o("strong",[e._v(e._s(e.formField.type))])]),e._v(" "),o("p",[e._v("Optional relation table name: "),o("strong",[e._v(e._s(e.formField.relation_table))])]),e._v(" "),o("p",[e._v("Optional column name to print in relation table: "),o("strong",[e._v(e._s(e.formField.relation_column))])]),e._v(" "),o("p",[e._v("Browse:      "+e._s(e.formField.browse))]),e._v(" "),o("p",[e._v("Read:        "+e._s(e.formField.read))]),e._v(" "),o("p",[e._v("Edit:        "+e._s(e.formField.edit))]),e._v(" "),o("p",[e._v("Add:         "+e._s(e.formField.add))])])],1)}),[],!1,null,null,null).exports,l=o(2),d=o.n(l),i={name:"Bread",components:{ShowBreadFieldCard:r},data:function(){return{form:{name:"",table_name:"",pagination:"",read:"",edit:"",add:"",delete:""},formFields:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var e=this;d.a.get("/api/bread/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){e.form=t.data.form,e.formFields=t.data.formFields})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},_=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",{attrs:{"no-header":""}},[o("CCardBody",[o("h3",[e._v("Single BREAD")]),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")]),e._v(" "),o("p",{staticClass:"mt-2"},[e._v("Form name: "),o("strong",[e._v(e._s(e.form.name))])]),e._v(" "),o("p",[e._v("Database table name: "),o("strong",[e._v(e._s(e.form.table_name))])]),e._v(" "),o("p",[e._v("Records on one page of table: "),o("strong",[e._v(e._s(e.form.pagination))])]),e._v(" "),o("p",[e._v("Enable Show button in table: "+e._s(e.form.read))]),e._v(" "),o("p",[e._v("Enable Edit button in table: "+e._s(e.form.edit))]),e._v(" "),o("p",[e._v("Enable Add button in table: "+e._s(e.form.add))]),e._v(" "),o("p",[e._v("Enable Delete button in table: "+e._s(e.form.delete))]),e._v(" "),e._l(e.formFields,(function(e){return o("ShowBreadFieldCard",{key:e.id,attrs:{formField:e}})})),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],2)],1)],1)],1)}),[],!1,null,null,null);t.default=_.exports}}]);