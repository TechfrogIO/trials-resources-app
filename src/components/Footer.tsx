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
  fontSize: ".8rem",
  color: "darkgray",
});

export const Footer = ({ company, startDate, endDate }: FooterProps) => {
  const copyrightText = `&copy;&nbsp;${startDate}${
    endDate ? `-${endDate}` : ""
  } ${company}. All rights reserved.`;

  return (
    <FooterText>
      <span>{copyrightText}</span>
    </FooterText>
  );
};
