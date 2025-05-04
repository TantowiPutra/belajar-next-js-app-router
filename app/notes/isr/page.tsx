import Link from "next/link"

type ListNotes = {
    id: string
    title: string
    description: string
    deleted_at: string
    created_at: string
    updated_at: string
}
  
type Notes = {
    success: boolean
    message: string
    data: ListNotes[]
}

export const revalidate = 3

export default async function Page() {
    const notes: Notes = await fetch(`https://service.pace11.my.id/api/notes`, {
                                    next: { revalidate: 3}
                               })
                               .then((res) => res.json())

    return (
        <main>
            <ul>
            {
                notes.data.map((element: ListNotes) => (
                    <li key={element.id} style={{
                        border: '1px solid black',
                        marginBottom: '10px',
                        padding: '8px',
                      }}>
                      <Link href={`/notes/isr/${element.id}`}>
                            {element.title}
                        </Link>
                    </li>
                )) || []
            }
            </ul>
        </main>
    )
}