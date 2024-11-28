import { FacebookIcon, Instagram, Linkedin, MailCheck, SubscriptIcon, TwitterIcon } from "lucide-react";
const Footer =()=> {
  return (
    <footer className="  py-10 border-t ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 hd">Co<span className="text-yellow-400">Write</span></h2>
            <p className="opacity-50">
              CoWrite is your go-to platform for insightful blogs, fresh ideas,
              and expert advice. Stay connected to the trends that matter.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="opacity-50 hover:opacity-100 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="opacity-50 hover:opacity-100 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="opacity-50 hover:opacity-100 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="opacity-50 hover:opacity-100 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="opacity-50 mb-4">
              Stay updated with our latest blogs and exclusive content. 
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-transparent border-l border-b  focus:outline-none  focus:border-yellow-300"
              />
                <button className="border  border-[#2b2b2b] w-52 font-medium px-6 py-3 shadow transition-all  ">
            <span className="flex justify-center gap-3 hover:gap-5 hover:text-red-500 transition-all">Subscribe <MailCheck/> </span>
          </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Social Media and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 md:mt-0 text-gray-400">
            <p>Contact us: <a href="mailto:support@beloom.com" className="hover:text-white">support@beloom.com</a></p>
            <p>Phone: 91+ 00000 00000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;