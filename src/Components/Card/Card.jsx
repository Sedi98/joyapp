import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function CardComponent({ src, title, text }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" height="200" image={src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          variantMapping={"p"}
          sx={{ color: "text.secondary" }}
        >
          {text}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">{firstBtnText}</Button>
        <Button size="small">{secondBtnText}</Button>
      </CardActions> */}
    </Card>
  );
}
