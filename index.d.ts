declare type ToonheadOptions = {
  /** Seed for deterministic avatar generation */
  seed?: string;
  /** Size of the avatar in pixels */
  size?: number;
  /** Background color in hex or rgb */
  bgColor?: string;
  /** Text color in hex or rgb */
  textColor?: string;
};

/**
 * Generates a simple avatar placeholder as an SVG string
 * @param options Configuration options for the avatar
 * @returns SVG string of the avatar
 */
declare function toonhead(options?: ToonheadOptions): string;

export = toonhead;
