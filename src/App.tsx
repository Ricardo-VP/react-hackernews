import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Container,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HitModel from "./components/Hits/HitModel";
import News from "./components/News/News";
import { getNews } from "./services/news";

function App() {
  const [hits, setHits] = useState<HitModel[]>([]);
  const [filterNews, setFilterNews] = useState<string>(
    localStorage.getItem("filter") || "1"
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const hits = await getNews(filterNews, page);
      setHits(hits);
      setLoading(false);
    };
    fetchNews();
  }, [filterNews, page]);

  const handleFilter = (event: any) => {
    setFilterNews(event.target.value);
    localStorage.setItem("filter", event.target.value);
  };

  const handlePageChange = async () => {
    setLoading(true);
    setPage(page + 1);
    const hits = await getNews(filterNews, page);
    setHits(hits);
    setLoading(false);
  };

  return (
    <>
      <div className="App" style={{}}>
        <Header />
        <div style={{ padding: "60px", textAlign: "center" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">News</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={filterNews}
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
        <Container fixed style={{ marginBottom: "20px" }}>
          <News hitsReact={hits} loading={loading} />
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disabled={loading}
            variant="contained"
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            onClick={() => handlePageChange()}
          >
            Load more news
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
