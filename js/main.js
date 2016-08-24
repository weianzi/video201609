$(function() {

    var $box = $('#pageletListContent > ul');
    var $tabBtn = $('#top_menu .btn');
    renderVideoList(data[0])
    $tabBtn.each(function(index) {
        $(this).click(function() {
            $(this).addClass('cur').siblings().removeClass('cur');
            renderVideoList(data[index]);
        })
    });

    function renderVideoList(mydata) {
        var html = '';
        $.map(mydata, function(item) {
            html += '<li>\
            <div class="list_img_holder">\
                <video preload="auto" controls="controls" poster="' + item.poster + '">\
                    <source src="' + item.video + '" type="video/mp4">\
                </video>\
            </div>\
            <h3>' + item.title + '</h3>\
        </li>'
        });
        $box.html(html);
    }

});
var data = [
    [{
        title: 'video-2016-03-22-09-00-55',
        video: 'http://7xt0ex.com1.z0.glb.clouddn.com/video-2016-03-22-09-00-55.mp4',
        poster: '',
    }],
    [{
        title: 'video-2016-03-22-09-05-50',
        video: 'http://7xt0ex.com1.z0.glb.clouddn.com/video-2016-03-22-09-05-50.mp4',
        poster: '',
    }, {
        title: 'video-2016-03-22-09-08-40',
        video: 'http://7xt0ex.com1.z0.glb.clouddn.com/video-2016-03-22-09-08-40.mp4',
        poster: '',
    }],
    [{
        title: 'video-2016-03-22-09-12-37',
        video: 'http://7xt0ex.com1.z0.glb.clouddn.com/video-2016-03-22-09-12-37.mp4',
        poster: '',
    }]
];
