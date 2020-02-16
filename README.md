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