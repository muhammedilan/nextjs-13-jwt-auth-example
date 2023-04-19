import React from "react";

import Link from "next/link";
import useAuth from "@/app/hooks/useAuth";

const Header = async () => {
  const { role } = (await useAuth()) ?? { role: null };

  return (
    <header className="mb-10 flex items-center gap-x-10 py-6">
      {role && `You Are ${role}`}
      <Link href="/">Logo</Link>
      <Link href="/login">Login</Link>
      <Link href="/panel">Panel (Protected Route)</Link>
    </header>
  );
};

export default Header;
