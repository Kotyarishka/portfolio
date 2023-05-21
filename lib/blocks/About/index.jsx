import { Heading } from "@/lib/components/Heading"
import { Button } from "@/lib/components/Button"

import {HiOutlineArrowRight} from "react-icons/hi"

import styles from "./about.module.css"

import Image from "next/image"

import MeImage from "./me.png"
import MeImageBackground from "./meBackground.svg"


export const About = () => {
    return (
        <>
            <Heading text={"about/me"} />

            <div className={styles.grid}>
                <div className={styles.infos}>
                    <p>
                        Greetings, my name is Danylo aka <span>Kot</span>.
                    </p>
                    <p>
                        I am a capable full-stack developer hailing from Kyiv, Ukraine. My venture into the realm of development began in 2018, where I initially immersed myself as a programmer for gameservers in GMod. 
                    </p>
                    <p>
                        Since then, my fascination with creating user-oriented solutions has grown. As time progressed, I delved into front-end development and eventually ventured into back-end programming.
                    </p>
                </div>
                <div className={styles.photo}>
                    <Image src={MeImageBackground} alt="" />
                    <Image src={MeImage} alt="photo of cat, that represents me"/>
                </div>
            </div>
        </>
    )
}