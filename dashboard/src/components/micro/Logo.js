import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// -----------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const logo = (
    <Box sx={{ width: 60, ...sx }}>
      <img src={`/assets/logo/favicon1.png`} alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
