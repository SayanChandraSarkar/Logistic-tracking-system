import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

// import { TabPanel, MuiTabs } from "components/mui";

import ConsignmentAdd from './components/ConsignmentAdd';
import ConsignmentUpload from './components/ConsignmentUpload';
// import ConsignmentView from "./components/ConsignmentView";
import TabPanel from '../../components/micro/TabPanel';
import Page from '../../components/micro/Page';
import PageHeading from '../../components/micro/PageHeading';

import { PATH_DASHBOARD } from '../../routes/paths';

const tabs = ['Search', 'Add data', 'Upload data'];

export default function Consignment() {
  const navigate = useNavigate();
  const { tabType } = useParams();

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (event, newValue) => {
    if (newValue === 2) {
      return navigate(PATH_DASHBOARD.consignment.upload);
    }
    if (newValue === 1) {
      return navigate(PATH_DASHBOARD.consignment.add);
    }

    return navigate(PATH_DASHBOARD.consignment.search);
  };

  useEffect(() => {
    if (tabType === 'upload') {
      setActiveTab(2);
    } else if (tabType === 'add') {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, [tabType]);

  return (
    <Page title="Consignments">
      <Container maxWidth="xl">
        <PageHeading title="Consignments" />

        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange}>
                    {
                        tabs.map(tab => <Tab key={tab} label={tab} />)
                    }
                </Tabs>
            </Box> */}
        <TabPanel value={activeTab} index={0}>
          view
          {/* <ConsignmentView /> */}
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <ConsignmentAdd />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <ConsignmentUpload />
        </TabPanel>
      </Container>
    </Page>
  );
}
