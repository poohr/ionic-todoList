'use strict'

// ToDoをオブジェクトで管理
const todos = [{
    title: '部屋の掃除',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: 'ゴミ捨て',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: '風呂の掃除',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: '屋根の掃除',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: '窓の掃除',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: '犬小屋の掃除',
    due: new Date(2021, 9, 31),
    done: false
  },
  {
    title: '朝飯を食う',
    due: new Date(2021, 9, 31),
    done: true
  },
  {
    title: '昼飯を食う',
    due: new Date(2021, 9, 31),
    done: true
  },
  {
    title: '晩飯を食う',
    due: new Date(2021, 9, 31),
    done: true
  },
];

// 追加ボタンの表示内容
const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {
    showAlert('追加ボタンクリック', 'これで確認できました。', 'もう閉じて良いですよ');
});

// タスクの追加ボタン
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

// ToDoを追加する機能
function writeToDos(todos) {
    const todoList = document.querySelector('#todos');
    const doneList = document.querySelector('#done');
 for(let todo of todos) {
    const todoItem = document.createElement('ion-item');
    todoItem.innerHTML = `
    <ion-label>
        <h2>${todo.title}</h2>
        <h3>${todo.due.toDateString()}</h3>
    </ion-label>
    <ion-checkbox &{( todo.done ? 'checked' : '' )} color="primary slot="start">
    </ion-checkbox>
    `
    if(todo.done) {
        // 完了したのは”doneList”へ
        doneList.appendChild(todoItem);
    } else {
        todoList.appendChild(todoItem);
    }
  }
}

writeToDos(todos);