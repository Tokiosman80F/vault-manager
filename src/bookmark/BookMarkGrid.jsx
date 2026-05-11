function BookMarkGrid({ bookmarks }) {
  function getWebsiteInfo(url) {
    const hostname = new URL(url).hostname;
    //remove www.
    const cleanHost = hostname.replace("www.", "");

    const domain = cleanHost;
    const name = cleanHost.split(".")[0];
    const shortName = name.slice(0, 2);
    return { domain, name, shortName };
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Card 1 - Facebook  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
              Fb
            </div>
            <div>
              <h3 className="text-lg font-semibold">Facebook</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Social
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">facebook.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">john.doe@email.com</dd>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Password
            </dt>
            <dd className="flex items-center gap-2 text-neutral-50">
              <span>••••••••</span>
              <button className="text-xs font-semibold text-blue-400">
                Reveal
              </button>
            </dd>
          </div>
        </dl>
      </article>
      {bookmarks.map((bookmark) => {
        const { domain, name, shortName } = getWebsiteInfo(bookmark.url);

        return (
          <article
            key={bookmark.id}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
                  {shortName}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    {bookmark.category}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">{domain}</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-neutral-500">
                  Username
                </dt>
                <dd className="text-neutral-50">{bookmark.user}</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-neutral-500">
                  Password
                </dt>
                <dd className="flex items-center gap-2 text-neutral-50">
                  <span>{bookmark.pass}</span>
                  <button className="text-xs font-semibold text-blue-400">
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>
        );
      })}
    </div>
  );
}

export default BookMarkGrid;
