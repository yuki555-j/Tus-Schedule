import React from "react";
import { Works } from "types/types";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

type Props = {
  data: Works;
};

const CardComponent: React.FC<Props> = ({ data }) => {
  const today = data.limit.indexOf("本日") === -1;
  const tomorrow = data.limit.indexOf("明日") === -1;

  console.log(tomorrow);

  return (
    <Card today={!today ? 1 : 0} tomorrow={!tomorrow ? 1 : 0}>
      <CardContent>{data.name}</CardContent>
      <CardFooter>
        <AccessAlarmsIcon style={{ margin: "0px 5px" }} />
        {data.limit}
      </CardFooter>
    </Card>
  );
};

const Card: any = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 20px;
  border-radius: 5px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  flex-direction: column;
  margin: 15px 5px;
  text-align: center;
  color: ${(props: any) => (props.today ? "#f44336" : "")};
  color: ${(props: any) => (props.tomorrow ? "#1b9af5" : "")};
`;
const CardContent = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 75%;
  font-size: 0.85rem;
`;
const CardFooter = styled.p`
  justify-content: flex-end;
  width: 100%;
  height: 25%;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

export default CardComponent;
