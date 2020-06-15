import { NextPage } from "next";
import styled from "styled-components";
import NewsCard from "components/NewsCard";
import { News } from "types/types";

import { useWorks } from "hooks/useWorksReducer";

const img =
  "https://firebasestorage.googleapis.com/v0/b/math-gathering-1705c.appspot.com/o/tus.png?alt=media&token=7d081ab5-0345-46a9-82f2-3bac1b1c5463";

const data: News[] = [
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
  {
    title:
      "学修ポートフォリオおよび教職履修カルテのメンテナンスに伴う停止について＜3/28(木)・29(金)＞",
    date: "2日前",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
    user: "(サイト管理者) admin",
  },
];

const NewsPage: NextPage = () => {
  const [state] = useWorks();

  return (
    <>
      <Wrapper>
        <CardTitle>
          News
        </CardTitle>
        {
          data.map((value, index) => {
            return <NewsCard data={value} key={index} />
          })
        }
      </Wrapper>
    </>
  );
};

const CardTitle = styled.div`
  text-align: center;
  display: inline-block;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 15px;  
`;
const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export default NewsPage;
