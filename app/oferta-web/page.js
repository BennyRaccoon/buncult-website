import "./styles.css"; // Import CSS file

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
    </main>
  )
}
