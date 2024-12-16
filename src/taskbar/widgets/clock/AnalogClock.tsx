import { css } from "@emotion/css";
import cx from "classnames";

const containerCss = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 140px;
  width: 140px;
  background: linear-gradient(#eee, #999);
  padding: 0;
  border: 2px solid #777;
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: top 100ms linear, opacity 300ms linear;

  &.show {
    opacity: 1;
    top: -144px;
  }
`;

const DEGREES = 360;
const TOTAL_SECONDS = 60;
const TOTAL_MINUTES = 60;
const TOTAL_HOURS = 12;
const DEG_PER_SECOND = DEGREES / TOTAL_SECONDS;
const DEG_PER_MINUTE = DEGREES / TOTAL_MINUTES;
const DEG_PER_HOUR = DEGREES / TOTAL_HOURS;

export function AnalogClock({ date, show }: { date: Date; show: boolean }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const secondsRotation = DEG_PER_SECOND * seconds;
  const minutesRotation =
    DEG_PER_MINUTE * minutes + DEG_PER_MINUTE * (seconds / TOTAL_SECONDS);
  const hoursRotation =
    DEG_PER_HOUR * hours + DEG_PER_HOUR * (minutes / TOTAL_MINUTES);

  return (
    <div className={cx(containerCss, { show })}>
      <Hand color="blue" length={5} rotate={secondsRotation} />
      <Hand color="black" length={15} rotate={minutesRotation} />
      <Hand color="red" length={30} rotate={hoursRotation} />
    </div>
  );
}

const handCss = css`
  width: 2px;
  position: absolute;
  left: 50%;
  transform-origin: bottom;
`;

interface HandProps {
  length: number;
  rotate: number;
  color: string;
}
function Hand({ length, rotate, color }: HandProps) {
  return (
    <div
      className={handCss}
      style={{
        height: `calc(50% - ${length}px)`,
        background: `linear-gradient(color-mix(in srgb, ${color} 30%, transparent), ${color})`,
        top: length,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}
