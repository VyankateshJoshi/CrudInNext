
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"
const getTopics = async () => {
    try {
        const resp = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store"
        })
        if (!resp.ok) {
            throw new Error('faild to fetch');
        }
        return resp.json();
    }
    catch (e) {
        console.log(e)
    }
}
async function TopicsList() {
    const { topics } = await getTopics();
    console.log(topics)
    return (
        <>
        {topics.map((t)=>(<div>
            <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                <div>
                    <h2 className='font-bold text-2xl'>{t.title}</h2>
                    <div>{t.description}</div>
                </div>
                <div className='flex gap-2'>
                    <RemoveBtn id={t._id} />
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24}></HiPencilAlt>
                    </Link>
                </div>
            </div>
        </div>))}
            
        </>
    )
}

export default TopicsList
