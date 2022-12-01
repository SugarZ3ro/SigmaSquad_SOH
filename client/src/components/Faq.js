import React from 'react'
import { Disclosure } from "@headlessui/react";

const Faq = () => {
  return (
    
      


        <div className="w-full px-4 pt-16 font-Varela text-center">
            <h1 className='text-4xl mb-10'>FAQ</h1>
            <div className="w-3/4  p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-20 py-4 text-xl font-medium text-left text-[#028187] bg-[#F1FBF9] rounded-lg hover:bg-[#B6DDDD] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Laboris Lorem deserunt ex dolore nulla do anim pariatur in.?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-[#028187]`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                                Aute cillum veniam exercitation non culpa aliquip. Non tempor voluptate id quis. Ut ad non pariatur qui laboris deserunt amet fugiat in laborum est elit enim. Sint ad magna magna enim magna dolore.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-20 py-4 text-xl font-medium text-left text-[#028187] bg-[#F1FBF9] rounded-lg hover:bg-[#B6DDDD] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Anim tempor cillum proident commodo ut velit qui velit ad laborum irure do ex labore.</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-[#028187]`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                             Aliqua proident culpa sit dolore voluptate aute sunt consectetur sunt magna.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-20 py-4 text-xl font-medium text-left text-[#028187] bg-[#F1FBF9] rounded-lg hover:bg-[#B6DDDD] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Voluptate magna consectetur ad in excepteur.</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-[#028187]`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                                Esse aute ut officia irure officia exercitation laboris ullamco laboris exercitation consequat deserunt nisi. Velit minim id veniam proident duis voluptate incididunt. Ullamco reprehenderit irure quis sunt quis id. Veniam Lorem sit id velit sit ullamco tempor nisi. Enim ipsum incididunt ut excepteur ullamco ad fugiat commodo nulla commodo dolor est ex sint.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>

    
  )
}

export default Faq
