import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-pink-light px-4 lg:px-16 py-0">
      <div className="flex h-18 items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center justify-center w-[84px] h-9">
              <svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9205_2)">
                  <path d="M67.9112 17.0816L67.8741 17.1188C68.1343 16.4126 68.6546 16.1524 69.1006 16.1524C69.7325 16.1524 70.29 16.6356 70.29 17.3418C70.29 17.4905 70.29 17.6763 70.2157 17.8993C68.9148 21.2445 66.1643 22.9542 63.4882 23.2144C62.2617 25.2958 60.2546 26.8197 57.3926 26.8197C53.3041 26.8197 51.4829 23.5861 51.4829 20.0551C51.4829 15.7064 54.2334 10.8745 58.8422 10.8745C59.8457 10.8745 60.7006 11.0976 61.4068 11.3949C63.4882 12.1754 64.8263 14.8887 64.8263 17.7878C64.8263 18.717 64.7519 19.6462 64.5289 20.5383C65.9042 20.0551 67.205 18.94 67.9112 17.0816ZM60.1431 13.9223V13.8852C59.3254 13.8852 58.8422 14.963 58.8422 16.2639C58.8422 18.1595 59.8829 19.9064 61.5183 20.5383C61.7785 19.7206 61.89 18.7914 61.89 17.7135C61.89 15.6321 61.2581 13.9223 60.1431 13.9223ZM57.4298 24.1064C58.4705 24.1064 59.5112 23.6604 60.3289 22.7312C57.913 21.6533 56.3891 19.1259 56.3891 16.7099C56.3891 15.8922 56.5378 15.0374 56.7608 14.294C55.2741 15.5206 54.4192 17.9365 54.4192 20.0551C54.4192 22.8055 55.7201 24.1064 57.4298 24.1064Z" fill="black"/>
                  <path d="M52.0568 17.0813L52.0196 17.1185C52.2798 16.4123 52.7258 16.115 53.1718 16.115C53.8037 16.115 54.4355 16.6725 54.4355 17.3787C54.4355 17.5645 54.3984 17.7132 54.324 17.899C52.8745 21.43 50.7187 25.5557 47.2621 27.9716L47.1878 28.715C46.7789 33.1752 44.5117 35.9999 41.6497 35.9999C39.4939 35.9999 38.2302 34.5132 38.2302 32.7663C38.2302 29.607 41.4638 28.4548 44.4745 26.5221C44.5488 25.7415 44.586 24.8495 44.6231 23.8459C43.1364 25.4813 41.5382 26.1504 40.1258 26.1504C37.301 26.1504 34.9966 23.8459 34.9966 20.315C34.9966 14.8884 38.5647 11.3203 42.5417 11.3203H42.5789C45.2922 11.3203 48.1913 12.7698 48.1913 15.3716C48.1913 16.2265 47.8196 20.8725 47.5223 24.4778C49.5293 22.5822 51.2019 19.4973 52.0568 17.0813ZM40.5346 23.4743C41.9099 23.4743 43.7683 22.6194 44.9205 18.4194C45.1063 17.4902 45.2178 16.6725 45.1807 15.7061C44.9577 14.7026 44.1028 14.1079 42.8762 14.1079C40.3488 14.1079 37.9329 16.5238 37.9329 20.2035C37.9329 22.4336 38.9736 23.4743 40.5346 23.4743ZM41.947 33.2867H41.9842C42.7647 33.2867 43.6196 32.7663 44.1771 29.4212C42.5417 30.3875 41.0178 31.3539 41.0178 32.5061C41.0178 32.9893 41.3895 33.2867 41.947 33.2867Z" fill="black"/>
                  <path d="M35.649 17.0816L35.6119 17.1188C35.872 16.4126 36.3924 16.1524 36.8384 16.1524C37.4703 16.1524 38.0278 16.6356 38.0278 17.3418C38.0278 17.4905 38.0278 17.6763 37.9535 17.8993C36.6526 21.2445 33.9021 22.9542 31.226 23.2144C29.9995 25.2958 27.9924 26.8197 25.1304 26.8197C21.0419 26.8197 19.2207 23.5861 19.2207 20.0551C19.2207 15.7064 21.9711 10.8745 26.58 10.8745C27.5835 10.8745 28.4384 11.0976 29.1446 11.3949C31.226 12.1754 32.5641 14.8887 32.5641 17.7878C32.5641 18.717 32.4897 19.6462 32.2667 20.5383C33.642 20.0551 34.9428 18.94 35.649 17.0816ZM27.8809 13.9223V13.8852C27.0632 13.8852 26.58 14.963 26.58 16.2639C26.58 18.1595 27.6207 19.9064 29.2561 20.5383C29.5163 19.7206 29.6278 18.7914 29.6278 17.7135C29.6278 15.6321 28.9959 13.9223 27.8809 13.9223ZM25.1676 24.1064C26.2083 24.1064 27.249 23.6604 28.0667 22.7312C25.6508 21.6533 24.1269 19.1259 24.1269 16.7099C24.1269 15.8922 24.2756 15.0374 24.4986 14.294C23.0119 15.5206 22.157 17.9365 22.157 20.0551C22.157 22.8055 23.4579 24.1064 25.1676 24.1064Z" fill="black"/>
                  <path d="M21.1096 15.9085C20.5892 15.9085 20.1432 16.1687 19.8458 16.8749C18.8795 19.328 16.8723 23.4909 14.828 23.4909C13.5408 23.4909 12.5447 23.1998 11.5381 22.9056C10.5102 22.6052 9.47142 22.3015 8.10053 22.3015C7.61733 22.3015 6.94829 22.3759 6.31642 22.4874C8.22 19.8916 8.93114 16.7479 9.62022 10.8056C8.32276 10.723 7.26735 10.4833 6.49807 10.2412C5.67642 17.7777 4.74336 20.6513 1.33579 23.4909C0.889758 23.8626 0.666748 24.383 0.666748 24.9034C0.666748 25.7211 1.37296 26.4273 2.26502 26.4273C2.56237 26.4273 2.89688 26.3158 3.2314 26.1671C5.12702 25.3122 6.27925 25.0892 7.69167 25.0892C8.58984 25.0892 9.66458 25.3461 10.8152 25.621C12.1406 25.9378 13.5667 26.2786 14.9396 26.2786C17.9502 26.2786 19.9202 23.3423 22.1131 17.6554C22.2247 17.4696 22.2618 17.2466 22.2618 17.0607C22.2618 16.3545 21.7043 15.9085 21.1096 15.9085Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.68666 8.70287C7.35975 8.93784 8.41057 9.2114 9.773 9.29233L9.99601 9.29222C14.1961 9.29222 16.9466 6.6904 16.9466 3.56821C16.9466 1.56109 15.3855 0 13.1925 0C10.2562 0 8.21191 2.00712 7.17118 5.98419C5.87027 5.27798 4.97822 4.01424 4.53219 2.41598C4.30917 1.63543 3.82598 1.15223 3.15693 1.15223C2.33922 1.15223 1.81885 1.78411 1.81885 2.63899C1.81885 5.16648 3.78881 7.58245 6.68798 8.69752L6.68666 8.70287ZM10.219 6.57889C10.7765 4.01424 11.6686 2.78767 12.858 2.78767C13.4899 2.78767 13.8987 3.15936 13.8987 3.8284C13.8987 5.05497 12.5978 6.50455 10.219 6.57889Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_9205_2">
                    <rect width="70" height="36" fill="white" transform="translate(0.666748)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/menu" className="text-black font-nunito text-lg font-normal hover:text-valencia transition-colors">
              Menu
            </Link>
            <Link to="/blog" className="text-black font-nunito text-lg font-normal hover:text-valencia transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-black font-nunito text-lg font-normal hover:text-valencia transition-colors">
              Contact Us
            </Link>
            <div className="relative">
              <button className="flex items-center gap-1 text-black font-nunito text-lg font-normal hover:text-valencia transition-colors">
                Locations
                <ChevronDown className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Join Button */}
          <div className="hidden lg:flex">
            <button className="px-5 py-2 bg-valencia text-white font-nunito text-lg rounded-full hover:bg-valencia/90 transition-colors shadow-[0_32px_24px_0_rgba(255,255,255,0.05)_inset,0_2px_1px_0_rgba(255,255,255,0.25)_inset,0_0_0_1px_rgba(0,0,0,0.15)_inset,0_-2px_1px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(0,0,0,0.05)]">
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-pink-light border-t border-black/10 py-4">
          <div className="flex flex-col gap-4 px-4">
            <Link 
              to="/menu" 
              className="text-black font-nunito text-lg font-normal py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/blog" 
              className="text-black font-nunito text-lg font-normal py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-black font-nunito text-lg font-normal py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button className="text-left text-black font-nunito text-lg font-normal py-2">
              Locations
            </button>
            <button className="w-full mt-4 px-5 py-2 bg-valencia text-white font-nunito text-lg rounded-full">
              Join
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
