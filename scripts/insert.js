﻿window.onload = function() {
    /*************/
    /*コマンド作成*/
    /*************/
    //URL取得
    var head = "https://nhentai.net"
    var tmp = document.getElementById('cover').getElementsByTagName('a')[0].pathname;
    var url = head + tmp;
    console.log(url);
    //タイトル１取得
    //var ttl = document.getElementById('info').getElementsByTagName('h1')[0].innerHTML;
    var ttlarry = document.getElementById('info').getElementsByTagName('h1')[0].getElementsByClassName('pretty');
    var ttl = ttlarry[0].innerHTML;
    this.console.log(ttl);
    ttl = ttl.replace(/\[[^\]]*\]/g, '');
    ttl = ttl.replace(/\([^\)]*\)/g, '');
    ttl = ttl.replace('!', '！');
    ttl = ttl.replace('!', '！');
    ttl = ttl.replace('?', '？');
    ttl = ttl.replace('-', 'ー');
    ttl = ttl.replace('\'', '');
    ttl = ttl.replace(' ', '');
    ttl = ttl.replace(' ', '');
    ttl = ttl.replace(' ', '');
    ttl = ttl.replace(' ', '');
    ttl = ttl.replace(' ', '');
    ttl = ttl.replace('　', '');
    ttl = ttl.replace('コミック', 'COMIC');
    ttl = ttl.replace('comic', 'COMIC');
    ttl = ttl.replace('Comic', 'COMIC');
    // 2008-12 → 200812
    if (ttl.match(/\d\d\d\d.*\d\d/)) {
        var date = ttl.match(/(\d\d\d\d).*(\d\d)/);
        datestr = date[1] + date[2];
        ttl = ttl.replace(/\d\d\d\d.*\d\d/, datestr);
    }
    ttl = ttl.replace('PenguinClub', 'ペンギンクラブ');
    ttl = ttl.replace('PenguinClubSanzokuBan', 'ペンギンクラブ山賊版');
    ttl = ttl.replace('PenguinClubSanzokuban', 'ペンギンクラブ山賊版');
    //タイトル２取得
    if(document.getElementById('info').getElementsByTagName('h2')[0]) {
        //var ttl2 = document.getElementById('info').getElementsByTagName('h2')[0].innerHTML;
        var ttl2arry = document.getElementById('info').getElementsByTagName('h2')[0].getElementsByClassName('pretty');
        var ttl2 = ttl2arry[0].innerHTML;
        this.console.log(ttl2);
        ttl2 = ttl2.replace(/\[[^\]]*\]/g, '');
        ttl2 = ttl2.replace(/\([^\)]*\)/g, '');
        ttl2 = ttl2.replace('!', '！');
        ttl2 = ttl2.replace('!', '！');
        ttl2 = ttl2.replace('?', '？');
        //ttl2 = ttl2.replace('-', 'ー');
        ttl2 = ttl2.replace('\'', '');
        ttl2 = ttl2.replace(' ', '');
        ttl2 = ttl2.replace(' ', '');
        ttl2 = ttl2.replace(' ', '');
        ttl2 = ttl2.replace(' ', '');
        ttl2 = ttl2.replace(' ', '');
        ttl2 = ttl2.replace('　', '');
        ttl2 = ttl2.replace('*', '＊');
        ttl2 = ttl2.replace('Vol.', '');
        ttl2 = ttl2.replace('.', '');
        ttl2 = ttl2.replace('.', '');
        ttl2 = ttl2.replace('.', '');
        ttl2 = ttl2.replace('+', '＋');
        ttl2 = ttl2.replace('コミック', 'COMIC');
        ttl2 = ttl2.replace('comic', 'COMIC');
        ttl2 = ttl2.replace('Comic', 'COMIC');
        if (ttl2.match(/\d\d\d\d年\d+月/)) {
            var tmpdate = ttl2.match(/\d\d\d\d年\d+月/);
            // 例：2017年7月
            var tmpdate2 = tmpdate[0].replace('年', '');
            tmpdate2 = tmpdate2.replace(/月[号]*/, '');
            if (tmpdate2.length == 5) {
                var year = tmpdate2.substr(0, 4);
                var month = "0" + tmpdate2.substr(4);
                tmpdate2 = year + month;
            }
            ttl2 = ttl2.replace(/\d\d\d\d年\d+月[号]*/, tmpdate2);
        }
        if (ttl2.match(/COMIC/)) {
            if (ttl2.match(/ゼロス/) || ttl2.match(/EROS/)) {
                ttl2 = ttl2.replace('ゼロス', 'X-EROS');
                ttl2 = ttl2.replace('#', '');
                ttl2 = ttl2.replace('＃', '');
            }
        }
        if (ttl2.match(/COMICグレープ/)) {
            ttl2 = ttl2.replace('グレープ', 'Grape');
            ttl2 = ttl2.replace('Vol.', '');
        }
        if (ttl2.match(/COMICメガストア/)) {
            ttl2 = ttl2.replace('COMICメガストア', 'コミックメガストア');
        }
        if (ttl2.match(/COMICアンスリウム/)) {
            ttl2 = ttl2.replace('COMICアンスリウム', 'アンスリウム');
        }
        if (ttl2.match(/COMIC阿吽改Vol\./)) {
            ttl2 = ttl2.replace('COMIC阿吽改Vol\.', 'COMIC阿吽改');
        }
        if (ttl2.match(/ペンギンクラブ/)) {
            if (ttl2.length < 18) {
                ttl2 = 'COMIC' + ttl2;
            }
            ttl2 = ttl2.replace(/Vol\.\d.*/, '');
            ttl2 = ttl2.replace(/VOL\.\d.*/, '');
        }
        if (ttl2.match(/快楽天/)) {
            ttl2 = ttl2.replace('COMIC', '');
            ttl2 = ttl2.replace('COMlC', '');
            ttl2 = ttl2.replace('Comic', '');
            ttl2 = ttl2.replace('comic', '');
            ttl2 = ttl2.replace('BEAST', 'ビースト');
        }
    }
    //ページ数取得
    var tmp = document.getElementById('info').getElementsByTagName('div');
    //var pgnm = tmp[tmp.length - 5].innerHTML.slice(0, -6);
    var pgnmarry = tmp[tmp.length - 5].getElementsByTagName('span');
    var pgnm = pgnmarry[1].innerHTML;
    

    /*********/
    /*UI Part*/
    /*********/
    $.when(
        //外部ファイル読込・追加
        $.get(chrome.extension.getURL('/main_frame.html'), {
            'dataType': 'text'
        }),
        $.get(chrome.extension.getURL('/css/main_frame.css'), {
            'dataType': 'text'
        })
    ).done(function(data, data2){
        //target作成
        $tarElm = $("<div id=\"strLnchUI\">");
        $tarElm.appendTo(document.body);
        //html・css追加
        $tarElm.html(data);
        var $style = $('<style type="text/css">');
        $style.html(data2);
        $style.appendTo($tarElm);
        //form値セット
        $("#inp_ttl1").val(ttl);
        $("#inp_ttl2").val(ttl2);
        $tarElm.find("#cpttl1").on("click", function() {
            copyToClipboard1(true);
        });
        $tarElm.find("#cpttl2").on("click", function() {
            copyToClipboard2(true);
        });
    });

    var copyToClipboard1 = function(copyFlg) {
        //text area作成
        var copyFrom = document.createElement("textarea");
        //text area値セット
        ttl = $("#inp_ttl1").val();
        // コマンド作成
        var cmd = "python3.6 image.py " + ttl + " " + url + " " + pgnm + ";";
        copyFrom.textContent = cmd;
        console.log(cmd);
        // bodyタグの要素を取得
        var bodyElm = document.getElementsByTagName("body")[0];
        // 子要素にテキストエリアを配置
        bodyElm.appendChild(copyFrom);
        // テキストエリアの値を選択
        copyFrom.select();
        // コピーコマンド発行
        var retVal = document.execCommand('copy');
        // 追加テキストエリアを削除
        bodyElm.removeChild(copyFrom);
        // 処理結果を返却
        return retVal;
    };

    var copyToClipboard2 = function(copyFlg) {
        //text area作成
        var copyFrom = document.createElement("textarea");
        //text area値セット
        ttl2 = $("#inp_ttl2").val();
        // コマンド作成
        var cmd2 = "python3.6 image.py " + ttl2 + " " + url + " " + pgnm + ";";
        copyFrom.textContent = cmd2;
        // bodyタグの要素を取得
        var bodyElm = document.getElementsByTagName("body")[0];
        // 子要素にテキストエリアを配置
        bodyElm.appendChild(copyFrom);
        // テキストエリアの値を選択
        copyFrom.select();
        // コピーコマンド発行
        var retVal = document.execCommand('copy');
        // 追加テキストエリアを削除
        bodyElm.removeChild(copyFrom);
        // 処理結果を返却
        return retVal;
    };

    document.addEventListener('DOMContentLoaded', function() {
    	var entryElement = document.getElementById('nhentai');
    	entryElement.addEventListener('click', function() {
                     //何かしらの処理
                    alert("hogehoge");
        });
    });
};