import React, { Component } from "react";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import { CardMedia, Grid } from "@mui/material";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

class ContainerImageSeats extends Component {
  render() {
    return (
      <Box sx={{ width: "50vw", height:"calc(100vh-80px)",backgroundColor: "#f0f8ff" }}>
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <Box sx={{maxHeight:"90vh",maxWidth:"50vw",overflow:"scroll"}}>
                <Grid item>
                  <div className="tools">
                    <button onClick={() => zoomIn()}>+</button>
                    <button onClick={() => zoomOut()}>-</button>
                    <button onClick={() => resetTransform()}>x</button>
                  </div>
                </Grid>
                <Grid item>
                  <TransformComponent>
                    <CardMedia
                      sx={{ width:"50vw", height:"85vh",maxHeight:"85vh" }}
                      image="https://bikubo.com/images/seating-circular.jpg"
                      title="Concert's map"
                    />
                  </TransformComponent>
                </Grid>
              </Box>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Box>
    );
  }
}
export default ContainerImageSeats;
