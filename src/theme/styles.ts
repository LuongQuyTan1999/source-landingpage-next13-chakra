import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode("gray.800", "#ffffff")(props),
      bg: mode("white", "#080812")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),

  colors: {
    gray: {
      700: "#1f2733",
    },
  },
};

export default styles;
