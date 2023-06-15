import { useState } from "react";

const useFormValidation: any = ( validationFunc:any ) => {
    const [input, setInput] = useState("");
    const [inputTouched, setInputTouched] = useState(false);
    
    // console.log('input HR',typeof input, input)
  const inputIsEmpty =  validationFunc(input);
   console.log('inputIsEmpty',inputIsEmpty)
    const formValidationObj = {
        input,
        setInput,
        inputTouched,
        setInputTouched,
        inputIsEmpty
    }
    return formValidationObj;


};

export default useFormValidation;