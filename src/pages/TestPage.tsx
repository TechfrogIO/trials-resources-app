import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import styled from "@emotion/styled";
import { Footer } from "../components/Footer";
import { COMPANY, START_DATE } from "../constants/app";

interface TestPageProps {
  signOut?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Note {
  id: string;
  name: string;
  description: string;
}

const TestPageContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

const TestPage = ({ signOut }: TestPageProps) => (
  <>
    <TestPageContainer>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
      <div>
        <h1>Test Page</h1>
      </div>
    </TestPageContainer>
    <Footer company={COMPANY} startDate={START_DATE} />
  </>
);

export default withAuthenticator(TestPage);
