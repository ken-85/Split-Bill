/* eslint-disable react/prop-types */
import Button from "./Button";

function Friend({ friend, onSelection, SectedFriend }) {
  const isSelect = SectedFriend?.id===friend.id;
  return (
    <li className={isSelect?"selected":""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You owe {friend.name} are even</p>}
      <Button className="button" onClick={() => onSelection(friend)}>
        {isSelect?"Close":"Select"}
      </Button>
    </li>
  );
}
export default Friend;
