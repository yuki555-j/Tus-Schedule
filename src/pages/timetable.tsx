import { NextPage } from "next";
import styled from "styled-components";
import { withAuth } from "service/withAuth";


const News: NextPage = () => {
  return (
    <Wrapper>
      <Message>Coming Soon!!</Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Message = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

export default withAuth(News);
