(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3673c06"],{"4d33":function(t,e,i){"use strict";var r=i("83ca"),s=i.n(r);s.a},8085:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[t.loading?t._e():i("div",{staticClass:"category",style:[{background:t.getCategoryColor(t.Article.categoryTagName)}]},[t._v("\n        "+t._s(t.Article.category)+" "),i("span")]),i("div",{staticClass:"article-body"},[i("div",{staticClass:"title"},[t.loading?t._e():[t._v(t._s(t.Article.title))]],2),i("div",{staticClass:"subtitle"},[t.loading?t._e():[t._v(t._s(t.Article.subtitle))]],2),t.loading?t._e():[null!=t.Article.picturePath?i("img",{class:t.$store.getters.Language["article-image"],attrs:{src:t.APP_URL+t.Article.picturePath}}):t._e()],i("div",{staticClass:"writer"},[t.loading?t._e():[t._v(t._s(t.Article.writer)+" | "+t._s(t.Article.writerPosition))]],2),i("div",{attrs:{id:"article-text-body"}}),t.loading?t._e():i("div",{staticClass:"footer"},[i("span",{class:[{ratedUp:1==t.Article.ratedByUser}]},[i("i",{staticClass:"fas fa-angle-up"})]),t._v("\n            "+t._s(t.Article.rate)+"\n            "),i("span",{class:[{ratedDown:2==t.Article.ratedByUser}]},[i("i",{staticClass:"fas fa-angle-down"})]),i("span",[t._v(t._s(t.$store.getters.Language.votes)+": "+t._s(t.Article.numberOfVotes))]),void 0!=t.Article.comments?i("span",[t._v(t._s(t.$store.getters.Language.comments)+": "+t._s(t.Article.comments.length))]):t._e(),i("span",{staticClass:"row m-0 p-0"},[t._m(0),t._v(t._s(t.Article.numberOfFavorites))])])],2)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("i",{staticClass:"far fa-star"})])}],a=i("9ab4"),l=i("60a3"),n=i("0e9d"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id=null,e.Article=null,e.APP_URL="https://192.168.50.104:5000",e.loading=!0,e}return a["c"](e,t),e.prototype.created=function(){this.getIdFromParams(),this.getArticle()},e.prototype.getCategoryColor=function(t){return this.$store.state.colors.colors[t]},e.prototype.getArticle=function(){if(null!=this.id){var t=this.$parent.$data.Articles;if(void 0!=t)for(var e=0,i=t;e<i.length;e++){var r=i[e];if(r.id==this.id)return this.Article=r,void(this.loading=!1)}this.getArticlesFromApi()}},e.prototype.getArticlesFromApi=function(){var t=this;null!=this.id&&null==this.Article&&n["a"].getArticle(this.id).then(function(e){t.Article=e,t.loading=!1})},e.prototype.fillBodyText=function(){var t=document.getElementById("article-text-body");null!=t&&null!=this.Article&&(t.innerHTML=this.Article.text)},e.prototype.getIdFromParams=function(){this.id=parseInt(this.$route.params.id)},a["b"]([Object(l["c"])("Article")],e.prototype,"fillBodyText",null),a["b"]([Object(l["c"])("$route.params.id")],e.prototype,"getIdFromParams",null),e=a["b"]([l["a"]],e),e}(l["b"]),o=c,d=o,u=(i("4d33"),i("2877")),p=Object(u["a"])(d,r,s,!1,null,"6e8041c9",null);e["default"]=p.exports},"83ca":function(t,e,i){}}]);
//# sourceMappingURL=chunk-d3673c06.49a698b4.js.map