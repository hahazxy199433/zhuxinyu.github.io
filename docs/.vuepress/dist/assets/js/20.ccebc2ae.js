(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{253:function(a,t,v){"use strict";v.r(t);var _=v(0),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"javascript与qa工程师-一"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript与qa工程师-一"}},[a._v("#")]),a._v(" Javascript与QA工程师(一)")]),a._v(" "),v("h2",{attrs:{id:"单元测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[a._v("#")]),a._v(" 单元测试")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("目的")]),a._v("：单元测试能够让开发者明确知道代码结果")]),a._v(" "),v("li",[v("strong",[a._v("原则")]),a._v("：单一职责、接口抽象、层次分离")]),a._v(" "),v("li",[v("strong",[a._v("断言库")]),a._v("：保证最小单元是否正常运行监测方法")]),a._v(" "),v("li",[v("strong",[a._v("测试风格")]),a._v("：测试驱动开发（TDD）、行为驱动开发（BDD）均是敏捷开发方法论。TDD关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi' == user.name);BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集。")])]),a._v(" "),v("h3",{attrs:{id:"单元测试框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单元测试框架"}},[a._v("#")]),a._v(" 单元测试框架")]),a._v(" "),v("ul",[v("li",[a._v("better-assert(TDD断言库)")]),a._v(" "),v("li",[a._v("should.js(BDD断言库)")]),a._v(" "),v("li",[a._v("expect.js(BDD断言库)")]),a._v(" "),v("li",[a._v("chai.js(TDD BDD双模)")]),a._v(" "),v("li",[a._v("Jasmine.js(BDD)")]),a._v(" "),v("li",[a._v("Node.js本身集成")])]),a._v(" "),v("h3",{attrs:{id:"单元测试运行流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单元测试运行流程"}},[a._v("#")]),a._v(" 单元测试运行流程")]),a._v(" "),v("ol",[v("li",[a._v("before单个测试用例（it）开始前")]),a._v(" "),v("li",[a._v("before.Each每一个测试用例开始前")]),a._v(" "),v("li",[a._v("it定义测试用例， 并利用断言库进行设置chai,如：expect(x).to.equal(true);\n异步 mocha")]),a._v(" "),v("li",[a._v("以上专业术语叫mock")])]),a._v(" "),v("h3",{attrs:{id:"自动化单元测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动化单元测试"}},[a._v("#")]),a._v(" 自动化单元测试")]),a._v(" "),v("ul",[v("li",[a._v("Karma 自动化runner集成PhantomJS无刷新")]),a._v(" "),v("li",[a._v("npm install -g karma")]),a._v(" "),v("li",[a._v("npm install karma-cli --save-dev")]),a._v(" "),v("li",[a._v("npm install karma-chrome-launcher --save-dev")]),a._v(" "),v("li",[a._v("npm install karma-phantomjs-launcher --save-dev")]),a._v(" "),v("li",[a._v("npm intall karma-mocha --save-dev")]),a._v(" "),v("li",[a._v("npm install karma-chai --save-dev")])]),a._v(" "),v("h3",{attrs:{id:"报告和单测覆盖率检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报告和单测覆盖率检查"}},[a._v("#")]),a._v(" 报告和单测覆盖率检查")]),a._v(" "),v("ul",[v("li",[a._v("npm install karma-coverage --save-dev")]),a._v(" "),v("li",[a._v("coverageReporter:{type: 'html', dir: 'coverage/'}//配置代码覆盖测试率生成结果")])]),a._v(" "),v("h2",{attrs:{id:"性能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),v("h3",{attrs:{id:"基准测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基准测试"}},[a._v("#")]),a._v(" 基准测试")]),a._v(" "),v("ul",[v("li",[a._v("面向切面编程AOP无入侵式统计")]),a._v(" "),v("li",[a._v("Benchmark基准测试方式，它并不是简单地统计执行多少次测试代码后对比时间，它对测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。")])]),a._v(" "),v("h3",{attrs:{id:"压力测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#压力测试"}},[a._v("#")]),a._v(" 压力测试")]),a._v(" "),v("ul",[v("li",[a._v("对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力")]),a._v(" "),v("li",[a._v("PV网站当日访问人数UV独立访问人数。PV每天几十万甚至上百万就需要考虑压力测试。换算公式QPS=PV/t ps:1000000/10"),v("em",[a._v("60")]),a._v("60=27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)")]),a._v(" "),v("li",[a._v("常用的压力测试工具是ab、siege、http_load")])]),a._v(" "),v("h2",{attrs:{id:"安全漏洞检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全漏洞检查"}},[a._v("#")]),a._v(" 安全漏洞检查")]),a._v(" "),v("ul",[v("li",[a._v("XSS")]),a._v(" "),v("li",[a._v("SQL")]),a._v(" "),v("li",[a._v("CSRF")])]),a._v(" "),v("h2",{attrs:{id:"功能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能测试"}},[a._v("#")]),a._v(" 功能测试")]),a._v(" "),v("h3",{attrs:{id:"用户真实性检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户真实性检查"}},[a._v("#")]),a._v(" 用户真实性检查")]),a._v(" "),v("ul",[v("li",[a._v("selenium-webdriver")]),a._v(" "),v("li",[a._v("protractor-selenium-standalone")]),a._v(" "),v("li",[a._v("http://webdriver.io/ WEBDRIVERI/O")]),a._v(" "),v("li",[a._v("冒烟测试Smoke Test 自由测试的一种，找到一个BUG开发修复，然后专门针对此BUG，优点节省时间防止build失败，缺点是覆盖率极低。")]),a._v(" "),v("li",[a._v("回归测试 修改一处对整体功能全部测试，一般配合自动化测试。")])]),a._v(" "),v("h2",{attrs:{id:"javascript-lint-hint"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript-lint-hint"}},[a._v("#")]),a._v(" javascript lint&Hint")]),a._v(" "),v("ul",[v("li",[a._v("目的：检测javascript代码标准")]),a._v(" "),v("li",[a._v("原因：javascript代码诡异，保证团队代码规范")]),a._v(" "),v("li",[a._v("lint：http://www.jslint.com/")]),a._v(" "),v("li",[a._v("hint：http://www.jshint.com/")]),a._v(" "),v("li",[a._v("搭配自动化任务管理工具完善自动化测试grunt-jsint、grunt-jshint")])])])}),[],!1,null,null,null);t.default=s.exports}}]);