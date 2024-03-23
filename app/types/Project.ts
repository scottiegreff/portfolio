import { StaticImageData } from "next/image";
import { CodeExample } from '@/app/types/CodeExample';

export type Project = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
    techStack: string;
    codeExample: CodeExample[];
  };