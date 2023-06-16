import React from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import moment from 'moment'

const { setGlobalState, getGlobalState, useGlobalState} = createGlobalState({
  createModal:"scale:0",
  connectedAccount:"",
  contract:null,
  proposals:[],
  isStakeholder:false,
  balalnce: 0,
  myBalance: 0
})

const truncate = (text, startChar, endChar, maxLength) =>{
  if(text.length > maxLength){
    let start = text.substring(0,startChar)
    let end = text.substring((text.length-endChar), text.length)

    while((start.length +  end.length) < maxLength){
      start = start + "."
    }

    return start + end
  }
}

const daysRemainig  = (days) =>{
  const todaysDate = moment()
  days = Number((days + '000').slice(0))
  days = moment(days).format('YYYY-MM-DD')
  days = days.diff(todaysDate,'days')
  return days == 1 ?"1 day":days + "Days" 
}

export {
  truncate,
  setGlobalState,
  getGlobalState,
  useGlobalState,
  daysRemainig
}