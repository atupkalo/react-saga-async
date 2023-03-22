import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" align="left">
            {props.cardTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.clickHandler}>
          {props.cardBtnLeft}
        </Button>
        <Button size="small" color="secondary" onClick={props.clickHandler}>
          {props.cardBtnRight}
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards;
