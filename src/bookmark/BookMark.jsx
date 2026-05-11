import { useState } from "react";
import BookMarkForm from "./BookMarkForm";
import BookMarkGrid from "./BookMarkGrid";
import SearchBookMark from "./SearchBookMark";

const defaultBookMark = {
  id: crypto.randomUUID(),
  url: "https://www.pinterest.com/",
  favColor: "#EE4B2B",
  category: "Design",
  user: "tokiosman",
  pass: "123456",
};

function BookMark() {
  const [bookMarks, setBookMarks] = useState([defaultBookMark]);
  function handleAddBookmark(bookmark) {
    console.log(bookmark);
    setBookMarks((prev)=> [...prev, bookmark]);
  }
  return (
    <div>
      <BookMarkForm onAdd={handleAddBookmark} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchBookMark />
          <BookMarkGrid bookmarks={bookMarks} />
        </div>
      </main>
    </div>
  );
}

export default BookMark;
