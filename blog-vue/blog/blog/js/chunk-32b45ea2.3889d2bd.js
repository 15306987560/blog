(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b45ea2"],{d536:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"banner",style:t.cover},[a("h1",{staticClass:"banner-title"},[t._v("友情链接")])]),a("v-card",{staticClass:"blog-container"},[a("div",{staticClass:"link-title mb-1"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-link-variant")]),t._v(" 大佬链接 ")],1),a("v-row",{staticClass:"link-container"},t._l(t.friendLinkList,(function(i){return a("v-col",{key:i.id,staticClass:"link-wrapper",attrs:{md:"4",cols:"12"}},[a("a",{attrs:{href:i.linkAddress,target:"_blank"}},[a("v-avatar",{staticClass:"link-avatar",attrs:{size:"65"}},[a("img",{attrs:{src:i.linkAvatar}})]),a("div",{staticStyle:{width:"100%","z-index":"10"}},[a("div",{staticClass:"link-name"},[t._v(t._s(i.linkName))]),a("div",{staticClass:"link-intro"},[t._v(t._s(i.linkIntro))])])],1)])})),1),a("div",{staticClass:"link-title mt-4 mb-4"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-dots-horizontal-circle")]),t._v(" 添加友链 ")],1),a("blockquote",[a("div",[t._v("名称："+t._s(t.blogInfo.websiteConfig.websiteName))]),a("div",[t._v("简介："+t._s(t.blogInfo.websiteConfig.websiteIntro))]),a("div",[t._v("头像："+t._s(t.blogInfo.websiteConfig.websiteAvatar))])]),a("div",{staticClass:"mt-5 mb-5"},[t._v(" 需要交换友链的可在下方留言💖 ")]),a("blockquote",{staticClass:"mb-10"},[t._v(" 友链信息展示需要，你的信息格式要包含：名称、介绍、链接、头像 ")]),a("Comment",{attrs:{type:this.commentType}})],1)],1)},e=[],s=(a("4160"),a("159b"),a("4ea3")),o={components:{Comment:s["a"]},created:function(){this.listFriendLink()},data:function(){return{friendLinkList:[],commentType:2}},methods:{listFriendLink:function(){var t=this;this.axios.get("/api/links").then((function(i){var a=i.data;t.friendLinkList=a.data}))}},computed:{blogInfo:function(){return this.$store.state.blogInfo},cover:function(){var t="";return this.$store.state.blogInfo.pageList.forEach((function(i){"link"==i.pageLabel&&(t=i.pageCover)})),"background: url("+t+") center center / cover no-repeat"}}},r=o,l=(a("f68a"),a("2877")),c=a("6544"),v=a.n(c),d=a("8212"),f=a("b0af"),b=a("62ad"),u=a("132d"),k=a("0fd9"),m=Object(l["a"])(r,n,e,!1,null,"4e1ff304",null);i["default"]=m.exports;v()(m,{VAvatar:d["a"],VCard:f["a"],VCol:b["a"],VIcon:u["a"],VRow:k["a"]})},e5fb:function(t,i,a){},f68a:function(t,i,a){"use strict";var n=a("e5fb"),e=a.n(n);e.a}}]);