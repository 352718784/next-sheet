import {FC, useEffect, useMemo, useState} from "react";

export const Children:FC<{parentName: string}> = (props) => {
    console.log(props)
    const [parentName = props.parentName] = useState(props.parentName)
    useEffect(() => {

    }, [props.parentName])

    const parentNameUseMemo = useMemo(() => {
        return props.parentName
    }, [props.parentName])
    return <div>
        parentNameUseMemo: {parentNameUseMemo}
        <br/>
        selfParentName:{parentName}
    </div>
}
