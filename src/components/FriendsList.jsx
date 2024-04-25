/* eslint-disable react/prop-types */
import Friend from "./Friend";
function FriendsList({ friends, onSelection,
  SectedFriend}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          SectedFriend={SectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
export default FriendsList;
