import addresses from '../config.js';
import HotsThots from '../artifacts/contracts/HotsThots.sol/HotsThots.json';
import { useContractWrite } from 'wagmi';

export default function MintButton () {

    let address = addresses.rinkeby

    const { data, isError, isLoading, write } = useContractWrite({
      addressOrName: address,
      chainId: 4,
      contractInterface: HotsThots.abi,
      functionName: 'claim',
      onError(error) {
        alert('You must be whitelisted by the KweenBirb, 📯 Robriks / 👦🏻👦🏻.eth~ 📯 in order to claim')
      },
    }, 'claim')

    return (
      <div className='flex justify-center'>
        <div className='flex justify-center mt-6'>
          <button
            onClick={() => (write())}
            className={`flex w-${36} mt-2 p-3 rounded-xl bg-blue-600 hover:scale-105 shadow-xl justify-center text-white`}>
              Mint HotsThots NFT
          </button>
        </div>
      </div>
    )
  }