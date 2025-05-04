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

type DetailNotes = {
    success: boolean
    message: string
    data: ListNotes
}
  
export const revalidate = 3

export const dynamicParams = true 

export async function generateStaticParams() {
    const notes: Notes = await fetch(
        'https://service.pace11.my.id/api/notes',
    ).then((res) => res.json())

    return notes.data.map((note: ListNotes) => ({
        id: String(note.id),
    }))
}
  
export default async function Page({
        params,
    }: {
        params: Promise<{ id: string }>
    }) {
        const id = (await params).id
        const notes: DetailNotes = await fetch(
        `https://service.pace11.my.id/api/note/${id}`,
    ).then((res) => res.json())

    return (
        <main>
        <h1>{notes.data.title}</h1>
        <p>{notes.data.description}</p>
        </main>
    )
}