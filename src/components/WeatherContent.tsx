export const WeatherContent = () => {
  return (
    <div className='w-full mt-8 min-h-[60dvh] grid grid-cols-6 grid-rows-5 gap-4'>
      <div
        className='col-span-4 row-span-2 bg-[url(../assets/images/bg-today-large.svg)] 
      bg-no-repeat bg-center bg-cover rounded-xl flex justify-between items-center px-8'
      >
        <div className='flex flex-col gap-2'>
          <p className='text-4xl font-semibold'>Berlin, Germany</p>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className='flex gap-4 items-center'>
          <img
            src='../assets/images/icon-sunny.webp'
            alt='icon-sunny'
            width={100}
          />
          <p className='text-8xl font-semibold'>20°</p>
        </div>
      </div>
      <div className='col-span-2 row-span-4 p-6 bg-[#25253f] rounded-xl'>
        <div className='w-full flex justify-between py-4'>
          <p className='text-xl font-semibold'>Hourly forecast</p>
          <div className='w-fit h-fit px-2 py-1 bg-black flex gap-2 items-center justify-center rounded-md cursor-pointer'>
            <span>Tuesday</span> <img src='assets/images/icon-dropdown.svg' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
          <div className='w-full flex items-center justify-between px-2 bg-[#312f4b] border border-[#ffffff40] rounded-lg '>
            <div className='flex items-center'>
              <img src='assets/images/icon-overcast.webp' width={50} />{' '}
              <span>3 PM</span>
            </div>{' '}
            <span>20°</span>
          </div>
        </div>
      </div>
      <div className='col-span-1 row-span-1 bg-[#25253f] rounded-xl p-6'>
        <span className='text-xl block'>Feels Like</span>
        <br />
        <span className='text-4xl'>18°</span>
      </div>
      <div className='col-span-1 row-span-1 bg-[#25253f] rounded-xl p-6'>
        <span className='text-xl block'>Humidity</span>
        <br />
        <span className='text-4xl'>46%</span>
      </div>
      <div className='col-span-1 row-span-1 bg-[#25253f] rounded-xl p-6'>
        <span className='text-xl block'>Wind</span>
        <br />
        <span className='text-4xl'>14 km/h</span>
      </div>
      <div className='col-span-1 row-span-1 bg-[#25253f] rounded-xl p-6'>
        <span className='text-xl block'>Precipitation</span>
        <br />
        <span className='text-4xl'>0 mm</span>
      </div>
      <div className='col-span-4 row-span-1 bg-red-400 rounded-lg'>
        <p>Daily forecast</p>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        <div className='min-w-24 w-fit p-2 rounded-lg flex flex-col items-center bg-[#25253f]'>
          <span>Tue</span>
          <img src='assets/images/icon-overcast.webp' width={50} />
          <div className='w-full flex justify-between'>
            <span>20°</span> <span>14°</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
