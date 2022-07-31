import useFetch from "./hooks/useFetch";
import "./styles.css";
export default function App() {
  const { data: joke, loading, error } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );
  if (loading) return <h2>Loading...</h2>;
  if (error) console.log(error);
  return (
    <div className="App">
      <h1>useFetch Custom Hook</h1>
      <h2>
        {joke?.setup} : {joke?.delivery}
      </h2>
    </div>
  );
}
