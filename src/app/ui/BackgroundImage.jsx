import Image from "next/image";

export default function BackgroundImage() {
    return (
        <div className="absolute inset-0 -z-10">
            <Image src="/a-eryan-bg.png" alt="Background" fill className="opacity-35 md:opacity-75 object-cover object-center -z-10 brightness-350 dark:brightness-100" />
        </div>
    );
}