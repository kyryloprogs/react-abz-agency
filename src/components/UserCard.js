
import emptyphoto from "../icons/photo-cover.svg";

const UserCard = ({ user }) => {

  return (
    <div className="userCard">
        <img className="userCard_avatar" src={user.photo || emptyphoto} alt={`user:${user.id}`} />
        <div className="userCard_name">{user.name}</div>
        <div className="userCard_additional">
            {user.position}<br/>
            {user.email}<br/>
            {user.phone}
        </div>
    </div>
  )
}

export default UserCard;