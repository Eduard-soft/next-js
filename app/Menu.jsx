
import Link from "next/link"

export default function Menu() {
  return (
      <div>
        <Link href="/">Главная</Link>
				<Link href="/posts">Посты</Link>
      </div>
  );
}