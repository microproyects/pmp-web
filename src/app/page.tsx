"use client";

import styles from "./page.module.css";
import Bola from "./components/Bola";
import React, { useEffect, useRef } from "react";

export default function Home() {
    useEffect(() => {
        const words = ["Papus", "Micro", "Proyects"];
        const changingText = document.getElementById('changingText');
        let currentIndex = 0;

        function changeText() {
            if (changingText) {
                changingText.style.opacity = '0';
                changingText.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    changingText.textContent = words[currentIndex];
                    changingText.style.opacity = '1';

                    changingText.style.transform = 'translateY(0)';
                    currentIndex = (currentIndex + 1) % words.length;
                }, 250);
            }
        }
        const intervalID = setInterval(changeText, 2000);
        return () => clearInterval(intervalID);




    });
    const userRef = useRef<HTMLInputElement>(null); 
    const passRef = useRef<HTMLInputElement>(null); 
    const exitnavg = () => {
   
        if (userRef.current && passRef.current) {
            const user = userRef.current.value; 
            const pass = passRef.current.value; 

            if (user === "admin" && pass === "pmp-web") {
                window.location.href = './home'; // Redirige a la página de inicio
            } else {
                alert("Credenciales incorrectas"); 
            }
        } else {
            console.error("Los elementos de entrada no se encontraron en el DOM.");
        }
    };
    return (
        <div className={styles.page}>
            <header>
                <h1 className={styles.h1}>PMP <span className={styles.changingText} id="changingText"></span></h1>
            </header>
            <main className={styles.main}>
                <Bola />
                <div className={styles.menu}>
                    <form onSubmit={(e) => { e.preventDefault(); exitnavg(); }}>
                        <h2>Iniciar Sesión</h2>
                        <div className={styles.inputcontainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input ref={userRef} id="user" type="text" placeholder="Usuario" required />
                        </div>
                        <div className={styles.inputcontainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input  ref={passRef} id="pass" type="password" placeholder="Contraseña" required />
                        </div>
                        <button type="submit">Entrar</button>
                        
                    </form>
                </div>
            </main>
            <footer className={styles.footer}>
                <p> Todos los derechos reservados por el CEO xd</p>
            </footer>
        </div>


    );

}
