import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>main</h1>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/tokyo">도쿄</Link>
        </li>
      </ul>
    </>
  );
}
