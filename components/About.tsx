export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-start mx-5 md:mx-20 mb-10 mt-40"
    >
      <p className="text-2xl md:text-4xl">What is Parch Linux?</p>
      <br />
      <p className="text-xl md:text-2xl leading-10">
        The Parch Linux is a Linux distro based on Arch, that tried to be
        pretty, easy to use, light, fast and stable.
      </p>
      <br />
      <p className="text-2xl md:text-4xl">Why do we call this Parch?</p>
      <br />
      <p className="text-xl md:text-2xl leading-10">
        At the beginning of our work, we planned to make Parch a platform for
        Persian-speaking users, that's why we named it Parch ( Persian Arch ).
        But now we have more comprehensive goals than before.
      </p>
    </div>
  );
}
