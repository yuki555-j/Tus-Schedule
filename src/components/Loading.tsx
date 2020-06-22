import { FC } from "react";
import styled from "styled-components";

export default () => (
  <>
    <div
      aria-busy="true"
      aria-label="Loading"
      role="progressbar"
      className="container"
    >
      <div className="swing">
        <div className="swing-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="swing-r"></div>
      </div>
      <div className="shadow">
        <div className="shadow-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="shadow-r"></div>
      </div>
      <Loading>Loading</Loading>
    </div>
  </>
);

const Loading = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
