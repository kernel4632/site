function 显示(id) {
    const 元素 = document.getElementById(id);
    元素.className = "显示";
    console.log('显示', id);
}

function 隐藏(id) {
    window.scrollTo(0, 0);
    const 元素 = document.getElementById(id);
    元素.className = "隐藏";
    console.log('隐藏', id);
}

function 添加卡片(昵称, 简介内容, 图标, 网址, 父元素, 卡名) {
    const 容器 = document.getElementById(父元素);
    const 卡片 = document.createElement('div');
    卡片.className = 卡名;
    const 头像 = document.createElement('img');
    //判断是否为网址，如果是就链接到网址，如果不是就加载本地资源
    if (图标.startsWith("http")) {
        头像.src = 图标;
    }else{
         头像.src = `资源/${图标}`;
    }
    头像.alt = "头像";
    头像.className = "头像";
    const 名字 = document.createElement('h1');
    名字.innerText = 昵称;
    const 简介 = document.createElement('span');
    简介.innerText = 简介内容;
    if (网址 !== "#") {
        卡片.onclick = () => {
            window.open(网址);
        };
    }
    卡片.appendChild(头像);
    卡片.appendChild(名字);
    卡片.appendChild(简介);
    容器.appendChild(卡片);
    console.log('添加卡片', 名字, 头像, 简介, 网址);
}

const 友情链接 = [
    {
        "名字": "zmh-program",
        "简介": "我最敬佩的年轻程序员",
        "头像": "zmh-program.webp",
        "链接": "https://zmh-program.site/"
    },
    {
        "名字": "ZANE",
        "简介": "我觉得挺有个性的开发者",
        "头像": "zane.jpg",
        "链接": "https://chzane.github.io"
    },
    {
        "名字": "Pinpe",
        "简介": "热衷于探索前端和游戏开发领域的一名初三生",
        "头像": "pinpe.jpg",
        "链接": "https://pinpe.top"
    },
    {
        "名字": "Error",
        "简介": "",
        "头像": "https://cdnjson.com/images/2024/03/24/c690bbba40206ec40f4a7fd70e24d4d147639731478290149953bee35.jpg",
        "链接": "https://error5.cn:404"
    },
    {
        "名字": "浪海导航",
        "简介": "收录各种类型的博客以及论坛网站",
        "头像": "浪海.png",
        "链接": "https://www.langhai.net/"
    },
    {
        "名字": "茶兔社区",
        "简介": "全网资源聚合平台",
        "头像": "https://cdnjson.com/images/2024/03/23/b0dcf4c4ad483712dc85d918ac9c4bdc91638266d6251f27.jpg",
        "链接": "https://www.teatu.cn"
    },
    {
        "名字": "柒貮柒",
        "简介": "一只漂泊的喵～",
        "头像": "https://q1.qlogo.cn/g?b=qq&nk=2774787624&s=4",
        "链接": "https://www.cat727.com/"
    },
    {
        "名字": "雨云谷网络",
        "简介": "由一群网络爱好者组成的团队",
        "头像": "https://q1.qlogo.cn/g?b=qq&nk=917756877&s=640",
        "链接": "https://www.yuyungu.com/"
    }
];

友情链接.forEach(link => {
    添加卡片(link.名字, link.简介, link.头像, link.链接, "链接", "卡片");
});

const 项目 = [
    {
        "项目名": "金文",
        "简介": "设计开发新时代通用编程语言",
        "图标": "金文.svg",
        "网址": "#"
    },
    {
        "项目名": "超级鹦鹉",
        "简介": "设计新型通用人工智能模型",
        "图标": "超级鹦鹉.svg",
        "网址": "#"
    },
    {
        "项目名": "超级终端",
        "简介": "构建新型计算机结构",
        "图标": "终端.svg",
        "网址": "#"
    }
];

项目.forEach(project => {
    添加卡片(project.项目名, project.简介, project.图标, project.网址, "项目", "卡片");
});
