'use client'
import React from 'react'
import { Pane, Badge } from 'evergreen-ui'

function SubscriptionManager() {

  const subscriptionArray = [ ]

  return (
    <div className=''>
        <h2 className='text-2xl h-[4rem] flex p-2'>Subscription Manager</h2>

      <div className=''>
        <div className='h-[4rem] rounded flex items-stretch p-4 bg-slate-50 justify-between'>Subscription 1 
         <Pane className='mx-[2rem] right-[2rem] '>
            <Badge color="green" marginRight={8}>
             active
           </Badge>
         </Pane>
        </div>

        <div className='h-[4rem] rounded flex items-stretch p-4 bg-slate-50 justify-between'>Subscription 1 
         <Pane className='mx-[2rem] right-[2rem] '>
            <Badge color="green" marginRight={8}>
             active
           </Badge>
         </Pane>
        </div>
        <div className='h-[4rem] rounded flex items-stretch p-4 bg-slate-50 justify-between'>Subscription 1 
         <Pane className='mx-[2rem] right-[2rem] '>
            <Badge color="green" marginRight={8}>
             active
           </Badge>
         </Pane>
        </div>
        
        </div>
    </div>
  )
}

export default SubscriptionManager