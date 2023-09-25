import Image from "next/image";
import waiting from "../../../public/svgFiles/comingSoon.svg";

export default function CommingSoon() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <Image src={waiting} alt="waiting" />
        <h1 className="text-4xl opacity-30 font-bold">
          Products are coming soon...
        </h1>
      </div>
    </main>
  );
}
