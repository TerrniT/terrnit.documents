import reactThreeFiberShare from "assets/react-three-fiber.jpg";
import zustandShare from "assets/zustand.jpg";
import zustandIcon from "assets/zustand-icon.png";
import jotaiIcon from "assets/jotai-icon.png";
import reactThreeA11yShare from "assets/react-three-a11y.jpg";
import reactPostprocessingShare from "assets/react-postprocessing.jpg";
import merakiui from "../assets/merakiui.png";
import animeJs from "../assets/anime-js.png";
import tailwind from "../assets/tailwindcss.png";
import tauri from "../assets/tauri.png";
import antdesign from "../assets/ant-design.png";
import axios from "../assets/axios.png";
import chakraTemplates from "../assets/chakra-templates.png";
import chiselStrike from "../assets/chisel-strike.png";
import daisyui from "../assets/daisy-ui.png";
import emblaCarousel from "../assets/embla-carousel.png";
import emotion from "../assets/emotion.png";
import eslint from "../assets/eslint.png";
import floatui from "../assets/float-ui.png";
import flowbite from "../assets/flowbite.png";
import gltfjsx from "../assets/gltfjsx.png";
import gltfPipeline from "../assets/gltf-pipeline.png";
import headlessui from "../assets/headlessui.png";
import lerna from "../assets/lerna.png";
import swr from "../assets/swr.png";
import mantine from "../assets/mantine.png";
import kutty from "../assets/kutty.png";
import nextJs from "../assets/next-js.png";
import ohMyPosh from "../assets/oh-my-posh.png";
import reactIcons from "../assets/react-icons.png";
import pico from "../assets/pico-css.png";
import tamagui from "../assets/tamaguit.png";
import tailwindAwesome from "../assets/tailwind-awesome.png";
import vechaui from "../assets/vechaui.png";
import openPeeps from "../assets/open-peeps.png";
import zod from "../assets/zod.png";

export interface Library {
  id: number;
  title: string;
  url: string;
  github: string;
  description: string;
  image?: string;
  icon?: string;
  docs?: string;
}

