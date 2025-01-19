import kawaii from 'data-base64:~assets/icon.png'

export const Head = () => {
  return (
    <div className="w-full flex justify-start border-l-4 border-l-tsu-rose items-center gap-4 px-3 py-2 relative overflow-hidden bg-tsu-surface rounded-lg">
      <h2 className="text-lg text-tsu-rose font-bold italic">DarkMahou</h2>
      <img src={kawaii} alt="DarkKawaii" className="w-full max-w-10 absolute top-0 right-0" />
    </div>
  )
}
