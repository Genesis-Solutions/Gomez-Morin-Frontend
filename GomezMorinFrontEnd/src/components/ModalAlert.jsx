import { Fragment, React, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

/**
 * This is a component for an alert displayed on a modal giving the user two options.
 *
 * @param {string} title - The title of the alert.
 * @param {string} message - The message that will be displayed on the alert.
 * @param {boolean} active - The state to initialize the alert.
 * @param {string} buttonName - The name of the button that will trigger the alert
 */

const ModalAlert = ({ title, message, active, buttonName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        className={`${
          (active ? "bg-gray-700 text-gray-100" : "text-gray-100",
          " w-full px-4 py-2 text-left text-sm")
        }`}
        type="button"
        onClick={openModal}
      >
        {buttonName}
      </button>
      {isOpen ? (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left sm:flex-grow">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              {title}
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">{message}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:gap-5 sm:px-6">
                        <div className="">
                          <Button
                            text={"Confirmar"}
                            type={"button"}
                            colorBg={"bg-red-600"}
                            colorHoverBg={"hover:bg-red-700"}
                            onClick={() => {
                              closeModal();
                            }}
                          ></Button>
                        </div>
                        <div className="">
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => {
                              closeModal();
                            }}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : null}
    </>
  );
};

export default ModalAlert;
