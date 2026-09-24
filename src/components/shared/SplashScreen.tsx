import Image from 'next/image'

// Reiner CSS-Splash: steckt im statischen HTML und blendet sich per Animation
// selbst aus (.splash in globals.css). Frueher hing das Ausblenden an einem
// JS-Timer, der erst nach der Hydration startete — auf Handys stand der Splash
// dadurch mehrere Sekunden. Beim Seitenwechsel bleibt das Layout bestehen,
// der Splash erscheint also nur beim ersten Aufruf.
export default function SplashScreen() {
  return (
    <div
      aria-hidden="true"
      className="splash fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg pointer-events-none"
    >
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <Image
        src="/images/logo.png"
        alt=""
        width={320}
        height={90}
        className="splash-logo h-20 sm:h-24 w-auto relative"
        priority
      />
    </div>
  )
}
