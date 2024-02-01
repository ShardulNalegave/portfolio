
export default function HomeView() {
  return (
    <div className='h-screen overflow-y-hidden flex flex-col p-[30px]'>
      <div className="grow"></div>
      <div className="flex-none">
        <h1 className="font-mono text-2xl">Hey, I&apos;m</h1>
        <div className="h-[5px]"></div>
        <h1 className="font-['Staatliches'] text-5xl">Shardul Nalegave</h1>
      </div>
      <div className="grow"></div>
    </div>
  );
}