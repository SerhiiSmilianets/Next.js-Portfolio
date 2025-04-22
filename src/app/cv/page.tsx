'use client';

export default function CVPage() {
  const handleGenerate = async () => {
    const res = await fetch('/api/generate-cv');
    const data = await res.json();
    console.log('CV Generation Response:', data);
    if (data?.url) {
      window.open(data.url, '_blank');
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate / View CV
      </button>
    </div>
  );
}
