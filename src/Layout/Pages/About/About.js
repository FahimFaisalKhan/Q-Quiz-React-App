import React from "react";

const Blog = () => {
  return (
    <section class="container mx-auto glass lg:h-screen mt-10 rounded-lg flex flex-col items-center justify-center text-neutral-content gap-y-5">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">♦ What is Q-Quiz?</div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">About Q-Quiz:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Q-Quiz is a web-application for beginner and intermidiate level
            programmers. The purpose of this app is help programmers evaluate,
            asses and sharpen themselves in different languages and build up
            their confident.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ How to participate?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Participation:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            Participating in a quiz is really easy and simple process. On the
            home page user can sellect his preffered language which he want to
            participate in quiz and Just click Start Practice button. After that
            user will be redirected to the quiz page.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ How do I get the right answers?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">Revealing answers:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            As this application is for begginer and intermidiate level
            programmers users can toggle the eye button if they want to
            check/know the right answer at any point of time during
            participation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
