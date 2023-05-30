/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// @mui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

//
import Iconify from "../../../components/micro/Iconify";
import SvgIconStyle from "../../../components/micro/SvgIconStyle";
import { PATH_DASHBOARD } from "../../../routes/paths";



const data = [
    {
        tooltip: "Consignments connected in last 7 days",
        subtitle: "Last 7 days",
        key: "connected7",
        color: 'primary',
        icon: 'ic:outline-double-arrow'
    },
    {
        tooltip: "Consignments connected in last 30 days",
        title: "Consignments",
        subtitle: "Last 30 days",
        key: "connected30",
        color: 'info',
        icon: 'bi:box-fill'
    },
    {
        tooltip: "Consignments on transit in last 30 days",
        subtitle: "On Transit",
        key: "onTransit",
        color: 'secondary',
        icon: 'bxs:truck'
    },
    {
        tooltip: "Consignments un-delivered in last 30 days",
        subtitle: "Un delivered",
        key: "unDelivered",
        color: 'warning',
        icon: 'fa-solid:truck-loading'
    },
    {
        tooltip: "Delivered in last 30 days",
        subtitle: "Delivered",
        key: "delivered",
        color: 'success',
        icon: 'fluent:box-checkmark-24-filled'
    },
    {
        tooltip: "RTO in last 30 days",
        subtitle: "RTO",
        key: "rto",
        color: 'error',
        icon: 'ic:baseline-assignment-return'
    },
];

export const Insightcards = () => {
    const { counts } = useSelector(state => state.insight.value);



    return (<>
        <Grid container spacing={3}>
            {
                data.map(e => <Grid item xs={12} md={4} key={e.key}>
                    <Tooltip placement="top" arrow title={`${counts[e.key]} ${e.tooltip}`}>
                        <Paper sx={{ p: 2 }}>
                            <Stack direction='row' className='aic jcsb'>
                                <Stack>
                                    <Typography variant="h3">{counts[e.key]}</Typography>
                                    <Typography variant="font6" color='grey.600'>{e.subtitle}</Typography>
                                </Stack>
                                <Box sx={{ bgcolor: `${e.color}.lighter`, color: `${e.color}.main`, height: 60, width: 60 }} className='d-flex aic jcc br-1 p-1 d-c'>
                                    <Iconify icon={e.icon} height={32} width={32} />
                                </Box>
                            </Stack>
                        </Paper>
                    </Tooltip>
                </Grid>)
            }
        </Grid>

    </>
    )
}



const links = [
    { c: "#2a8461", dc: '#00ce7e', bg: "#0edf8e12", i: "add", l: <>Add <br />Consignments</>, u: PATH_DASHBOARD.consignment.add },
    // { c: "#00dbea", bg: "#00dceb1f", i: "upload", l: "Upload", u: "/dashboard/consignment/upload" },
    { c: "#0468ca", dc: '#1d97ff', bg: "#0ebbe71a", i: "tracking", l: <>View <br />Consignments</>, u: PATH_DASHBOARD.tracking.root },
    // { c: "#3dffa6", bg: "#3cffa61f", i: "truck", l: "On Transit", u: "/dashboard/tracking/transit" },
    { c: "#df9913", dc: '#ffb322', bg: "#fed60214", i: "estimation", l: <>Req. for<br />Estimations</>, u: PATH_DASHBOARD.general.estimation },
    { c: "#cc1b47", dc: '#f7416f', bg: "#ee0b6512", i: "query", l: <>View <br />Queries</>, u: PATH_DASHBOARD.general.queries },
];

export const Linkcards = () => {
    const theme = useTheme();

    return (<>
        <Typography variant='h5' sx={{ mt: 3, mb: 1 }}>Quick links</Typography>
        <Grid container spacing={3}>
            {
                links.map((e, i) => <Grid
                    item
                    key={i}
                    xs={6} md={3}
                >
                    <Link
                        to={e.u}
                        className='td-n'
                    >
                        <Paper
                            elevation={1}
                            sx={{
                                p: 1.5,
                                bgcolor: e.bg,
                                color: theme.palette.mode === 'light' ? e.c : e.dc,
                                '&:hover': {
                                    bgcolor: e.dc,
                                    color: '#fff'
                                }
                            }}
                        >

                            <Stack direction='row' className='aic' >
                                <Box sx={{ height: 45, width: 45 }} className='d-flex aic jcc'>
                                    <SvgIconStyle src={`/assets/icons/${e.i}.svg`} sx={{ width: '30px', height: '30px' }} />
                                </Box>
                                <Typography variant="h6">{e.l}</Typography>
                            </Stack>
                        </Paper>
                    </Link>
                </Grid>)
            }
        </Grid>


    </>)
}




// export const History30Days = () => {
//     const insight = useSelector(state => state.insight.value);

//     const [labels, setLabels] = useState([])
//     const [series, setSeries] = useState([])

//     useEffect(() => {
//         const tlabels = [];

//         if (insight.last30History) {
//             const series1 = [];

//             if (insight.last30History) {
//                 insight.last30History.forEach(e => {
//                     tlabels.push(`${e.dated}T00:00:00.000Z`);
//                     series1.push(e.counts);
//                 });

//                 setSeries([
//                     { name: "Last 30 days", data: series1 }
//                 ]);
//                 setLabels(tlabels);
//             }
//         }

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [insight.last30History])

//     return (<Grid item xs={12} lg={8}>
//         <Paper elevation={1} sx={{ p: 2 }} >
//             <h4 className='pb1'>Last 30 days</h4>
//             {
//                 (series.length && series[0].data.length) ? <ApexChart
//                     series={series}
//                     labels={labels}
//                     type="category"
//                 /> : <NoData />
//             }
//         </Paper>
//     </Grid>
//     )
// }



