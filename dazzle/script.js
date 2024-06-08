const progressBar = document.getElementById('进度条');

window.addEventListener('load', () => {
  progressBar.value = 100;
});

document.addEventListener('readystatechange', () => {
  const progress = Math.floor((document.readyState / 4) * 100);
  progressBar.value = progress;
});

function 添加作品(作品名, 简介, 图标路径, 链接) {
    const 作品卡 = document.createElement('div');
    作品卡.className = "作品卡";

    const 状态 = document.createElement('span');
    if (链接 == "#") {
        作品卡.classList.add("项目制作中");
        状态.className = "制作中";
    } else {
        作品卡.classList.add("项目已完成");
        状态.className = "已完成";
    }
    const 图标元素 = document.createElement('img');
    图标元素.src = 图标路径;
    图标元素.className = "图标";

    const 作品名元素 = document.createElement('h3');
    作品名元素.innerText = 作品名;
    作品名元素.className = "作品名";

    const 简介元素 = document.createElement('p');
    简介元素.innerText = 简介;
    简介元素.className = "简介";

    作品卡.appendChild(图标元素);
    作品卡.appendChild(作品名元素);
    作品卡.appendChild(简介元素);
    作品卡.appendChild(状态);
    const 作品页 = document.getElementById("作品");
    作品页.appendChild(作品卡);

    作品卡.addEventListener("click", () => {
        if (链接 !== "#") {
            window.open(链接);
        }

    });
}
function 添加友情卡(头像图标, 名称, 简介内容, 链接) {
    const 友情卡 = document.createElement('div');
    友情卡.className = "友情卡"
    const 头像 = document.createElement('img');
    头像.src = 头像图标;
    头像.className = "头像"
    const 名字 = document.createElement('h3');
    名字.innerText = 名称;
    名字.className = "名字"
    const 简介 = document.createElement('p');
    简介.innerText = 简介内容;
    简介.className = "简介"
    友情卡.appendChild(头像);
    友情卡.appendChild(名字);
    友情卡.appendChild(简介);
    const 友情链接页 = document.getElementById("链接")
    友情链接页.appendChild(友情卡);
    友情卡.addEventListener("click", () => {
        if (链接 !== "#") {
            window.open(链接);
        }
    })

}


window.onload = () => {



添加作品("灵阁", "线上多行业研究实验室", "资源/灵阁.svg", "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=g3vVOO-L6jmhuyRRfgtcVlbm98gvgZpp&authKey=O9i60z2Rji52mcQGOcO1cO7cGErOnFShRs1bKrEQ1HkBRMQe7OXjo8Xnx9JIXTSv&noverify=0&group_code=135896380")
添加作品("超级鹦鹉", "通用人工智能模型", "资源/超级鹦鹉.svg", "#")
添加作品("脑图码器", "使用思维导图构建程序", "资源/思维导图.svg", "#")
添加作品("磁带", "更简单易用的音乐编辑器", "资源/磁带.svg", "#")
添加作品("广告牌", "专门放置广告的平台", "资源/广告牌.svg", "#")
添加作品("金文", "中文化、语句化编程语言", "资源/金文.svg", "#")

添加友情卡("资源/zmh-program.webp", "zmh-program", "我最敬佩的程序员", "https://zmh-program.site/")
添加友情卡("资源/培根.jpg", "培根不好吃", "我初中最好的朋友", "#")
添加友情卡("资源/二氧化硫.jpg", "二氧化硫", "我见过最善良的女孩", "#")
添加友情卡("资源/zane.jpg", "ZANE", "游戏开发的好手", "https://chzane.github.io")
添加友情卡("资源/pinpe.jpg", "Pinpe", "强大的网友", "https://pinpe.top")
添加友情卡("资源/黎卓锴.jpg", "加强天道超", "我高中最好的朋友", "#")
添加友情卡("https://www.langhai.net/assets/images/langhai-logo.png", "浪海导航", "收录各种类型的博客以及论坛网站", "https://www.langhai.net/")

const 封面 = document.getElementById('封面');
封面.style.height = '0px';

document.getElementById("按钮").addEventListener("click", () => {
    const 详细页 = document.getElementById("详细")
    详细页.className = "显示"
})
document.getElementById("关闭").addEventListener("click", () => {
    const 详细页 = document.getElementById("详细")
    详细页.className = "隐藏"
})

}
