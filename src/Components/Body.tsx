import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import SingleContact from "./SingleContact";
import Header from "./Header.tsx";
import DisplayContact from "./DisplayContact.tsx";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};
type Contacts = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checked: boolean;
};

export default function Body() {
  const [input, setInput] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [contacts, setContacts] = useState<Contacts[]>(() => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : [];
    } catch (error) {
      console.error("Failed to parse contacts from localStorage:", error);
      return [];
    }
  });
  const [formStyle, setFormStyle] = useState<"hidden" | "">("hidden");
  const [displayRow, setDisplayRow] = useState<boolean>(false);
  const [activeContact, setActiveContact] = useState<Contacts | null>(null);
  const [searchWord, setSearchWord] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(e.target.value);
  };

  const filteredContact = contacts.filter((contact: Contacts) => {
    const query = searchWord.toLowerCase();
    return (
      contact.firstName.toLowerCase().includes(query) ||
      contact.lastName.toLowerCase().includes(query) ||
      contact.phoneNumber.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query)
    );
  });

  const contactsToDisplay = searchWord ? filteredContact : contacts;

  const allSelected = contacts.length > 0 && contacts.every((contact) => contact.checked);

  function addContact(firstName: string, lastName: string, email: string, phoneNumber: string): void {
    if (activeContact) {
      updateContact();
    } else {
      if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phoneNumber === "") return;

      const newContact = {
        id: Date.now(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        checked: false,
      };

      setContacts((prevContacts) => [...prevContacts, newContact]);
      setInput({ firstName: "", lastName: "", email: "", phoneNumber: "" });
    }
  }

  function deleteContact(id: number): void {
    const contact = contacts.find((c) => c.id === id);
    if (!contact?.checked) {
      alert("Pls check the checkbox first");
      return;
    }
    setContacts((prevContact) => prevContact.filter((contact) => contact.id !== id));
  }

  function editContact() {
    if (!activeContact) return;

    setInput({
      firstName: activeContact.firstName,
      lastName: activeContact.lastName,
      email: activeContact.email,
      phoneNumber: activeContact.phoneNumber,
    });

    rowDisplay();
    setFormStyle((prevStyle) => (prevStyle === "hidden" ? "" : "hidden"));
  }

  function updateContact() {
    if (!activeContact) return;
    setContacts((prevCts) => prevCts.map((cts) => (cts.id === activeContact.id ? { ...cts, ...input } : cts)));
    setActiveContact({ ...activeContact, ...input });
    setActiveContact(null);
  }

  function toggleFormStyle(): void {
    setInput({ firstName: "", lastName: "", email: "", phoneNumber: "" });
    setFormStyle((prevStyle) => (prevStyle === "hidden" ? "" : "hidden"));
  }

  function rowDisplay(): void {
    setDisplayRow((prevState) => !prevState);
  }

  function handleSelectAll(checked: boolean): void {
    setContacts((prev) =>
      prev.map((c) => ({
        ...c,
        checked,
      })),
    );
  }

  function handleDeleteAll() {
    setContacts([]);
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="w-328 h-13 shadow-xl shadow-blue-600/30"></div>
      <div className="ml-8 mt-4">
        <Header />
      </div>
      <div>
        <DisplayContact
          displayRow={displayRow}
          rowDisplay={rowDisplay}
          selectedContact={activeContact}
          editContact={editContact}
        />
      </div>
      <div className="m-8 flex gap-2">
        <input
          value={searchWord}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search by Contact Name"
          className="rounded-md w-120 bg-gray-200 placeholder: pl-2"
        />

        <div className="flex gap-2">
          <button
            disabled={allSelected}
            className=" bg-blue-800 p-2 text-white font-bold text rounded-md disabled:opacity-50 disabled:pointer-events-none flex items-center"
            onClick={toggleFormStyle}
          >
            <FaPlus />
            ADD CONTACT
          </button>

          <button
            className={`bg-blue-800 p-2 text-white font-bold text rounded-md flex items-center ${allSelected ? "" : "hidden"}`}
            onClick={() => handleDeleteAll()}
          >
            <BsFillTrash3Fill />
            DELETE ALL
          </button>
        </div>
      </div>

      <InputForm
        formStyle={formStyle}
        input={input}
        setInput={setInput}
        addContact={addContact}
        contacts={contacts}
        toggleFormStyle={toggleFormStyle}
      />

      <div className="ml-8 w-120">
        <table>
          <thead>
            <tr className=" bg-gray-200 text-sm w-120">
              <th className="py-1 px-1 w-6">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    handleSelectAll(e.target.checked);
                  }}
                  checked={allSelected}
                />
              </th>
              <th className="py-1 px-1 w-33 text-left">Fullname</th>
              <th className="px-1 py-1 w-45 text-left">Email address</th>
              <th className="py-1 w-25 text-left">Phone number</th>
              <th className=" w-6"></th>
            </tr>
          </thead>
          <tbody>
            {contactsToDisplay.map((contact) => (
              <SingleContact
                key={contact.id}
                contact={contact}
                rowDisplay={rowDisplay}
                contacts={contacts}
                onSelectContact={setActiveContact}
                deleteContact={deleteContact}
                setContacts={setContacts}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// {contacts.length > 0
//           ? contacts.map((contact) => (
//               <SingleContact
//                 key={contact.id}
//                 contact={contact}
//                 rowDisplay={rowDisplay}
//                 contacts={contacts}
//                 onSelectContact={setAtiveContact}
//                 deleteContact={deleteContact}
//                 setContacts={setContacts}
//               />
//             ))
//           : null}
