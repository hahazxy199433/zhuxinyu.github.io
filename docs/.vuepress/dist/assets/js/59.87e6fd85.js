(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{174:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"《webgl-编程指南》"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《webgl-编程指南》","aria-hidden":"true"}},[s._v("#")]),s._v(" 《WebGL 编程指南》")]),s._v(" "),a("p",[s._v("这本书写得不错，很适合入门 WebGL，作者写的通俗易懂，是选择图形学方向的必备书籍。由于本人只限于了解 WebGL 以及一些简单的使用，所以这篇文章只是入门级别，希望大家读后可以对 WebGL 有一定程度的了解。")]),s._v(" "),a("p",[s._v("本文分为以下几个方面来入门 WebGL：")]),s._v(" "),a("ul",[a("li",[s._v("WebGL 基础知识")]),s._v(" "),a("li",[s._v("WebGL 渲染流程分析")]),s._v(" "),a("li",[s._v("WebGL 核心 api")]),s._v(" "),a("li",[s._v("WebGL 小实战")])]),s._v(" "),a("h2",{attrs:{id:"webgl-基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-基础知识","aria-hidden":"true"}},[s._v("#")]),s._v(" WebGL 基础知识")]),s._v(" "),a("p",[s._v("WebGL，是一项用来在网页上绘制和渲染复杂三维图形，并允许用户与之交互的技术。你只需要一个文本编辑器和一个浏览器，就可以开始编写三维图形程序了。")]),s._v(" "),a("p",[s._v("WebGL 的技术规范继承自免费和开源的 OpenGL 标准，而后者在计算机图形学、电子游戏、计算机辅助设计等领域已被广泛使用多年。在某种意义上，WebGL 就是 Web 版的 OpenGL。WebGL 中所有关于着色器的编程，底层都是使用 OpenGL 语法，所以需要书写 OpenGL 语言，这些代码可以写成字符串，也可以写在单独的文件中引入进来。")]),s._v(" "),a("p",[s._v("WebGL 只能绘制 3 中图形：点、线、三角形，其他的图形都是在这 3 中图形的基础上衍生出来的。")]),s._v(" "),a("p",[s._v("WebGL 程序的结构如下图所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"book-webgl-structure.png",alt:"WebGL 程序的结构"}})]),s._v(" "),a("h2",{attrs:{id:"webgl-程序运行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-程序运行流程","aria-hidden":"true"}},[s._v("#")]),s._v(" WebGL 程序运行流程")]),s._v(" "),a("ul",[a("li",[s._v("根据 canvas 元素，获取 WebGL 绘图上下文。")]),s._v(" "),a("li",[s._v("新建顶点着色器")]),s._v(" "),a("li",[s._v("创建片元着色器")]),s._v(" "),a("li",[s._v("初始化着色器\n"),a("ul",[a("li",[s._v("创建着色器对象")]),s._v(" "),a("li",[s._v("向着色器对象中填充着色器程序的源代码")]),s._v(" "),a("li",[s._v("编译着色器")]),s._v(" "),a("li",[s._v("创建程序对象")]),s._v(" "),a("li",[s._v("为程序对象分配着色器")]),s._v(" "),a("li",[s._v("连接程序对象")]),s._v(" "),a("li",[s._v("使用程序对象")])])]),s._v(" "),a("li",[s._v("设置 canvas 背景色")]),s._v(" "),a("li",[s._v("清空 canvas")]),s._v(" "),a("li",[s._v("绘图")])]),s._v(" "),a("p",[s._v("其中初始化着色器部分对所有程序都是通用的，可以抽离封装成一个公共部分。")]),s._v(" "),a("h2",{attrs:{id:"webgl-核心-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-核心-api","aria-hidden":"true"}},[s._v("#")]),s._v(" WebGL 核心 api")]),s._v(" "),a("ul",[a("li",[s._v("顶点着色器\n"),a("ul",[a("li",[s._v("用来指定点的位置和尺寸。")]),s._v(" "),a("li",[s._v("attribute 给顶点着色器声明变量，可以由 js 传递顶点信息。")])])]),s._v(" "),a("li",[s._v("片元着色器\n"),a("ul",[a("li",[s._v("用来指定点的颜色。")]),s._v(" "),a("li",[s._v("片元可以理解成显示在屏幕上的一个像素。")]),s._v(" "),a("li",[s._v("uniform 给片元着色器声明变量，可以由 js 传递片元信息。")])])]),s._v(" "),a("li",[s._v("WebGL 坐标系统（右手坐标系）\n"),a("ul",[a("li",[s._v("x 轴 水平向右。")]),s._v(" "),a("li",[s._v("y 轴 垂直向上。")]),s._v(" "),a("li",[s._v("z 轴 垂直屏幕向外。")])])]),s._v(" "),a("li",[s._v("缓冲区对象\n"),a("ul",[a("li",[s._v("WebGL 系统中的一块内存区域。")]),s._v(" "),a("li",[s._v("可以一次性地向着色器传入多个顶点的数据。")])])]),s._v(" "),a("li",[s._v("图形移动，旋转和缩放\n"),a("ul",[a("li",[s._v("通过顶点的变换，重新绘制图形，主要在于编写顶点坐标移动的变换算法。")]),s._v(" "),a("li",[s._v("使用变换矩阵来替代数学表达式，可以更方便的处理位置变换。可以将多个基础矩阵的变换，可以建模成一个复杂的变换矩阵。")]),s._v(" "),a("li",[s._v("着色器内置了矢量和矩阵运算功能。")])])]),s._v(" "),a("li",[s._v("颜色与纹理\n"),a("ul",[a("li",[s._v("图形绘制流程，绘制顶点坐标，连接顶点坐标（图形装配），光栅化（将几何图形转化成片元(像素)），逐片元渲染着色器。")]),s._v(" "),a("li",[s._v("光栅化，发生在顶点着色器和片元着色器之间的从图形到片元的转化，又称为图元光栅化。")]),s._v(" "),a("li",[s._v("纹理映射，将图片映射到三维对象的表现上。")]),s._v(" "),a("li",[s._v("varying 变量，可以在顶点着色器和片元着色器中共享数据。")])])]),s._v(" "),a("li",[s._v("三维世界\n"),a("ul",[a("li",[s._v("立方体都是由多个三角形构成。")]),s._v(" "),a("li",[s._v("视点和视线\n"),a("ul",[a("li",[s._v("观察者的位置：视点。")]),s._v(" "),a("li",[s._v("从视点出发沿着观察方向的射线：视线。")])])]),s._v(" "),a("li",[s._v("可视范围\n"),a("ul",[a("li",[s._v("只有可视范围内的对象才会进行绘制，这也是基本的降低程序开销的手段。")]),s._v(" "),a("li",[s._v("可视空间\n"),a("ul",[a("li",[s._v("长方体可视空间，由正射投影产生。\n"),a("ul",[a("li",[s._v("无法产生近大远小的视觉效果。")])])]),s._v(" "),a("li",[s._v("四棱锥（金字塔）可视空间，有透射投影产生。\n"),a("ul",[a("li",[s._v("可以产生近大远小的视觉效果，具有透视感。")])])])])])])]),s._v(" "),a("li",[s._v("光照\n"),a("ul",[a("li",[s._v("现实世界中，当光照射到物体省时，物体的明暗程度并不一致，物体还会在地面上留下影子，这就需要根据光照来计算对应的颜色。")]),s._v(" "),a("li",[s._v("光源类型\n"),a("ul",[a("li",[s._v("平行光（太阳光）")]),s._v(" "),a("li",[s._v("点光源（点灯泡）")]),s._v(" "),a("li",[s._v("环境光（场景中被墙壁等其他东西反射回来的光）")])])]),s._v(" "),a("li",[s._v("反射类型\n"),a("ul",[a("li",[s._v("漫反射\n"),a("ul",[a("li",[s._v("漫反射光颜色 = 入射光颜色 x 表面基地色 x Cos(入射角)")])])]),s._v(" "),a("li",[s._v("环境反射\n"),a("ul",[a("li",[s._v("环境反射光颜色 = 入射光颜色 x 表面基底色")])])]),s._v(" "),a("li",[s._v("漫反射和环境反射同时存在\n"),a("ul",[a("li",[s._v("环境反射光颜色 = 漫反射光颜色 + 环境反射光颜色")])])])])]),s._v(" "),a("li",[s._v("层次结构模型\n"),a("ul",[a("li",[s._v("由多个简单的部件组成一个复杂模型。")]),s._v(" "),a("li",[s._v("为复杂物体（机器人手臂）建立具有层次化结构的三维模型。")]),s._v(" "),a("li",[s._v("使用模型矩阵，模拟机器人手臂上的关节运动。")]),s._v(" "),a("li",[s._v("拆分复杂物体相互影响关系，在运动时进行连带绘制。")])])])])])])])]),s._v(" "),a("p",[s._v("二维图形的颜色，是通过每一个顶点颜色计算而来，如果顶点的颜色不一致，中间的颜色会自然形成渐变色。")]),s._v(" "),a("p",[a("img",{attrs:{src:"book-webgl-flow.jpeg",alt:"光栅化流程"}})]),s._v(" "),a("h2",{attrs:{id:"webgl-小实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-小实战","aria-hidden":"true"}},[s._v("#")]),s._v(" WebGL 小实战")]),s._v(" "),a("p",[s._v("这个实战是在 canvas 中画一个点，可以看出，代码量还是挺大的。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WebGL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// gl.xxx 方法底层是调用openGL.xxx 方法进行渲染。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WebGL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶点着色器：描述二维或三维空间中的一个点的特性，如大小，位置等。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VSHEADERS_SOURCE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n    void main(){\n        gl_Position = vec4(0.0,0.0,0.0,1.0); // 设置坐标\n        gl_PointSize = 10.0; // 设置尺寸\n    }\n    ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 片元着色器，进行逐片元处理过程，片元可以理解成像素，描述一个点的颜色。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FSHEADERS_SOURCE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n    void main(){\n        gl_FragColor = vec4(1.0,1.0,0.0,1.0); // 设置颜色\n    }\n    ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化着色器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initShaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VSHEADERS_SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FSHEADERS_SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 canvas 的背景色")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clearColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用设置好的背景色，清空颜色缓冲区。")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLOR_BUFFER_BIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不同参数，绘制 3 种图形，点，，线段，三角形。")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POINTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("initShaders 方法。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initShaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VSHEADERS_SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FSHEADERS_SOURCE")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建顶点着色器对象")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" vertexShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VERTEX_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将源码分配给顶点着色器对象")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VSHEADERS_SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建片元着色器程序")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fragmentShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FRAGMENT_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将源码分配给片元着色器对象")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FSHEADERS_SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译顶点着色器程序")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译片元着色器")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建程序对象")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将顶点着色器挂载在着色器程序上。")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将片元着色器挂载在着色器程序上。")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//连接着色器程序，把顶点着色器和片元着色器连接起来")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linkProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用刚创建好的着色器程序。")]),s._v("\n  gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);