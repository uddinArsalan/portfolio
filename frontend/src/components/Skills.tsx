import JavascriptLogo from "../assets/skills svgs/JavascriptLogo";
import GoLogo from "../assets/skills svgs/GoLogo";
import JavaLogo from "../assets/skills svgs/JavaLogo";
import PythonLogo from "../assets/skills svgs/PythonLogo";
import ReactLogo from "../assets/skills svgs/ReactLogo";
import HtmlLogo from "../assets/skills svgs/HtmlLogo";
import NextjsLogo from "../assets/skills svgs/NextjsLogo";
import SveleteKitLogo from "../assets/skills svgs/SveleteKitLogo";
import CSSLogo from "../assets/skills svgs/CSSLogo";
import TailwindCSSLogo from "../assets/skills svgs/TailwindCSSLogo";
import BootStrapLogo from "../assets/skills svgs/BootStrapLogo";
import NodejsLogo from "../assets/skills svgs/NodejsLogo";
import ExpressLogo from "../assets/skills svgs/ExpressLogo";
import GraphQLLogo from "../assets/skills svgs/GraphQLLogo";
import PrismaLogo from "../assets/skills svgs/PrismaLogo";
import RedisLogo from "../assets/skills svgs/RedisLogo";
import MongodbLogo from "../assets/skills svgs/MongodbLogo";
import PostgresSQLLogo from "../assets/skills svgs/PostgresSQLLogo";
import MySQLLogo from "../assets/skills svgs/MySQLLogo";
import FirebaseLogo from "../assets/skills svgs/FirebaseLogo";
import SupabaseLogo from "../assets/skills svgs/SupabaseLogo";
import GitLogo from "../assets/skills svgs/GitLogo";
import TypescriptLogo from "../assets/skills svgs/TypescriptLogo";
import NpmLogo from "../assets/skills svgs/NpmLogo";
import PnpmLogo from "../assets/skills svgs/PnpmLogo";
import ZustandLogo from "../assets/skills svgs/ZustandLogo";
import TanstackQueryLogo from "../assets/skills svgs/TanstackQueryLogo";
import SWRLogo from "../assets/skills svgs/SWRLogo";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: JavascriptLogo },
      { name: "TypeScript", icon: TypescriptLogo },
      { name: "Java", icon: JavaLogo },
      { name: "Golang", icon: GoLogo },
      { name: "Python", icon: PythonLogo },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: ReactLogo },
      { name: "Next.js", icon: NextjsLogo },
      { name: "SvelteKit", icon: SveleteKitLogo },
      { name: "TanStack Query", icon: TanstackQueryLogo },
      { name: "Zustand", icon: ZustandLogo },
      { name: "SWR", icon: SWRLogo },
      { name: "HTML5", icon: HtmlLogo },
      { name: "CSS3", icon: CSSLogo },
      { name: "Tailwind CSS", icon: TailwindCSSLogo },
      { name: "Bootstrap", icon: BootStrapLogo },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsLogo },
      { name: "Express.js", icon: ExpressLogo },
      { name: "Go", icon: GoLogo },
      { name: "GraphQL", icon: GraphQLLogo },
      { name: "Prisma", icon: PrismaLogo },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Redis", icon: RedisLogo },
      { name: "MongoDB", icon: MongodbLogo },
      { name: "PostgreSQL", icon: PostgresSQLLogo },
      { name: "MySQL", icon: MySQLLogo },
      { name: "Firebase", icon: FirebaseLogo },
      { name: "Supabase", icon: SupabaseLogo },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: GitLogo },
      { name: "npm", icon: NpmLogo },
      { name: "pnpm", icon: PnpmLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-neutral-900 py-16 px-6 md:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Technical Skills
        </h2>
        {skillsData.map((group) => (
          <div key={group.category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
                >
                  {skill.icon ? (
                    <skill.icon className="w-12 h-12 mb-2 text-white" />
                  ) : (
                    <div className="w-12 h-12 mb-2 flex items-center justify-center text-gray-400">
                      <span className="text-2xl">?</span>
                    </div>
                  )}
                  <span className="text-sm md:text-base text-center text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
