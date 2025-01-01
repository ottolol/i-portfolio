import "./App.css";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
