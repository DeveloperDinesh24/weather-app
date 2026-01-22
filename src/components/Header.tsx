import { Dropdown } from "./Dropdown"

export const Header = () => {
  return (
    <header className="w-full h-fit py-10 flex justify-between items-center text-white relative">
      <div>
        <img src='assets/images/logo.svg' alt='logo text and image' />
      </div>
      <Dropdown />
    </header>
  )
}
