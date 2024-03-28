import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "card--yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "card--red",
    },
    {
      id: 1339,
      name: "🥑 Mango",
      color: "card--green",
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map(({ id, name, color }) => (
          <li key={id}>
            <Card name={name} color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
