import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/items");
    }, 3000);
  }, []);
  return (
    <div className="container pt-4">
      <div className="row">
        <h1  className="text-center"> 404 Page Not Found</h1>

        <Link href="/">
          <a className="btn btn-dark  "> Go Home </a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
