import NightReadLogo from "../../../storage/app/public/images/logo/night-read-logo.png";
import SearchIcon from "../../../storage/app/public/images/icons/magnifier.png";

export default function Navbar() {
    return (
        <nav className="z-[999] h-[100px] flex p-[15px] fixed w-full">
            <div className="bg-[#1E1E1E] w-[90%] mx-auto flex rounded-full relative">
                <img
                    src={NightReadLogo}
                    className="w-[100px] rounded-full ml-[75px] mt-[-15px] absolute border border-black border-solid"
                ></img>
                <div className="block m-auto relative">
                    <img
                        src={SearchIcon}
                        className="w-[40px] rounded-full ml-[72px] mt-[1px] left-[-70px] absolute bg-[#D9D9D9] border-[10px] border-[#D9D9D9]"
                    ></img>
                    <input
                        type="text"
                        className="bg-white h-[50%] w-[100%] rounded-full text-4xl indent-[20px] text-clip"
                    ></input>
                    <button className="bg-[#D9D9D9] h-[30px] w-[120px] mt-[6px] right-[10px] rounded-lg absolute text-2xl">
                        Filter
                    </button>
                </div>
                <button className="bg-[#D9D9D9] h-[40px] w-[155px] mt-[15px] right-[20px] rounded-lg absolute text-3xl">
                    Log In
                </button>
            </div>
        </nav>
    );
}
