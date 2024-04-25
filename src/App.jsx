import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSpliteBill from "./components/FormSpliteBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "ATIK",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "SIDDHANT",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "NIHAL",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 499456,
    name: "UJJAWAL",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showFrined, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [SectedFriend, setSelectedFriend] = useState(null);
  function hnadleShowAddFriend() {
    setShowFriend((show) => !show);
  }
  function handleAddfriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriend(false);
  }
  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === SectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          SectedFriend={SectedFriend}
          onSelection={handleSelection}
        />

        {showFrined && (
          <FormAddFriend onAddFriend={handleAddfriend}></FormAddFriend>
        )}
        <Button onClick={hnadleShowAddFriend}>
          {showFrined ? "close" : "Add Friend"}
        </Button>
      </div>
      {SectedFriend && (
        <FormSpliteBill
          SectedFriend={SectedFriend}
          onSplitBill={handleSplitBill}
          key={SectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
