import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, setMovies } from "../../redux/features/movieSlice";
import { getInfo } from "../../redux/features/infoSlice";

import { Typography, Grid, Container } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Header(props) {
  const [name, setName] = useState("name");
  const [id, setId] = useState("0XYvRd7oD");
  const dispatch = useDispatch();
  const idArr = useSelector((state) => state.movie.id);
  const loadHandler = () => {
    dispatch(getMovies(name));
  };
  useEffect(() => {
    dispatch(getMovies(name));
    dispatch(getInfo(["0XYvRd7oD", "udJaUVCHZ"]));
  }, [dispatch]);
  return (
    <header className="header">
      <Container align="center">
        <Typography className="header-title" align="center" variant="h3">
          Cat's facebook
        </Typography>
        <Typography className="header-subtile" align="center" variant="h5">
          Like the cat you like
        </Typography>
        <Grid
          container
          direction="row"
          aline="center"
          justifyContent="center"
          spacing={2}
        >
          {idArr.map((elem, i) => {
            return (
              <Grid key={i} xs={3} item>
                <div className="inner">
                  <Typography className="header-name" variant="h6">
                    {elem}
                  </Typography>
                  <FavoriteIcon className="heart" fontSize="large" />
                  <Typography className="header-name" variant="h5">
                    {0}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <button onClick={loadHandler}>load</button>
      </Container>
    </header>
  );
}

export default Header;
