import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const image = "/pitch.webp";
  const mbappe = "/mbappe.webp"
  const shoe = "/shoe.avif"
  const yamalImage = "/yamal.jpg"
  const barcelonaLogo = "/barcelona.png"
  const premierLeagueLogo = "/premier-league-logo.jpg"
  const laligaLogo = "/laligalogo.jpg"
  const seriaALogo = "/seriaALogo.jpg"
  const bundesligaLogo = "/bundesligaLogo.jpg"
  const garnacho = "/garnacho.jpg"
  const pulisic = "/pulisic.jpg"
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={image}
          alt="Football players on the pitch"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

          <nav className="absolute inset-x-0 top-1 z-10 flex items-center justify-between gap-4 px-4 py-2 text-xs font-light text-white sm:text-lg">
            <div className="flex items-center gap-3 sm:gap-[30px]">
              <span>COLLECTION</span>
              <span>CATALOGUE</span>
              <span>CATALOGUE</span>
            </div>

            <span>NEW ISSUE 2026</span>
          </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 px-4 pb-5 text-white sm:flex-row sm:items-start sm:justify-between">
          <span className="text-sm font-light sm:text-lg">
            THE HOME OF FOOTBALL
          </span>

          <span className="max-w-[280px] self-start text-left text-xs font-light leading-relaxed sm:self-auto sm:text-sm">
            The international self-regulatory governing body of association
            football, beach soccer, and futsal. Created on 21 May, 2021.
          </span>
        </div>
      </section>

      <section className="min-h-[60vh] bg-white px-4 pt-8 pb-20 text-black sm:px-7 sm:pb-40">
          {[
            { name: "BUNDESLIGA", code: "GR" },
            { name: "PREMIER LEAGUE", code: "EN" },
            { name: "SERIE A", code: "IT" },
            { name: "LA LIGA", code: "ES" },
          ].map((league) => (
            <div
              key={league.name}
              className="flex items-center justify-between gap-3 border-b border-neutral-200 py-5"
            >
              <div className="flex min-w-0 items-start gap-2 text-xl font-extrabold sm:text-3xl">
                <span>{league.name}</span>
                <span className="text-xs font-normal text-neutral-500">
                  {league.code}
                </span>
              </div>
              <a href="#" className="shrink-0 text-xs font-bold sm:text-lg">VIEW MORE</a>
            </div>
          ))}
      </section>
      
     <section className="flex flex-col items-start justify-between gap-5 px-4 pt-8 text-black sm:flex-row sm:items-end sm:px-7">
  <span className={`${anton.className} text-[clamp(2.5rem,9vw,4.5rem)] leading-[1]`}>
  TAKE A LOOK <br /> OUR CATALOGUE
</span>
  <span className="text-base font-bold sm:text-xl">
    ISSUE MARC 2025 <br /> 
    Magazine, Jersey, Ball, and <br />
    Collaboration
  </span>
</section>

<section className="mt-12 grid gap-8 bg-[#f4f6f7] px-4 py-10 text-black sm:mt-20 sm:px-7 sm:py-12 md:grid-cols-2 md:items-start">
  <div>
    <p className="mb-4 text-sm font-bold">GIVE AWAY ALERT</p>
    <h2 className={`${anton.className} text-5xl leading-[1] sm:text-6xl md:text-7xl`}>
      MBAPPE X
      <br />
      OFFSIDE
    </h2>
    <p className="mt-6 max-w-md text-base sm:mt-8 sm:text-lg">
      The collaboration with the young Prince of France to celebrate our 4th
      anniversary.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <Image
          src={mbappe}
          alt="Player featured on the giveaway cover"
          fill
          sizes="(min-width: 768px) 25vw, 45vw"
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-sm font-bold">KYLIAN MBAPPÉ LOTTIN</p>
    </div>

    <div className="relative aspect-square overflow-hidden rounded-3xl">
      <Image
        src={shoe}
        alt="Football boots from the giveaway"
        fill
        sizes="(min-width: 768px) 25vw, 45vw"
        className="object-cover"
      />
    </div>
  </div>
</section>

