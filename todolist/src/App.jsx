import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAlert = (text) => {
    alert(text);
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputText.trim(),
        },
      ]);
      setInputText("");
    } else {
      handleAlert("กรุณากรอกข้อความ");
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleEdit = () => {
    const trimmedText = editText.trim();
    if (!trimmedText) return handleAlert("กรุณากรอกข้อความ");

    const isDuplicate = todos.some((todo) => todo.id === trimmedText);
    if (isDuplicate) return handleAlert("มีรายการนี้อยู่แล้ว");

    const todoIndex = todos.findIndex((todo) => todo.id === editId);
    if (todoIndex === -1) return handleAlert("ไม่พบรายการดังกล่าว");

    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], text: trimmedText };

    setTodos(updatedTodos);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">รายการสิ่งที่ต้องทำ</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="เพิ่มรายการใหม่..."
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          เพิ่ม
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 bg-gray-100 rounded"
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-1 border rounded"
                />
                <button
                  onClick={handleEdit}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  บันทึก
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <button
                  onClick={() => startEdit(todo)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  แก้ไข
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  ลบ
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
