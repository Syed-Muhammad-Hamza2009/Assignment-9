import Link from "next/link";

const NotFound = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1b2232] to-[#9333EA] relative overflow-hidden text-white">
        {/* Background Animated Elements */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-[#9333EA] to-[#1b2232] rounded-full opacity-10 animate-pulse"></div>
        </div>
  
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#9333EA] rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-16 right-16 w-48 h-48 bg-[#0f172a] rounded-full blur-3xl opacity-20 animate-float delay-3000" />
        </div>
  
        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-xl">
            404
          </h1>
          <p className="text-2xl md:text-4xl font-medium mt-4 drop-shadow-lg">
            Oops! Page Not Found
          </p>
          <p className="text-md md:text-lg mt-4 text-gray-300">
            It seems you’ve ventured into uncharted territory.
          </p>
  
          {/* Home Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-[#9333EA] to-[#1b2232] rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-2xl focus:outline-none"
            >
              Return Home
            </Link>
          </div>
        </div>
  
        {/* Animated SVG for Additional Flair */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            className="w-full h-48 text-white animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L48,240C96,256,192,288,288,277.3C384,267,480,213,576,192C672,171,768,181,864,192C960,203,1056,213,1152,224C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  };
  
  export default NotFound;