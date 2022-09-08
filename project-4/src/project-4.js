import "./project-4.css";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Location from "./components/Location";

export default function App() {
  return (
    <main className="app">
      <Navbar />
         <section className="journey">
              {/* <Location
              item={data[0]}
              /> */}

         {data.map((travel) => (
          <Location key={travel.id} {...travel} />
        ))} 
      </section>
    </main>
  );
}
