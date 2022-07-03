export const V2022_2 = {
    2: {
      type: "non_expirement",
      title: "第二章 JS基础以及HTML, CSS",
      topics: [
        "JS是如何引领前端开发数十年的？",
        "什么是npm,  node.js? 常用包？ 如何部署环境？",
        "JS基础数据类型, 循环、分支、解构赋值语法以及声明方式",
        "JS原生数据结构",
        "函数式编程与箭头函数",
        "什么是 DOM？",
        "HTML的行状元素，块状元素与可变元素",
        "CSS中的盒模型与flex布局",
      ]
    },
    3: {
      type: "non_expirement",
      title: "第三章 React",
      topics: [
        "什么是React? 如何用OOD思想去理解一个Component?",
        "React 中的生命周期以及状态",
        "React Hook 是想要给前端带来何种变革？",
        "如何在React.js 以及 React Hook中进行开发",
      ]
    },
    4: {
      type: "expirement",
      title: "实验课1",
      subtitle: "选课系统前端部分1 - 基础页面的展示",
      topics: [
        "选课系统前端实验课分为两个部分，本节实验课是用React框架重构实验课1的内容，引入了React Router, axios, Material UI等现代框架/包替换原生解决方案.",
        "实践React工作流程(workflow)",
        "实战配置React router，分析React router带来的好处",
        "使用Material UI作为CSS库美化页面",
      ]
    },
    5: {
      type: "expirement",
      title: "实验课2",
      subtitle: "制作COVID case map",
      topics: [
        "本节实验课的目的是通过React与Google Map合用，展示covid19的case",
        "实践React工作流程(workflow)",
        "如何申请一个Google Map API key",
        "如何通过AJAX将数据展示在地图上",
        "[可选额外内容]：根据缩放动态展示国家/洲/县数据",
      ]
    },
    6: {
      type: "non_expirement",
      title: "第四章 Spring Boot",
      topics: [
        "什么是Spring? 为什么要用Spring?",
        "什么是Spring中的控制反转(IoC) 和依赖注入(DI) 以及面向切片编程(AOP)?",
        "SOLID原则如何帮助我们更好的进行开发？",
        "如何创建一个Spring Boot项目。Springboot 和Spring的区别是什么？",
        "什么是Bean? 如何声明一个Bean? Bean的生命周期?",
        "Spring是如何对不同的业务逻辑进行代码结构分割的？",
        "什么是RESTful API? 什么是CRUD(增删改查)？",
        "RESTful API的优缺点？什么是GraphQL?"
      ]
    },
    7: {
      type: "expirement",
      title: "实验课3",
      subtitle: "选课系统后端部分1: 设计RESTful API，返回in memory数据库的内容",
      topics: [
        "后端分为两部分，本节实验课重点在Controller层与Service层，即各层的职责与RESTful API的设计实战。",
        "为什么要使用JHipster?业内也使用框架生成器吗？",
        "怎样设计RESTful API？",
        "Spring中怎样接收Request body?",
        "Spring中怎样返回JSON?",
        "使用Postman测试接口",
        "Lombok是什么？怎样使用？",
        "[可选额外内容]@Data干什么用的？hashCode和equals行为为什么要一致？@Builder是什么设计模式？",
      ]
    },
    8: {
      type: "non_expirement",
      title: "第五章 MySQL与Hibernate",
      topics: [
        "数据库基础：事务性与ACID原则",
        "数据库基础：主键，外键与索引",
        "数据库基础：三范式、一对多与多对多",
        "什么是Hibernate?与JPA, JDBC之间的关系？",
        "Hibernate的数据库连接",
        "Hibernate的ORM绑定",
        "Hibernate的Repository层实现 ：CRUD操作",
      ]
    },
    9: {
      type: "expirement",
      title: "实验课4",
      subtitle: "选课系统后端部分2 ：Hibernate的ORM绑定，从MySQL数据库拿取数据",
      topics: [
        "后端分为两部分，本节实验课重点在Repository层，即ORM绑定，以及Repository层的实现。以及后端总体流程串讲。",
        "从零实战ORM绑定操作：主键绑定，外键绑定",
        "怎样实现Repository层？哪些是自带操作？怎样实现自定义操作？",
        "后端整合测试",
        "Controller<->Service<->Repository后端流程总结",
        "后端debug",
      ]
    },
    10: {
      type: "expirement",
      title: "实验课5",
      subtitle: "选课系统前端部分2 - 实现登录, cookies存储，前后端整合，实现选课，删课功能",
      topics: [
        "前端实验课分为两个部分，本节实验课是实现登录功能，以及对token的存储。",
        "借助Reactor Router设计login界面",
        "错误消息处理与展示，UI loading状态处理",
        "什么是cookies？怎样存储，读取，销毁cookies",
        "前端是如何连接后端的？全栈概念图串解",
        "分析选课、删课的按钮功能应该由谁实现？如何优雅的传递回调函数？",
        "错误消息处理与展示，UI loading状态处理",
      ]
    },
    11: {
        type: "expirement",
        title: "实验课6-a",
        subtitle: "选课系统云部署 - 理论+试验录屏",
        topics: [
          "安装各种AWS部署工具",
          "AWS VPC，Security Group简介",
          "什么是Docker?和VM对比优势？",
          "在RDS上新建一个MySQL数据库",
          "使用jib将后端打包至docker镜像，并发布到AWS ECR上",
          "将前端部署至S3,后端部署至ECS",
        ]
      },
    12: {
        type: "expirement",
        title: "实验课6-b",
        subtitle: "选课系统云部署 - Q&A 答疑",
        topics: [
          "一对一针对部署试验答疑debug",
          "回顾面试中可能问到的云部署知识点",
        ]
      },
    13: {
        type: "non_expirement",
        title: "第六章 node.js/GraphQL",
        subtitle: "后端如果用node.js来做会怎么样",
        topics: [
          "node.js的本质是什么",
          "node.js和spring相比优劣势分别是什么",
          "GraphQL和RESTful相比优劣势分别是什么",
          "如果用node.js + RESTful来再做一遍后端应该怎样做?"
        ]
      },
    14: {
      type: "non_expirement",
      title: "第七章 系统设计以及优化",
      topics: [
        "优化的本质是压榨系统性能外加合理利用各种服务以及模型。",
        "什么是Cache, 什么是Strategy? Cashe的种类？",
        "什么是多线程？什么是同步异步？",
        "如何设计一个系统？通常步骤是什么？",
        "现场分组设计近期高频系统设计题并分析总结",
      ]
    },
  }