import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center py-10 md:min-h-screen md:py-0">
      <div className="w-4/5 max-w-5xl flex flex-col items-center justify-center md:flex-row-reverse md:items-start">
        <div className="flex flex-col mb-10 md:w-3/6 md:mb-0">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum dolor</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis at mauris quis sagittis. Aliquam tincidunt diam in purus bibendum, sit amet tincidunt arcu tristique. Ut pellentesque nunc id consectetur condimentum. Pellentesque id commodo neque, nec finibus mi. Duis fermentum</p>
          <span className="text-xl mb-4"><b>Price: 10 TRX</b> + Gas</span>
          <span className="text-gray-400 mb-2">Connect your wallet to mint an nft</span>
          <button className="bg-blue-600 rounded-lg py-3.5 font-bold">Connect Wallet</button>
        </div>
        <div className="max-w-sm w-full h-96 md:w-96 relative shadow-lg rounded-xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] md:mr-20">
          <Image
              src={"/nft.jpg"}
              fill
              style={{objectFit:"cover", borderRadius: "12px"}}
          />
        </div>
      </div>
    </main>
  )
}
