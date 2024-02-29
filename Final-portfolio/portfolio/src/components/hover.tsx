import { HoverEffect } from "../ui/hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React-To/do-List 📒",
    description:
      "A React to-do list allows users to manage their tasks effectively by leveraging features such as adding new tasks and performing CRUD operations (Create, Read, Update, Delete) seamlessly. ",
    link: "https://github.com/Arunajith056/React-todo-list",
  },
  {
    title: "Greet App 🙏",
    description:
      "A Python Flask greet app uses Flask to greet users by name inputted as a query parameter, offering a simple yet dynamic web interaction",
    link: "https://github.com/Arunajith056/greet_app",
  },
  {
    title: "Front-End Projects 🎨",
    description:
      "Front-end projects encompassing wiht HTML,Css,js,and other frameworks.We Hard make to more projects see you again",
    link: "https://github.com/Arunajith056/Front-END",
  },
  {
    title: "Movie-Website 🎬",
    description:
      "Upcoming Projects Coming soon Is full functionality like registration, login, and authorization and features made with (Next.js,Django,Rest API) some Leraning process ongoing !",
    link: "",
  },
  {
    title: "Progressive web Apps 🏞️",
    description:
      "Upcoming Projects Coming soon Is full functionality like registration, login, and authorization and features made with (Next.js,Django,Rest API) some Leraning process ongoing !",
    link: "",
  },
  {
    title: "Blog App with CMS 📰",
    description:
      "Upcoming Projects Coming soon Is full functionality like registration, login, and authorization and features made with (Next.js,Django,Rest API) some Leraning process ongoing !",
    link: "",
  },
];
