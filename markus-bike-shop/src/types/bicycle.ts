export interface Bicycle {
    id: number;
    name: string;
    frame: Frame;
    finish: Finish;
    wheels: Wheel[];
    rim: Rim;
    chain: Chain;
    price: number;
}

export interface Frame  {
    type: FrameType;
    price: number;
}


export type Finish = {
    finish: FinishType;
    price: number;
}

export interface Wheel  {
    type: WheelType;
    price: number;
}

export type Rim = {
    color: RimColor;
    price: number;
}
export interface Chain {type: ChainType, price: number};

export type ChainType = "single-speed" | "8-speed";
export type FrameType = 'full-suspension' | 'diamond'| 'step-through';
export type FinishType = "matte" | "shiny";
export type WheelType = "road" | "mountain" | "fat";
export type RimColor = "red" | "black" | "blue";