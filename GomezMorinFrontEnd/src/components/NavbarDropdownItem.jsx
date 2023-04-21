import { Fragment, React } from "react";
import { Menu, Transition } from "@headlessui/react";
import ModalAlert from "./ModalAlert";

/**
 * This is a component for showing a dropdown item in the navbar.
 *
 * @param {string} userName - The name of the user.
 */

const NavbarDropdownItem = ({ userName }) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left py-4 px-4">
        <div>
          <Menu.Button className="inline-flex w-full rounded-md gap-x-1.5 bg-[#4F5579] px-3 py-2 text-sm font-semibold text-gray-100  hover:bg-gray-700">
            {userName}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute text-gray-100 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#4F5579] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <ModalAlert
                    title={"Cierre de Sesión"}
                    message={"¿Estás seguro que deseas cerrar tu sesión?"}
                    active={active}
                    buttonName={"Cerrar Sesión"}
                  />
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavbarDropdownItem;