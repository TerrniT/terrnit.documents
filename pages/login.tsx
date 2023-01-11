import React from "react";

import type { NextPage } from "next";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Login: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="mt-[22rem] flex flex-col items-center justify-center gap-2 ">
      <div className="my-5">
        <h1>Admin dashboard</h1>
      </div>
      {session ? (
        <button
          className="border border-zinc-200 dark:border-zinc-600 w-15 px-3 py-4 rounded-lg text-center flex items-center justify-center h-6"
          onClick={() => signOut()}
        >
          Signout
        </button>
      ) : (
        <button
          className="border border-zinc-200 dark:border-zinc-600 w-15 px-3 py-4 rounded-lg text-center flex items-center justify-center h-6"
          onClick={() => signIn()}
        >
          SignIn
        </button>
      )}
      {session && (
        <div>
          {session.user?.email === "terrnit.megaman@gmail.com" ? (
            <div className="flex flex-row gap-2 items-center justify-center">
              <h2>Signed as</h2>
              <strong>goddam admin</strong>
              {session.user?.image ? (
                <Image
                  src={session.user?.image}
                  width={40}
                  height={40}
                  alt="github profile"
                />
              ) : (
                <div>No Image</div>
              )}
            </div>
          ) : (
            <strong>{session.user?.email || session.user?.name}</strong>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
