ionic
------------
基于V3.18.0的ionic app练手踩坑之路

依赖
------------
node V8.9.0   npm V5.5.1

Get Start
------------
需要执行npm install</br>
       npm install ionic </br>
运行项目  ionic serve

genymotion模拟器运行
------------
1、cordova V7.1.0 </br>
2、添加安卓平台 ionic cordova platform add android </br>
3、模拟器运行(热部署) ionic cordova run android --livereload </br>
4、android-sdk 可以自行下载安装（依赖android API 26）

ionic相关命令
------------
npm install -g cnpm –registry=https://registry.npm.taobao.org（npm镜像源指向淘宝）</br>

cnpm install -g cordova ionic（安装cordova ionic）</br>

cnpm update -g cordova ionic（更新cordova ionic）</br>

ionic -help（查看帮助）</br>

ionic -v（查看版本）</br>

ionic start myionictest blank（空项目）</br>

ionic start myionictest tabs（带导航条）</br>

ionic start myionictest sidemenu（带侧滑菜单）</br>

ionic g page login(添加页面)</br>

ionic g provider BaseService(添加服务端口)</br>

ionic platform add android（添加android平台）</br>

ionic platform removeandroid（移除android平台）</br>

ionic build android（编译项目apk）</br>

ionic emulate android（运行项目apk 手机连接在手机运行模拟器连接在模拟器运行）</br>

ionic run android （相当于build + emulate）</br>

ionic serve（开启服务调试）</br>

ionic cordova build android –prod 加开App启动速度</br>

ionic g page YourPageName //创建新页面</br>

ionic g directive YourPageName //创建指令</br>

ionic g component YourComponentName //创建组件</br>

ionic g provider YourProviderName //创建服务</br>

ionic g pipe YourPipeName //创建过滤器</br>


