import Link from "next/link";
import path from "path";

const Navbar = () => {
  const links = [
    { page: "client", path: "/client" },
    { page: "drinks", path: "/drinks" },
    { page: "prisma", path: "/prisma-example" },
    { page: "tasks", path: "/tasks" },
  ];

  return (
    <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row '>
        <Link href={"/"} className='btn btn-primary'>
          Next.js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map((link, index) => {
            return (
              <li key={link.page}>
                <Link href={link.path} className='capitalize'>
                  {link.page}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
