"use client";
import { AnchorHTMLAttributes } from "react";
import Magnetic from "./magnetic";

type NavLinkProps = {
  className?: string;
  children?: string;
  active?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink = ({ active, children, ...props }: NavLinkProps) => {
  return (
    <Magnetic>
      <a {...props} className={`nav-link ${active ? "active" : ""}`}>
        <div className="pointer-events-none">
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </a>
    </Magnetic>
  );
};

export default NavLink;
