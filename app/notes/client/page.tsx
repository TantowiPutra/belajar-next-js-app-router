'use client'

import { useEffect, useState } from "react";

type Note = {
    id: number
    title: string
    description: string
    created_at: string
    updated_at: string
}

export default function Notes() {
    const [data, setData] = useState<Note[]>([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://service.pace11.my.id/api/notes')
            .then((res) => res.json())
            .then((response) => {
                setData(response.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ul>
            {
                data.map((element) => (
                    <li key={element.id}>{element.title}</li>
                )) || []
            }
        </ul>
    )
}
