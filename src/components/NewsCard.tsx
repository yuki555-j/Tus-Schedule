import React from "react";
import styled from "styled-components";
import { News } from "types/types";

type Props = {
  data: News
}

const img =
  "https://firebasestorage.googleapis.com/v0/b/math-gathering-1705c.appspot.com/o/tus.png?alt=media&token=7d081ab5-0345-46a9-82f2-3bac1b1c5463";

const Cat_Title = (modStr: string) => {
  modStr = modStr.substr(0, 25) + "..."
  return modStr
};

const CardNewsComponent: React.FC<Props> = ({ data }) => (
  <NewsCard>
    <NewsCardContent1>
      <Title>{Cat_Title(data.title)}</Title>
      <Footer>
        <FooterP>{data.user}</FooterP>
        <FooterP>{data.date}</FooterP>
      </Footer>
    </NewsCardContent1>
    <NewsCardContent2 src={img} />
  </NewsCard>
)



const NewsCard = styled.div`
  display: flex;
  margin: auto;
  border-top: dotted 1.75px black;
  align-items: center;
  font-weight: bold;
  padding: 20px 10px;
`
  ;
const NewsCardContent1 = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 0px 8px;
`;
const NewsCardContent2 = styled.img`
  object-fit: cover;
  width: 115px;
  height: 80px;
`;
const Title = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;
const Footer = styled.div`
  margin-top: 5px;
  font-size: 0.8rem;
  display: flex;
`;
const FooterP = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 10px;
`;

export default CardNewsComponent;
