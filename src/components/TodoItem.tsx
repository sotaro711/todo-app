type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onToggle?: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TodoItem(props: TodoItemProps) {
  const todo = props.todo;
  const onToggle = props.onToggle;
  const onDelete = props.onDelete;

  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <div>
        {!todo.done && (
          <button className="complete" onClick={() => onToggle?.(todo.id)}>
            完了
          </button>
        )}
        <button className="delete" onClick={() => onDelete(todo.id)}>
          削除
        </button>
      </div>
    </li>
  );
}
