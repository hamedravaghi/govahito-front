import Link from "next/link";
import styles from "./styles.module.css";

const AnimatedLink = ({ link, text }) => {
  return (
    <div className="h-full flex items-center">
      <div className=" h-[40px] min-h-[40px]   relative  hover:text-primary-main">
        <Link
          prefetch={true}
          href={link}
          className="h-full px-3 flex gap-2  items-center justify-center cursor-pointer relative"
        >
          <div className={styles.animatedBorder} />
          <div className={styles.box}>{text}</div>
        </Link>
      </div>
    </div>
  );
};

export default AnimatedLink;
