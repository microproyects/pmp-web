import React, { useEffect, useRef } from 'react';
import styles from "../page.module.css";

class Bola {
    x: number;
    y: number;
    radio: number;
    dirX: number;
    dirY: number;
    velocidad: number;
    color: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radio = 10;
        this.dirX = (Math.random() * 2) - 1; // Dirección aleatoria en X
        this.dirY = (Math.random() * 2) - 1; // Dirección aleatoria en Y
        this.velocidad = 5;

        this.color = `white`;
    }

    dibujar(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();   
        ctx.closePath();
    }

    mover(canvasWidth: number, canvasHeight: number) {
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        // Control de límites para que las bolas reboten
        if (this.x + this.radio > canvasWidth || this.x - this.radio < 0) {
            this.dirX *= -1; // Cambia la dirección en X
        }
        
        if (this.y + this.radio > canvasHeight || this.y - this.radio < 0) {
            this.dirY *= -1; // Cambia la dirección en Y
        }
    }
}

const CanvasComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null); // Usamos useRef para referenciar el canvas

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Verifica que el canvas no sea null
        const ctx = canvas.getContext("2d");
        if (!ctx) return; // Verifica que el contexto no sea null
        canvas.width = window.innerWidth; // Ajusta el ancho del canvas
        canvas.height = window.innerHeight; // Ajusta la altura del canvas

        const bolas: Bola[] = []; // Declara el tipo de la variable bolas

        // Crear bolas en posiciones aleatorias
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * (canvas.width - 20) + 10; // Posición aleatoria en X
            const y = Math.random() * (canvas.height - 20) + 10; // Posición aleatoria en Y
            bolas.push(new Bola(x, y));
        }

        function animar() {
            if (!canvas || !ctx) return; // Verifica que canvas y ctx no sean null
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

            bolas.forEach(bola => {
                bola.mover(canvas.width, canvas.height); // Mueve la bola
                bola.dibujar(ctx); // Dibuja la bola
            });

            // Dibuja líneas entre bolas cercanas
            for (let i = 0; i < bolas.length; i++) {
                for (let j = i + 1; j < bolas.length; j++) {
                    const dx = bolas[j].x - bolas[i].x;
                    const dy = bolas[j].y - bolas[i].y;
                    const dist = Math.sqrt(dx ** 2 + dy ** 2);
                    if (dist < 160) { // Cambia este valor para ajustar la distancia de conexión
                        ctx.beginPath();
                        ctx.moveTo(bolas[i].x, bolas[i].y);
                        ctx.lineTo(bolas[j].x, bolas[j].y);
                        ctx.strokeStyle = 'rgba(202, 202, 202, 0.63)'; // Color de la línea
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }

            requestAnimationFrame(animar); // Llama a la función de animación
        }

        animar(); // Inicia la animación

    }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

    return (
        <canvas style={{zIndex: -1, position: 'absolute', top: 0, left: 0, height: '100%',width: '100%'}} className={styles.canvasbol} ref={canvasRef}></canvas> // Asigna la referencia al canvas
    );
}

export default CanvasComponent; // Exporta el componente