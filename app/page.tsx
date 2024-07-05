import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    all lokks gooood, now do some fun
    <Link href={"/create"} className=" bg-slate-400">go to create page</Link>
   </div>
  );
}
