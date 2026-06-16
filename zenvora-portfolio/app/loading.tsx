export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">

      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-muted" />

        <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-emerald-500" />
      </div>

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Prince Sharma
        </h2>

        <p className="mt-2 text-muted-foreground">
          Preparing your experience...
        </p>

      </div>

    </div>
  );
}