import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row text-start">
         
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Nosotros</h6>
            <ul className="list-unstyled small">
              <li>¿Quiénes somos?</li>
              <li>Trabaja con nosotros</li>
              <li>Credicorp</li>
              <li>Estados financieros</li>
              <li>Términos y condiciones</li>
              <li>Política general de habitualidad</li>
              <li>Bases legales</li>
              <li>Portabilidad</li>
              <li>Línea Ética</li>
              <li>Cumplimiento Ley 21.234</li>
              <li>Código de Ética Proveedores</li>
              <li>Información uso adecuado Tarjeta de Crédito</li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Productos</h6>
            <ul className="list-unstyled small">
              <li>Cuenta Remunerada</li>
              <li>Tarjeta de Crédito</li>
              <li>Tarifas Tarjeta de Crédito</li>
              <li>Tarjeta Prepago</li>
              <li>Transferencias</li>
              <li>Gestiona tus finanzas</li>
              <li>Transferir al exterior</li>
              <li>Tenpo inversiones</li>
              <li>Pago de cuentas</li>
              <li>Recargas</li>
              <li>Seguro auto contenido</li>
              <li>Seguro de vida</li>
            </ul>
          </div>

          
          <div className="col-12 col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Seguridad</h6>
            <ul className="list-unstyled small">
              <li>Seguridad</li>
              <li>Ciberseguridad</li>
              <li>Registro de emisores de la CMF</li>
            </ul>
          </div>

         
          <div className="col-12 col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Contáctanos</h6>
            <ul className="list-unstyled small">
              <li>Centro de ayuda</li>
              <li>Emergencias</li>
              <li>
                <strong>Llámanos al 600 006 1110</strong>
              </li>
              <li>Alianza con Tenpo</li>
            </ul>
          </div>

          
          <div className="col-12 col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Descarga</h6>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width="200"
              className="img-fluid mb-2 pe-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store"
              width="200"
              className="img-fluid mb-2 pe-2"
            />
          </div>

          <hr className="border-secondary mt-4" />

          
          <div className="row text-center text-md-start">
            <div className="col-12 mb-3 d-flex flex-column align-items-center align-items-md-start">
              <img
                src="/assets/img/Logotipo.svg"
                alt="Tenpo"
                style={{ height: "32px" }}
                className="mb-2"
              />
              <span className="small">
                Con el respaldo de{" "}
                <img
                  src="https://cdn.prod.website-files.com/647f4d1c528358bdb9d8ef3e/64bb1d19e17c11a72e24211a_credicorp.svg"
                  alt="CREDICORP"
                  className="img-fluid ps-1"
                />
              </span>
            </div>

            <div className="col-12 d-flex justify-content-center justify-content-md-start gap-3 fs-5 mt-3">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-tiktok"></i>
              <i className="bi bi-threads"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
