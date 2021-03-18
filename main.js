'use strict'


const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {
    showAlert('追加ボタンクリック', 'これで確認できました。', 'もう閉じて良いですよ');
});

function showAlert(header, subHeader, message) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.subHeader = subHeader;
    alert.message = message;
    alert.buttons = ['OK'];
    alert.inputs = [{
        name: 'todo',
        id: 'new-todo',
        placeholder: 'やらなきゃいけないことは何?'
    }];

    document.body.appendChild(alert);
    return alert.present();
}