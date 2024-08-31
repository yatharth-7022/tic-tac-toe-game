import { useState } from "react";
export default function Players({ initialPlayerName, symbol, isActive }) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialPlayerName);
  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  function handlePlayerName(e) {
    setplayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              required
              value={playerName}
              onChange={handlePlayerName}
            />

            <span className="player">{symbol}</span>
          </>
        ) : (
          <>
            <span className="player">{playerName}</span>
            <span className="player">{symbol}</span>
          </>
        )}
      </span>
      <span className="player">
        <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
      </span>
    </li>
  );
}
