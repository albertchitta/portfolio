import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer class="bg-black-100 rounded-lg shadow dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex items-center flex-col">
          <a
            href="Albert_Chittaphong_Resume.pdf"
            download
            className="bg-tertiary border-2 rounded-full py-3 px-6 hover:bg-white hover:text-black transition ease-in-out duration-300"
          >
            Download Resume
          </a>

          <ul class="mt-6 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  aria-label={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-1/2 h-1/2 object contain transform hover:scale-125 transition ease-in-out duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* TODO: Add URL here */}
        <span class="flex justify-center mt-6 block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023&nbsp;<a href="#/" class="hover:underline">Albert Chittaphong</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
