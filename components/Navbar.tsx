import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"



const Navbar = () => {
  return (
    <>
        <header className="w-full absolute z-10">
            <nav className="max-w-[1140px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="car hub logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>
                <div className="navigation flex justify-between text-lg font-medium">
                    

                <Link href='/carhub' className="mx-5 hover:text-blue-500 active:text-blue-400" >Cars </Link>
                <Link href='/blog' className="mx-5" >Blog </Link>
                <Link href='/how-it-works' className="mx-5" >How it works  </Link>
                <Link href='/about' className="mx-5  hover:text-blue-500 active:text-blue-400" >About  </Link>
                </div>

                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white main-w-[130px]"

                ></CustomButton>
            </nav>
        </header>
    </>
    )
}

export default Navbar