import profile from "../assets/Profile.png";

const About = () => {
  return (
    <div className="text-white bg-black flex flex-col justify-center items-center gap-10 p-12" id="about">
      <div className="text-[#88ce02] text-5xl font-bold italic">About Me</div>
      <img src={profile} alt="" className="w-48 h-48 rounded-md bg-blue-900" />
      <div className="text-5xl text-white font-mono line-through">Hello my name is <span className="text-pink-700">Arsalan</span></div>
      <div className="p-2 md:p-12 font-serif m-2 text-lg">**About Me: Crafting Digital Experiences**

        Hi there, I'm Arsalan, a frontend developer who's all about making the web a more exciting place. I don't just build websites; I create online worlds that capture the imagination.

        **A Digital Artist at Heart**

        To me, coding is like painting a picture, and each line of code adds a new color. I studied Computer Science at [Your University], and that's where my journey began to blend art with technology.

        **Beyond the Screen**

        When I'm not coding, you might catch me exploring diverse worlds – from watching anime of different genres to gazing at the stars, diving deep into the fascinating realms of astronomy, math, and physics. I'm all about pushing boundaries and embracing the unknown.

        **My Toolkit**

        - **HTML, CSS, JavaScript**: My trusty tools.
        - **React, Vue, Angular**: For crafting dynamic web experiences.
        - **Motion Magic**: I bring websites to life.
        - **UX Crafting**: I turn complexity into simplicity.
        - **Coffee Lover**: My endless source of energy.

        **Chasing Excellence**

        My journey as a frontend developer is all about chasing excellence. I don't stop at launching; I'm obsessed with making every project the best it can be.

        **What's Next?**

        The digital world is vast, and there are still uncharted territories to explore. I'm always on the lookout for new challenges, epic adventures, and opportunities to collaborate. Ready to embark on a journey together? Let's [Connect](#contact).

        Welcome to my digital space; I hope you enjoy the magic of my creations.
      </div>
      </div>
      
  )
}

export default About