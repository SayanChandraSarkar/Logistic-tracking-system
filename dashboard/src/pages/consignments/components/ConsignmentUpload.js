import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

// import useAuth from "../../../hooks/useAuth";
// import useApi from "../../../hooks/api/useApi";
import useTracking from "../../../hooks/useTracking";

// import { clearTrackingData } from "../../../redux/tracking";
// import { setErrorData } from "../../../redux/error";
// import { urls } from "../../../configs";
import excelToJson from "../../../utils/excelToJson";

import DropArea from "./drop-area";
// import { PATH_DASHBOARD } from "../../../routes/paths";
import { config } from "../../../configs";
import { fDate2 } from "../../../utils/formatTime";
import { alphaNumeric } from "../../../utils/formatString";
// import ExcelPreview from "./ExcelPreview";



export default function Consignment() {
    const {
        DEFAULT_CONSIGNMENT,
        uploadConsignments,
        uploading
    } = useTracking();

    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState([]);



    const resetFile = () => {
        setFile(null);
        setJsonData([]);
    }

    const onDrop = (excelFile) => {
        // handle File
        const fileType = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        if (excelFile === null) {
            resetFile();
            return;
        }

        if (!fileType.includes(excelFile.type)) {
            resetFile();
            return;
        }

        // set name
        setFile({ name: excelFile.name, size: excelFile.size });

        excelToJson(excelFile).then(d => {
            formatRawInputs(d);
        });
    }




    const formatRawInputs = (raw) => {
        // batch of 100 (config.BATCH_SIZE)
        const consignments = [];

        let pushed = 0;
        let batch = -1;

        for (let i = 0; i < raw.length; i += 1) {
            const r = raw[i];

            const dated = fDate2(r.Date);
            const awb = alphaNumeric(r.AWB);

            if (dated.length > 9 && awb.length > 3) {
                // 0-99 0
                // 100-199 - 1
                // 200 - 299 - 2
                if (pushed % config.BATCH_SIZE === 0) {
                    batch += 1;
                    consignments[batch] = [];
                }

                consignments[batch].push({
                    ...DEFAULT_CONSIGNMENT,
                    dated,
                    awb,
                    "forwarding_no": r.Forwading,
                    "courier": r['Co-Courier'],
                    "vendor": r.Vendor,
                    "sender": r.Sender,
                    "receiver": r.Receiver,
                    "destination": r.Destination,
                    "content": r.Content,
                    "pack": r.Pcs,
                    "wt": r.Weight,
                    "dwt": r['Dim Weight'],
                    "status": r.Status,
                });

                pushed += 1;
            }
        }


        setJsonData(consignments);
    }


    const onUpload = async () => {

        for (let i = 0; i < jsonData.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await uploadConsignments(jsonData[i])
                .then(res => {
                    console.log('113 res', res);
                });
        }

        resetFile();
    }



    return (<div className="pt-5 pb-5">
        <DropArea onDrop={onDrop} />
        {
            jsonData.length > 0 && <>
                <Stack direction='row' className="mt-2 jcsb aic">
                    <Stack direction='row' className="mt-2 aic">
                        <img src='/assets/svg/excel.svg' className="ic50 mr50" alt="..." />
                        <div className="w-60">
                            <div className="lc1">{file.name} </div>
                            <small>({Math.ceil(file.size / 1024)}KB)</small>
                        </div>
                    </Stack>
                    <Button color="error" onClick={() => setJsonData([])}>Remove</Button>
                </Stack>

                {/* <ExcelPreview data={jsonData} /> */}

                <div className="py3 mw300 mauto">
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={uploading}
                        onClick={onUpload}
                    >
                        Upload
                    </LoadingButton>
                </div>
            </>
        }

    </div>)
}



