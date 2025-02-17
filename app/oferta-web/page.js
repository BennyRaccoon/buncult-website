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
            <li><span className="icon">✔</span> Dominio y Correos</li>
          </ul>
          <a href="#" className="btn">Elegir Plan</a>
        </div>

        <div className="plan">
          <h2>Crecimiento</h2>
          <div className="price">$2,500 MXN / mes</div>
          <ul className="features">
            <li><span className="icon">✔</span> Todo lo de <strong>Esencial</strong></li>
            <li><span className="icon">✔</span> 2h de Soporte y Consultoría</li>
            <li><span className="icon">✔</span> Reporte Mensual de Analíticas</li>
            <li><span className="icon">🎁</span> Pago Anual: 1 Mes Gratis</li>
          </ul>
          <a href="#" className="btn">Elegir Plan</a>
        </div>

        <div className="plan elite">
          <h2>Élite</h2>
          <div className="price">$4,000 MXN / mes</div>
          <ul className="features">
            <li><span className="icon">✔</span> Todo lo de <strong>Crecimiento</strong></li>
            <li><span className="icon">✔</span> 4h de Soporte y Desarrollo</li>
            <li><span className="icon">✔</span> Reporte de Analíticas + Sugerencias de Crecimiento</li>
            <li><span className="icon">🎨</span> <strong>Incluye Sitio Web (hasta 5 páginas)</strong></li>
            <li><span className="icon">🎁</span> Pago Anual: 2 Meses Gratis</li>
            <li className="ecommerce-add"><span className="icon">🛒</span> ¿Necesitas E-commerce? +$5,000 MXN/mes por 6 meses</li>
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
          <td>Correos y Dominio</td>
          <td><span className="icon">✔</span> Incluido</td>
          <td><span className="icon">✔</span> Incluido</td>
          <td><span className="icon">✔</span> Incluido</td>
        </tr>
        <tr>
          <td>Tiempo de trabajo adicional</td>
          <td><span className="icon">✖</span> No incluido</td>
          <td><span className="icon">✔</span> 2h Soporte y Consultoría</td>
          <td><span className="icon">✔</span> 4h Soporte, Consultoría, Desarrollo y Diseño</td>
        </tr>
        <tr>
          <td>Reportes de Analíticas</td>
          <td><span className="icon">✖</span> No incluido</td>
          <td><span className="icon">✔</span> Reporte mensual</td>
          <td><span className="icon">✔</span> Reporte + Sugerencias de Crecimiento</td>
        </tr>
        <tr>
          <td>Sitio Web Incluido</td>
          <td><span className="icon">✖</span> No incluido</td>
          <td><span className="icon">✖</span> No incluido</td>
          <td><span className="icon">✔</span> Sitio web profesional (hasta 5 páginas)</td>
        </tr>
        <tr>
          <td>Beneficios de Pago Anual</td>
          <td><span className="icon">✖</span> No disponible</td>
          <td><span className="icon">🎁</span> 1 mes gratis</td>
          <td><span className="icon">🎁</span> 2 meses gratis</td>
        </tr>
        <tr>
          <td>Add-on de E-commerce</td>
          <td><span className="icon">✖</span> No disponible</td>
          <td><span className="icon">✖</span> No disponible</td>
          <td><span className="icon">🛒</span> +$5,000 MXN/mes por 6 meses</td>
        </tr>
      </table>
    </main>
  )
}
