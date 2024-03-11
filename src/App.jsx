import "./App.css";
import Head from "./components/Head/Head.jsx";
import { useEffect, useState } from "react";
import Signs from "./components/Signs/Signs.jsx";
import HoroscopeInfo from "./components/HoroscopeInfo.jsx";
import axios from "axios";

function App() {
  //const [loading, setLoading] = useState(true); // Загрузка
  const [fetchedData, setFetchedData] = useState([]);
  const [sign, setSign] = useState("leo");
  const signApi = `https://newastro.vercel.app/${sign}`;

  async function fetchData(fetchApi, setFunc) {
    try {
      console.log(fetchApi);
      const data = await axios.get(fetchApi);
      const results = await data.json();
      setFunc(results);
    } catch (e) {
      console.log(e);
    } finally {
      //setLoading(false);
    }
  }

  useEffect(() => {
    // получение одного персонажа
    fetchData(signApi, setFetchedData);
  }, [signApi]);

  return (
    <div>
      <Head />
      <Signs setSign={setSign} />
      <HoroscopeInfo fetchedData={fetchedData} />
    </div>
  );
}

export default App;
