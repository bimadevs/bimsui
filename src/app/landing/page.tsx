import { TextRevealCardPreview } from "../components/nextjs/reveal-card/demo";


export default function Page() {
    return (
        <>
            <div className="grid grid-cols-2 gap-2 h-[100vh]">
                <div className="ml-2 w-full h-full px-4 flex justify-center items-center border-b">
                    <h1 className="text-7xl">Design a website without the hassle
                    </h1>
                </div>
                <div className="bg-green-500 w-full h-full"><TextRevealCardPreview /></div>
                <div className="bg-blue-500 w-full h-full">s</div>
                <div className="bg-gray-500 w-full h-full">s</div>
            </div>
        </>
    )
}