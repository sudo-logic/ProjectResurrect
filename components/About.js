import React from "react";
function About() {
  return (
    <div className="divide-y divide-zinc-600">
      <div className="flex flex-col w-full justify-between px-20 py-10 rounded-md ">
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter justify-center ">
            Project Resurrect
          </h1>
          <div className=" flex justify-center p-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0pj7qinCtiA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col w-full justify-between px-20 py-10 rounded-md "
        id="how-it-works"
      >
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            How it works
          </h1>
          <h3 className="text-xl pt-2 ">
            Project Resurrect uses deep learning models to synthesize audio and
            video, syncing it together, to recreate famous speeches, that can be
            further used to generate holograms, virtual actors and a lot more.
          </h3>
          <h3 className="text-xl pt-2 ">
            We are refining these videos by constantly feeding it new data, to
            yield seamless videos in real-time.
          </h3>
        </div>

        <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted"></div>
      </div>
      <div className="flex flex-col w-full justify-between px-20 py-10 rounded-md ">
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            Example
          </h1>
          <div className="divide-zinc-700 divide-y divide-dotted">
            <div className="flex flex-col w-full justify-center items-center py-10 rounded-md">
              <video src="result.mp4" controls className="max-w-sm w-full" />
              <div className="">
                <h3 className="text-base font-medium">
                  Today I&apos;ll sign an executive order, that directs the
                  Federal Government to replace outdated, and really outdated..
                </h3>
                <h3 className="text-base font-medium">- Donald Trump</h3>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center py-10 rounded-md">
              <video src="result (1).mp4" controls className="max-w-sm w-full" />
              <div className="">
                <h3 className="text-base font-medium">
                  Today I&apos;ll sign an executive order, that directs the
                  Federal Government to replace outdated, and really outdated..
                </h3>
                <h3 className="text-base font-medium">- Donald Trump</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted"></div>
      </div>
      <div
        className="flex flex-col w-full justify-between px-20 py-10 rounded-md "
        id="contact-us"
      >
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            Contact Us
          </h1>
          <h3 className="text-base font-light pr-20"></h3>
        </div>

        <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted">
          <div className="flex flex-wrap py-2 pr-2 pt-2">
            <a
              href="https://github.com/sudo-logic/ProjectRessurect"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
                alt="github"
                className="rounded-sm pr-5"
              />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white"
                alt="instagram"
                className="rounded-sm pr-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