const libraries: Library[] = [
  {
    id: 1,
    title: "GLTF Pipeline",
    url: "https://github.com/CesiumGS/gltf-pipeline",
    github: "https://github.com/CesiumGS/gltf-pipeline",
    description:
      "Content pipeline tools for optimizing glTF assets by Richard Lee and the Cesium team.",
    icon: gltfPipeline.src,
  },
  {
    id: 2,
    title: "Emotion",
    url: "https://5faaafd0bd0f3f0008469537--emotion.netlify.app/docs/introduction",
    github: "https://github.com/emotion-js/emotion",
    description:
      "Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles",
    icon: emotion.src,
  },
  {
    id: 3,
    title: "Mantine",
    url: "https://mantine.dev",
    github: "https://github.com/mantinedev/mantine",
    description:
      "Build fully functional accessible web applications faster than ever – Mantine includes more than 100 customizable components and 40 hooks to cover you in any situation",
    icon: mantine.src,
  },

  {
    id: 4,
    title: "Embla Carousel",
    url: "https://www.embla-carousel.com",
    github: "https://github.com/davidjerleke/embla-carousel",
    description:
      "A lightweight carousel library with fluid motion and great swipe precision",
    icon: emblaCarousel.src,
  },
  {
    id: 5,
    title: "Lerna",
    url: "https://lerna.js.org",
    github: "https://lerna.js.org",
    description:
      "Lerna is a fast modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository.",
    icon: lerna.src,
  },
  {
    id: 6,
    title: "Eslint",
    url: "https://eslint.org",
    github: "https://eslint.org/docs/latest/",
    description:
      "ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.",
    icon: eslint.src,
  },
  {
    id: 7,
    title: "Framer",
    url: "https://www.framer.com",
    github: "https://www.framer.com",
    description:
      "Create web pages with text, links, media, and animations—no code needed",
  },
  {
    id: 8,
    title: "Pico CSS",
    url: "https://picocss.com",
    github: "https://github.com/picocss/pico",
    description:
      "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled",
    icon: pico.src,
  },
  {
    id: 9,
    title: "Tamagui",
    url: "https://tamagui.dev",
    github: "https://github.com/tamagui/tamagui",
    description:
      "Universal UI kit and style system for React Native + Web - with an optimizing compiler",
    icon: tamagui.src,
  },
  {
    id: 10,
    title: "Chisel Striek",

    url: "https://docs.chiselstrike.com",
    github: "https://github.com/chiselstrike",
    description:
      "ChiselStrike is a code-driven solution that enables you to quickly build and deploy your application’s backend",
    icon: chiselStrike.src,
  },
  {
    id: 11,
    title: "Axios",
    url: "https://axios-http.com/docs/intro",
    github: "https://github.com/axios/axios",
    description:
      "Axios is a promise-based HTTP Client for node.js and the browser",
    icon: axios.src,
  },
  {
    id: 12,
    title: "Iosevka",
    url: "https://typeof.net/Iosevka/",
    github: "https://github.com/be5invis/Iosevka",
    description:
      "Iosevka is an open-source, sans-serif + slab-serif, monospace + quasi‑proportional typeface family, designed for writing code, using in terminals, and preparing technical documents",
  },
  {
    id: 13,
    title: "Postman",
    github: "https://github.com/postmanlabs",
    url: "https://web.postman.co",
    description: "An API platform for building and using APIs",
  },
  {
    id: 188,
    title: "SWR",
    url: "https://swr.vercel.app/ru",
    github: "https://github.com/vercel/swr",
    description: "SWR is a React Hooks library for data fetching.",
    icon: swr.src,
  },
  {
    id: 14,
    title: "Tailwind Awesome",
    url: "https://www.tailwindawesome.com/?price=free",
    github: "https://www.tailwindawesome.com/?price=free",
    description:
      "Tailwind Awesome is a curated list of the best Tailwind templates & UI kits in the internet",
    icon: tailwindAwesome.src,
  },
  {
    id: 15,
    title: "Flowbite",
    url: "https://flowbite.com",
    github: "https://github.com/themesberg/flowbite",
    description:
      "Flowbite is an open source collection of UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites.",
    icon: flowbite.src,
  },
  {
    id: 16,
    title: "Vecha UI",
    url: "https://www.vechaiui.com",
    github: "https://github.com/vechai/vechaiui",
    description:
      "Collection of Accessible React UI Components using TailwindCSS",
    icon: vechaui.src,
  },
  {
    id: 17,
    title: "Daisy UI",
    url: "https://daisyui.com",
    github: "https://github.com/saadeghi/daisyui",
    description: "Use Tailwind CSS but write fewer class names",
    icon: daisyui.src,
  },
  {
    id: 18,
    title: "Kutty Awesome",
    url: "https://kutty.netlify.app",
    github: "https://github.com/praveenjuge/kutty/",
    description:
      "Kutty is a tailwind plugin for building web applications with prebuilt components",
    icon: kutty.src,
  },
  {
    id: 19,
    title: "Oh My Posh!",
    url: "https://ohmyposh.dev",
    github: "https://github.com/jandedobbeleer/oh-my-posh",
    description: "A prompt theme engine for any shell.",
    icon: ohMyPosh.src,
  },
  {
    id: 20,
    title: "Open Peeps",
    url: "https://blush.design/collections/open-peeps/open-peeps",
    github: "https://blush.design/collections/open-peeps/open-peeps",
    description:
      "Hand-drawn illustrations of people of the world. Can you recreate yourself?",
    icon: openPeeps.src,
  },
  {
    id: 21,
    title: "Float UI",
    url: "https://www.floatui.com",
    github: "https://www.floatui.com",
    description:
      "Start developing with Float UI to spend less time building great websites with free UI components, and interactive elements, built using React and pure CSS, even with the utility classes from Tailwind CSS.",
    icon: floatui.src,
  },
  {
    id: 22,
    title: "Hyper UI",
    url: "https://www.hyperui.dev",
    github: "https://github.com/markmead/hyperui",
    description:
      "HyperUI is a collection of free Tailwind CSS components that can be used in your next project",
  },
  {
    id: 23,
    title: "Colorswat ",
    url: "https://colorswat.ch/vim/",
    github: "https://colorswat.ch/vim/",
    description:
      "colorswat.ch is a collection of color schemes for Vim. Developed and maintained by cocopon who loves editor theme.",
  },
  {
    id: 24,
    title: "Vim Colors",
    url: "https://vimcolors.org",
    github: "https://github.com/pablopunk/vimcolors.org",
    description: "Create your own vim color schemes. Easy AF.",
  },
  {
    id: 25,
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    github: "https://github.com/tailwindlabs/tailwindcss",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: tailwind.src,
  },
  {
    id: 26,
    title: "Chakra Templates",
    url: "https://chakra-templates.dev",
    github: "https://github.com/hauptrolle/chakra-templates",
    description:
      "A growing collection of hand-crafted & responsive Chakra UI templates ready to drop into your React project.",
    icon: chakraTemplates.src,
  },
  {
    id: 27,
    title: "Tauri",
    url: "https://tauri.app",
    github: "https://github.com/tauri-apps/tauri",
    description:
      "Build an optimized, secure, and frontend-independent application for multi-platform deployment.",
    icon: tauri.src,
  },
  {
    id: 29,
    title: "Next JS",
    url: "https://nextjs.org",
    github: "https://github.com/vercel/next.js",
    description:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    icon: nextJs.src,
  },
  {
    id: 30,
    title: "GLTF-JSX",
    url: "https://gltf.pmnd.rs",
    github: "https://github.com/pmndrs/gltfjsx",
    description:
      "A small command-line tool that turns GLTF assets into declarative and re-usable react-three-fiber JSX components",
    icon: gltfjsx.src,
  },
  {
    id: 31,
    title: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    github: "https://github.com/react-icons/react-icons",
    description:
      "Include popular icons in your React projects easily with react-icons",
    icon: reactIcons.src,
  },
  {
    id: 32,
    title: "Anime JS",
    url: "https://animejs.com/documentation/#motionPath",
    github: "https://github.com/juliangarnier/anime",
    description:
      "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects.",
    icon: animeJs.src,
  },
  {
    id: 33,
    title: "Headless UI",
    url: "https://github.com/tailwindlabs/headlessui",
    github: "https://github.com/pmndrs/react-postprocessing",
    description:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS",
    icon: headlessui.src,
  },
  {
    id: 34,
    title: "Three JS",
    url: "https://threejs.org",
    github: "https://github.com/mrdoob/three.js/",
    description:
      "The aim of the project is to create an easy to use, lightweight, cross-browser, general purpose 3D library",
  },
  {
    id: 35,
    title: "Ant Design",
    url: "https://ant.design",
    github: "https://github.com/ant-design/ant-design",
    description:
      "Help designers/developers building beautiful products more flexible and working with happiness",
    icon: antdesign.src,
  },
  {
    id: 36,
    title: "Merakiui",
    url: "https://merakiui.com",
    github: "https://github.com/merakiui/merakiui",
    description: "Custom UI Components Built with Tailwind CSS & Alpine JS",
    icon: merakiui.src,
  },
  {
    id: 37,
    title: "Zod",
    url: "https://zod.dev",
    github: "https://github.com/colinhacks/zod",
    description: "Zod - validating tool build in TS for developers",
    icon: zod.src,
  },
  {
    id: 38,
    title: "React Three Fiber",
    url: "/react-three-fiber",
    github: "https://github.com/pmndrs/react-three-fiber",
    description: "React-three-fiber is a React renderer for three.js",
    icon: reactThreeFiberShare.src,
    docs: "pmndrs/react-three-fiber/master/docs",
  },
  {
    id: 39,
    title: "React Spring",
    url: "https://react-spring.io",
    github: "https://github.com/pmndrs/react-spring",
    description:
      "Bring your components to life with simple spring animation primitives for React",
  },
  {
    id: 40,
    title: "Drei",
    url: "https://github.com/pmndrs/drei#readme",
    github: "https://github.com/pmndrs/drei",
    description:
      "Drei is a growing collection of useful helpers and abstractions for react-three-fiber",
  },
  {
    id: 41,
    title: "Zustand",
    url: "/zustand",
    github: "https://github.com/pmndrs/zustand",
    description:
      "Zustand is a small, fast and scalable bearbones state-management solution, it has a comfy api based on hooks",
    icon: zustandIcon.src,
    image: zustandShare.src,
    docs: "pmndrs/zustand/main/docs",
  },

  {
    id: 42,
    title: "Jotai",
    url: "https://jotai.org/docs/introduction",
    github: "https://github.com/pmndrs/jotai",
    description:
      "Jotai is a primitive and flexible state management library for React",
    icon: jotaiIcon.src,
  },
  {
    id: 43,
    title: "Valtio",
    url: "https://valtio.pmnd.rs",
    github: "https://github.com/pmndrs/valtio",
    description: "Valtio makes proxy-state simple for React and Vanilla",
  },
  {
    id: 44,
    title: "A11y",
    url: "/a11y",
    github: "https://github.com/pmndrs/react-three-a11y",
    description:
      "@react-three/a11y brings accessibility to webGL with easy-to-use react-three-fiber components",
    image: reactThreeA11yShare.src,
    docs: "pmndrs/react-three-a11y/main/docs",
  },
  {
    id: 45,
    title: "React Postprocessing",
    url: "/react-postprocessing",
    github: "https://github.com/pmndrs/react-postprocessing",
    description:
      "React Postprocessing is a postprocessing wrapper for @react-three/fiber",
    image: reactPostprocessingShare.src,
    docs: "CodyJasonBennett/react-postprocessing/migrate-docs/docs",
  },
];

export default libraries;
