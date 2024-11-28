import React from "react";
import SignaturePad from "react-signature-canvas";
import { useRef, useState } from "react";

function Signature() {
    const panelFirma = useRef(null);
    const [signature, setsignature] = useState("")


    const handleClear = (env) => panelFirma.current?.clear();
    
    const handleSave = () =>{
         setsignature(panelFirma.current?.getTrimmedCanvas().toDataURL());
        console.log(signature);
    }

    const handleDownload = () =>{
        let a = document.createElement('a');
        a.href = signature;
        a.download = "test.png"
        a.click();
    }
    
    return(
        <div>
            <div style={{border: "2px solid black"}}>
                <SignaturePad
                    canvasProps={{width: 700, height: 300, className: 'sigCanvas'}}
                    ref={panelFirma}
                    clearOnResize={false}
                />
                
            </div>
            <button onClick={handleClear}>Limpiar</button>
            <button onClick={handleSave}>Guardar firma</button>
            <button onClick={handleDownload}>Descargar firma</button>
            <br/>

            <img src={signature}/>
        </div>
    )

}
export default Signature;
