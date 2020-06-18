import { NextPage } from "next";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { Works } from "types/types";
import Card from "components/Card";
import { withAuth } from "service/withAuth";

const data: Works[] = [
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
  {
    name: "課題1-3 の提出期限が到来しています.",
    date: "2020年 06月 17日 16:00",
    url:
      "https://letus.ed.tus.ac.jp/calendar/view.php?view=day&course=119433&time=1591887600#event_99690",
  },
];

const WorksPage: NextPage = () => {
  return (
    <Wrapper>
      {
        data.map((value, index) => {
          return <Card key={index} data={value} />
        })
      }
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
