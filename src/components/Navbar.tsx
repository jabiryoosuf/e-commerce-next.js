import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile screen */}
      <div className="flex items-center h-full justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">PODI</div>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
