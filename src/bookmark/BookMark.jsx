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
  createdAt: Date.now(),
};

function BookMark() {
  const [bookmarks, setBookmarks] = useState([defaultBookMark]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const displayBookmarks = bookmarks
    .filter((bookmark) => {
      const query = searchQuery.toLowerCase();
      return (
        bookmark.category.toLowerCase().includes(query) ||
        bookmark.url.toLowerCase().includes(query) ||
        bookmark.user.toLowerCase().includes(query)
      );
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.createdAt - b.createdAt
        : b.createdAt - a.createdAt,
    );

  console.log(displayBookmarks);

  function handleAddBookmark(bookmark) {
    // console.log(bookmark);
    setBookmarks((prev) => [...prev, { ...bookmark, createdAt: Date.now() }]);
  }
  return (
    <div>
      <BookMarkForm onAdd={handleAddBookmark} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchBookMark
            value={searchQuery}
            onChange={setSearchQuery}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
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
