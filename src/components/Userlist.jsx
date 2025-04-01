import Useritem from "./Useritem";

function Userlist({ users, onEdit, onDelete, title }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <Useritem
            key={index}
            user={user}
            onEdit={() => onEdit(user)}
            onDelete={() => onDelete(user)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Userlist;