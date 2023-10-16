'use client'

const getDataUsers = async()=>{
  const res = await fetch ('https://fakestoreapi.com/users');
  const getData = await res.json()

  console.log(getData)
  
  return (
   <p>p balap</p>
  )
}
export default getDataUsers