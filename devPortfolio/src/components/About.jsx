import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src="" className="w-full h-16" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Include popular icons in your React projects easily with
            react-icons, which utilizes ES6 imports that allows you to include
            only the icons that your project is using.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
