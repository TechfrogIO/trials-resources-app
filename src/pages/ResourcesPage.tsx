import styled from "@emotion/styled";
import React from "react";
import { Footer } from "../components/Footer";
import { COMPANY, START_DATE } from "../constants/app";

const ResourcesPageHeader = styled.header({
  backgroundColor: "#282c34",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "white",
});

export const ResourcesPage = () => (
  <>
    <ResourcesPageHeader>
      <h1>Bike Trials Resources</h1>
      <p>Lots of hopping up, across, and down on bikes.</p>
      <p>And occassionally crashing.</p>
    </ResourcesPageHeader>
    <Footer company={COMPANY} startDate={START_DATE} />
  </>
);
