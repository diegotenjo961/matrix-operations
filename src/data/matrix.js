import Form from "../components/Form";
import SelectMatrix from "../components/SelectMatrix";
import Instructions from "../components/Instructions";

const arrayTitles = [
    {
        id: 1,
        title: "instructions",
        content: <Instructions />
    },
    {
        id: 2,
        title: "form matrix",
        content: <Form />
    },
    {
        id: 3,
        title: "matrix",
        content: <SelectMatrix />
    }
]

export default arrayTitles;