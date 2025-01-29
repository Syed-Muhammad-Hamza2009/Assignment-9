
interface Book {
    id: number
    type: string,
    name: string,
    available: boolean
}
export default async function SsrPage() {
    const url = "https://simple-books-api.glitch.me/books/"
    const response = await fetch(url)
    const data: Book[] = await response.json()

    return (
        <div className="flex justify-center items-center w-screen flex-wrap gap-10">
            {
                data.map((book: Book) => (
                    <div key={book.id} className="flex flex-col justify-center items-start pl-5 w-[300px] md:w-[400px] mb-10 bg-[#1B2232] h-[300px] rounded-lg shadow-white shadow-md gap-4 ">
                        <h1 className="text-3xl font-extrabold text-PrimaryPurple ">{book.name}</h1>
                        <p className="text-xl tracking-widest">type: {book.type}</p>
                        <p className={book.available ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>{book.available ? "Available" : "Not Available"}
                        </p>

                        <button className={`h-12 w-52 ${book.available ? "bg-green-500": "bg-red-500"    } flex justify-center items-center rounded-lg text-2xl`}>{book.available ? "Rent" : "Not Available"}</button>
                    </div>)
                )}

        </div>
    )
}
