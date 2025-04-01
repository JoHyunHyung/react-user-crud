import { useEffect,useState } from 'react'
import Userform from './components/Userform'
import Userlist from './components/Userlist'


function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // 수정 중인 유저 인덱스
  const [searchkeyword, setSearchkeyword] = useState("");
  const [sorttype,setSorttype] = useState("");

  const handleAddorUpdate = () => {
    if(!name || !age || !gender){
      alert("모든 값을 입력해주세요.")
      return;
    }
  
  const newUser={
    name,
    age:Number(age),
    gender
  };
  if(editingIndex!==null){

    const updatedUsers = [...users];
    updatedUsers[editingIndex] = newUser;
    setUsers(updatedUsers);
    saveToStorage(updatedUsers);
    setEditingIndex(null);
  }
  else{
    setUsers([...users,newUser])
    saveToStorage([...users,newUser]);
  }

  setName("");
  setAge("");
  setGender("");
  };//추가

  const deleteUser=(targetIndex)=>{
    const newUsers = users.filter((_,index)=>index !== targetIndex);
    setUsers(newUsers)
    saveToStorage(newUsers);
  }//삭제
  const deleteUserByUser = (targetUser) => {
    const index = users.indexOf(targetUser);
    deleteUser(index);
  };//삭제용인데
  
  const handleEdit=(index)=>{
    const user = users[index];
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setEditingIndex(index);
  }//수정
  const handleEditByUser = (targetUser) => {
    const index = users.indexOf(targetUser);
    handleEdit(index); // 기존 로직 재사용
  };//수정용인데 어디에 쓰는건가
  const cancelEdit=() =>{
    //console.log("입력 취소");
    setName("");
    setAge("");
    setGender("");
    setEditingIndex(null);
  }

  useEffect(()=>{
    const savedUsers= localStorage.getItem("users");
    if(savedUsers){
      setUsers(JSON.parse(savedUsers));
    }
  },[]);//저장된 사용자 불러오기

  const saveToStorage = (updatedUsers)=>{
    localStorage.setItem("users",JSON.stringify(updatedUsers));
  }//스토리지 저장

  const filteredusers=users.filter(user => user.name.toLowerCase().includes(searchkeyword.toLowerCase())).sort((a,b)=>{
    if(sorttype==="name"){
      return a.name.localeCompare(b.name);
    }
    else if(sorttype==="age"){
      return a.age-b.age;
    }
    return 0;
  });//정렬 필터

  const resetUsers = () => {
    if(window.confirm("정말 모든 사용자를 삭제할까요?")){
      setUsers([]);
      localStorage.removeItem("users");
    }
  }//모든 유저 초기화
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
    <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow space-y-6">
      {/* 사용자 입력 폼 */}
      <Userform
        name={name}
        age={age}
        gender={gender}
        editingIndex={editingIndex}
        onChangeName={setName}
        onChangeAge={setAge}
        onChangeGender={setGender}
        onSubmit={handleAddorUpdate}
        onCancel={cancelEdit}
      />

      {/* 전체 초기화 버튼 */}
      <button
        onClick={resetUsers}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        전체 초기화
      </button>

      {/* 검색 + 정렬 */}
      <div className="flex gap-2 items-center">
        <input
          placeholder="이름 검색"
          value={searchkeyword}
          onChange={(e) => setSearchkeyword(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
        />
        <select
          value={sorttype}
          onChange={(e) => setSorttype(e.target.value)}
          className="border px-2 py-2 rounded"
        >
          <option value="">정렬 없음</option>
          <option value="name">이름순</option>
          <option value="age">나이순</option>
        </select>
      </div>

      {/* 사용자 수 */}
      <p className="text-sm text-gray-500">
        총 사용자 수: {filteredusers.length}
      </p>

      {/* 사용자 목록 */}
      <Userlist
        users={filteredusers}
        onEdit={handleEditByUser}
        onDelete={deleteUserByUser}
        title={
          searchkeyword ? `"${searchkeyword}" 검색 결과` : "전체 사용자 목록"
        }
      />
    </div>
  </div>
);
}

export default App
