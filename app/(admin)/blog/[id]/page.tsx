'use client' 

// SERVER COMPONENT
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

// export default async function Blog({ params } : {params : Promise <{ id: string }>}) {
//     const id = (await params).id;

//     return (
//         <div>
//             Blog Detail Page {id}
//         </div>
//     );
// }

// CLIENT COMPONENT
// export default function Blog() {
//     const params = useParams();

//     return (
//         <div>
//             Blog Detail Page {params.id}
//         </div>
//     );
// }

export default function Blog() {
    const params = useParams();
    const searchParams = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());

    return (
        <div>
            Blog Detail Page {`dynamic routes: ${params.id}, query param: ${query.nama}, age: ${query.age}`}
        </div>
    );
}
