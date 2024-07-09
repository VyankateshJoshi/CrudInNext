"use client"
import React, { useReducer } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
function RemoveBtn({ id }) {
  const router = useRouter()
  const removeTopic = async () => {
    const Confirm = confirm("Are you sure");
    if (Confirm) {
      const resp = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (resp.ok) {
        router.refresh();
      }
    }
  }
  return (
    <button onClick={removeTopic} className='text-red-400'>
      <HiOutlineTrash size={24}></HiOutlineTrash>
    </button>
  )
}

export default RemoveBtn
