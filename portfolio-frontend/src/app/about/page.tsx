export default function About() {
  const paragraphOne =
    "Hi, I’m Moyo Odunlami, a passionate Frontend Developer with over 3 years of experience building intuitive and scalable web and mobile applications. I hold an Advanced Diploma in Software Engineering from Aptech Computer Education (2019) and a Bachelor’s degree from the University of Bedfordshire (2023).";
  const paragraphTwo =
    "In my previous role at Ortimar Ltd, I contributed to the development of dynamic eCommerce platforms across web and mobile, working with modern technologies such as React, React Native, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, and Jest.";
  const paragraphThree =
    "I enjoy transforming ideas into seamless digital experiences, with a strong focus on performance, accessibility, and clean code. I’m always eager to learn, collaborate, and take on new challenges in the ever-evolving tech space.";
  return (
    <article>
      <section>
        <h2 className="text-center">About Me</h2> <br />
        <p className="text-justify">{paragraphOne}</p> <br />
        <p className="text-justify">{paragraphTwo}</p> <br />
        <p className="text-justify">{paragraphThree}</p> <br />
      </section>
    </article>
  );
}
