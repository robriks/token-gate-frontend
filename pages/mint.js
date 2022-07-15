import addresses from '../config.js';
import HotsThots from '../artifacts/contracts/HotsThots.sol/HotsThots.json';
import { Connector, useConnect, useContractWrite } from 'wagmi';
import { useAccount } from 'wagmi';
import { InjectedConnector } from '@wagmi/core';

export default function MintButton () {

    const connected = useAccount()
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

    if (!connected.data) return (
      <div className='flex justify-center'>
        <div className='flex justify-center mt-6'>
          <button
            className={`flex w-${36} mt-2 p-3 rounded-xl font-semibold bg-blue-300 hover:scale-105 shadow-xl justify-center text-white`}>
              You must connect wallet to mint
          </button>
        </div>
      </div>
    )

    return (
      <div className='flex justify-center'>
        <div className='flex justify-center mt-6'>
          <button
            onClick={() => (write())}
            className={`flex w-${36} mt-2 p-3 rounded-xl font-semibold bg-blue-600 hover:scale-105 shadow-xl justify-center text-white`}>
              Mint HotsThots NFT
          </button>
        </div>
      </div>
    )
  }