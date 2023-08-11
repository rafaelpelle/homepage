export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl uppercase mb-2">Sorry!</h1>
      <h1 className="text-3xl mb-10">Page not found</h1>
      <a href="/" className="btn btn-primary">
        GO BACK TO HOME
      </a>
    </div>
  );
}
