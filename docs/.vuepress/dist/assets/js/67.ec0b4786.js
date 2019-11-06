(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{162:function(_,v,t){"use strict";t.r(v);var i=t(0),e=Object(i.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"css-面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-面试题","aria-hidden":"true"}},[_._v("#")]),_._v(" CSS 面试题")]),_._v(" "),t("h2",{attrs:{id:"_1、css-选择器的优先级是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css-选择器的优先级是什么","aria-hidden":"true"}},[_._v("#")]),_._v(" 1、CSS 选择器的优先级是什么")]),_._v(" "),t("p",[_._v("每一个选择器都有一个权重，被匹配的元素可能受到多个选择器的影响，就会进行权重叠加，权重最高的选择器中的 css 代码会被优先使用。")]),_._v(" "),t("ul",[t("li",[_._v("内联样式权重：1000")]),_._v(" "),t("li",[_._v("id 选择器权重：0100")]),_._v(" "),t("li",[_._v("类选择器，属性选择器，伪类选择器权重：0010")]),_._v(" "),t("li",[_._v("元素选择器，伪元素选择器权重：0001")]),_._v(" "),t("li",[_._v("通配选择器 *，子选择器 >，相邻选择器 +。权重：0000")])]),_._v(" "),t("h2",{attrs:{id:"_2、说说-bfc，什么情况下会生成-bfc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、说说-bfc，什么情况下会生成-bfc","aria-hidden":"true"}},[_._v("#")]),_._v(" 2、说说 BFC，什么情况下会生成 BFC")]),_._v(" "),t("p",[_._v("BFC 生成了一套封闭的布局空间，内部子元素无论怎么布局，都不会影响到外部的元素。BFC 可以用来"),t("strong",[_._v("清除浮动")]),_._v("，"),t("strong",[_._v("防止 margin 重叠")]),_._v("，"),t("strong",[_._v("去除 float 文字环绕")]),_._v("，"),t("strong",[_._v("第一个子元素 margin-top 和父元素重叠")]),_._v("等。")]),_._v(" "),t("p",[_._v("以下几种元素会生成 BFC：")]),_._v(" "),t("ul",[t("li",[_._v("html 元素。")]),_._v(" "),t("li",[_._v("float 不是 none 的元素。")]),_._v(" "),t("li",[_._v("overflow: auto/hidden/scroll 的元素。")]),_._v(" "),t("li",[_._v("display: table-cell/inline-block 的元素。")]),_._v(" "),t("li",[_._v("position 不是 static 和 relative 的元素。")])]),_._v(" "),t("h2",{attrs:{id:"_3、css-的层叠上下文是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、css-的层叠上下文是什么","aria-hidden":"true"}},[_._v("#")]),_._v(" 3、CSS 的层叠上下文是什么")]),_._v(" "),t("p",[_._v("层叠上下文是 HTML 中的一个三维的概念，每个层叠上下文中都有一套元素的层叠排列顺序。页面根元素天生具有层叠上下文，所以整个页面处于一个“层叠结界”中。")]),_._v(" "),t("p",[_._v("层叠上下文的创建：")]),_._v(" "),t("ul",[t("li",[_._v("页面根元素："),t("code",[_._v("html")])]),_._v(" "),t("li",[_._v("z-index 值为数值的定位元素")]),_._v(" "),t("li",[_._v("其他 css 属性\n"),t("ul",[t("li",[_._v("opacity 不是 1")]),_._v(" "),t("li",[_._v("transform 不是 none")]),_._v(" "),t("li",[_._v("flex，z-index 不是 auto")])])])]),_._v(" "),t("p",[_._v("层叠上下文中的排列规则，从下到上：")]),_._v(" "),t("ul",[t("li",[_._v("background/border")]),_._v(" "),t("li",[_._v("负 z-index")]),_._v(" "),t("li",[_._v("block 块状水平盒子")]),_._v(" "),t("li",[_._v("float 浮动盒子")]),_._v(" "),t("li",[_._v("inline 水平盒子")]),_._v(" "),t("li",[_._v("z-index:auto, 或看成 z-index:0")]),_._v(" "),t("li",[_._v("正 z-index")])]),_._v(" "),t("p",[_._v("由此引申出：定位元素的"),t("code",[_._v("z-index：0")]),_._v("和"),t("code",[_._v("z-index：auto")]),_._v("的区别是，前者会创建层叠上下文，影响布局。")]),_._v(" "),t("h2",{attrs:{id:"_4、flex-1-是什么单位的缩写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、flex-1-是什么单位的缩写","aria-hidden":"true"}},[_._v("#")]),_._v(" 4、flex:1 是什么单位的缩写")]),_._v(" "),t("p",[_._v("flex 是 flex-grow、flex-shrink、flex-basis 的缩写。")]),_._v(" "),t("p",[_._v("flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。")]),_._v(" "),t("p",[_._v("flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。")]),_._v(" "),t("p",[_._v("flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间，默认为 auto。")])])},[],!1,null,null,null);v.default=e.exports}}]);