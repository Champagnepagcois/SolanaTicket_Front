import React from "react";
import ElementKindEvent from "./ElementKindEvent";
import Eventscarrusel from "./Eventscarrusel";
import { Grid, Typography, Box } from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
export default function EventNameCarrusel() {
  return (
    <Box width="100vw">
      <Typography
        variant="h4"
        color="primary"
        component="div"
        sx={{ marginBottom: "20px" }}
      >
        Artistas sobresalientes
      </Typography>
      <Box>
        <Carousel
          show={4}
          slide={3}
          swiping={true}
          useArrowKeys={false}
        >
          <ElementKindEvent
            nameEvent={"Drake"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
            }
          />
          <ElementKindEvent
            nameEvent={"Coldplay"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3"
            }
          />
          <ElementKindEvent
            nameEvent={"Bad Bunny"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5eb8ee9a6f54dcbd4bc95126b14"
            }
          />
          <ElementKindEvent
            nameEvent={"Kanye West"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a"
            }
          />
          <ElementKindEvent
            nameEvent={"Post Malone"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5ebb894ef9fa437b0389c5567cc"
            }
          />
          <ElementKindEvent
            nameEvent={"Twenty One Pilots"}
            imageLink={
              "https://i.scdn.co/image/ab6761610000e5eb196972172c37d934d9ca8093"
            }
          />
        </Carousel>
      </Box>
    </Box>
  );
}
