import { Sedans } from "./components/Sedans";
import { Suvs } from "./components/Suvs";
import { Luxury } from "./components/Luxury";

function App() {
  return (
    <main className="App py-20 max-h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center">
      <Sedans />
      <Suvs />
      <Luxury />
    </main>
  );
}

export default App;
