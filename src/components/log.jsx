export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li
        //   key={index}
        // key={`${turn.square.row}${turn.square.col}`}
        >
          {turn.player} selected {turn.row},{turn.col}
        </li>
      ))}
    </ol>
  );
}
