import {  useNavigate } from "react-router-dom";
import {  Label } from "reactstrap"
import './login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CarritoContext } from "../context/CartContext";


const Formulario = () => {

const {setUser, setCorreo} = useContext(UserContext)
const {cargando, setCargando} = useContext(CarritoContext);
    const navigate = useNavigate();

    const cambiarEstado = () => {
        setCargando(true);
        setTimeout(()=>{
            setCargando(false);
        },5000);
      }

    return (<>
        <Formik
            initialValues={{
                nombre: '',
                email: '',
            }}

            validate={(valores) => {

                let errores = {};

                if (!valores.nombre) {
                    errores.nombre = 'Ingresa un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'Nombre solo puede contener letras y espacios'
                }

                if (!valores.email) {
                    errores.email = 'Ingresa un correo'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                    errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                }

                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
                resetForm();
                setUser(valores.nombre)
                setCorreo(valores.email)
                navigate('/tienda');
                cambiarEstado()
                

            }}>

            {({ values, errors, handleChange, handleBlur }) => (

                <Form className="formularioIngreso">

                    <h1 className="h1Login">¡Bienvenido!</h1>
                    <h4 className="h4Login">Ingrese sus datos para continuar</h4>

                    <Label htmlFor="nombre">Nombre y Apellido</Label>
                    <Field
                        className="input1"
                        type="text"
                        onChange={handleChange}
                        name="nombre"
                        value={values.nombre}
                        onBlur={handleBlur}
                        placeholder="Nombre completo"
                    />

                    <ErrorMessage name="nombre" component={() => (
                        <div className="error">{errors.nombre}</div>
                    )} />

                    <Label htmlFor="nombre">Correo electronico</Label>

                    <Field
                        className="input1"
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        placeholder="correo@correo.com"
                    />
                    <ErrorMessage name="email" component={() => (
                        <div className="error">{errors.email}</div>
                    )} />

                    <div>
                        
                            <button className="botonSubmit"type="submit">
                                Iniciar Pedido
                            </button>

                    </div>
                </Form >
            )}

        </Formik>

    </>)
}

export default Formulario


