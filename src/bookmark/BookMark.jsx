import { useState } from "react";
import NotFound from "../NotFound";
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
  const [bookmarks, setBookmarks] = useState([defaultBookMark]);
  const [searchQuery, setSearchQuery] = useState("");

  const displayBookmarks = bookmarks.filter((bookmark) => {
    const query = searchQuery.toLowerCase();
    return (
      bookmark.category.toLowerCase().includes(query) ||
      bookmark.url.toLowerCase().includes(query) ||
      bookmark.user.toLowerCase().includes(query)
    );
  });

  console.log(displayBookmarks);

  function handleAddBookmark(bookmark) {
    // console.log(bookmark);
    setBookmarks((prev) => [...prev, bookmark]);
  }
  return (
    <div>
      <BookMarkForm onAdd={handleAddBookmark} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchBookMark value={searchQuery} onChange={setSearchQuery} />
          {bookmarks.length > 0 ? (
            <BookMarkGrid bookmarks={displayBookmarks} />
          ) : (
            <NotFound />
          )}
        </div>
      </main>
    </div>
  );
}

export default BookMark;
