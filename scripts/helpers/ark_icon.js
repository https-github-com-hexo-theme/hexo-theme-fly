hexo.extend.helper.register('arkIcon', function() {
    var icon = [
        '#icon-fudai',
        '#icon-bianbao',
        '#icon-junzhou',
        '#icon-duilian',
        '#icon-hongbao',
        '#icon-tangguo',
        '#icon-qiandai',
        '#icon-facaidenglong',
        '#icon-shanzi',
    ]
    var index = Math.floor(Math.random() * icon.length);
    return icon[index]
});