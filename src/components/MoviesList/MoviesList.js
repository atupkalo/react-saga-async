import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../redux/features/movieSlice";

import { Grid, Container } from "@material-ui/core";

import Cards from "../Cards/Cards";

function MoviesList() {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);
  const item = useSelector((state) => state.movie.movieList);
  const itemId = useSelector((state) => state.movie.id);

  const gettingInfo = (id) => {
    fetch(`https://api.thecatapi.com/v1/images/${id}`)
      .then((response) => response.json())
      .then((json) => setDataId(json.breeds));
  };

  useEffect(() => {
    setData(item);
    gettingInfo("0XYvRd7oD");
  }, [data]);

  return (
    <Container>
      <Grid container direction="row" justifyContent="center" spacing={3}>
        {data.map((elem, i) => {
          return (
            <Grid xs={4} item key={i}>
              <Cards cardBtnLeft={"Lodd cats"} src={elem.url} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MoviesList;
