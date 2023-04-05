import { createIcon } from "@chakra-ui/react";

export const ArrowIcon = createIcon({
  displayName: "ArrowIcon",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M8.45875 7.08056L16.9807 7.08044M16.9807 7.08044L16.9807 15.4812M16.9807 7.08044L7.08125 16.9799"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});
