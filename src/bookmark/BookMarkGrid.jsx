function BookMarkGrid() {
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

      {/* Card 2 - YouTube  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-500/10 text-sm font-semibold uppercase text-red-400">
              Yt
            </div>
            <div>
              <h3 className="text-lg font-semibold">YouTube</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Video
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">youtube.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">myaccount</dd>
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

      {/* Card 3 - Dribbble  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-pink-500/10 text-sm font-semibold uppercase text-pink-300">
              Db
            </div>
            <div>
              <h3 className="text-lg font-semibold">Dribbble</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Design
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">dribbble.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">designer_pro</dd>
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
      {/* 
 Card 4 - Twitch  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-purple-500/10 text-sm font-semibold uppercase text-purple-300">
              Tw
            </div>
            <div>
              <h3 className="text-lg font-semibold">Twitch</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Streaming
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">twitch.tv</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">streamer_123</dd>
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
      {/* 
 Card 5 - GitHub  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-500/10 text-sm font-semibold uppercase text-neutral-300">
              Gh
            </div>
            <div>
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Productivity
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">github.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">devuser</dd>
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

      {/* Card 6 - Netflix  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-red-600/10 text-sm font-semibold uppercase text-red-400">
              Nx
            </div>
            <div>
              <h3 className="text-lg font-semibold">Netflix</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Entertainment
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">netflix.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">user@email.com</dd>
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
      {/* 
 Card 7 - Amazon  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-yellow-500/10 text-sm font-semibold uppercase text-yellow-400">
              Am
            </div>
            <div>
              <h3 className="text-lg font-semibold">Amazon</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Shopping
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">amazon.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">shopper@email.com</dd>
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

      {/* Card 8 - Spotify  */}
      <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-green-500/10 text-sm font-semibold uppercase text-green-400">
              Sp
            </div>
            <div>
              <h3 className="text-lg font-semibold">Spotify</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Music
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-400">spotify.com</p>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Username
            </dt>
            <dd className="text-neutral-50">musiclover</dd>
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
    </div>
  );
}

export default BookMarkGrid;
