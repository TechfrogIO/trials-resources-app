import styled from "@emotion/styled";
import React from "react";
import { Footer } from "../components/Footer";
import { COMPANY, START_DATE } from "../constants/app";

const NoMatchPageContainer = styled.header({
  backgroundColor: "#282c34",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

export const NoMatchPage = () => (
  <>
    <NoMatchPageContainer>
      <h1>Page Not Found</h1>
    </NoMatchPageContainer>
    <Footer company={COMPANY} startDate={START_DATE} />
  </>
);
