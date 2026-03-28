import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

const data = [
  { year: 2019, Spain: 900, France: 1400, Germany: 1700 },
  { year: 2020, Spain: 1000, France: 1500, Germany: 1800 },
  { year: 2021, Spain: 1100, France: 1600, Germany: 1900 },
  { year: 2022, Spain: 1200, France: 1700, Germany: 2000 },
  { year: 2023, Spain: 1260, France: 1709, Germany: 2080 },
];

const Bar = ({ isDashbord = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashbord ? "300px" : "75vh" }}>
      <ResponsiveBar
        data={data}
        keys={["Spain", "France", "Germany"]}
        indexBy="year"
        theme={{
          text: {
            fill: theme.palette.text.primary,
            fontSize: 11,
          },
          axis: {
            ticks: {
              text: {
                fill: theme.palette.text.secondary,
              },
            },
            legend: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
            },
          },
          legends: {
            text: {
              fill: theme.palette.text.primary,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
          },
        }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: isDashbord ? null : "Year",
          legendPosition: "middle",
          legendOffset: 35,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: isDashbord ? null : "salary/month",
          legendPosition: "middle",
          legendOffset: -55,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={
          isDashbord
            ? []
            : [
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  symbolSize: 20,
                },
              ]
        }
        role="application"
        ariaLabel="Bar chart"
      />
    </Box>
  );
};

export default Bar;
