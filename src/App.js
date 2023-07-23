import "./styles.css";

export default function App() {
  let name;

  const handleInput = (e) => {
    const num = parseInt(e.target.value);
    const binary = num.toString(2);
    const arry = String(binary)
      .split("")
      .map((binary) => {
        return Number(binary);
      });
    const ones = arry.filter((arry) => arry === 1).length;

    return ones;
  };

  const countBits = (n) =>
    n
      .toString(2)
      .split("")
      .filter((ele) => ele == 1).length;

  const countBits2 = (n) => n.toString(2).split("0").join("").length;

  const countBits3 = function (n) {
    return n.toString(2).replace(/0/g, "").length;
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <h1>valor </h1>
      <input name={name} type="text" onChange={handleInput} />
    </div>
  );
}
