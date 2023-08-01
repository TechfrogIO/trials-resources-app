import styled from "@emotion/styled";
import React from "react";

export interface FooterProps {
  company: string;
  startDate: string;
  endDate?: string;
}

const FooterText = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#282c34",
  fontSize: ".8rem",
  color: "#fff",
  paddingBlock: "2rem 3rem",
});

export const Footer = ({ company, startDate, endDate }: FooterProps) => {
  const copyrightText = `© ${startDate}${
    endDate ? `-${endDate}` : ""
  } ${company}. All rights reserved.`;

  return (
    <FooterText>
      <span>{copyrightText}</span>
    </FooterText>
  );
};
