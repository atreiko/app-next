import Image from 'next/image';
import { notFound } from 'next/navigation';
import Btn from '@/components/btn/Btn';
import { items } from './data';
import styles from './index.module.css';

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Btn text='See More' url='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
