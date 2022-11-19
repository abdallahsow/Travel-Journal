import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./components/data";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <Navbar />
         <section className="journey">
         {data.map((travel) => (
          <Location key={travel.id} {...travel} />
        ))} 
      </section>
    </main>
  );
}
