import React from "react"

const Registro = () => {

  return (


    <div className="container">
      <form className="mt-4">

        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-3 col-form-label">Nombres</label>
          <div className="col-sm-9">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Usuario</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Contraseña</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Correo Electrónico</label>
        
          <div className="col-sm-9">
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 ">
            <button type="submit" className="btn btn-primary">Crear</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Registro