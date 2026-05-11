import BookMarkForm from "./BookMarkForm";
import BookMarkGrid from "./BookMarkGrid";
import SearchBookMark from "./SearchBookMark";

function BookMark() {
  function handleAddBookmark(bookmark) {
    console.log(bookmark);
  }
  return (
    <div>
      <BookMarkForm onAdd={handleAddBookmark} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          <SearchBookMark />
          <BookMarkGrid />
        </div>
      </main>
    </div>
  );
}

export default BookMark;
