var fhan = document.getElementById('fh');
// 点击事件
fhan.addEventListener('click', function () {
    // 用history对象的back方法返回上级页面
    history.back();
});