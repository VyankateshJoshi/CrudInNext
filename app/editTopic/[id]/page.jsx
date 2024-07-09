import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store'
    })
    if (!resp.ok) {
      throw new Error("Failed to fetch topic")
    }
    return resp.json();
  }
  catch (e) {
    console.log(e)
  }
}

async function AddTopic({ params }) {
  const { id } = params;
const {topic} =   await getTopicById(id)
const {title,description} = topic 
  return (
    <EditTopicForm id={id} title={title}  description={description}></EditTopicForm>
  )
}

export default AddTopic
