import * as React from "react";
import right from '../resources/right.png'
import line from '../resources/line.png'
import marker from '../resources/marker.png'
import map from '../resources/map.jpeg'
export default function Login() {
  return (
    <div className="bg-white flex flex-col overflow-hidden  justify-center items-stretch">
      <div className="flex-col mix-blend-multiply overflow-hidden relative flex min-h-[1024px] w-full justify-center items-stretch max-md:max-w-full">
        <img
          loading="lazy"
          src={map}
          alt="map"
          className="absolute  overflow-hidden object-cover object-center inset-0"
        />
        <div className="relative bg-white bg-opacity-70 flex w-full flex-col pb-24 px-5 max-md:max-w-full">
          <div className="border self-stretch flex h-full w-full flex-col items-start max-md:max-w-full max-md:pr-5">
          <div className="text-black text-4xl  font-Anton font-normal break-words">medmap.</div>
            <div className="text-black text-base pb-2 font-medium whitespace-nowrap">
              streamlined care, your way
            </div>
          </div>
          <div className="bg-black bg-opacity-70 self-center w-[2000px] shrink-0 h-px my-auto" />
          <div className="self-center w-full max-w-[1331px] mt-9 max-md:max-w-full">
            <div className="gap-5 flex-row max-md:items-stretch max-md:gap-0">
              
              <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:max-w-full">
                  <div className="z-[1]  flex items-stretch justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                    <form className="justify-center items-stretch flex grow basis-[0%] flex-col mt-1.5 px-16 py-12 max-md:max-w-full max-md:px-5">
                      <div className="text-neutral-800 text-left text-4xl font-bold leading-10 tracking-tighter mt-16 max-md:mt-10">
                        Sign up
                      </div>
                      <div className="text-neutral-400 text-lg leading-7 whitespace-nowrap mt-3">
                        No account, No problem. Sign up today{" "}
                      </div>
                       {/* Name */}
                          <div className="mb-4">
          
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  //value={formData.name}
                                  //onChange={handleInputChange}
                                  className="w-full mt-4 p-2 border rounded-md border-solid border-black focus:outline-none"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>

                              {/* Date of Birth */}
                              <div className="mb-4">
                              <input
                                  type="text"
                                  id="phone"
                                  name="name"
                                  //value={formData.name}
                                  //onChange={handleInputChange}
                                  className="w-full  p-2 border rounded-md border-solid border-black focus:outline-none"
                                  placeholder="phone"
                                  required
                                />
                              </div>

                              {/* Email */}
                              <div className="mb-4">
                                
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                // value={formData.email}
                                // onChange={handleInputChange}
                                  className="w-full p-2 border rounded-md border-solid border-black focus:outline-none"
                                  placeholder="you@example.com"
                                  required
                                />
                              </div>

                              {/* Password */}
                              <div className="mb-6">
                              
                                <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  //value={formData.password}
                                  //onChange={handleInputChange}
                                  className="w-full p-2 border rounded-md border-solid border-black focus:outline-none"
                                  placeholder="********"
                                  required
                                />
                              </div>
                              <button className="text-white text-lg font-semibold leading-5 tracking-normal whitespace-nowrap text-center justify-center  bg-black mt-5 px-16 py-4 rounded-xl max-md:px-5">
                                          Sign up
                                              </button>

                      <div className="items-stretch flex gap-2.5 pl-9 mt-7">
                        <img
                          loading="lazy"
                          src={line}
                          alt="line"
                          className="aspect-[182] object-contain object-center w-[182px] stroke-[1px] stroke-stone-950 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <div className="text-neutral-500 text-base font-medium leading-6">
                          or
                        </div>
                        <img
                          loading="lazy"
                          src={line}
                          alt="line"
                          className="aspect-[181] object-contain object-center w-[181px] stroke-[1px] stroke-stone-950 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>
                      <div className="text-blue-500 text-center text-lg leading-7 underline whitespace-nowrap mt-5 mb-10">
                        Already have an account?{"   "}
                        <span className="font-semibold underline text-blue-500">
                          Sign in
                        </span>
                      </div>
                    </form>
                    <div className="bg-black bg-opacity-70 self-center w-px shrink-0 h-[500px] my-auto" />
                    <img
                      loading="lazy"
                      src={right}
                      alt="right"
                      className=" pl-6 mt-20 ml-8 object-contain object-center h-full w-full overflow-hidden grow basis-[0%] self-start max-md:max-w-full"
                    />
                  </div>
                
                </div>
                
              </div>
              
            </div>
            
          </div>
          <div className="flex mt-14 flex-row items-stretch max-md:w-full ">
                <div className="mt-10 text-black text-xl font-medium tracking-wide whitespace-nowrap  ">
                  .Navigation made easy
                </div>
                <img
                      loading="lazy"
                      src={marker}
                      alt="marker"
                      className="aspect-[1.25] object-contain object-center w-[66px] mix-blend-hard-light overflow-hidden self-stretch shrink-0 max-w-full"
                    />
              </div>
        </div>
      
      </div>
    </div>
  );
}

