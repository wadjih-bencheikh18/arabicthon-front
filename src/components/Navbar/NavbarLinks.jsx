const sections = ["Home", "About", "Workshops", "Talks", "FAQ", "Contact us"];

const NavbarLinks = sections.map((section) => <a href={section}>{section}</a>);

export default NavbarLinks;
