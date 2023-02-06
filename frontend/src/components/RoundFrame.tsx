import roundFrame from "@/assets/css/components/frame.module.css";

type Props = {
  className: string;
  children?: React.ReactNode;
};

const RoundFrame = (props: Props) => {
  return (
    <>
      {props.className === "round-frame_double" ? (
        <div className={roundFrame["round-frame_double"]}>{props.children}</div>
      ) : (
        <div className={roundFrame["round-frame_single"]}>{props.children}</div>
      )}
    </>
  );
};

export default RoundFrame;
