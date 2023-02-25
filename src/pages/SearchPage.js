import { Box } from "@mui/system";
import React from "react";
import ContainerImageSeats from "../components/containerImageSeats";
import ContainerResults from "../components/containerResults";

export default function SearchPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "calc(90vh)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            height: "100vh",
            maxHeight: "90vh",
          }}
        >
          <ContainerResults
            idEvent={"afasfsaf"}
            nameEvent={
              "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
            }
            date={"17 mar 2023"}
            hour={"18:00"}
            place={"Parque O'Higgins"}
            placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
            country={"Santiago de Chile, Chile"}
            kindseat={"A2"}
            numseats={50}
          />
          <ContainerResults
            idEvent={"afasfsaf"}
            nameEvent={
              "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
            }
            date={"17 mar 2023"}
            hour={"18:00"}
            place={"Parque O'Higgins"}
            placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
            country={"Santiago de Chile, Chile"}
            kindseat={"A3"}
            numseats={50}
          />
          <ContainerResults
            idEvent={"afasfsaf"}
            nameEvent={
              "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
            }
            date={"17 mar 2023"}
            hour={"18:00"}
            place={"Parque O'Higgins"}
            placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
            country={"Santiago de Chile, Chile"}
            kindseat={"A1"}
            numseats={50}
          />
          <ContainerResults
            idEvent={"afasfsaf"}
            nameEvent={
              "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
            }
            date={"17 mar 2023"}
            hour={"18:00"}
            place={"Parque O'Higgins"}
            placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
            country={"Santiago de Chile, Chile"}
            kindseat={"C3"}
            numseats={50}
          />
        </Box>
        <ContainerImageSeats />
      </Box>
    </>
  );
}
