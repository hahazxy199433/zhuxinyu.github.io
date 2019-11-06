(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux预读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux预读","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux预读")]),a._v(" "),t("h2",{attrs:{id:"认识linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识linux","aria-hidden":"true"}},[a._v("#")]),a._v(" 认识Linux")]),a._v(" "),t("ul",[t("li",[a._v("Linux是什么")]),a._v(" "),t("li",[a._v("Linux与windows的区别")]),a._v(" "),t("li",[a._v("常用的Linux发行版")])]),a._v(" "),t("h2",{attrs:{id:"安装linux环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装linux环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装Linux环境")]),a._v(" "),t("h2",{attrs:{id:"认识linux环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识linux环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 认识Linux环境")]),a._v(" "),t("h2",{attrs:{id:"前端开发必须要懂的知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端开发必须要懂的知识","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端开发必须要懂的知识")]),a._v(" "),t("h3",{attrs:{id:"网络端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络端口","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络端口")]),a._v(" "),t("ul",[t("li",[a._v("什么是端口")])]),a._v(" "),t("p",[a._v("传输层有两种协议 TCP UDP，\n端口就是房子的门，房子很大，门很多，不同门的用途不同。每一个进程占用一个端口，端口属于独占资源。")]),a._v(" "),t("ul",[t("li",[a._v("端口冲突是怎么回事\n想用的端口已经被别的进程占用了。\n找到占用端口的进程，停掉服务，或者改自己的端口。")])]),a._v(" "),t("p",[a._v("发现端口冲突怎么办")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ss -an\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("显示计算机上打开的端口情况")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ss -an | grep 8080\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("查看8080端口是否被占用\ngrep是筛选的意思")]),a._v(" "),t("p",[a._v("kill PID 杀掉进程")]),a._v(" "),t("h3",{attrs:{id:"什么是服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是服务")]),a._v(" "),t("p",[a._v("服务管理")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl\nsystemctl start\nsystemctl stop\nsystemctl status 服务名称  // 查看服务是否开启\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"什么是终端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是终端","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是终端")]),a._v(" "),t("h2",{attrs:{id:"安装linux开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装linux开发环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装Linux开发环境")]),a._v(" "),t("h3",{attrs:{id:"安装node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装Node.js")]),a._v(" "),t("p",[a._v("yum"),t("a",{attrs:{href:"https://rpm.nodesource.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装方法"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 添加官方的yum源\ncurl -sL https://rpm.nodesource.com/setup_11.x | bash - \n# yum命令安装\nyum install -y nodejs \n#查看安装的版本\nnode -v\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"安装xampp集成开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装xampp集成开发环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装XAMPP集成开发环境")]),a._v(" "),t("p",[a._v("1、下载xampp")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.3.7/xampp-linux-x64-7.3.7-1-installer.run\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("2、安装前，需要先给xampp安装包可执行的权限")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("chmod 777 xampp-linux-x64-5.6.14-0-installer.run\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("3、运行 ./xampp-linux-x64-7.3.7-1-installer.run 进行安装操作。")]),a._v(" "),t("p",[a._v("相关命令：")]),a._v(" "),t("p",[a._v("启动xampp：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/opt/lampp/lampp start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("关闭xampp：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/opt/lampp/lampp stop\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("卸载xampp：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/opt/lampp/lampp stop\nrm -rf /opt/lampp\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"下载安装yii"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装yii","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载安装yii")]),a._v(" "),t("p",[a._v("进入 htdocs目录")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd opt/lampp/htdocs/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("下载basic")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget https://github.com/yiisoft/yii2/releases/download/2.0.17/yii-basic-app-2.0.17.tgz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("解压下载的文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar  zxvf yii-basic-app-2.0.24.tgz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("打开 basic/config/web.php 文件\n将'cookieVadationKey'=>''改成'cookieVadationKey'=>'110'(或者其他值)\n在浏览器中打开 http://localhost/basic/web/ 如果看到 congratulations 就成功了\n如果没成功，就跟着给不同的文件夹加权限就好了")]),a._v(" "),t("h3",{attrs:{id:"使用gii快速生成增删改查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用gii快速生成增删改查","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用gii快速生成增删改查")]),a._v(" "),t("p",[a._v("进入 http://localhost/basic/web/index.php?r=gii\n如果进不了，到 config/web.php下找到")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'allowedIPs'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'::1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'192.168.68.*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("将本机的ip加进去，就能访问gii了")]),a._v(" "),t("p",[a._v("先点击生成model\n将连接的数据库名和生成的model Class 名填好，Class名首字母大写其余小写，写好后preview")]),a._v(" "),t("p",[a._v("如果成功下面会出现生成按钮直接点生成。如果报错 给 runtime 和ventor 加权限\n如果提示无法写入model ,就继续给model加权限")]),a._v(" "),t("p",[a._v("接下来生成CRUD （增删改查）\n分别填写 刚刚创建的类名、search类名、controller类名\n切记：\n1.要在类名前添加路径，例如 app\\model\\Tbooks\n2.controller 的类名只有第一个首字母大写再加上Controller 例如 app\\controller\\TbooksSearch")])])},[],!1,null,null,null);s.default=n.exports}}]);