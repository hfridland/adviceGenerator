import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdvice, selectAdvice } from '../../slices/adviceSlice'

import * as api from '../../config'

export const useAdvice = () => {
  const [reload, setReload] = useState(true)
  const dispatch = useDispatch()
  let { id, advice } = useSelector(selectAdvice)
  // let id = useSelector(selectAdviceId)
  // let advice = useSelector(selectAdviceText)

  useEffect(() => {
    if (reload) {
      dispatch(fetchAdvice(api.ADVICE + '?t=' + uuidv4()))
      setReload(false)
    }
  }, [dispatch, reload, id, advice])

  return { id, advice, setReload }
}
