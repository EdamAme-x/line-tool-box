import { calcActive } from "./calcActive";
import { Result } from "./contentType";

export const max = 13;

type ResultBox = Result & {
  showDetails: Function;
};

export default function Box(props: ResultBox) {
  if (props.square.desc === "") {
    props.square.desc = "None";
  }

  return (
    <div
      onClick={() => props.showDetails(props)}
      className="w-full opacity-[0.85] h-[75px] my-2 bg-gray-700 flex items-center rounded-lg"
    >
      <img
        src={`https://obs.line-scdn.net/${props.square.profileImageObsHash}/preview.100x100`}
        alt={props.square.name}
        width={60}
        height={60}
        className="rounded-full ml-3 opacity-[1]"
      />
      <div className="flex flex-col ml-3 text-white opacity-[1]">
        <p className="font-bold text-md">
          {props.square.name.length > max
            ? props.square.name.slice(0, max) + ".."
            : props.square.name}
        </p>
        <p className="text-xs flex justify-between w-full">
          <p>
            {props.square.desc.length > max + 2
              ? props.square.desc.slice(0, max + 2) + ".. "
              : props.square.desc}{" "}
          </p>
        </p>
        <span className="text-xs mt-1 font-bold opacity-[1]">{props.memberCount}人 ・ {"アクティブ度: " + calcActive(props.postCount, props.memberCount) + "%"}</span>
      </div>
    </div>
  );
}
