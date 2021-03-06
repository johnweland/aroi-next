import { Fragment } from 'react'
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import Image from 'next/image'

import {
  HomeIcon,
  MenuAlt1Icon,
  ChatAltIcon,
  LocationMarkerIcon,
  MenuIcon,
  ShieldCheckIcon,
  SunIcon,
  MoonIcon,
  XIcon,
  InformationCircleIcon,
  FireIcon
} from '@heroicons/react/outline'

const navItems = [
  {
    name: 'Home',
    description: 'Welcome to Aroi Thai Cuisine',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Menu',
    description: 'Checkout our full-featured menu',
    href: '/menu',
    icon: MenuAlt1Icon,
  },
  {
    name: 'About',
    description: "Get to know us!",
    href: '/about', icon: InformationCircleIcon
  },
  {
    name: 'Contact',
    description: "Reach out & connect with us",
    href: '/contact',
    icon: ChatAltIcon,
  },
]


const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), [])
  const renderThemeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='text-white w-6 h-6'
          role="banner"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className='text-white w-6 h-6'
          role="banner"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <Popover className="relative bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-neutral-800 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Aroi Thai Cuisine</span>
                <FireIcon className='w-10 h-10 text-indigo-600 dark:text-orange-600' />
              </a>
            </Link>
          </div>
          <div className="mr-2 ml-[auto] md:hidden">
          <button
              type="button"
              className="ml-2 flex p-2 rounded-md bg-indigo-600 dark:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Toggle Darkmode</span>
              {renderThemeToggle()}
            </button>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  title={item.description}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 dark:bg-orange-600 hover:bg-indigo-700 dark:hover:bg-orange-700"
            >
              <LocationMarkerIcon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
              Find Us
            </a>
            <button
              type="button"
              className="ml-2 flex p-2 rounded-md bg-indigo-600 dark:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Toggle Darkmode</span>
              {renderThemeToggle()}
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <FireIcon className='w-10 h-10 text-indigo-600 dark:text-orange-600' />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a
                        title={item.description}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-neutral-700"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-orange-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">

              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 dark:bg-orange-600 hover:bg-indigo-700 dark:hover:bg-orange-700"
                >
                  <LocationMarkerIcon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                  Find Us
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NavBar;