import { Result } from "./contentType";

export const max = 13;

type ResultBox = Result & {
    showDetails: Function
};

export default function Box(props: ResultBox) {

  if (props.square.desc === "") {
    props.square.desc = "None"
  }

  return (
    <div 
        onClick={() => props.showDetails(props)}
        className="w-full h-[75px] my-2 bg-gray-700 flex items-center"
    >
      <img
        src={`https://obs.line-scdn.net/${props.square.profileImageObsHash}/preview.100x100`}
        alt={props.square.name}
        width={60}
        height={60}
        className="rounded-full ml-3"
      />
      <div className="flex flex-col ml-3">
        <p className="font-bold text-md">{props.square.name.length > max ? props.square.name.slice(0, max) + ".." : props.square.name}</p>
        <p className="text-xs">{props.square.desc.length > max + 3 ? props.square.desc.slice(0, max + 3) + ".." : props.square.desc}</p>
      </div>
    </div>
  );
}
