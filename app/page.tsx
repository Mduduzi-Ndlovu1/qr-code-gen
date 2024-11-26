import Image from "next/image";
import QrCodeGenerator from "./QrCodeGenerator";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] flex justify-center items-center h-full">
      <QrCodeGenerator/>
      <Image src="/glass.png" 
      alt="qr-code"  
      width={1600}
      height={1200}
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
      />
    </div>
  );
}
