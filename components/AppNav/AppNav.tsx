'use client';

// import nextjs components
import Image from 'next/image';
import Link from 'next/link';

// import shadcn components
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// import components
import { ModeToggle, ActiveLink } from '../index';

// import icons
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

// import data
import { appNavLinks } from './appNav.data';

export default function AppNav() {
  return (
    <nav className='h-14  flex justify-between items-center px-4 sticky top-0 z-10 '>
      <Link href='/'>
        <div className='flex items-center gap-1'>
          <div className='h-8 w-8 relative'>
            <Image
              src='/dash-white.png'
              alt='Brand'
              fill
              className='invert dark:invert-0'
            />
          </div>

          <h2 className='font-bold hidden sm:block'>Dash</h2>
        </div>
      </Link>

      <div className='flex items-center gap-4'>
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger
              asChild
              autoFocus={false}
            >
              <HamburgerMenuIcon className='h-[1.2rem] w-[1.2rem]' />
            </SheetTrigger>

            <SheetContent className='w-[15rem] pt-20'>
              <ul className='w-fit'>
                {appNavLinks.map(({ id, link, text }) => (
                  <li
                    key={id}
                    className='mb-4'
                  >
                    <ActiveLink
                      link={link}
                      text={text}
                    />
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Nav links for laptops & desktops */}
        <ul className='hidden lg:flex gap-4'>
          {appNavLinks.map(({ id, link, text }) => (
            <li key={id}>
              <ActiveLink
                link={link}
                text={text}
              />
            </li>
          ))}
        </ul>

        <ModeToggle />
      </div>
    </nav>
  );
}
