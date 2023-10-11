import React from "react";
import Layout from "./Layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
      <main>
        <div className="container mx-auto px-4">
          <h1 className="text-center font-extrabold mt-4 text-red-600 text-2xl hover:text-zinc-400">
            About Us
          </h1>
          <div className="h-64 mt-4 rounded-md overflow-hidden bg-cover bg-center bg-[url('https://www.khwaahish.com/wp-content/uploads/2023/04/bridal-edit-menu-image.jpg')] ">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-yellow-500 font-bold">
                  Shop Diamonds
                </h2>

                <p className="mt-2 text-gray-300">
                  {" "}
                  Tradition is not merely a word. It's about bringing the past
                  into the present with sensitivity, beauty and reason.Each
                  piece of jewellery journeys through many artisanal hands and
                  numerous man-hours before finding its place in our boutiques.
                </p>

                <button className="flex items-center mt-4 px-3 py-2 bg-yellow-500 text-white text-sm uppercase font-medium rounded hover:bg-black focus:outline-none focus:bg-black">
                  <a href="/">
                    <span>Shop Now</span>
                  </a>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div
              className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2
              bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8dkvCyFpHkRzF1iOsvmkXIJRW9TQG_9PHA&usqp=CAU')]"
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <p className="mt-2 text-gray-300">
                    Each piece of jewellery journeys through many artisanal
                    hands and numerous man-hours before finding its place in our
                    boutiques. From hand-beaten gold to enamelling to the hand
                    setting of fine gemstones, each step keeps the human element
                    alive. In a world driven by technology and machines and
                    handwork.
                  </p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2
              bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwd_ruwMLgqOiV7DcVYcRLXmfliS1yAldCtPGDqh53HrAbcL1KotMC1pTeBnXEkCZbJo&usqp=CAU')]"
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  {/**<h2 className="text-2xl text-white font-semibold">Games</h2> */}
                  <p className="mt-2 text-gray-400">
                    According to ancient astrologers, silver is associated with
                    the moon. The medicinal properties of silver are compared to
                    the cooling effect of the moon. Silverware symbolizes
                    feminity and prosperity. In Indian culture, gold is worn
                    above the waist, and silver is worn from the waist down.
                  </p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">
              Meet Our Team
            </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgurmv57C4T3TiJGWYfdQGDm2x24GxqOntJ44ZRN4i1b41_ihpxZHGWbFeRc14dqrnN4U&usqp=CAU')]"></div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase text-center">David</h3>
                </div>
              </div>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-T5to0mpYTHzeWVgk57Uv58w9OtP0g3oijQ&usqp=CAU')]"></div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase text-center">Luna</h3>
                </div>
              </div>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8IuKIgyoXAxpIKcrmc2V6WqkdjXWBjKKVQ&usqp=CAU')]"></div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase text-center">
                    stella
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div className="flex items-end justify-end h-56 w-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKI4jg7DqoGzy6Ti9kTmH2tQ4L0yxaLWJbw&usqp=CAU')]"></div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase text-center">
                      Ajay
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover
                  bg-[url('https://img.freepik.com/premium-photo/young-indian-man-showing-expression-dark-background_438239-326.jpg')]"
                ></div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase text-center">Krish</h3>
                </div>
              </div>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover
                  bg-[url('https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg')]"
                ></div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase text-center">
                    Aarushi
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <p className="text-justify mt-5">
              South Indian Marriages are nothing short of bling and cultural
              attire amidst traditional mela thalam (beats) music.
            </p>

            <p className="text-justify mt-4">
              The vibes engulfed in such marriages promise soul-filling air
              while the bride walks, boasting her resplendent beauty. South
              traditions have always embraced the inclusion of valuable jewelry
              adorning the bride. We have come across many astounding south
              Indian wedding events capturing moments of new beginnings,
              happiness, and, most importantly, the flash of contemporary
              jewelry, including gold and diamonds.
            </p>

            <p className="text-justify mt-4">
              What sets us apart is our allegiance to superlative quality and
              nuanced detailing. Each piece of jewellery journeys through many
              artisanal hands and numerous man-hours before finding its place in
              our boutiques. From hand-beaten gold to enamelling to the hand
              setting of fine gemstones, each step keeps the human element
              alive. In a world driven by technology and machines, Sunita
              Shekhawat is about the nuance of handwork.
            </p>
            <h1 className="text-justify mt-4">Gold Collections</h1>
            <p className="text-justify mt-4">
              Aradhana Collections go well with exquisite sarees reflecting
              south Indian heritage with traditional touch. We have curated
              designs ranging across different templates such as Pachi Gold
              Greena and Red Stone Pendant, Antique Gold Necklace with red
              stone, Emerald Green Stone Studded, Ornate Antique Naksha Gold,
              Ruby Earrings, Antique Necklace with Gem studded Peacocks, Antique
              gold pendant and Gold chandbali studded with colored stones.
            </p>
          </div>

          <div className="h-96 mt-8 rounded-md overflow-hidden bg-cover bg-center bg-[url('https://i.ytimg.com/vi/Ng7xB_i6TCs/maxresdefault.jpg')] ">
            <div className="bg-gray-900 bg-opacity-25 flex items-center h-full">
              <div className="px-40 max-w-xl justify-center"></div>
            </div>
          </div>
          <button className="flex items-center m-4 px-3 py-2 bg-yellow-500 text-white text-sm uppercase font-medium rounded hover:bg-black focus:outline-none focus:bg-black">
            <a href="/">
              <span>Shop Now</span>
            </a>
            <svg
              className="h-5 w-5 mx-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </main>
      </Layout>
      
  
    </div>
  );
};

export default About;
