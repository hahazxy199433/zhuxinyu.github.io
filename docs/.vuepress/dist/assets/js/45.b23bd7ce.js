(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{187:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rxjs-基础知识总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-基础知识总结","aria-hidden":"true"}},[s._v("#")]),s._v(" RxJS 基础知识总结")]),s._v(" "),a("p",[s._v("对于 RxJS 一直都是比较感兴趣，但是却没有很深入地去研究，这一节先介绍一下基础知识，以后再深入学习。")]),s._v(" "),a("h2",{attrs:{id:"observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable","aria-hidden":"true"}},[s._v("#")]),s._v(" Observable")]),s._v(" "),a("p",[s._v("Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。")]),s._v(" "),a("p",[s._v("Observables 是使用 Rx.Observable.create 或创建操作符创建的，并使用观察者来订阅它，然后执行它并发送 next / error / complete 通知给观察者，而且执行可能会被清理。这四个方面全部编码在 Observables 实例中。")]),s._v(" "),a("p",[s._v("Observable 的核心关注点：")]),s._v(" "),a("ul",[a("li",[s._v("创建 Observables")]),s._v(" "),a("li",[s._v("订阅 Observables")]),s._v(" "),a("li",[s._v("执行 Observables")]),s._v(" "),a("li",[s._v("清理 Observables")])]),s._v(" "),a("h2",{attrs:{id:"observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer","aria-hidden":"true"}},[s._v("#")]),s._v(" Observer")]),s._v(" "),a("p",[s._v("Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。")]),s._v(" "),a("p",[s._v("观察者是由 Observable 发送的值的消费者。观察者只是一组回调函数的集合，每个回调函数对应一种 Observable 发送的通知类型：next、error 和 complete 。")]),s._v(" "),a("h2",{attrs:{id:"subscription"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscription","aria-hidden":"true"}},[s._v("#")]),s._v(" Subscription")]),s._v(" "),a("p",[s._v("Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。")]),s._v(" "),a("p",[s._v("Subscription 是表示可清理资源的对象，通常是 Observable 的执行。Subscription 有一个重要的方法，即 unsubscribe，它不需要任何参数，只是用来清理由 Subscription 占用的资源。")]),s._v(" "),a("h2",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators","aria-hidden":"true"}},[s._v("#")]),s._v(" Operators")]),s._v(" "),a("p",[s._v("操作符是 Observable 类型上的方法，比如 .map(...)、.filter(...)、.merge(...)，等等。当操作符被调用时，它们不会改变已经存在的 Observable 实例。相反，它们返回一个新的 Observable ，它的 subscription 逻辑基于第一个 Observable 。")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[s._v("操作符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。")]),s._v(" "),a("p",[s._v("操作符是采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。")])]),s._v(" "),a("h2",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject","aria-hidden":"true"}},[s._v("#")]),s._v(" Subject")]),s._v(" "),a("p",[s._v("Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。")]),s._v(" "),a("p",[s._v("RxJS Subject 是一种特殊类型的 Observable，它允许将值多播给多个观察者，所以 Subject 是多播的，而普通的 Observables 是单播的(每个已订阅的观察者都拥有 Observable 的独立执行)。")]),s._v(" "),a("p",[s._v("变种：")]),s._v(" "),a("p",[s._v("BehaviorSubject：Subject 的其中一个变体就是 BehaviorSubject，它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。")]),s._v(" "),a("p",[s._v("ReplaySubject： 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。")]),s._v(" "),a("p",[s._v("AsyncSubject： 只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。")]),s._v(" "),a("h2",{attrs:{id:"schedulers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulers","aria-hidden":"true"}},[s._v("#")]),s._v(" Schedulers")]),s._v(" "),a("p",[s._v("Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。")]),s._v(" "),a("p",[s._v("调度器控制着何时启动 subscription 和何时发送通知。它由三部分组成：")]),s._v(" "),a("ul",[a("li",[s._v("调度器是一种数据结构。 它知道如何根据优先级或其他标准来存储任务和将任务进行排序。")]),s._v(" "),a("li",[s._v("调度器是执行上下文。 它表示在何时何地执行任务(举例来说，立即的，或另一种回调函数机制(比如 setTimeout 或 process.nextTick)，或动画帧)。")]),s._v(" "),a("li",[s._v("调度器有一个(虚拟的)时钟。 调度器功能通过它的 getter 方法 now() 提供了“时间”的概念。在具体调度器上安排的任务将严格遵循该时钟所表示的时间。")]),s._v(" "),a("li",[s._v("调度器可以让你规定 Observable 在什么样的执行上下文中发送通知给它的观察者。")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("调度器")]),s._v(" "),a("th",[s._v("目的")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Rx.Scheduler.queue")]),s._v(" "),a("td",[s._v("当前事件帧中的队列调度(蹦床调度器)。用于迭代操作。")])]),s._v(" "),a("tr",[a("td",[s._v("Rx.Scheduler.asap")]),s._v(" "),a("td",[s._v("微任务的队列调度，它使用可用的最快速的传输机制，比如 Node.js 的 process.nextTick() 或 Web Worker 的 MessageChannel 或 setTimeout 或其他。用于异步转换。")])]),s._v(" "),a("tr",[a("td",[s._v("Rx.Scheduler.async")]),s._v(" "),a("td",[s._v("使用 setInterval 的调度。用于基于时间的操作符。")])])])]),s._v(" "),a("h2",{attrs:{id:"小示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小示例","aria-hidden":"true"}},[s._v("#")]),s._v(" 小示例")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//第一步，创建一个可观察对象（也可以通过fromEvent...）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" observable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("observer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用操作符过滤观察流")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//让流变为异步")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" subject "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增加两个监听函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("observer1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("observer2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'监听2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未使用subject传播")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var subscription1 = observable.subscribe(observer1);")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var subscription2 = observable.subscribe(observer2);")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用subject多播给多个观察者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" subscription1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("observer1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" subscription2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("observer2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobservable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'waibu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增加取消监听")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  subscription1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  subscription2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);