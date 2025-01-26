export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind CSS is Working! 🚀
        </h1>
        <p className="text-gray-700 mt-4">
          If you see this styled properly, your Tailwind CSS setup is good to go.
        </p>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">Card 1</h2>
            <p className="text-gray-600">
              This is a sample card with basic styles.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">Card 2</h2>
            <p className="text-gray-600">
              Tailwind makes creating layouts super easy.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">Card 3</h2>
            <p className="text-gray-600">
              Test how responsive styles look on your app!
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-8">
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
          Test Button
        </button>
      </footer>
    </div>
  );
}
