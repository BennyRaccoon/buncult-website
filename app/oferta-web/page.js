import "./styles.css"; // Import CSS file

export default function Page() {
  return (
    <main>
    
      <h1>Elige Tu Plan</h1>
      <div className="container">
        <div className="plan">
          <h2>Esencial</h2>
          <div className="price">$1,250 MXN/mes</div>
          <div className="priceYear">$15,000 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor y Correos</li>
            <li><span className="icon">✔</span> Horas extra: $2,000 MXN/mes</li>
            <li><span className="icon">💡</span> Todos nuestros planes incluyen infraestructura optimizada y hosting confiable, sin costos ocultos ni preocupaciones técnicas.</li>
          </ul>
        </div>

        <div className="plan">
          <h2>Crecimiento</h2>
          <div className="price">$2,500 MXN/mes</div>
          <div className="priceYear"><del>$30,000</del> $27,500 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor y Correos</li>
            <li><span className="icon">✔</span> 2h gratis al mes de Soporte o Consultoría</li>
            <li><span className="icon">✔</span> Horas extra: $1,500 MXN/mes</li>
            <li><span className="icon">✔</span> Reporte Mensual de Analíticas</li>
            <li><span className="icon">🎁</span> Pago Anual: 1 Mes Gratis</li>
          </ul>
        </div>

        <div className="plan elite">
          <h2>Élite</h2>
          <div className="price">$4,000 MXN/mes</div>
          <div className="priceYear"><del>$48,000</del> $40,000 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor, Correos y Analytics</li>
            <li><span className="icon">✔</span> 4h gratis de Soporte, Consultaria, Diseño o Desarrollo</li>
            <li><span className="icon">✔</span> Horas extra: $1,000 MXN / mes</li>
            <li><span className="icon">✔</span> Reporte mensual de Analíticas + Sugerencias de Crecimiento</li>
            <li><span className="icon">🎨</span> <strong>Horas gratis pueden usarse para el desarrollo web (hasta 5 páginas)</strong></li>
            <li><span className="icon">🎁</span> Pago Anual: 2 Meses Gratis</li>
            <li className="ecommerce-add"><span className="icon">🛒</span> ¿Necesitas E-commerce? +$5,000 MXN/mes por 6 meses</li>
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
          <th>Correos y Dominio</th>
          <td>Incluido</td>
          <td>Incluido</td>
          <td>Incluido</td>
        </tr>
        <tr>
          <th>Tiempo de trabajo adicional</th>
          <td><span className="red">✖</span></td>
          <td> 2h Soporte o Consultoría</td>
          <td> 4h Soporte, Consultoría, Desarrollo o Diseño</td>
        </tr>
        <tr>
          <th>Reportes de Analíticas</th>
          <td><span className="red">✖</span></td>
          <td>Reporte mensual</td>
          <td>Reporte + Sugerencias de Crecimiento</td>
        </tr>
        <tr>
          <th>Desarrollo web</th>
          <td><span className="red">✖</span></td>
          <td><span className="red">✖</span></td>
          <td>Desarrollo web incluido con las horas gratis (hasta 5 páginas)</td>
        </tr>
        <tr>
          <th>Beneficios de Pago Anual</th>
          <td><span className="red">✖</span></td>
          <td><span className="icon">🎁</span> 1 mes gratis</td>
          <td><span className="icon">🎁</span> 2 meses gratis</td>
        </tr>
        <tr>
          <th>Add-on de E-commerce</th>
          <td><span className="red">✖</span></td>
          <td><span className="red">✖</span></td>
          <td><span className="icon">🛒</span> +$5,000 MXN/mes por 6 meses</td>
        </tr>
      </table>
    </main>
  )
}
