import { useState } from "react"

const useForm =  (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue)
    return [values, showSuccessMessage, setValues, setShowSuccessMessage]
}

export default useForm