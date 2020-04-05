import React from "react";
import styled from "styled-components";

const Header: React.FunctionComponent<{ className: string }> = ({
  className,
}) => <h1 className={className}>Hello World</h1>;

const Content: React.FunctionComponent<{ className: string }> = ({
  className,
}) => <p className={className}>This is some high quality content</p>;

const StyledHeader = styled(Header)`
  color: red;
`;

const StyledContent = styled(Content)`
  color: blue;
`;

export const App: React.FunctionComponent = () => (
  <div>
    <StyledHeader>Hello World!</StyledHeader>
    <StyledContent>This is some high quality content</StyledContent>
    <p style={{ color: "#00FF00" }}>More content</p>
  </div>
);
