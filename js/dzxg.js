//打字
const DZ = document.getElementById('dz'); // 获取显示打字的元素
//正文
const ZW = ['你好！欢迎来到此页面！！！', '此页面展示web前端课程项目二内容！！！', '内容逐步完善中，敬请期待！！！', '网页制作还在努力学习中！！！', '以下案例均仅供学习使用！！！']; // 设置文本数组
let index = 0; // 初始化索引
let currentText = ''; // 当前显示的文本
let isTyping = true; // 打字还是删除
function type() {
    if (isTyping) {
        // 如果是打字状态
        currentText += ZW[index].charAt(currentText.length); // 添加下一个字符
        DZ.textContent = currentText; // 更新显示文本
        if (currentText === ZW[index]) {
            // 如果文本打完，切换到删除状态
            isTyping = false;
        }
    } else {
        // 如果不是打字状态（删除状态）
        currentText = currentText.slice(0, -1); // 删除最后一个字符
        DZ.textContent = currentText; // 更新显示文本
        if (currentText === '') {
            // 如果文本删除完毕，随机选择下一个文本，并切换到打字状态
            index = Math.floor(Math.random() * ZW.length); // 随机选择索引
            isTyping = true;
        }
    }
    setTimeout(type, isTyping ? 350 : 100); // 设置打字和删除的时间间隔
}
type(); // 开始打字效果