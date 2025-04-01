function Userform({
  name,
  age,
  gender,
  editingIndex,
  onChangeName,
  onChangeAge,
  onChangeGender,
  onSubmit,
  onCancel
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        {editingIndex !== null ? "사용자 수정" : "새 사용자 추가"}
      </h2>

      <input
        placeholder="이름"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => onChangeAge(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <select
        value={gender}
        onChange={(e) => onChangeGender(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="">성별 선택</option>
        <option value="남">남</option>
        <option value="여">여</option>
      </select>

      <div className="flex gap-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? "작성 완료" : "추가"}
        </button>

        {editingIndex !== null && (
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            입력 취소
          </button>
        )}
      </div>
    </div>
  );
}

export default Userform;