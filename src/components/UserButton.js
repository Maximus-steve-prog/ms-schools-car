import React from 'react'; 
const UserButton = () => {
    const userPic = require('../assets/images/464690235_1586243078951863_456041130619487436_n.jpg');
    return (
        <div className="max-lg:hidden flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
            <span className="relative">
                <button
                    id="headlessui-menu-button"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                    className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white"
                >
                    <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                    <span className="flex min-w-0 items-center gap-3">
                        <span 
                            data-slot="avatar" 
                            className="size-10 "
                        >
                            <img className="size-full" src={userPic} alt="User Avatar" />
                        </span>
                        <span className="min-w-0">
                            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">erica@example.com</span>
                        </span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </span>
        </div>
    );
};

export default UserButton;