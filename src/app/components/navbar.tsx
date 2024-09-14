import { personalData } from "@/utils/personalData";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex px-4 justify-center items-center flex-col gap-1 mt-2 bg-gradient-to-r from-amber-900 to-slate-700">
      <div>
        <Image
          src={personalData.profile}
          alt="profile"
          width="260"
          height="260"
        />
      </div>
      <div className="text-center text-red-300 mb-2">
        <p>Best Service Provider</p>
      </div>
    </div>
  );
}
