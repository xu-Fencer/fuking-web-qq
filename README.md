# FUKING-WEB-QQ1.0

~~这个名字懂的都懂~~

项目使用的主要几个开源项目

[mamoe/mirai](https://github.com/mamoe/mirai)

[mamoe/mirai-console](https://github.com/mamoe/mirai-console)

[mamoe/mirai-api-http](https://github.com/mamoe/mirai-api-http)


## 0.写在前面
我会从需求，效果和如何实现三个方面来介绍
- 需求：

是在18年的暑假，参加了一个高中的oi集训营，不让带手机，有天中午午休看到一个姐姐在聊天，用webqq

那是对webqq最早的了解

2019.1.1就停运了（悲

有需求是从用linux开始，因为wine不稳定，deepin-wine-qq每次装都要解决好多依赖问题

linux qq又做的特别拉（恼，像复刻了10年的东西一样

想要一个简单的在能linux上运行qq的东西

~~后来用deepin-wine-tim养老到现在~~

然后是在这个寒假，因为马上中考了肯定不能花很长时间看手机电脑了，所以安装一个qq软件是不可能的

但是我还想摸鱼怎么办，那就用一个不需要安装软件的qq呗，那就是webqq

那就用webqq呗，不过仔细想一想这东西不能应急，就跟pc微信一样，必须要手机才能登录

至少需要在这个设备上登一次qq

那我的第二个需求就来了

我 不 想 浪 费 空 间

不知道为什么都要把软件做的都那么大

对于手机：50MB一下我完全可以接受，100MB左右我会考虑考虑是不是必要的或者占这么大的存储空间能不能发挥很大的左右，300MB我会找别的替代品，再大一般就是游戏了，就完全不需要了

对于电脑：其实没啥要求，一个gal带语音3GB都没问题，一个ide功能多点1GB没问题~~，只是现在50MB的软件不用我都得删因为20GB ubuntu开始扛不住了~~

而且我觉得有些东西我可以扔给服务器做

不需要客户端做那么多

服务器干什么，传数据吗，又不是交换机

嘛，还有个需求就是我想要全平台都能用，win mac两家独大

很多常用软件没linux版（感谢开源，开源万岁）

- 效果：

实现多账号登录（就是不只是我一个人用）

仅供聊天，没有其他无聊功能

（所有功能都基于http-api，它没有的我也不可能有


- 实现

基于Mirai，使用js+http SDK

前端js+html

后端mirai-http-api

（好家伙这README就是来讲故事了

## 1.后端
~~为什么先写后端呢，因为前端太简单了，而且需要看后端能留出什么样的api~~

突然意识到后端不需要我写，有大佬开发了http-api

所有调用全部基于http-api


## 2.前端
能看就行

使用js，利用XMLHTTTPRequest链接mirai-http-api

## TODO
- [x] 阅读所有有用的Mirai文档
- [ ] 用js实现基本mirai-http-api
- [ ] 加入async实现Sending()
- [ ] 使用websocket通讯/手动/自动刷新接收消息
- [ ] 用js实现所有api
- [ ] 多账号，多客户端使用
