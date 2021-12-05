import moment from "moment";
import HitModel from "./HitModel";

function Hits(props: any) {
  const hits: HitModel[] = props.hitsReact;
  console.log(hits);

  return (
    <ul style={{ listStyle: "none" }}>
      {hits.map((hit: HitModel) => (
        <li key={hit.objectID}>
          <div className="news-card">
            <div>
              <a
                href={hit.story_url}
                style={{ color: "inherit", textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <br />
                <p>{moment(hit.created_at).fromNow() + " by " + hit.author}</p>
                <h2>{hit.story_title}</h2>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Hits;