import Link from "next/link"

export default function HomePage(){
    return(
        <>
        <h1>
            Tes
        </h1>
        <Link href='/profile'>
            Go to profile
        </Link>
        <br />
        <Link href='/'>
            go to first landing page
        </Link>
        </>
    )
}