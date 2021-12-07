import moment from "moment";
import HitModel from "./HitModel";
import {
  CardContent,
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Hits(props: any) {
  const hits: HitModel[] = props.hitsReact;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {hits.map((hit: HitModel) => (
            <Grid item xs={6} key={hit.objectID}>
              <Item>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {moment(hit.created_at).fromNow() + " by " + hit.author}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {hit.story_title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <a
                        style={{ color: "inherit", textDecoration: "none" }}
                        href={hit.story_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Hits;