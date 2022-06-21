import { Html5QrcodeScanner } from "html5-qrcode";
import { useRef, useEffect, useState } from "react";

export const BarcodeScanner = () => {
    const barcodeScannerContainer = useRef(undefined);
    const barcodeScanner = useRef(undefined);
    const [allow, setAllow] = useState(true)

    const onScanSuccess = (decodedText) => {
        // call api endpoint with address
        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:5000/qrcode', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify({ address: decodedText }));

        barcodeScanner.current.clear();
        setAllow(false);
    }

    const onScanerror = (errorMessage) => {
        console.log(errorMessage)
    };

    useEffect(() => {
        barcodeScanner.current = new Html5QrcodeScanner(
            "qr-reader",
            {
                fps: 10,
                qrbox: 250
            },
            true
        );
        barcodeScanner.current.render(onScanSuccess, onScanerror);
    }, [allow]);


    return (
            <div>
                <div id={"qr-reader"} ref={barcodeScannerContainer}>
                    Barcode Scanner
                </div>
                <button onClick={() => setAllow(true)}>Allow Scan again</button>
            </div>
        )
};
