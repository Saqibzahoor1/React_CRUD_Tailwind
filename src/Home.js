import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  const [users ,setAllusers]=useState([]);
  useEffect(()=>{
loadusers()
  },[])
  const loadusers =async()=>{
    const user= await fetch('http://localhost:3003/users');
    const result=await user.json();
    setAllusers(result);

  }
  return (
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Username
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
            users.map((item,index)=>{
return(
  <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <td class="px-6 py-4">{item.id}</td>
    <td class="px-6 py-4">{item.name}</td>
    <td class="px-6 py-4">{item.username}</td>
    <td class="px-6 py-4">{item.email}</td>
    <td class="px-6 py-4">{item.phone}</td>
    <td class="px-6 py-4"><Link to={`/edituser ${item.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-2">Edit</Link><Link to="#" class="font-medium text-green-600 dark:text-blue-500 hover:underline px-2">view</Link>
    <Link to="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</Link></td>
  </tr>
)

            })
          }
            {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>

  )
}

export default Home