<section className="mt-10 bg-white px-4 py-8 text-black sm:mt-16 sm:py-10 md:px-8">
  {/* Anniversary and giveaway stats */}
  <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:items-center">
    <div className="flex items-center gap-4">
      <div className="grid size-20 place-items-center rounded-3xl bg-gray-100 text-2xl font-bold">
        4
      </div>
      <p className="text-xs font-bold">
        OUR 4TH
        <br />
        ANNIVERSARY SPECIAL
      </p>
    </div>

    <div className="ml-0 grid w-fit max-w-full grid-cols-2 gap-4 text-left sm:ml-auto sm:gap-10 sm:text-right">
      <div className="space-y-2">
        <p className="text-xs font-bold">CASH OUT</p>
        <p className={`${anton.className} text-4xl`}>$15K</p>
        <p className="text-sm">Total giveaway amount</p>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold">MERCHANDISE</p>
        <p className={`${anton.className} text-4xl`}>1000+</p>
        <p className="text-sm">Jersey, Magazine, Shoes</p>
      </div>
    </div>
  </div>

  {/* Section title */}
  <div className="my-10 flex flex-wrap items-center justify-between gap-4 sm:my-12">
    <p className="max-w-20 text-[10px] font-bold sm:text-xs">
      ALL OF
      <br />
      FOOTBALL
      <br />
      AREA IS HERE
    </p>
    <h2 className={`${anton.className} order-first w-full text-center text-4xl sm:order-none sm:w-auto sm:text-5xl md:text-7xl`}>
      FOOTBALL AREA
    </h2>
    <p className="ml-auto text-[10px] font-bold sm:ml-0 sm:text-xs">2024/2025</p>
  </div>

  {/* Three feature cards */}
  <div className="grid gap-4 md:grid-cols-3">
    {/* Player stats */}
    <article className="flex min-h-[340px] flex-col justify-between rounded-3xl bg-neutral-900 p-4 text-white sm:min-h-[380px] sm:p-5">
      <div className="flex justify-between">
        <span className="rounded-full bg-neutral-700 px-4 py-2">FCB</span>
        <span className={`${anton.className} text-3xl`}>LEWY</span>
      </div>

      <div>
        <div className="mb-5 flex justify-between text-2xl font-bold">
          <p>22 <span className="text-neutral-500">GOAL</span></p>
          <p>2 <span className="text-neutral-500">ASSIST</span></p>
        </div>

        <div className="mb-2 flex justify-between text-xs font-bold">
          <span>GOAL CONVERSION</span>
          <span>24%</span>
        </div>

        <div className="mb-6 flex gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className={`h-10 flex-1 rounded-full ${
                index < 8 ? "bg-sky-200" : "bg-neutral-800"
              }`}
            />
          ))}
        </div>

        <button className="w-full cursor-pointer rounded-full bg-white py-3 text-sm font-bold text-black transition-colors hover:bg-neutral-200">
          VIEW MORE STATS
        </button>
      </div>
    </article>

    {/* Player story */}
    <article className="rounded-3xl bg-neutral-900 p-3 text-white">
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={yamalImage}
          alt="Football player"
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 grid place-items-center">
          <button className="cursor-pointer rounded-full border border-white/20 bg-white/30 px-5 py-3 text-xs text-white backdrop-blur-sm transition-colors hover:bg-white/40">
            READ STORY
          </button>
        </span>
      </div>

      <h3 className={`${anton.className} mt-4 text-3xl`}>LAMINE YAMAL</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Lamine Yamal is a Spanish professional footballer who plays as a winger
        for Barcelona and the Spain national team.
      </p>
    </article>

    {/* Club card */}
    <div>
      <article className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl bg-neutral-900 p-6 text-center text-white">
        <div className="relative mb-6 grid size-32 place-items-center overflow-hidden rounded-full bg-white text-3xl font-bold text-red-700 sm:size-40">
          <Image
            src={barcelonaLogo}
            alt="Barcelona crest"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <h3 className={`${anton.className} text-3xl`}>BARCELONA</h3>
        <p className="text-xs">1ST PLACE</p>
      </article>
      <div className="mt-5 flex justify-center gap-3">
        {[
  { name: "Premier League", src: premierLeagueLogo },
  { name: "La Liga", src: laligaLogo },
  { name: "Seria A", src: seriaALogo },
  { name: "Bundesliga", src: bundesligaLogo },
].map((logo, index) => (
          <button
            key={logo.name}
            type="button"
            aria-label={logo.name}
            className={`grid size-10 cursor-pointer place-items-center rounded-full p-2 transition-colors ${
      index === 1
        ? "bg-neutral-800 hover:bg-neutral-700"
        : "bg-neutral-200 hover:bg-neutral-300"

    }`}
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={30}
              height={30}
              className="object-contain"
    />
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="bg-[#f4f6f7] px-5 py-12 text-black md:px-8 md:py-16">
  <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-[minmax(100px,0.28fr)_minmax(0,1fr)] sm:gap-8">
    <p className="text-xs font-bold leading-tight sm:text-[15px]">
      TRANSFER
      <br />
      AND RUMOUR OF FOOTBALL
    </p>

    <div>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-end gap-1 sm:gap-3">
        <h2 className={`${anton.className} min-w-0 text-[clamp(1.65rem,7.5vw,5rem)] leading-[0.9] md:text-8xl`}>
          TRANSFER
          <br />
          NEWS <span className="text-sky-200">SUMMER</span>
        </h2>
        <p className={`${anton.className} text-[clamp(1.65rem,7.5vw,5rem)] leading-none md:text-8xl`}>
          2025
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <p className={`${anton.className} text-xs sm:text-lg`}>PREMIER LEAGUE</p>
        <p className={`${anton.className} text-[10px] text-neutral-400 sm:text-lg`}>
          SERIE A&nbsp;&nbsp; BUNDESLIGA&nbsp;&nbsp; LA LIGA
        </p>
      </div>

      <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div>
          <div className="group relative aspect-[1.45] overflow-hidden rounded-2xl">
            <Image
              src={garnacho}
              alt="Alehandro Garnacho"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/10">
              <button className="cursor-pointer rounded-full border border-white/20 bg-white/30 px-5 py-3 text-xs text-white backdrop-blur-sm transition-colors hover:bg-white/40">
            READ NEWS
          </button>
            </div>
          </div>

        </div>

        <div>
          <aside className="flex aspect-square flex-col justify-between self-start rounded-2xl bg-neutral-900 p-3 text-white sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <span className="grid size-8 place-items-center rounded-full border-2 border-neutral-900 bg-white text-base">
                  ⚽
                </span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-neutral-900 bg-red-700 text-sm font-bold">
                  M
                </span>
              </div>
              <p className={`${anton.className} text-xs text-neutral-300 sm:text-base md:text-xl`}>
                CLUB INTERESTED
              </p>
            </div>

            <div>
              {[
                { club: "CHELSEA", interest: "85%" },
                { club: "NAPOLI", interest: "72%" },
                { club: "PARIS SAINT-GERMAIN", interest: "51%" },
              ].map((item) => (
                <div
                  key={item.club}
                  className="flex items-center justify-between border-b border-white/15 py-2 last:border-b-0"
                >
                  <span className={`${anton.className} min-w-0 text-xs font-normal leading-tight sm:text-base md:text-xl`}>
                    {item.club}
                  </span>
                  <span className={`${anton.className} text-xs sm:text-sm`}>
                    {item.interest}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-3 grid items-center gap-4 sm:grid-cols-[1.45fr_1fr] sm:gap-3">
        <div>
          <div className="flex gap-2">
            <span className="rounded-full border border-neutral-300 px-2 py-1 text-[9px] font-bold">
              TRANSFER
            </span>
            <span className="rounded-full border border-neutral-300 px-2 py-1 text-[9px] font-bold">
              RUMOUR
            </span>
          </div>
          <h3 className={`${anton.className} mt-2 text-3xl sm:text-3xl`}>
            GARNACHO TRANSFER
          </h3>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-neutral-500">
            Manchester United star Alejandro Garnacho&apos;s agents were spotted
            at Chelsea amid talks of the Argentine moving to Stamford Bridge
            this January.
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:justify-end sm:self-center">
          <button
            type="button"
            aria-label="Previous transfer story"
            className="grid size-14 cursor-pointer place-items-center rounded-full bg-neutral-200 text-2xl text-neutral-500 transition-transform duration-200 hover:scale-110 hover:bg-neutral-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next transfer story"
            className="grid size-14 cursor-pointer place-items-center rounded-full bg-neutral-900 text-2xl text-white transition-transform duration-200 hover:scale-110 hover:bg-neutral-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </div>
  </section>

  <footer className="overflow-hidden bg-[#080311] px-5 py-6 text-white sm:px-7 sm:py-8">
    <div className="relative mx-auto max-w-7xl md:min-h-[400px]">
      <nav className="flex items-start justify-between text-xs sm:text-sm">
        <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-8">
          <a href="#" className="transition-opacity hover:opacity-60">HOME</a>
          <a href="#" className="transition-opacity hover:opacity-60">CATALOGUE</a>
          <a href="#" className="transition-opacity hover:opacity-60">COLLECTION</a>
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-60"
        >
          INSTAGRAM
        </a>
      </nav>

      <div className="mt-8 grid grid-cols-1 items-end gap-6 md:absolute md:inset-0 md:mt-0 md:block">
        <div className="max-w-xs pb-2 md:absolute md:bottom-0 md:left-0">
          <p className="text-lg font-medium">OFFSIDE</p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            The international self-regulatory governing body of association
            football, beach soccer, and futsal. It was founded on 21 May 2021.
          </p>
        </div>

        <article className="w-full max-w-[280px] justify-self-center rounded-2xl bg-white p-2.5 text-black md:absolute md:right-[10%] md:top-0">
          <h2 className={`${anton.className} mb-3 text-center text-[clamp(1.5rem,6vw,2.25rem)] leading-none`}>
            EL CAPITANO "USA"
          </h2>
          <div className="group relative aspect-[0.82] overflow-hidden rounded-xl">
            <Image
              src={pulisic}
              alt="Christian Pulisic"
              fill
              sizes="(min-width: 768px) 280px, 42vw"
              className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
            />
            <button className="cursor-pointer absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-full bg-black/20 px-2 py-3 text-center text-[10px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/40">
              PLAYER OF THE WEEK
            </button>
          </div>
        </article>
      </div>
    </div>

    <a
      href="mailto:hello@offside.com"
      className={`${anton.className} mt-10 block w-full whitespace-nowrap text-[clamp(1.5rem,15vw,10rem)] leading-[0.88] tracking-[-0.06em] transition-opacity hover:opacity-75 sm:mt-12`}
    >
      HELLO@OFFSIDE.COM
    </a>

    <div className="mt-5 flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs sm:text-sm">
      <a href="#privacy-policy" className="transition-opacity hover:opacity-60">
        PRIVACY POLICY
      </a>
      <span>© 2025 COPYRIGHT</span>
    </div>
  </footer>
      </>
    );
  }