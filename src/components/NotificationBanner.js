import { useState } from "react";

function NotificationBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-yellow-300 text-black px-4 py-2 text-sm flex justify-between items-center">
      <span>🎉 Diskon 20% untuk semua produk minggu ini!</span>
      <button onClick={() => setShow(false)} className="ml-4 text-lg font-bold">×</button>
    </div>
  );
}

export default NotificationBanner;
