import { alpha } from '@mui/material/styles';

// -----------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: alpha('#6F5FFF', 0.05),
  light: '#8679FE',
  main: '#6F5FFF',
  dark: '#6150e7',
  darker: '#2c1abb',
};
const SECONDARY = {
  lighter: alpha('#22FADD', 0.08),
  light: '#76FFEC',
  main: '#22FADD',
  dark: '#04c8c0',
  darker: '#026460',
};
const INFO = {
  lighter: alpha('#338eff', 0.08),
  light: '#338eff',
  main: '#338eff',
  dark: '#006ffa',
  darker: '#0056c2',
};
const SUCCESS = {
  lighter: alpha('#07f2cb', 0.08),
  light: '#51fade',
  main: '#00e0bb',
  dark: '#06caaa',
  darker: '#05a388',
};
const WARNING = {
  lighter: alpha('#ffe874', 0.08),
  light: '#ffcf7b',
  main: '#ffe874',
  dark: '#ffa300',
  darker: '#d68900',
};
const ERROR = {
  lighter: alpha('#f73365', 0.08),
  light: '#fa82a0',
  main: '#f73365',
  dark: '#f50c47',
  darker: '#d0083b',
};

const GREY = {
  0: '#F6F6F6',
  100: '#ffffff',
  200: '#F2F3F7',
  300: '#D7DCE8',
  400: '#BCC5D8',
  500: '#A1AEC9',
  600: '#6B7FAA',
  700: '#556A94',
  800: '#36435E',
  900: '#171D28',
  500_8: alpha('#A1AEC9', 0.08),
  500_12: alpha('#A1AEC9', 0.12),
  500_16: alpha('#A1AEC9', 0.16),
  500_24: alpha('#A1AEC9', 0.24),
  500_32: alpha('#A1AEC9', 0.32),
  500_48: alpha('#A1AEC9', 0.48),
  500_56: alpha('#A1AEC9', 0.56),
  500_80: alpha('#A1AEC9', 0.8),
};

const GREY_DARK = {
  0: '#222835',
  100: '#2A3449',
  200: '#36435E',
  300: '#465679',
  400: '#556A94',
  500: '#6B7FAA',
  600: '#A1AEC9',
  700: '#BCC5D8',
  800: '#D7DCE8',
  900: '#F9FAFB',
  500_8: alpha('#6B7FAA', 0.08),
  500_12: alpha('#6B7FAA', 0.12),
  500_16: alpha('#6B7FAA', 0.16),
  500_24: alpha('#6B7FAA', 0.24),
  500_32: alpha('#6B7FAA', 0.32),
  500_48: alpha('#6B7FAA', 0.48),
  500_56: alpha('#6B7FAA', 0.56),
  500_80: alpha('#6B7FAA', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },

  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    grey: GREY,
    text: { primary: GREY[800], secondary: GREY[500], disabled: GREY[400] },
    background: { paper: GREY[100], default: GREY[0], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    grey: GREY_DARK,
    text: { primary: GREY_DARK[800], secondary: GREY_DARK[500], disabled: GREY_DARK[400] },
    background: { paper: GREY_DARK[100], default: GREY_DARK[0], neutral: GREY_DARK[200] },
    action: { active: GREY_DARK[600], ...COMMON.action },
  },
};

export default palette;
