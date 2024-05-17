import NavLink from "./nav-link";
import SectionTitle from "./section-title";
import SectionLayout from "../app/layouts/section-layout";

const FooterSection = () => {
  return (
    <SectionLayout id="footer" minContent className="px-[40px] py-[20px]">
      <div
        // className="text-center"
        style={{
          gap: "5rem",
          display: "flex",
          paddingTop: "5rem",
          alignItems: "start",
          flexDirection: "column"
        }}
      >
        <SectionTitle
          text={["Are you ready to", "embark on this", "adventure?"]}
        />
      </div>
      <div className="footer__block" style={{ paddingTop: "6rem" }}>
        <div className="footer__block-column-lg"></div>
        <div className="footer__block-column">
          <p className="font-bold">Services</p>
          <span className="footer__block-span">Web Development</span>
          <span className="footer__block-span">Mobile App Development</span>
          <span className="footer__block-span">UI/UX Design</span>
        </div>
        <div className="footer__block-column">
          <p>Contact</p>
          <span className="footer__block-span">
            <NavLink href="mailto:tppyankah@gmail.com">
              tppyankah@gmail.com
            </NavLink>
          </span>
          <span className="footer__block-span">
            <NavLink href="tel:+233593598615">+233 593 598 615</NavLink>
          </span>
          <span className="footer__block-span">Accra, Ghana</span>
        </div>
        <div className="footer__block-column"></div>
      </div>
      <div className="footer__block" style={{ paddingTop: "2.5rem" }}>
        <div className="footer__block-column-lg"></div>
        <div className="footer__block-column flex" style={{ gap: 20 }}>
          <NavLink href="#">LinkedIn</NavLink>
          <NavLink href="#">Dribbble</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </div>
        <div className="footer__block-column">
          <span className="text-sm">© 2023 All rights reserved.</span>
        </div>
        <div className="footer__block-column flex justify-end">
          <span className="flex">
            <NavLink href="#">Back to Top ⤴</NavLink>
          </span>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FooterSection;
