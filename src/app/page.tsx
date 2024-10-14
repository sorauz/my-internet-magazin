import Image from 'next/image' // Ushbu qatorni qo'shing


export default function Home() {
  return (
    <main>
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="logo">
          <Image 
            src="/logo.png" 
            alt="Internet-magazin logotipi"
            width={100} 
            height={50} 
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>Kategoriyalar</li>
            <li>Mahsulotlar</li>
            <li>Aksiyalar</li>
            <li>Kontaktlar</li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Qidiruv..." className="border border-gray-300 rounded px-3 py-2" />
        </div>
      </header>
    </main>
  );
}