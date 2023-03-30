export interface State {
    operator: ActionType | null;
    history: string,
    display: string,
    prevOp: string;
    accumulated:string
}

export enum ActionType {
    ADD = "ADD",
    SUBTRACT = "SUBTRACT",
    EQUAL = "EQUAL",
    UPDATE = "UPDATE",
    MULTIPLY = "MULTIPLY",
    DIVIDE = "DIVIDE"
}

export interface AddAction {
    type: ActionType.ADD;
}

export interface SubtractAction {
    type: ActionType.SUBTRACT;
}

export interface EqualAction {
    type: ActionType.EQUAL;
}

export interface UpdateAction {
    type: ActionType.UPDATE;
    payload: {
        input: string,
        operation: string
      }
}

export interface MytltiplyAction {
    type: ActionType.MULTIPLY;
}
export interface DivideAction {
    type: ActionType.DIVIDE;
}


export type RootAction = SubtractAction | AddAction | EqualAction | UpdateAction | MytltiplyAction | DivideAction;