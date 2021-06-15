import Card from "../components/Card";

export default function Home() {
  return (
    <div className="wrapper">
      <Card
        image="/images/bootcamp1.jpg"
        title="Fundamentals"
        description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, Devtools"
        link="https://developer.mozilla.org/en-US/docs/Learn"
      />
      <Card
        image="/images/bootcamp5.jpg"
        title="Fundamentals"
        description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, Devtools"
        link="https://developer.mozilla.org/en-US/docs/Learn"
      />
      <Card
        image="/images/bootcamp6.jpg"
        title="Fundamentals"
        description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, Devtools"
        link="https://developer.mozilla.org/en-US/docs/Learn"
      />
      <Card
        image="/images/code_002.jpg"
        title="Fundamentals"
        description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, Devtools"
        link="https://developer.mozilla.org/en-US/docs/Learn"
      />
    </div>
  );
}
