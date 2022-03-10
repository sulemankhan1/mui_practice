import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: "darkslategray",
        },
        primary: {
          color: "darkblue",
        },
        secondary: {
          color: "darkred",
          backgroundColor: "pink",
        },
      },
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            border: "1px dashed darkblue",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: "1px dashed darkred",
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled("div", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.backgroundColor === "primary" && styles.primary,
    props.backgroundColor === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  //   backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

export default function UsingOptions() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent
        sx={{ m: 1 }}
        backgroundColor="primary"
        variant="dashed"
      >
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} backgroundColor="secondary">
        Secondary
      </MyThemeComponent>
    </ThemeProvider>
  );
}
