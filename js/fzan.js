// 定义复制文本的函数
function fz_html() {
    // 获取要复制的文本节点，自动解码HTML实体
    var text = document.getElementById("fz-html").textContent;
    // 使用navigator.clipboard.writeText来写入剪贴板
    navigator.clipboard.writeText(text).then(function () {
        console.log('文本复制成功');
    }).catch(function (err) {
        console.error('文本复制失败', err);
    });
}
function fz_css() {
    var text = document.getElementById("fz-css").textContent;
    navigator.clipboard.writeText(text).then(function () {
        console.log('文本复制成功');
    }).catch(function (err) {
        console.error('文本复制失败', err);
    });
}
function fz_js() {
    var text = document.getElementById("fz-js").textContent;
    navigator.clipboard.writeText(text).then(function () {
        console.log('文本复制成功');
    }).catch(function (err) {
        console.error('文本复制失败', err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-button');
    var menuList = document.querySelector('.menu-list');
    var menuItems = document.querySelectorAll('.menu-item');

    menuButton.addEventListener('click', function () {
        // 切换menu-button的active类
        menuButton.classList.toggle('active');
        // 显示或隐藏menu-list
        menuList.classList.toggle('active');

        // 如果菜单是激活状态，延迟显示菜单项
        if (menuList.classList.contains('active')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, 100 * index); // 每个菜单项延迟100ms显示
            });
        } else {
            // 如果菜单不是激活状态，移除菜单项的show类
            menuItems.forEach(item => {
                item.classList.remove('show');
            });
        }
    });
});