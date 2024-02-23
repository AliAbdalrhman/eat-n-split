import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <form className="form-add-friend">
      <label>👨🏼‍🤝‍👨🏼Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🧑Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
