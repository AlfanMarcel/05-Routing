import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <Link href='/blogs/first'><h2>Blog first</h2></Link>
            <Link href='/blogs/second'><h2>Blog second</h2></Link>
        </div>
          
    );
  }