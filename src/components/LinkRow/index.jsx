import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingleLink from "./SingleLink";
gsap.registerPlugin(ScrollTrigger);


export default function index({data}) {
  return (
    <div className={styles.container}>
        {data.map((item, i) => (
          <SingleLink key={i} data={item}/>
        ))}
    </div>
  );
}
