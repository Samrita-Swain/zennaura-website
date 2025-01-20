import Image from "next/image";

export const LogoIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <div>
      <Image 
        src="/images/zennaura-logo.webp" 
        alt="Zennaura Logo" 
        width={90} 
        height={90} 
      />
    </div>
  );
};
