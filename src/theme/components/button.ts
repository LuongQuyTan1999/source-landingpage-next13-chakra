import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    w: "100%",
    minW: "100px",
    maxW: "fit-content",
    borderRadius: "50px",
  },

  variants: {
    primary: {
      bg: "primary.500",
      background: "primary.500",
      color: "white",

      _hover: {
        bg: "primary.400",
        background: "primary.400",
      },

      _active: {
        bg: "primary.600",
        background: "primary.600",
      },

      _disabled: {
        bg: "coolGray.400",
        background: "coolGray.400",
        pointerEvents: "none",
      },
    },

    "outline-primary": {
      bg: "transparent",
      background: "transparent",
      color: "primary.500",
      border: "1px solid",
      borderColor: "primary.500",

      _hover: {
        color: "primary.400",
        borderColor: "primary.400",
      },

      _active: {
        color: "primary.600",
        borderColor: "primary.600",
      },

      _disabled: {
        color: "coolGray.400",
        borderColor: "coolGray.400",
        pointerEvents: "none",
      },
    },

    secondary: {
      bg: "secondary.500",
      background: "secondary.500",
      color: "white",

      _hover: {
        bg: "secondary.400",
        background: "secondary.400",
      },

      _active: {
        bg: "secondary.600",
        background: "secondary.600",
      },

      _disabled: {
        bg: "coolGray.400",
        background: "coolGray.400",
        pointerEvents: "none",
      },
    },

    "outline-secondary": {
      bg: "transparent",
      background: "transparent",
      color: "secondary.500",
      border: "1px solid",
      borderColor: "secondary.500",

      _hover: {
        color: "secondary.400",
        borderColor: "secondary.400",
      },

      _active: {
        color: "secondary.600",
        borderColor: "secondary.600",
      },

      _disabled: {
        color: "coolGray.400",
        borderColor: "coolGray.400",
        pointerEvents: "none",
      },
    },

    dark: {
      bg: "coolGray.900",
      background: "coolGray.900",
      color: "white",

      _hover: {
        bg: "coolGray.600",
        background: "coolGray.600",
      },

      _active: {
        bg: "coolGray.700",
        background: "coolGray.700",
      },

      _disabled: {
        bg: "coolGray.400",
        background: "coolGray.400",
        pointerEvents: "none",
      },
    },

    "outline-dark": {
      bg: "transparent",
      background: "transparent",
      border: "1px solid",
      color: "coolGray.900",
      borderColor: "coolGray.900",

      _hover: {
        color: "coolGray.600",
        borderColor: "coolGray.600",
      },

      _active: {
        color: "coolGray.700",
        borderColor: "coolGray.700",
      },

      _disabled: {
        color: "coolGray.400",
        borderColor: "coolGray.400",
        pointerEvents: "none",
      },
    },

    white: {
      bg: "white",
      background: "white",
      color: "text.900",
      borderRadius: "50px",
      lineHeight: "100%",
      outlineOffset: 0,
      _hover: {
        background: "whiteAlpha.250",
        color: "text.300",
        outline: "solid 1px",
        outlineColor: "whiteAlpha.75",
      },

      _active: {
        background: "whiteAlpha.300",
        color: "text.0",
        outline: "solid 1px",
        outlineColor: "whiteAlpha.75",
      },

      _disabled: {
        bg: "coolGray.400",
        background: "coolGray.400",
        pointerEvents: "none",
        color: "white",
      },
    },

    "outline-white": {
      bg: "transparent",
      background: "transparent",
      border: "1px solid",
      color: "white",
      borderColor: "white",

      _hover: {
        color: "primary.400",
        borderColor: "primary.400",
      },

      _active: {
        color: "primary.600",
        borderColor: "primary.600",
      },

      _disabled: {
        color: "coolGray.400",
        borderColor: "coolGray.400",
        pointerEvents: "none",
      },
    },

    "outline-error": {
      bg: "transparent",
      background: "transparent",
      border: "1px solid",
      color: "error.500",
      borderColor: "error.100",

      _hover: {
        borderColor: "error.400",
      },

      _active: {
        borderColor: "error.600",
      },

      _disabled: {
        color: "coolGray.400",
        borderColor: "coolGray.400",
        pointerEvents: "none",
      },
    },
  },

  sizes: {
    sm: {
      h: "42px",
    },

    md: {
      h: "50px",
    },
  },

  // The default variant value
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
