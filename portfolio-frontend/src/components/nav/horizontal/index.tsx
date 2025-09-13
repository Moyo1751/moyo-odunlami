import Link from "next/link";

export default function HorizontalNav() {
  const navLinks = [
    { slug: "/", title: "Home" },
    { slug: "/about", title: "About" },
    { slug: "/portfolio", title: "Portfolio" },
    { slug: "/contact-me", title: "Contact Me" },
  ];

  return (
    <section>
      <div>
        <p>Logo</p>
      </div>

      <div>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.slug}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
