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
    </main>
  )
}
