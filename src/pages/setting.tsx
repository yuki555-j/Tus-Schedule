import { NextPage } from "next";
import styled from "styled-components";
import { News } from "types/types";
import { withAuth } from "service/withAuth";

const SettingPage: NextPage = () => {
  return (
    <>
      setting page
    </>
  );
};


export default withAuth(SettingPage);
