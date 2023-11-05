import { routeUrls } from "@/utils/constants";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  const isUserLoggedIn = session && session.user;
  const router = useRouter();

  return (
    <header>
      <div className="container">
        <div className="pages">
          <Link href={routeUrls.productListing} className="header-link">
            View Products
          </Link>
        </div>

        <div className="user">
          {isUserLoggedIn ? (
            <div>
              Welcome {session.user?.name}{" "}
              <button
                onClick={() => {
                  router.push("/api/auth/signout");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login"
              onClick={() => {
                router.push(routeUrls.auth);
              }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
