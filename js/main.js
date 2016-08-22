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
        title: '11',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }, {
        title: 'XXX',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }, {
        title: 'XXX',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }],
    [{
        title: '2222',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }, {
        title: '222222',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }, {
        title: '22222',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }],
    [{
        title: '33',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }, {
        title: '33',
        video: 'http://obditc4t5.bkt.clouddn.com/full.mp4',
        poster: 'http://v11.pfs.56img.com/images/27/5/qq987564321i56olo56i56.com_141300459978hd_m.jpg',
    }]
];
