import Image from "next/image";

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const isAuthUser = false;

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />
        <div className="navbar-links">
          {isAuthUser ? (
            <>
              <a href="#" className="navbar-link">
                Dashboard
              </a>
              <a href="#" className="navbar-link">
                Sign out
              </a>
            </>
          ) : (
            <a href="#" className="navbar-link">
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Tailwind Logo"
          width={500}
          height={500}
        />
      </a>
    </div>
  );
}
