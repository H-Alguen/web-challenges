import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header logo={logo} avatar={avatar}></Header>
      <main>content goes here…</main>
    </>
  );
}
