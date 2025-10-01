import Image from "next/image";
import Link from "next/link";


const FooterView = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-black p-8 rounded-t-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-white.png"
            alt="UrbanBasket"
            width={32}
            height={32}
          />
          <p className="hidden md:block text-md uppercase tracking-wider text-white truncate font-light text-2xl">
            <span className="font-extrabold">Urban</span>Basket
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 UrbanBasket.</p>
        <p className="text-sm text-gray-400">All right&apos;s reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>Terms of Service</Link>
        <Link href='/'>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href='/'>All Products</Link>
        <Link href='/'>New Arrivals</Link>
        <Link href='/'>Best Sellers</Link>
        <Link href='/'>Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Affiliate Program</Link>
      </div>
    </div>
  );
};

export default FooterView;
