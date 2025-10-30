import axios from "axios";

// O servidor backend local provavelmente usa HTTP, não HTTPS.
// Colocamos um timeout razoável para detectar falhas de conexão rapidamente.
// Configuração da instância do Axios para comunicação com a API
const api = axios.create ({
    baseURL: "http://localhost:3000", // URL BASE DA API (HTTP para desenvolvimento local)
    timeout: 5000,
});

export default api;