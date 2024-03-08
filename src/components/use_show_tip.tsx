import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {createRoot} from "react-dom/client";

export const useShowTip = () => {
    const [info, setInfo] = useState({
        top: 0
    })
    const divRef = useRef<HTMLDivElement|null>();
    let root:any
    useEffect(() => {
        function unMountDiv(){
            if (!divRef.current) return
            root?.unmount()
            divRef.current?.parentElement &&
            divRef.current.parentElement.removeChild(divRef.current);
            divRef.current = undefined
            root = null
        }
        unMountDiv()
        if (info.top) {
            divRef.current = document.createElement('div');
            divRef.current.setAttribute('style',
                `top:${info.top}px;right:100px;position:fixed;z-index:1100;`,
            );
            document.body.appendChild(divRef.current);
            root = createRoot(divRef.current);
            root.render(<div className='p-8 bg-amber-500'>info.top = {info.top}</div>)
        }
        return () => {
            console.log('trigger clear effect')
        }
    }, [info])
    useEffect(() => {
        return () => {
            root?.unmount()
            divRef.current?.parentElement &&
            divRef.current.parentElement.removeChild(divRef.current);
        }
    }, [])
    return {
        setInfo
    }
}
