import { useEffect, useState } from "react";
import "./App.css";

const GATEWAY_URL = "https://gateway-service-423624249820.europe-west1.run.app"; // <- BURAYI DEĞİŞTİR

export default function App() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const usersRes = await fetch(`${GATEWAY_URL}/users`);
      const ordersRes = await fetch(`${GATEWAY_URL}/orders`);

      if (!usersRes.ok || !ordersRes.ok) {
        throw new Error("API isteği başarısız");
      }

      const usersData = await usersRes.json();
      const ordersData = await ordersRes.json();

      setUsers(usersData);
      setOrders([ordersData]); // orders tek obje dönüyorsa diziye sarıyoruz
    } catch {
      setError("Veriler alınamadı. Gateway URL'i kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Microservices Demo</h1>
      <p>
        React frontend → API Gateway → Microservices (Cloud Run)
      </p>

      <button onClick={fetchData} disabled={loading}>
        {loading ? "Yükleniyor..." : "Verileri Yenile"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <hr />

      <h2>Kullanıcılar</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            #{u.id} - {u.name}
          </li>
        ))}
      </ul>

      <h2>Siparişler</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.orderId}>
            #{o.orderId} - {o.product} ({o.user?.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
