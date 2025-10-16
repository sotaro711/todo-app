type TodoInputProps = {
  text: string;
  setText: (value: string) => void;
  onAdd: () => void;
};

export function TodoInput(props: TodoInputProps) {
  const { text, setText, onAdd } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="やることを入力"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      {/* 追加 */}
      <button onClick={onAdd}>追加</button>
    </div>
  );
}
