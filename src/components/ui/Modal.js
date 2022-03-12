import { Dialog } from "@headlessui/react";

const Modal = (props) => {
  return (
    <Dialog
      className="fixed inset-0 z-10 overflow-y-auto bg-gray-200/50"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
    >
      <Dialog.Overlay />

      {/* This element is to trick the browser into centering the modal contents. */}
      <div className="w-full max-w-md p-6 m-auto mt-24 overflow-hidden text-left align-middle transition-all transform bg-white opacity-100 shadow-xl rounded-2xl">
        <Dialog.Title as="h3" className="text lg font-medium text-gray-900">
          {props.title}
        </Dialog.Title>
        <Dialog.Description as="div" className="mt-2 text-sm-text-gray-500">
          {props.description}
        </Dialog.Description>
        <div className="flex gap-2 mt-4">
          <button
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 
                        border border-transparent rounded-md hover:bg-blue-200 focus:outline-none 
                        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={props.onConfirm}
          >
            Confirm
          </button>
          <button onClick={() => props.setIsOpen(false)}>Close</button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
