import Link from 'next/link';
import Loader from "@/components/Loader";

export default function Home() {
  return (
   <main>
       <h1>Hello World</h1>
       <Loader show />
   </main>
  );
}
