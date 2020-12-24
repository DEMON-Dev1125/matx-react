export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard",
  },
  {
    name: "Users",
    children: [
      {
        name: "Freelancers",
        path: "/users/freelancers",
      },
      {
        name: "Buyers",
        path: "/users/buyers",
      },
    ],
  },
  {
    name: "Forms",
    children: [
      {
        name: "Basic",
        path: "/forms/basic",
      },
      {
        name: "Editor",
        path: "/forms/editor",
      },
    ],
  },
  {
    name: "Drag and Drop",
    path: "/others/drag-and-drop",
  },
  {
    name: "Multilevel",
    children: [
      {
        name: "Level 1",
        children: [
          {
            name: "Item 1",
            path: "/charts/victory-charts",
          },
          {
            name: "Item 2",
            path: "/charts/react-vis",
          },
          {
            name: "Item 3",
            path: "/charts/recharts",
          },
          {
            name: "Item 4",
            path: "/charts/echarts",
          },
        ],
      },
    ],
  },
  {
    name: "Utilities",
    children: [
      {
        name: "Color",
        path: "/utilities/color",
      },
      {
        name: "Spacing",
        path: "/utilities/spacing",
      },
      {
        name: "Typography",
        path: "/utilities/typography",
      },
      {
        name: "Display",
        path: "/utilities/display",
      },
    ],
  },
  {
    name: "Sessions",
    children: [
      {
        name: "Sign in",
        path: "/session/signin",
      },
      {
        name: "Sign up",
        path: "/session/signup",
      },
      {
        name: "Forgot password",
        path: "/session/forgot-password",
      },
      {
        name: "Error",
        path: "/session/404",
      },
    ],
  },

  {
    name: "UI Kits",
    badge: { value: "50+", color: "secondary" },
    children: [
      {
        name: "Auto Complete",
        path: "/material/autocomplete",
      },
      {
        name: "Buttons",
        path: "/material/buttons",
      },
      {
        name: "Checkbox",
        path: "/material/checkbox",
      },
      {
        name: "Dialog",
        path: "/material/dialog",
      },
      {
        name: "Expansion Panel",
        path: "/material/expansion-panel",
      },
      {
        name: "Form",
        path: "/material/form",
      },
      {
        name: "Icons",
        path: "/material/icons",
      },
      {
        name: "Menu",
        path: "/material/menu",
      },
      {
        name: "Progress",
        path: "/material/progress",
      },
      {
        name: "Radio",
        path: "/material/radio",
      },
      {
        name: "Switch",
        path: "/material/switch",
      },
      {
        name: "Slider",
        path: "/material/slider",
      },
      {
        name: "Snackbar",
        path: "/material/snackbar",
      },
      {
        name: "Table",
        path: "/material/table",
      },
    ],
  },

  {
    name: "Map",
    path: "/map",
  },
];
