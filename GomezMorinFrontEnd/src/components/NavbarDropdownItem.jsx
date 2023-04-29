import { Fragment, React } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { clearAccessToken } from "../states/authSlice";
import Button from "./Button";

/**
 * This is a component for showing a dropdown item in the navbar.
 *
 * @param {string} userName - The name of the user.
 * @returns {JSX.Element} The JSX element displaying a navbar dropdown item.
 */

const NavbarDropdownItem = ({ userName }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Menu as="div" className="relative inline-block text-left py-4 px-4">
        <div>
          <Menu.Button className="inline-flex w-full rounded-md gap-x-1.5 bg-gray-blue-500 px-3 py-2 text-sm font-semibold text-gray-100  hover:bg-gray-700">
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
          <Menu.Items className="absolute text-gray-100 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-blue-500  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <Button
                  text={"Cerrar sesión"}
                  action={() => {
                    dispatch(clearAccessToken());
                    window.location.href = "/";
                  }}
                />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavbarDropdownItem;
