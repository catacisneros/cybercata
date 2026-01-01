import './ResponsibleUse.css'

function ResponsibleUse() {
  const guidelines = [
    'No hackea cuentas',
    'No accede a información privada',
    'Usa fuentes públicas',
    'Respeta leyes y privacidad',
  ]

  return (
    <section className="responsible-use">
      <div className="container">
        <h2 className="section-title">Uso responsable</h2>
        <ul className="guidelines-list">
          {guidelines.map((guideline, index) => (
            <li key={index} className="guideline-item">
              {guideline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ResponsibleUse

