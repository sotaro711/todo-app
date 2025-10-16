import React, { useState } from "react";
import "./index.css";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

export type Todo = {
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
      <TodoInput text={text} setText={setText} onAdd={addTodo} />
      {/* 未完了のリスト */}
      <TodoList
        title={"未完了"}
        todos={todos.filter((t) => !t.done)}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
      {/* 完了のリスト */}
      <TodoList
        title={"完了"}
        todos={todos.filter((t) => t.done)}
        onDelete={deleteTodo}
      />
    </div>
  );
}
