const components = {
  Heading: {
    baseStyle: {
      fontWeight: "900",
      letterSpacing: "0.24px",
      textTransform: "uppercase",
    },
    sizes: {
      desktopL1: {
        fontSize: "200px",
        lineHeight: "80%",
      },
      desktopL2: {
        fontSize: "48px",
        lineHeight: "80%",
      },
      desktopL3: {
        fontSize: "32px",
        lineHeight: "100%",
      },
      mobileL1: {
        fontSize: "96px",
        lineHeight: "80%",
      },
      mobileL2: {
        fontSize: "32px",
        lineHeight: "80%",
      },
      mobileL3: {
        fontSize: "24px",
        lineHeight: "100%",
      },
    },
  },
  Text: {
    baseStyle: {
      lineHeight: "150%",
    },
    sizes: {
      desktopL1: {
        fontSize: "18px",
      },
      desktopL2: {
        fontSize: "14px",
      },
      mobileL1: {
        fontSize: "16px",
      },
      mobileL2: {
        fontSize: "12px",
      },
    },
    variants: {
      default: {
        fontWeight: "600",
        letterSpacing: "0px",
        textTransform: "none",
      },
      allCapsL1: {
        fontWeight: "600",
        letterSpacing: "0.24px",
        textTransform: "uppercase",
      },
      lightWeightL1: {
        fontWeight: "lighter",
        letterSpacing: "0px",
        textTransform: "none",
      },
      allCapsL2: {
        fontWeight: "600",
        letterSpacing: "0.05px",
        textTransform: "uppercase",
      },
      mobileAllCapsL2: {
        fontWeight: "600",
        letterSpacing: "0px",
        textTransform: "uppercase",
      },
    },
  },
};

export { components };
