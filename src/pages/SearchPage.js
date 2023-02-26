import { Box } from "@mui/system";
import React from "react";
import ContainerImageSeats from "../components/containerImageSeats";
import ContainerResults from "../components/containerResults";
import { useSelector, useDispatch } from "react-redux";
import AnyResultSearch from "../components/AnyResultSearch";
import LoadingSearch from "../components/LoadingSerach";

export default function SearchPage() {
  const listPrincipalEvents = useSelector((state) => state.allEvents.search);
  const isEventLoading = useSelector((state) => state.allEvents.loading);
  const getParseDate = (olddate) => {
    const date = new Date(olddate);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  };
  const getParseHour = (oldHour) => {
    const date = new Date(oldHour);
    return `${date.getHours()}:${date.getMinutes()}`;
  };
  const cardEvent = listPrincipalEvents?.map((event) => (
    <ContainerResults
      idEvent={event.description}
      linkImage={event.image}
      nameEvent={event.description}
      date={getParseDate(event.startDate)}
      hour={getParseHour(event.startDate)}
      place={event.location.name}
      placeLink={event.location.sameAs}
      country={
        event.location.address.addressLocality +
        ", " +
        event.location.address.addressCountry
      }
      kindseat={"A2"}
      numseats={50}
    />
  ));
  return (
    <>
      <Box
        sx={{
          marginTop: "10vh",
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
          {isEventLoading ? (
            <LoadingSearch />
          ) : listPrincipalEvents.length > 0 ? (
            cardEvent
          ) : (
            <AnyResultSearch />
          )}
        </Box>
        {isEventLoading ? (
          <LoadingSearch />
        ) : listPrincipalEvents.length > 0 ? (
          <ContainerImageSeats />
        ) : (
          <AnyResultSearch />
        )}
      </Box>
    </>
  );
}
