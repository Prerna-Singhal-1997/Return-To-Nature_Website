export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Credits</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://www.linkedin.com/in/prerna-singhal-aia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Prerna Singhal
              </a>
            </li>
            <li>
              <a
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ChatGPT
              </a>
            </li>
            <li>
              <a
                href="https://onemedical.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                onemedical.com
              </a>
            </li>
            <li>
              <a
                href="https://himalayaninstitute.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                himalayaninstitute.org
              </a>
            </li>
            <li>
              <a
                href="https://greatergood.berkeley.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                greatergood.berkeley.edu
              </a>
            </li>
            <li>
              <a
                href="https://whatchawant.us"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                whatchawant.us
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Return to Nature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

