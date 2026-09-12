import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <>
    <div className='border-t border-slate-200 mt-10'></div>
      <footer className="container mx-auto bg-white">
        <div className="px-0 py-12">

          {/* Main Footer */}
          <div className="flex items-start justify-between gap-8">

            {/* Brand */}
            <div>
              <div className="h-7 w-28.25">
                <img src={logo} alt="logo" />
              </div>

              <p className="mt-4 w-90 text-[12px] leading-5 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              {/* Social */}
              <div className="mt-5 flex gap-5 text-[12px] font-medium text-[#334155]">
                <a href="#" className="hover:text-[#EC4899]">
                  GitHub
                </a>

                <a href="#" className="hover:text-[#EC4899]">
                  Twitter
                </a>

                <a href="#" className="hover:text-[#EC4899]">
                  LinkedIn
                </a>
              </div>
            </div>


            <div className="flex items-start justify-center gap-40">

              {/* Product */}
              <div>
                <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
                  Product
                </h3>

                <ul className="mt-4 space-y-2 text-[12px] text-[#64748B]">
                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Technologies
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>


              {/* Company */}
              <div>
                <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
                  Company
                </h3>

                <ul className="mt-4 space-y-2 text-[12px] text-[#64748B]">
                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>


              {/* Legal */}
              <div>
                <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
                  Legal
                </h3>

                <ul className="mt-4 space-y-2 text-[12px] text-[#64748B]">
                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-[#0F172A]">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>


          {/* Bottom */}
          <div className="mt-12 border-t border-slate-100 pt-7">
            <div className="flex flex-col gap-4 text-[12px] text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">

              <p>
                © 2026 Dev Stack. All rights reserved.
              </p>

              <div className="flex gap-6">
                <a href="#" className="hover:text-[#0F172A]">
                  Privacy
                </a>

                <a href="#" className="hover:text-[#0F172A]">
                  Terms
                </a>
              </div>

            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer