import { React } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Header from "../../components/Header";
import ButtonOptionForm from "./ButtonOptionForm";
import UserInfoForm from "./UserInfoForm";
import InitialForm from "./InitialForm";
import SpecificForm from "./SpecificForm";
import SendForm from "./SendForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createRequest } from "../../queries/queryRequestForm";
import { useNavigate } from "react-router-dom";

import {
  showUserForm,
  showInitialForm,
  showSpecificForm,
  showSendForm,
  setTypeEventForm,
} from "../../states/formSlice";

/**
 * A React functional component that represents a request form.
 *
 * @returns The JSX element that renders the request form.
 */
const RequestForm = () => {
  const userForm = useSelector((state) => state.form.userForm);
  const initialForm = useSelector((state) => state.form.initialForm);
  const specificForm = useSelector((state) => state.form.specificForm);
  const sendForm = useSelector((state) => state.form.sendForm);
  const typeEvent = useSelector((state) => state.form.typeEventForm);
  const methods = useForm();
  const reset = methods.reset;
  const setValue = methods.setValue;
  const userId = useSelector((state) => state.auth.id);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form.formState);

  const resetHandler = () => {
    setValue("assistance", "");
    setValue("ages", "");
    setValue("requiredSpace", "");
    setValue("equipment", "");
    setValue("selfEquipment", "");
    setValue("softInstallation", "");
    setValue("electricInstallation", "");
    setValue("mounting", "");
    setValue("tableNumber", "");
  };

  /**
   * Callback function that is called when the form is submitted.
   * It dispatches actions to show the corresponding form state
   * or triggers the submit form logic.
   *
   * @param {Object} data - The data collected from the form.
   */
  const onSubmit = async (data) => {
    if (formState === "UserForm") {
      dispatch(showUserForm());
    }

    if (formState === "InitialForm") {
      if (data.cellphone.length >= 10) {
        dispatch(showInitialForm());
      }
    }

    if (formState === "SpecificForm") {
     
      dispatch(showSpecificForm());
    }

    if (formState === "SendForm") {
      if (
        data.postalCode.length >= 5 &&
        data.specificDescription.length >= 300
      ) {
        dispatch(showSendForm());
      }
    }

    if (formState === "SubmitForm") {
      /* Submit Form Logic */
      try {
        await createRequest({ ...data, userId: userId }, typeEvent);
        dispatch(showUserForm());
        navigate("/request");
        reset();
      } catch (err) {
        alert(err.response.data.message);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-between overflow-y-auto">
      <div className="flex flex-col items-center w-full h-full px-12 gap-5">
        <Header tittle={"Nueva Solicitud"} />
        <div className="w-full h-12 flex gap-x-2">
          <ButtonOptionForm text={"Información personal"} active={userForm} />
          <ButtonOptionForm text={"Información general"} active={initialForm} />
          <ButtonOptionForm
            text={"Información específica"}
            active={specificForm}
          />
          <ButtonOptionForm text={"Envío del formulario"} active={sendForm} />
        </div>
        <div className="py-12 w-full h-full p-12 sm:px-6 overflow-y-auto">
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-6"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              {userForm && <UserInfoForm />}
              {initialForm && <InitialForm />}
              {specificForm && <SpecificForm />}
              {sendForm && <SendForm />}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
