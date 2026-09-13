import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left: Logo + Description */}
        <div>
          {/* Logo - horizontal */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="w-30 h-auto object-contain"
            />
          </div>

          <p className="text-sm mt-4 max-w-xs leading-6">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-5 text-sm">
            <a href="#" className="hover:text-pink-500 transition">
              GitHub
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              Twitter
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-4">
            PRODUCT
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">
            COMPANY
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold mb-4">
            LEGAL
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-5 mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-black transition">
            Privacy
          </a>

          <a href="#" className="hover:text-black transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;