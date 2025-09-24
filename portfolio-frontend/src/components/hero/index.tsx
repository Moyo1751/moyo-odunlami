import Link from "next/link";

export default function Hero() {
  const headline = "Hi, my name is Moyo Odunlami";
  const contactMe = "You can contact me via email by clicking the button below";
  return (
    <article aria-label="Hero Section">
      <section>
        <p className="mb-2">Frontend Developer</p>
        <h1 className="">{headline}</h1>
        <p className="mb-2">{contactMe}</p>
        <Link
          href={"/contact-me"}
          className="border p-2 text-black text-sm rounded-lg dark:text-white"
        >
          Contact Me
        </Link>
      </section>
    </article>
  );
}
