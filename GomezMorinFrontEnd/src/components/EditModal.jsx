import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "./Button";
import { Button as Button2 } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { ModeEditOutline } from "@mui/icons-material";
import DropdownInput from "./DropdownInput";
import { updateForms } from "../queries/queryRequestForm";

/**
 *  A React component that renders a modal with a form
 *
 * @returns {Jsx.Element} - A React JSX element representing a modal with a form
 */
const EditModal = ({ idForm }) => {
  const methods = useForm();
  const [isOpen, setIsOpen] = useState(false);

  /**
   *  Handles the submit of the form
   *
   * @param {object} data
   */
  const onSubmit = async (data) => {
    try {
      await updateForms({ ...data, idForm: idForm });
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsOpen(false);
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
                            type={"text"}
                            placeholder={"Folio"}
                            defaultValue={""}
                          />
                          <DropdownInput
                            label={"Estatus"}
                            name={"tipoDocumento"}
                            id={"tipoDocumento"}
                            options={[
                              { value: "En Proceso", _id: "1" },
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
