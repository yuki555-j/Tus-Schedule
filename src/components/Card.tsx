import React from "react";
import { Works } from "types/types";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

type Props = {
  data: Works;
};

const CardComponent: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <CardContent>{data.name}</CardContent>
      <CardFooter>
        <AccessAlarmsIcon style={{ margin: "0px 5px" }} />
        {data.limit}
      </CardFooter>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align: items;
  padding: 18px 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  flex-direction: column;
  margin: 15px 5px;
`;
const CardContent = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;
const CardFooter = styled.p`
  justify-content: flex-end;
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

export default CardComponent;
