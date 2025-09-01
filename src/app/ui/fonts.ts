import { Geist, DM_Sans } from "next/font/google";
import localFont from "next/font/local"

export const roraima = localFont({src: "../fonts/Roraima.ttf"})
export const geist = Geist({ subsets: ["latin"] });
export const dmsans = DM_Sans({ subsets: ["latin"] });
