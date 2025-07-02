import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gray-300'>
        
        <div className='flex flex-wrap w-full p-4 py-6 lg:py-8 justify-between'>
            <div>
                <Link>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA5FBMVEX///+i0zwAAACi1Dr///2g1Dz//v+j0j4PDw8hISH9//vu7u6cnJwVFRWi1TsSEhIaGhqLi4sdHR0JCQnR0dH29vaTk5OgzzT///nj4+NiYmKNjY2np6ei0kL8//ROTk5ubm4/Pz82Njad0Crd8LahzC75/ul8fHy0tLRycnLa2tonJyfV6azCwsJXV1dDQ0Or0FLi7728vLzs9tnv+dHT5LLC3YbF35LM4ZK211+/2XihyUCqzVb1/eXK4p2iyji52HTu+9bc7cK933St1k7B3o6u113X5qSfzCCszEi41nz1991TDgwbAAAK4UlEQVR4nO2cbVviOBeA0ySlUG2pVAw6tr5A0RFUGFxGRCyg7rzs//8/T9JWoW3iiLgPF+y558NAaaG5m5ycpKkIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOsDNc2C+N+klMYbCgW60jNaCf5N9692v//7d//7Q7vR8/87CgrR5W/e3A5CFqFprM5h3uBHL6kSm26Dl8+f3g0DRjRNM2ZoGmHB/W3P33AHUeFGD7/C0ONlzqPrGhs0zFWf5r9KDdHRXVgntk2I3IFuk3qnXVv1if6b+D/CwDC4A1vqIIb87HQ3tC5QE007ASGeJxzYbzggdTYeoYK5aXGBUrP2fZhEv7cdiFAZDhs8d1j1SX8yBTQZBOTdDgyPPZuI1japJhTQlHcFRJN2BzJ0rT4YbVYvSRv80uq2/l4Foi7UO80NUlCoNZguOr4FHPAqYzxN0OZk0F2eEes8CCzigDeceme06jP/HPhwcGroizvgFgxj4Jsb0TvQpkdEry9YyAFvD2xsbkIXSf1BVPSPONC04GH9HVBE7wKDyB14WnqDzFG9u+oiLAv10STwPHk9MIxhGPxkc1tY6IVhML+PTX41V12IpfE7hjwxMrzOdNQcde9fP/bYeDJq9vrzVojG+qiw6kIsya3nySXYXk+MIni/meTNxBhHIys0zlSX3nrnCIV/hrOJokxDfxafIzQx9LiN2OxGzDBQ1M+Ehfu1dlBA/VDlgE14wOQOGiyJhTbPjUVpaaYekGC9w+KIGSoHQ9+klCdQd0yLuwe7H8+zN4fpHQ1vgNa4JtBbli36S8HYmIpJEpOGYgotahzdaJxY6LJMOmkEN2s8iPY7RJNnRh5rmyaXYPaCxAExkrFyP+tAI7/N9XUwZboiO/TCnhndY/pB9MTBIxXvqT/Usg5sb41zhLGtcsCDfezg0Y4dEPZD3HhDdFLXsw70NU4WTU9XOWDfIwc8ACYODN4zRvXgIdcUNJ2MV12UD1JAjbpuqxxMEI8HpmgtsQP9iY+yxY3Xx1xT4KxrwlxAz0oHZOgXIgd9I3FQ5ykxBzW9XFMQKUJv8d+vVqsfP/cljk19DxqoHYxR5MDveIkD1o0dTEneAdGCdnrQsL+d5QKlPz9wXBc7B4dbmbPaP9w5Oz44OD7bO99H0pFI9fxrq+i61tHeheTTBR34hq1ywNpUKKC90NMiByRsCgUF+mzLHLC7dOd4jYtpcGnu061jjMtFl/9zMD5LWbjEbtkSlIsYt7YlV3vbxZbFDy1bLj7aXdbBhKkckHBCfdOsoXZgxA7YAEX1gHZ0mQPtyU9NpVzhmFKplLw6nX34DVsOdo6/7O0cYFwpOvMF2XNLFuaF5Ee4luOWzzMnvXWCKy4+2Nn+8rUldjtcUkJD5UC3OzVRDWp0oEX1gDf4drwkpRdIHHALT83UjdjqbsQFLuHL+OXsip7jkntymVyH85ZVwnMStnHxLH51cX6FnQreSSuwHMs6TL5r94p//ZflHLSVDngAjJpCMzQSBz9HZpQi/ZA70IyRdEqNn2S2wQsvZ7O31atypTjbZxu7s1LtnhRLqStdPXWsk7kv3BOOl1GAHmylg2ncM3bZiwNeMagYQj0yuQM2kWbLeQf0tFI8Tm05qVizDdzB3JWvXpdLeH++zJVWKkTsuCVnqR7iWeWADJtxPei/OGB9GjUFPmZUOJhKfyLv4BuuZM56n+/0GuF5W5iv/dVKpfx19i5/2U8r7vbHSh/T11UOxmJdmkn9jh07sJkYM3IHccokcyDPlvMOrqxitgkfO+XXcmccoEO3gl+VHWLnOnPsOa6coiW4UzlgDVSLesYgcaAbTRo5uCVLOqjiCs52699wqfXyOuugWp679FeWm+0HttxUY1mYO1VbCOKmgNo/SVIPHqNqwCuGvqSDXVyysjttze2VdYCOKsW9l9fpLiTm2sHfFi/6C4Vnm0gdkA4vrsgOBkyLHZAHGs2o9Aylg3fGA2ndnQsIOQc7ZeulF9mS9DLouLxUQPhOpPXAILfRshRzNBSrLYQDMbcY9YyevaSDQ9c5yu3lzK4vd5AOF9vua68hgmfu2J1yLr4swoPcgc7LE5W4GyTzjExUDF4RzIGhuivL5IOm9zkopRyk68HevIMKzg0gdsrlZRwociT9yY8d9FnswCD9eOpgFMa3pGQORtIbLbK2cCLbS9kW9orlN9vCV2upttCVO7DHkQI+NNBiB17cMyI6ZU8KB8Rovs8Bj4lOdqc3Y+LVXBmLnx8Tm3IHrI2iIvdY4kAPm9EGHkAU9+U08rf/PgfV+YQo4fLNvrEyK/eRM+sjEpbsGwvmk3TRhUh7owBoeLGD+jiWYt5rSgd9+S2GfO3l5cjlSFZRnSNhpzV741ZaKM05dvJt6/0U0G+JA4/dx8uya4+xA8MgD3F86DHJrZj4oGAqX4aQd8BHjVY6VxaDqNdLmc2VSw6eNXfRaDKD6dP5zxengNqyOSF2F48QR6934eq9OElsKx2QcCRfpieJYnyIdJDe4MwNotIOqkeWMz9IOnNLVqrmn2GntNys2sjIOSB20EW1aGhQf1m7/2TGVsa20kGn9m4Hu7jizsrMi1muuPNj5zkHl6fldBSsthynlRpHlpaJiBH3+eWo9rCZ9Iw8VkYK2K1Zi8eMusKBbtwqfkDWmx3iUvn0WxxCq+eOk51DiR1ULw6v+RAzM07cx46DvyRfeXnNvz4bJBemzXJ9nT2OKz4fGiQORFuPKkagq9axKjIkuQMeEqwKxldfz86OMC65lfkrvc0FFZ1Wq4yx61j4KBvzL1puxcXX/NgD6zPm0hDqDfPxoB1Xgxv20k6Go3jLbZDd9/WYQU2xFAU7Egdo/woXHatcthzHxWep9nyO3XI0qVp2MT6QzBFVdzC2nKLLDy7io+VnlhF9zI6XbK2XDA1eHBiPpri7UuMpkwrWVi1cPjyS19WLvaNSERdL+bn13b2zg6urq+Od7V1FsNs6PGgVXavyGXPrgu7PbHniu8smHSS3FXXtTqzjpPQmVCnwRHK9+G9Xtz4e0Zc5NkttkG3hRty0p8NkfKjXH6MN/p1q8SIxvn/a+ayERvbqsoFYjdb+ZRjJ8zxe8DDx/Ul/qBou2eGar1r2B7nGHYThMJx1grxjYMNhGCgfbRDRYH2XYAim2dU4IgcgUZo8u/CGpl7ISzr+mjswxSyBpGSpZVqG+hEX2wu76/7Up1/zO4aqpaelyLezuxpd83ogsiFlp/dnMR7rJJNOa05btUDvj3gs6KG1rwfRcyy/lVnwmxDeZTSQb66/A47/u/4hCSz8S6zi3ggHqPn4EQlh8CAMoI0ICAXkjxeUYHieET7Uor8RsurT/yz8Z6bq/eQOjPhRpmid1mZQKNDbkMn/8oNcAQu71KyhzVEgoNM3xgRZWHDfi2aSN8tBjY4GPzVNNUJONQMS3vroxcEmSeCFajzV3/OIYzDooQ3oCqRQ1LwNgj/8AQAS/GrUahv3RzBeEDcJev2QqW4rirUHrNNu8s50U6sBirOdUXtcD4jMAmFhf+oj8eDOhkWBeaLLS83ew3gYRKFBj7Htep11xo0RXfsHOhfA7/3V/7vzFEYMO4N+e+Kv+pz+38TN3f8nohm939wQoILm3v7nFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf5H//ye7dVCFUUQAAAABJRU5ErkJggg==" 
                   className='mr-3 h-24'
                   alt="logo" />
                </Link>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <ul className='px-10 py-3'>
                   <h2 className='my-3 font-semibold'>RESOURCES</h2>
                    <li className='my-2'><Link to ="/" className='hover:underline duration-200'>
                    Home
                    </Link></li>
                    <li className='hover:underline duration-200'><a href="https://react.dev" target='__main'>Built with React</a></li>
                </ul>
                <ul className='px-10 py-3'>
                    <h2 className='my-3 font-semibold'>FOLLOW US</h2>
                    <li className='my-2 hover:underline'><a href="https://github.com/Ron-Chandrayan" target='__main'>GitHub</a></li>
                    <li className='hover:underline '><a href="http://discord.com" target='__main'>Discord</a></li>
                </ul>
                <ul className='px-10 py-3'>
                    <h2 className='my-3 font-semibold'>LEGAL HELP</h2>
                    <li className='my-2'><Link to="/"
                    className='hover:underline'>Privacy Policies</Link></li>
                    <li><Link  to="/" className='hover:underline'>Terms & Conditions</Link></li>
                </ul>
            </div>
        </div>
        <hr  />
        <div className='flex flex-wrap justify-between items-center'>
            <div className='text-sm'> © 2025
               <a href="" className='hover:underline'>chandrayanpaul. </a>
                All rights reserved
            </div>
            <div className='flex flex-wrap justify-between m-4 gap-4 pr-7'>
                <Link to="#" className="text-black-500 hover:underline">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>

                         <Link to="#" className="text-black-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>

                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>

                        <Link to="#" className="text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>

                        <Link to="#" className="text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
