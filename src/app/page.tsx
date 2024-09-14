import { posts } from "@/utils/data/posts";
import { personalData } from "@/utils/personalData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="flex  items-center justify-center mt-4 mb-4">
        <Link target="_blank" href={personalData.whatsApp}>
          <Image
            className="cursor-pointer brightness-125 pulse"
            src={personalData.whatsAppImg}
            alt="whatsapp"
            width={960}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className=" bounceInUp"
          src="/feature.png"
          alt="profile"
          width={960}
          height={240}
        />
      </div>

      <Link target="_blank" href={personalData.whatsApp}>
        <Image
          className="cursor-pointer brightness-125 pulse border-2 rounded-xl mt-4 mb-4  border-pink-800 font-bold"
          src={personalData.whatsAppImg}
          alt="whatsapp"
          width={960}
          height={100}
        />
      </Link>
      <div className="text">AVAILABLE EXCHANGES</div>
      <div className="grid grid-cols-5 gap-2 posts">
        {posts.map((post) => (
          <div key={post.id} className="mt-4">
            <Image
              className="cursor-pointer hover:brightness-90 pulse"
              src={post.content}
              alt="profile"
              width={260}
              height={240}
            />
          </div>
        ))}
      </div>
      <div>
        <Link target="_blank" href={personalData.whatsApp}>
          <Image
            className="cursor-pointer brightness-125 pulse2 border-2 rounded-xl mt-4 mb-4  border-pink-800 font-bold"
            src={personalData.connect}
            alt="whatsapp"
            width={960}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
