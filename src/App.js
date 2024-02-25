import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
import { initialFriends } from "./components/FriendsList";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
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
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddNewFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
