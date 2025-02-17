export default function Page() {
  return (
    <main>
      <h1>Elige Tu Plan</h1>
      <div className="container">
          <div className="plan">
              <h2>Esencial</h2>
              <div className="price">$1,000 MXN / mes</div>
              <ul className="features">
                  <li>✔ Dominio y Correos</li>
                  <li>✖ Sin Soporte Incluido</li>
                  <li>✖ Sin Reporte de Analíticas</li>
                  <li>✖ Sin Diseño/Desarrollo Web</li>
                  <li>⚡ Desarrollo Extra: $2,000 MXN/h</li>
              </ul>
              <a href="#" className="btn">Elegir Plan</a>
          </div>
          
          <div className="plan">
              <h2>Crecimiento</h2>
              <div className="price">$2,500 MXN / mes</div>
              <ul className="features">
                  <li>✔ Dominio y Correos</li>
                  <li>✔ 2h de Soporte y Consultoría</li>
                  <li>✔ Reporte Mensual de Analíticas</li>
                  <li>✖ Sin Diseño/Desarrollo Web</li>
                  <li>⚡ Desarrollo Extra: $1,600 MXN/h</li>
                  <li>🎁 Pago Anual: 1 Mes Gratis</li>
              </ul>
              <a href="#" className="btn">Elegir Plan</a>
          </div>
          
          <div className="plan elite">
              <h2>Élite</h2>
              <div className="price">$4,000 MXN / mes</div>
              <ul className="features">
                  <li>✔ Dominio y Correos</li>
                  <li>✔ 4h de Soporte y Desarrollo</li>
                  <li>✔ Reporte de Analíticas + Sugerencias de Crecimiento</li>
                  <li>🎨 <strong>Incluye Sitio Web (hasta 5 páginas)</strong></li>
                  <li>⚡ Desarrollo Extra: $1,200 MXN/h</li>
                  <li>🎁 Pago Anual: 2 Meses Gratis</li>
                  <li className="ecommerce-add">🛒 ¿Necesitas E-commerce? +$5,000 MXN/mes por 6 meses</li>
              </ul>
              <a href="#" className="btn">Elegir Plan</a>
          </div>
      </div>
  
      <h2>Comparación de Planes</h2>
      <table className="comparison-table">
          <tr>
              <th>Característica</th>
              <th>Esencial</th>
              <th>Crecimiento</th>
              <th className="highlight">Élite</th>
          </tr>
          <tr>
              <td>Dominio y Correos</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
          </tr>
          <tr>
              <td>Soporte y Consultoría</td>
              <td>✖</td>
              <td>2h/mes</td>
              <td>4h/mes</td>
          </tr>
          <tr>
              <td>Reporte de Analíticas</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔ + Sugerencias de Crecimiento</td>
          </tr>
          <tr>
              <td>Sitio Web Incluido</td>
              <td>✖</td>
              <td>✖</td>
              <td>✔ (Hasta 5 páginas)</td>
          </tr>
          <tr>
              <td>Add-on de E-commerce</td>
              <td>✖</td>
              <td>✖</td>
              <td>+ $5,000 MXN/mes (6 meses)</td>
          </tr>
      </table>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }
        .container {
            max-width: 900px;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .plan {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 280px;
            text-align: center;
        }
        .plan h2 {
            margin: 0;
            padding: 10px 0;
        }
        .price {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 10px 0;
        }
        .features {
            list-style: none;
            padding: 0;
        }
        .features li {
            padding: 8px 0;
        }
        .btn {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            text-decoration: none;
            background: #007BFF;
            color: white;
            border-radius: 5px;
            font-weight: bold;
        }
        .elite {
            background: #004085;
            color: white;
        }
        .elite .btn {
            background: #ffcc00;
            color: #000;
        }
        .ecommerce-add {
            font-size: 14px;
            margin-top: 10px;
            color: #f8d210;
        }
        .comparison-table {
            width: 90%;
            max-width: 900px;
            margin: 40px auto;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .comparison-table th, .comparison-table td {
            padding: 15px;
            border: 1px solid #ddd;
            text-align: center;
        }
        .comparison-table th {
            background: #007BFF;
            color: white;
        }
        .highlight {
            background: #ffcc00;
            font-weight: bold;
        }
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
    </main>
  )
}
