import { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "Power", slug: "power" },
  { name: "Acess", slug: "access" },
  { name: "Pleasure", slug: "pleasure" },
];

export default function Navbar() {
  return (
    <nav className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 ">
        <div className="block md:float-left">
          <Link href="/">
            <a className="cursor-pointer text-4xl font-semibold text-blue-100">
              Protean
            </a>
          </Link>
        </div>
        <ul className="hidden md:float-left md:contents">
          {categories.map((cat) => (
            <Link href={`/category/${cat.slug}`}>
              <a className="md:float-right mt-2 ml-4 align-middle text-blue-100 font-semibold cursor-pointer text-xl ">
                {cat.name}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
