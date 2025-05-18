import { Potato } from "../../components/custom/potato/potato";


export default function Pagetato() {
    return (
        <div className="min-h-[calc(100vh-61px)] flex flex-col justify-between">
            <div className="flex text-white justify-center relative ">
                <h1 className="text-[4rem] text-white absolute top-3">Patator</h1>
            </div>
            <div className="flex flex-col items-center justify-center text-white pt-2">
                <div className="container text-[12rem] text-bold flex flex-col items-center justify-center gap-4 px-4 ">
                    <Potato potatype="༼ ◕_◕ ༽" />
                </div>
                    <span className="">_______________________________________________________________________________________</span>
            </div>
            <div>
                <div className="flex justify-between mx-4">
                </div>
                <span className="text-4xl w-screen flex justify-center text-white">_________________________________________________________</span>
                <div className="flex justify-between mx-4">
                    <Potato potatype="༼ ¬‿¬ ༽つ"/>
                    <Potato potatype="ლ༼╹◡╹༽ლ" />
                    <Potato potatype="ლ༼╹◡╹༽ლ" />
                    <Potato potatype="ლ༼╹◡╹༽ლ" />
                    <Potato potatype="ლ༼╹◡╹༽ლ" />
                    <Potato potatype="ლ༼╹◡╹༽ლ" />
                    <Potato potatype="༼◔◡◔༽" />
                </div>
            </div>
        </div>
    )
}