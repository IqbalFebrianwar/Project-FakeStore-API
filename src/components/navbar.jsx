import ButtonSignin from "./buttonSignin";

const Navbar = () => {
  return (
    <nav className=" w-full px-10 items-center h-20 justify-between shadow-md flex">
      <p className="font-bold text-lg text-blue-600">Tehlink Store</p>
      <input
        type="text"
        placeholder="Search"
        className="input w-full max-w-xs"
      />
      <ButtonSignin />
    </nav>
  );
};
export default Navbar;
