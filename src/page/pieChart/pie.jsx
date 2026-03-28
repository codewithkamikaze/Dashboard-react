import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

const data = [
  { id: "React", label: "React", value: 272 },
  { id: "stylus", label: "stylus", value: 543 },
  { id: "sass", label: "sass", value: 401 },
  { id: "haskell", label: "haskell", value: 434 },
  { id: "nue", label: "nue", value: 333 },
];

const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashbord ? "200px" : "75vh" }}>
      <ResponsivePie
        data={data}
        theme={{
          text: {
            fill: theme.palette.text.primary,
            fontSize: 11,
          },
          legends: {
            text: {
              fill: theme.palette.text.primary,
              fontSize: 11,
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
        margin={
          isDashbord
            ? { top: 10, right: 0, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        enableArcLabels={!isDashbord}
        enableArcLinkLabels={!isDashbord}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  symbolSize: 18,
                  symbolShape: "circle",
                },
              ]
        }
      />
    </Box>
  );
};

export default Pie;
