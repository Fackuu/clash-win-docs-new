(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{426:function(e,s,t){"use strict";t.r(s);var a=t(28),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#macos-版本启动要求授权"}},[e._v("macOS 版本启动要求授权")])]),t("li",[t("a",{attrs:{href:"#macos-dmg-安装后无法打开-提示损坏"}},[e._v("macOS DMG 安装后无法打开，提示损坏")])]),t("li",[t("a",{attrs:{href:"#系统代理自动关闭或打开"}},[e._v("系统代理自动关闭或打开")])]),t("li",[t("a",{attrs:{href:"#general-端口显示为-0"}},[e._v("General 端口显示为 0")])]),t("li",[t("a",{attrs:{href:"#killer-系列网卡无法开启-tap-tun-模式"}},[e._v("Killer 系列网卡无法开启 TAP/TUN 模式")])]),t("li",[t("a",{attrs:{href:"#service-mode-无法安装-windows"}},[e._v("Service Mode 无法安装（Windows）")])]),t("li",[t("a",{attrs:{href:"#在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[e._v("在 Windows 系统中，使用 system 作为 TUN stack 时，Clash 网卡无法正常工作")])])])]),t("p"),e._v(" "),t("h3",{attrs:{id:"macos-版本启动要求授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-版本启动要求授权"}},[e._v("#")]),e._v(" macOS 版本启动要求授权")]),e._v(" "),t("question-answer",[t("p",[e._v("在第一次或更新 APP 后打开软件会提示用户授权，这是因为需要安装/更新用于设置系统代理的工具，如果不进行授权，General 中的 System Proxy 开关将无法打开。一般情况下，除非工具更新，否则除了第一次启动外不会重复需要授权。")])]),e._v(" "),t("h3",{attrs:{id:"macos-dmg-安装后无法打开-提示损坏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-dmg-安装后无法打开-提示损坏"}},[e._v("#")]),e._v(" macOS DMG 安装后无法打开，提示损坏")]),e._v(" "),t("question-answer",[t("p",[e._v("网络下载应用被 Apple 添加隔离标识，终端输入命令解除即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ for\\ Windows.app\n")])])])]),e._v(" "),t("h3",{attrs:{id:"系统代理自动关闭或打开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统代理自动关闭或打开"}},[e._v("#")]),e._v(" 系统代理自动关闭或打开")]),e._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/312",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"general-端口显示为-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-端口显示为-0"}},[e._v("#")]),e._v(" General 端口显示为 0")]),e._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/671",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"killer-系列网卡无法开启-tap-tun-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#killer-系列网卡无法开启-tap-tun-模式"}},[e._v("#")]),e._v(" Killer 系列网卡无法开启 TAP/TUN 模式")]),e._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1243#issuecomment-751165537",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"service-mode-无法安装-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-mode-无法安装-windows"}},[e._v("#")]),e._v(" Service Mode 无法安装（Windows）")]),e._v(" "),t("question-answer",[t("p",[e._v("先确定系统安装了"),t("code",[e._v(".NET framework runtime")])]),e._v(" "),t("p",[e._v("然后尝试手动安装：")]),e._v(" "),t("ol",[t("li",[e._v("点击 General 中的 Home Directory 打开文件夹，进入 service 子目录中")]),e._v(" "),t("li",[e._v("打开 CMD，执行以下命令：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("service.exe install\nservice.exe start\n")])])]),t("p",[e._v("如安装出现错误，参考"),t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1627",target:"_blank",rel:"noopener noreferrer"}},[e._v("这个 issue"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[e._v("#")]),e._v(" 在 Windows 系统中，使用 system 作为 TUN stack 时，Clash 网卡无法正常工作")]),e._v(" "),t("question-answer",[t("p",[e._v("当前版本下，使用"),t("code",[e._v("system")]),e._v("作为 TUN stack 时，需要在系统防火墙中将 Clash core 放行。"),t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1936#issuecomment-853226838",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);