import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { styles } from "./global";

export const theme = extendTheme({
  components,
  breakpoints,
  colors,
  styles,
});
