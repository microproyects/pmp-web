"use client"
import styles from "./page.module.css";
import PCvs from "../components/PCVs/PCVs"
import Homes from "../components/Home/Home"
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.all}>
            <main className={styles.css}>
                <h1 className={styles.h1}><span className={styles.hovertext}>PMP</span></h1>
                <h2>¿Quienes somos?</h2>
                <section>
                    <p>Aplicaciones de estudio son producidos por PMP</p>
                    <Image
                        src="/Images/estudio.jpg"
                        alt="Imagen de aplicaciones de estudio"
                        width={30}
                        height={30}
                        priority
                    />
                </section>
                <div>
                    <Homes
                        src="/Images/estudio.jpg"
                        src2="/Images/estadistica.jpg"
                        alt="XD"
                        alt2="XD"
                        height={426}
                        height2={450}
                        width={640}
                        width2={450}
                        title="Aplicaciones de Estudio"
                        title2="Con que se elabora"
                        text="Son producidas por PMP (Papu Micro Proyects)"
                        text2="Elaboradas de forma sotfware"
                    />
                    <section>
                        <p>Permite a los clientes estructurar y gestionar tareas grupales,permitiendo cumpartir y acceder a tareas simultaneamente, logramos una compatibilidad en dispositivos y webs, el diseño no es complejo es un diseño simple y facil de usar ideal para clientes de todas las edades la proteccion de los datos y control de las salas son protegidas por ???????????????, las notificaciones permitiran a los clientes acordar sobre sus tareas pendientes y fechas limite.</p>
                    </section>
                    <section>
                        <p>El diseño puede ser personalizable las salas,colores y categorias.</p>
                    </section>
                    <section>
                        <p>La aplicacion crece mediante las necesidades de los usuarios sin afectar el rendimiento.</p>
                    </section>
                    <section>
                        <p>En fallos tecnicos hay asistencia rapida para resolver los problemas</p>
                    </section>
                    <section>
                        <p>La interfaz cuenta con colores llamativos y capta la atencion de los clientes</p>
                    </section>
                    <h2>¿Quienes nos conforman?</h2>
                </div>
                <section className={styles.containerPCvs}>
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                    <PCvs
                        name="Juan Sebastian Rua Chaguendo"
                        rol="Diseñador Grafico"
                        rold="Encargado de diseñador toda la interfaz"
                        text="Persona proactiva"
                        cv="/SVG/CVq.pdf"
                    />
                </section>
            </main>
            <footer className={styles.css}>

            </footer>
        </div>
    );
}
