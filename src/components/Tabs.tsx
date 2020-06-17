import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";;
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import styled from "styled-components";
import Router from "next/router";

const Routes = ["/works", "/timetable", "/news"]

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    Router.push(Routes[newValue])
  };

  return (
    <Paper square style={{ position: "fixed", width: "100%", bottom: "0" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<ListAltIcon />}
          label="works"
        />
        <Tab icon={<AccessAlarmIcon />} label="Time table" />
        <Tab icon={<AnnouncementOutlinedIcon />} label="News" />
      </Tabs>
    </Paper>
  );
}
