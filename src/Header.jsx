function getGreeting(hours) {
  if (hours < 12) return "Good Morning";
  if (hours < 18) return "Good Afternoon";
  if (hours < 21) return "Good Evening";
  else return "Good Night";
}

function getFormattedDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function Header() {
  const now = new Date();
  const formattedDate = getFormattedDate(now);
  const greeting = getGreeting(now.getHours());

  return (
    <header className="border-b border-neutral-800 bg-linear-to-b from-neutral-950 via-neutral-900/80 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Vault overview
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <h1 className="text-4xl font-semibold tracking-tight">
              {greeting}, World!
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/70 px-4 py-1 text-xs font-medium text-neutral-300">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
              {formattedDate}
            </span>
          </div>
          <p className="text-sm text-neutral-400 max-w-2xl">
            Keep your most-used credentials organised and in sync with every
            device. Review the snapshot below before adding a new bookmark.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
