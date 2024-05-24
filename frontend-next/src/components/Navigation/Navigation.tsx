'use client'

import Link from "next/link";

export function Navigation() {
    return (
        <div className='p-[16px] shadow-header'>
            <Link
                className='w-[56px] h-[56px]'
                href='/'
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="14" fill="#615EF0"/>
                    <path
                        d="M27.943 36.042C27.635 36.042 27.376 36.014 27.166 35.958C26.956 35.888 26.823 35.769 26.767 35.601L22.231 22.098C22.217 22.028 22.196 21.965 22.168 21.909C22.154 21.839 22.147 21.776 22.147 21.72C22.147 21.412 22.574 21.258 23.428 21.258H24.163C24.471 21.258 24.737 21.3 24.961 21.384C25.185 21.468 25.332 21.629 25.402 21.867L28.006 30.204C28.118 30.54 28.216 30.89 28.3 31.254C28.398 31.618 28.454 31.905 28.468 32.115H28.552C28.58 31.905 28.636 31.618 28.72 31.254C28.818 30.89 28.916 30.54 29.014 30.204L31.702 21.867C31.772 21.643 31.919 21.489 32.143 21.405C32.367 21.307 32.633 21.258 32.941 21.258H33.55C34.39 21.258 34.81 21.412 34.81 21.72C34.81 21.818 34.789 21.944 34.747 22.098L30.211 35.601C30.155 35.769 30.022 35.888 29.812 35.958C29.602 36.014 29.343 36.042 29.035 36.042H27.943Z"
                        fill="white"/>
                </svg>
            </Link>
        </div>
    )
}
