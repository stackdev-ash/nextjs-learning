import Image from "next/image";
import styles from "./page.module.css";
import wukong from "../../public/black.png"

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        CSS Modules & Image Demo
      </h1>

      <div className={styles.imageContainer}>
        <Image
          src={wukong}
          // can also do src="/black.png"
          alt="Crypto Image"
          priority
        />
      </div>

      <p className={styles.description}>
        This page demonstrates CSS Modules
        and the Next.js Image component.
      </p>
    </div>
  );
}

/* if we have image url 
<Image
  src="https://images.unsplash.com/photo-..."
  alt="Crypto"
  width={500}
  height={300}
/>

then need to add domain in next.config.ts
example 

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;*/