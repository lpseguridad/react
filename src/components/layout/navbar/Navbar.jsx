import { FaCartShopping } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h3>Logo</h3>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <FaCartShopping color="blue" size="1em" />
    </div>
  );
};
