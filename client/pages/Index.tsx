import Navigation from "../components/Navigation";
import { ChevronRight, Clock, BookOpen, Monitor } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative w-full h-[900px] flex items-center justify-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/dec20cc501632e96904a409ab5530d4939c2b1f5?width=2880') lightgray 50% / cover no-repeat`
        }}
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-16">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-8 max-w-[560px]">
              <div className="flex flex-col gap-6">
                <h1 className="text-white font-anton text-5xl lg:text-[84px] leading-[110%] tracking-[-0.84px]">
                  Experience the Finest Pizza in the Philippines
                </h1>
                <p className="text-white font-nunito text-xl leading-[150%]">
                  At Buriquo Pizza, we pride ourselves on delivering top-quality servings crafted with care. Our commitment to excellence in product and service ensures every bite is a delight.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-gray-100 text-black font-nunito text-lg rounded-full hover:bg-gray-200 transition-colors shadow-[0_32px_24px_0_rgba(255,255,255,0.05)_inset,0_2px_1px_0_rgba(255,255,255,0.25)_inset,0_0_0_1px_rgba(0,0,0,0.15)_inset,0_-2px_1px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(0,0,0,0.05)]">
                  Order
                </button>
                <button className="px-6 py-2.5 border-2 border-white bg-transparent text-white font-nunito text-lg rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="w-full py-28 px-4 lg:px-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <span className="text-black font-nunito text-base font-semibold">Delicious</span>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-black font-anton text-4xl lg:text-[60px] leading-[120%] tracking-[-0.6px]">
                    Unbeatable Deals Just for You!
                  </h2>
                  <p className="text-black font-nunito text-xl leading-[150%]">
                    Discover our exciting current promotions and special offers that make enjoying Buriquo Pizza even better. Don't miss out on these limited-time deals designed to satisfy your cravings!
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                  Learn More
                </button>
                <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                  Order Now
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4097dfb3632c9d22bb270fc658edefaedcaef7e0?width=1200" 
                alt="Pizza Deal" 
                className="w-full h-[640px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Pizzas Section */}
      <section className="w-full py-28 px-4 lg:px-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col items-center gap-4 max-w-[768px]">
              <div className="flex items-center">
                <span className="text-black font-nunito text-base font-semibold text-center">Delicious</span>
              </div>
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-black font-anton text-4xl lg:text-[60px] leading-[120%] tracking-[-0.6px] text-center">
                  Savor the Best Pizzas in the Philippines
                </h2>
                <p className="text-black font-nunito text-xl leading-[150%] text-center">
                  At Buriquo Pizza, we take pride in our best-selling pizzas crafted with fresh ingredients and a passion for flavor. Experience the perfect blend of taste and quality with every bite.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-8">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/66afd9ae40afbcb64a382a6b59d88f9fff99863b?width=789" 
                    alt="Signature Pizza" 
                    className="w-full h-[234px] object-cover rounded-[32px]"
                  />
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px] text-center">
                      Explore Our Signature Pizza Creations
                    </h3>
                    <p className="text-black font-nunito text-lg leading-[150%] text-center">
                      Our signature pizzas are a must-try!
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8560ae4caea7c322f0eaf8f9f2b8c598a81b5849?width=789" 
                    alt="Menu Items" 
                    className="w-full h-[234px] object-cover rounded-[32px]"
                  />
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px] text-center">
                      Discover Other Popular Menu Items
                    </h3>
                    <p className="text-black font-nunito text-lg leading-[150%] text-center">
                      From cheesy pastas to fresh salads, we have it all.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c3e49d0bf70ed379e08276ff8dacb71e18f57f77?width=789" 
                    alt="Pizza Experience" 
                    className="w-full h-[234px] object-cover rounded-[32px]"
                  />
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px] text-center">
                      Join Us for a Pizza Experience
                    </h3>
                    <p className="text-black font-nunito text-lg leading-[150%] text-center">
                      Visit us today and taste the difference!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-6">
                <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                  Order
                </button>
                <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                  Menu
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="w-full py-28 px-4 lg:px-16 bg-pink-light">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-6">
                <h2 className="text-black font-anton text-3xl lg:text-[48px] leading-[120%] tracking-[-0.48px]">
                  Experience the Love in Every Slice of Buriquo Pizza
                </h2>
                <p className="text-black font-nunito text-xl leading-[150%]">
                  At Buriquo Pizza, every dish is crafted with care by our dedicated crew. We believe that the love we put into our food makes all the difference in your dining experience.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 py-2">
                <div className="flex items-center gap-4">
                  <Clock className="h-4 w-4 text-black flex-shrink-0" />
                  <span className="text-black font-nunito text-lg leading-[150%]">
                    Fresh ingredients, prepared with passion.
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen className="h-4 w-4 text-black flex-shrink-0" />
                  <span className="text-black font-nunito text-lg leading-[150%]">
                    A team that cares about your meal.
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Monitor className="h-4 w-4 text-black flex-shrink-0" />
                  <span className="text-black font-nunito text-lg leading-[150%]">
                    Every bite tells a story of dedication.
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f47de37a7f70c718b4f62dea917ff20b6d6c6b55?width=1200" 
                alt="Pizza Making" 
                className="w-full h-[640px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-28 px-4 lg:px-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row items-start gap-4">
              <div className="flex flex-col gap-8 w-full lg:w-[576px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="text-black font-nunito text-base font-semibold">Milestones</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-black font-anton text-4xl lg:text-[60px] leading-[120%] tracking-[-0.6px]">
                      Our Journey Through the Years
                    </h2>
                    <p className="text-black font-nunito text-xl leading-[150%]">
                      Buriquo Pizza has been serving delicious pizza since its inception. Join us as we celebrate our remarkable journey in the Philippines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                    Learn More
                  </button>
                  <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                    Explore
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-0">
                {/* Timeline Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center w-32 gap-2.5">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-0.5 h-6 bg-black"></div>
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <div className="w-0.5 flex-1 bg-black"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-8 flex-1 pb-6">
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-black font-anton text-3xl lg:text-[48px] leading-[120%] tracking-[-0.48px]">
                          2010
                        </h3>
                        <h4 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px]">
                          First Store Opened
                        </h4>
                      </div>
                      <p className="text-black font-nunito text-xl leading-[150%]">
                        In 2010, we opened our first store, bringing authentic pizza to the community. This marked the beginning of our delicious journey.
                      </p>
                      <div className="flex gap-6">
                        <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </button>
                        <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                          Explore
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ab8d8723b23183b1a202a72caaebe0bca7997fea?width=1088" 
                      alt="First Store 2010" 
                      className="w-full h-[544px] object-cover rounded-[40px]"
                    />
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center w-32 gap-2.5">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-0.5 h-[42px] bg-black"></div>
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <div className="w-0.5 flex-1 bg-black"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-8 flex-1 py-6">
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-black font-anton text-3xl lg:text-[48px] leading-[120%] tracking-[-0.48px]">
                          2015
                        </h3>
                        <h4 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px]">
                          Franchise Expansion
                        </h4>
                      </div>
                      <p className="text-black font-nunito text-xl leading-[150%]">
                        By 2015, we began franchising, allowing more communities to enjoy our pizza. Our brand grew, and so did our family of franchisees.
                      </p>
                      <div className="flex gap-6">
                        <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </button>
                        <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                          Explore
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c6c8e98c2ad7140b2c947b9eecff2a3e807cb6ab?width=1088" 
                      alt="Franchise Expansion 2015" 
                      className="w-full h-[544px] object-cover rounded-[40px]"
                    />
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center w-32 gap-2.5">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-0.5 h-[42px] bg-black"></div>
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <div className="w-0.5 flex-1 bg-black"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-8 flex-1 py-6">
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-black font-anton text-3xl lg:text-[48px] leading-[120%] tracking-[-0.48px]">
                          2020
                        </h3>
                        <h4 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px]">
                          New Menu Launch
                        </h4>
                      </div>
                      <p className="text-black font-nunito text-xl leading-[150%]">
                        In 2020, we introduced an exciting new menu featuring innovative flavors. Our commitment to quality and creativity continues to delight our customers.
                      </p>
                      <div className="flex gap-6">
                        <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </button>
                        <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                          Explore
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4947afc34fca20087ded5219b3475b8ccef8e29a?width=1088" 
                      alt="New Menu Launch 2020" 
                      className="w-full h-[544px] object-cover rounded-[40px]"
                    />
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center w-32 gap-2.5">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-0.5 h-[42px] bg-black"></div>
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <div className="w-0.5 flex-1 bg-black"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-8 flex-1 pt-6">
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-black font-anton text-3xl lg:text-[48px] leading-[120%] tracking-[-0.48px]">
                          2023
                        </h3>
                        <h4 className="text-black font-anton text-[40px] leading-[130%] tracking-[-0.4px]">
                          Community Engagement
                        </h4>
                      </div>
                      <p className="text-black font-nunito text-xl leading-[150%]">
                        In 2023, we focused on giving back to our communities through various initiatives. Our journey is not just about pizza; it's about making a difference.
                      </p>
                      <div className="flex gap-6">
                        <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </button>
                        <button className="flex items-center gap-2 text-black font-nunito text-lg hover:text-valencia transition-colors">
                          Explore
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/247b829242722a6b7b1a1127d7e821a3f138b265?width=1088" 
                      alt="Community Engagement 2023" 
                      className="w-full h-[544px] object-cover rounded-[40px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-28 px-4 lg:px-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-6">
                <h2 className="text-black font-anton text-4xl lg:text-[60px] leading-[120%] tracking-[-0.6px]">
                  Order Your Favorite Pizza Today!
                </h2>
                <p className="text-black font-nunito text-xl leading-[150%]">
                  Visit us for a delightful pizza experience at your nearest Buriquo branch or order online.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-valencia text-white font-nunito text-lg rounded-full hover:bg-valencia/90 transition-colors shadow-[0_32px_24px_0_rgba(255,255,255,0.05)_inset,0_2px_1px_0_rgba(255,255,255,0.25)_inset,0_0_0_1px_rgba(0,0,0,0.15)_inset,0_-2px_1px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(0,0,0,0.05)]">
                  Order
                </button>
                <button className="px-6 py-2.5 border-2 border-black bg-transparent text-black font-nunito text-lg rounded-full hover:bg-black hover:text-white transition-colors">
                  Locations
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f516677a6b766c1588b7a6d13244a4eca20df662?width=1200" 
                alt="Pizza Order" 
                className="w-full h-[400px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-20 px-4 lg:px-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-center w-[84px] h-9">
                  <svg width="71" height="37" viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_9205_44)">
                      <path d="M67.9112 17.7652L67.8741 17.8024C68.1343 17.0962 68.6546 16.836 69.1006 16.836C69.7325 16.836 70.29 17.3192 70.29 18.0254C70.29 18.1741 70.29 18.3599 70.2157 18.5829C68.9148 21.9281 66.1643 23.6378 63.4882 23.898C62.2617 25.9794 60.2546 27.5033 57.3926 27.5033C53.3041 27.5033 51.4829 24.2697 51.4829 20.7387C51.4829 16.39 54.2334 11.5581 58.8422 11.5581C59.8457 11.5581 60.7006 11.7812 61.4068 12.0785C63.4882 12.859 64.8263 15.5723 64.8263 18.4714C64.8263 19.4006 64.7519 20.3298 64.5289 21.2219C65.9042 20.7387 67.205 19.6236 67.9112 17.7652ZM60.1431 14.6059V14.5688C59.3254 14.5688 58.8422 15.6466 58.8422 16.9475C58.8422 18.8431 59.8829 20.59 61.5183 21.2219C61.7785 20.4042 61.89 19.475 61.89 18.3971C61.89 16.3157 61.2581 14.6059 60.1431 14.6059ZM57.4298 24.79C58.4705 24.79 59.5112 24.344 60.3289 23.4148C57.913 22.3369 56.3891 19.8095 56.3891 17.3935C56.3891 16.5758 56.5378 15.721 56.7608 14.9776C55.2741 16.2042 54.4192 18.6201 54.4192 20.7387C54.4192 23.4891 55.7201 24.79 57.4298 24.79Z" fill="black"/>
                      <path d="M52.0568 17.7651L52.0196 17.8024C52.2798 17.0962 52.7258 16.7989 53.1718 16.7989C53.8037 16.7989 54.4355 17.3564 54.4355 18.0626C54.4355 18.2484 54.3984 18.3971 54.324 18.5829C52.8745 22.1139 50.7187 26.2396 47.2621 28.6555L47.1878 29.3989C46.7789 33.8591 44.5117 36.6838 41.6497 36.6838C39.4939 36.6838 38.2302 35.1971 38.2302 33.4502C38.2302 30.2909 41.4638 29.1387 44.4745 27.206C44.5488 26.4254 44.586 25.5334 44.6231 24.5298C43.1364 26.1652 41.5382 26.8343 40.1258 26.8343C37.301 26.8343 34.9966 24.5298 34.9966 20.9989C34.9966 15.5723 38.5647 12.0042 42.5417 12.0042H42.5789C45.2922 12.0042 48.1913 13.4537 48.1913 16.0555C48.1913 16.9104 47.8196 21.5564 47.5223 25.1617C49.5293 23.2661 51.2019 20.1812 52.0568 17.7651ZM40.5346 24.1582C41.9099 24.1582 43.7683 23.3033 44.9205 19.1033C45.1063 18.1741 45.2178 17.3564 45.1807 16.39C44.9577 15.3865 44.1028 14.7918 42.8762 14.7918C40.3488 14.7918 37.9329 17.2076 37.9329 20.8874C37.9329 23.1175 38.9736 24.1582 40.5346 24.1582ZM41.947 33.9706H41.9842C42.7647 33.9706 43.6196 33.4502 44.1771 30.1051C42.5417 31.0714 41.0178 32.0378 41.0178 33.19C41.0178 33.6732 41.3895 33.9706 41.947 33.9706Z" fill="black"/>
                      <path d="M35.649 17.7652L35.6119 17.8024C35.872 17.0962 36.3924 16.836 36.8384 16.836C37.4703 16.836 38.0278 17.3192 38.0278 18.0254C38.0278 18.1741 38.0278 18.3599 37.9535 18.5829C36.6526 21.9281 33.9021 23.6378 31.226 23.898C29.9995 25.9794 27.9924 27.5033 25.1304 27.5033C21.0419 27.5033 19.2207 24.2697 19.2207 20.7387C19.2207 16.39 21.9711 11.5581 26.58 11.5581C27.5835 11.5581 28.4384 11.7812 29.1446 12.0785C31.226 12.859 32.5641 15.5723 32.5641 18.4714C32.5641 19.4006 32.4897 20.3298 32.2667 21.2219C33.642 20.7387 34.9428 19.6236 35.649 17.7652ZM27.8809 14.6059V14.5688C27.0632 14.5688 26.58 15.6466 26.58 16.9475C26.58 18.8431 27.6207 20.59 29.2561 21.2219C29.5163 20.4042 29.6278 19.475 29.6278 18.3971C29.6278 16.3157 28.9959 14.6059 27.8809 14.6059ZM25.1676 24.79C26.2083 24.79 27.249 24.344 28.0667 23.4148C25.6508 22.3369 24.1269 19.8095 24.1269 17.3935C24.1269 16.5758 24.2756 15.721 24.4986 14.9776C23.0119 16.2042 22.157 18.6201 22.157 20.7387C22.157 23.4891 23.4579 24.79 25.1676 24.79Z" fill="black"/>
                      <path d="M21.1096 16.5919C20.5892 16.5919 20.1432 16.8521 19.8458 17.5583C18.8795 20.0114 16.8723 24.1743 14.828 24.1743C13.5408 24.1743 12.5447 23.8832 11.5381 23.589C10.5102 23.2886 9.47142 22.9849 8.10053 22.9849C7.61733 22.9849 6.94829 23.0593 6.31642 23.1708C8.22 20.575 8.93114 17.4313 9.62022 11.489C8.32276 11.4064 7.26735 11.1667 6.49807 10.9246C5.67642 18.4611 4.74336 21.3347 1.33579 24.1743C0.889758 24.546 0.666748 25.0664 0.666748 25.5868C0.666748 26.4045 1.37296 27.1107 2.26502 27.1107C2.56237 27.1107 2.89688 26.9992 3.2314 26.8505C5.12702 25.9956 6.27925 25.7726 7.69167 25.7726C8.58984 25.7726 9.66458 26.0295 10.8152 26.3044C12.1406 26.6212 13.5667 26.962 14.9396 26.962C17.9502 26.962 19.9202 24.0257 22.1131 18.3388C22.2247 18.153 22.2618 17.93 22.2618 17.7441C22.2618 17.0379 21.7043 16.5919 21.1096 16.5919Z" fill="black"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.68666 9.38646C7.35975 9.62143 8.41057 9.89499 9.773 9.97592L9.99601 9.97581C14.1961 9.97581 16.9466 7.37399 16.9466 4.2518C16.9466 2.24468 15.3855 0.683594 13.1925 0.683594C10.2562 0.683594 8.21191 2.69071 7.17118 6.66778C5.87027 5.96157 4.97822 4.69783 4.53219 3.09957C4.30917 2.31902 3.82598 1.83582 3.15693 1.83582C2.33922 1.83582 1.81885 2.4677 1.81885 3.32258C1.81885 5.85007 3.78881 8.26604 6.68798 9.38111L6.68666 9.38646ZM10.219 7.26248C10.7765 4.69783 11.6686 3.47126 12.858 3.47126C13.4899 3.47126 13.8987 3.84295 13.8987 4.51199C13.8987 5.73856 12.5978 7.18814 10.219 7.26248Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_9205_44">
                        <rect width="70" height="36" fill="white" transform="translate(0.666748 0.683594)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              
              <div className="flex justify-center gap-8">
                <span className="text-black font-nunito text-base font-semibold">Menu Page</span>
                <span className="text-black font-nunito text-base font-semibold">Blog Section</span>
                <span className="text-black font-nunito text-base font-semibold">Contact Us</span>
                <span className="text-black font-nunito text-base font-semibold">Store Locator</span>
                <span className="text-black font-nunito text-base font-semibold">Promotions</span>
              </div>
              
              <div className="flex justify-end gap-3 flex-1">
                <div className="w-6 h-6 bg-black rounded"></div>
                <div className="w-6 h-6 bg-black rounded"></div>
                <div className="w-6 h-6 bg-black rounded"></div>
                <div className="w-6 h-6 bg-black rounded"></div>
                <div className="w-6 h-6 bg-black rounded"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-8">
              <div className="w-full max-w-screen-xl h-0.5 bg-black"></div>
              <div className="flex gap-6">
                <span className="text-black font-nunito text-base">© 2025 Buriquo Pizza. All rights reserved.</span>
                <span className="text-black font-nunito text-base underline">Privacy Policy</span>
                <span className="text-black font-nunito text-base underline">Terms of Service</span>
                <span className="text-black font-nunito text-base underline">Cookies Settings</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
