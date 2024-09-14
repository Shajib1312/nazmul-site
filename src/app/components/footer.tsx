import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div>
        <p className="text-center font-bold text-rose-700 text-2xl bg-zinc-800">
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন বাজিওয়ালার সাইটঃ **
          <Link target="_blank" href="https://www.bjwala.com/">
            BJWALA.COM
          </Link>
          **
        </p>
      </div>
      <div className="bounceInUp1 flex justify-center items-center bg-gradient-to-r from-lime-700 to-transparent px-8 py-8 font-bold text-center text-white   mt-2">
        Copyright © 2023 Rocky Vai All Rights Reserved
      </div>
    </div>
  );
}
