import { useParams } from "react-router-dom";

export default function CharacterProfile() {
  const { name } = useParams();

  return (
    <div
      style={{
        height: "100vh",
        background: "#0b0b0b",
        color: "white",
        display: "grid",
        placeItems: "center",
        fontSize: "48px",
        letterSpacing: "0.2em",
      }}
    >
      {name}
    </div>
  );
}
