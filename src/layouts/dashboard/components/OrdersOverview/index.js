/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          예약된 설문
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="error"
          icon="notifications"
          title="B 헬스장 설문 10회차"
          dateTime="31 DEC 7:20 PM"
        />
        <TimelineItem
          color="success"
          icon="notifications"
          title="C 대학교 설문 1회"
          dateTime="2 JAN 11 PM"
        />
        <TimelineItem
          color="info"
          icon="notifications"
          title="다이어트 제품 A 설문 3주차"
          dateTime="2 JAN 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="notifications"
          title="치료 부작용 설문 1주차"
          dateTime="12 JAN 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="notifications"
          title="다이어트 제품 B 설문 1주차"
          dateTime="18 Jan 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
