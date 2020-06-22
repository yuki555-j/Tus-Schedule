import { FC } from "react";
import styled from "styled-components";

export const TimeTag = () => (
  <Wrapper>
    <Time>
      <Todoy />
      <TimeName>本日</TimeName>
    </Time>
    <Time>
      <Tomorrow />
      <TimeName>明日</TimeName>
    </Time>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px 20px 0px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;
const TimeName = styled.p`
  font-weight: bold;
  margin: 0px 5px;
  font-size: 1.2rem;
`;
const Box = styled.div`
  width: 22px;
  height: 22px;
`;
const Todoy = styled(Box)`
  background-color: #f44336;
`;
const Tomorrow = styled(Box)`
  background-color: #1b9af5;
`;
