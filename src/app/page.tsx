        "use client";
        
        import styles from "./page.module.css";

        import React, { useEffect } from "react";

        export default function Home() {
            useEffect(() => {
            const words = ["Papus","Micro", "Proyects"];
            const changingText = document.getElementById('changingText');
            let currentIndex = 0;
            function changeText () {
                changingText.style.opacity = '0';
                changingText.style.transition = 'all 0.3s ease';
                changingText.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    changingText.textContent = words[currentIndex];
                    changingText.style.opacity = '1';
                    
                    changingText.style.transform = 'translateY(0)';
                    changingText.style.transition = 'all 0.3s ease';
                    currentIndex = (currentIndex + 1) % words.length;
                }, 200);
            }
            setInterval(changeText, 1000);
    });
            return (
                <div className={styles.page}>
                    <header>
                        <h1>PMP <span  id="changingText">Papu</span></h1>
                        <nav className={styles.navbar}>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                TaskHub
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                                Undefined
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                                Undefined
                            </a>
                        </nav>
                    </header>
                    <main className={styles.main}>
                        <div className={styles.menu}>
                            <form>
                                <h2>Iniciar Sesión</h2>
                                <div className={styles.inputcontainer}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input type="text" placeholder="Usuario" required />
                                </div>
                                <div className={styles.inputcontainer}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <input type="password" placeholder="Contraseña" required />
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
