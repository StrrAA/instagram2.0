import React from "react";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={
        session
          ? "grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto"
          : "grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-3xl mx-auto"
      }
    >
      <section className={session ? "col-span-2" : "col-span-3"}>
        {session && <Stories />}
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid ">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
