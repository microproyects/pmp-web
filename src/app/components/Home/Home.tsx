import "./Home.css";
import Image from "next/image";
interface HomeProps {
    width: number;
    height: number;
    alt: string;
    src: string;
    text: string;
    title: string;
    width2: number;
    height2: number;
    alt2: string;
    src2: string;
    text2: string;
    title2: string;
}
const Home: React.FC<HomeProps> = ({ text, alt, src, width, height, title, text2, alt2, src2, width2, height2, title2 }) => {
    return (
        <section className="container">
            <div className="containercontent">
                <div className="containerimg">
                    <Image
                    className="img"
                        alt={alt}
                        src={src}
                        width={width}
                        height={height}
                    />
                </div>
                <h2 className="htext">{title}</h2>
                <p>{text}</p>
            </div>
            <div className="containercontent">
                <div className="containerimg">
                    <Image
                    className="img"
                        alt={alt2}
                        src={src2}
                        width={width2}
                        height={height2}
                    />
                </div>
                <h2 className="htext">{title2}</h2>
                <p>{text2}</p>
            </div>
        </section>
    );
}
export default Home
