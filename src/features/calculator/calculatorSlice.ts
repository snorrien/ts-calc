import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CalculatorState {
    value: number,
    display: string,
    prevOperation: "num" | "operator",
    history: string[],
}

const initialState: CalculatorState = {
    value: 0,
    display: "",
    prevOperation: "operator",
    history: [],
}



export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        add: state => {
            state.history = [...state.history, state.display, "+"];
            state.prevOperation = "operator";
        },
        subtraction: state => {
            state.history = [...state.history, state.display, "-"];
            state.prevOperation = "operator";
        },
        separation: state => {
            state.history = [...state.history, state.display, "/"];
            state.prevOperation = "operator";
        },
        multiplication: state => {

            state.history = [...state.history, state.display, "*"];
            state.prevOperation = "operator";
        },
        update: (state, action: PayloadAction<string>) => {
            if (state.prevOperation === "operator") {
                state.display = action.payload.slice(0,10);

            } else if (state.display.length < 10){
                state.display += action.payload;
            }
            state.prevOperation = "num";
        },
        equal: state => {
            state.history = [...state.history, state.display];
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
            const rounded = Math.round(num * 100) / 100;
            let result = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(2);
            

            state.display = result.toString();
            state.history = [];
            state.prevOperation = "num";
            console.log(state.history);

        }
    }
})

export const { add, equal, update, subtraction, separation, multiplication } = calculatorSlice.actions;

export default calculatorSlice.reducer;