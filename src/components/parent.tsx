import {Children} from "@/components/children";
import {useState} from "react";
import {useShowTip} from "@/components/use_show_tip";

export const Parent = () => {
    const [parentName, setParentName] = useState('name1')
    const changeName = () => {
        setParentName(`name-${Date.now()}`)
    }
    const {setInfo} = useShowTip()
    return <div className='space-x-4'>
        <button className={'bg-blue-500 text-white px-4 py-2'} onClick={() => setInfo({top: 200})}>setInfo 200</button>
        <button className={'bg-blue-500 text-white px-4 py-2'} onClick={() => setInfo({top: 100})}>setInfo 100</button>
        <button className={'bg-blue-500 text-white px-4 py-2'} onClick={() => setInfo({top: 0})}>setInfo 0</button>
    </div>
}
