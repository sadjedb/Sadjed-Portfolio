import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const GoBackButton = () => {
  return (
    <Link href={"/"} className="flex items-center  px-4">
      <Button variant={"SecondaryButton"} size={"MidButtonSize"}>
        <span className="text-sm">Go Back</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.293a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L6.414 10H17a1 1 0 110 2H6.414l3.879 3.879a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Link>
  );
};

export default GoBackButton;
