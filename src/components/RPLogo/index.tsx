import Image from 'next/image';

export interface RPLogoProps {
  width?: number;
  height?: number;
}

export default function RPLogo({ width = 40, height = 40 }: RPLogoProps) {
  return (
    <Image alt="RP Logo" src="/images/logo.png" width={width} height={height} />
  );
}
