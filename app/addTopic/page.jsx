"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
function AddTopic() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description) {
            alert("Title and Description are required ")
            return
        }
        try {
            const resp = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),
            })
            if(resp.ok){
                setTimeout(() => {
                    router.push('/');
                }, 1000);
               
            }
            else{
                throw new Error("error")
            }
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2" type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Topic Title"
            />
            <input className="border border-slate-500 px-8 py-2" type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Topic Description"
            />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit " type="submit">
                Add Topic
            </button>
        </form>
    )
}

export default AddTopic
