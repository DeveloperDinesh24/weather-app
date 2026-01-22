export const Dropdown = () => {
  return (
    <>
      <div className='flex gap-4 bg-[#25253f] rounded-xl px-4 py-2 select-none cursor-pointer'>
        <img src='assets/images/icon-units.svg' />
        <p className='text-xl'>Units</p>
        <img src='assets/images/icon-dropdown.svg' />
      </div>
      <div className='w-fit px-2 py-4 bg-[#25253f] rounded-xl select-none cursor-pointer'>
        <p>Switch to Imperial</p>
        <div>
          <p>Temperature</p>
          <p>Celsius(°C)</p>
          <p>Fahrenheit(°F)</p>
        </div>
      </div>
    </>
  )
}
