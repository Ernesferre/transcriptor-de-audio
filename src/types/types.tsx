export interface IData {
  role: string;
  start: number;
  end: number;
  content: string;
}

export interface DialogProps {
  data: IData[];
  handleStartTime: (startTime: number, endTime: number) => void;
}

export interface PlayerProps {
  initialTime: number;
  endTime: number;
}
