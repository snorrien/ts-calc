import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CalculatorState {
    value: number,
    display: string,
    prevOperation: "num" | "operator" | "",
    history: string[],
}

const initialState: CalculatorState = {
    value: 0,
    display: "",
    prevOperation: "",
    history: [],
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        add: state => {
            state.history.push("+");
            state.prevOperation = "operator";
        },
        subtraction: state => {
            state.history.push("-");
            state.prevOperation = "operator";
        },
        separation: state => {
            state.history.push("/");
            state.prevOperation = "operator";
        },
        multiplication: state => {
            state.history.push("*");
            state.prevOperation = "operator";
        },
        update: (state, action: PayloadAction<string>) => {
            if (state.prevOperation === "operator") {
                state.history.push(state.display);
                state.display = action.payload
            } else {
                state.display += action.payload
            }
            state.prevOperation = "num";
        },
        equal: state => {
            let num: number = parseInt(state.history[0])
            for (let i = 1; i < state.history.length; i += 2) {

                const operator = state.history[i];
                const operand = parseInt(state.history[i + 1]);
                switch (operator) {
                    case "+":
                        num += operand;
                        break;
                    case "-":
                        num -= operand;
                        break;
                    case "*":
                        num *= operand;
                        break;
                    case "/":
                        num /= operand;
                        break;
                    default:
                        throw new Error(`Invalid operator: ${operator}`);
                }
            }
        }
    }
})

export const { add, equal, update, subtraction, separation, multiplication } = calculatorSlice.actions;

export default calculatorSlice.reducer;