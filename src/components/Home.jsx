import { NameForm } from "./counter";

export default function Home(home) {
  const passname = "";
  return (
    <div className="text-center mt-18">
      <h1 className="text-4xl m-3">{home.title}</h1>
      <h5 className="m-3">{home.description}</h5>
      <NameForm myName={passname} />
    </div>
  )
}
