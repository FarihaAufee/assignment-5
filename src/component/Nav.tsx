import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        
       <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Deep Stack Logo"
            className="w-30 h-auto object-contain"
          />

  
    </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          <li className="text-pink-500 font-medium cursor-pointer">Home</li>
          <li className="text-slate-600 cursor-pointer">Technologies</li>
          <li className="text-slate-600 cursor-pointer">Projects</li>
          <li className="text-slate-600 cursor-pointer">About</li>
          <li className="text-slate-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
       <div className="flex items-center gap-5">
  <button className="text-slate-700 font-medium">
    Sign In
  </button>

  <button className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
    Sign Up
  </button>
</div>
      </div>
    </nav>
  );
};

export default Navbar;