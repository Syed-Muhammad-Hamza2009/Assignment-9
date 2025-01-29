import BlogCard from "@/components/blogCard/BlogCard";
import { Poppins } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const poppins = Poppins({
  subsets: ["latin"],
  weight: ['700', '400']
})

export default function Home() {
  return (
    <>
      <div className=" w-screen flex flex-col justify-center items-center mb-20">

        {/* main headings */}
        <div className="flex w-full justify-center items-center gap-10 mt-20 flex-wrap">
          <h1 className={` text-5xl font-bold `}>Learn</h1>
          <h1 className={` text-5xl font-bold relative after:contents-[''] after:absolute after:w-0 after:h-2 after:bg-PrimaryPurple after:-bottom-2 after:left-0 after:transition-all after:duration-300 hover:after:w-full `}>Faster</h1>
          <h1 className={`${poppins.className} text-5xl text-PrimaryPurple `}>&</h1>
          <h1 className="relative text-5xl font-bold text-white">
            Better
            <span className="absolute left-1 top-1 w-full h-2 bg-purple-500 -z-10"></span>
          </h1>
        </div>

        <p className={`${poppins.className} tracking-widest text-xl font-normal md:w-[700px] text-center mt-10`}>Techie A community for developers to explore blogs, tutorials, and insights on Next.js, AI, and modern web technologies.</p>


        {/* buttons/links  */}
        <div className="flex justify-center items-center gap-7 mt-10 flex-wrap">
          <Link href={"/signup"} className="flex justify-center items-center h-[56px] w-[168px] bg-PrimaryPurple rounded-lg">Join Now</Link>
          <Link href={"/learnTech"} className="flex justify-center items-center h-[56px] w-[168px] rounded-lg border-[2px] border-white">Learn Tech </Link>
        </div>


        {/* hero image */}
        <Image src={"/images/herosection-webp.jpg"} alt="hero image" height={1000} width={1000} className="my-10 rounded-lg md:w-screen" />

      </div>

      <div className="w-screen flex flex-col justify-center items-center mb-16">
        <h1 className="text-5xl font-bold mb-10">Latest Blogs</h1>

        {/* cards */}

        <Tabs defaultValue="account" className="w-screen md:w-[400px]">
          <TabsList className="w-full mb-5 bg-[#1b2232]">
            <TabsTrigger value="Web Dev">Web Dev</TabsTrigger>
            <TabsTrigger value="password">AI</TabsTrigger>
          </TabsList>

          <TabsContent value="Web Dev"><BlogCard /></TabsContent>
          <TabsContent value="password">
            <h1 className="text-4xl ">COMING SOON....</h1>
          </TabsContent>
        </Tabs>

        

      </div>
    </>
  );
}
