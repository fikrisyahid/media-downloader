import InputSection from "./components/input-section";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-4 items-center">
      <h1 className="text-4xl font-bold text-center mt-12">
        FS Online Media Downloader
      </h1>
      <p className="text-lg text-center">
        Download media from popular websites
      </p>
      <InputSection />
    </div>
  );
}
