import Summary from '@/components/Summary/Summary'
import AreaChart from '@/components/charts/AreaChart'
import BarChart from '@/components/charts/BarChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import LineChart from '@/components/charts/LineChart'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <div className='flex items-start justify-center max-h-max col-span-2 bg-primary_bg rounded-sm text-primaryText p-3'>
        <LineChart />
      </div>
      
      <div className='flex items-start justify-center max-h-max bg-primary_bg rounded-sm text-primaryText p-3'>
        <DoughnutChart />
      </div>
      
      <div className='bg-primary_bg rounded-sm text-primaryText pt-3'>
        <BarChart />
      </div>
      
      <div className='bg-primary_bg rounded-sm text-primaryText pt-3'>
        <AreaChart />
      </div>
      
      <div className='bg-primary_bg rounded-sm text-primaryText p-3'>
        <Summary />
      </div>
    </div>
  )
}

export default page