import type { Todo } from "../App";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  title: string;
  todos: Todo[];
  onToggle?: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TodoList(props: TodoListProps) {
  const { title, todos, onToggle, onDelete } = props;
  return (
    <div className="section">
      <h2>{title}</h2>
      <ul>
        {/* todos配列を 未完了のリストに反映*/}
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
