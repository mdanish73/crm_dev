import React from 'react'
import Expenses from '@/components/Progress/Expenses'
import Income from '@/components/Progress/Income'
import Profits from '@/components/Progress/Profits'
import { BadgeDollarSign, Coins, HandCoins } from 'lucide-react'

const Summary = () => {
  return (
    <div>
      Summary

      <div className='mt-4 w-full'>
        <div className='flex items-center gap-3 mb-3 w-full'>
          <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white'>
            <Coins />
          </div>
          <div className='flex-1'>
            <div className='flex justify-between text-sm'>
              <span>Income</span>
              <span>$73,000</span>
            </div>
            <Income />
          </div>  
        </div>
        
        <div className='flex items-center gap-3 mb-3 w-full'>
          <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white'>
          <BadgeDollarSign />
          </div>
          <div className='flex-1'>
            <div className='flex justify-between text-sm'>
              <span>Profits</span>
              <span>$66,000</span>
            </div>
            <Profits />
          </div>  
        </div>
        
        <div className='flex items-center gap-3 mb-3 w-full'>
          <div className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white'>
            <HandCoins />
          </div>
          <div className='flex-1'>
            <div className='flex justify-between text-sm'>
              <span>Expenses</span>
              <span>$37,000</span>
            </div>
            <Expenses />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Summary