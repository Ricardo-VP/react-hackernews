// import { useEffect, useState } from "react";
// import { getReactNews } from "../../services/react";
// import HitModel from "../Hits/HitModel";
import Hits from "../Hits/Hits";
import "./news.css";

function News(props: any) {
  const { hitsReact, loading } = props;

  // const [currentPage, setCurrentPage] = useState(0);
  // const [newsPerPage, setNewsPerPage] = useState(10);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="container">
      <Hits hitsReact={hitsReact} />
    </div>
  );
}

export default News;
