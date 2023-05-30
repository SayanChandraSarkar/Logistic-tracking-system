import { useDispatch, useSelector } from "react-redux";
//
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// components
import TrackingDetailsForm from './TrackingDetailsForm';
import { onEditAwb } from "../redux/tracking";
// hooks
import useTracking from "../hooks/useTracking";

// -----------------------------------------------

export default function EditDetails() {
  const dispatch = useDispatch();
  const { updateConsignment } = useTracking();

  // all tracking data from redux
  const { editAwb } = useSelector(state => state.tracking.value);


  return (
    <Drawer
      anchor={'right'}
      open={!!editAwb}
      onClose={() => dispatch(onEditAwb(null))}
      elevation={1}
    >
      <Box sx={{ width: { xs: 300, md: 500 }, px: 2 }}>
        <TrackingDetailsForm
          onSubmit={updateConsignment}
        />
      </Box>
    </Drawer>
  );
}


// NewStatus.propTypes = {
//   awb: PropTypes.string,
//   status: PropTypes.string,
//   onAdd: PropTypes.func,
// };
