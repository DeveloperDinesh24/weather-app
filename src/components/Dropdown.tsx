import { useState } from 'react'

export const Dropdown = () => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false)

  return (
    <>
      <div
        onClick={() => setIsDropdownActive((prev: boolean): boolean => !prev)}
        className='flex gap-4 bg-[#25253f] rounded-md px-4 py-2 select-none cursor-pointer items-center'
      >
        <img src='assets/images/icon-units.svg' />
        <p className='text-xl'>Units</p>
        <img src='assets/images/icon-dropdown.svg' />
      </div>
      <div
        className={`w-42 p-2 cursor-pointer bg-[#25253f] rounded-xl select-none absolute ${isDropdownActive ? 'flex' : 'hidden'} top-20 right-0 mt-4 flex-col shadow-lg gap-2 z-10 transition-all duration-500`}
      >
        <p className='p-2 cursor-pointer'>Switch to Imperial</p>
        <div className='flex flex-col gap-0.5'>
          <p className='text-sm text-[#aeaeb7]'>Temperature</p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            Celsius (°C)
          </p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            Fahrenheit (°F)
          </p>
        </div>
        <hr className='text-[#ffffff10]' />
        <div className='flex flex-col gap-0.5'>
          <p className='text-sm text-[#aeaeb7]'>Wind Speed</p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            km/h
          </p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            mph
          </p>
        </div>
        <hr className='text-[#ffffff10]' />
        <div className='flex flex-col gap-0.5'>
          <p className='text-sm text-[#aeaeb7]'>Precipitation</p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            Milimeters (mm)
          </p>
          <p className='p-2 rounded-md hover:bg-[#ffffff10] transition-colors duration-150 cursor-pointer'>
            Inches (in)
          </p>
        </div>
      </div>
    </>
  )
}
