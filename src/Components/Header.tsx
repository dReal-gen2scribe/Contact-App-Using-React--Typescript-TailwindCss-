import contact from "../assets/contact.png";

export default function Header() {
  return (
    <div className="flex">
      <img src={contact} alt="" className="w-14 h-18 object-cover" />
      <div className="flex flex-col ml-2">
        <span className="font-bold m-2">CONTACTS</span>
        <span className="font-bold m-2">Welcome to LOREM PhoneBook</span>
      </div>
    </div>
  );
}
