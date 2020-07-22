import { useState } from 'react'

const useForm = initialStateValue => {

    const [value, setValue] = useState(initialStateValue)

    const handleInput = event => { setValue(event.target.value) }

    const resetInput = () => { setValue('') }

    return [value, handleInput, resetInput]

}

export default useForm;