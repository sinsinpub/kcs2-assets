window.addEventListener('message', function (event) {

    // サーバ選択後のゲーム画面への遷移要求の場合
    if (event.data == "r") {
        // 呼び出し元がログインサーバであれば、ゲーム画面へ遷移する
        if (ConstServerInfo.Gadget == event.origin + "/") {
            kcsLogin_StartLogin();
            return;
        } else {
            // 他のサーバからの呼び出しに対しては何もしない
            return;
        }
    }

    // ゲームサーバー以外の呼び出しや空のデータに対しては何もしない
    if ((ConstServerInfo.NETGAME != event.origin && userWorldInfo.worldServerAddr != event.origin) || event.data == "") {
        return;
    }
    // データの種別により処理を分岐
    var data = event.data.split("\t");
    if (data[0] == "0") {
        // 0: アイテム購入
        kcsPayment_StartPayment(data[1], data[2], data[3], data[4], data[5], data[6]);
        return;
    } else if(data[0] == "1") {
        // 1: コメント変更
        kcsInspection_CreateInspectionComment(data[1]);
        return;
    } else if(data[0] == "2") {
        // 2: 艦隊名変更
        kcsInspection_CreateInspectionDeckName(data[1]);
        return;
    } else if(data[0] == "3") {
        // 3: 提督名変更
        kcsInspection_CreateInspectionNickName(data[1]);
        return;
    }
}, false);

function PaymentResult_SendMessage(paymentResult) {

    var gameElement = document.getElementById("htmlWrap").contentWindow;

    if (gameElement) {
        gameElement.postMessage(paymentResult, userWorldInfo.worldServerAddr);
    }
}

function Inspection_SendMessage(CommentId) {

    var gameElement = document.getElementById("htmlWrap").contentWindow;

    if (gameElement) {
        gameElement.postMessage(CommentId, userWorldInfo.worldServerAddr);
    }
}
