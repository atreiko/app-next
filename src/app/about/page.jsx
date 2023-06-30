import Image from 'next/image';
import Btn from '@/components/btn/Btn';
import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://img.freepik.com/free-photo/black-white-leaf_95678-402.jpg?w=2000&t=st=1687350927~exp=1687351527~hmac=f0ccda6ab6921b12750bc7158ffc7f72dfbbecc66d24d5462988c0dfbe25ed3b'
          fill={true}
          alt='about us'
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem ipsum dolor sit</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
            voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit
            eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos.
            Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
            voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Btn url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
