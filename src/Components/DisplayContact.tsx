import { FaPencil } from "react-icons/fa6";

type DisplayContactProps = {
  displayRow: boolean;
  rowDisplay: () => void;
  selectedContact: Contacts | null;
  editContact: () => void;
};

type Contacts = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checked: boolean;
};

const DisplayContact = ({ displayRow, rowDisplay, selectedContact, editContact }: DisplayContactProps) => {
  return (
    <div
      className={`${displayRow ? "" : "hidden"} fixed inset-0 z-50 flex items-center justify-center sm:justify-end p-4 sm:p-8`}
    >
      <div className="p-4 sm:p-8 m-8 w-full max-w-xl h-auto bg-stone-200 border border-gray-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]overflow-y-auto max-h-[90vh]">
        <table className="w-full border-collapse mb-8 text-sm sm:text-base">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="pr-4 py-2 font-medium w-1/3">Full Name:</td>
              <td className="py-2 break-all">{selectedContact?.firstName + " " + selectedContact?.lastName}</td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="pr-4 py-2 font-medium">Email:</td>
              <td className="py-2 break-all">{selectedContact?.email}</td>
            </tr>

            <tr>
              <td className="pr-4 py-2 font-medium">Phone number:</td>
              <td className="py-2 break-all">{selectedContact?.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => editContact()}
            className="rounded-md w-1/2 sm:w-auto px-2 text-green-400 font-bold flex bg-blue-600 items-center justify-center  hover:text-white hover:bg-green-500"
          >
            <FaPencil />
            Edit Contact
          </button>
          <button
            onClick={rowDisplay}
            className="rounded-md h-8 w-30 px-2 bg-stone-400 text-white font-bold hover:text-black hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayContact;
