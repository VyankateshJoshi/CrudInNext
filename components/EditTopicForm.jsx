"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription })
      })
      if(!resp.ok){
        throw new Error("Failed to edit")
      }
      else{
        setTimeout(() => {
          router.push('/')
        }, 500);
       
      }

    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input className="border border-slate-500 px-8 py-2" type="text"
        placeholder="Topic Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input className="border border-slate-500 px-8 py-2" type="text"
        placeholder="Topic Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit "
      type='submit'
      >
        Update Topic
      </button>
    </form>
  )
}

export default EditTopicForm
