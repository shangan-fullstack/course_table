export const P12 = [
    {
        type: "non_expirement",
        startTime: "2021-05-01 10:00",
        endTime: "2021-05-01 12:00",
        timezone: "America/Los_Angeles",
        title: "第二章 JS基础（一）",
        topics: [
            "什么是Node.js？Node.js安装",
            "const/let/var",
            "JS 7大基础数据类型",
            "JS==与===与类型转换",
            "循环、分支、解构赋值语法",
            "Object与函数：构造函数，闭包、IIFE、原型链",
        ]
    },
    {
        type: "non_expirement",
        startTime: "2021-05-02 10:00",
        endTime: "2021-05-02 12:00",
        timezone: "America/Los_Angeles",
        title: "第三章 JS基础（二）",
        topics: [
            "闭包",
            "JS class",
            "JS原生数据结构",
            "函数式编程与箭头函数",
            "Ajax"
        ]
    },
    {
        type: "non_expirement",
        startTime: "2021-05-02 14:00",
        endTime: "2021-05-02 16:00",
        timezone: "America/Los_Angeles",
        title: "第四章 HTML,CSS及React",
        topics: [
            "HTML是一棵树",
            "HTML行状元素，块状元素与可变元素",
            "HTML基础组件",
            "CSS基础：盒模型与flex布局",
            "什么是React?什么是JSX?",
            "React生命周期",
        ]
    },
    {
        type: "non_expirement",
        startTime: "2021-05-08 10:00",
        endTime: "2021-05-08 12:00",
        timezone: "America/Los_Angeles",
        title: "第五章 React",
        topics: [
            "state与props",
            "创建一个React项目",
            "React Hook"
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-08 14:00",
        endTime: "2021-05-08 17:00",
        timezone: "America/Los_Angeles",
        title: "实验课1",
        subtitle: "选课系统前端部分1 - 基础页面的展示",
        topics: [
            "选课系统前端实验课分为三个部分，本节实验课是用React框架重构实验课1的内容，引入了React Router, axios, Material UI等现代框架/包替换原生解决方案.",
            "实践React工作流程(workflow)",
            "实战配置React router，分析React router带来的好处",
            "[可选额外内容]探索axios源码，了解axios对XMLHttpRequest与Promise封装的实质",
            "使用Material UI作为CSS库美化页面",
            "借助Material UI，实现挂羊头卖狗肉功能",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-09 14:00",
        endTime: "2021-05-09 17:00",
        timezone: "America/Los_Angeles",
        title: "实验课2",
        subtitle: "制作COVID case map",
        topics: [
            "本节实验课的目的是通过React与Google Map合用，展示covid19的case",
            "实践React工作流程(workflow)",
            "如何申请一个Google Map API key",
            "如何通过AJAX将数据展示在地图上",
            "[可选额外内容]：根据缩放动态展示国家/洲/县数据"
        ]
    },
    {
        type: "non_expirement",
        startTime: "2021-05-15 10:00",
        endTime: "2021-05-15 12:00",
        timezone: "America/Los_Angeles",
        title: "第六章 Django",
        topics: [
            "Django 核心内容介绍",
            "OOP核心原则：SOLID",
            "创建一个Django项目",
            "Django Model, View, Template (MVT)分别做什么?",
            "Django中的routing",
            "什么是RESTful API?什么是CRUD(增删改查)？",
            "Django Rest Framework(DRF) 能为我们做什么？",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-15 14:00",
        endTime: "2021-05-15 17:00",
        timezone: "America/Los_Angeles",
        title: "实验课3",
        subtitle: "选课系统后端部分1：设计RESTful API，返回in memory数据库的内容",
        topics: [
            "后端分为两部分，本节实验课重点在实现Views与Routing，与RESTful API的设计实战。",
            "安装后端环境和依赖。为何使用Python Virtural Environment (venv)?",
            "怎样设计RESTful API？",
            "Django中怎样接收Request body? 怎样返回JSON?",
            "运用DRF API来实现接收和返回",
            "使用Postman测试接口",
        ]
    },
    {
        type: "non_expirement",
        startTime: "2021-05-16 10:00",
        endTime: "2021-05-16 12:30",
        timezone: "America/Los_Angeles",
        title: "第七章 Mysql与Django Models",
        topics: [
            "数据库基础：事务性与ACID原则",
            "数据库基础：主键，外键与索引",
            "数据库基础：三范式、一对多与多对多",
            "Django绑定数据库",
            "安装MySQL Client并与Django绑定数据库",
            "Django.db Model 的ORM绑定",
            "如何通过QuerySet进行CRUD操作？",
            "如何通过创建serializer进行数据的序列化与反序列化？",
            "配置Django Admin，利用Admin tool查看数据",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-22 10:00",
        endTime: "2021-05-22 12:30",
        timezone: "America/Los_Angeles",
        title: "实验课4",
        subtitle: "选课系统后端部分2：Hibernate的ORM绑定，从MySQL数据库拿取数据",
        topics: [
            "后端分为两部分，本节实验课重点在Models，即ORM绑定，以及Serializer的实现。以及后端总体流程串讲。",
            "从零实战ORM绑定操作：主键绑定，外键绑定",
            "通过Migrations将ORM应用到数据库中",
            "利用DRF API创建Model Serializers，并应用到CRUD操作中",
            "后端整合测试与后端流程总结",
            "后端debug",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-23 09:00",
        endTime: "2021-05-23 12:00",
        timezone: "America/Los_Angeles",
        title: "实验课5",
        subtitle: "选课系统前端部分2 - 实现登录, cookies存储，前后端整合",
        topics: [
            "前端实验课分为三个部分，本节实验课是实现登录功能，以及对token的存储。",
            "借助React Router设计login界面",
            "通过JWT验证用户身份",
            "错误消息处理与展示，UI loading状态处理",
            "什么是cookies？怎样存储，读取，销毁cookies",
            "前端是如何连接后端的？全栈概念图串解",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-23 14:00",
        endTime: "2021-05-23 17:00",
        timezone: "America/Los_Angeles",
        title: "实验课6",
        subtitle: "选课系统前端部分3 - 实现选课，删课功能",
        topics: [
            "分析选课、删课的按钮功能应该由谁实现？如何优雅的传递回调函数？",
            "错误消息处理与展示，UI loading状态处理",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-29 09:00",
        endTime: "2021-05-29 12:00",
        timezone: "America/Los_Angeles",
        title: "实验课7",
        subtitle: "选课系统云部署1",
        topics: [
            "安装各种AWS部署工具",
            "AWS VPC，Security Group简介",
            "什么是Docker?和VM对比优势？",
            "什么是Kubernetes？Kubernetes基础术语",
            "在RDS上新建一个MySQL数据库",
            "将后端打包至docker镜像，并发布到AWS ECR上",
        ]
    },
    {
        type: "expirement",
        startTime: "2021-05-30 09:00",
        endTime: "2021-05-30 12:00",
        timezone: "America/Los_Angeles",
        title: "实验课8",
        subtitle: "选课系统云部署2与课程答疑",
        topics: [
            "申请一个新的EKS集群，配置kubernetes dashboard",
            "配置选课系统的deployment, service和ingress(load balancer)并部署",
            "修改后端服务器地址，并将前端放到S3上",
            "销毁所有AWS资源",
            "答疑",
        ]
    },
];