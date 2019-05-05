export const boxShadows = [
  `0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)`,
  `0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108)`,
  `0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108)`,
  `0 25.6px 57.6px 0 rgba(0,0,0,.22), 0 4.8px 14.4px 0 rgba(0,0,0,.18)`,
];

const palette = {
  white: "#fff",
  gray: [
      "#f8f9fa",
      "#ecf0f1",
      "#dee2e6",
      "#ced4da",
      "#b4bcc2",
      "#95a5a6",
      "#7b8a8b",
      "#343a40",
      "#212529",
  ],
  black: [
      "rgba(0,0,0,1)",
      "rgba(0,0,0,0.875)",
      "rgba(0,0,0,0.75)",
      "rgba(0,0,0,0.625)",
      "rgba(0,0,0,0.5)",
      "rgba(0,0,0,0.375)",
      "rgba(0,0,0,0.25)",
      "rgba(0,0,0,0.125)",
  ],
  blue: "#2C3E50",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#E74C3C",
  orange: "#fd7e14",
  yellow: "#F39C12",
  green: "#18BC9C",
  teal: "#20c997",
  cyan: [
      "#00b7c3",
      "#038387",
      "#005b70",
      "#005e50",
  ],
  cyanBlue: [
      "#0078d4",
      "#004e8c",
  ],
};

const importantColors = {
  normal: palette.gray[2],
  focused: palette.gray[5],
  primary: palette.cyanBlue[0],
  success: palette.green,
  info: palette.cyanBlue[1],
  warning: palette.yellow,
  danger: palette.red,
};

export default {
  cards: {
    card: {
      bg: palette.white,
      borderColor: importantColors.normal,
    },
    header: {
      bg: palette.gray[1],
    },
  },
  tags: {
    normal: {
      bg: importantColors.normal,
      fontColor: palette.black[0],
    },
    info: {
      bg: importantColors.info,
      fontColor: palette.white,
    },
  },
  buttons: {
    borderColor: importantColors.normal,
    default: {
      bg: palette.white,
      fontColor: palette.black[0],
      hoverBg: palette.gray[2],
      activeBg: palette.gray[3],
    },
    primary: {
      bg: importantColors.primary,
      fontColor: palette.white,
    },
  },
  inputs: {
    input: {
      normalBorderColor: importantColors.normal,
      hoverBorderColor: importantColors.focused,
      activeBorderColor: importantColors.info,
    },
  },
};
