// import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

type SingleContactProps = {
  contact: Contacts;
  rowDisplay: () => void;
  contacts: Contacts[];
  onSelectContact: (contact: Contacts) => void; //check the meaning of this line
  deleteContact: (id: number) => void;
  setContacts: Dispatch<SetStateAction<Contacts[]>>; 
};

type Contacts = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checked: boolean;
};

function SingleContact({ contact, rowDisplay, onSelectContact, deleteContact, setContacts }: SingleContactProps) {
  //const [selectedId, setSelectedId] = useState<number | null>(null);

  //const selectedContact = contacts.find((cntct) => cntct.id === selectedId);
  //console.log(selectedContact);

  // useEffect(() => {
  //   console.log("Updated selectedId:", selectedId);
  // }, [selectedId]);

  return (
    <tr
      onClick={() => {
        onSelectContact(contact);
        rowDisplay();
      }}
      className="bg-white hover:cursor-pointer text-sm"
    >
      <td className="py-1 px-1 w-6">
        <input
          type="checkbox"
          onClick={(e) => e.stopPropagation()}
          className=""
          checked={contact.checked}
          onChange={(e) =>
            setContacts((prev) => prev.map((c) => (c.id === contact.id ? { ...c, checked: e.target.checked } : c)))
          }
        />
      </td>
      <td className=" px-1 py-1 w-33">{`${contact.firstName} ${contact.lastName}`}</td>
      <td className=" px-1 py-1 w-45">{contact.email}</td>
      <td className=" px-1 py-1 w-25">{contact.phoneNumber}</td>
      <td className=" px-1 py-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteContact(contact.id);
          }}
        >
          <BsFillTrash3Fill className="text-blue-700 hover:text-red-600" />
        </button>
      </td>
    </tr>
  );
}

export default SingleContact;
