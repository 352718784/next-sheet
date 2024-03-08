"use client"
import {Parent} from "@/components/parent";
import {useState} from "react";

const DashboardPage = () => {
    const [ parentShow, setParentShow ] = useState(false)
    return <div className='space-y-4'>
        <button onClick={() => setParentShow(!parentShow)} className='bg-red-500 text-white px-4 py-2'>
            { parentShow ? 'destroy parent' : 'create parent'}
        </button>
        {
            parentShow && <Parent></Parent>
        }
    </div>
}
export default DashboardPage
