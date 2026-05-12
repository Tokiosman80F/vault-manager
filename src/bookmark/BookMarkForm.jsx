import { useState } from "react";

function BookMarkForm({ onAdd }) {
  const initialBookMark = {
    id: crypto.randomUUID(),
    url: "",
    favColor: "#3b82f6",
    category: "",
    user: "",
    pass: "",
  };
  const [formData, setFormData] = useState(initialBookMark);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function isValidUrl(string) {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  }

  function sanitizeUrl(url) {
    // step 1 :remove all whitespace anywhere in the string
    let cleaned = url.replace(/\s+/g, "");
    // step 2: if it has no protocol at all , add https://
    if (!/^https?:\/\//i.test(cleaned)) {
      cleaned = "https://" + cleaned;
    }
    return cleaned;
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (name === "url") {
      const cleaned = sanitizeUrl(value);
      setFormData((prev) => ({ ...prev, url: cleaned }));
    }
  }

  function validateBookmark(bookmark) {
    const newErrors = {};
    // URL
    if (!bookmark.url.trim()) {
      newErrors.url = "URL is required";
    } else if (!isValidUrl(bookmark.url)) {
      newErrors.url = "Enter a valid URL including http://";
    }
    //Category
    if (!bookmark.category || bookmark.category === "Select category") {
      newErrors.category = "Please select a category";
    }
    //User
    if (!bookmark.user.trim()) {
      newErrors.user = "Username is required";
    } else if (bookmark.user.trim().length < 3) {
      newErrors.user = "Username must be at least 3 character";
    }
    //Pass
    if (!bookmark.pass) {
      newErrors.pass = "Password is required";
    } else if (bookmark.pass.length < 6) {
      newErrors.pass = "Password must be atleast 6 character";
    }

    return newErrors;
  }

  function handleAdd(e) {
    e.preventDefault();

    const newErrors = validateBookmark(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onAdd(formData);
  }

  function handleReset(e) {
    e.preventDefault();
    setFormData({ ...initialBookMark, id: crypto.randomUUID() });
    setErrors({});
  }

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <form className="mb-10 rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            New bookmark
          </p>
          <h2 className="text-2xl font-semibold">
            Store website credentials safely
          </h2>
          <p className="text-sm text-neutral-400">
            Fill the details below. Your brand color helps us render a matching
            favicon.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Website URL
              </span>
              <input
                name="url"
                value={formData.url}
                onBlur={handleBlur}
                onChange={handleChange}
                type="url"
                placeholder="https://example.com"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Include https:// for best results.
              </span>
              {errors.url && <p className="text-red-400">{errors.url}</p>}
            </label>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Favicon color
                  </p>
                  <p className="text-xs text-neutral-500">
                    Select the accent color we should render.
                  </p>
                </div>
                <input
                  name="favColor"
                  value={formData.favColor}
                  onChange={handleChange}
                  type="color"
                  className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                  Hex
                </span>
                <span>Matches any brand primary color.</span>
              </div>
            </div>

            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Category
              </span>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-transparent text-base text-white outline-none"
              >
                <option className="bg-neutral-900 text-white">
                  Select category
                </option>
                <option className="bg-neutral-900 text-white">Social</option>
                <option className="bg-neutral-900 text-white">Video</option>
                <option className="bg-neutral-900 text-white">Design</option>
                <option className="bg-neutral-900 text-white">Streaming</option>
                <option className="bg-neutral-900 text-white">
                  Productivity
                </option>
                <option className="bg-neutral-900 text-white">
                  Entertainment
                </option>
                <option className="bg-neutral-900 text-white">Shopping</option>
                <option className="bg-neutral-900 text-white">Music</option>
              </select>
              <span className="text-xs text-neutral-500">
                Helps you filter quicker later.
              </span>
              {errors.category && (
                <p className="text-red-400">{errors.category}</p>
              )}
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Username
              </span>
              <input
                name="user"
                value={formData.user}
                onChange={handleChange}
                type="text"
                placeholder="Enter username"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Use workspace or personal handle.
              </span>
              {errors.user && <p className="text-red-400">{errors.user}</p>}
            </label>

            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Password
              </span>
              <input
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <span className="text-xs text-neutral-500">
                Choose at least 6 characters.
              </span>
              {errors.pass && <p className="text-red-400">{errors.pass}</p>}
            </label>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-500">
            By submitting you confirm the entry is safe to store.
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <button
              onClick={handleReset}
              className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
            >
              Clear
            </button>
            <button
              onClick={handleAdd}
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookMarkForm;
