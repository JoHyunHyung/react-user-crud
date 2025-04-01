function Useritem({ user, onEdit, onDelete }) {
  return (
    <li className="flex justify-between items-center border p-3 rounded shadow-sm bg-gray-50">
      <span className="text-gray-800">
        {user.name} ({user.age}세, {user.gender})
      </span>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
        >
          수정
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default Useritem;