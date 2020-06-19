import { NextPage } from "next";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { Works } from "types/types";
import Card from "components/Card";
import { withAuth } from "service/withAuth";
import { useWorks } from "hooks/useWorksReducer";

const WorksPage: NextPage = () => {
  const [state, handleGetWorks] = useWorks()
  return (
    <Wrapper>
      {state.map((value, index) => {
        return <Card key={index} data={value} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`

export default withAuth(WorksPage);
