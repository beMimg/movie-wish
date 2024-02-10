export default function AboutUs() {
  return (
    <div className="flex min-h-[550px] flex-col gap-10 bg-black p-6 text-base text-white">
      <p className="">
        Hi, my name is{" "}
        <a className="text-blue-600" href="https://github.com/beMimg">
          Bernardo Guerreiro - beMimg
        </a>
      </p>
      <p>
        Please feel free to reach out if you have any feedback or if you are
        interested in collaborating on future projects. I look forward to
        hearing from you.
      </p>
    </div>
  );
}
