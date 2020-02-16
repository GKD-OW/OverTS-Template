# OverTS

使用步骤：
* [安装NodeJS](https://blog.csdn.net/cai454692590/article/details/86093297)
* [安装Yarn](https://blog.csdn.net/yw00yw/article/details/81354533)
* [下载整个项目](https://github.com/GKD-OW/OverTS-Template/archive/master.zip)，并解压到任意文件夹
* 使用命令行（CMD、PowerShell等）进入该文件夹，运行`yarn install`
  * 如果提示“yarn不是内部或外部命令……”或者类似提示，说明Yarn没有安装好，请回到第二步
* 用任意编辑器（推荐Visual Studio Code）打开`src/index.ts`，编写相关代码
* 在命令行中运行`yarn build`，若编译成功，则会在`dist/index.ow`中生成结果
* 如果需要修改编译语言，请修改`overts.config.js`中的`locale`项目

## 语法限制
* 不能调用JS原生函数
* 不支持import/require等方式导入其他模块
* 函数会被编译成子程序，因此不支持函数返回值
* 不支持函数内声明变量
* 不支持类属性
* 不支持类中编写静态函数
* 不支持跨类调用函数，但可以将函数写在最外层（即不属于任何类），再进行调用
* const只能在最顶级或者函数内的顶级定义
* 暂不支持for循环和do-while循环