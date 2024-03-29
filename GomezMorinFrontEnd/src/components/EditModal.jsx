import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "./Button";
import { Button as Button2 } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { ModeEditOutline } from "@mui/icons-material";
import DropdownInput from "./DropdownInput";
import { updateForms } from "../queries/queryRequestForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRows } from "../states/formSlice";
import { postEmail } from "../queries/queryApi";
/**
 *  A React component that renders a modal with a form
 *
 * @returns {Jsx.Element} - A React JSX element representing a modal with a form
 */
const EditModal = ({ idForm, folio, estatus, userId, userPtr }) => {
  const navigate = useNavigate();
  const methods = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const transformData = (data) => {
    return data.map((item) => ({
      id: item._id,
      fecha: item.requestDate,
      folio: item.folio,
      userPtr: item.userPtr,
      tipo: item.membretatedLetterDoc ? "Persona moral" : "Persona física",
      evento: item.membretatedLetterDoc ? "-" : item.typeEvent,
      nombre: item.membretatedLetterDoc
        ? item.membretatedLetterDoc
        : item.nameEvent,
      estatus: item.status,
    }));
  };

  /**
   *  Handles the submit of the form
   *
   * @param {object} data
   */
  const onSubmit = async (data) => {
    try {
      const response = await updateForms({
        ...data,
        idForm: idForm,
        userId: userId,
      });
      const info = transformData(response);
      dispatch(setRows(info));
      navigate("/requestAll");
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsOpen(false);
    if (estatus != data.estatus) {
      try {
        const emailData = {
          title: "Cambio de estatus",
          message: `<!DOCTYPE html>
<html>
<head>
  <title>Notificación de Cambio de Estatus</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    h1 {
      color: #333;
    }
    
    p {
      margin-bottom: 10px;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #0492C2;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Notificación de Cambio de Estatus</h1>
    <p>Estimado/a usuario,</p>
    
    <p>Queremos informarte que el estatus de la solicitud con folio: <strong>${data.folio}</strong> ha sido modificado a <strong>${data.estatus}</strong>.</p>
    
    <p>Para obtener más detalles y acceder a la página de eventos, haz clic en el siguiente botón:</p>
    
    <p>
      <a class="button" href="http://eventos-ceceq.com" target="_blank">Ir a Eventos CECEQ</a>
    </p>
    
    <p>¡Gracias y que tengas un buen día!</p>
    
    <p>Atentamente,</p>
    <p>Goméz Morín</p>
  </div>
</body>
</html>`,
          userId: userPtr,
        };
        await postEmail(emailData);
        alert("Correo con modificación de estatus enviado");
      } catch (err) {
        alert(err.response.data.message);
      }
    }
  };

  /**
   * Handles the closing of the modal
   *
   * @returns {void}
   */

  const closeModal = () => {
    setIsOpen(false);
  };

  /**
   * Handles the opening of the modal
   *
   * @returns {void}
   */
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button2
        onClick={openModal}
        size="small"
        startIcon={<ModeEditOutline />}
      />
      {isOpen ? (
        <>
          <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <FormProvider {...methods}>
                      <div className="flex flex-col justify-between h-full gap-4">
                        <form
                          onSubmit={methods.handleSubmit((data) =>
                            onSubmit(data, idForm)
                          )}
                          className="flex flex-col justify-between h-full gap-4"
                        >
                          <InputForm
                            label={"Folio"}
                            name={"folio"}
                            type={"number"}
                            required={false}
                            placeholder={"Folio"}
                            defaultValue={folio}
                            min={1}
                          />
                          <DropdownInput
                            label={"Estatus"}
                            name={"estatus"}
                            id={"estatus"}
                            defaultValue={estatus}
                            options={[
                              { value: "En Comité", _id: "1" },
                              { value: "Aprobado", _id: "2" },
                              { value: "Cancelado", _id: "3" },
                            ]}
                          />
                          <Button
                            text={"Guardar Cambios"}
                            type={"submit"}
                            colorBg={"bg-light-blue-500"}
                            colorHoverBg={"hover:bg-light-blue-700"}
                          />
                        </form>
                        <Button
                          text={"Cancelar"}
                          colorBg={"bg-gray-500"}
                          colorHoverBg={"hover:bg-gray-700"}
                          action={() => {
                            closeModal();
                          }}
                        />
                      </div>
                    </FormProvider>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : null}
    </>
  );
};

export default EditModal;
