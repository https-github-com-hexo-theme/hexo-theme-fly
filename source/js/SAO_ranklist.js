//根据血量调整血条颜色
function hpFill() {
    var rankItem = document.getElementById('SAO-ranklist').querySelectorAll('.HP-fill');
    for (var i = 0; i < rankItem.length; i++) {
        var itemWidth = Number(rankItem[i].style.width.replace("%", ""));
        // console.log(itemWidth);
        if (itemWidth < 30) {
            rankItem[i].querySelector('.HP-fill-in').classList.add('HP-danger');
        } else if ((itemWidth >= 30) && (itemWidth < 60)) {
            rankItem[i].querySelector('.HP-fill-in').classList.add('HP-warning');
        } else {
            rankItem[i].querySelector('.HP-fill-in').classList.add('HP-health');
        }
    }
}
// 控制显隐逻辑
function RanklistBtn() {
    if (/Android|webOS|BlackBerry/i.test(navigator.userAgent)) return true; //媒体选择
    var hasRanklist = document.getElementById('SAO-ranklist');
    // 当元素存在的情况下
    if (hasRanklist) {
        // 若已经处于显示状态则隐藏
        if (hasRanklist.className.indexOf('active-SAO-ranklist') > -1) {
            hasRanklist.classList.remove("active-SAO-ranklist");
        }
        // 否则激活
        else {
            hpFill();
            hasRanklist.classList.add("active-SAO-ranklist");
        }
    }
}