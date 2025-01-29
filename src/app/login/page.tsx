import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center  text-white ">
            <div className="flex flex-col justify-center items-center w-[300px]  
            min-[600px]:w-[60%]  bg-black p-5 rounded-2xl">

                <h1 className="text-4xl text-white font-extrabold mt-10 mb-20">Login</h1>
                <form className="w-full flex flex-col justify-center items-center">
                    {/* inputs */}
                    <div className="w-full flex flex-col justify-center items-center gap-5">
                        <input id="name" type="text" name="name" placeholder="Name" className="outline-none bg-transparent w-[85%] md:w-[352px] h-[40px] border-[2px] border-PrimaryPurple rounded-xl text-white text-lg pl-[5%]" />

                        <input id="name" type="text" name="name" placeholder="Name" className="outline-none bg-transparent w-[85%] md:w-[352px] h-[40px] border-[2px] border-PrimaryPurple rounded-xl text-white text-lg pl-[5%]" />
                    </div>

                    {/* buttons */}
                    <div className="w-full flex flex-col justify-center items-center gap-5 mt-10">
                        <button type="submit" className="w-[90%] md:w-[352px] h-[40px] bg-PrimaryPurple text-white  md:text-lg font-bold rounded-xl">
                            Login
                        </button>

                        <Link href={"/signup"} className="w-[90%] md:w-[352px] ">
                            <button className="w-full  h-[40px] bg-PrimaryPurple text-white text-sm md:text-lg  rounded-xl">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
