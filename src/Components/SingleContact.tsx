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
  return (
    <tr
      onClick={() => {
        onSelectContact(contact);
        rowDisplay();
      }}
      className="bg-white hover:bg-gray-50 hover:cursor-pointer text-sm"
    >
      <td className="px-2 py-2 whitespace-nowrap">
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
      <td className=" px-2 py-2 whitespace-nowrap">{`${contact.firstName} ${contact.lastName}`}</td>
      <td className=" px-2 py-2 break-all">{contact.email}</td>
      <td className=" px-2 py-2 whitespace-nowrap">{contact.phoneNumber}</td>
      <td className=" px-2 py-2 text-center whitespace-nowrap">
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteContact(contact.id);
          }}
        >
          <BsFillTrash3Fill className="text-blue-700 hover:text-red-600 text-base md:text-lg" />
        </button>
      </td>
    </tr>
  );
}

export default SingleContact;
