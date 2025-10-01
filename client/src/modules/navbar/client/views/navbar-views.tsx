import { Bell, Home, LogIn, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/modules/navbar/client/components/Searchbar";

const NavbarView = () => {
  return (
    <nav className="w-full flex items-center flex-nowrap py-3 px-4 md:px-8 bg-white justify-between shadow-md">
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <Image
          src="/logo-black.png"
          alt="UrbanBasket"
          width={32}
          height={32}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium uppercase text-2xl tracking-wider text-black truncate">
          <span className="font-extrabold">Urban</span>Basket
        </p>
      </Link>

      <div className="flex items-center gap-2 md:gap-4 flex-nowrap">
        <Searchbar />

        <Link
          className="p-2.5 rounded-lg bg-gray-100 shadow-inner border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-200 flex-shrink-0"
          href="/"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </Link>

        {/* Notifications */}
        <Link
          className="p-2.5 rounded-lg bg-gray-100 shadow-inner border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-200 flex-shrink-0 relative"
          href="/notifications"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4  flex items-center justify-center rounded-full">
            {2}
          </span>
        </Link>

        {/* Cart */}
        <Link
          className="p-2.5 rounded-lg bg-gray-100 shadow-inner border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-200 relative flex-shrink-0"
          href="/cart"
          aria-label="Cart"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>

        {/* Sign In */}
        <Link
          className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-100 text-black border border-gray-300 shadow-inner hover:bg-black hover:text-white hover:border-black transition-all duration-200 flex-shrink-0"
          href="/sign-in"
        >
          <LogIn className="w-4 h-4" />
          <span className="hidden md:inline font-medium text-sm truncate">
            Sign In
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarView;
