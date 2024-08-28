import { useState } from "react";
export default function Players(props) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.initialPlayerName);
  function handleEditClick() {
    setisEditing((editing) => !editing);
  }
  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              required
              value={playerName}
              onChange={handlePlayerName}
            />
            hello
            <span className="player">{props.symbol}</span>
          </>
        ) : (
          <>
            <span className="player">{props.initialPlayerName}</span>
            <span className="player">{props.symbol}</span>
          </>
        )}
      </span>
      <span className="player">
        <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
      </span>
    </li>
  );
}
