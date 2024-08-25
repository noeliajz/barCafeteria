import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const {register, handleSubmit, formState: {errors}, reset}=useForm()
  const navegacion = useNavigate();

  const onSubmit = (usuario)=>{
    console.log(usuario)
    reset()
  }
  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {
                  ...register('email',{
                    required:'el email es obligatorio',
                    pattern:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:'el email debe ser obligatorio'

                  })
                }
                
              

              />
                <Form.Text className="text-danger">
                  {
                    errors.email?.message
                  }
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password"  placeholder="Ingrese una contraseña"
              {
                ...register('password',{
                  required:'la contraseña es obligatorio',
                  pattern:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                  message:'El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.'

                })
              }
               />
              <Form.Text className="text-danger">
               {errors.password?.message}
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" />
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
