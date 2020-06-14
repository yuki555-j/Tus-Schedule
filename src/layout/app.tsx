import React from "react";
import Tabs from "components/Tabs";
import styled from "styled-components";


const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        {children}
      </Wrapper>
      <Tabs />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 10px 0px;
  margin: auto;
`

export default AppLayout