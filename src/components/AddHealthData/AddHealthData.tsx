import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss";
import useFormValidation from "../../common/useFormValidation/useFormValidation";
const AddHealthData = () => {
  const healthContext: any = useContext(mainContext);
  const { setHealthData, healthData } = healthContext;

  // const useInputUserFormValition = useFormValidation(); 

  // const inValidUser = (userName:any) => userName === 'Php' || userName === 'Php' 
const {   input: userInput,
  setInput: setUserInput,
  inputTouched: userIsTouched,
  setInputTouched: setUserIsTouched,
  inputIsEmpty: userIsEmpty }:any = useFormValidation((userInput: any) => userInput === '');

  // const [hr, setHR] = useState(0);

  const {   input: hrInput,
    setInput: setHrInput,
    inputTouched: hrIsTouched,
    setInputTouched: setHrIsTouched,
    inputIsEmpty: hrIsEmpty }:any = useFormValidation((hrInput: any) => hrInput <= 0  );

  const addNewHealthData = (e: any) => {
    e.preventDefault();
    // console.log("username input", userInput);
    // console.log("Hr", hrInput);
    const newHealthData = [
      ...healthData,
      {
        id: 12,
        HR: 12,
        SBP: 22,
        DBP: 32,
        sugar: 42,
        cal: 52,
        hemoglobin: 62,
        spo2: 1232,
        name: "arc2",
      },
    ];
    setHealthData(newHealthData);
  };

  // console.log('chcek user name inputIsEmpty',userIsEmpty)
//   const changeUserName = (e: any) => {
//     if (e.target.value !== "") {
//       setUserNameIsEmpty(false);
//     } else {
//       setUserNameIsEmpty(true);
//     }
//     setUserName(e.target.value);
//   };
  return (
    <div>
      <form onSubmit={(e) => addNewHealthData(e)}>
        <div className={styless["form-control"]}>
          <label htmlFor="username">user name</label>
          <input
            type="text"
            id="username"
            value={userInput}
            onBlur={() => setUserIsTouched(true)}
            onChange={(e) => setUserInput(e.target.value)}
          />
          {userIsTouched && userIsEmpty && (
            <span className={styless["error-class"]}>
              user name can not be empty
            </span>
          )}
        </div>

        <div className="sm:col-span-2 sm:col-start-1 w-96">
          <label
            htmlFor="hr"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Heart Rate
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="hr"
              id="hr"
              value={hrInput}
              onBlur={() => setHrIsTouched(true)}
              onChange={(e) => setHrInput(parseFloat(e.target.value))}
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
             {hrIsTouched && hrIsEmpty && (
            <span className={styless["error-class"]}>
              Hr can not be empty
            </span>
          )}
          </div>
        </div>
        <button disabled={hrIsEmpty} className={hrIsEmpty ? styless["submit-bt-empty"] :  styless["submit-bt"]} type="submit">
          add New
        </button>
      </form>
    </div>
  );
};
export default AddHealthData;
