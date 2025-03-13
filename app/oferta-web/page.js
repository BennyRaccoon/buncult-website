import "./styles.css"; // Import CSS file

export default function Page() {
  return (
    <main>
    
      <h1>Elige Tu Plan</h1>
      <div className="container">
        <div className="plan">
          <h2>Esencial</h2>
          <div className="price">$1,500 MXN/mes</div>
          <div className="priceYear">$18,000 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor y Correos</li>
            <li><span className="icon">✔</span> Horas extra: $2,000 MXN/hora</li>
            <li><span className="icon">💡</span> Todos nuestros planes incluyen infraestructura optimizada y hosting confiable, sin costos ocultos ni preocupaciones técnicas.</li>
          </ul>
        </div>

        <div className="plan">
          <h2>Crecimiento</h2>
          <div className="price">$3,000 MXN/mes</div>
          <div className="priceYear"><del>$36,000</del> $33,000 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor y Correos</li>
            <li><span className="icon">✔</span> 4h gratis al mes de Soporte, Consultoría y pequeños cambions</li>
            <li><span className="icon">✔</span> Horas extra: $1,500 MXN/hora</li>
            <li><span className="icon">✔</span> Reporte Mensual de Analíticas</li>
            <li><span className="icon">🎁</span> Pago Anual: 1 Mes Gratis</li>
          </ul>
        </div>

        <div className="plan elite">
          <h2>Élite</h2>
          <div className="price">$5,000 MXN/mes</div>
          <div className="priceYear"><del>$60,000</del> $50,000 MXN/año</div>
          <ul className="features">
            <li><span className="icon">✔</span> Dominio, Servidor, Correos y Analytics</li>
            <li><span className="icon">✔</span> 8h gratis al mes de Soporte, Consultoria, Diseño o Desarrollo</li>
            <li><span className="icon">✔</span> Horas extra: $1,000 MXN/hora</li>
            <li><span className="icon">✔</span> Reporte mensual de Analíticas</li>
            <li><span className="icon">✔</span> Reporte mensual de sugerencias de crecimiento </li>
            <li><span className="icon">✔</span> Integracion con Google Search Console </li>
            <li><span className="icon">✔</span> Integracion con Google Analytics </li>
            <li><span className="icon">✔</span> Ayuda con diseño ajeno a la web (como en redes sociales) </li>
            <li><span className="icon">🎨</span> <strong>Horas gratis pueden usarse para el desarrollo web o diseño</strong></li>
            <li><span className="icon">🎁</span> Pago Anual: 2 Meses Gratis</li>
            <li className="ecommerce-add"><span className="icon">🛒</span> ¿Necesitas E-commerce? +$5,000 MXN/mes por 6 meses</li>
          </ul>
        </div>
      </div>

      <h2>Comparación de Planes</h2>
      <div className="table-container">
        <table className="comparison-table">
          <tr>
            <th>Característica</th>
            <th>Esencial</th>
            <th>Crecimiento</th>
            <th className="highlight">Élite</th>
          </tr>
          <tr>
            <th>Dominio, Servidor y Correos</th>
            <td>Incluido</td>
            <td>Incluido</td>
            <td>Incluido</td>
          </tr>
          <tr>
            <th>Tiempo de trabajo incluido</th>
            <td><span className="red">✖</span></td>
            <td> 4h mensuales de Soporte o Consultoría</td>
            <td> 8h mensuales de Soporte, Consultoría, Desarrollo o Diseño</td>
          </tr>
          <tr>
            <th>Coste de la hora extra</th>
            <td>$2,000 MXN/hora</td>
            <td>$1,500 MXN/hora</td>
            <td>$1,000 MXN/hora</td>
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
            <td>Desarrollo web incluido con las horas gratis</td>
          </tr>
          <tr>
            <th>Diseño ajeno a la web web</th>
            <td><span className="red">✖</span></td>
            <td><span className="red">✖</span></td>
            <td>Diseño incluido con las horas gratis</td>
          </tr>
          <tr>
            <th>Integracion con Google Search Console</th>
            <td><span className="red">✖</span></td>
            <td><span className="red">✖</span></td>
            <td>Incluido</td>
          </tr>
          <tr>
            <th>Integracion con Google Analytics</th>
            <td><span className="red">✖</span></td>
            <td><span className="red">✖</span></td>
            <td>Incluido</td>
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
      </div>
    </main>
  )
}
