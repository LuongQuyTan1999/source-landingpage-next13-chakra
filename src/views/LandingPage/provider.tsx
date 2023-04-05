"use client";
import theme from "@/theme";
import { Fonts } from "@/theme/components/fonts";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
