import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HitModel from "./components/Hits/HitModel";
import News from "./components/News/News";
import { getAngularNews, getReactNews, getVueNews } from "./services/news";

function App() {
  const [hits, setHits] = useState<HitModel[]>([]);
  const [filter, setFilter] = useState<string>(localStorage.getItem("filter") || "");
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
    localStorage.setItem("filter", event.target.value);
  };

  return (
    <>
      <div className="App">
        <Header />
        <div style={{ padding: "60px", textAlign: 'center'}}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">News</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={filter}
              onChange={handleFilter}
              autoWidth
            >
              <MenuItem disabled selected value="">
                <em>Select your news</em>
              </MenuItem>
              <MenuItem value="1">
                <em>Angular</em>
              </MenuItem>
              <MenuItem value="2">
                <em>React</em>
              </MenuItem>
              <MenuItem value="3">
                <em>Vue</em>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <Container fixed>
          <News hitsReact={validatedHits} loading={loading} />
        </Container>
      </div>
    </>
  );
}

export default App;
