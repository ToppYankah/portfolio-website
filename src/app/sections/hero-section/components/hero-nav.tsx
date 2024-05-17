"use client";
import NavLink from "@/global_components/nav-link";

export default () => {
  return (
    <nav className="col-start-1 col-end-2 row-start-1 row-end-2 flex gap-10 relative items-start">
      <NavLink href="#" active>
        Bio
      </NavLink>
      <NavLink href="#">Portfolio</NavLink>
    </nav>
  );
};
