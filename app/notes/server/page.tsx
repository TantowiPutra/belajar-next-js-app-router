type Note = {
    id: number
    title: string
    description: string
    created_at: string
    updated_at: string
}

async function getNotes() {
    const notes = await fetch('https://service.pace11.my.id/api/notes')
                        .then((res) => res.json());

    return notes;
}

export default async function Notes() {
    const notes = await getNotes();

    return (
        <>
            <ul>
                {
                    notes.data.map((element: Note) =>(
                        <li key={element.id}>{element.title}</li>
                    ))
                }
            </ul>
        </>
    )
}