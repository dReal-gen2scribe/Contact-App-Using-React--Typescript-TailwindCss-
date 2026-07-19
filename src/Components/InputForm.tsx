//import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type InputFormProps = {
  formStyle: "hidden" | "";
  input: ContactForm;
  setInput: Dispatch<SetStateAction<ContactForm>>;
  addContact: (firstName: string, lastName: string, email: string, phoneNumber: string) => void;
  contacts: Contacts[];
  toggleFormStyle: () => void;
};

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

const InputForm = ({ formStyle, input, setInput, addContact, toggleFormStyle }: InputFormProps) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact(input.firstName, input.lastName, input.email, input.phoneNumber);
    setInput({ firstName: "", lastName: "", email: "", phoneNumber: "" });
    toggleFormStyle();
  };

  return (
    <div className={`${formStyle} fixed inset-0 bg-black/40 flex items-center justify-center p-4`}>
      <div className={`flex items-center justify-center`}>
        <div className="m-4 sm:m-8 w-full max-w-2xl min-h-[15rem] bg-white">
          <div>
            <h1 className="text-3xl ml-2 mt-1">Add Contact</h1>
          </div>
          <hr className="border-gray-300" />
          <form onSubmit={handleSubmit} action="">
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-2">
              <div className="flex flex-col p-2">
                <label htmlFor="firstName" className="text-gray-600">
                  First Name
                </label>
                <input
                  value={input.firstName}
                  onChange={(e) => setInput((prev) => ({ ...prev, firstName: e.target.value }))}
                  type="text"
                  className="pl-2 w-full sm:w-70 max-w-md border border-gray-400 rounded-sm placeholder:text-gray-400 placeholder:p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your First Name"
                  required
                />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="lastName" className="text-gray-600">
                  Last Name
                </label>
                <input
                  value={input.lastName}
                  onChange={(e) => setInput((prev) => ({ ...prev, lastName: e.target.value }))}
                  type="text"
                  className="pl-2 w-full sm:w-70 border border-gray-400 rounded-sm placeholder:text-gray-400 placeholder:p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="email" className="text-gray-600">
                  Email Address
                </label>
                <input
                  value={input.email}
                  onChange={(e) => setInput((prev) => ({ ...prev, email: e.target.value }))}
                  type="text"
                  className="pl-2 w-full sm:w-70 border border-gray-400 rounded-sm placeholder:text-gray-400 placeholder:p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="phoneNumber" className="text-gray-600">
                  Phone Number
                </label>
                <input
                  value={input.phoneNumber}
                  onChange={(e) => setInput((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                  type="tel"
                  maxLength={11}
                  className="pl-2 w-full sm:w-70 border border-gray-400 rounded-sm placeholder:text-gray-400 placeholder:p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex m-4 gap-4 justify-end text-white">
              <button type="button" className="bg-gray-500 h-8 w-20 font-bold rounded-md" onClick={toggleFormStyle}>
                CANCEL
              </button>
              <button type="submit" className="bg-blue-800 h-8 w-30 font-bold rounded-md">
                ADD CONTACT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
