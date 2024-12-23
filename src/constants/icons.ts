import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faInfoCircle,
  faFilePdf,
  faEnvelope,
  faPencil,
  faChessBoard,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { aboutString } from "./applications";
import { LINKEDIN_LINK_APPLICATION } from "./applications";
import { GITHUB_LINK_APPLICATION } from "./applications";
import { RESUME_PDF_APPLICATION } from "./applications";
import { DEFAULT_TEXT_EDITOR } from "./applications";
import { DesktopIcon } from "../types";
import { createIcon } from "../utils/icon";
import { Application } from "../types/application";

export const DESKTOP_ICON_HORIZONTAL_DELTA = 80;
export const DESKTOP_ICON_VERTICAL_DELTA = 80;

// TODO: Rethink icon positioning logic
export let xPos = 0;
export let yPos = 0;
export function createDefaultIcons(): DesktopIcon<Application>[] {
  xPos = 0;
  yPos = 0;
  return [
    createIcon({
      icon: {
        title: "About",
        description: "about me",
        application: {
          id: "markdown-viewer",
          params: { content: aboutString },
          singleInstance: true,
        },
        icon: faInfoCircle,
        position: generateIconPos(),
      },
      widget: {
        dimensions: { height: 304, width: 550 },
        position: { x: 400, y: 100 },
        title: "About",
      },
    }),
    createIcon({
      icon: {
        title: "Resume",
        description: "stuff I've done",
        application: RESUME_PDF_APPLICATION,
        icon: faFilePdf,
        position: generateIconPos(),
      },
      widget: {
        position: { x: 100, y: 40 },
        title: "Resume",
      },
    }),
    createIcon({
      icon: {
        title: "Contact",
        description: "email me",
        application: {
          id: "external-link",
          params: { url: "mailto:contact@robhoffmann.me" },
        },
        icon: faEnvelope,
        position: generateIconPos(),
      },
      widget: { dimensions: { height: 0, width: 0 }, position: { x: 0, y: 0 } },
    }),
    createIcon({
      icon: {
        title: "Github",
        description: "code",
        application: GITHUB_LINK_APPLICATION,
        icon: faGithub,
        position: generateIconPos(),
      },
      widget: { dimensions: { height: 0, width: 0 }, position: { x: 0, y: 0 } },
    }),
    createIcon({
      icon: {
        title: "LinkedIn",
        description: "jerbs",
        application: LINKEDIN_LINK_APPLICATION,
        icon: faLinkedin,
        position: generateIconPos(),
      },
      widget: { dimensions: { height: 0, width: 0 }, position: { x: 0, y: 0 } },
    }),
    createIcon({
      icon: {
        title: "Notes",
        description: "write some text",
        application: DEFAULT_TEXT_EDITOR,
        icon: faPencil,
        position: generateIconPos(),
      },
      widget: {
        dimensions: { height: 300, width: 500 },
        position: { x: 100, y: 100 },
      },
    }),
    createIcon({
      icon: {
        title: "Memory",
        description: "match the tiles",
        application: { id: "memory-game", params: {}, singleInstance: true },
        icon: faChessBoard,
        position: generateIconPos(),
      },
      widget: {
        dimensions: { width: 400 },
        position: { x: 400, y: 100 },
        resizable: false,
      },
    }),
    createIcon({
      icon: {
        title: "Music",
        description: "beats to recruit to",
        application: { id: "music-player", params: {}, singleInstance: true },
        icon: faMusic,
        position: generateIconPos(),
      },
      widget: {
        dimensions: { width: 300 },
        position: { x: 400, y: 100 },
        resizable: false,
      },
    }),
  ];
}

export function generateIconPos() {
  if (xPos === 0 && yPos === 0) {
    xPos += 10;
    yPos += 10;
    return { x: xPos, y: yPos };
  }

  yPos += DESKTOP_ICON_VERTICAL_DELTA;
  if (yPos > window.innerHeight - 100) {
    yPos = 10;
    xPos += 80;
  }
  return { x: xPos, y: yPos };
}

export const DEFAULT_ICONS = createDefaultIcons();