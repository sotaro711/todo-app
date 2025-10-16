import React, { useState } from "react";
import "./index.css";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 追加ボタンを押したらtodos配列が更新
  function addTodo() {
    if (text === "") return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
  }

  // 削除ボタン実装
  function deleteTodo(id: number) {
    setTodos(
      todos.filter((t) => {
        return t.id !== id;
      })
    );
  }

  // チェックしたらtrueに切り替え
  function toggleTodo(id: number) {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      {/* タイトル */}
      <h1>📝 Todo List</h1>
      {/* 入力場所 */}
      <div className="input-area">
        <input
          type="text"
          placeholder="やることを入力"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {/* 追加 */}
        <button onClick={addTodo}>追加</button>
      </div>
      {/* 未完了のリスト */}
      <div className="section">
        <h2>未完了</h2>
        <ul>
          {/* todos配列を 未完了のリストに反映*/}
          {todos
            .filter((t) => !t.done)
            .map((todo) => {
              return (
                <li className="todo-item">
                  <span>{todo.text}</span>
                  <div>
                    <button
                      className="complete"
                      onClick={() => toggleTodo(todo.id)}
                    >
                      完了
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      削除
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {/* 完了のリスト */}
      <div className="section">
        <h2>完了</h2>
        <ul>
          {todos
            .filter((t) => t.done)
            .map((todo) => {
              return (
                <li className="todo-item">
                  <span className="done">{todo.text}</span>
                  <div>
                    <button
                      className="delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      削除
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
