import Image from 'next/image'
import classes from './Hero.module.css'
const Hero:React.FC =()=> {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/mahdi.jpg" 
                    alt="An image showing Mahdi" 
                    width={300} 
                    height={300}
                />
            </div>
            <h1>Hi. Im Mahdi</h1>
            <p>
                I blog about web devlopment - especially frontend library and frameworks
                like React Or NextJs
            </p>
        </section>
    )
}

export default Hero
