import { React, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import ButtonOptionForm from "./ButtonOptionForm";
import UserInfoForm from "./UserInfoForm";
import InitialForm from "./InitialForm";
import SpecificForm from "./SpecificForm";
import SendForm from "./SendForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showUserForm, showInitialForm, showSpecificForm, showSendForm, setTypeEventForm } from "../../states/formSlice";

/**
 * A React functional component that represents a request form.
 * @returns The JSX element that renders the request form.
 */
const RequestForm = () => {

  const userForm = useSelector((state) => state.form.userForm);
  const initialForm = useSelector((state) => state.form.initialForm);
  const specificForm = useSelector((state) => state.form.specificForm);
  const sendForm = useSelector((state) => state.form.sendForm);
  const methods = useForm();
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form.formState);
  const reset = methods.reset;
  const navigate = useNavigate();

  /**
   * Callback function that is called when the form is submitted.
   * It dispatches actions to show the corresponding form state
   * or triggers the submit form logic.
   * @param {Object} data - The data collected from the form.
   */
  const onSubmit = (data) => {
    if (formState === "UserForm") {
      dispatch(showUserForm());
    }

    if (formState === "InitialForm") {
      dispatch(showInitialForm());
    }

    if (formState === "SpecificForm") {
      dispatch(setTypeEventForm(data.typeEvent));
      dispatch(showSpecificForm());
    }

    if (formState === "SendForm") {
      dispatch(showSendForm());
    }

    if (formState === "SubmitForm") {
      /* Submit Form Logic */
      // console.log(data);
    }
  };

  return (
    <div className="w-full h-full flex justify-between overflow-y-auto">
      <div className="flex flex-col items-center w-full h-full px-12 gap-5">
        <Header tittle={"Nueva Solicitud"} />
        <div className="w-full h-12 flex">
          <ButtonOptionForm
            text={"Información personal"}
            active={ userForm }
          />
          <ButtonOptionForm
            text={"Información general del evento"}
            active={ initialForm }
          />
          <ButtonOptionForm
            text={"Información específica del evento"}
            active={ specificForm }
          />
          <ButtonOptionForm
            text={"Envío del formulario"}
            active={ sendForm }
          />
        </div>
        <div className="py-12 w-full h-full p-12 sm:px-6 overflow-y-auto">
          <FormProvider {...methods}>
            <form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
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