"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const handleSignout = async () => {
    try {
      await signOut();
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <button onClick={handleSignout}>Sign out</button>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
          {" "}
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
