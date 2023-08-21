import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAdvice, selectAdvice } from "./advice-slice"

export const useAdvice = () => {
    const [reload, setReload] = useState(true)
    const dispatch = useDispatch()
    let {id, advice, status} = useSelector(selectAdvice)

    useEffect(() => {
        if (reload) {
            dispatch(loadAdvice())
            setReload(false)
        }
    }, [dispatch, reload])

    return {id, advice, setReload, status}
}