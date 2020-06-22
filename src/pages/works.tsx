import { NextPage } from "next";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { Works } from "types/types";
import Card from "components/Card";
import { withAuth } from "service/withAuth";
import { useWorks } from "hooks/useWorksReducer";
import fetch from "isomorphic-unfetch";
import Loading from "../components/Loading";

const WorksPage = () => {
  const [state, handleGetWorks] = useWorks();
  return (
    <>
      {state.length > 0 ? (
        <Wrapper>
          {state.map((value, index) => {
            return <Card key={index} data={value} />;
          })}
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`;

/*
export async function getStaticProps(ctx) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Accept: "application/json",
      token: "MoodleSession2020=cqbr9ogvkme21dd3ko0djaj094",
    },
    mode: "cors",
  };
  const res = await fetch(
    "https://tus-schedule-api.herokuapp.com/api/works",
    options
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
*/

export default WorksPage;
