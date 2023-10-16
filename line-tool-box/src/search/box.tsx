import { Result } from "./contentType";

export default function Box(props: Result) {
    return <div>
        {props.toString()}
    </div>;
}