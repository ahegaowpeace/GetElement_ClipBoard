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
    var ttl = document.getElementById('info').getElementsByTagName('h1')[0].innerHTML;
    console.log(ttl);
    //タイトル２取得
    var ttl2 = document.getElementById('info').getElementsByTagName('h2')[0].innerHTML;
    console.log(ttl2);
    //ページ数取得
    var tmp = document.getElementById('info').getElementsByTagName('div');
    var pgnm = tmp[tmp.length - 5].innerHTML.slice(0, -6);
    console.log(pgnm);

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
        console.log(cmd2);
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