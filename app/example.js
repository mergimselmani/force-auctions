'use client'
 
import { useEffect } from 'react'
 
export default function Example() {
  useEffect(() => {
    console.log('in useEffect')
  })
  return <p>Hello world</p>
}
