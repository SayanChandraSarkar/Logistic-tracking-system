import { createGradient } from "../../utils/cssStyles";
// -----------------------------------------------


export default function Paper(theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: { borderColor: theme.palette.grey[500_12] },
        },
        {
          props: { variant: 'flat' },
          style: {
            backgroundColor: 'transparent',
            backgroundImage: 'unset'
          },
        },
      ],

      styleOverrides: {
        root: {
          '&.MuiPaper-elevation': {
            backgroundColor: theme.palette.background.paper,
          },

          '&.MuiPaper-elevation0': {
            backgroundColor: 'unset',
            backgroundImage: 'unset'
          },
          '&.MuiPaper-elevation1': {
            backgroundImage: 'unset'
          },
          '&.MuiPaper-elevation3': {
            backgroundImage: createGradient(theme.palette.mode, 0.09)
          },
          '&.MuiPaper-elevation4': {
            backgroundImage: createGradient(theme.palette.mode, 0.11)
          },
          '&.MuiPaper-elevation6': {
            backgroundImage: createGradient(theme.palette.mode, 0.12)
          },
          '&.MuiPaper-elevation8': {
            backgroundImage: createGradient(theme.palette.mode, 0.13)
          },
          '&.MuiPaper-elevation12': {
            backgroundImage: createGradient(theme.palette.mode, 0.15)
          },
          '&.MuiPaper-elevation16': {
            backgroundImage: createGradient(theme.palette.mode, 0.17)
          },
          '&.MuiPaper-elevation24': {
            backgroundImage: createGradient(theme.palette.mode, 0.2)
          }
        },
      },
    },
  };
}
