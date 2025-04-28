import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { clearError, selectErrorMessage } from '../../slices/errorSlice'

export const useError = () => {
  const errorMessage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])
}
