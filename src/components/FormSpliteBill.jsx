/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
function FormSpliteBill({ SectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {SectedFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      {/* <Button>Select</Button> */}

      <label>Your Expance</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>
      {/* <Button>Select</Button> */}
      <label>{SectedFriend.name}'S Expance</label>
      <input type="text" disabled value={paidByFriend}></input>
      {/* <Button>Select</Button> */}
      <label>Who is paying bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{SectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
export default FormSpliteBill;
