import React from 'react'
import { Metadata } from 'next'

 export const metadata: Metadata ={
    title: "Test page",
    description: "welcome to test page"
 }
const layout = () => {
  return (
    <div>test layout</div>
  )
}

export default layout