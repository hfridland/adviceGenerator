import { ToastContainer } from 'react-toastify'
import { useError } from './userError'

const Error = () => {
  useError()
  return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error
