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
    <div className={`${displayRow ? "" : "hidden"} fixed inset-0 z-50 flex items-center justify-end`}>
      <div className="p-8 m-8 w-150 h-60 bg-stone-200 border border-gray-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <table className="border-collapse mb-8">
          <tbody className="">
            <tr className="border-b border-gray-200">
              <td className="pr-48 py-1">Full Name:</td>
              <td className="py-1">{selectedContact?.firstName + " " + selectedContact?.lastName}</td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="py-1">Email:</td>
              <td className="py-1">{selectedContact?.email}</td>
            </tr>

            <tr>
              <td className="py-1">Phone number:</td>
              <td className="py-1">{selectedContact?.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center gap-12">
          <button
            onClick={() => editContact()}
            className="rounded-md w-30 p-1 text-green-400 font-bold flex bg-blue-600 items-center  hover:text-white hover:bg-green-500"
          >
            <FaPencil />
            Edit Contact
          </button>
          <button
            onClick={rowDisplay}
            className="rounded-md h-8 w-30 bg-stone-400 text-white font-bold hover:text-black hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayContact;
