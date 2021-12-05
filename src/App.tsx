import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HitModel from "./components/Hits/HitModel";
import News from "./components/News/News";
import { getAngularNews, getReactNews, getVueNews } from "./services/news";

function App() {
  const [hits, setHits] = useState<HitModel[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      if (filter === "1") {
        const news = await getAngularNews(0);
        setHits(news.hits);
      } else if (filter === "2") {
        const news = await getReactNews(0);
        setHits(news.hits);
      } else if (filter === "3") {
        const news = await getVueNews(0);
        setHits(news.hits);
      }
      setLoading(false);
    };
    fetchNews();
  }, [filter]);

  const validatedHits = hits.filter(
    (hit: HitModel) =>
      hit.author !== null &&
      hit.created_at !== null &&
      hit.story_title !== null &&
      hit.story_url !== null
  );

  const handleFilter = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="App">
        <Header />
        <div style={{padding: '60px'}}>
          <select className="menu" value={filter} onChange={handleFilter}>
            <option style={{backgroundImage: `url(${'/public/img/angular-icon.png'})`}} value="">Select your news</option>
            <option value="1">svgh Angular</option>
            <option value="2">React</option>
            <option value="3">Vue</option>
          </select>
        </div>
        <News hitsReact={validatedHits} loading={loading} />
      </div>
    </>
  );
}

export default App;
