import React from 'react'

const Service = () => {
    return (
        <div>
           <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">Nos Services</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-people-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Des formateurs exprimentés</h3>
                <p className="text-muted mb-0">Nos Formateurs exprimentés dans le domaine professionnel</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-laptop fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Des formations de qualité</h3>
                <p className="text-muted mb-0">Nos Formation sont de qualité et certifiées.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Cadre convivial</h3>
                <p className="text-muted mb-0">Nous offrons une formation dans un cadre de travail convivial et chaleureux!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi bi-award-fill fs-1 text-primary" /></div>
                <h3 className="h4 mb-2">Prix bien étudiés</h3>
                <p className="text-muted mb-0">Nous vous proposons régulièrement des formations offertes avec des prix raisonnable</p>
              </div>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}

export default Service
