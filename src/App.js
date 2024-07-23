import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const handleLogin = () => {
    setIsAuthUser(true);
  };

  const handleSignOut = () => {
    setIsAuthUser(false);
  };

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
              <a href="#" className="navbar-link" onClick={handleSignOut}>
                Sign out
              </a>
            </>
          ) : (
            <a href="#" className="navbar-link" onClick={handleLogin}>
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
